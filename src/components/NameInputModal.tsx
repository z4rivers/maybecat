import { motion } from 'framer-motion';

export interface NameInputModalProps {
  onSave: (name: string) => void;
}

export function NameInputModal({ onSave }: NameInputModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(69, 26, 3, 0.85)' }}
    >
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
          <h3
            className="text-2xl font-bold text-amber-900 mt-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Name Your Oracle
          </h3>
          <span className="text-amber-700 text-2xl">☾</span>
        </div>

        <input
          type="text"
          placeholder="Enter their name..."
          className="w-full px-4 py-3 rounded-xl bg-amber-50 border-2 border-amber-700 text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-800 text-lg text-center"
          style={{ fontFamily: 'Georgia, serif' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSave((e.target as HTMLInputElement).value);
          }}
          autoFocus
        />

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onSave('')}
            className="flex-1 px-4 py-3 rounded-xl bg-amber-700 text-amber-100 hover:bg-amber-800 transition-colors font-bold"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Skip
          </button>
          <button
            onClick={() => {
              const input = document.querySelector('input[type="text"]') as HTMLInputElement;
              onSave(input?.value || '');
            }}
            className="flex-1 px-4 py-3 rounded-xl text-white hover:opacity-90 transition-colors font-bold"
            style={{
              background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)',
              fontFamily: 'Georgia, serif',
            }}
          >
            ✦ Confirm ✦
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
