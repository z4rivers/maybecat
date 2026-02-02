# Technology Stack

**Analysis Date:** 2026-02-02

## Languages

**Primary:**
- TypeScript 5.9.3 - All application source code
- JSX/TSX - React component templating

**Secondary:**
- Plain CSS - Tailwind utility classes + custom styles

## Runtime

**Environment:**
- Node.js (ES module via `"type": "module"`)
- No explicit version pinned; depends on development environment
- Browser runtime for client-side SPA

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 19.2.0 - UI framework with hooks-based architecture
- React Router DOM 7.13.0 - Client-side routing for variant routes (/a, /b)
- Framer Motion 12.29.2 - Animation library for UI transitions

**Styling:**
- Tailwind CSS 4.1.18 - Utility-first CSS framework
- @tailwindcss/vite 4.1.18 - Vite integration plugin

**Build/Dev:**
- Vite 7.2.4 - Modern bundler for development and production builds
- @vitejs/plugin-react 5.1.1 - React Fast Refresh for HMR
- TypeScript compiler (tsc) - Type checking before builds
- ESLint 9.39.1 - Code quality with TypeScript support

## Key Dependencies

**Critical:**
- html2canvas 1.4.1 - Converts DOM to PNG for download/share functionality
- lucide-react 0.563.0 - Icon library (Camera, Heart, Sparkles, X icons)
- @vercel/analytics 1.6.1 - Web analytics for usage tracking

**Utilities:**
- clsx 2.1.1 - Conditional CSS class composition
- tailwind-merge 3.4.0 - Resolves Tailwind CSS class conflicts

## Configuration

**Environment:**
- `.env.local` for local development (gitignored)
- `VITE_RESCUEGROUPS_API_KEY` - Required for shelter cat API

**Build:**
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript root config
- `tsconfig.app.json` - App-specific TS config (ES2022, strict mode)
- `tsconfig.node.json` - Build tools TS config
- `eslint.config.js` - ESLint flat config
- `tailwind.config.js` - Tailwind theme configuration

## Platform Requirements

**Development:**
- Any platform with Node.js
- No additional tooling required

**Production:**
- Vercel hosting (configured via `vercel.json`)
- SPA rewrites configured
- Cache control headers for assets

---

*Stack analysis: 2026-02-02*
*Update after major dependency changes*
