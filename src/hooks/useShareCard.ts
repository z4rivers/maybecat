import { useRef, useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { config } from '../config';

/** Safe analytics tracking — never breaks the UX if analytics fails */
function safeTrack(event: string, data?: Record<string, string>) {
  try {
    import('@vercel/analytics').then(({ track }) => track(event, data)).catch(() => {});
  } catch { /* no-op */ }
}

/** Convert an external image URL to a data URL to bypass CORS in html2canvas */
async function imageToDataUrl(url: string): Promise<string> {
  if (url.startsWith('data:')) return url;
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return url; // fallback to original if fetch fails
  }
}

/** Wait for every <img> inside an element to finish loading */
function waitForImages(el: HTMLElement, timeout = 5000): Promise<void> {
  const imgs = el.querySelectorAll('img');
  const promises = Array.from(imgs).map(img => {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise<void>(resolve => {
      img.onload = () => resolve();
      img.onerror = () => resolve(); // don't block capture on broken image
    });
  });
  return Promise.race([
    Promise.all(promises).then(() => {}),
    new Promise<void>(resolve => setTimeout(resolve, timeout)),
  ]);
}

export interface UseShareCardReturn {
  shareCardRef: React.RefObject<HTMLDivElement | null>;
  isGenerating: boolean;
  /** True only while the ShareCard needs to be in the DOM (during capture) */
  shouldRenderCard: boolean;
  /** Data URL version of the cat image, safe for html2canvas */
  shareCatImage: string | null;
  handleShare: (catImage: string) => Promise<void>;
}

export function useShareCard(): UseShareCardReturn {
  const shareCardRef = useRef<HTMLDivElement | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [shouldRenderCard, setShouldRenderCard] = useState(false);
  const [shareCatImage, setShareCatImage] = useState<string | null>(null);

  const handleShare = useCallback(async (catImage: string) => {
    if (isGenerating) return;

    setIsGenerating(true);
    safeTrack('share_started');

    // Convert external URLs to data URLs before rendering the card
    const dataUrl = await imageToDataUrl(catImage);
    setShareCatImage(dataUrl);
    setShouldRenderCard(true);

    try {
      // Wait for Cinzel Decorative font if not yet loaded
      const fontFace = "'Cinzel Decorative'";
      if (!document.fonts.check(`bold 56px ${fontFace}`)) {
        try {
          await Promise.race([
            document.fonts.load(`bold 56px ${fontFace}`),
            new Promise(resolve => setTimeout(resolve, config.shareCard.fontWaitTimeout)),
          ]);
        } catch {
          // Font load failed — Georgia fallback is fine
        }
      }

      // Wait for React to render the card + browser to paint it
      await new Promise<void>(resolve => {
        requestAnimationFrame(() => setTimeout(resolve, 150));
      });

      const el = shareCardRef.current;
      if (!el) throw new Error('ShareCard ref not available after render');

      // Wait for the cat photo (and any other images) to fully load
      await waitForImages(el);

      const { width, height } = config.shareCard;
      const canvas = await html2canvas(el, {
        scale: 1,
        width,
        height,
        windowWidth: width,
        windowHeight: height,
        useCORS: true,
        logging: false,
      });

      const blob = await new Promise<Blob | null>(resolve =>
        canvas.toBlob(resolve, 'image/png')
      );

      if (!blob) throw new Error('canvas.toBlob returned null');

      const file = new File([blob], config.shareCard.filename, { type: 'image/png' });

      // Try native share (mobile)
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file] });
          safeTrack('share_completed', { method: 'native' });
        } catch (err) {
          // User cancelled — not an error
          if (err instanceof Error && err.name === 'AbortError') {
            // Silent cancel
          } else {
            throw err;
          }
        }
      } else {
        // Desktop fallback: download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = config.shareCard.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        safeTrack('share_completed', { method: 'download' });
      }
    } catch (err) {
      console.error('Share card generation failed:', err);
      safeTrack('share_error', {
        message: err instanceof Error ? err.message : 'unknown',
      });
    } finally {
      setShouldRenderCard(false);
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { shareCardRef, isGenerating, shouldRenderCard, shareCatImage, handleShare };
}
