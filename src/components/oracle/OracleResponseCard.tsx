import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Prevent orphaned words by joining last 2-3 short words with non-breaking spaces
function preventOrphans(text: string): string {
  const words = text.split(' ');
  if (words.length < 3) return text;

  const lastWords = words.slice(-3);
  const lastChunk = lastWords.join(' ');

  if (lastChunk.length < 20) {
    return [...words.slice(0, -3), lastWords.join('\u00A0')].join(' ');
  }

  const lastTwo = words.slice(-2).join('\u00A0');
  return [...words.slice(0, -2), lastTwo].join(' ');
}

export interface OracleResponseCardProps {
  catImage: string;
  catName: string;
  response?: string;
  isThinking?: boolean;
  needsBrightening?: boolean;
  brightnessFilter?: string;
  className?: string;
}

export const OracleResponseCard = forwardRef<HTMLDivElement, OracleResponseCardProps>(
  function OracleResponseCard(
    {
      catImage,
      catName,
      response,
      isThinking = false,
      needsBrightening = false,
      brightnessFilter = 'brightness(1.3) contrast(1.05)',
      className = '',
    },
    ref
  ) {
    const displayName = catName || 'Maybe Cat';

    return (
      <div
        ref={ref}
        className={`w-full max-w-2xl relative ${className}`}
        style={{
          background: 'linear-gradient(145deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 20px 60px rgba(120,53,15,0.3), inset 0 0 40px rgba(255,255,255,0.2)',
          border: '4px solid #92400E',
        }}
      >
        {/* Decorative inner border */}
        <div className="absolute inset-4 border-2 border-amber-700/40 rounded-lg pointer-events-none" />

        {/* Corner decorations */}
        <div className="absolute top-3 left-3 text-amber-700/50">✦</div>
        <div className="absolute top-3 right-3 text-amber-700/50">✦</div>
        <div className="absolute bottom-3 left-3 text-amber-700/50">✦</div>
        <div className="absolute bottom-3 right-3 text-amber-700/50">✦</div>

        {/* Cat photo */}
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
              style={needsBrightening ? { filter: brightnessFilter } : undefined}
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-800 rounded-full shadow-lg">
            <p className="text-amber-100 font-bold text-sm whitespace-nowrap" style={{ fontFamily: "Georgia, serif" }}>
              {displayName}
            </p>
          </div>
        </div>

        {/* Response area */}
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
              <p className="text-xl md:text-2xl text-amber-950 leading-relaxed font-bold px-2" style={{ fontFamily: "Georgia, serif", textWrap: 'pretty' }}>
                "{preventOrphans(response)}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Watermark */}
        <div className="text-center mt-2">
          <p className="text-amber-700/40 text-xs" style={{ fontFamily: "Georgia, serif" }}>
            maybecat.com
          </p>
        </div>
      </div>
    );
  }
);
