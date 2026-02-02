import { describe, it, expect } from 'vitest';
import { getRandomResponse, type OracleCategory } from './oracleResponses';

const validCategories: OracleCategory[] = [
  'mystical',
  'nurturing',
  'poetic',
  'cold',
  'angry',
  'heartfelt',
  'judgy',
  'chaotic',
  'wise',
  'existential',
  'demanding',
  'meta',
];

describe('oracleResponses', () => {
  describe('getRandomResponse', () => {
    it('returns an OracleResponse object', () => {
      const response = getRandomResponse();

      expect(response).toHaveProperty('text');
      expect(response).toHaveProperty('category');
    });

    it('response has non-empty text', () => {
      const response = getRandomResponse();

      expect(response.text).toBeTruthy();
      expect(response.text.length).toBeGreaterThan(0);
    });

    it('response has valid category', () => {
      const response = getRandomResponse();

      expect(validCategories).toContain(response.category);
    });

    it('returns different responses over multiple calls', () => {
      // Get 20 responses and check we have some variety
      const responses = new Set<string>();
      for (let i = 0; i < 20; i++) {
        responses.add(getRandomResponse().text);
      }

      // Should have at least 10 unique responses out of 20 calls
      expect(responses.size).toBeGreaterThan(10);
    });

    it('all responses have valid structure', () => {
      // Test 50 random responses
      for (let i = 0; i < 50; i++) {
        const response = getRandomResponse();

        expect(typeof response.text).toBe('string');
        expect(typeof response.category).toBe('string');
        expect(response.text.length).toBeGreaterThan(0);
        expect(validCategories).toContain(response.category);
      }
    });
  });
});
