import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRandomResponse, type OracleResponse } from '../data/oracleResponses';
import { fetchAdoptableCats, type ShelterCat } from '../services/rescueGroups';

// Decorative corner flourish
function CornerFlourish({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M0,100 Q0,50 50,50 Q20,50 20,20 Q20,50 0,50 Q30,70 0,100 M50,50 Q80,50 80,20 Q80,40 100,50 Q70,50 50,50" />
      <circle cx="50" cy="50" r="5" />
      <circle cx="25" cy="75" r="3" />
      <circle cx="75" cy="25" r="3" />
    </svg>
  );
}

// Mystical star decoration
function MysticalStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0L14.59 8.41L24 12L14.59 15.59L12 24L9.41 15.59L0 12L9.41 8.41L12 0Z" />
    </svg>
  );
}

function useDocumentMeta() {
  useEffect(() => {
    document.title = 'Maybe Cat | Ask Your Cat for Wisdom';
    const setMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    setMeta('og:title', 'Maybe Cat | Ask Your Cat for Wisdom');
    setMeta('og:description', 'Upload your cat. Ask a question. Receive wisdom. Maybe.');
    setMeta('og:type', 'website');
    setMeta('og:url', 'https://maybecat.com');
    setMeta('og:image', 'https://maybecat.com/og-maybecat.png');
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', 'Maybe Cat | Ask Your Cat for Wisdom');
    setMetaName('twitter:description', 'Upload your cat. Ask a question. Receive wisdom. Maybe.');
    setMetaName('twitter:image', 'https://maybecat.com/og-maybecat.png');
    setMetaName('description', 'Upload your cat. Ask a question. Receive wisdom. Maybe.');
  }, []);
}

export function OracleA() {
  useDocumentMeta();

  const [catImage, setCatImage] = useState<string | null>(() => localStorage.getItem('oracleCatImage'));
  const [catName, setCatName] = useState(() => localStorage.getItem('oracleCatName') || '');
  const [shelterCat, setShelterCat] = useState<ShelterCat | null>(() => {
    const stored = localStorage.getItem('oracleShelterCat');
    return stored ? JSON.parse(stored) : null;
  });
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<OracleResponse | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [shelterCats, setShelterCats] = useState<ShelterCat[]>([]);
  const [loadingShelterCats, setLoadingShelterCats] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadCats() {
      try {
        const cats = await fetchAdoptableCats(5);
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
        setCatImage(base64);
        localStorage.setItem('oracleCatImage', base64);
        setShelterCat(null);
        localStorage.removeItem('oracleShelterCat');
        setShowNameInput(true);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleNameSave = useCallback((name: string) => {
    setCatName(name);
    localStorage.setItem('oracleCatName', name);
    setShowNameInput(false);
  }, []);

  const clearCat = useCallback(() => {
    setCatImage(null);
    setCatName('');
    setShelterCat(null);
    setResponse(null);
    localStorage.removeItem('oracleCatImage');
    localStorage.removeItem('oracleCatName');
    localStorage.removeItem('oracleShelterCat');
  }, []);

  const selectShelterCat = useCallback((cat: ShelterCat) => {
    setCatImage(cat.photo);
    setCatName(cat.name);
    setShelterCat(cat);
    localStorage.setItem('oracleCatImage', cat.photo);
    localStorage.setItem('oracleCatName', cat.name);
    localStorage.setItem('oracleShelterCat', JSON.stringify(cat));
  }, []);

  const askOracle = useCallback(() => {
    if (!question.trim()) return;
    setIsThinking(true);
    setResponse(null);
    const thinkingTime = 1500 + Math.random() * 1500;
    setTimeout(() => {
      setResponse(getRandomResponse());
      setIsThinking(false);
    }, thinkingTime);
  }, [question]);

  const askAgain = useCallback(() => {
    setIsThinking(true);
    const thinkingTime = 800 + Math.random() * 800;
    setTimeout(() => {
      setResponse(getRandomResponse());
      setIsThinking(false);
    }, thinkingTime);
  }, []);

  const downloadImage = useCallback(async () => {
    if (!responseRef.current) return;
    const { default: html2canvas } = await import('html2canvas');
    const canvas = await html2canvas(responseRef.current, { backgroundColor: '#fef3c7', scale: 2 });
    const link = document.createElement('a');
    link.download = `maybecat-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  const shareNative = useCallback(async () => {
    if (!responseRef.current) return;
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(responseRef.current, { backgroundColor: '#fef3c7', scale: 2 });
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

  const displayName = catName || 'Maybe Cat';
  const isMaybeCatDomain = typeof window !== 'undefined' &&
    (window.location.hostname === 'maybecat.com' ||
     window.location.hostname === 'www.maybecat.com' ||
     window.location.hostname.includes('maybecat'));

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #FCD34D 0%, #F59E0B 50%, #D97706 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='0' cy='0' r='1'/%3E%3Ccircle cx='60' cy='0' r='1'/%3E%3Ccircle cx='0' cy='60' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex-1 flex flex-col px-6 py-6 relative z-10">
        {/* Corner flourishes - decorative, contained within viewport */}
        <CornerFlourish className="absolute top-4 left-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-amber-900/70" />
        <CornerFlourish className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-amber-900/70 -scale-x-100" />
        <CornerFlourish className="absolute bottom-4 left-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-amber-900/70 -scale-y-100" />
        <CornerFlourish className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-amber-900/70 -scale-x-100 -scale-y-100" />
        
        {/* Header */}
        <header className="text-center mb-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <MysticalStar className="w-4 h-4 md:w-6 md:h-6 text-amber-800" />
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent" />
            <MysticalStar className="w-6 h-6 md:w-8 md:h-8 text-amber-800" />
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-800 to-transparent" />
            <MysticalStar className="w-4 h-4 md:w-6 md:h-6 text-amber-800" />
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-amber-900 tracking-tight"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: '2px 2px 0 #FCD34D, 4px 4px 0 rgba(120,53,15,0.25)'
            }}
          >
            Maybe Cat
          </h1>

          <p
            className="text-amber-800 mt-2 text-xl md:text-3xl lg:text-4xl italic"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Your cat might have wisdom. Ask anyway.
          </p>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="h-0.5 w-16 bg-amber-800/60" />
            <span className="text-amber-800 text-2xl md:text-3xl">☽</span>
            <span className="text-amber-800 text-lg">✧</span>
            <span className="text-amber-800 text-2xl md:text-3xl">☾</span>
            <div className="h-0.5 w-16 bg-amber-800/60" />
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {!catImage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center gap-6"
            >
              {/* Borrow a cat label */}
              <p className="text-amber-900 text-2xl md:text-3xl font-bold text-center" style={{ fontFamily: "Georgia, serif" }}>
                — or borrow a cat (available for adoption) —
              </p>

              {/* All cats in one row - Your Cat is larger */}
              <div className="flex flex-wrap justify-center items-end gap-5 md:gap-8 lg:gap-10">
                {/* YOUR CAT - larger than the others */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer group"
                >
                  <div
                    className="w-56 h-80 md:w-72 md:h-[400px] lg:w-80 lg:h-[440px] rounded-2xl overflow-hidden relative"
                    style={{
                      background: 'linear-gradient(145deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)',
                      boxShadow: '0 15px 50px rgba(120,53,15,0.4), inset 0 0 40px rgba(255,255,255,0.3)',
                      border: '6px solid #92400E',
                    }}
                  >
                    <div className="absolute inset-4 border-3 border-amber-700/50 rounded-xl" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-dashed border-amber-700 flex items-center justify-center mb-4 group-hover:border-solid transition-all">
                        <Camera className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-amber-800" />
                      </div>
                      <p className="text-amber-900 font-black text-center text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
                        Your Cat
                      </p>
                      <p className="text-amber-800 text-lg md:text-xl mt-3 text-center font-semibold">tap to upload</p>
                    </div>
                    <div className="absolute top-4 left-4 text-amber-700/60 text-2xl">✦</div>
                    <div className="absolute top-4 right-4 text-amber-700/60 text-2xl">✦</div>
                    <div className="absolute bottom-4 left-4 text-amber-700/60 text-2xl">✦</div>
                    <div className="absolute bottom-4 right-4 text-amber-700/60 text-2xl">✦</div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </motion.div>

                {/* Shelter cats */}
                {loadingShelterCats ? (
                  <p className="text-amber-900 text-2xl italic" style={{ fontFamily: "Georgia, serif" }}>Finding cats...</p>
                ) : (
                  shelterCats.map((cat, i) => {
                    const cardColors = [
                      { bg: 'linear-gradient(145deg, #FEE2E2 0%, #FECACA 50%, #FCA5A5 100%)', border: '#991B1B' },
                      { bg: 'linear-gradient(145deg, #D1FAE5 0%, #A7F3D0 50%, #6EE7B7 100%)', border: '#065F46' },
                      { bg: 'linear-gradient(145deg, #E0E7FF 0%, #C7D2FE 50%, #A5B4FC 100%)', border: '#3730A3' },
                      { bg: 'linear-gradient(145deg, #FCE7F3 0%, #FBCFE8 50%, #F9A8D4 100%)', border: '#9D174D' },
                      { bg: 'linear-gradient(145deg, #FFEDD5 0%, #FED7AA 50%, #FDBA74 100%)', border: '#9A3412' },
                    ];
                    const color = cardColors[i % cardColors.length];

                    return (
                      <motion.button
                        key={cat.id}
                        whileHover={{ scale: 1.08, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => selectShelterCat(cat)}
                      >
                        <div
                          className="w-48 h-72 md:w-60 md:h-[360px] lg:w-64 lg:h-[400px] rounded-xl overflow-hidden relative"
                          style={{
                            background: color.bg,
                            boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
                            border: `5px solid ${color.border}`,
                          }}
                        >
                          <div className="absolute inset-2 border-2 rounded-lg" style={{ borderColor: `${color.border}40` }} />
                          <div className="absolute inset-3 top-3 bottom-14 md:bottom-16 rounded overflow-hidden">
                            <img src={cat.photo} alt={cat.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 py-3 md:py-4 text-center" style={{ backgroundColor: color.border }}>
                            <p className="text-white font-black text-xl md:text-2xl" style={{ fontFamily: "Georgia, serif" }}>{cat.name}</p>
                          </div>
                          <div className="absolute top-3 left-3 text-lg" style={{ color: `${color.border}70` }}>✦</div>
                          <div className="absolute top-3 right-3 text-lg" style={{ color: `${color.border}70` }}>✦</div>
                        </div>
                      </motion.button>
                    );
                  })
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex-1 flex flex-col items-center">
              {/* Oracle Reading Card */}
              <div
                ref={responseRef}
                className="w-full max-w-md relative"
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

                <div className="relative mx-auto mb-4" style={{ maxWidth: '200px' }}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: '4px solid #92400E', boxShadow: '0 8px 24px rgba(120,53,15,0.3)' }}
                  >
                    <img src={catImage} alt={displayName} className="w-full aspect-square object-cover" />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-800 rounded-full shadow-lg">
                    <p className="text-amber-100 font-bold text-sm whitespace-nowrap" style={{ fontFamily: "Georgia, serif" }}>
                      {displayName}
                    </p>
                  </div>
                </div>

                {response && question && (
                  <div className="text-center mt-6 mb-2">
                    <p className="text-amber-700 text-xs uppercase tracking-widest mb-1">You asked</p>
                    <p className="text-amber-900 text-sm italic" style={{ fontFamily: "Georgia, serif" }}>"{question}"</p>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {isThinking && (
                    <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                      <Sparkles className="w-12 h-12 mx-auto mb-3 text-amber-700 animate-pulse" />
                      <p className="text-amber-800 text-lg italic" style={{ fontFamily: "Georgia, serif" }}>
                        ✧ {displayName} contemplates... ✧
                      </p>
                    </motion.div>
                  )}

                  {response && !isThinking && (
                    <motion.div key="response" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-6">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-amber-700">☽</span>
                        <span className="text-amber-700 text-sm">THE ORACLE SPEAKS</span>
                        <span className="text-amber-700">☾</span>
                      </div>
                      <p className="text-xl md:text-2xl text-amber-950 leading-relaxed font-bold px-2" style={{ fontFamily: "Georgia, serif" }}>
                        "{response.text}"
                      </p>
                      <p className="text-amber-700 text-xs mt-4 uppercase tracking-widest">— {displayName} has spoken —</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 pt-3 border-t border-amber-600/30 text-center">
                  {isMaybeCatDomain ? (
                    <p className="text-amber-800 text-sm font-bold">maybecat.com</p>
                  ) : (
                    <Link to="/oracle-ad" className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-950 transition-colors">
                      <span className="text-sm font-bold">via PURRfoot</span>
                    </Link>
                  )}
                </div>
              </div>

              <button onClick={clearCat} className="absolute top-2 right-2 p-2 bg-amber-900/80 rounded-full text-amber-100 hover:bg-amber-900 transition-colors shadow-lg">
                <X className="w-5 h-5" />
              </button>
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
            {showNameInput && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(69, 26, 3, 0.85)' }}>
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="max-w-sm w-full relative"
                  style={{
                    background: 'linear-gradient(145deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,255,255,0.2)',
                    border: '4px solid #92400E',
                  }}
                >
                  <div className="absolute top-3 left-3 text-amber-700/50">✦</div>
                  <div className="absolute top-3 right-3 text-amber-700/50">✦</div>
                  <div className="absolute bottom-3 left-3 text-amber-700/50">✦</div>
                  <div className="absolute bottom-3 right-3 text-amber-700/50">✦</div>

                  <div className="text-center mb-6">
                    <span className="text-amber-700 text-2xl">☽</span>
                    <h3 className="text-2xl font-bold text-amber-900 mt-2" style={{ fontFamily: "Georgia, serif" }}>
                      Name Your Oracle
                    </h3>
                    <span className="text-amber-700 text-2xl">☾</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Enter their name..."
                    className="w-full px-4 py-3 rounded-xl bg-amber-50 border-2 border-amber-700 text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-800 text-lg text-center"
                    style={{ fontFamily: "Georgia, serif" }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleNameSave((e.target as HTMLInputElement).value);
                    }}
                    autoFocus
                  />

                  <div className="flex gap-3 mt-6">
                    <button onClick={() => handleNameSave('')} className="flex-1 px-4 py-3 rounded-xl bg-amber-700 text-amber-100 hover:bg-amber-800 transition-colors font-bold" style={{ fontFamily: "Georgia, serif" }}>
                      Skip
                    </button>
                    <button
                      onClick={() => {
                        const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                        handleNameSave(input?.value || '');
                      }}
                      className="flex-1 px-4 py-3 rounded-xl text-white hover:opacity-90 transition-colors font-bold"
                      style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)', fontFamily: "Georgia, serif" }}
                    >
                      ✦ Confirm ✦
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question input */}
          {catImage && !showNameInput && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md mx-auto mt-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && question.trim()) askOracle(); }}
                  placeholder={`Ask ${displayName} a question...`}
                  className="w-full px-5 py-4 rounded-xl bg-amber-50 border-2 border-amber-700 text-amber-900 placeholder-amber-600/60 focus:outline-none focus:border-amber-800 focus:ring-2 focus:ring-amber-500/30 text-lg"
                  style={{ fontFamily: "Georgia, serif", boxShadow: 'inset 0 2px 8px rgba(120,53,15,0.1)' }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-600/40">✧</div>
              </div>

              <motion.button
                onClick={askOracle}
                disabled={!question.trim() || isThinking}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)', boxShadow: '0 4px 20px rgba(124,45,18,0.4)', fontFamily: "Georgia, serif" }}
              >
                ✦ Consult the Oracle ✦
              </motion.button>

              {response && !isThinking && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                  <button onClick={askAgain} disabled={isThinking} className="flex-1 py-3 rounded-xl bg-amber-800 text-amber-100 font-bold hover:bg-amber-900 transition-colors disabled:opacity-50" style={{ fontFamily: "Georgia, serif" }}>
                    Ask Again
                  </button>
                  <button onClick={shareNative} className="flex-1 py-3 rounded-xl bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors" style={{ fontFamily: "Georgia, serif" }}>
                    Share Wisdom
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

        {/* Tagline - BOLD */}
        <div className="text-center py-6">
          <p className="text-amber-900 text-2xl md:text-4xl lg:text-5xl italic" style={{ fontFamily: "Georgia, serif" }}>
            Maybe wisdom. Maybe judgment. Maybe salmon.
          </p>
          <p className="text-amber-950 text-3xl md:text-5xl lg:text-6xl font-black mt-2" style={{ fontFamily: "Georgia, serif" }}>
            Always cat.
          </p>
        </div>
      </div>

      {/* PURRfoot Sponsor Banner Placeholder - ready for designed banner image */}
      {!isMaybeCatDomain && (
        <Link
          to="/"
          className="block w-full h-40 md:h-52 lg:h-64 transition-all hover:brightness-110"
          style={{
            background: 'linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)',
          }}
        >
          {/* TODO: Add designed PURRfoot banner image here */}
        </Link>
      )}
    </div>
  );
}
