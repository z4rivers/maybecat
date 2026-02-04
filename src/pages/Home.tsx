import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Camera } from 'lucide-react';
import { fetchAdoptableCats, type ShelterCat } from '../services/rescueGroups';
import { config } from '../config';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useCatStorage } from '../hooks/useCatStorage';
import { useOracle } from '../hooks/useOracle';
import { CornerVine, CenterMandala, MysticalStar } from '../components/decorative';
import { NameInputModal } from '../components/NameInputModal';

const EXAMPLE_QUESTIONS = [
  "Should I quit my job?",
  "Am I making a mistake?",
  "What do they really think?",
  "Is this the right decision?",
];

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
  } = useOracle();

  const [showNameInput, setShowNameInput] = useState(false);
  const [shelterCats, setShelterCats] = useState<ShelterCat[]>([]);
  const [loadingShelterCats, setLoadingShelterCats] = useState(true);
  const [needsBrightening, setNeedsBrightening] = useState(false);
  const [hashtagsCopied, setHashtagsCopied] = useState(false);
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  // Analyze image brightness and determine if it needs enhancement
  const analyzeImageBrightness = useCallback((imageSrc: string) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Sample at smaller size for performance
      const sampleSize = config.brightness.sampleSize;
      canvas.width = sampleSize;
      canvas.height = sampleSize;
      ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

      const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
      const pixels = imageData.data;

      let totalBrightness = 0;
      const pixelCount = pixels.length / 4;

      for (let i = 0; i < pixels.length; i += 4) {
        // Calculate perceived brightness (human eye weighted)
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b);
        totalBrightness += brightness;
      }

      const avgBrightness = totalBrightness / pixelCount;
      // Only brighten truly dark images - avoids washing out mixed-lighting photos
      setNeedsBrightening(avgBrightness < config.brightness.threshold);
    };
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
        const cats = await fetchAdoptableCats(config.shelterCats.fetchCount);
        setShelterCats(cats);
      } catch (error) {
        console.error('Failed to fetch cats:', error);
      } finally {
        setLoadingShelterCats(false);
      }
    }
    loadCats();
  }, []);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setCatFromUpload(base64);
        setShowNameInput(true);
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

  const downloadImage = useCallback(async () => {
    if (!responseRef.current) return;
    const { default: html2canvas } = await import('html2canvas');
    const canvas = await html2canvas(responseRef.current, {
      backgroundColor: config.export.backgroundColor,
      scale: config.export.scale,
    });
    const link = document.createElement('a');
    link.download = `maybecat-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  const shareNative = useCallback(async () => {
    if (!responseRef.current) return;
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(responseRef.current, {
        backgroundColor: config.export.backgroundColor,
        scale: config.export.scale,
      });
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], 'maybecat.png', { type: 'image/png' });
        if (navigator.share && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'Maybe Cat Has Spoken',
            text: 'I asked my cat for wisdom. Maybe they answered.',
          });
        } else {
          downloadImage();
        }
      }, 'image/png');
    } catch {
      downloadImage();
    }
  }, [downloadImage]);

  const copyHashtags = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('#AskMaybeCat #CatWisdom');
      setHashtagsCopied(true);
      setTimeout(() => setHashtagsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy hashtags:', err);
    }
  }, []);

  const handleAskOracle = useCallback(() => {
    askOracle();
    setHasAskedQuestion(true);
  }, [askOracle]);

  const handleExampleClick = useCallback((exampleQuestion: string) => {
    setQuestion(exampleQuestion);
  }, [setQuestion]);

  const displayName = catName || 'Maybe Cat';

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
        
        {/* Header */}
        <header className="text-center mb-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <MysticalStar className="w-5 h-5 md:w-6 md:h-6 text-amber-100 drop-shadow-lg" />
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
            <MysticalStar className="w-6 h-6 md:w-8 md:h-8 text-amber-100 drop-shadow-lg" />
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
            <MysticalStar className="w-5 h-5 md:w-6 md:h-6 text-amber-100 drop-shadow-lg" />
          </div>

          <h1
            onClick={clearCat}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Cinzel Decorative', Georgia, serif",
              color: '#78350F',
              textShadow: '2px 2px 0 #FBBF24, 4px 4px 0 rgba(0,0,0,0.2), 0 0 30px rgba(251,191,36,0.4)'
            }}
          >
            Maybe Cat
          </h1>

          <p
            className="mt-2 text-lg md:text-2xl lg:text-3xl italic font-semibold"
            style={{
              fontFamily: "Georgia, serif",
              color: '#451A03',
              textShadow: '1px 1px 0 rgba(251,191,36,0.6)'
            }}
          >
            Your cat might have wisdom.
          </p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-0.5 w-12 bg-amber-800/60" />
            <span className="text-amber-800 text-xl md:text-2xl">☽</span>
            <span className="text-amber-800 text-base">✧</span>
            <span className="text-amber-800 text-xl md:text-2xl">☾</span>
            <div className="h-0.5 w-12 bg-amber-800/60" />
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {!catImage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center gap-2 -mt-8"
            >
              {/* Choose Your Oracle label */}
              <p 
                className="text-base md:text-2xl font-bold text-center px-4 py-1 whitespace-nowrap"
                style={{ 
                  fontFamily: "'Cinzel Decorative', Georgia, serif",
                  color: '#FEF3C7',
                  textShadow: '2px 2px 0 #92400E'
                }}
              >
                ✦ CHOOSE CAT ✦ ASK QUESTION ✦
              </p>

              {/* Scroll container - constrained width enables scroll within overflow-hidden parent */}
              <div className="w-full max-w-full overflow-x-auto pt-12 pb-4">
                {/* All cats in one row - horizontal scroll on mobile, wrap on desktop */}
                <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-end gap-4 md:gap-6 lg:gap-8 px-4 min-w-max md:min-w-0">
                {/* YOUR CAT - larger than the others, tarot card style */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10, rotate: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer group flex-shrink-0"
                >
                  <div
                    className="w-52 h-80 md:w-64 md:h-[400px] lg:w-72 lg:h-[440px] rounded-lg overflow-hidden relative"
                    style={{
                      background: 'linear-gradient(145deg, #FEF3C7 0%, #FBBF24 50%, #B45309 100%)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 60px rgba(255,255,255,0.4), 0 0 30px rgba(251,191,36,0.3)',
                      border: '5px solid #78350F',
                      borderRadius: '12px',
                    }}
                  >
                    {/* Inner ornate frame */}
                    <div 
                      className="absolute inset-3 rounded-lg"
                      style={{ 
                        border: '3px solid #92400E',
                        boxShadow: 'inset 0 0 20px rgba(120,53,15,0.2)'
                      }} 
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div 
                        className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all"
                        style={{
                          border: '4px dashed #78350F',
                          background: 'radial-gradient(circle, rgba(254,243,199,0.5) 0%, transparent 70%)'
                        }}
                      >
                        <Camera className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 text-amber-800" />
                      </div>
                      <p 
                        className="font-black text-center text-2xl md:text-3xl lg:text-4xl" 
                        style={{ 
                          fontFamily: "'Cinzel Decorative', Georgia, serif",
                          color: '#78350F',
                          textShadow: '1px 1px 0 rgba(254,243,199,0.5)'
                        }}
                      >
                        Your Cat
                      </p>
                      <p className="text-amber-800 text-base md:text-lg mt-2 text-center font-semibold">tap to upload</p>
                    </div>
                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 text-amber-800 text-xl">❧</div>
                    <div className="absolute top-4 right-4 text-amber-800 text-xl scale-x-[-1]">❧</div>
                    <div className="absolute bottom-4 left-4 text-amber-800 text-xl scale-y-[-1]">❧</div>
                    <div className="absolute bottom-4 right-4 text-amber-800 text-xl scale-[-1]">❧</div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </motion.div>

                {/* Shelter cats - RICH jewel tone tarot cards */}
                {loadingShelterCats ? (
                  <p className="text-amber-100 text-2xl italic" style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}>Summoning cats...</p>
                ) : (
                  shelterCats.map((cat, i) => {
                    // Rich jewel tones inspired by tarot deck
                    const cardColors = [
                      { bg: 'linear-gradient(145deg, #EC4899 0%, #BE185D 50%, #831843 100%)', border: '#500724', accent: '#FDF2F8' }, // Hot pink/magenta
                      { bg: 'linear-gradient(145deg, #10B981 0%, #047857 50%, #064E3B 100%)', border: '#022C22', accent: '#D1FAE5' }, // Emerald
                      { bg: 'linear-gradient(145deg, #8B5CF6 0%, #6D28D9 50%, #4C1D95 100%)', border: '#2E1065', accent: '#EDE9FE' }, // Purple
                      { bg: 'linear-gradient(145deg, #F472B6 0%, #DB2777 50%, #9D174D 100%)', border: '#500724', accent: '#FCE7F3' }, // Pink
                      { bg: 'linear-gradient(145deg, #FB923C 0%, #EA580C 50%, #9A3412 100%)', border: '#431407', accent: '#FFEDD5' }, // Coral/Orange
                    ];
                    const color = cardColors[i % cardColors.length];
                    // Subtle rotations for organic feel - just slightly off perfect
                    const rotations = [-1, 0.5, -0.5, 1, -0.5];
                    const rotation = rotations[i % rotations.length];

                    return (
                      <motion.button
                        key={cat.id}
                        whileHover={{ scale: 1.1, y: -12, rotate: 0, zIndex: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCatFromShelter(cat)}
                        style={{ rotate: rotation }}
                        className="relative flex-shrink-0"
                      >
                        <div
                          className="w-44 h-[272px] md:w-52 md:h-[320px] lg:w-56 lg:h-[360px] rounded-lg overflow-hidden relative"
                          style={{
                            background: color.bg,
                            boxShadow: '0 15px 50px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.15)',
                            border: `4px solid ${color.border}`,
                          }}
                        >
                          {/* Ornate inner frame */}
                          <div 
                            className="absolute inset-2 rounded" 
                            style={{ 
                              border: `2px solid ${color.accent}40`,
                              boxShadow: `inset 0 0 15px ${color.accent}20`
                            }} 
                          />
                          {/* Cat photo with ornate frame */}
                          <div 
                            className="absolute inset-4 top-4 bottom-16 md:bottom-18 rounded overflow-hidden"
                            style={{ 
                              border: `3px solid ${color.accent}60`,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                            }}
                          >
                            <img src={cat.photo} alt={cat.name} className="w-full h-full object-cover" />
                          </div>
                          {/* Name banner */}
                          <div 
                            className="absolute bottom-0 left-0 right-0 py-3 md:py-4 text-center" 
                            style={{ 
                              backgroundColor: color.border,
                              boxShadow: '0 -4px 12px rgba(0,0,0,0.3)'
                            }}
                          >
                            <p 
                              className="font-black text-lg md:text-xl" 
                              style={{ 
                                fontFamily: "'Cinzel Decorative', Georgia, serif",
                                color: color.accent 
                              }}
                            >
                              {cat.name}
                            </p>
                          </div>
                          {/* Corner flourishes */}
                          <div className="absolute top-3 left-3 text-sm" style={{ color: `${color.accent}70` }}>✦</div>
                          <div className="absolute top-3 right-3 text-sm" style={{ color: `${color.accent}70` }}>✦</div>
                        </div>
                      </motion.button>
                    );
                  })
                )}
              </div>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex-1 flex flex-col items-center justify-center">
              {/* Oracle Reading Card - wider to prevent vertical expansion */}
              <div
                ref={responseRef}
                className="w-full max-w-2xl relative"
                style={{
                  background: 'linear-gradient(145deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 20px 60px rgba(120,53,15,0.3), inset 0 0 40px rgba(255,255,255,0.2)',
                  border: '4px solid #92400E',
                }}
              >
                <div className="absolute inset-4 border-2 border-amber-700/40 rounded-lg pointer-events-none" />
                <div className="absolute top-3 left-3 text-amber-700/50">✦</div>
                <div className="absolute top-3 right-3 text-amber-700/50">✦</div>
                <div className="absolute bottom-3 left-3 text-amber-700/50">✦</div>
                <div className="absolute bottom-3 right-3 text-amber-700/50">✦</div>

                <div className="relative mx-auto mb-4" style={{ maxWidth: '280px' }}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      border: '4px solid #92400E',
                      boxShadow: '0 12px 30px rgba(120,53,15,0.4)',
                      padding: '8px',
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
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-800 rounded-full shadow-lg">
                    <p className="text-amber-100 font-bold text-sm whitespace-nowrap" style={{ fontFamily: "Georgia, serif" }}>
                      {displayName}
                    </p>
                  </div>
                </div>


                <AnimatePresence mode="wait">
                  {isThinking && (
                    <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-3">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 text-amber-700 animate-pulse" />
                      <p className="text-amber-800 text-base italic" style={{ fontFamily: "Georgia, serif" }}>
                        ✧ {displayName} contemplates... ✧
                      </p>
                    </motion.div>
                  )}

                  {response && !isThinking && (
                    <motion.div key="response" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-3">
                      <p className="text-xl md:text-2xl text-amber-950 leading-relaxed font-bold px-2" style={{ fontFamily: "Georgia, serif", textWrap: 'balance' }}>
                        "{response.text}"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Watermark for screenshots */}
                <div className="text-center mt-2">
                  <p className="text-amber-700/40 text-xs" style={{ fontFamily: "Georgia, serif" }}>
                    maybecat.com
                  </p>
                </div>
              </div>

              <button onClick={clearCat} className="absolute top-2 right-2 p-2 bg-amber-900/80 rounded-full text-amber-100 hover:bg-amber-900 transition-colors shadow-lg">
                <X className="w-5 h-5" />
              </button>

              {/* Question input - INSIDE page 2 for proper centering */}
              {!showNameInput && (
                <div className="w-full max-w-2xl mt-4 space-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter' && question.trim()) handleAskOracle(); }}
                      placeholder={`Ask ${displayName} a question...`}
                      className="w-full px-5 py-2 rounded-xl bg-amber-50 border-2 border-amber-700 text-amber-900 placeholder-amber-600/60 focus:outline-none focus:border-amber-800 focus:ring-2 focus:ring-amber-500/30 text-lg"
                      style={{ fontFamily: "Georgia, serif", boxShadow: 'inset 0 2px 8px rgba(120,53,15,0.1)' }}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-600/40">✧</div>
                  </div>

                  <motion.button
                    onClick={handleAskOracle}
                    disabled={!question.trim() || isThinking}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 rounded-xl text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)', boxShadow: '0 4px 20px rgba(124,45,18,0.4)', fontFamily: "Georgia, serif" }}
                  >
                    ✦ Consult the Cat ✦
                  </motion.button>

                  {/* Example question prompts - shown only before first question */}
                  {!hasAskedQuestion && !response && (
                    <div className="text-center mt-3">
                      <p className="text-amber-800/70 text-sm mb-2" style={{ fontFamily: "Georgia, serif" }}>
                        Try asking:
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {EXAMPLE_QUESTIONS.map((q) => (
                          <button
                            key={q}
                            onClick={() => handleExampleClick(q)}
                            className="px-3 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-sm hover:bg-amber-200/80 transition-colors border border-amber-600/30"
                            style={{ fontFamily: "Georgia, serif" }}
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {response && (
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <button onClick={askAgain} disabled={isThinking} className="flex-1 py-3 rounded-xl bg-amber-800 text-amber-100 font-bold hover:bg-amber-900 transition-colors disabled:opacity-50" style={{ fontFamily: "Georgia, serif" }}>
                          Ask Again
                        </button>
                        <button onClick={shareNative} disabled={isThinking} className="flex-1 py-3 rounded-xl bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors disabled:opacity-50" style={{ fontFamily: "Georgia, serif" }}>
                          Share Wisdom
                        </button>
                      </div>
                      {/* Hashtag suggestions */}
                      <div className="text-center pt-1">
                        <button
                          onClick={copyHashtags}
                          className="text-amber-700/60 text-sm hover:text-amber-800 transition-colors cursor-pointer"
                          style={{ fontFamily: "Georgia, serif" }}
                          title="Click to copy hashtags"
                        >
                          {hashtagsCopied ? '✓ Copied!' : '#AskMaybeCat #CatWisdom'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* Adoption CTA */}
          {shelterCat && catImage && shelterCat.location && (
            <motion.a
              href={shelterCat.adoptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="block w-full max-w-md mx-auto mt-4 p-4 rounded-xl text-center transition-colors"
              style={{
                background: 'linear-gradient(135deg, #065F46 0%, #047857 50%, #059669 100%)',
                boxShadow: '0 4px 20px rgba(6,95,70,0.4)',
                border: '2px solid #064E3B',
              }}
            >
              <p className="text-white font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>
                <Heart className="w-5 h-5 inline mr-2 text-emerald-200" />
                Give {shelterCat.name} a forever home?
              </p>
              <p className="text-emerald-200 text-sm mt-1 italic">{shelterCat.location} • Click to adopt</p>
            </motion.a>
          )}

          {/* Name input modal */}
          <AnimatePresence>
            {showNameInput && <NameInputModal onSave={handleNameSave} />}
          </AnimatePresence>

        </div>

        {/* Tagline */}
        <div className="text-center py-3 mt-auto">
          <p className="text-lg md:text-2xl lg:text-3xl italic font-semibold" style={{ fontFamily: "Georgia, serif", color: '#451A03', textShadow: '1px 1px 0 rgba(251,191,36,0.6)' }}>
            Maybe wisdom. Maybe judgment.<br className="md:hidden" /> Maybe salmon.
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-black mt-1" style={{ fontFamily: "Georgia, serif", color: '#451A03', textShadow: '1px 1px 0 rgba(251,191,36,0.6)' }}>
            Always cat.
          </p>
        </div>
      </div>

      {/* PURRfoot Sponsor Banner - solid 150px, fully opaque */}
      <div
        className="w-full flex-shrink-0 relative z-20"
        style={{
          backgroundColor: '#0d1b2a',
          height: '150px',
        }}
      />
    </div>
  );
}
