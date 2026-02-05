import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { forwardRef } from 'react';

export interface CatCardProps {
  variant: 'upload' | 'shelter';
  name?: string;
  photo?: string;
  onClick?: () => void;
  className?: string;
  // For shelter cats - jewel tone colors
  colorScheme?: {
    bg: string;
    border: string;
    accent: string;
  };
  rotation?: number;
}

const DEFAULT_COLORS = {
  upload: {
    bg: 'linear-gradient(145deg, #FEF3C7 0%, #FBBF24 50%, #B45309 100%)',
    border: '#78350F',
    accent: '#FEF3C7',
  },
  shelter: {
    bg: 'linear-gradient(145deg, #EC4899 0%, #BE185D 50%, #831843 100%)',
    border: '#500724',
    accent: '#FDF2F8',
  },
};

export const CatCard = forwardRef<HTMLDivElement, CatCardProps>(function CatCard(
  {
    variant,
    name,
    photo,
    onClick,
    className = '',
    colorScheme,
    rotation = 0,
  },
  ref
) {
  const colors = colorScheme || DEFAULT_COLORS[variant];
  const isUpload = variant === 'upload';

  if (isUpload) {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.05, y: -10, rotate: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`cursor-pointer group flex-shrink-0 ${className}`}
      >
        <div
          className="w-52 h-80 md:w-64 md:h-[400px] lg:w-72 lg:h-[440px] rounded-lg overflow-hidden relative"
          style={{
            background: colors.bg,
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 60px rgba(255,255,255,0.4), 0 0 30px rgba(251,191,36,0.3)',
            border: `5px solid ${colors.border}`,
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
                border: `4px dashed ${colors.border}`,
                background: 'radial-gradient(circle, rgba(254,243,199,0.5) 0%, transparent 70%)'
              }}
            >
              <Camera className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 text-amber-800" />
            </div>
            <p
              className="font-black text-center text-2xl md:text-3xl lg:text-4xl"
              style={{
                fontFamily: "'Cinzel Decorative', Georgia, serif",
                color: colors.border,
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
      </motion.div>
    );
  }

  // Shelter cat variant
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      whileHover={{ scale: 1.1, y: -12, rotate: 0, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ rotate: rotation }}
      className={`relative flex-shrink-0 ${className}`}
    >
      <div
        className="w-44 h-[272px] md:w-52 md:h-[320px] lg:w-56 lg:h-[360px] rounded-lg overflow-hidden relative"
        style={{
          background: colors.bg,
          boxShadow: '0 15px 50px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.15)',
          border: `4px solid ${colors.border}`,
        }}
      >
        {/* Ornate inner frame */}
        <div
          className="absolute inset-2 rounded"
          style={{
            border: `2px solid ${colors.accent}40`,
            boxShadow: `inset 0 0 15px ${colors.accent}20`
          }}
        />
        {/* Cat photo with ornate frame */}
        <div
          className="absolute inset-4 top-4 bottom-16 md:bottom-18 rounded overflow-hidden"
          style={{
            border: `3px solid ${colors.accent}60`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          {photo && <img src={photo} alt={name} className="w-full h-full object-cover" />}
        </div>
        {/* Name banner */}
        <div
          className="absolute bottom-0 left-0 right-0 py-3 md:py-4 text-center"
          style={{
            backgroundColor: colors.border,
            boxShadow: '0 -4px 12px rgba(0,0,0,0.3)'
          }}
        >
          <p
            className="font-black text-lg md:text-xl"
            style={{
              fontFamily: "'Cinzel Decorative', Georgia, serif",
              color: colors.accent
            }}
          >
            {name}
          </p>
        </div>
        {/* Corner flourishes */}
        <div className="absolute top-3 left-3 text-sm" style={{ color: `${colors.accent}70` }}>✦</div>
        <div className="absolute top-3 right-3 text-sm" style={{ color: `${colors.accent}70` }}>✦</div>
      </div>
    </motion.button>
  );
});
