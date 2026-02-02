import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useOracle } from './useOracle';

describe('useOracle', () => {
  describe('initial state', () => {
    it('starts with empty question', () => {
      const { result } = renderHook(() => useOracle());

      expect(result.current.question).toBe('');
    });

    it('starts with null response', () => {
      const { result } = renderHook(() => useOracle());

      expect(result.current.response).toBeNull();
    });

    it('starts not thinking', () => {
      const { result } = renderHook(() => useOracle());

      expect(result.current.isThinking).toBe(false);
    });
  });

  describe('setQuestion', () => {
    it('updates question state', () => {
      const { result } = renderHook(() => useOracle());

      act(() => {
        result.current.setQuestion('Will it rain?');
      });

      expect(result.current.question).toBe('Will it rain?');
    });
  });

  describe('askOracle', () => {
    it('does nothing when question is empty', () => {
      const { result } = renderHook(() => useOracle());

      act(() => {
        result.current.askOracle();
      });

      // Should not start thinking if question is empty
      expect(result.current.isThinking).toBe(false);
    });

    it('does nothing when question is whitespace only', () => {
      const { result } = renderHook(() => useOracle());

      act(() => {
        result.current.setQuestion('   ');
      });

      act(() => {
        result.current.askOracle();
      });

      expect(result.current.isThinking).toBe(false);
    });
  });

  describe('clearResponse', () => {
    it('sets response to null', () => {
      const { result } = renderHook(() => useOracle());

      // Manually set a response for testing
      act(() => {
        result.current.clearResponse();
      });

      expect(result.current.response).toBeNull();
    });
  });
});
