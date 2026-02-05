/**
 * Temporary page to compare photo quality between Rescue vs Shelter org types
 * Access at /org-comparison
 */
import { useEffect, useState } from 'react';

const API_BASE = 'https://api.rescuegroups.org/v5/public';
const API_KEY = import.meta.env.VITE_RESCUEGROUPS_API_KEY;

interface CatSample {
  id: string;
  name: string;
  photo: string;
  location: string;
  orgName: string;
}

export default function OrgComparison() {
  const [rescueCats, setRescueCats] = useState<CatSample[]>([]);
  const [shelterCats, setShelterCats] = useState<CatSample[]>([]);
  const [status, setStatus] = useState('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCats() {
      if (!API_KEY) {
        setError('API key not configured');
        return;
      }

      try {
        setStatus('Fetching from API...');

        const params = new URLSearchParams({
          'limit': '150',
          'include': 'orgs',
          'sort': '-animals.updatedDate',
          'filter[status.name]': 'Available',
        });

        const response = await fetch(`${API_BASE}/animals/search/cats?${params}`, {
          headers: {
            'Content-Type': 'application/vnd.api+json',
            'Authorization': API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setStatus(`Got ${data.data?.length || 0} animals, sorting by org type...`);

        // Build org lookup
        const orgsMap = new Map();
        if (data.included) {
          for (const item of data.included) {
            if (item.type === 'orgs') {
              orgsMap.set(item.id, item);
            }
          }
        }

        const rescue: CatSample[] = [];
        const shelter: CatSample[] = [];

        for (const animal of data.data || []) {
          const attrs = animal.attributes;
          const orgId = animal.relationships?.orgs?.data?.[0]?.id;
          const org = orgId ? orgsMap.get(orgId) : null;

          if (!org) continue;

          const photo = (attrs.pictureThumbnailUrl || '').replace('?width=100', '?width=400');
          if (!photo) continue;

          const city = org.attributes?.city || '';
          const state = org.attributes?.state || '';
          const location = city && state ? `${city}, ${state}` : city || state || '';

          const cat: CatSample = {
            id: animal.id,
            name: attrs.name || 'Unknown',
            photo,
            location,
            orgName: org.attributes?.name || 'Unknown',
          };

          // Classify by org name keywords
          const orgNameLower = (org.attributes?.name || '').toLowerCase();

          const isRescue = orgNameLower.includes('rescue') ||
                          orgNameLower.includes('save') ||
                          orgNameLower.includes('haven') ||
                          orgNameLower.includes('sanctuary') ||
                          orgNameLower.includes('foundation') ||
                          orgNameLower.includes('friends of');

          const isShelter = orgNameLower.includes('shelter') ||
                           orgNameLower.includes('humane') ||
                           orgNameLower.includes('spca') ||
                           orgNameLower.includes('animal control') ||
                           orgNameLower.includes('animal services');

          if (isRescue && rescue.length < 10) {
            rescue.push(cat);
          } else if (isShelter && shelter.length < 10) {
            shelter.push(cat);
          }

          if (rescue.length >= 10 && shelter.length >= 10) break;
        }

        setRescueCats(rescue);
        setShelterCats(shelter);
        setStatus(`Found ${rescue.length} rescue, ${shelter.length} shelter`);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    }

    fetchCats();
  }, []);

  const CatGrid = ({ cats, title, color }: { cats: CatSample[]; title: string; color: string }) => (
    <div style={{ flex: 1 }}>
      <h2 style={{
        textAlign: 'center',
        padding: '12px',
        background: color,
        borderRadius: '8px',
        marginBottom: '15px',
        color: color === '#4ecca3' ? '#1a1a2e' : 'white'
      }}>
        {title}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px'
      }}>
        {cats.map(cat => (
          <div key={cat.id} style={{
            background: '#2a2a4e',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <img
              src={cat.photo}
              alt={cat.name}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placekitten.com/400/300'; }}
            />
            <div style={{ padding: '8px' }}>
              <div style={{ fontWeight: 'bold', color: '#ffd93d', fontSize: '13px' }}>{cat.name}</div>
              <div style={{ color: '#888', fontSize: '11px' }}>{cat.location}</div>
              <div style={{ color: '#666', fontSize: '10px', fontStyle: 'italic', marginTop: '3px' }}>
                {cat.orgName}
              </div>
            </div>
          </div>
        ))}
        {cats.length === 0 && <div style={{ color: '#888', padding: '20px' }}>No cats found</div>}
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a2e',
      color: '#f0f0f0',
      padding: '20px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#ffd93d', marginBottom: '10px' }}>
        🐱 Rescue vs Shelter Photo Comparison
      </h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '25px' }}>
        {error ? <span style={{ color: '#e94560' }}>{error}</span> : status}
      </p>

      <div style={{ display: 'flex', gap: '30px', maxWidth: '1400px', margin: '0 auto' }}>
        <CatGrid cats={rescueCats} title="RESCUE Organizations" color="#4ecca3" />
        <CatGrid cats={shelterCats} title="SHELTER Organizations" color="#e94560" />
      </div>

      <div style={{
        maxWidth: '600px',
        margin: '30px auto',
        padding: '20px',
        background: '#2a2a4e',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#ffd93d', marginBottom: '10px' }}>Compare photo quality</h3>
        <p style={{ color: '#aaa', lineHeight: 1.6 }}>
          Look for: clarity, lighting, cat visibility, professional appearance.<br />
          Which type consistently has better photos?
        </p>
      </div>
    </div>
  );
}
