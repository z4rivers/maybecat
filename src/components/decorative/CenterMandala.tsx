// Ornate mandala-style center decoration
export function CenterMandala({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="15"
          rx="6"
          ry="12"
          fill="currentColor"
          opacity="0.6"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}
