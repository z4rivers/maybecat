import { useState, useCallback } from 'react';
import { getRandomResponse, type OracleResponse } from '../data/oracleResponses';
import { config } from '../config';

export interface UseOracleReturn {
  question: string;
  setQuestion: (q: string) => void;
  response: OracleResponse | null;
  isThinking: boolean;
  askOracle: () => void;
  askAgain: () => void;
  clearResponse: () => void;
}

export function useOracle(): UseOracleReturn {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<OracleResponse | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const askOracle = useCallback(() => {
    if (!question.trim()) return;
    setIsThinking(true);
    const { base, variance } = config.thinking.firstAsk;
    const thinkingTime = base + Math.random() * variance;
    setTimeout(() => {
      setResponse(getRandomResponse());
      setIsThinking(false);
    }, thinkingTime);
  }, [question]);

  const askAgain = useCallback(() => {
    setIsThinking(true);
    const { base, variance } = config.thinking.askAgain;
    const thinkingTime = base + Math.random() * variance;
    setTimeout(() => {
      setResponse(getRandomResponse());
      setIsThinking(false);
    }, thinkingTime);
  }, []);

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
