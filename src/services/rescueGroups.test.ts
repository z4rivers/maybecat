import { describe, it, expect } from 'vitest';
import { fetchAdoptableCats, isApiConfigured } from './rescueGroups';

describe('rescueGroups', () => {
  describe('isApiConfigured', () => {
    it('returns boolean', () => {
      const result = isApiConfigured();
      expect(typeof result).toBe('boolean');
    });
  });

  describe('fetchAdoptableCats', () => {
    it('returns fallback cats when API is not configured', async () => {
      const cats = await fetchAdoptableCats(5);

      expect(cats).toHaveLength(5);
    });

    it('each cat has required fields', async () => {
      const cats = await fetchAdoptableCats(5);

      for (const cat of cats) {
        expect(cat).toHaveProperty('id');
        expect(cat).toHaveProperty('name');
        expect(cat).toHaveProperty('photo');
        expect(cat).toHaveProperty('description');
        expect(cat).toHaveProperty('age');
        expect(cat).toHaveProperty('breed');
        expect(cat).toHaveProperty('shelterName');
        expect(cat).toHaveProperty('adoptionUrl');
        expect(cat).toHaveProperty('location');
      }
    });

    it('returns up to 5 fallback cats', async () => {
      // Fallback always returns 5 cats (the full fallback set)
      const cats = await fetchAdoptableCats(5);
      expect(cats).toHaveLength(5);
    });

    it('fallback cats have non-empty names', async () => {
      const cats = await fetchAdoptableCats(5);

      for (const cat of cats) {
        expect(cat.name).toBeTruthy();
        expect(cat.name.length).toBeGreaterThan(0);
      }
    });
  });
});
