# Coding Conventions

**Analysis Date:** 2026-02-06

## Naming Patterns

**Files:**
- PascalCase.tsx for React components (Home.tsx, NameInputModal.tsx)
- camelCase.ts for hooks, services, data, config
- *.test.ts colocated with source
- index.ts barrel exports for component groups

**Functions:**
- camelCase for all functions (fetchAdoptableCats, getRandomResponse, preventOrphans)
- `use` prefix for hooks (useOracle, useCatStorage, useDocumentMeta)
- `handle` prefix for event handlers (handleImageUpload, handleNameSave, handleKeyDown)
- `safe` prefix for wrapped-safe utilities (safeTrack, safeSetItem)

**Variables:**
- camelCase for state and variables (catImage, isThinking, shelterCats)
- UPPER_SNAKE_CASE for constants (VISIBLE_CATS, API_BASE, CACHE_KEY, CACHE_TTL_MS)
- Object constants: `const STORAGE_KEYS = { ... } as const`

**Types:**
- PascalCase, no I prefix (ShelterCat, OracleResponse, not IShelterCat)
- Props suffix for component props (NameInputModalProps, QuestionInputProps)
- Return suffix for hook returns (UseOracleReturn, UseCatStorageReturn)
- Union types for categories: `type OracleCategory = 'mystical' | 'nurturing' | ...`

## Code Style

**Formatting:**
- No Prettier config — relies on ESLint
- 2-space indentation
- Single quotes for strings
- Semicolons required
- Line wrapping: JSX attributes split across lines for readability

**Linting:**
- ESLint 9.x flat config (`eslint.config.js`)
- Extends: @eslint/js recommended, typescript-eslint recommended
- Plugins: react-hooks, react-refresh
- Browser globals enabled
- `npm run lint` to check

**TypeScript:**
- Strict mode enabled
- noUnusedLocals, noUnusedParameters
- noFallthroughCasesInSwitch
- verbatimModuleSyntax

## Import Organization

**Order:**
1. React core (useState, useCallback, useEffect, useRef)
2. Third-party UI (framer-motion, lucide-react)
3. Local services/data
4. Local hooks
5. Local components
6. Styles/CSS (last)

**Grouping:**
- Blank lines between groups (not strictly enforced)
- Named imports preferred
- Type imports inline: `import { type ShelterCat } from '...'`

**Path Aliases:**
- None — relative imports throughout (../hooks/, ../components/)

## Error Handling

**Patterns:**
- Try-catch for localStorage (quota overflow, corrupted JSON)
- Try-catch for analytics (never break UX for tracking)
- ErrorBoundary for React render errors
- API failures → graceful fallback (FALLBACK_CATS)
- Canvas/CORS errors → silently skip (app continues)

**Safe Wrapper Pattern:**
```typescript
function safeSetItem(key: string, value: string) {
  try { localStorage.setItem(key, value); }
  catch { /* quota exceeded — silently continue */ }
}
```

## Comments

**When to Comment:**
- Explain WHY, not what: `// Only analyze data URLs (user uploads) - external images have CORS issues`
- Section dividers in JSX: `{/* Adopt Me Badge - Shelter Cats Only */}`
- Business context: `// Prevent orphaned words by joining last 2-3 short words`

**JSDoc:**
- Used sparingly for service files and complex utilities
- Not required for internal functions with clear names

## Function Design

**Parameters:**
- Destructured objects for hooks with many return values
- Single options object for configurable functions
- useCallback with explicit dependency arrays

**Return Values:**
- Hooks return typed interface objects: `UseOracleReturn`
- Early returns for guard clauses

## Module Design

**Exports:**
- Named exports preferred for components: `export function Oracle()`
- Default exports for route pages: `export default OrgComparison`
- Barrel files for component groups: `export { CornerVine, CenterMandala } from './...'`
- Types exported alongside components: `export { OracleHeader, type OracleHeaderProps }`

## React Patterns

**Components:**
- Function components exclusively (no class components except ErrorBoundary)
- PascalCase names
- Props destructured in params with defaults
- forwardRef when DOM access needed (OracleResponseCard)

**Hooks:**
- useState for local state
- useCallback for memoized handlers (with deps)
- useEffect for side effects with cleanup
- useRef for DOM refs and timeout tracking
- Custom hooks encapsulate related state + logic

**Styling:**
- Tailwind CSS utilities as className strings
- Inline style objects for gradients, shadows, dynamic values
- Conditional styling: ternary or clsx
- Responsive: mobile-first with md: and lg: breakpoints

**Animation:**
- Framer Motion: motion.div, AnimatePresence, whileHover, whileTap
- Spring physics: stiffness 200, damping 20-25
- Exit animations via AnimatePresence mode="wait" or "popLayout"

---

*Convention analysis: 2026-02-06*
*Update when patterns change*
