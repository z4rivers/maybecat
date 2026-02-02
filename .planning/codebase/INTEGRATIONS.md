# External Integrations

**Analysis Date:** 2026-02-02

## APIs & External Services

**RescueGroups.org API v5 (Primary):**
- Purpose: Fetches adoptable shelter cats with photos and metadata
- SDK/Client: Custom fetch implementation in `src/services/rescueGroups.ts`
- Endpoint: `https://api.rescuegroups.org/v5`
- Auth: API key via `VITE_RESCUEGROUPS_API_KEY` environment variable
- Format: JSON:API
- Features:
  - Filters for adoptable cats only
  - Extracts photos and shelter info
  - Generates adoption URLs
- Fallback: Hardcoded local cat data if API not configured

## Data Storage

**Databases:**
- None - fully client-side application

**File Storage:**
- None cloud storage
- User images stored as base64 in localStorage
- Fallback cat images served from `public/cats/`

**Caching:**
- Browser localStorage only
- Stores:
  - `oracleCatImage` - base64 data URL of uploaded image
  - `oracleCatName` - user-entered cat name
  - `oracleShelterCat` - JSON stringified shelter cat metadata

## Authentication & Identity

**Auth Provider:**
- None - anonymous usage
- No user accounts or authentication

**Vercel OIDC:**
- Used for deployment/CI only (not user-facing)
- Token stored in `.env.local`

## Monitoring & Observability

**Error Tracking:**
- None configured
- Errors logged to console only

**Analytics:**
- Vercel Analytics (@vercel/analytics 1.6.1)
- Integrated via `<Analytics />` component in App.tsx
- Tracks page views and basic metrics

**Logs:**
- Console.log/console.error only
- No external logging service

## CI/CD & Deployment

**Hosting:**
- Vercel - SPA hosting
- Configuration: `vercel.json`
- Cache control: no-cache for all routes
- SPA rewrites: all routes → /index.html

**CI Pipeline:**
- No explicit CI configuration found
- Deployment likely via Vercel Git integration

## Environment Configuration

**Development:**
- Required env vars:
  - `VITE_RESCUEGROUPS_API_KEY` - API key for shelter cats
- Secrets location: `.env.local` (gitignored)
- Fallback: App works without API key using local demo cats

**Production:**
- Secrets management: Vercel environment variables
- Same env var: `VITE_RESCUEGROUPS_API_KEY`

**.env.local Example:**
```
VITE_RESCUEGROUPS_API_KEY=your_api_key_here
```

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## Sponsor Integration

**PURRfoot:**
- Not an API integration - configuration only
- Config location: `src/config/sponsor.ts`
- Displays sponsor logo, tagline, and CTA URL
- Link: https://purrfoot.com (affiliate link)

## Third-Party Libraries (Network-Dependent)

**Google Fonts:**
- Cinzel Decorative font loaded in `index.html`
- Required for proper typography rendering

**html2canvas:**
- Used for PNG export functionality
- Dynamically imported when user shares/downloads
- No external network calls (local DOM capture)

---

*Integration audit: 2026-02-02*
*Update when adding/removing external services*
