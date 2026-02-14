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
 * Real cat photos from public/cats/ to maintain authentic feel
 */
const FALLBACK_CATS: ShelterCat[] = [
  {
    id: 'fallback-eva',
    name: 'Eva',
    photo: '/cats/eva_cat.jpg',
    description: '',
    age: '',
    breed: '',
    sex: '',
    shelterName: '',
    location: '',
    adoptionUrl: '',
    trackerUrl: ''
  },
  {
    id: 'fallback-noel',
    name: 'Noel',
    photo: '/cats/noel_cat.jpg',
    description: '',
    age: '',
    breed: '',
    sex: '',
    shelterName: '',
    location: '',
    adoptionUrl: '',
    trackerUrl: ''
  },
  {
    id: 'fallback-rhumba',
    name: 'Rhumba',
    photo: '/cats/rhumba_cat.jpg',
    description: '',
    age: '',
    breed: '',
    sex: '',
    shelterName: '',
    location: '',
    adoptionUrl: '',
    trackerUrl: ''
  },
  {
    id: 'fallback-shoyu',
    name: 'Shoyu',
    photo: '/cats/shoyu_cat.jpg',
    description: '',
    age: '',
    breed: '',
    sex: '',
    shelterName: '',
    location: '',
    adoptionUrl: '',
    trackerUrl: ''
  },
  {
    id: 'fallback-ziggy',
    name: 'Ziggy',
    photo: '/cats/ziggy_cat.jpg',
    description: '',
    age: '',
    breed: '',
    sex: '',
    shelterName: '',
    location: '',
    adoptionUrl: '',
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
 * Transform a V5 API animal into our ShelterCat format
 * Returns null if the animal should be filtered out
 */
function transformAnimal(animal: V5Animal, orgsMap: Map<string, V5Org>, picturesMap: Map<string, V5Picture>): ShelterCat | null {
  const attrs = animal.attributes;
  const name = attrs.name || '';

  const orgId = animal.relationships?.orgs?.data?.[0]?.id;
  const org = orgId ? orgsMap.get(orgId) : null;

  // Use full-size image from pictures relationship instead of upscaled thumbnail
  const pictureId = animal.relationships?.pictures?.data?.[0]?.id;
  const picture = pictureId ? picturesMap.get(pictureId) : null;
  const photo = picture?.attributes?.large?.url
    || picture?.attributes?.original?.url
    || (attrs.pictureThumbnailUrl ? attrs.pictureThumbnailUrl.replace('?width=100', '?width=500') : '');

  const city = org?.attributes?.city || '';
  const state = org?.attributes?.state || '';
  const location = city && state ? `${city}, ${state}` : city || state || '';

  if (!location || !photo) return null;

  // Clean display hacks — shelters prefix with ! or * to sort to top
  const cleanName = name.replace(/^[!*#]+\s*/, '').trim();
  if (!cleanName) return null;

  const nameLower = cleanName.toLowerCase();
  const redFlags = [
    'foster', 'adoption', 'medical', 'kitten', 'pending',
    'hold', 'reserved', 'urgent', 'hospice', 'sanctuary',
    'special need', 'tbd', 'tba', 'unknown', 'temp', 'needs',
    'courtesy', 'stray', 'bonded',
  ];
  if (redFlags.some(flag => nameLower.includes(flag))) return null;
  if (/^[\d\s#-]+$/.test(cleanName)) return null;
  // Filter names containing numbers — these are shelter IDs, not real names
  if (/\d/.test(cleanName)) return null;

  // Filter bonded pairs, qualifications, and multi-cat names
  if (cleanName.includes('&') || cleanName.includes('(') || /\band\b/i.test(cleanName)) return null;

  return {
    id: animal.id,
    name: cleanName || 'Mystery Cat',
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
}

/**
 * Fetch raw cats from the API with a given sort order
 */
async function fetchCatsFromApi(requestLimit: number, sort: string): Promise<{
  animals: V5Animal[];
  orgs: Map<string, V5Org>;
  pictures: Map<string, V5Picture>;
} | null> {
  const params = new URLSearchParams({
    'limit': String(requestLimit),
    'include': 'orgs,pictures',
    'sort': sort,
    'filter[status.name]': 'Available',
  });

  const url = `${API_BASE}/animals/search/cats?${params}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Authorization': API_KEY,
    },
  });

  if (!response.ok) return null;

  const data: V5Response = await response.json();
  const orgs = new Map<string, V5Org>();
  const pictures = new Map<string, V5Picture>();
  if (data.included) {
    for (const item of data.included) {
      if (item.type === 'orgs') {
        orgs.set(item.id, item as V5Org);
      } else if (item.type === 'pictures') {
        pictures.set(item.id, item as V5Picture);
      }
    }
  }

  return { animals: data.data || [], orgs, pictures };
}

/**
 * Build the full filtered pool from raw API data.
 * - Transforms & quality-filters animals
 * - Caps each shelter at MAX_PER_SHELTER to prevent one org dominating
 * - Caps kittens at ~20%
 */
const MAX_PER_SHELTER = 3;

function buildFilteredPool(
  animals: V5Animal[],
  orgs: Map<string, V5Org>,
  pictures: Map<string, V5Picture>,
): ShelterCat[] {
  const cats = animals
    .map(animal => transformAnimal(animal, orgs, pictures))
    .filter((cat): cat is ShelterCat => cat !== null);

  // Cap per shelter — no single org dominates the pool
  const shelterCount = new Map<string, number>();
  const diversified = cats.filter(cat => {
    const key = cat.shelterName || cat.location;
    const count = shelterCount.get(key) || 0;
    if (count >= MAX_PER_SHELTER) return false;
    shelterCount.set(key, count + 1);
    return true;
  });

  // Cap kittens at ~20%
  const maxKittens = Math.ceil(diversified.length * 0.2);
  const kittens = diversified.filter(c => c.age === 'Baby');
  const nonKittens = diversified.filter(c => c.age !== 'Baby');

  return [
    ...nonKittens,
    ...kittens.slice(0, maxKittens),
  ];
}

/**
 * Fetch adoptable cats from RescueGroups API v5
 * Fetches a large pool, filters for quality + shelter diversity,
 * then returns the full pool for caching. Callers pick random subsets.
 */
export async function fetchAdoptableCats(limit: number = 10): Promise<ShelterCat[]> {
  if (!isApiConfigured()) {
    console.info('RescueGroups API not configured, using fallback cats');
    return FALLBACK_CATS.slice(0, limit);
  }

  try {
    // Fetch with different sort orders in parallel — each surfaces different cats
    // from the database, dramatically increasing the pool.
    // Avoid deterministic sorts like 'animals.name' which always return the same A-B cats.
    const sorts = ['-animals.updatedDate', '-animals.createdDate', 'animals.updatedDate'];
    const results = await Promise.allSettled(
      sorts.map(sort => fetchCatsFromApi(50, sort))
    );

    // Combine and deduplicate
    const allAnimals: V5Animal[] = [];
    const allOrgs = new Map<string, V5Org>();
    const allPictures = new Map<string, V5Picture>();
    const seenIds = new Set<string>();

    for (const result of results) {
      if (result.status === 'fulfilled' && result.value) {
        for (const animal of result.value.animals) {
          if (!seenIds.has(animal.id)) {
            seenIds.add(animal.id);
            allAnimals.push(animal);
          }
        }
        for (const [id, org] of result.value.orgs) allOrgs.set(id, org);
        for (const [id, pic] of result.value.pictures) allPictures.set(id, pic);
      }
    }

    if (allAnimals.length === 0) {
      return FALLBACK_CATS.slice(0, limit);
    }

    console.log(`API returned ${allAnimals.length} unique animals (from ${sorts.length} sort orders)`);

    const pool = buildFilteredPool(allAnimals, allOrgs, allPictures);

    console.log(`Filtered pool: ${pool.length} cats (shelter-diversified, kitten-capped)`);

    if (pool.length === 0) {
      return FALLBACK_CATS.slice(0, limit);
    }

    // Return the full pool — caching layer stores it, display layer picks random subsets
    return pool;

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
 * v3: Random state selection, removed sort, kitten cap
 * v4: Large pool + shelter cap + instant refresh from cache
 * v5: Filter cats with numbers in names (shelter IDs)
 * v6: Drop alphabetical sort (always returned same A-B name cats like Butter Bean)
 */
const CACHE_VERSION = 6;
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
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cached));
  } catch {
    // localStorage quota exceeded — cats still work in-memory
  }
}

/**
 * Track recently shown cat IDs so refresh gives fresh faces
 */
const RECENT_CATS_KEY = 'maybecat_recent_cat_ids';

function getRecentCatIds(): Set<string> {
  try {
    const stored = localStorage.getItem(RECENT_CATS_KEY);
    if (stored) return new Set(JSON.parse(stored));
  } catch { /* no-op */ }
  return new Set();
}

function addRecentCatIds(ids: string[]): void {
  const recent = getRecentCatIds();
  for (const id of ids) recent.add(id);
  // Keep last 60 to avoid blocking too much of the pool
  const arr = [...recent];
  while (arr.length > 60) arr.shift();
  try {
    localStorage.setItem(RECENT_CATS_KEY, JSON.stringify(arr));
  } catch { /* no-op */ }
}

/**
 * Pick a random subset from a pool, preferring cats not recently shown
 */
function pickRandom(pool: ShelterCat[], count: number): ShelterCat[] {
  const recentIds = getRecentCatIds();
  const fresh = pool.filter(c => !recentIds.has(c.id));
  // Use fresh cats if enough, otherwise mix in recent ones
  const source = fresh.length >= count ? fresh : pool;
  const shuffled = [...source].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, count);
  addRecentCatIds(picked.map(c => c.id));
  return picked;
}

/**
 * Get cats with caching - persists across page reloads for up to 24 hours
 * Returns a random subset from the cached pool
 */
export async function getCachedOrFetchCats(limit: number = 10): Promise<ShelterCat[]> {
  // Check cache first
  const cached = getCachedCats();
  if (cached && cached.length > 0) {
    return pickRandom(cached, limit);
  }

  // Fetch fresh pool and cache it
  const pool = await fetchAdoptableCats(limit);
  setCachedCats(pool);
  return pickRandom(pool, limit);
}

/**
 * Show different cats — picks a new random subset from cached pool (instant, no API call)
 * Only re-fetches from API if cache is empty or expired
 */
export async function refreshCats(limit: number = 10): Promise<ShelterCat[]> {
  const cached = getCachedCats();
  if (cached && cached.length > 0) {
    // Pick a different random subset from the existing pool — instant!
    return pickRandom(cached, limit);
  }

  // Cache empty/expired — fetch fresh from API
  const pool = await fetchAdoptableCats(limit);
  setCachedCats(pool);
  return pickRandom(pool, limit);
}

/**
 * Clear cache (for testing or user-initiated reset)
 */
export function clearCatCache(): void {
  localStorage.removeItem(CACHE_KEY);
}
