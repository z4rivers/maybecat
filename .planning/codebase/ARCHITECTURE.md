# Architecture

**Analysis Date:** 2026-02-06

## Pattern Overview

**Overall:** Single Page Application (SPA) with hooks-based architecture

**Key Characteristics:**
- No backend — fully client-side React app
- Data embedded in code (oracle responses) + external API (shelter cats)
- localStorage for persistence (no database)
- Vercel edge deployment (static files + SPA rewrite)

## Layers

**Page Layer:**
- Purpose: Route-level components, orchestrate hooks and UI
- Contains: `src/pages/Home.tsx` (main oracle, 682 lines), `src/pages/OrgComparison.tsx` (debug)
- Depends on: Hook layer, component layer, service layer
- Used by: Router in `src/App.tsx`

**Hook Layer:**
- Purpose: Encapsulate business logic and state management
- Contains: `useOracle`, `useCatStorage`, `useDocumentMeta`
- Depends on: Service layer, data layer, config
- Used by: Page layer

**Component Layer:**
- Purpose: Reusable presentational components
- Contains: `src/components/decorative/` (SVG art), `src/components/oracle/` (oracle UI), `src/components/NameInputModal.tsx`, `src/components/ErrorBoundary.tsx`
- Depends on: Props only (mostly presentational)
- Used by: Page layer

**Service Layer:**
- Purpose: External API integration
- Contains: `src/services/rescueGroups.ts` (RescueGroups API v5)
- Depends on: Config, browser fetch API
- Used by: Hook layer, page layer

**Data Layer:**
- Purpose: Static content
- Contains: `src/data/oracleResponses.ts` (~800 responses, 12 categories)
- Depends on: Nothing
- Used by: Hook layer (useOracle)

**Config Layer:**
- Purpose: Centralized tunable values
- Contains: `src/config.ts` (brightness, delays, export), `src/config/sponsor.ts`
- Depends on: Nothing
- Used by: All layers

## Data Flow

**User Journey:**

1. App loads → `getCachedOrFetchCats()` checks localStorage cache (24hr TTL)
2. Cache miss → fetches from RescueGroups API v5, filters, shuffles, caches
3. Cache hit or API failure → uses cached cats or 5 fallback cats from `public/cats/`
4. User sees carousel of 4 shelter cats + "Your Cat" upload card
5. User picks cat → `setCatFromShelter(cat)` or `setCatFromUpload(base64)`
6. Shelter cats: CDN URL shown immediately, background conversion to data URL (CORS fix)
7. User uploads: `FileReader.readAsDataURL()` → name modal → stored in localStorage
8. Oracle reading card appears with cat photo, question input
9. User types question → `askOracle()` → configurable thinking delay (1.5-3s first, 0.8-1.6s subsequent)
10. `getRandomResponse()` picks random response from weighted categories
11. Response displayed with `preventOrphans()` text formatting
12. User can "Ask Again", type new question, or go back to cat selection

**State Management:**
- React hooks only (no Redux/Zustand)
- localStorage for persistence: cat image, cat name, shelter cat data, API cache
- `safeSetItem()` wrapper prevents quota overflow crashes

## Entry Points

**Browser Entry:**
- Location: `index.html` → `src/main.tsx` → `src/App.tsx`
- Triggers: User navigates to maybecat.com
- Responsibilities: Mount React root, set up routing, error boundary, analytics

**Routes:**
- `/` → `Oracle` component (Home.tsx) — main experience
- `/org-comparison` → `OrgComparison` — debug/testing page

## Error Handling

**Strategy:** Layered defense — error boundary for renders, try/catch for async, graceful fallbacks

**Patterns:**
- `ErrorBoundary` wraps entire app (catches React render errors)
- `safeSetItem()` / `safeGetItem()` wraps localStorage (quota/corruption)
- `safeTrack()` wraps analytics (never breaks UX)
- API failures → fall back to 5 local cat photos
- Image CORS errors → continue with CDN URL instead of data URL

## Cross-Cutting Concerns

**Analytics:**
- Vercel Analytics `<Analytics />` in App.tsx
- Custom events via `safeTrack()`: cat_selected, question_asked, response_viewed, adoption_clicked
- Dynamic import, never crashes app

**SEO:**
- Static meta tags in `index.html` (OG, Twitter Card, JSON-LD)
- `useDocumentMeta()` hook for title updates
- Sitemap, robots.txt, canonical URL, structured data

**Caching:**
- Vercel headers: 1yr immutable for `/assets/`, 1 day for static files
- localStorage: 24hr TTL for API responses (versioned cache key)

---

*Architecture analysis: 2026-02-06*
*Update when major patterns change*
