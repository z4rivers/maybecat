import { forwardRef } from 'react';
import { config } from '../config';

interface ShareCardProps {
  catImage: string;
  catName: string;
  question: string;
  responseText: string;
  attribution?: string;
  needsBrightening?: boolean;
}

/** Inline SVG star matching MysticalStar component — html2canvas compatible */
function Star({ size, color = '#FEF3C7' }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'block', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
      <path d="M12 0L14.59 8.41L24 12L14.59 15.59L12 24L9.41 15.59L0 12L9.41 8.41L12 0Z" />
    </svg>
  );
}

/**
 * Tarot-inspired corner ornament — double L-bracket with 4-pointed star.
 * Each corner has manually-drawn paths (no CSS transforms) for html2canvas compatibility.
 */
function CornerOrnament({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const positions: Record<string, React.CSSProperties> = {
    tl: { top: '4px', left: '4px' },
    tr: { top: '4px', right: '4px' },
    bl: { bottom: '4px', left: '4px' },
    br: { bottom: '4px', right: '4px' },
  };

  const paths: Record<string, { outer: string; inner: string; star: string; dot1: [number, number]; dot2: [number, number] }> = {
    tl: {
      outer: 'M6 74 L6 22 Q6 6 22 6 L74 6',
      inner: 'M14 66 L14 26 Q14 14 26 14 L66 14',
      star: 'M10 4 L12 8 L16 10 L12 12 L10 16 L8 12 L4 10 L8 8 Z',
      dot1: [6, 42], dot2: [42, 6],
    },
    tr: {
      outer: 'M6 6 L58 6 Q74 6 74 22 L74 74',
      inner: 'M14 14 L54 14 Q66 14 66 26 L66 66',
      star: 'M70 4 L72 8 L76 10 L72 12 L70 16 L68 12 L64 10 L68 8 Z',
      dot1: [38, 6], dot2: [74, 42],
    },
    bl: {
      outer: 'M6 6 L6 58 Q6 74 22 74 L74 74',
      inner: 'M14 14 L14 54 Q14 66 26 66 L66 66',
      star: 'M10 64 L12 68 L16 70 L12 72 L10 76 L8 72 L4 70 L8 68 Z',
      dot1: [6, 38], dot2: [42, 74],
    },
    br: {
      outer: 'M74 6 L74 58 Q74 74 58 74 L6 74',
      inner: 'M66 14 L66 54 Q66 66 54 66 L14 66',
      star: 'M70 64 L72 68 L76 70 L72 72 L70 76 L68 72 L64 70 L68 68 Z',
      dot1: [74, 38], dot2: [38, 74],
    },
  };

  const p = paths[corner];

  return (
    <svg
      style={{ position: 'absolute', ...positions[corner] }}
      width="80" height="80" viewBox="0 0 80 80" fill="none"
    >
      <path d={p.outer} stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d={p.inner} stroke="#FEF3C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d={p.star} fill="#FEF3C7" opacity="0.55" />
      <circle cx={p.dot1[0]} cy={p.dot1[1]} r="2" fill="#FEF3C7" opacity="0.35" />
      <circle cx={p.dot2[0]} cy={p.dot2[1]} r="2" fill="#FEF3C7" opacity="0.35" />
    </svg>
  );
}

/** Hidden 1080x1080 card rendered off-screen for html2canvas capture */
export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ catImage, catName, question, responseText, attribution, needsBrightening }, ref) => {
    const { width, height } = config.shareCard;

    const displayQuestion =
      question.length > 80 ? question.slice(0, 77) + '...' : question;

    // Same SVG pattern used on the live site background
    const bgPattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='40' cy='10' r='2'/%3E%3Ccircle cx='40' cy='70' r='2'/%3E%3Ccircle cx='10' cy='40' r='2'/%3E%3Ccircle cx='70' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3Ccircle cx='60' cy='20' r='1.5'/%3E%3Ccircle cx='20' cy='60' r='1.5'/%3E%3Ccircle cx='60' cy='60' r='1.5'/%3E%3Cpath d='M40 15 Q45 25 40 35 Q35 25 40 15' fill='%23000' opacity='0.5'/%3E%3Cpath d='M40 45 Q45 55 40 65 Q35 55 40 45' fill='%23000' opacity='0.5'/%3E%3Cpath d='M15 40 Q25 45 35 40 Q25 35 15 40' fill='%23000' opacity='0.5'/%3E%3Cpath d='M45 40 Q55 45 65 40 Q55 35 45 40' fill='%23000' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`;

    return (
      <div
        ref={ref}
        style={{
          position: 'fixed',
          left: '-9999px',
          top: 0,
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)',
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Tarot vine/dot pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            backgroundImage: bgPattern,
          }}
        />

        {/* Outer border */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '4px solid rgba(254, 243, 199, 0.5)',
            borderRadius: '16px',
          }}
        />

        {/* Inner ornate border */}
        <div
          style={{
            position: 'absolute',
            inset: '16px',
            border: '2px solid rgba(254, 243, 199, 0.3)',
            borderRadius: '12px',
          }}
        />

        {/* Tarot corner ornaments — double L-brackets with stars */}
        <CornerOrnament corner="tl" />
        <CornerOrnament corner="tr" />
        <CornerOrnament corner="bl" />
        <CornerOrnament corner="br" />

        {/* Content container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px 60px 28px',
          }}
        >
          {/* Stars row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2px' }}>
            <Star size={20} />
            <div style={{ width: '80px', height: '2px', background: 'linear-gradient(to right, transparent, #FEF3C7, transparent)' }} />
            <Star size={28} />
            <div style={{ width: '80px', height: '2px', background: 'linear-gradient(to right, transparent, #FEF3C7, transparent)' }} />
            <Star size={20} />
          </div>

          {/* Header: "Maybe Cat" */}
          <h1
            style={{
              fontFamily: "'Cinzel Decorative', Georgia, serif",
              fontSize: '72px',
              fontWeight: 900,
              color: '#78350F',
              margin: 0,
              lineHeight: 1.1,
              textShadow: [
                '2px 2px 0 #FBBF24',
                '4px 4px 0 rgba(0,0,0,0.15)',
                '0 0 30px rgba(251,191,36,0.4)',
              ].join(', '),
            }}
          >
            Maybe Cat
          </h1>

          {/* Divider — matches site: line ☽ ✧ ☾ line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '-6px 0 8px' }}>
            <div style={{ width: '56px', height: '3px', borderRadius: '9999px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)' }} />
            <span style={{ fontSize: '26px', color: 'rgba(255,255,255,0.8)' }}>☽</span>
            <span style={{ fontSize: '21px', color: 'rgba(255,255,255,0.9)' }}>✧</span>
            <span style={{ fontSize: '26px', color: 'rgba(255,255,255,0.8)' }}>☾</span>
            <div style={{ width: '56px', height: '3px', borderRadius: '9999px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)' }} />
          </div>

          {/* Cat photo with ornate frame */}
          <div
            style={{
              borderRadius: '12px',
              border: '4px solid rgba(254, 243, 199, 0.5)',
              padding: '6px',
              backgroundColor: 'rgba(255, 251, 235, 0.9)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              marginBottom: '6px',
            }}
          >
            <img
              src={catImage}
              alt={catName}
              style={{
                width: '380px',
                height: '380px',
                borderRadius: '8px',
                display: 'block',
                ...(needsBrightening ? { filter: config.brightness.enhanceFilter } : {}),
              }}
            />
          </div>

          {/* Cat name pill */}
          <div
            style={{
              backgroundColor: '#7C2D12',
              borderRadius: '9999px',
              padding: '5px 28px',
              marginBottom: '10px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{
                color: '#FEF3C7',
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: '22px',
              }}
            >
              {catName}
            </span>
          </div>

          {/* Question */}
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: '26px',
              fontStyle: 'italic',
              color: '#FEF3C7',
              textAlign: 'center',
              margin: '0 0 6px 0',
              lineHeight: 1.3,
              maxWidth: '860px',
              opacity: 0.85,
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            {displayQuestion}
          </p>

          {/* Response — natural height, no flex-grow */}
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: '40px',
              fontWeight: 700,
              color: '#FEF3C7',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.25,
              maxWidth: '880px',
              textShadow: [
                '-1px -1px 0 #78350F',
                ' 1px -1px 0 #78350F',
                '-1px  1px 0 #78350F',
                ' 1px  1px 0 #78350F',
                ' 0 2px 6px rgba(0,0,0,0.3)',
              ].join(', '),
            }}
          >
            &ldquo;{responseText}&rdquo;
          </p>

          {/* Attribution */}
          {attribution && (
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: '16px',
                fontStyle: 'italic',
                color: '#FEF3C7',
                textAlign: 'right',
                width: '100%',
                margin: '4px 0 0 0',
                opacity: 0.6,
                paddingRight: '20px',
              }}
            >
              &larr; {attribution}
            </p>
          )}

          {/* Footer tagline — pushed to bottom */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '8px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: '20px',
                color: '#FEF3C7',
                margin: 0,
                letterSpacing: '0.05em',
                opacity: 0.75,
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              Cats answer questions at <span style={{ fontWeight: 700 }}>maybecat.com</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
);

ShareCard.displayName = 'ShareCard';
