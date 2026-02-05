/**
 * RescueGroups.org API Integration (v5)
 * Fetches adoptable cats to serve as the oracle's face
 *
 * API Docs: https://api.rescuegroups.org/v5/public/docs
 * TOS: https://rescuegroups.org/api-terms-of-service/
 */

const API_BASE = 'https://api.rescuegroups.org/v5/public';
const API_KEY = import.meta.env.VITE_RESCUEGROUPS_API_KEY;

/**
 * ShelterCat interface - matches existing useCatStorage hook expectations
 */
export interface ShelterCat {
  id: string;
  name: string;
  photo: string;           // Main photo URL
  description: string;
  age: string;
  breed: string;
  sex: string;
  shelterName: string;
  location: string;        // "City, State" format
  adoptionUrl: string;
  // REQUIRED by RescueGroups TOS - must embed this tracker image
  trackerUrl: string;
}

// Alias for clarity
export type AdoptableCat = ShelterCat;

/**
 * v5 API response types
 */
interface V5Animal {
  type: 'animals';
  id: string;
  attributes: {
    name: string;
    breedPrimary: string;
    ageGroup: string;
    sex: string;
    descriptionText: string;
    pictureThumbnailUrl: string;
    pictureCount: number;
    url: string;
  };
  relationships?: {
    orgs?: { data: Array<{ type: string; id: string }> };
    pictures?: { data: Array<{ type: string; id: string }> };
  };
}

interface V5Org {
  type: 'orgs';
  id: string;
  attributes: {
    name: string;
    city: string;
    state: string;
    postalcode: string;
    url: string;
  };
}

interface V5Picture {
  type: 'pictures';
  id: string;
  attributes: {
    large: { url: string };
    original: { url: string };
    small: { url: string };
  };
}

interface V5Response {
  data: V5Animal[];
  included?: Array<V5Org | V5Picture>;
  meta?: { count: number };
}

/**
 * Fallback cats when API is unavailable
 * Using placeholder images - these are NOT real adoptable cats
 */
// Fallback cats with stable placeholder images (used when API fails)
// Using placekitten for consistent images
const FALLBACK_CATS: ShelterCat[] = [
  {
    id: 'fallback-1',
    name: 'Whiskers',
    photo: 'https://placekitten.com/400/400',
    description: 'A mysterious oracle cat with ancient wisdom.',
    age: 'Adult',
    breed: 'Domestic Shorthair',
    sex: 'Unknown',
    shelterName: 'The Mystical Realm',
    location: 'The Void',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-2',
    name: 'Shadow',
    photo: 'https://placekitten.com/401/401',
    description: 'Sees all. Judges all. Naps frequently.',
    age: 'Senior',
    breed: 'Domestic Longhair',
    sex: 'Unknown',
    shelterName: 'The Mystical Realm',
    location: 'The Void',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-3',
    name: 'Luna',
    photo: 'https://placekitten.com/402/402',
    description: 'Named after the moon. Equally aloof.',
    age: 'Young',
    breed: 'Tabby',
    sex: 'Female',
    shelterName: 'The Mystical Realm',
    location: 'The Void',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-4',
    name: 'Midnight',
    photo: 'https://placekitten.com/403/403',
    description: 'Only appears after dark. Or whenever there\'s food.',
    age: 'Adult',
    breed: 'Black Cat',
    sex: 'Male',
    shelterName: 'The Mystical Realm',
    location: 'The Void',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-5',
    name: 'Oracle',
    photo: 'https://placekitten.com/404/404',
    description: 'The original. The legend. Still judging you.',
    age: 'Ancient',
    breed: 'Unknown',
    sex: 'Unknown',
    shelterName: 'The Mystical Realm',
    location: 'The Void',
    adoptionUrl: '#',
    trackerUrl: ''
  }
];

/**
 * Check if API is configured
 */
export function isApiConfigured(): boolean {
  return Boolean(API_KEY && API_KEY !== 'your_api_key_here');
}

/**
 * Fetch adoptable cats from RescueGroups API v5
 */
export async function fetchAdoptableCats(limit: number = 10): Promise<ShelterCat[]> {
  // Return fallback cats if API not configured
  if (!isApiConfigured()) {
    console.info('RescueGroups API not configured, using fallback cats');
    return FALLBACK_CATS.slice(0, limit);
  }

  // Build v5 API URL - use /animals/search/cats/ view for cats only
  const params = new URLSearchParams({
    'limit': String(limit * 3), // Request more to filter down
    'include': 'orgs',
    'sort': '-animals.updatedDate',  // Most recently updated first (avoids ancient listings)
    'filter[status.name]': 'Available',
  });

  // Use the cats view endpoint which pre-filters for cats
  const url = `${API_BASE}/animals/search/cats?${params}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Authorization': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: V5Response = await response.json();

    if (!data.data || data.data.length === 0) {
      console.warn('RescueGroups API v5 returned no data');
      console.warn('Full response:', JSON.stringify(data, null, 2));
      return FALLBACK_CATS.slice(0, limit);
    }

    console.log(`API returned ${data.data.length} animals, ${data.included?.length || 0} included items`);

    // Build lookup map for orgs
    const orgsMap = new Map<string, V5Org>();
    if (data.included) {
      for (const item of data.included) {
        if (item.type === 'orgs') {
          orgsMap.set(item.id, item as V5Org);
        }
      }
    }

    // Debug: log first animal
    if (data.data[0]) {
      console.log('RescueGroups API v5 sample animal:', JSON.stringify(data.data[0], null, 2));
      const orgId = data.data[0].relationships?.orgs?.data?.[0]?.id;
      if (orgId && orgsMap.has(orgId)) {
        console.log('Sample org data:', JSON.stringify(orgsMap.get(orgId), null, 2));
      }
    }

    // Transform API response to ShelterCat interface
    const cats = data.data
      .map((animal): ShelterCat | null => {
        const attrs = animal.attributes;
        const name = attrs.name || '';

        // Get org data
        const orgId = animal.relationships?.orgs?.data?.[0]?.id;
        const org = orgId ? orgsMap.get(orgId) : null;

        // Use pictureThumbnailUrl but request larger size (default is width=100)
        const thumbnailUrl = attrs.pictureThumbnailUrl || '';
        const photo = thumbnailUrl.replace('?width=100', '?width=500');

        // Build location string
        const city = org?.attributes?.city || '';
        const state = org?.attributes?.state || '';
        const location = city && state ? `${city}, ${state}` : city || state || '';

        // Skip cats without location
        if (!location) {
          console.warn(`Filtered out no-location: ${name}`);
          return null;
        }

        // Skip cats without photos
        if (!photo) {
          console.warn(`Filtered out no-photo: ${name}`);
          return null;
        }

        // Red flag keywords in name
        const nameLower = name.toLowerCase();
        const redFlags = [
          'foster', 'adoption', 'medical', 'kitten', 'pending',
          'hold', 'reserved', 'urgent', 'hospice', 'sanctuary',
          'special need', 'tbd', 'tba', 'unknown', 'temp', 'needs',
          'courtesy', 'stray', 'bonded',
        ];
        if (redFlags.some(flag => nameLower.includes(flag))) {
          console.warn(`Filtered out red flag name: ${name}`);
          return null;
        }

        // Skip number-only names
        if (/^[\d\s#-]+$/.test(name.trim())) {
          console.warn(`Filtered out number-only name: ${name}`);
          return null;
        }

        return {
          id: animal.id,
          name: name || 'Mystery Cat',
          photo,
          description: attrs.descriptionText?.slice(0, 200) || 'A cat seeking their forever home.',
          age: attrs.ageGroup || 'Unknown',
          breed: attrs.breedPrimary || 'Domestic',
          sex: attrs.sex || 'Unknown',
          shelterName: org?.attributes?.name || '',
          location,
          adoptionUrl: attrs.url || org?.attributes?.url || `https://toolkit.rescuegroups.org/iframe/ata/pet?animalID=${animal.id}`,
          trackerUrl: `https://tracker.rescuegroups.org/pet/${animal.id}`,
        };
      })
      .filter((cat): cat is ShelterCat => cat !== null);

    console.log(`After filtering: ${cats.length} cats remain`);

    if (cats.length === 0) {
      console.warn('All cats filtered out! Using fallbacks.');
      return FALLBACK_CATS.slice(0, limit);
    }

    // Shuffle for variety (API returns sorted by updatedDate)
    const shuffled = cats.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, limit);

  } catch (error) {
    console.error('Failed to fetch adoptable cats:', error);
    return FALLBACK_CATS.slice(0, limit);
  }
}

/**
 * Get a single random adoptable cat
 */
export async function getRandomAdoptableCat(): Promise<ShelterCat> {
  const cats = await fetchAdoptableCats(20);
  const randomIndex = Math.floor(Math.random() * cats.length);
  return cats[randomIndex];
}

/**
 * Persistent cache with TTL
 * TOS compliant: caches up to 24 hours (TOS requires weekly update minimum)
 *
 * CACHE_VERSION: Increment when API logic changes to invalidate old cached data
 * v1: Initial
 * v2: Added sort by updatedDate + width=500 images
 */
const CACHE_VERSION = 2;
const CACHE_KEY = `rescueGroupsCats_v${CACHE_VERSION}`;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface CachedCats {
  cats: ShelterCat[];
  timestamp: number;
}

function getCachedCats(): ShelterCat[] | null {
  try {
    const stored = localStorage.getItem(CACHE_KEY);
    if (!stored) return null;

    const cached: CachedCats = JSON.parse(stored);
    const age = Date.now() - cached.timestamp;

    // Return cached cats if within TTL
    if (age < CACHE_TTL_MS && cached.cats.length > 0) {
      return cached.cats;
    }

    // Cache expired
    return null;
  } catch {
    return null;
  }
}

function setCachedCats(cats: ShelterCat[]): void {
  const cached: CachedCats = {
    cats,
    timestamp: Date.now()
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cached));
}

/**
 * Get cats with caching - persists across page reloads for up to 24 hours
 */
export async function getCachedOrFetchCats(limit: number = 10): Promise<ShelterCat[]> {
  // Check cache first
  const cached = getCachedCats();
  if (cached && cached.length >= limit) {
    return cached.slice(0, limit);
  }

  // Fetch fresh and cache
  const cats = await fetchAdoptableCats(limit);
  setCachedCats(cats);
  return cats;
}

/**
 * Force refresh - clears cache and fetches new batch
 */
export async function refreshCats(limit: number = 10): Promise<ShelterCat[]> {
  localStorage.removeItem(CACHE_KEY);
  const cats = await fetchAdoptableCats(limit);
  setCachedCats(cats);
  return cats;
}

/**
 * Clear cache (for testing or user-initiated reset)
 */
export function clearCatCache(): void {
  localStorage.removeItem(CACHE_KEY);
}
