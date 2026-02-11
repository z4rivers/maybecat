# Technology Stack

**Analysis Date:** 2026-02-06

## Languages

**Primary:**
- TypeScript ~5.9.3 - All application code (strict mode)
- JSX/TSX - React component templating

**Secondary:**
- CSS - Tailwind 4 utility classes + inline style objects

## Runtime

**Environment:**
- Node.js (ES module via `"type": "module"`)
- Browser runtime (React 19 SPA)
- Target: ES2022 (app), ES2023 (node tooling)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 19.2.0 - UI framework (automatic JSX transform)
- React Router DOM 7.13.0 - Client-side routing (2 routes: `/`, `/org-comparison`)
- Framer Motion 12.29.2 - Animation library (spring physics, AnimatePresence)

**Styling:**
- Tailwind CSS 4.1.18 - Utility-first CSS
- @tailwindcss/vite 4.1.18 - Vite integration plugin
- tailwind-merge 3.4.0 - Class conflict resolution
- clsx 2.1.1 - Conditional CSS class composition

**Testing:**
- Vitest 4.0.18 - Unit testing (Vite-native)
- @testing-library/react 16.3.2 - React component testing
- @testing-library/jest-dom 6.9.1 - DOM assertion matchers
- jsdom 28.0.0 - Browser DOM simulation

**Build/Dev:**
- Vite 7.2.4 - Bundler and dev server
- @vitejs/plugin-react 5.1.1 - React Fast Refresh
- TypeScript compiler (tsc) - Type checking before builds
- ESLint 9.39.1 - Linting (flat config format)

## Key Dependencies

**Critical:**
- lucide-react 0.563.0 - Icon library (Heart, Camera, Sparkles, RefreshCw, ChevronLeft/Right, X)
- html2canvas 1.4.1 - DOM-to-canvas rendering (planned for share card export)
- @vercel/analytics 1.6.1 - Web analytics with custom event tracking

## Configuration

**Environment:**
- `.env.local` for local development (gitignored)
- `VITE_RESCUEGROUPS_API_KEY` - Required for shelter cat API
- `.env.example` documents required variables

**Build:**
- `vite.config.ts` - React + Tailwind plugins
- `tsconfig.json` - Composite TypeScript config
- `tsconfig.app.json` - App: ES2022, strict, react-jsx
- `tsconfig.node.json` - Tooling: ES2023
- `vitest.config.ts` - Test runner (jsdom, globals)
- `eslint.config.js` - Flat config (TS + React hooks + React refresh)
- `tailwind.config.js` - Custom fonts (cinzel, georgia)

## Platform Requirements

**Development:**
- Any platform with Node.js
- No Docker or external dependencies

**Production:**
- Vercel hosting at maybecat.com
- SPA rewrites via `vercel.json`
- Cache headers: 1yr immutable for hashed assets, 1 day for static files

---

*Stack analysis: 2026-02-06*
*Update after major dependency changes*
