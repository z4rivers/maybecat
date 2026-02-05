export interface OracleTaglineProps {
  lines?: string[];
  finalLine?: string;
  className?: string;
}

export function OracleTagline({
  lines = ['Maybe wisdom. Maybe judgment.', 'Maybe salmon.'],
  finalLine = 'Always cat.',
  className = '',
}: OracleTaglineProps) {
  return (
    <div className={`text-center py-3 mt-auto ${className}`}>
      <p
        className="text-lg md:text-2xl lg:text-3xl italic font-semibold"
        style={{ fontFamily: "Georgia, serif", color: '#451A03', textShadow: '1px 1px 0 rgba(251,191,36,0.6)' }}
      >
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br className="md:hidden" />}
            {i < lines.length - 1 && ' '}
          </span>
        ))}
      </p>
      <p
        className="text-xl md:text-3xl lg:text-4xl font-black mt-1"
        style={{ fontFamily: "Georgia, serif", color: '#451A03', textShadow: '1px 1px 0 rgba(251,191,36,0.6)' }}
      >
        {finalLine}
      </p>
    </div>
  );
}
