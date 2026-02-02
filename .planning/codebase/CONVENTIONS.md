# Coding Conventions

**Analysis Date:** 2026-02-02

## Naming Patterns

**Files:**
- PascalCase for React components: `Home.tsx`, `VariantA.tsx`, `App.tsx`
- camelCase for utilities/services: `rescueGroups.ts`, `sponsor.ts`, `oracleResponses.ts`
- kebab-case for directories: `src/pages/`, `src/data/`, `src/services/`

**Functions:**
- PascalCase for React components: `function App()`, `function CornerVine()`
- camelCase for regular functions: `fetchAdoptableCats()`, `getRandomResponse()`, `isApiConfigured()`
- camelCase for custom hooks: `useDocumentMeta()`
- Descriptive action-oriented names: fetch, get, use prefixes

**Variables:**
- camelCase for variables: `shelterCat`, `adoptableCats`, `photoUrl`
- SCREAMING_SNAKE_CASE for constants: `RESCUEGROUPS_API_KEY`, `API_BASE`
- Abbreviated names in loops: `attrs`, `picId`, `orgId`

**Types:**
- PascalCase for interfaces: `interface ShelterCat`, `interface Sponsor`
- PascalCase for type aliases: `type OracleCategory`
- `interface` for object contracts
- `type` for unions and aliases

## Code Style

**Formatting:**
- No explicit Prettier configuration
- 2 space indentation
- Semicolons consistently used
- Single quotes for strings
- Double quotes for JSX attributes

**Linting:**
- ESLint 9.39.1 with flat config (`eslint.config.js`)
- @eslint/js recommended
- typescript-eslint recommended
- eslint-plugin-react-hooks
- Run: `npm run lint`

## Import Organization

**Order:**
1. React and React hooks: `import { useState, useCallback } from 'react'`
2. Third-party libraries: `import { BrowserRouter } from 'react-router-dom'`
3. Relative imports: `import { getRandomResponse } from '../data/oracleResponses'`

**Grouping:**
- Named imports grouped: `import { X, Heart, Sparkles } from 'lucide-react'`
- Type imports with `type` keyword: `import { type OracleResponse }`
- No barrel exports - import directly from modules

**Path Aliases:**
- None configured - uses relative paths with `./` and `../`

## Error Handling

**Patterns:**
- Console.error for API failures
- Silent fallback to default data
- No user-facing error messages
- No explicit try/catch at component level

**Error Types:**
- API errors: Log and fallback
- File errors: Silent fail
- localStorage errors: Implicit trust

## Logging

**Framework:**
- Console.log for debugging
- Console.error for errors
- No structured logging

**Patterns:**
- Log API fetch attempts
- Log errors with context
- No console.log in production path

## Comments

**When to Comment:**
- Section headers for code blocks
- Explain non-obvious business logic
- Document API integration details

**Patterns:**
- Single-line comments above code blocks
- Section headers with `// ============` banners
- No JSDoc - types serve as documentation

**TODO Comments:**
- Format: `/* TODO: description */`
- Found in VariantA.tsx, VariantB.tsx for unfinished sponsor banner

## Function Design

**Size:**
- Page components are monolithic (500-750 lines)
- Individual handlers are small (<50 lines)
- Should extract reusable logic

**Parameters:**
- Destructure props in React components
- Use options objects for complex configs
- Type annotations on parameters

**Return Values:**
- Explicit returns in regular functions
- JSX returns in components
- Void returns for handlers

## Module Design

**Exports:**
- Named exports for functions and types
- Default export for page components (optional)
- Export directly from module (no barrel files)

**Organization:**
- One main export per file
- Related types exported alongside
- Config objects as named exports

## TypeScript Patterns

**Strictness:**
- `strict: true` enabled
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- Target: ES2022

**Type Annotations:**
- Explicit on function parameters
- Return types inferred (not always explicit)
- Use `type` keyword for imports

**Assertions:**
- Minimal `as` casts
- Optional chaining (`?.`) used
- Nullish coalescing (`||`) for defaults

---

*Convention analysis: 2026-02-02*
*Update when patterns change*
