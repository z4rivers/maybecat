import { useState, useCallback, useRef, useEffect } from 'react';
import { getRandomResponse, getEasterEggResponse, type OracleResponse } from '../data/oracleResponses';
import { config } from '../config';

/** Safe analytics tracking — never breaks the UX if analytics fails */
function safeTrack(event: string, data?: Record<string, string>) {
  try {
    import('@vercel/analytics').then(({ track }) => track(event, data)).catch(() => {});
  } catch {
    // Analytics unavailable — no-op
  }
}

export interface UseOracleReturn {
  question: string;
  setQuestion: (q: string) => void;
  response: OracleResponse | null;
  setResponse: (r: OracleResponse | null) => void; // DEBUG — remove before shipping
  isThinking: boolean;
  askOracle: () => void;
  askAgain: () => void;
  clearResponse: () => void;
}

export function useOracle(options?: { isShelterCat?: boolean }): UseOracleReturn {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<OracleResponse | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const isShelterCat = options?.isShelterCat;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const askOracle = useCallback(() => {
    if (!question.trim()) return;
    setIsThinking(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const { base, variance } = config.thinking.firstAsk;
    const thinkingTime = base + Math.random() * variance;
    timeoutRef.current = setTimeout(() => {
      const r = getEasterEggResponse(question) || getRandomResponse({ isShelterCat });
      setResponse(r);
      setIsThinking(false);
      safeTrack('question_asked', { type: 'first' });
      safeTrack('response_viewed', { category: r.category });
    }, thinkingTime);
  }, [question, isShelterCat]);

  const askAgain = useCallback(() => {
    setIsThinking(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const { base, variance } = config.thinking.askAgain;
    const thinkingTime = base + Math.random() * variance;
    timeoutRef.current = setTimeout(() => {
      const r = getRandomResponse({ isShelterCat });
      setResponse(r);
      setIsThinking(false);
      safeTrack('question_asked', { type: 'ask_again' });
      safeTrack('response_viewed', { category: r.category });
    }, thinkingTime);
  }, [isShelterCat]);

  const clearResponse = useCallback(() => {
    setResponse(null);
  }, []);

  return {
    question,
    setQuestion,
    response,
    setResponse, // DEBUG — remove before shipping
    isThinking,
    askOracle,
    askAgain,
    clearResponse,
  };
}
