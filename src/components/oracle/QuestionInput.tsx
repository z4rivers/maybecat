import { motion } from 'framer-motion';

export interface QuestionInputProps {
  question: string;
  onQuestionChange: (question: string) => void;
  onSubmit: () => void;
  catName?: string;
  isThinking?: boolean;
  disabled?: boolean;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export function QuestionInput({
  question,
  onQuestionChange,
  onSubmit,
  catName = 'your cat',
  isThinking = false,
  disabled = false,
  placeholder,
  buttonText,
  className = '',
}: QuestionInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && question.trim() && !disabled && !isThinking) {
      onSubmit();
    }
  };

  return (
    <div className={`w-full max-w-2xl space-y-2 ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "I may know. I may care. I may answer."}
          className="w-full px-5 py-2 rounded-xl bg-amber-50 border-2 border-amber-700 text-amber-900 placeholder-amber-600/60 focus:outline-none focus:border-amber-800 focus:ring-2 focus:ring-amber-500/30 text-lg"
          style={{ fontFamily: "Georgia, serif", boxShadow: 'inset 0 2px 8px rgba(120,53,15,0.1)' }}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-600/40">✧</div>
      </div>

      <motion.button
        onClick={onSubmit}
        disabled={!question.trim() || isThinking || disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 rounded-xl text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        style={{
          background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)',
          boxShadow: '0 4px 20px rgba(124,45,18,0.4)',
          fontFamily: "Georgia, serif"
        }}
      >
        {buttonText || `✦ Ask ${catName} ✦`}
      </motion.button>
    </div>
  );
}
