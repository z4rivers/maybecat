/**
 * RescueGroups.org API Integration
 * Fetches adoptable cats to serve as the oracle's face
 *
 * API Docs: https://userguide.rescuegroups.org/display/APIDG/HTTP+API
 * TOS: https://rescuegroups.org/api-terms-of-service/
 */

const API_URL = 'https://api.rescuegroups.org/http/v2.json';
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

interface RescueGroupsResponse {
  status: string;
  messages?: { messageText: string }[];
  foundRows?: number;
  data?: Record<string, RescueGroupsAnimal>;
}

interface RescueGroupsAnimal {
  animalID: string;
  animalName: string;
  animalPrimaryBreed: string;
  animalGeneralAge: string;
  animalSex: string;
  animalDescriptionPlain: string;
  animalPictures?: Array<{
    original: { url: string };
    large: { url: string };
    small: { url: string };
  }>;
  animalOrgID: string;
  animalLocationCitystate: string;
  animalRescueID: string;
}

/**
 * Fallback cats when API is unavailable
 * Using placeholder images - these are NOT real adoptable cats
 */
const FALLBACK_CATS: ShelterCat[] = [
  {
    id: 'fallback-1',
    name: 'Whiskers',
    photo: 'https://placecats.com/millie/300/300',
    description: 'A mysterious oracle cat with ancient wisdom.',
    age: 'Adult',
    breed: 'Domestic Shorthair',
    sex: 'Unknown',
    shelterName: 'The Mystical Realm',
    location: 'Beyond the Veil',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-2',
    name: 'Shadow',
    photo: 'https://placecats.com/neo/300/300',
    description: 'Sees all. Judges all. Naps frequently.',
    age: 'Senior',
    breed: 'Domestic Longhair',
    sex: 'Unknown',
    shelterName: 'The Mystical Realm',
    location: 'The Shadows',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-3',
    name: 'Luna',
    photo: 'https://placecats.com/bella/300/300',
    description: 'Named after the moon. Equally aloof.',
    age: 'Young',
    breed: 'Tabby',
    sex: 'Female',
    shelterName: 'The Mystical Realm',
    location: 'Moonlight Manor',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-4',
    name: 'Midnight',
    photo: 'https://placecats.com/neo_banana/300/300',
    description: 'Only appears after dark. Or whenever there\'s food.',
    age: 'Adult',
    breed: 'Black Cat',
    sex: 'Male',
    shelterName: 'The Mystical Realm',
    location: 'The Witching Hour',
    adoptionUrl: '#',
    trackerUrl: ''
  },
  {
    id: 'fallback-5',
    name: 'Oracle',
    photo: 'https://placecats.com/millie_neo/300/300',
    description: 'The original. The legend. Still judging you.',
    age: 'Ancient',
    breed: 'Unknown',
    sex: 'Unknown',
    shelterName: 'The Mystical Realm',
    location: 'Everywhere and Nowhere',
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
 * Fetch adoptable cats from RescueGroups API
 */
export async function fetchAdoptableCats(limit: number = 10): Promise<ShelterCat[]> {
  // Return fallback cats if API not configured
  if (!isApiConfigured()) {
    console.info('RescueGroups API not configured, using fallback cats');
    return FALLBACK_CATS.slice(0, limit);
  }

  const requestBody = {
    apikey: API_KEY,
    objectType: 'animals',
    objectAction: 'publicSearch',
    search: {
      resultStart: 0,
      resultLimit: limit,
      resultSort: 'animalID',
      resultOrder: 'asc',
      filters: [
        {
          fieldName: 'animalStatus',
          operation: 'equals',
          criteria: 'Available'
        },
        {
          fieldName: 'animalSpecies',
          operation: 'equals',
          criteria: 'Cat'
        },
        {
          fieldName: 'animalPictures',
          operation: 'notblank',
          criteria: ''
        }
      ],
      filterProcessing: '1',
      fields: [
        'animalID',
        'animalName',
        'animalPrimaryBreed',
        'animalGeneralAge',
        'animalSex',
        'animalDescriptionPlain',
        'animalPictures',
        'animalOrgID',
        'animalLocationCitystate',
        'animalRescueID'
      ]
    }
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: RescueGroupsResponse = await response.json();

    if (data.status !== 'ok' || !data.data) {
      console.warn('RescueGroups API returned no data:', data.messages);
      return FALLBACK_CATS.slice(0, limit);
    }

    // Transform API response to ShelterCat interface
    const cats = Object.values(data.data).map((animal): ShelterCat => ({
      id: animal.animalID,
      name: animal.animalName || 'Mystery Cat',
      photo: animal.animalPictures?.[0]?.large?.url || animal.animalPictures?.[0]?.original?.url || '',
      description: animal.animalDescriptionPlain?.slice(0, 200) || 'A cat seeking their forever home.',
      age: animal.animalGeneralAge || 'Unknown',
      breed: animal.animalPrimaryBreed || 'Domestic',
      sex: animal.animalSex || 'Unknown',
      shelterName: '', // Would need separate org lookup
      location: animal.animalLocationCitystate || 'Unknown Location',
      adoptionUrl: `https://www.rescuegroups.org/pet/${animal.animalID}`,
      // REQUIRED by TOS: tracker image for referral tracking
      trackerUrl: `https://tracker.rescuegroups.org/pet/${animal.animalID}`
    })).filter(cat => cat.photo);

    // Return cats or fallback if none found
    return cats.length > 0 ? cats : FALLBACK_CATS.slice(0, limit);

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
 */
const CACHE_KEY = 'rescueGroupsCats';
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
