# External Integrations

**Analysis Date:** 2026-02-06

## APIs & External Services

**RescueGroups.org API (Primary Data Source):**
- Purpose: Fetch adoptable shelter cats with photos, names, locations, adoption URLs
- Endpoint: `https://api.rescuegroups.org/v5/public/animals/search/cats`
- Format: JSON:API v5
- Auth: Bearer token via `VITE_RESCUEGROUPS_API_KEY` env var
- Implementation: `src/services/rescueGroups.ts`
- Caching: localStorage with 24hr TTL (versioned key: `rescueGroupsCats_v2`)
- Fallback: 5 real cat photos in `public/cats/` if API fails
- Filtering: Excludes foster, medical, pending, kitten, hospice, sanctuary, bonded, number-only names
- Requests 150 cats, filters to quality results, shuffles before returning
- TOS requires tracker image URLs in share cards

**Google Fonts CDN:**
- Purpose: Cinzel Decorative font (decorative serif for headings)
- Integration: `<link>` tags in `index.html` with preconnect
- Font display: swap (shows system font while loading)

## Data Storage

**localStorage (Client-Side Only):**
- `oracleCatImage` - Cat photo (base64 data URL or CDN URL)
- `oracleCatName` - Cat's display name
- `oracleShelterCat` - Full shelter cat JSON (id, name, photo, location, adoptionUrl)
- `rescueGroupsCats_v2` - Cached API response with timestamp (24hr TTL)
- Safety: `safeSetItem()` wraps all writes with try-catch
- No sensitive data stored

**No Database:** All oracle responses embedded in code, no server-side persistence

## Authentication & Identity

**None.** No user accounts, no auth. Fully anonymous usage.

## Monitoring & Observability

**Analytics:**
- Vercel Analytics (`@vercel/analytics` v1.6.1)
- Component: `<Analytics />` in `src/App.tsx`
- Custom events via `safeTrack()` wrapper (never crashes app)
- Events tracked:
  - `cat_selected` (source: upload/shelter)
  - `question_asked` (type: first/ask_again)
  - `response_viewed` (category)
  - `adoption_clicked` (name, location)
- Dashboard: Vercel project settings

**Error Tracking:**
- None (no Sentry, LogRocket, etc.)
- ErrorBoundary catches render errors, shows fallback UI
- API errors logged to console only

**Google Search Console:**
- Verification: meta tag in `index.html`
- Status: Configured, needs user to complete setup in Google dashboard

## CI/CD & Deployment

**Hosting:**
- Vercel at maybecat.com
- Deployment: Automatic on main branch push
- Config: `vercel.json`

**Cache Strategy:**
- `/assets/(.*)` → 1 year immutable (hash-based filenames)
- `/cats/(.*)` → 1 day (fallback cat photos)
- `/sitemap.xml`, `/robots.txt`, `/site.webmanifest` → 1 day
- HTML → Vercel defaults
- SPA rewrite: all routes → `/index.html`

**CI Pipeline:**
- None configured (no GitHub Actions)
- Build command: `tsc -b && vite build`

## Environment Configuration

**Development:**
- Required: `VITE_RESCUEGROUPS_API_KEY` in `.env.local`
- Template: `.env.example`
- No other env vars needed

**Production:**
- Same API key configured in Vercel dashboard
- No staging environment

## SEO Integration

**Static in `index.html`:**
- OpenGraph: title, description, image (1200x630), type, URL, site_name, locale
- Twitter Card: summary_large_image
- JSON-LD: WebSite + WebApplication schemas
- Canonical URL: https://maybecat.com/
- Sitemap: `public/sitemap.xml`
- Robots: `public/robots.txt` (allows all, references sitemap)

**PWA:**
- `public/site.webmanifest` (standalone display, pink/gold theme)

---

*Integration audit: 2026-02-06*
*Update when adding/removing external services*
