# RescueGroups.org API Compliance

Source: https://rescuegroups.org/api-terms-of-service/

## Key Requirements for MaybeCat

### 1. Pet Adoption Tracker (REQUIRED)
Must embed tracker image on all public pet detail pages:
```html
<img src="https://tracker.rescuegroups.org/pet/[animalID]" />
```
This is how they track referrals. We MUST include this.

### 2. Attribution (Recommended)
Not required, but good practice:
- "Powered by RescueGroups.org"
- Link to https://rescuegroups.org

### 3. Caching Rules
- Temporary caching only (session-based = compliant)
- Update cached data at least weekly (daily recommended)
- We refresh on each page load = compliant

### 4. Rate Limiting
- Do not flood the API
- Session caching prevents excessive calls
- May receive HTTP 429 if too many requests

### 5. Data Deletion
- Remove org data within 1 business day upon request
- Delete all cached data if API access terminated

### 6. Prohibited
- No permanent storage of pet data
- No sharing data with unauthorized services
- No reverse engineering

## Implementation Checklist

- [x] Session-based caching (not permanent storage)
- [x] Refresh on page load (data freshness)
- [ ] Pet adoption tracker image on cat card
- [ ] Attribution link (recommended)
- [ ] Privacy policy update mentioning RescueGroups data

## Privacy Policy Addition Needed

Add to privacy policy:
"MaybeCat displays adoptable cats from RescueGroups.org. Pet data is 
fetched in real-time and cached temporarily for your session only. 
No pet data is permanently stored."
