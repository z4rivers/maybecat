// Elaborate Art Nouveau corner vine flourish inspired by tarot deck
export function CornerVine({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      {/* Main vine curves */}
      <path
        d="M0,200 Q0,150 30,120 Q60,90 40,60 Q20,30 50,10 Q80,0 100,20"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M200,0 Q150,0 120,30 Q90,60 60,40 Q30,20 10,50 Q0,80 20,100"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Decorative leaves */}
      <ellipse cx="30" cy="120" rx="12" ry="6" fill="currentColor" transform="rotate(-45 30 120)" />
      <ellipse cx="50" cy="60" rx="10" ry="5" fill="currentColor" transform="rotate(30 50 60)" />
      <ellipse cx="80" cy="30" rx="8" ry="4" fill="currentColor" transform="rotate(-20 80 30)" />
      <ellipse cx="120" cy="30" rx="12" ry="6" fill="currentColor" transform="rotate(45 120 30)" />
      <ellipse cx="60" cy="40" rx="10" ry="5" fill="currentColor" transform="rotate(-30 60 40)" />
      {/* Flowers/circles */}
      <circle cx="50" cy="90" r="8" fill="currentColor" opacity="0.8" />
      <circle cx="90" cy="50" r="8" fill="currentColor" opacity="0.8" />
      <circle cx="25" cy="150" r="6" fill="currentColor" opacity="0.6" />
      <circle cx="150" cy="25" r="6" fill="currentColor" opacity="0.6" />
      {/* Inner flower details */}
      <circle cx="50" cy="90" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="90" cy="50" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
