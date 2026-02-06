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

/** Convert a CDN image URL to a data URL (solves CORS for html2canvas/share card) */
function convertToDataUrl(url: string, maxSize = 800): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;
      if (width > maxSize || height > maxSize) {
        const ratio = Math.min(maxSize / width, maxSize / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) { resolve(null); return; }
      ctx.drawImage(img, 0, 0, width, height);
      try {
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      } catch {
        resolve(null); // CORS blocked toDataURL
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
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
    // Show immediately with CDN URL
    setCatImage(cat.photo);
    setCatNameState(cat.name);
    setShelterCat(cat);
    safeSetItem(STORAGE_KEYS.image, cat.photo);
    safeSetItem(STORAGE_KEYS.name, cat.name);
    safeSetItem(STORAGE_KEYS.shelterCat, JSON.stringify(cat));

    // Convert to data URL in background (solves CORS for share card)
    convertToDataUrl(cat.photo).then(dataUrl => {
      if (dataUrl) {
        setCatImage(dataUrl);
        safeSetItem(STORAGE_KEYS.image, dataUrl);
      }
    });
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
