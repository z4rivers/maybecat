export interface ExampleQuestionsProps {
  questions?: string[];
  onSelect: (question: string) => void;
  className?: string;
}

const DEFAULT_QUESTIONS = [
  "Should I quit my job?",
  "Am I making a mistake?",
  "What do they really think?",
  "Is this the right decision?",
];

export function ExampleQuestions({
  questions = DEFAULT_QUESTIONS,
  onSelect,
  className = '',
}: ExampleQuestionsProps) {
  return (
    <div className={`text-center mt-3 ${className}`}>
      <p className="text-amber-800/70 text-sm mb-2" style={{ fontFamily: "Georgia, serif" }}>
        Try asking:
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {questions.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="px-3 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-sm hover:bg-amber-200/80 transition-colors border border-amber-600/30"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
