// Shelter Cat API Integration
// Using RescueGroups.org API (Petfinder API shut down Dec 2025)
// Get your free API key at: https://rescuegroups.org/services/adoptable-pet-data-api/

const RESCUEGROUPS_API_KEY = import.meta.env.VITE_RESCUEGROUPS_API_KEY || '';
const API_BASE = 'https://api.rescuegroups.org/v5';

export interface ShelterCat {
  id: string;
  name: string;
  photo: string;
  description: string;
  age: string;
  breed: string;
  shelterName: string;
  adoptionUrl: string;
  location: string;
}

// Fetch adoptable cats from RescueGroups
export async function fetchAdoptableCats(limit = 5): Promise<ShelterCat[]> {
  // Check if API is configured
  if (!RESCUEGROUPS_API_KEY) {
    console.warn('RescueGroups API not configured, using fallback cats');
    return getFallbackCats();
  }

  try {
    const response = await fetch(
      `${API_BASE}/public/animals/search/available/cats?limit=${limit * 2}&include=pictures,orgs`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Authorization': RESCUEGROUPS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`RescueGroups API error: ${response.status}`);
    }

    const data = await response.json();

    // Build lookup maps for included data
    const pictures: Record<string, string> = {};
    const orgs: Record<string, { name: string; city: string; state: string }> = {};

    if (data.included) {
      for (const item of data.included) {
        if (item.type === 'pictures' && item.attributes?.large?.url) {
          // Pictures are linked to animals via relationships
          pictures[item.id] = item.attributes.large.url;
        }
        if (item.type === 'orgs') {
          orgs[item.id] = {
            name: item.attributes?.name || 'Rescue',
            city: item.attributes?.city || '',
            state: item.attributes?.state || '',
          };
        }
      }
    }

    // Map to our format, filtering for those with photos
    const cats: ShelterCat[] = [];

    for (const animal of data.data || []) {
      if (cats.length >= limit) break;

      const attrs = animal.attributes || {};
      const relationships = animal.relationships || {};

      // Get first picture
      let photoUrl = '';
      if (relationships.pictures?.data?.length > 0) {
        const picId = relationships.pictures.data[0].id;
        photoUrl = pictures[picId] || '';
      }

      // Skip if no photo
      if (!photoUrl) continue;

      // Get org info
      let orgInfo = { name: 'Rescue', city: '', state: '' };
      if (relationships.orgs?.data?.length > 0) {
        const orgId = relationships.orgs.data[0].id;
        orgInfo = orgs[orgId] || orgInfo;
      }

      const location = [orgInfo.city, orgInfo.state].filter(Boolean).join(', ');

      cats.push({
        id: animal.id,
        name: attrs.name || 'Unknown',
        photo: photoUrl,
        description: attrs.descriptionText?.slice(0, 150) || `${attrs.name} is looking for a loving home.`,
        age: attrs.ageGroup || 'Unknown',
        breed: attrs.breedPrimary || 'Domestic',
        shelterName: orgInfo.name,
        adoptionUrl: `https://www.rescuegroups.org/animals/${animal.id}`,
        location: location || 'Unknown',
      });
    }

    // If we don't have enough cats with photos, supplement with fallbacks
    if (cats.length < limit) {
      const fallbacks = getFallbackCats().slice(0, limit - cats.length);
      return [...cats, ...fallbacks];
    }

    return cats;
  } catch (error) {
    console.error('RescueGroups API error:', error);
    return getFallbackCats();
  }
}

// Sample cats for Maybe Cat
// These are curated cats - when RescueGroups API is configured, real adoptable cats will show
function getFallbackCats(): ShelterCat[] {
  return [
    {
      id: 'eva',
      name: 'Eva',
      photo: '/cats/eva_cat.jpg',
      description: 'Elegant and knowing. Sees through everything.',
      age: 'Adult',
      breed: 'Domestic Shorthair',
      shelterName: 'Maybe Cat',
      adoptionUrl: 'https://www.rescuegroups.org/animals/cats',
      location: '',
    },
    {
      id: 'noel',
      name: 'Noel',
      photo: '/cats/noel_cat.jpg',
      description: 'Gentle spirit with deep thoughts.',
      age: 'Adult',
      breed: 'Domestic Shorthair',
      shelterName: 'Maybe Cat',
      adoptionUrl: 'https://www.rescuegroups.org/animals/cats',
      location: '',
    },
    {
      id: 'rhumba',
      name: 'Rhumba',
      photo: '/cats/rhumba_cat.jpg',
      description: 'Mysterious. Dances to their own rhythm.',
      age: 'Adult',
      breed: 'Domestic Shorthair',
      shelterName: 'Maybe Cat',
      adoptionUrl: 'https://www.rescuegroups.org/animals/cats',
      location: '',
    },
    {
      id: 'shoyu',
      name: 'Shoyu',
      photo: '/cats/shoyu_cat.jpg',
      description: 'Small but mighty. Full of flavor.',
      age: 'Young',
      breed: 'Domestic Shorthair',
      shelterName: 'Maybe Cat',
      adoptionUrl: 'https://www.rescuegroups.org/animals/cats',
      location: '',
    },
    {
      id: 'ziggy',
      name: 'Ziggy',
      photo: '/cats/ziggy_cat.jpg',
      description: 'Chaotic wisdom. Expects the unexpected.',
      age: 'Adult',
      breed: 'Domestic Shorthair',
      shelterName: 'Maybe Cat',
      adoptionUrl: 'https://www.rescuegroups.org/animals/cats',
      location: '',
    },
  ];
}

// Check if API is configured
export function isApiConfigured(): boolean {
  return Boolean(RESCUEGROUPS_API_KEY);
}
