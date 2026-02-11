# Codebase Structure

**Analysis Date:** 2026-02-06

## Directory Layout

```
maybecat/
├── index.html              # Entry point, SEO meta tags, fonts, JSON-LD
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite: React + Tailwind plugins
├── vitest.config.ts        # Test runner: jsdom, globals, setup
├── tsconfig.json           # TypeScript composite config
├── tsconfig.app.json       # App TS config (ES2022, strict)
├── tsconfig.node.json      # Build tool TS config (ES2023)
├── eslint.config.js        # ESLint flat config
├── tailwind.config.js      # Custom fonts (cinzel, georgia)
├── vercel.json             # Cache headers + SPA rewrite
├── .env.example            # Required env vars template
│
├── public/                 # Static assets (served as-is)
│   ├── favicon.ico         # Browser tab icon
│   ├── og-maybecat.png     # OG share image (1200x630)
│   ├── site.webmanifest    # PWA manifest
│   ├── robots.txt          # SEO crawl directives
│   ├── sitemap.xml         # SEO sitemap
│   ├── cats/               # Fallback cat photos (5 real images)
│   │   ├── eva_cat.jpg
│   │   ├── noel_cat.jpg
│   │   ├── rhumba_cat.jpg
│   │   ├── shoyu_cat.jpg
│   │   └── ziggy_cat.jpg
│   └── sponsors/           # Sponsor logos
│       └── purrfoot-logo.png
│
├── src/
│   ├── main.tsx            # React 19 root (StrictMode)
│   ├── App.tsx             # Router + ErrorBoundary + Analytics
│   ├── index.css           # Tailwind import + global styles
│   ├── vite-env.d.ts       # Vite env type declarations
│   │
│   ├── pages/              # Route-level components
│   │   ├── Home.tsx        # Main oracle page (682 lines)
│   │   └── OrgComparison.tsx  # Debug page for API analysis
│   │
│   ├── hooks/              # Business logic hooks
│   │   ├── useOracle.ts        # Question/response/thinking state
│   │   ├── useOracle.test.ts
│   │   ├── useCatStorage.ts    # Cat persistence + CORS handling
│   │   ├── useCatStorage.test.ts
│   │   └── useDocumentMeta.ts  # Document title management
│   │
│   ├── components/         # Reusable UI components
│   │   ├── ErrorBoundary.tsx   # React error boundary
│   │   ├── NameInputModal.tsx  # Cat naming modal
│   │   ├── AdoptButton.tsx     # Adoption CTA
│   │   ├── decorative/         # Tarot-inspired SVG art
│   │   │   ├── CornerVine.tsx
│   │   │   ├── CenterMandala.tsx
│   │   │   ├── MysticalStar.tsx
│   │   │   ├── OrnateFrame.tsx
│   │   │   ├── MagicButton.tsx
│   │   │   ├── CelestialButton.tsx
│   │   │   └── index.ts       # Barrel export
│   │   └── oracle/             # Oracle-specific components
│   │       ├── CatCard.tsx
│   │       ├── QuestionInput.tsx
│   │       ├── OracleResponseCard.tsx
│   │       ├── OracleHeader.tsx
│   │       ├── OracleTagline.tsx
│   │       ├── ExampleQuestions.tsx
│   │       ├── ResponseActions.tsx
│   │       └── index.ts       # Barrel export
│   │
│   ├── services/           # External API integration
│   │   ├── rescueGroups.ts     # RescueGroups API v5 client
│   │   └── rescueGroups.test.ts
│   │
│   ├── data/               # Static content
│   │   ├── oracleResponses.ts  # ~800 responses, 12 categories
│   │   └── oracleResponses.test.ts
│   │
│   ├── config/             # Configuration
│   │   └── sponsor.ts      # PURRfoot sponsor metadata
│   ├── config.ts           # Tunable values (brightness, delays, export)
│   │
│   └── test/               # Test utilities
│       ├── setup.ts        # localStorage mock, jest-dom matchers
│       └── smoke.test.ts   # Basic setup verification
│
├── .planning/              # Project documentation
│   ├── PROJECT.md
│   ├── ROADMAP.md
│   ├── STATE.md
│   ├── CAT-VOICE-GUIDE.md
│   ├── SHARE-CARD-PLAN.md
│   ├── GSD-VIRAL-SPRINT.md
│   └── codebase/          # This directory
│
└── dist/                   # Build output (Vercel deploy source)
```

## Key File Locations

**Entry Points:**
- `index.html` - HTML entry, SEO tags, Google Fonts, JSON-LD
- `src/main.tsx` - React root mount (StrictMode)
- `src/App.tsx` - Router, ErrorBoundary, Analytics

**Configuration:**
- `src/config.ts` - Tunable behavior (brightness threshold, thinking delays, export scale)
- `src/config/sponsor.ts` - Sponsor metadata (PURRfoot)
- `vercel.json` - Deploy config (cache headers, SPA rewrite)
- `.env.local` - API keys (gitignored)

**Core Logic:**
- `src/pages/Home.tsx` - Main oracle experience (largest file)
- `src/hooks/useOracle.ts` - Question/response cycle
- `src/hooks/useCatStorage.ts` - Cat data persistence
- `src/services/rescueGroups.ts` - Shelter cat API
- `src/data/oracleResponses.ts` - All oracle responses

**Testing:**
- `src/test/setup.ts` - localStorage mock, jest-dom
- `src/**/*.test.ts` - Colocated with source

## Naming Conventions

**Files:**
- PascalCase.tsx for React components (Home.tsx, ErrorBoundary.tsx)
- camelCase.ts for hooks (useOracle.ts), services (rescueGroups.ts), data (oracleResponses.ts)
- *.test.ts suffix for test files (colocated)
- index.ts for barrel exports

**Directories:**
- Lowercase for feature groups (decorative/, oracle/, hooks/, services/)
- Plural for collections (pages/, components/, hooks/)

## Where to Add New Code

**New Oracle Responses:**
- `src/data/oracleResponses.ts` → add to appropriate category array

**New Hook:**
- `src/hooks/useXxx.ts` + `src/hooks/useXxx.test.ts`

**New Component:**
- `src/components/Xxx.tsx` (standalone)
- `src/components/oracle/Xxx.tsx` (oracle-specific, add to barrel)
- `src/components/decorative/Xxx.tsx` (decorative, add to barrel)

**New Page/Route:**
- `src/pages/Xxx.tsx` + add route in `src/App.tsx`

**New Service:**
- `src/services/xxx.ts` + `src/services/xxx.test.ts`

**New Config:**
- `src/config.ts` for tunable values

**Static Assets:**
- `public/` for images, manifests, SEO files

---

*Structure analysis: 2026-02-06*
*Update when directory structure changes*
