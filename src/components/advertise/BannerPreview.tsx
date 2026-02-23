import { Heart } from 'lucide-react';

interface BannerPreviewProps {
  imageUrl: string | null;
  label: string;
  height: number;
}

export function BannerPreview({ imageUrl, label, height }: BannerPreviewProps) {
  return (
    <div>
      <p
        className="text-amber-200/80 text-sm mb-2 uppercase tracking-wider"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {label}
      </p>
      <div
        className="w-full flex items-center rounded-lg overflow-hidden"
        style={{
          height: `${height}px`,
          backgroundColor: '#0d1b2a',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Ad space — left 80% */}
        <div className="flex-1 flex items-center justify-center h-full p-3 md:p-5">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Banner preview"
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <div
              className="w-full h-full rounded-lg flex items-center justify-center"
              style={{ border: '2px dashed rgba(251,191,36,0.25)' }}
            >
              <span className="text-amber-400/30 text-xs md:text-sm uppercase tracking-widest select-none">
                Your Ad Here
              </span>
            </div>
          )}
        </div>

        {/* Adoption CTA — right 20% */}
        <div
          className="w-1/5 min-w-[100px] md:min-w-[180px] h-full flex flex-col items-center justify-center px-2 md:px-4 text-center"
          style={{ borderLeft: '1px solid rgba(251,191,36,0.3)' }}
        >
          <Heart className="w-4 h-4 md:w-6 md:h-6 text-amber-400 mb-1 md:mb-2" />
          <p
            className="text-amber-100 font-bold text-[10px] md:text-sm leading-tight"
            style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}
          >
            Adopt a Cat
          </p>
          <p className="text-amber-500/60 text-[8px] md:text-[10px] mt-1 md:mt-2 uppercase tracking-wider">
            Shelter cat CTA
          </p>
        </div>
      </div>
    </div>
  );
}
