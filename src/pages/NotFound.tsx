import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)',
      }}
    >
      <p
        className="text-2xl md:text-3xl leading-relaxed max-w-md"
        style={{ color: '#78350F', fontFamily: 'Georgia, serif' }}
      >
        It seems you are lost. You can ask a cat for help back{' '}
        <Link to="/" className="underline font-bold hover:opacity-80 transition-opacity">
          this way
        </Link>
        .
      </p>
    </div>
  );
}
