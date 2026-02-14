import { useState, useCallback } from 'react';
import type { ShelterCat } from '../services/rescueGroups';

const STORAGE_KEYS = {
  image: 'oracleCatImage',
  name: 'oracleCatName',
  shelterCat: 'oracleShelterCat',
} as const;

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage quota exceeded — silently continue, app still works in-memory
  }
}

/** Rewrite a RescueGroups CDN URL to go through our same-origin proxy */
function proxyImageUrl(url: string): string {
  const CDN_HOST = 'https://cdn.rescuegroups.org';
  if (url.startsWith(CDN_HOST)) {
    return '/api/cat-image' + url.slice(CDN_HOST.length);
  }
  return url;
}

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
    safeSetItem(STORAGE_KEYS.image, image);
    setShelterCat(null);
    localStorage.removeItem(STORAGE_KEYS.shelterCat);
  }, []);

  const setCatName = useCallback((name: string) => {
    setCatNameState(name);
    safeSetItem(STORAGE_KEYS.name, name);
  }, []);

  const setCatFromShelter = useCallback((cat: ShelterCat) => {
    // Route CDN images through our proxy to avoid CORS issues (share card, canvas)
    const proxiedUrl = proxyImageUrl(cat.photo);
    setCatImage(proxiedUrl);
    setCatNameState(cat.name);
    setShelterCat(cat);
    safeSetItem(STORAGE_KEYS.image, proxiedUrl);
    safeSetItem(STORAGE_KEYS.name, cat.name);
    safeSetItem(STORAGE_KEYS.shelterCat, JSON.stringify(cat));
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
