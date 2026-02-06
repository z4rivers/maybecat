import { useState, useCallback } from 'react';
import { getRandomResponse, type OracleResponse } from '../data/oracleResponses';
import { config } from '../config';
import { track } from '@vercel/analytics';

export interface UseOracleReturn {
  question: string;
  setQuestion: (q: string) => void;
  response: OracleResponse | null;
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

  const askOracle = useCallback(() => {
    if (!question.trim()) return;
    setIsThinking(true);
    const { base, variance } = config.thinking.firstAsk;
    const thinkingTime = base + Math.random() * variance;
    setTimeout(() => {
      const r = getRandomResponse({ isShelterCat });
      setResponse(r);
      setIsThinking(false);
      track('question_asked', { type: 'first' });
      track('response_viewed', { category: r.category });
    }, thinkingTime);
  }, [question, isShelterCat]);

  const askAgain = useCallback(() => {
    setIsThinking(true);
    const { base, variance } = config.thinking.askAgain;
    const thinkingTime = base + Math.random() * variance;
    setTimeout(() => {
      const r = getRandomResponse({ isShelterCat });
      setResponse(r);
      setIsThinking(false);
      track('question_asked', { type: 'ask_again' });
      track('response_viewed', { category: r.category });
    }, thinkingTime);
  }, [isShelterCat]);

  const clearResponse = useCallback(() => {
    setResponse(null);
  }, []);

  return {
    question,
    setQuestion,
    response,
    isThinking,
    askOracle,
    askAgain,
    clearResponse,
  };
}
