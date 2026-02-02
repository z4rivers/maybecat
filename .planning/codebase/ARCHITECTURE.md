# Architecture

**Analysis Date:** 2026-02-02

## Pattern Overview

**Overall:** React SPA with variant testing routes

**Key Characteristics:**
- Single-page application with client-side routing
- Three UI variants of same core experience (/, /a, /b)
- Client-side only - no backend, uses localStorage for persistence
- External API integration for shelter cat data

## Layers

**Entry Layer:**
- Purpose: Bootstrap React application
- Contains: `main.tsx`, `index.html`
- Depends on: React, App component
- Used by: Browser loads these files

**Routing Layer:**
- Purpose: Route management and analytics
- Contains: `src/App.tsx`
- Depends on: React Router, page components
- Used by: Entry layer

**Page Components:**
- Purpose: Full oracle experience implementations
- Contains: `src/pages/Home.tsx`, `VariantA.tsx`, `VariantB.tsx`
- Depends on: Data, services, React hooks
- Used by: Routing layer
- Note: Currently monolithic - each page contains all logic

**Data Layer:**
- Purpose: Static/curated response data
- Contains: `src/data/oracleResponses.ts` (~300 responses)
- Depends on: Nothing
- Used by: Page components

**Service Layer:**
- Purpose: External API integrations
- Contains: `src/services/rescueGroups.ts`
- Depends on: External RescueGroups API
- Used by: Page components

**Config Layer:**
- Purpose: Application configuration
- Contains: `src/config/sponsor.ts`
- Depends on: Nothing
- Used by: Page components

## Data Flow

**Oracle Experience Flow:**

1. Page loads, checks localStorage for cached cat data
2. User uploads cat image OR selects from shelter cats (fetched from API)
3. User types question for the oracle
4. Random delay simulates "thinking" (1500-3000ms first, 800-1600ms subsequent)
5. Random response selected from `oracleResponses` array
6. Animated reveal via Framer Motion
7. User can share/download via html2canvas PNG export
8. All selections saved to localStorage

**State Management:**
- React useState for component state
- localStorage for persistence across sessions
- No global state management (Redux, Zustand, etc.)

## Key Abstractions

**Page Component:**
- Purpose: Full variant implementation
- Examples: `Home.tsx` (Oracle), `VariantA.tsx` (OracleA), `VariantB.tsx` (OracleB)
- Pattern: Monolithic - all state, handlers, UI in single file

**Custom Hook:**
- Purpose: Reusable logic
- Examples: `useDocumentMeta()` - dynamic page title/meta tags
- Pattern: Defined inline in page components (not extracted)

**Service Module:**
- Purpose: External data fetching
- Examples: `rescueGroups.ts` - shelter cat API client
- Pattern: Exported async functions with fallback data

**Decorative Components:**
- Purpose: Reusable visual flourishes
- Examples: CornerVine, CenterMandala, MysticalStar
- Pattern: Pure SVG components defined in page files

## Entry Points

**React Bootstrap:**
- Location: `src/main.tsx`
- Triggers: Page load
- Responsibilities: Create React root, render App

**HTML Entry:**
- Location: `index.html`
- Triggers: Browser navigation
- Responsibilities: Load fonts, meta tags, mount React

**Router:**
- Location: `src/App.tsx`
- Triggers: URL changes
- Responsibilities: Route to correct page variant, analytics

**Page Routes:**
- `/` → `src/pages/Home.tsx` (Oracle)
- `/a` → `src/pages/VariantA.tsx` (OracleA)
- `/b` → `src/pages/VariantB.tsx` (OracleB)

## Error Handling

**Strategy:** Graceful degradation - fail silently with fallbacks

**Patterns:**
- API errors: Console log + fall back to local curated cats
- Image processing errors: Silent fail, image displayed as-is
- Canvas/share errors: Fallback from share to download
- localStorage errors: Implicit trust (assumed available)
- No explicit error boundaries or user-facing error messages

## Cross-Cutting Concerns

**Logging:**
- Console.log for debugging
- Console.error for API failures
- No structured logging or external service

**Validation:**
- Minimal input validation
- No schema validation on API responses
- File upload checks existence only

**Analytics:**
- Vercel Analytics component in App.tsx
- No custom event tracking configured

**Persistence:**
- All state persisted to localStorage
- Cat image (base64), name, shelter cat metadata
- Shared keys across all route variants

---

*Architecture analysis: 2026-02-02*
*Update when major patterns change*
