import { MysticalStar } from '../decorative';

export interface OracleHeaderProps {
  title?: string;
  tagline?: string;
  onTitleClick?: () => void;
  className?: string;
}

export function OracleHeader({
  title = 'Maybe Cat',
  tagline = 'Your cat might have wisdom.',
  onTitleClick,
  className = '',
}: OracleHeaderProps) {
  return (
    <header className={`text-center mb-2 ${className}`}>
      <div className="flex items-center justify-center gap-3 mb-2">
        <MysticalStar className="w-5 h-5 md:w-6 md:h-6 text-amber-100 drop-shadow-lg" />
        <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
        <MysticalStar className="w-6 h-6 md:w-8 md:h-8 text-amber-100 drop-shadow-lg" />
        <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
        <MysticalStar className="w-5 h-5 md:w-6 md:h-6 text-amber-100 drop-shadow-lg" />
      </div>

      <h1
        onClick={onTitleClick}
        className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          fontFamily: "'Cinzel Decorative', Georgia, serif",
          color: '#78350F',
          textShadow: '2px 2px 0 #FBBF24, 4px 4px 0 rgba(0,0,0,0.2), 0 0 30px rgba(251,191,36,0.4)'
        }}
      >
        {title}
      </h1>

      <p
        className="mt-2 text-lg md:text-2xl lg:text-3xl italic font-semibold"
        style={{
          fontFamily: "Georgia, serif",
          color: '#451A03',
          textShadow: '1px 1px 0 rgba(251,191,36,0.6)'
        }}
      >
        {tagline}
      </p>

      <div className="flex items-center justify-center gap-2 mt-2">
        <div className="h-0.5 w-12 bg-amber-800/60" />
        <span className="text-amber-800 text-xl md:text-2xl">☽</span>
        <span className="text-amber-800 text-base">✧</span>
        <span className="text-amber-800 text-xl md:text-2xl">☾</span>
        <div className="h-0.5 w-12 bg-amber-800/60" />
      </div>
    </header>
  );
}
