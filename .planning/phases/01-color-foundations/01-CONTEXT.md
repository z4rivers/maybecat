# Phase 1: Color Foundations - Context

**Gathered:** 2026-02-07
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the complete color variable architecture in Figma — primitive, semantic, and component token collections — so every subsequent phase can bind to real variables instead of raw hex values. This covers COLOR-01 through COLOR-05.

</domain>

<decisions>
## Implementation Decisions

### Naming Convention
- Mirror Tailwind naming at the primitive level (pink-500, amber-400, orange-900) for familiarity with the codebase
- Semantic names should be descriptive and purpose-based (text-primary, surface-card, border-accent)
- Use Figma's slash-separated group convention for organization (color/pink/500, color/amber/400)
- Keep it simple — this is a single-page app, not a multi-brand enterprise system

### Collection Architecture
- 3 collections following 2025/2026 Figma best practice:
  1. **Primitives** — Every raw hex value from the site (the palette)
  2. **Semantic** — Purpose-mapped aliases that reference primitives (what colors MEAN)
  3. **Component** — Component-specific tokens that reference semantics (button-bg, card-border)
- Keep it lightweight — the site is largely WYSIWYG, not deeply themed
- Architecture should allow future flexibility (dark mode, alternate themes) but not build for it now

### Card Color Theming
- The 5 shelter card colors (pink, green, purple, hot-pink, orange) were picked organically — user reviewed batches and approved favorites
- No systematic theming logic exists — each card color set is independent (gradient stops, border color, accent color)
- Implement as 5 grouped variable sets within the Primitive collection, not as variable modes
- Each card color group contains: gradient-start, gradient-mid, gradient-end, border, accent, text

### Scope
- Extract ONLY colors that exist on the live site right now
- Include the SEO keyword drifter text color (rgba brown, very low opacity) — these are barely-visible floating words for search visibility
- Don't pre-build colors for future features or themes
- Structure should make it easy to ADD colors later without restructuring

### Claude's Discretion
- Exact grouping hierarchy within each collection
- How to handle opacity variants (separate variable vs applied opacity)
- Whether to scope variables to specific properties (fills, strokes, text)
- Organization of the Figma variables panel (ordering, descriptions)

</decisions>

<specifics>
## Specific Ideas

- Colors were chosen by feel, not by system — the design skill agent proposed palettes and the user approved batches they liked
- The site aesthetic is "psychedelic tarot maximalism" — colors should feel rich, saturated, unapologetic
- The main gradient (pink→gold at 135deg) is THE signature — it's the first thing you see and the most important color element
- SEO keyword drifters use `rgba(120, 53, 15, 0.12)` — intentionally near-invisible brown text floating across the gradient background

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-color-foundations*
*Context gathered: 2026-02-07*
