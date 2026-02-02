import { useState, useCallback } from 'react';
import type { ShelterCat } from '../services/rescueGroups';

const STORAGE_KEYS = {
  image: 'oracleCatImage',
  name: 'oracleCatName',
  shelterCat: 'oracleShelterCat',
} as const;

export interface UseCatStorageReturn {
  catImage: string | null;
  catName: string;
  shelterCat: ShelterCat | null;
  setCatFromUpload: (image: string) => void;
  setCatName: (name: string) => void;
  setCatFromShelter: (cat: ShelterCat) => void;
  clearCat: () => void;
}

export function useCatStorage(): UseCatStorageReturn {
  const [catImage, setCatImage] = useState<string | null>(() =>
    localStorage.getItem(STORAGE_KEYS.image)
  );

  const [catName, setCatNameState] = useState(() =>
    localStorage.getItem(STORAGE_KEYS.name) || ''
  );

  const [shelterCat, setShelterCat] = useState<ShelterCat | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.shelterCat);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const setCatFromUpload = useCallback((image: string) => {
    setCatImage(image);
    localStorage.setItem(STORAGE_KEYS.image, image);
    setShelterCat(null);
    localStorage.removeItem(STORAGE_KEYS.shelterCat);
  }, []);

  const setCatName = useCallback((name: string) => {
    setCatNameState(name);
    localStorage.setItem(STORAGE_KEYS.name, name);
  }, []);

  const setCatFromShelter = useCallback((cat: ShelterCat) => {
    setCatImage(cat.photo);
    setCatNameState(cat.name);
    setShelterCat(cat);
    localStorage.setItem(STORAGE_KEYS.image, cat.photo);
    localStorage.setItem(STORAGE_KEYS.name, cat.name);
    localStorage.setItem(STORAGE_KEYS.shelterCat, JSON.stringify(cat));
  }, []);

  const clearCat = useCallback(() => {
    setCatImage(null);
    setCatNameState('');
    setShelterCat(null);
    localStorage.removeItem(STORAGE_KEYS.image);
    localStorage.removeItem(STORAGE_KEYS.name);
    localStorage.removeItem(STORAGE_KEYS.shelterCat);
  }, []);

  return {
    catImage,
    catName,
    shelterCat,
    setCatFromUpload,
    setCatName,
    setCatFromShelter,
    clearCat,
  };
}
