import { useState, useRef, useCallback, type FormEvent, type DragEvent } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, CheckCircle, AlertCircle, Image } from 'lucide-react';
import { CornerVine, MysticalStar } from '../components/decorative';
import { BannerPreview } from '../components/advertise/BannerPreview';

// Replace with your Formspree form ID
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function Advertise() {
  const [mobileImage, setMobileImage] = useState<string | null>(null);
  const [desktopImage, setDesktopImage] = useState<string | null>(null);
  const [mobileFile, setMobileFile] = useState<File | null>(null);
  const [desktopFile, setDesktopFile] = useState<File | null>(null);
  const [clickUrl, setClickUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [dragOver, setDragOver] = useState<'mobile' | 'desktop' | null>(null);

  const mobileInputRef = useRef<HTMLInputElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File, target: 'mobile' | 'desktop') => {
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    if (target === 'mobile') {
      if (mobileImage) URL.revokeObjectURL(mobileImage);
      setMobileImage(url);
      setMobileFile(file);
    } else {
      if (desktopImage) URL.revokeObjectURL(desktopImage);
      setDesktopImage(url);
      setDesktopFile(file);
    }
  }, [mobileImage, desktopImage]);

  const handleDrop = useCallback((e: DragEvent, target: 'mobile' | 'desktop') => {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file, target);
  }, [handleFile]);

  const handleDragOver = useCallback((e: DragEvent, target: 'mobile' | 'desktop') => {
    e.preventDefault();
    setDragOver(target);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!mobileFile && !desktopFile) return;

    setSubmitState('submitting');

    const formData = new FormData();
    if (mobileFile) formData.append('mobile_banner', mobileFile);
    if (desktopFile) formData.append('desktop_banner', desktopFile);
    formData.append('click_url', clickUrl);
    formData.append('contact_email', contactEmail);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSubmitState(res.ok ? 'success' : 'error');
    } catch {
      setSubmitState('error');
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='40' cy='10' r='2'/%3E%3Ccircle cx='40' cy='70' r='2'/%3E%3Ccircle cx='10' cy='40' r='2'/%3E%3Ccircle cx='70' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3Ccircle cx='60' cy='20' r='1.5'/%3E%3Ccircle cx='20' cy='60' r='1.5'/%3E%3Ccircle cx='60' cy='60' r='1.5'/%3E%3Cpath d='M40 15 Q45 25 40 35 Q35 25 40 15' fill='%23000' opacity='0.5'/%3E%3Cpath d='M40 45 Q45 55 40 65 Q35 55 40 45' fill='%23000' opacity='0.5'/%3E%3Cpath d='M15 40 Q25 45 35 40 Q25 35 15 40' fill='%23000' opacity='0.5'/%3E%3Cpath d='M45 40 Q55 45 65 40 Q55 35 45 40' fill='%23000' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Corner vines */}
      <CornerVine className="fixed top-0 left-0 w-32 md:w-48 text-amber-800/30 -rotate-0 pointer-events-none" />
      <CornerVine className="fixed top-0 right-0 w-32 md:w-48 text-amber-800/30 -scale-x-100 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">

        {/* ── Hero ── */}
        <motion.header className="text-center mb-16" {...fadeUp}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <MysticalStar className="w-5 h-5 text-amber-900/60" />
            <MysticalStar className="w-4 h-4 text-amber-900/40" />
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{
              fontFamily: "'Cinzel Decorative', Georgia, serif",
              color: '#78350F',
              textShadow: '0 2px 20px rgba(251,191,36,0.3)',
            }}
          >
            Advertise on MaybeCat
          </h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <MysticalStar className="w-4 h-4 text-amber-900/40" />
            <MysticalStar className="w-5 h-5 text-amber-900/60" />
          </div>
        </motion.header>

        {/* ── Ad Space Specs ── */}
        <motion.section
          className="mb-16 rounded-2xl p-6 md:p-10"
          style={{
            background: 'linear-gradient(145deg, rgba(254,243,199,0.85) 0%, rgba(251,191,36,0.7) 100%)',
            boxShadow: '0 8px 40px rgba(120,53,15,0.25)',
            border: '2px solid rgba(120,53,15,0.15)',
          }}
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "'Cinzel Decorative', Georgia, serif", color: '#78350F' }}
          >
            Banner Specs
          </h2>

          <div
            className="space-y-4 text-base leading-relaxed"
            style={{ fontFamily: 'Georgia, serif', color: '#78350F' }}
          >
            {/* Spec table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b-2" style={{ borderColor: 'rgba(120,53,15,0.2)' }}>
                    <th className="py-2 pr-4" style={{ color: '#92400E' }}></th>
                    <th className="py-2 pr-4" style={{ color: '#92400E' }}>Dimensions (2x retina)</th>
                    <th className="py-2" style={{ color: '#92400E' }}>Safe area</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: 'rgba(120,53,15,0.1)' }}>
                    <td className="py-3 pr-4 font-bold">Mobile</td>
                    <td className="py-3 pr-4">1280 &times; 160px</td>
                    <td className="py-3">24px padding all sides</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold">Desktop</td>
                    <td className="py-3 pr-4">2400 &times; 300px</td>
                    <td className="py-3">40px padding all sides</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg p-4" style={{ background: 'rgba(120,53,15,0.08)' }}>
                <p className="font-bold mb-1">Format</p>
                <p>PNG (transparent ok) or JPG</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: 'rgba(120,53,15,0.08)' }}>
                <p className="font-bold mb-1">Background context</p>
                <p>Dark navy (#0d1b2a), amber/gold accents</p>
              </div>
              <div className="rounded-lg p-4 md:col-span-2" style={{ background: 'rgba(120,53,15,0.08)' }}>
                <p className="font-bold mb-1">Layout</p>
                <p>Your artwork fills the left 80% of the banner. The right 20% is always the shelter cat adoption CTA.</p>
              </div>
            </div>

            {/* Banner position diagram */}
            <div className="mt-6 rounded-lg p-4 text-center" style={{ background: 'rgba(120,53,15,0.06)' }}>
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#92400E' }}>Banner Position</p>
              <div className="inline-block text-left font-mono text-xs md:text-sm" style={{ color: '#78350F' }}>
                <pre className="whitespace-pre">{`┌─────────────────────────────────────┐
│                                     │
│          (page content)             │
│                                     │
├─────────────────────────┬───────────┤
│     YOUR AD (80%)       │ Adopt CTA │
│                         │   (20%)   │
└─────────────────────────┴───────────┘`}</pre>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Upload + Live Preview ── */}
        <motion.section
          className="mb-16"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ fontFamily: "'Cinzel Decorative', Georgia, serif", color: '#78350F' }}
          >
            Preview Your Banner
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Upload zones */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile upload */}
              <UploadZone
                label="Mobile Banner"
                sublabel="1280 × 160px"
                file={mobileFile}
                dragOver={dragOver === 'mobile'}
                onDrop={(e) => handleDrop(e, 'mobile')}
                onDragOver={(e) => handleDragOver(e, 'mobile')}
                onDragLeave={() => setDragOver(null)}
                onClick={() => mobileInputRef.current?.click()}
              />
              <input
                ref={mobileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f, 'mobile');
                }}
              />

              {/* Desktop upload */}
              <UploadZone
                label="Desktop Banner"
                sublabel="2400 × 300px"
                file={desktopFile}
                dragOver={dragOver === 'desktop'}
                onDrop={(e) => handleDrop(e, 'desktop')}
                onDragOver={(e) => handleDragOver(e, 'desktop')}
                onDragLeave={() => setDragOver(null)}
                onClick={() => desktopInputRef.current?.click()}
              />
              <input
                ref={desktopInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f, 'desktop');
                }}
              />
            </div>

            {/* Live Previews */}
            {(mobileImage || desktopImage) && (
              <div
                className="rounded-2xl p-6 md:p-8 space-y-6"
                style={{
                  background: 'rgba(13,27,42,0.9)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(251,191,36,0.2)',
                }}
              >
                <h3
                  className="text-lg font-bold text-amber-300 text-center"
                  style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}
                >
                  Live Preview
                </h3>
                <BannerPreview imageUrl={mobileImage} label="Mobile (80px)" height={80} />
                <BannerPreview imageUrl={desktopImage} label="Desktop (150px)" height={150} />
              </div>
            )}

            {/* Click-through URL */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: 'linear-gradient(145deg, rgba(254,243,199,0.85) 0%, rgba(251,191,36,0.7) 100%)',
                boxShadow: '0 8px 40px rgba(120,53,15,0.25)',
                border: '2px solid rgba(120,53,15,0.15)',
              }}
            >
              <label
                className="block text-sm font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: 'Georgia, serif', color: '#78350F' }}
                htmlFor="click-url"
              >
                Click-through URL
              </label>
              <input
                id="click-url"
                type="url"
                value={clickUrl}
                onChange={(e) => setClickUrl(e.target.value)}
                placeholder="https://yoursite.com?utm_source=maybecat"
                className="w-full px-4 py-3 rounded-lg text-base outline-none transition-shadow focus:ring-2 focus:ring-amber-500"
                style={{
                  fontFamily: 'Georgia, serif',
                  background: 'rgba(255,255,255,0.7)',
                  color: '#78350F',
                  border: '1px solid rgba(120,53,15,0.2)',
                }}
              />

              <label
                className="block text-sm font-bold mb-2 mt-6 uppercase tracking-wider"
                style={{ fontFamily: 'Georgia, serif', color: '#78350F' }}
                htmlFor="contact-email"
              >
                Contact Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg text-base outline-none transition-shadow focus:ring-2 focus:ring-amber-500"
                style={{
                  fontFamily: 'Georgia, serif',
                  background: 'rgba(255,255,255,0.7)',
                  color: '#78350F',
                  border: '1px solid rgba(120,53,15,0.2)',
                }}
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              {submitState === 'success' ? (
                <div className="flex items-center justify-center gap-3 text-green-800">
                  <CheckCircle className="w-6 h-6" />
                  <p className="text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                    Received &mdash; we&apos;ll be in touch!
                  </p>
                </div>
              ) : submitState === 'error' ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-red-800">
                    <AlertCircle className="w-6 h-6" />
                    <p className="text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                      Something went wrong. Try again?
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    style={{
                      fontFamily: 'Georgia, serif',
                      background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)',
                      color: '#FEF3C7',
                      boxShadow: '0 4px 20px rgba(124,45,18,0.4)',
                    }}
                  >
                    <Send className="w-4 h-4 inline mr-2" />
                    Retry
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={submitState === 'submitting' || (!mobileFile && !desktopFile)}
                  className="px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'Georgia, serif',
                    background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)',
                    color: '#FEF3C7',
                    boxShadow: '0 4px 20px rgba(124,45,18,0.4)',
                  }}
                >
                  {submitState === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 inline mr-2" />
                      Submit Banner
                    </>
                  )}
                </button>
              )}

            </div>
          </form>
        </motion.section>

        {/* ── Footer ── */}
        <motion.footer
          className="text-center pb-8"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl" style={{ fontFamily: 'Georgia, serif', color: '#78350F' }}>
            Questions? Reach out at{' '}
            <a
              href="mailto:ads@maybecat.com"
              className="underline hover:no-underline"
              style={{ color: '#7C2D12' }}
            >
              ads@maybecat.com
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

/* ── Upload zone sub-component ── */

interface UploadZoneProps {
  label: string;
  sublabel: string;
  file: File | null;
  dragOver: boolean;
  onDrop: (e: DragEvent) => void;
  onDragOver: (e: DragEvent) => void;
  onDragLeave: () => void;
  onClick: () => void;
}

function UploadZone({ label, sublabel, file, dragOver, onDrop, onDragOver, onDragLeave, onClick }: UploadZoneProps) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onClick={onClick}
      className="rounded-2xl p-6 text-center cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
      style={{
        background: dragOver
          ? 'linear-gradient(145deg, rgba(254,243,199,0.95) 0%, rgba(251,191,36,0.85) 100%)'
          : 'linear-gradient(145deg, rgba(254,243,199,0.85) 0%, rgba(251,191,36,0.7) 100%)',
        boxShadow: dragOver
          ? '0 8px 40px rgba(120,53,15,0.4), inset 0 0 0 3px rgba(251,191,36,0.5)'
          : '0 8px 40px rgba(120,53,15,0.25)',
        border: '2px solid rgba(120,53,15,0.15)',
      }}
    >
      {file ? (
        <div className="flex items-center gap-3 justify-center">
          <Image className="w-5 h-5" style={{ color: '#78350F' }} />
          <p className="font-bold truncate max-w-[200px]" style={{ fontFamily: 'Georgia, serif', color: '#78350F' }}>
            {file.name}
          </p>
          <p className="text-xs" style={{ color: '#92400E' }}>
            (click to replace)
          </p>
        </div>
      ) : (
        <>
          <Upload className="w-8 h-8 mx-auto mb-3" style={{ color: '#78350F' }} />
          <p className="font-bold text-base" style={{ fontFamily: 'Georgia, serif', color: '#78350F' }}>
            {label}
          </p>
          <p className="text-sm mt-1" style={{ fontFamily: 'Georgia, serif', color: '#92400E' }}>
            {sublabel}
          </p>
          <p className="text-xs mt-2" style={{ color: '#B45309' }}>
            Drag &amp; drop or click to browse
          </p>
        </>
      )}
    </div>
  );
}
