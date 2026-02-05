import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCatStorage } from './useCatStorage';

describe('useCatStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('initial state', () => {
    it('returns null/empty when localStorage is empty', () => {
      const { result } = renderHook(() => useCatStorage());

      expect(result.current.catImage).toBeNull();
      expect(result.current.catName).toBe('');
      expect(result.current.shelterCat).toBeNull();
    });

    it('loads existing data from localStorage', () => {
      localStorage.setItem('oracleCatImage', 'test-image');
      localStorage.setItem('oracleCatName', 'Whiskers');

      const { result } = renderHook(() => useCatStorage());

      expect(result.current.catImage).toBe('test-image');
      expect(result.current.catName).toBe('Whiskers');
    });

    it('loads shelter cat from localStorage', () => {
      const shelterCat = { id: '1', name: 'Luna', photo: 'luna.jpg' };
      localStorage.setItem('oracleShelterCat', JSON.stringify(shelterCat));

      const { result } = renderHook(() => useCatStorage());

      expect(result.current.shelterCat).toEqual(shelterCat);
    });
  });

  describe('corrupted localStorage (Phase 2 protection)', () => {
    it('returns null for corrupted JSON instead of crashing', () => {
      localStorage.setItem('oracleShelterCat', 'not valid json {{{');

      // This should NOT throw - Phase 2 added try-catch
      const { result } = renderHook(() => useCatStorage());

      expect(result.current.shelterCat).toBeNull();
    });
  });

  describe('setCatFromUpload', () => {
    it('sets cat image and clears shelter cat', () => {
      localStorage.setItem('oracleShelterCat', JSON.stringify({ id: '1', name: 'Luna' }));

      const { result } = renderHook(() => useCatStorage());

      act(() => {
        result.current.setCatFromUpload('new-image-base64');
      });

      expect(result.current.catImage).toBe('new-image-base64');
      expect(result.current.shelterCat).toBeNull();
      expect(localStorage.getItem('oracleCatImage')).toBe('new-image-base64');
      expect(localStorage.getItem('oracleShelterCat')).toBeNull();
    });
  });

  describe('setCatName', () => {
    it('updates name in state and localStorage', () => {
      const { result } = renderHook(() => useCatStorage());

      act(() => {
        result.current.setCatName('Mr. Fluffington');
      });

      expect(result.current.catName).toBe('Mr. Fluffington');
      expect(localStorage.getItem('oracleCatName')).toBe('Mr. Fluffington');
    });
  });

  describe('setCatFromShelter', () => {
    it('sets all fields from shelter cat', () => {
      const { result } = renderHook(() => useCatStorage());

      const shelterCat = {
        id: '123',
        name: 'Mittens',
        photo: 'mittens.jpg',
        description: 'A sweet cat',
        age: 'Adult',
        breed: 'Tabby',
        sex: 'Female',
        shelterName: 'Happy Paws',
        adoptionUrl: 'https://example.com',
        location: 'NYC',
        trackerUrl: 'https://tracker.rescuegroups.org/pet/123',
      };

      act(() => {
        result.current.setCatFromShelter(shelterCat);
      });

      expect(result.current.catImage).toBe('mittens.jpg');
      expect(result.current.catName).toBe('Mittens');
      expect(result.current.shelterCat).toEqual(shelterCat);
      expect(localStorage.getItem('oracleCatImage')).toBe('mittens.jpg');
      expect(localStorage.getItem('oracleCatName')).toBe('Mittens');
      expect(JSON.parse(localStorage.getItem('oracleShelterCat')!)).toEqual(shelterCat);
    });
  });

  describe('clearCat', () => {
    it('clears all state and localStorage', () => {
      localStorage.setItem('oracleCatImage', 'image');
      localStorage.setItem('oracleCatName', 'Name');
      localStorage.setItem('oracleShelterCat', JSON.stringify({ id: '1' }));

      const { result } = renderHook(() => useCatStorage());

      act(() => {
        result.current.clearCat();
      });

      expect(result.current.catImage).toBeNull();
      expect(result.current.catName).toBe('');
      expect(result.current.shelterCat).toBeNull();
      expect(localStorage.getItem('oracleCatImage')).toBeNull();
      expect(localStorage.getItem('oracleCatName')).toBeNull();
      expect(localStorage.getItem('oracleShelterCat')).toBeNull();
    });
  });
});
