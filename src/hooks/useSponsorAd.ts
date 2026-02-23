import { useState, useCallback } from 'react';
import { sponsors, type Sponsor } from '../config/sponsor';

function safeTrack(event: string, data?: Record<string, string>) {
  try {
    import('@vercel/analytics').then(({ track }) => track(event, data)).catch(() => {});
  } catch { /* no-op */ }
}

function selectWeightedRandom(pool: Sponsor[]): Sponsor | null {
  if (pool.length === 0) return null;
  const totalWeight = pool.reduce((sum, s) => sum + (s.weight ?? 1), 0);
  let roll = Math.random() * totalWeight;
  for (const s of pool) {
    roll -= s.weight ?? 1;
    if (roll <= 0) return s;
  }
  return pool[pool.length - 1];
}

export function useSponsorAd() {
  const [sponsor] = useState<Sponsor | null>(() => {
    const selected = selectWeightedRandom(sponsors);
    if (selected) {
      safeTrack('ad_impression', { sponsor: selected.name });
    }
    return selected;
  });

  const handleAdClick = useCallback(() => {
    if (sponsor) {
      safeTrack('ad_click', { sponsor: sponsor.name });
    }
  }, [sponsor]);

  return { sponsor, handleAdClick };
}
