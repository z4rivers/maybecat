# MaybeCat Design System — Figma Build

## What This Is

Extract every visual element from the live MaybeCat site into standalone, reusable design assets and rebuild the entire design system in Figma. The CS_Frame (Celestial Seasonings-style ornate blob shape) becomes the foundational icon/brand frame. Everything — gradients, typography, decorative elements, components — gets properly structured as a Figma design system.

## Core Value

A single Figma file that IS the design source of truth for MaybeCat. Every visual element traceable, every component reusable, every asset exportable.

## Requirements

### Validated

- ✓ Live site at maybecat.com with full visual identity — existing
- ✓ CS_Frame SVG shape available (`src/assets/Vector.svg` + `CS_Frame.png`) — existing
- ✓ Color palette defined (pink→gold gradient, jewel tones, 5 card colors) — existing
- ✓ Typography defined (Cinzel Decorative headlines, Georgia body) — existing
- ✓ Decorative SVG components (CornerVine, CenterMandala, MysticalStar) — existing
- ✓ Component patterns (cards, buttons, modals, inputs) — existing in code
- ✓ Codebase fully mapped (`.planning/codebase/`) — existing
- ✓ Design skill documented (`.claude/skills/design/`) — existing

### Active

- [ ] Extract CS_Frame as clean SVG with proper viewBox/fills
- [ ] Extract all decorative SVGs (CornerVine, CenterMandala, MysticalStar) as standalone assets
- [ ] Build Figma color system (variables/styles for all palette colors)
- [ ] Build Figma typography scale (Cinzel Decorative + Georgia, all sizes)
- [ ] Build gradient library (main bg gradient, card gradients, button gradients)
- [ ] Build shadow/effect library (card shadows, text shadows, glow effects)
- [ ] Create Figma component: Cat selection card (5 color variants)
- [ ] Create Figma component: Oracle reading card
- [ ] Create Figma component: Question input + Ask button
- [ ] Create Figma component: Name input modal
- [ ] Create Figma component: Bottom sponsor banner
- [ ] Create Figma component: Navigation/carousel controls
- [ ] Create Figma component: "Adopt Me" badge
- [ ] Build full page composition (mobile + desktop)
- [ ] Export pipeline: og:image, share cards, icons from Figma components

### Out of Scope

- Code changes to the live site — this is design extraction, not refactoring
- New feature design — capture what exists first, then iterate
- Plasmic/code-generation integration — figure that out after the system exists
- Animation specs — Framer Motion stays in code, Figma captures static states

## Context

**Current state:** MaybeCat has a strong visual identity (psychedelic tarot maximalism — gold foil, hot pink, ornate decorative elements) but it only exists in code. Every visual element is defined as inline styles, Tailwind classes, or SVG components scattered across `Home.tsx` and `src/components/decorative/`. There's no design file, no asset library, no way to iterate on the visual system outside of code.

**Why this matters:** Without a Figma source of truth, every visual change requires diving into code. Share cards, merch, og:images, and new components all need to be hand-coded from scratch. A proper design system unlocks: faster iteration, consistent brand assets, exportable marketing materials, and a foundation for the share card → merch pipeline.

**What we have:** A thorough visual audit identified every element on the page — backgrounds, gradients, decorative SVGs, card variants, text treatments, shadows, colors, typography, and responsive breakpoints. The CS_Frame shape (`src/assets/Vector.svg`) is the brand frame that will anchor icons, share cards, and containers.

**Figma file:** Already exists at project ID `kIX8fJJs3PIO6uJTQuNu8l`

## Constraints

- **Pixel-perfect extraction:** Assets must match the live site exactly, not be approximations
- **CS_Frame is the brand frame:** The ornate blob shape is foundational — icons, containers, and brand marks derive from it
- **No AI-generated brand marks:** Logo, wordmark, and frame shapes are captured from live CSS rendering, never regenerated
- **Real cat photos only:** Never illustrated characters — the design system accommodates photo placement
- **Maximalist energy preserved:** If making things "cleaner" kills the vibe, find another way

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| CS_Frame as foundational brand shape | Celestial Seasonings ornate aesthetic matches tarot maximalism | — Active |
| Extract from live site, don't recreate | Brand Rule 5 — live CSS is source of truth for visual rendering | — Active |
| Figma variables for colors | Enables global theme changes and dark mode exploration later | — Active |
| Component variants for card colors | 5 shelter card colors need to be variant-switchable | — Active |

---
*Last updated: 2026-02-07 after initialization*
