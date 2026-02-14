import { useState, useCallback } from 'react';
import { config } from '../config';
import { renderShareCard, type ShareCardData } from '../lib/renderShareCard';

/** Safe analytics tracking — never breaks the UX if analytics fails */
function safeTrack(event: string, data?: Record<string, string>) {
  try {
    import('@vercel/analytics').then(({ track }) => track(event, data)).catch(() => {});
  } catch { /* no-op */ }
}

/**
 * Load an image URL into a square-cropped data URL.
 * Solves CORS and sizing in one step.
 */
async function prepareSquareImage(url: string, size: number): Promise<string> {
  function loadImg(src: string, cors?: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const el = new Image();
      if (cors) el.crossOrigin = cors;
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = src;
    });
  }

  function cropAndExport(img: HTMLImageElement): string {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const { naturalWidth: w, naturalHeight: h } = img;
    const cropSize = Math.min(w, h);
    ctx.drawImage(img, (w - cropSize) / 2, (h - cropSize) / 2, cropSize, cropSize, 0, 0, size, size);
    return canvas.toDataURL('image/jpeg', 0.92);
  }

  if (url.startsWith('data:')) {
    return cropAndExport(await loadImg(url));
  }

  try {
    return cropAndExport(await loadImg(url, 'anonymous'));
  } catch {
    // CORS load failed
  }

  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    try {
      return cropAndExport(await loadImg(blobUrl));
    } finally {
      URL.revokeObjectURL(blobUrl);
    }
  } catch {
    // fetch also failed
  }

  return url;
}

/** True for actual mobile devices (phones/tablets), not desktop with touch screens */
function isMobileDevice(): boolean {
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry/i.test(navigator.userAgent);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export interface UseShareCardReturn {
  isGenerating: boolean;
  handleShare: (data: ShareCardData) => Promise<void>;
}

export function useShareCard(): UseShareCardReturn {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleShare = useCallback(async (data: ShareCardData) => {
    if (isGenerating) return;

    setIsGenerating(true);
    safeTrack('share_started');

    try {
      // Pre-crop cat image to square data URL (420px for canvas)
      const croppedDataUrl = await prepareSquareImage(data.catImage, 460);

      // Wait for Cinzel Decorative font if not yet loaded
      const fontFace = '"Cinzel Decorative"';
      if (!document.fonts.check(`900 120px ${fontFace}`)) {
        try {
          await Promise.race([
            document.fonts.load(`900 120px ${fontFace}`),
            new Promise(resolve => setTimeout(resolve, config.shareCard.fontWaitTimeout)),
          ]);
        } catch {
          // Georgia fallback is fine
        }
      }

      // Render via Canvas API
      const blob = await renderShareCard({ ...data, catImage: croppedDataUrl });

      // MOBILE: Native Web Share API — works great with Instagram/social apps
      // DESKTOP: Download file — industry standard (Canva, Kapwing, etc. all do this)
      // Instagram's Windows desktop app handles Web Share API images terribly
      // (tiny window, broken crop dialog). Download + manual upload is the correct path.
      if (isMobileDevice()) {
        const file = new File([blob], config.shareCard.filename, { type: 'image/png' });
        if (navigator.canShare?.({ files: [file] })) {
          try {
            await navigator.share({ files: [file] });
            safeTrack('share_completed', { method: 'native' });
            return;
          } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
              return; // User cancelled — not an error
            }
            // Fall through to download
          }
        }
      }

      // Desktop (or mobile fallback): download the file
      downloadBlob(blob, config.shareCard.filename);
      safeTrack('share_completed', { method: 'download' });
    } catch (err) {
      console.error('Share card generation failed:', err);
      safeTrack('share_error', {
        message: err instanceof Error ? err.message : 'unknown',
      });
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { isGenerating, handleShare };
}
