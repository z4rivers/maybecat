export interface ResponseActionsProps {
  onAskAgain: () => void;
  onShare: () => void;
  onCopyHashtags: () => void;
  hashtagsCopied?: boolean;
  isThinking?: boolean;
  className?: string;
}

export function ResponseActions({
  onAskAgain,
  onShare,
  onCopyHashtags,
  hashtagsCopied = false,
  isThinking = false,
  className = '',
}: ResponseActionsProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex gap-3">
        <button
          onClick={onAskAgain}
          disabled={isThinking}
          className="flex-1 py-3 rounded-xl bg-amber-800 text-amber-100 font-bold hover:bg-amber-900 transition-colors disabled:opacity-50"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Ask Again
        </button>
        <button
          onClick={onShare}
          disabled={isThinking}
          className="flex-1 py-3 rounded-xl bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors disabled:opacity-50"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Share Wisdom
        </button>
      </div>
      {/* Hashtag suggestions */}
      <div className="text-center pt-1">
        <button
          onClick={onCopyHashtags}
          className="text-amber-700/60 text-sm hover:text-amber-800 transition-colors cursor-pointer"
          style={{ fontFamily: "Georgia, serif" }}
          title="Click to copy hashtags"
        >
          {hashtagsCopied ? '✓ Copied!' : '#AskMaybeCat #CatWisdom'}
        </button>
      </div>
    </div>
  );
}
