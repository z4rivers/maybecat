import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCachedOrFetchCats, refreshCats, type ShelterCat } from '../services/rescueGroups';
/** Safe analytics tracking — never breaks the UX if analytics fails */
function safeTrack(event: string, data?: Record<string, string>) {
  try {
    import('@vercel/analytics').then(({ track }) => track(event, data)).catch(() => {});
  } catch { /* no-op */ }
}
import { config } from '../config';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useCatStorage } from '../hooks/useCatStorage';
import { useOracle } from '../hooks/useOracle';
import { CornerVine, CenterMandala, MysticalStar } from '../components/decorative';
import { keywords } from '../data/keywords';
import { NameInputModal } from '../components/NameInputModal';

// Prevent orphaned words by joining last 2-3 short words with non-breaking spaces
function preventOrphans(text: string): string {
  const words = text.split(' ');
  if (words.length < 3) return text;

  // Join last 2-3 words depending on their length
  const lastWords = words.slice(-3);
  const lastChunk = lastWords.join(' ');

  // If last 3 words are short enough (under ~20 chars), join them all
  if (lastChunk.length < 20) {
    return [...words.slice(0, -3), lastWords.join('\u00A0')].join(' ');
  }

  // Otherwise just join last 2 words
  const lastTwo = words.slice(-2).join('\u00A0');
  return [...words.slice(0, -2), lastTwo].join(' ');
}

export function Oracle() {
  useDocumentMeta();

  const {
    catImage,
    catName,
    shelterCat,
    setCatFromUpload,
    setCatName,
    setCatFromShelter,
    clearCat: clearCatStorage,
  } = useCatStorage();

  const {
    question,
    setQuestion,
    response,
    isThinking,
    askOracle,
    askAgain,
    clearResponse,
  } = useOracle({ isShelterCat: !!shelterCat });

  const [showNameInput, setShowNameInput] = useState(false);
  const [shelterCats, setShelterCats] = useState<ShelterCat[]>([]);
  const [loadingShelterCats, setLoadingShelterCats] = useState(true);
  const [needsBrightening, setNeedsBrightening] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carousel navigation - infinite circular rotation
  const VISIBLE_CATS = 4;

  const nextCat = useCallback(() => {
    setCarouselIndex(i => (i + 1) % (shelterCats.length + 1));
  }, [shelterCats.length]);

  const prevCat = useCallback(() => {
    setCarouselIndex(i => (i - 1 + shelterCats.length + 1) % (shelterCats.length + 1));
  }, [shelterCats.length]);

  // Build visible slots — cats + one refresh card, all in a single rotating sequence
  type CarouselSlot = { type: 'cat'; cat: ShelterCat } | { type: 'refresh' };

  const getVisibleSlots = useCallback((): CarouselSlot[] => {
    if (shelterCats.length === 0) return [];
    const totalSlots = shelterCats.length + 1; // +1 for refresh card
    const slots: CarouselSlot[] = [];
    for (let i = 0; i < Math.min(VISIBLE_CATS, totalSlots); i++) {
      const idx = (carouselIndex + i) % totalSlots;
      if (idx < shelterCats.length) {
        slots.push({ type: 'cat', cat: shelterCats[idx] });
      } else {
        slots.push({ type: 'refresh' });
      }
    }
    return slots;
  }, [shelterCats, carouselIndex]);

  // Analyze image brightness and determine if it needs enhancement
  // Skip for external URLs (CORS issues) - only analyze user uploads (data: URLs)
  const analyzeImageBrightness = useCallback((imageSrc: string) => {
    // Only analyze data URLs (user uploads) - external images have CORS issues
    if (!imageSrc.startsWith('data:')) {
      setNeedsBrightening(false);
      return;
    }

    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const sampleSize = config.brightness.sampleSize;
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

        const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
        const pixels = imageData.data;

        let totalBrightness = 0;
        const pixelCount = pixels.length / 4;

        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const brightness = (0.299 * r + 0.587 * g + 0.114 * b);
          totalBrightness += brightness;
        }

        const avgBrightness = totalBrightness / pixelCount;
        setNeedsBrightening(avgBrightness < config.brightness.threshold);
      } catch {
        // CORS or other error - skip brightness adjustment
        setNeedsBrightening(false);
      }
    };
    img.onerror = () => setNeedsBrightening(false);
    img.src = imageSrc;
  }, []);

  // Analyze brightness when cat image changes
  useEffect(() => {
    if (catImage) {
      analyzeImageBrightness(catImage);
    } else {
      setNeedsBrightening(false);
    }
  }, [catImage, analyzeImageBrightness]);

  useEffect(() => {
    async function loadCats() {
      try {
        // Uses cached cats if available (persists up to 24 hours)
        const cats = await getCachedOrFetchCats(config.shelterCats.fetchCount);
        setShelterCats(cats);
      } catch (error) {
        console.error('Failed to fetch cats:', error);
      } finally {
        setLoadingShelterCats(false);
      }
    }
    loadCats();
  }, []);

  // Manual refresh to get new batch of cats
  const handleRefreshCats = useCallback(async () => {
    setLoadingShelterCats(true);
    try {
      const cats = await refreshCats(config.shelterCats.fetchCount);
      setShelterCats(cats);
    } catch (error) {
      console.error('Failed to refresh cats:', error);
    } finally {
      setLoadingShelterCats(false);
    }
  }, []);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setCatFromUpload(base64);
        setShowNameInput(true);
        safeTrack('cat_selected', { source: 'upload' });
      };
      reader.onerror = () => {
        console.error('Failed to read image file');
      };
      reader.readAsDataURL(file);
    }
  }, [setCatFromUpload]);

  const handleNameSave = useCallback((name: string) => {
    setCatName(name);
    setShowNameInput(false);
  }, [setCatName]);

  const clearCat = useCallback(() => {
    clearCatStorage();
    clearResponse();
  }, [clearCatStorage, clearResponse]);

  const handleAskOracle = useCallback(() => {
    askOracle();
  }, [askOracle]);

  const displayName = catName || 'your cat';

  return (
    <div
      className="h-screen flex flex-col relative overflow-hidden"
      style={{
        // Hot pink to gold gradient inspired by tarot deck
        background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)',
      }}
    >
      {/* Rich floral/vine background pattern inspired by tarot cards */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='40' cy='10' r='2'/%3E%3Ccircle cx='40' cy='70' r='2'/%3E%3Ccircle cx='10' cy='40' r='2'/%3E%3Ccircle cx='70' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3Ccircle cx='60' cy='20' r='1.5'/%3E%3Ccircle cx='20' cy='60' r='1.5'/%3E%3Ccircle cx='60' cy='60' r='1.5'/%3E%3Cpath d='M40 15 Q45 25 40 35 Q35 25 40 15' fill='%23000' opacity='0.5'/%3E%3Cpath d='M40 45 Q45 55 40 65 Q35 55 40 45' fill='%23000' opacity='0.5'/%3E%3Cpath d='M15 40 Q25 45 35 40 Q25 35 15 40' fill='%23000' opacity='0.5'/%3E%3Cpath d='M45 40 Q55 45 65 40 Q55 35 45 40' fill='%23000' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex-1 flex flex-col px-4 py-3 relative z-10 overflow-auto">
        {/* Elaborate Art Nouveau corner vines - LARGE and ornate like tarot deck borders */}
        <CornerVine className="absolute top-0 left-0 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 text-amber-900/60" />
        <CornerVine className="absolute top-0 right-0 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 text-amber-900/60 -scale-x-100" />
        <CornerVine className="absolute bottom-0 left-0 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 text-amber-900/60 -scale-y-100" />
        <CornerVine className="absolute bottom-0 right-0 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 text-amber-900/60 scale-[-1]" />

        {/* Ornate mandala decorations */}
        <CenterMandala className="absolute top-1/2 left-8 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 text-fuchsia-900/30 hidden lg:block" />
        <CenterMandala className="absolute top-1/2 right-8 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 text-fuchsia-900/30 hidden lg:block" />

        {/* Drifting keyword whispers — decorative & indexable */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {keywords.map((w, i) => (
            <span
              key={i}
              className="absolute text-[10px] md:text-xs italic"
              style={{
                top: w.top,
                left: w.left,
                fontFamily: 'Georgia, serif',
                color: '#78350F',
                opacity: 0.48,
              }}
            >
              {w.text}
            </span>
          ))}
        </div>

        {/* Header */}
        <header className="text-center mb-2">
          <div className="flex items-center justify-center gap-3 mb-1">
            <MysticalStar className="w-5 h-5 md:w-6 md:h-6 text-amber-100 drop-shadow-lg" />
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
            <MysticalStar className="w-6 h-6 md:w-8 md:h-8 text-amber-100 drop-shadow-lg" />
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
            <MysticalStar className="w-5 h-5 md:w-6 md:h-6 text-amber-100 drop-shadow-lg" />
          </div>

          <h1
            onClick={clearCat}
            className="text-[64px] md:text-[84px] lg:text-[106px] font-black tracking-tight cursor-pointer hover:opacity-80 transition-opacity leading-tight"
            style={{
              fontFamily: "'Cinzel Decorative', Georgia, serif",
              color: '#78350F',
              textShadow: [
                '2px 2px 0 #FBBF24',                   // gold offset — the carnival two-tone
                '4px 4px 0 rgba(0,0,0,0.2)',            // depth layer
                '0 0 30px rgba(251,191,36,0.4)',        // warm glow
                '-1px -1px 0 rgba(0,0,0,0.15)',         // subtle edge definition
                ' 1px -1px 0 rgba(0,0,0,0.15)',
                '-1px  1px 0 rgba(0,0,0,0.15)',
                ' 1px  1px 0 rgba(0,0,0,0.15)'
              ].join(', ')
            }}
          >
            Maybe Cat
          </h1>

          <div className="flex items-center justify-center gap-2 mt-[1px]">
            <div className="h-[3px] w-14 bg-amber-800/60" />
            <span className="text-[22px] md:text-[26px]" style={{ color: '#92400E' }}>☽</span>
            <span className="text-[18px]" style={{ color: '#92400E' }}>✧</span>
            <span className="text-[22px] md:text-[26px]" style={{ color: '#92400E' }}>☾</span>
            <div className="h-[3px] w-14 bg-amber-800/60" />
          </div>
        </header>

        {/* Main content */}
        <div className="flex flex-col -mt-[7px]">
          {!catImage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center gap-4 mt-4"
            >
              {/* Choose Your Oracle label */}
              <p
                className="text-base md:text-[1.5rem] font-bold text-center px-4 py-1"
                style={{
                  fontFamily: "'Cinzel Decorative', Georgia, serif",
                  color: '#FEF3C7',
                  textShadow: [
                    '-1px -1px 0 #78350F',
                    ' 1px -1px 0 #78350F',
                    '-1px  1px 0 #78350F',
                    ' 1px  1px 0 #78350F',
                    ' 0 2px 4px rgba(0,0,0,0.3)'
                  ].join(', ')
                }}
              >
                <span className="whitespace-nowrap">✦ &nbsp;CHOOSE CAT &nbsp;✦ &nbsp;ASK QUESTION</span>
                <span className="md:hidden whitespace-nowrap"> &nbsp;✦</span>
                <br className="md:hidden" />
                <span className="md:hidden whitespace-nowrap">✦&nbsp; </span>
                <span className="hidden md:inline whitespace-nowrap"> &nbsp;✦&nbsp; </span>
                <span className="whitespace-nowrap">CAT MAY ANSWER &nbsp;✦</span>
              </p>

              {/* Horizontal layout: Your Cat (fixed) | carousel */}
              <div className="w-full flex items-center justify-center gap-2 md:gap-4 pt-6 pb-4 px-2 overflow-x-auto">
                {/* YOUR CAT - appears after cats load, LARGER than shelter cats */}
                <AnimatePresence>
                  {!loadingShelterCats && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
                      whileHover={{ scale: 1.05, y: -10, rotate: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer group flex-shrink-0"
                    >
                      <div
                        className="w-64 h-[368px] md:w-[294px] md:h-[460px] lg:w-[345px] lg:h-[518px] rounded-lg overflow-hidden relative"
                        style={{
                          background: 'linear-gradient(145deg, #FEF3C7 0%, #FBBF24 50%, #B45309 100%)',
                          boxShadow: '0 15px 50px rgba(0,0,0,0.45), inset 0 0 40px rgba(255,255,255,0.4), 0 0 20px rgba(251,191,36,0.3)',
                          border: '4px solid #78350F',
                        }}
                      >
                        <div
                          className="absolute inset-2 rounded"
                          style={{
                            border: '2px solid #92400E',
                            boxShadow: 'inset 0 0 15px rgba(120,53,15,0.2)'
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <div
                            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-all"
                            style={{
                              border: '3px dashed #78350F',
                              background: 'radial-gradient(circle, rgba(254,243,199,0.5) 0%, transparent 70%)'
                            }}
                          >
                            <Camera className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-amber-800" />
                          </div>
                          <p
                            className="font-black text-center text-xl md:text-2xl lg:text-3xl"
                            style={{
                              fontFamily: "'Cinzel Decorative', Georgia, serif",
                              color: '#78350F',
                              textShadow: '1px 1px 0 rgba(254,243,199,0.5)'
                            }}
                          >
                            Your Cat
                          </p>
                          <p className="text-amber-800 text-sm md:text-base mt-2 text-center font-semibold">tap to upload</p>
                        </div>
                        <div className="absolute top-3 left-3 text-amber-800 text-base">❧</div>
                        <div className="absolute top-3 right-3 text-amber-800 text-base scale-x-[-1]">❧</div>
                        <div className="absolute bottom-3 left-3 text-amber-800 text-base scale-y-[-1]">❧</div>
                        <div className="absolute bottom-3 right-3 text-amber-800 text-base scale-[-1]">❧</div>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Left arrow - nano-banana style */}
                <button
                  onClick={prevCat}
                  disabled={loadingShelterCats}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 transition-all hover:scale-110 active:scale-95 disabled:opacity-40"
                  style={{
                    background: 'linear-gradient(145deg, #FEF3C7 0%, #FBBF24 100%)',
                    borderRadius: '50%',
                    border: '2px solid #92400E',
                    boxShadow: '0 3px 8px rgba(120,53,15,0.3), inset 0 1px 2px rgba(255,255,255,0.5)',
                  }}
                  aria-label="Previous cats"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-amber-900" />
                </button>

                {/* Shelter cats - circular carousel with 4 BIG cards */}
                <div className="flex items-end gap-3">
                  {loadingShelterCats ? (
                    <div className="flex items-center gap-3 justify-center py-8">
                      <Sparkles className="w-6 h-6 text-amber-100 animate-pulse" />
                      <p className="text-amber-100 text-xl italic" style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}>Summoning cats...</p>
                      <Sparkles className="w-6 h-6 text-amber-100 animate-pulse" />
                    </div>
                  ) : (
                    <AnimatePresence mode="popLayout">
                      {getVisibleSlots().map((slot, i) => {
                        const cardColors = [
                          { bg: 'linear-gradient(145deg, #EC4899 0%, #BE185D 50%, #831843 100%)', border: '#500724', accent: '#FDF2F8' },
                          { bg: 'linear-gradient(145deg, #10B981 0%, #047857 50%, #064E3B 100%)', border: '#022C22', accent: '#D1FAE5' },
                          { bg: 'linear-gradient(145deg, #8B5CF6 0%, #6D28D9 50%, #4C1D95 100%)', border: '#2E1065', accent: '#EDE9FE' },
                          { bg: 'linear-gradient(145deg, #F472B6 0%, #DB2777 50%, #9D174D 100%)', border: '#500724', accent: '#FCE7F3' },
                          { bg: 'linear-gradient(145deg, #FB923C 0%, #EA580C 50%, #9A3412 100%)', border: '#431407', accent: '#FFEDD5' },
                        ];
                        const color = cardColors[i % cardColors.length];
                        const rotations = [-1.5, 0.8, -0.8, 1.5];
                        const rotation = rotations[i % rotations.length];

                        if (slot.type === 'refresh') {
                          return (
                            <motion.button
                              key="refresh-card"
                              layout
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{
                                layout: { type: 'spring', stiffness: 200, damping: 25 },
                                opacity: { duration: 0.2 }
                              }}
                              whileHover={{ scale: 1.06, y: -10, rotate: 0, zIndex: 10 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => { handleRefreshCats(); setCarouselIndex(0); }}
                              disabled={loadingShelterCats}
                              style={{ rotate: rotation }}
                              className="relative flex-shrink-0 disabled:opacity-50"
                            >
                              <div
                                className="w-52 h-[294px] md:w-60 md:h-[368px] lg:w-64 lg:h-[391px] rounded-lg overflow-hidden relative"
                                style={{
                                  boxShadow: '0 15px 50px rgba(0,0,0,0.45), 0 0 20px rgba(147,51,234,0.3)',
                                  border: '4px solid #2E1065',
                                }}
                              >
                                <img
                                  src="/refresh-cats-card.jpg"
                                  alt="Select a New Batch of Cats"
                                  className={`w-full h-full object-cover ${loadingShelterCats ? 'animate-pulse' : ''}`}
                                />
                              </div>
                            </motion.button>
                          );
                        }

                        const cat = slot.cat;
                        return (
                          <motion.button
                            key={cat.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                              layout: { type: 'spring', stiffness: 200, damping: 25 },
                              opacity: { duration: 0.2 }
                            }}
                            whileHover={{ scale: 1.06, y: -10, rotate: 0, zIndex: 10 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { setCatFromShelter(cat); safeTrack('cat_selected', { source: 'shelter', name: cat.name }); }}
                            style={{ rotate: rotation }}
                            className="relative flex-shrink-0"
                          >
                            <div
                              className="w-52 h-[294px] md:w-60 md:h-[368px] lg:w-64 lg:h-[391px] rounded-lg overflow-hidden relative"
                              style={{
                                background: color.bg,
                                boxShadow: '0 15px 50px rgba(0,0,0,0.45), inset 0 0 40px rgba(255,255,255,0.15)',
                                border: `4px solid ${color.border}`,
                              }}
                            >
                              <div
                                className="absolute inset-2 rounded"
                                style={{
                                  border: `2px solid ${color.accent}40`,
                                  boxShadow: `inset 0 0 15px ${color.accent}20`
                                }}
                              />
                              <div
                                className="absolute inset-4 top-4 bottom-14 md:bottom-16 rounded overflow-hidden"
                                style={{
                                  border: `3px solid ${color.accent}60`,
                                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                }}
                              >
                                <img src={cat.photo} alt={cat.name} className="w-full h-full object-cover" />
                              </div>
                              <div
                                className="absolute bottom-0 left-0 right-0 py-3 md:py-4 text-center"
                                style={{
                                  backgroundColor: color.border,
                                  boxShadow: '0 -4px 12px rgba(0,0,0,0.3)'
                                }}
                              >
                                <p
                                  className="font-black text-base md:text-lg lg:text-xl truncate px-3"
                                  style={{
                                    fontFamily: "'Cinzel Decorative', Georgia, serif",
                                    color: color.accent
                                  }}
                                >
                                  {cat.name}
                                </p>
                                {cat.location && (
                                  <p
                                    className="text-xs md:text-sm truncate px-3 -mt-1"
                                    style={{ color: `${color.accent}90` }}
                                  >
                                    {cat.location.replace(', ', ' ')}
                                  </p>
                                )}
                              </div>
                              <div className="absolute top-3 left-3 text-sm" style={{ color: `${color.accent}70` }}>✦</div>
                              <div className="absolute top-3 right-3 text-sm" style={{ color: `${color.accent}70` }}>✦</div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </AnimatePresence>
                  )}
                </div>

                {/* Right arrow - nano-banana style */}
                <button
                  onClick={nextCat}
                  disabled={loadingShelterCats}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 transition-all hover:scale-110 active:scale-95 disabled:opacity-40"
                  style={{
                    background: 'linear-gradient(145deg, #FEF3C7 0%, #FBBF24 100%)',
                    borderRadius: '50%',
                    border: '2px solid #92400E',
                    boxShadow: '0 3px 8px rgba(120,53,15,0.3), inset 0 1px 2px rgba(255,255,255,0.5)',
                  }}
                  aria-label="Next cats"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-amber-900" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex flex-col items-center">
              {/* Oracle Reading Card - wider to prevent vertical expansion */}
              <div
                className="w-full max-w-4xl relative mt-[19px]"
                style={{
                  background: 'linear-gradient(145deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  boxShadow: '0 20px 60px rgba(120,53,15,0.3), inset 0 0 40px rgba(255,255,255,0.2)',
                  border: '4px solid #92400E',
                }}
              >
                <div className="absolute inset-4 border-2 border-amber-700/40 rounded-lg pointer-events-none" />
                <div className="absolute top-3 left-3 text-amber-700/50">✦</div>
                <div className="absolute top-3 right-3 text-amber-700/50">✦</div>
                <div className="absolute bottom-3 left-3 text-amber-700/50">✦</div>
                <div className="absolute bottom-3 right-3 text-amber-700/50">✦</div>

                <div className="relative mx-auto mb-2" style={{ maxWidth: '380px' }}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      border: '4px solid #92400E',
                      boxShadow: '0 12px 30px rgba(120,53,15,0.4)',
                      padding: '6px',
                      backgroundColor: '#FFFBEB'
                    }}
                  >
                    <img
                      src={catImage}
                      alt={displayName}
                      className="w-full aspect-square object-cover rounded-lg"
                      style={needsBrightening ? { filter: config.brightness.enhanceFilter } : undefined}
                    />
                  </div>
                  
                  {/* Adopt Me Badge - Shelter Cats Only */}
                  {shelterCat?.adoptionUrl && (
                    <a
                      href={shelterCat.adoptionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => safeTrack('adoption_clicked', { name: shelterCat.name })}
                      className="absolute -top-3 -right-3 z-20 w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center rotate-12 hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer"
                      title={`Adopt ${shelterCat.name}`}
                      style={{
                        background: 'linear-gradient(145deg, #EC4899 0%, #BE185D 50%, #831843 100%)',
                        border: '3px solid #FBBF24',
                        boxShadow: '0 4px 15px rgba(236,72,153,0.5), 0 2px 6px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.3)',
                      }}
                    >
                      <span
                        className="font-bold text-[11px] md:text-xs leading-none text-center block pt-[2px]"
                        style={{
                          color: '#FEF3C7',
                          fontFamily: "'Cinzel Decorative', Georgia, serif",
                          textShadow: '0 1px 2px rgba(0,0,0,0.4)',
                        }}
                      >
                        Adopt<br />Me!
                      </span>
                    </a>
                  )}

                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-2 bg-amber-800 rounded-full shadow-lg">
                    <p className="text-amber-100 font-bold text-base md:text-lg whitespace-nowrap" style={{ fontFamily: "Georgia, serif" }}>
                      {displayName}
                    </p>
                  </div>
                </div>


                {/* Answer area - fixed min-height for 2 lines to prevent layout jump */}
                <div className="min-h-[80px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!response && !isThinking && (
                      <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} className="text-center text-amber-700/50">
                        <span className="text-2xl">✧ ☽ ✧</span>
                      </motion.div>
                    )}

                    {isThinking && (
                      <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-2">
                        <Sparkles className="w-8 h-8 mx-auto mb-2 text-amber-700 animate-pulse" />
                        <p className="text-amber-800 text-base italic" style={{ fontFamily: "Georgia, serif" }}>
                          ✧ {displayName} contemplates... ✧
                        </p>
                      </motion.div>
                    )}

                    {response && !isThinking && (
                      <motion.div key="response" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-2">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-amber-950 leading-relaxed font-bold px-4" style={{ fontFamily: "Georgia, serif", textWrap: 'pretty' }}>
                          "{preventOrphans(response.text)}"
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              <button onClick={clearCat} className="absolute top-2 right-16 md:right-2 z-30 p-2 bg-amber-900/80 rounded-full text-amber-100 hover:bg-amber-900 transition-colors shadow-lg">
                <X className="w-5 h-5" />
              </button>

              {/* Question input - INSIDE page 2 for proper centering */}
              {!showNameInput && (
                <div className="w-full max-w-4xl mt-2 space-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => { setQuestion(e.target.value); if (response) clearResponse(); }}
                      onKeyDown={(e) => { if (e.key === 'Enter' && question.trim()) handleAskOracle(); }}
                      placeholder="I may know. I may care. I may answer."
                      className="w-full px-5 py-2 rounded-xl bg-amber-50 border-2 border-amber-700 text-amber-900 placeholder-amber-600/60 focus:outline-none focus:border-amber-800 focus:ring-2 focus:ring-amber-500/30 text-lg md:text-xl"
                      style={{ fontFamily: "Georgia, serif", boxShadow: 'inset 0 2px 8px rgba(120,53,15,0.1)' }}
                    />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-amber-600/40 text-xl">✧</div>
                  </div>

                  <motion.button
                    onClick={response ? askAgain : handleAskOracle}
                    disabled={!question.trim() || isThinking}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 rounded-xl text-white font-bold text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)', boxShadow: '0 4px 20px rgba(124,45,18,0.4)', fontFamily: "Georgia, serif" }}
                  >
                    {response ? `✦ Ask ${displayName} Again ✦` : `✦ Ask ${displayName} ✦`}
                  </motion.button>


                </div>
              )}
            </motion.div>
          )}


          {/* Name input modal */}
          <AnimatePresence>
            {showNameInput && <NameInputModal onSave={handleNameSave} />}
          </AnimatePresence>

        </div>

      </div>



      {/* SEO Footer */}
      <footer className="w-full text-center relative z-10 select-text pb-40 pt-2 px-4">
        <div className="text-xs md:text-sm leading-relaxed" style={{ color: '#78350F', fontFamily: 'Georgia, serif' }}>
          <p className="font-bold">MaybeCat&trade; &mdash; questionable life advice from adoptable shelter cats. Answers that raise questions. Full cattitude.</p>
        </div>
      </footer>

      {/* FIXED PURRfoot Sponsor Banner - Always at bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center shadow-2xl"
        style={{
          backgroundColor: '#0d1b2a',
          height: '150px',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.5)'
        }}
      >
        {/* Main ad space - left 4/5 */}
        <div className="flex-1" />

        {/* Adoption CTA - right 1/5 */}
        <AnimatePresence>
          {shelterCat && catImage && (
            <motion.a
              href={shelterCat.adoptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => safeTrack('adoption_clicked', { name: shelterCat.name, location: shelterCat.location })}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.02 }}
              className="w-1/5 min-w-[180px] h-full flex flex-col items-center justify-center px-4 text-center transition-colors hover:bg-amber-900/20"
              style={{
                borderLeft: '1px solid rgba(251,191,36,0.3)',
              }}
            >
              <Heart className="w-6 h-6 text-amber-400 mb-2" />
              <p
                className="text-amber-100 font-bold text-sm leading-tight"
                style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}
              >
                Adopt {shelterCat.name}
              </p>
{shelterCat.location && (
                <p className="text-amber-400/80 text-xs mt-1">{shelterCat.location}</p>
              )}
              <p className="text-amber-500/60 text-[10px] mt-2 uppercase tracking-wider">Click to visit</p>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
