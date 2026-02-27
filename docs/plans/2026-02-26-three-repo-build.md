# Three-Repo Build: catpool + hopecookie + maybecat migration

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extract shared response pool into `catpool` package, create `hopecookie` marketing site with Figma-first architecture, migrate `maybecat` to consume catpool.

**Architecture:** Three independent repos. `catpool` is a standalone TypeScript data package consumed by both `maybecat` and `hopecookie` via git dependency. Response selection logic stays in each consumer. Hope Cookie uses Figma-first component architecture with design tokens as CSS custom properties.

**Tech Stack:**
- catpool: TypeScript + tsup (build) + vitest (test)
- hopecookie: React 19 + TypeScript + Vite 7 + Tailwind v4 + Framer Motion + Vercel
- maybecat: existing stack, updated imports

---

## Phase 1: catpool

### Task 1.1: Initialize package

**Files:**
- Create: `C:\Users\Zachary Turner\catpool\package.json`
- Create: `C:\Users\Zachary Turner\catpool\tsconfig.json`
- Create: `C:\Users\Zachary Turner\catpool\tsup.config.ts`
- Create: `C:\Users\Zachary Turner\catpool\.gitignore`

**Step 1: Create package.json**

```json
{
  "name": "catpool",
  "version": "0.1.0",
  "description": "Shared response pool for MaybeCat and Hope Cookie",
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "test": "vitest run",
    "test:watch": "vitest",
    "prepare": "tsup"
  },
  "devDependencies": {
    "tsup": "^8.4.0",
    "typescript": "~5.9.3",
    "vitest": "^4.0.18"
  }
}
```

**Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src"]
}
```

**Step 3: Create tsup.config.ts**

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
})
```

**Step 4: Create .gitignore**

```
node_modules/
dist/
```

**Step 5: Install dependencies**

```bash
cd C:\Users\Zachary Turner\catpool && npm install
```

**Step 6: Commit**

```bash
git add -A && git commit -m "init: package setup with tsup + vitest"
```

---

### Task 1.2: Create types

**Files:**
- Create: `C:\Users\Zachary Turner\catpool\src\types.ts`

**Step 1: Write types**

```typescript
export type OracleCategory =
  | 'mystical'
  | 'nurturing'
  | 'poetic'
  | 'cold'
  | 'angry'
  | 'heartfelt'
  | 'judgy'
  | 'chaotic'
  | 'wise'
  | 'existential'
  | 'demanding'
  | 'meta'
  | 'adoption';

export interface OracleResponse {
  text: string;
  category: OracleCategory;
  attribution?: string;
  hopecookie?: boolean;
}

export interface Template {
  pattern: string;
  category: OracleCategory;
  slots: Record<string, string[]>;
}
```

**Step 2: Commit**

```bash
git add src/types.ts && git commit -m "feat: add OracleResponse and Template types with hopecookie flag"
```

---

### Task 1.3: Extract response data

**Files:**
- Create: `C:\Users\Zachary Turner\catpool\src\responses.ts`
- Source: `C:\Users\Zachary Turner\maybecat\src\data\oracleResponses.ts` (lines 90-3678)

**Step 1: Copy the static response array**

Read `oracleResponses.ts` lines 90-3678. Copy the entire `oracleResponses` array into `responses.ts`. Update the import to use local types.

```typescript
import type { OracleResponse } from './types';

// @ts-ignore - Array exceeds TypeScript union complexity limit
export const responses: OracleResponse[] = [
  // ... all 2,919 responses copied from oracleResponses.ts
];
```

**Step 2: Commit**

```bash
git add src/responses.ts && git commit -m "feat: extract 2,919 static responses from maybecat"
```

---

### Task 1.4: Extract templates

**Files:**
- Create: `C:\Users\Zachary Turner\catpool\src\templates.ts`
- Source: `C:\Users\Zachary Turner\maybecat\src\data\oracleResponses.ts` (lines 3681-3908)

**Step 1: Copy templates array**

```typescript
import type { Template } from './types';

export const templates: Template[] = [
  // ... all 24 templates copied from oracleResponses.ts
];
```

**Step 2: Commit**

```bash
git add src/templates.ts && git commit -m "feat: extract 24 response templates from maybecat"
```

---

### Task 1.5: Create filter utilities

**Files:**
- Create: `C:\Users\Zachary Turner\catpool\src\filters.ts`

**Step 1: Write filters**

```typescript
import type { OracleCategory, OracleResponse } from './types';
import { responses } from './responses';
import { templates } from './templates';

/** Get all static responses */
export function getAllResponses(): OracleResponse[] {
  return responses;
}

/** Get all templates */
export function getAllTemplates() {
  return templates;
}

/** Filter responses by category */
export function getByCategory(category: OracleCategory): OracleResponse[] {
  return responses.filter(r => r.category === category);
}

/** Filter responses flagged for Hope Cookie */
export function getHopeCookieResponses(): OracleResponse[] {
  return responses.filter(r => r.hopecookie === true);
}

/** Get response counts by category */
export function countByCategory(): Record<OracleCategory, number> {
  const counts = {} as Record<OracleCategory, number>;
  for (const r of responses) {
    counts[r.category] = (counts[r.category] || 0) + 1;
  }
  return counts;
}

/** Get total response count */
export function countTotal(): { static: number; templates: number; templateCombinations: number } {
  let combos = 0;
  for (const t of templates) {
    const slotCounts = Object.values(t.slots).map(s => s.length);
    combos += slotCounts.reduce((a, b) => a * b, 1);
  }
  return {
    static: responses.length,
    templates: templates.length,
    templateCombinations: combos,
  };
}
```

**Step 2: Commit**

```bash
git add src/filters.ts && git commit -m "feat: add category and product filter utilities"
```

---

### Task 1.6: Create index and write tests

**Files:**
- Create: `C:\Users\Zachary Turner\catpool\src\index.ts`
- Create: `C:\Users\Zachary Turner\catpool\src\__tests__\filters.test.ts`
- Create: `C:\Users\Zachary Turner\catpool\src\__tests__\responses.test.ts`

**Step 1: Create barrel export**

```typescript
// Types
export type { OracleCategory, OracleResponse, Template } from './types';

// Data
export { responses } from './responses';
export { templates } from './templates';

// Filters
export {
  getAllResponses,
  getAllTemplates,
  getByCategory,
  getHopeCookieResponses,
  countByCategory,
  countTotal,
} from './filters';
```

**Step 2: Write response structure tests**

```typescript
// src/__tests__/responses.test.ts
import { describe, it, expect } from 'vitest';
import { responses, templates } from '../index';
import type { OracleCategory } from '../index';

const validCategories: OracleCategory[] = [
  'mystical', 'nurturing', 'poetic', 'cold', 'angry', 'heartfelt',
  'judgy', 'chaotic', 'wise', 'existential', 'demanding', 'meta', 'adoption',
];

describe('responses', () => {
  it('has responses', () => {
    expect(responses.length).toBeGreaterThan(2000);
  });

  it('all responses have valid structure', () => {
    for (const r of responses) {
      expect(typeof r.text).toBe('string');
      expect(r.text.length).toBeGreaterThan(0);
      expect(validCategories).toContain(r.category);
    }
  });

  it('has all 13 categories represented', () => {
    const found = new Set(responses.map(r => r.category));
    for (const cat of validCategories) {
      expect(found.has(cat)).toBe(true);
    }
  });
});

describe('templates', () => {
  it('has templates', () => {
    expect(templates.length).toBeGreaterThan(0);
  });

  it('all templates have valid structure', () => {
    for (const t of templates) {
      expect(typeof t.pattern).toBe('string');
      expect(validCategories).toContain(t.category);
      expect(Object.keys(t.slots).length).toBeGreaterThan(0);
      for (const values of Object.values(t.slots)) {
        expect(values.length).toBeGreaterThan(0);
      }
    }
  });
});
```

**Step 3: Write filter tests**

```typescript
// src/__tests__/filters.test.ts
import { describe, it, expect } from 'vitest';
import { getByCategory, getHopeCookieResponses, countByCategory, countTotal } from '../index';

describe('filters', () => {
  it('getByCategory returns only matching responses', () => {
    const wise = getByCategory('wise');
    expect(wise.length).toBeGreaterThan(0);
    for (const r of wise) {
      expect(r.category).toBe('wise');
    }
  });

  it('getHopeCookieResponses returns empty initially (none flagged)', () => {
    const hc = getHopeCookieResponses();
    expect(hc.length).toBe(0);
  });

  it('countByCategory sums to total', () => {
    const counts = countByCategory();
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const { static: staticCount } = countTotal();
    expect(total).toBe(staticCount);
  });

  it('countTotal returns reasonable numbers', () => {
    const c = countTotal();
    expect(c.static).toBeGreaterThan(2000);
    expect(c.templates).toBeGreaterThan(0);
    expect(c.templateCombinations).toBeGreaterThan(0);
  });
});
```

**Step 4: Run tests**

```bash
npx vitest run
```

**Step 5: Build**

```bash
npm run build
```

**Step 6: Commit**

```bash
git add -A && git commit -m "feat: index exports, tests, and initial build"
```

---

### Task 1.7: Create GitHub repo and push

```bash
cd C:\Users\Zachary Turner\catpool
gh repo create z4rivers/catpool --private --source=. --push
```

---

## Phase 2: hopecookie

### Task 2.1: Scaffold project

**Step 1: Initialize Vite + React + TypeScript**

```bash
cd "C:\Users\Zachary Turner\hopecookie"
npm create vite@latest . -- --template react-ts
```

Note: Move `Hope-Cookie-Concept-Brief.docx` out first if Vite complains about non-empty directory.

**Step 2: Install dependencies**

```bash
npm install
npm install @tailwindcss/vite tailwindcss@latest framer-motion react-router-dom @vercel/analytics lucide-react clsx tailwind-merge
```

**Step 3: Install catpool**

```bash
npm install github:z4rivers/catpool
```

**Step 4: Init git and commit**

```bash
git init
git add -A && git commit -m "init: vite + react 19 + typescript scaffold"
```

---

### Task 2.2: Configure build tools

**Files:**
- Modify: `vite.config.ts`
- Modify: `tsconfig.json`
- Create: `vercel.json`
- Modify: `index.html`
- Create: `.gitignore` (update from Vite default)

**Step 1: Update vite.config.ts**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Step 2: Create vercel.json**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Step 3: Update index.html** — Add meta tags, font preloads (font choice TBD — placeholder structure)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Hope Cookie — A little hope with your coffee. Cat-voiced fortune cookies with a digital bridge to adoptable shelter cats." />
    <meta property="og:title" content="Hope Cookie" />
    <meta property="og:description" content="A little hope with your coffee." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hopecookie.com" />
    <title>Hope Cookie | A little hope with your coffee</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Step 4: Commit**

```bash
git add -A && git commit -m "config: vite, tailwind v4, vercel, meta tags"
```

---

### Task 2.3: Design token system (Figma-first)

**Files:**
- Create: `src/design-tokens/tokens.css`
- Modify: `src/index.css`

**Step 1: Create token file**

This is the 1:1 Figma variable mapping layer. All visual values defined here as CSS custom properties. Tailwind v4 consumes these via `@theme`.

```css
/* src/design-tokens/tokens.css
 *
 * FIGMA TOKEN MAP
 * Every variable here maps to a Figma variable.
 * Update in Figma → update here → entire site updates.
 *
 * Naming: --hc-{category}-{property}-{variant}
 * hc = Hope Cookie namespace
 */

:root {
  /* === Colors: Primitives === */
  /* TBD: Actual brand colors pending creative direction */
  --hc-color-cream: #FFF8F0;
  --hc-color-warm-white: #FEFCF8;
  --hc-color-cookie-tan: #D4A574;
  --hc-color-cookie-dark: #8B6914;
  --hc-color-brown-butter: #6B4226;
  --hc-color-espresso: #2C1A0F;
  --hc-color-cat-black: #1A1A1A;
  --hc-color-accent: #E8854A;
  --hc-color-accent-warm: #F4A460;

  /* === Colors: Semantic === */
  --hc-color-bg-primary: var(--hc-color-cream);
  --hc-color-bg-secondary: var(--hc-color-warm-white);
  --hc-color-bg-accent: var(--hc-color-cookie-tan);
  --hc-color-text-primary: var(--hc-color-espresso);
  --hc-color-text-secondary: var(--hc-color-brown-butter);
  --hc-color-text-on-dark: var(--hc-color-cream);
  --hc-color-border: var(--hc-color-cookie-tan);
  --hc-color-cta: var(--hc-color-accent);
  --hc-color-cta-hover: var(--hc-color-accent-warm);

  /* === Typography === */
  /* Font families TBD — placeholder structure */
  --hc-font-heading: Georgia, serif;
  --hc-font-body: system-ui, sans-serif;
  --hc-font-fortune: Georgia, serif;

  /* Font sizes — fluid scale */
  --hc-text-xs: 0.75rem;
  --hc-text-sm: 0.875rem;
  --hc-text-base: 1rem;
  --hc-text-lg: 1.125rem;
  --hc-text-xl: 1.25rem;
  --hc-text-2xl: 1.5rem;
  --hc-text-3xl: 1.875rem;
  --hc-text-4xl: 2.25rem;
  --hc-text-5xl: 3rem;

  /* Line heights */
  --hc-leading-tight: 1.15;
  --hc-leading-normal: 1.5;
  --hc-leading-relaxed: 1.75;

  /* === Spacing === */
  --hc-space-xs: 0.25rem;
  --hc-space-sm: 0.5rem;
  --hc-space-md: 1rem;
  --hc-space-lg: 1.5rem;
  --hc-space-xl: 2rem;
  --hc-space-2xl: 3rem;
  --hc-space-3xl: 4rem;
  --hc-space-4xl: 6rem;
  --hc-space-section: 5rem;

  /* === Border Radius === */
  --hc-radius-sm: 0.25rem;
  --hc-radius-md: 0.5rem;
  --hc-radius-lg: 1rem;
  --hc-radius-xl: 1.5rem;
  --hc-radius-full: 9999px;

  /* === Shadows === */
  --hc-shadow-sm: 0 1px 2px rgba(44, 26, 15, 0.08);
  --hc-shadow-md: 0 4px 12px rgba(44, 26, 15, 0.12);
  --hc-shadow-lg: 0 8px 24px rgba(44, 26, 15, 0.16);
  --hc-shadow-cookie: 0 4px 16px rgba(139, 105, 20, 0.2);

  /* === Transitions === */
  --hc-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --hc-duration-fast: 150ms;
  --hc-duration-normal: 250ms;
  --hc-duration-slow: 400ms;
}
```

**Step 2: Set up index.css with Tailwind v4 + token integration**

```css
@import "tailwindcss";
@import "./design-tokens/tokens.css";

@theme {
  /* Map CSS custom properties to Tailwind utilities */
  --color-hc-cream: var(--hc-color-cream);
  --color-hc-warm-white: var(--hc-color-warm-white);
  --color-hc-cookie-tan: var(--hc-color-cookie-tan);
  --color-hc-cookie-dark: var(--hc-color-cookie-dark);
  --color-hc-brown-butter: var(--hc-color-brown-butter);
  --color-hc-espresso: var(--hc-color-espresso);
  --color-hc-cat-black: var(--hc-color-cat-black);
  --color-hc-accent: var(--hc-color-accent);
  --color-hc-accent-warm: var(--hc-color-accent-warm);

  --font-heading: var(--hc-font-heading);
  --font-body: var(--hc-font-body);
  --font-fortune: var(--hc-font-fortune);

  --radius-sm: var(--hc-radius-sm);
  --radius-md: var(--hc-radius-md);
  --radius-lg: var(--hc-radius-lg);
  --radius-xl: var(--hc-radius-xl);

  --shadow-sm: var(--hc-shadow-sm);
  --shadow-md: var(--hc-shadow-md);
  --shadow-lg: var(--hc-shadow-lg);
  --shadow-cookie: var(--hc-shadow-cookie);
}

@layer base {
  html, body {
    background-color: var(--hc-color-bg-primary);
    color: var(--hc-color-text-primary);
    font-family: var(--hc-font-body);
    line-height: var(--hc-leading-normal);
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
}
```

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: figma-first design token system with tailwind v4 integration"
```

---

### Task 2.4: Figma-first UI components (atoms)

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Container.tsx`

Each component:
- Has `data-figma` attribute on root element
- Uses design tokens (not raw values)
- Has typed variant props that map to Figma component properties
- Is exported from an index file

**Step 1: Create Button**

```tsx
import { type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      data-figma="Button"
      data-variant={variant}
      data-size={size}
      className={clsx(
        'inline-flex items-center justify-center font-heading rounded-lg transition-colors',
        'duration-[var(--hc-duration-normal)] ease-[var(--hc-ease-default)]',
        {
          'bg-hc-accent text-hc-cream hover:bg-hc-accent-warm shadow-md': variant === 'primary',
          'bg-hc-cream text-hc-espresso border border-hc-cookie-tan hover:bg-hc-warm-white': variant === 'secondary',
          'bg-transparent text-hc-brown-butter hover:text-hc-espresso': variant === 'ghost',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-5 py-2.5 text-base': size === 'md',
          'px-7 py-3.5 text-lg': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Step 2: Create Card**

```tsx
import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'fortune';
}

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  return (
    <div
      data-figma="Card"
      data-variant={variant}
      className={clsx(
        'rounded-xl',
        {
          'bg-hc-warm-white border border-hc-cookie-tan/20': variant === 'default',
          'bg-hc-warm-white shadow-lg': variant === 'elevated',
          'bg-hc-cream border-2 border-hc-cookie-tan shadow-cookie': variant === 'fortune',
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

**Step 3: Create Container**

```tsx
import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-figma="Container"
      className={clsx('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}
```

**Step 4: Create ui barrel export**

```tsx
// src/components/ui/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Container } from './Container';
```

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: figma-first UI atoms — Button, Card, Container with data-figma attrs"
```

---

### Task 2.5: Section components (organisms)

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/Concept.tsx`
- Create: `src/components/sections/HowItWorks.tsx`
- Create: `src/components/sections/Distribution.tsx`
- Create: `src/components/sections/FortunePreview.tsx`
- Create: `src/components/sections/CTA.tsx`
- Create: `src/components/sections/Footer.tsx`
- Create: `src/components/sections/index.ts`

Each section component:
- `data-figma="Section/SectionName"` on root
- Uses `<Container>` for width constraints
- Uses design tokens exclusively
- Placeholder content (actual copy is a creative decision requiring approval)

**Step 1: Create all section components** with placeholder structure.

Structure for each:
```tsx
export function Hero() {
  return (
    <section data-figma="Section/Hero" className="py-[var(--hc-space-section)]">
      <Container>
        {/* Placeholder — actual content requires creative approval */}
        <h1 data-figma="Hero/Heading" className="font-heading text-5xl">
          Hope Cookie
        </h1>
        <p data-figma="Hero/Tagline" className="text-xl text-hc-brown-butter mt-4">
          A little hope with your coffee.
        </p>
      </Container>
    </section>
  );
}
```

**FortunePreview** imports from catpool to show sample responses.

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: section components — Hero, Concept, HowItWorks, Distribution, FortunePreview, CTA, Footer"
```

---

### Task 2.6: Layout and routing

**Files:**
- Create: `src/components/layout/Header.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Step 1: Create Header**

```tsx
import { Container } from '../ui';

export function Header() {
  return (
    <header data-figma="Header" className="py-4">
      <Container className="flex items-center justify-between">
        <span data-figma="Header/Logo" className="font-heading text-xl text-hc-espresso">
          Hope Cookie
        </span>
        <nav data-figma="Header/Nav">
          {/* Nav items TBD */}
        </nav>
      </Container>
    </header>
  );
}
```

**Step 2: Create App.tsx**

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Home } from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
```

**Step 3: Create Home page**

```tsx
// src/pages/Home.tsx
import { Header } from '../components/layout/Header';
import { Hero, Concept, HowItWorks, Distribution, FortunePreview, CTA, Footer } from '../components/sections';

export function Home() {
  return (
    <div data-figma="Page/Home">
      <Header />
      <main>
        <Hero />
        <Concept />
        <FortunePreview />
        <HowItWorks />
        <Distribution />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
```

**Step 4: Update main.tsx**

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Step 5: Verify dev server runs**

```bash
npm run dev
```

**Step 6: Commit**

```bash
git add -A && git commit -m "feat: layout, routing, Home page with all sections"
```

---

### Task 2.7: Create GitHub repo and push

```bash
cd "C:\Users\Zachary Turner\hopecookie"
gh repo create z4rivers/hopecookie --private --source=. --push
```

---

## Phase 3: maybecat migration

### Task 3.1: Install catpool and update imports

**Files:**
- Modify: `C:\Users\Zachary Turner\maybecat\package.json`
- Modify: `C:\Users\Zachary Turner\maybecat\src\data\oracleResponses.ts`
- Modify: `C:\Users\Zachary Turner\maybecat\src\hooks\useOracle.ts`

**Step 1: Install catpool**

```bash
cd "C:\Users\Zachary Turner\maybecat"
npm install github:z4rivers/catpool
```

**Step 2: Update oracleResponses.ts**

Replace the inline response array and template definitions with imports from catpool. Keep all selection logic (categoryWeights, getRandomResponse, repeat prevention, easter eggs) in this file — just swap the data source.

```typescript
import { responses as poolResponses, templates as poolTemplates } from 'catpool';
import type { OracleCategory, OracleResponse } from 'catpool';

export type { OracleCategory, OracleResponse };

// Re-export types for existing consumers
const oracleResponses: OracleResponse[] = poolResponses;
const templates = poolTemplates;

// ... rest of selection logic stays exactly as-is ...
```

**Step 3: Update useOracle.ts imports** (if type import paths changed)

**Step 4: Run existing tests**

```bash
npm run test:run
```

**Step 5: Run dev server and verify**

```bash
npm run dev
```

**Step 6: Commit**

```bash
git add -A && git commit -m "refactor: consume response data from catpool package"
```

---

## Execution Notes

- **Phase 1 must complete before Phase 2 Task 2.1 Step 3** (catpool must exist on GitHub before hopecookie can install it)
- **Phase 1 must complete before Phase 3** (same reason)
- **Phase 2 and Phase 3 can run in parallel** after Phase 1 is done
- **All brand colors, fonts, and copy in hopecookie are PLACEHOLDERS** — actual creative direction requires user approval before finalizing
- **The `hopecookie` flag starts as undefined on all responses** — flagging happens in a separate review pass
