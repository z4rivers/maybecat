# MaybeCat Design System — Roadmap

## Milestone: v1 — Design System Build

### Phase 1: Color Foundations
**Goal:** Establish the complete color variable architecture in Figma — primitives, semantics, and component tokens — so every subsequent phase can bind to real variables instead of raw hex values.
**Requirements:** COLOR-01, COLOR-02, COLOR-03, COLOR-04, COLOR-05
**Success Criteria:**
1. Primitive variable collection exists in Figma with every raw hex value extracted from the live site (pink-500, amber-400, orange-900, cream, gold, brown, etc.)
2. Semantic variable collection maps primitives to purpose names (text-primary, surface-card, border-accent, bg-overlay, etc.) and all semantic tokens resolve to primitives
3. Component variable collection contains tokens for buttons, cards, inputs, and modals — each resolving to a semantic variable
4. 5 shelter card color themes (pink, green, purple, hot-pink, orange) exist as variable modes or grouped variable sets, switchable per card instance
5. Dark overlay and modal backdrop colors (brown overlay, dark blue-gray banner) are defined as semantic variables

### Phase 2: Typography Foundations
**Goal:** Define every text style used on the live site as reusable Figma text styles with proper font, size, weight, and line-height at all responsive breakpoints.
**Requirements:** TYPE-01, TYPE-02, TYPE-03, TYPE-04
**Depends on:** Phase 1 (text colors reference color variables)
**Success Criteria:**
1. Cinzel Decorative text styles exist for headline (64/84/106px) and all smaller display variants, with responsive size variants documented
2. Georgia text styles exist for body copy, button labels, input text, oracle response text, and badge labels at all sizes used on the live site
3. Text shadow technique (1px outline in dark brown) is captured as an effect style applicable to any text on gradient backgrounds
4. Logo text treatment ("Maybe Cat" with gold offset shadow) exists as a reusable component or style that can be dropped into any composition

### Phase 3: Gradients & Visual Effects
**Goal:** Build the gradient library and effect presets that define MaybeCat's psychedelic tarot maximalism — every gradient, shadow, and glow effect captured as a reusable Figma style.
**Requirements:** GRAD-01, GRAD-02, GRAD-03, EFFECT-01, EFFECT-02, EFFECT-03
**Depends on:** Phase 1 (gradient color stops reference color variables)
**Success Criteria:**
1. Main background gradient (135deg pink-to-gold) exists as a Figma fill style, pixel-matched to the live site
2. Card background gradients exist as styles — cream-to-gold oracle card gradient and all 5 shelter card gradient variants
3. Button gradients (dark brown CTA, cream-to-gold nav) exist as fill styles
4. Card shadow library contains the primary drop shadow, inset highlight, and glow effects matching the live site's box-shadow values
5. Text shadow presets (outline technique, logo glow, standard body shadow) exist as effect styles
6. Glass/glow ambient effects are captured if applicable, or documented as not applicable

### Phase 4: SVG Asset Extraction
**Goal:** Extract every decorative SVG and shape element from the codebase into clean, standalone Figma vectors — properly pathed, filled, and organized as the raw building blocks for components.
**Requirements:** SHAPE-01, SHAPE-02, SHAPE-03, SHAPE-04, SHAPE-05, SHAPE-06
**Depends on:** Phase 1 (shape fills reference color variables)
**Success Criteria:**
1. CS_Frame exists as a clean Figma vector with proper path data matching `src/assets/Vector.svg`, usable as both an icon frame and a container shape
2. CornerVine decorative flourish is a Figma component with 4 corner rotation variants (top-left, top-right, bottom-left, bottom-right)
3. CenterMandala is a Figma component with left and right placement variants
4. MysticalStar is a Figma component with sm, md, and lg size variants
5. Floral pattern overlay exists as a repeating tile or fill pattern
6. Decorative line dividers (crescent moons, sparkles, horizontal rules) exist as components

### Phase 5: Card Components
**Goal:** Build all card components as Figma components with proper auto-layout, variable bindings, and variant properties — the primary UI surfaces users interact with.
**Requirements:** CARD-01, CARD-02, CARD-03, CARD-04
**Depends on:** Phase 1 (colors), Phase 2 (typography), Phase 3 (gradients/shadows), Phase 4 (decorative shapes used in cards)
**Success Criteria:**
1. "Your Cat" upload card component exists with camera icon placeholder, decorative corner flourishes, and gradient background bound to color variables
2. Shelter cat card component exists with 5 color variants switchable via component property or variable mode, including photo frame, name badge, and corner sparkles
3. Refresh/load-more card component exists with purple theme and refresh imagery
4. Oracle reading card component exists with cat photo frame area, response text area (with placeholder text), and a thinking/loading state variant

### Phase 6: Interactive Components
**Goal:** Build all interactive UI elements — buttons, inputs, badges, and navigation controls — as Figma components with states and proper styling.
**Requirements:** UI-01, UI-02, UI-03, UI-04, UI-05
**Depends on:** Phase 1 (colors), Phase 2 (typography), Phase 3 (gradients/shadows), Phase 4 (decorative elements)
**Success Criteria:**
1. Ask button component exists with dark brown gradient, Georgia serif label, sparkle decorations, and hover/pressed states
2. Text input field component exists with amber-50 background, inset shadow, sparkle icon, placeholder text, and filled state
3. Carousel navigation buttons exist as circular components with cream-to-gold gradient and chevron icons (left/right variants)
4. "Adopt Me" badge exists as a component with pink gradient, gold border, Cinzel text, and rotated placement angle
5. Cat name badge exists as an amber-800 pill component with centered text

### Phase 7: Modals & Layout Components
**Goal:** Build modal overlays and structural layout components — the containers and framing elements that hold everything together.
**Requirements:** MODAL-01, MODAL-02, LAYOUT-01, LAYOUT-02, LAYOUT-03
**Depends on:** Phase 5 (cards used within layouts), Phase 6 (buttons used in modals and layouts)
**Success Criteria:**
1. Name input modal component exists with cream-gold card, brown overlay backdrop, corner sparkle decorations, input field, and skip/confirm buttons
2. Modal button variants (skip and confirm) exist as sub-components with proper styling
3. Header composition component exists with title text, star dividers, decorative moon-symbol lines, and proper spacing
4. Bottom sponsor banner component exists with dark blue-gray background, adoption CTA section, and heart icon
5. Corner vine placement frame exists as a component showing 4-corner vine positioning with responsive sizing annotations

### Phase 8: Page Compositions
**Goal:** Assemble all components into full-page compositions at mobile and desktop breakpoints, proving the design system works end-to-end and creating the reference layouts.
**Requirements:** PAGE-01, PAGE-02, PAGE-03
**Depends on:** Phase 5 (cards), Phase 6 (interactive), Phase 7 (modals/layout)
**Success Criteria:**
1. Mobile composition (375px width) exists with all components placed in correct positions matching the live site layout — header, cat selection carousel, upload card, sponsor banner, corner vines
2. Desktop composition (1440px width) exists with all components placed matching desktop breakpoint behavior — wider carousel, adjusted spacing, proper max-width containers
3. Oracle reading state composition exists showing the post-cat-selection flow — cat photo in oracle card, question input, ask button, oracle response with thinking state variant
4. All compositions use component instances (not detached copies) so changes propagate

### Phase 9: Export Pipeline
**Goal:** Create export-ready templates and icon derivations from the design system — the assets that leave Figma and enter the real world.
**Requirements:** EXPORT-01, EXPORT-02, EXPORT-03
**Depends on:** Phase 4 (CS_Frame for icons), Phase 8 (compositions for og:image)
**Success Criteria:**
1. og:image frame (1200x630) exists as an exportable composition with MaybeCat branding, optimized for social media preview cards
2. Share card template exists with designated areas for cat photo, oracle response text, and branding elements — exportable as PNG
3. Icon set page exists with CS_Frame-derived icons at favicon (32x32), apple-touch-icon (180x180), and PWA sizes (192x192, 512x512), all export-ready

### Phase 10: Code Bridge & Documentation
**Goal:** Document the mapping between Figma design tokens and the codebase, ensuring the design system is not just a pretty file but a functional bridge to the React/Tailwind implementation.
**Requirements:** BRIDGE-01, BRIDGE-02, BRIDGE-03
**Depends on:** Phase 1 (variables), Phase 5-7 (components)
**Success Criteria:**
1. Variable naming documentation exists mapping every Figma variable name to its corresponding Tailwind class or CSS custom property (e.g., `color/primary/pink-500` -> `text-pink-500` / `--color-pink-500`)
2. Component hierarchy documentation exists mapping every Figma component to its React counterpart (e.g., Figma `Card/Shelter` -> React `ShelterCatCard.tsx` within `Home.tsx`)
3. JSON variable export is generated from Figma variables in a format compatible with design token sync tools, enabling future automated code-to-design token synchronization

## Progress

| Phase | Requirements | Plans Complete | Status |
|-------|-------------|----------------|--------|
| 1. Color Foundations | COLOR-01..05 | 0/0 | Not Started |
| 2. Typography Foundations | TYPE-01..04 | 0/0 | Not Started |
| 3. Gradients & Visual Effects | GRAD-01..03, EFFECT-01..03 | 0/0 | Not Started |
| 4. SVG Asset Extraction | SHAPE-01..06 | 0/0 | Not Started |
| 5. Card Components | CARD-01..04 | 0/0 | Not Started |
| 6. Interactive Components | UI-01..05 | 0/0 | Not Started |
| 7. Modals & Layout Components | MODAL-01..02, LAYOUT-01..03 | 0/0 | Not Started |
| 8. Page Compositions | PAGE-01..03 | 0/0 | Not Started |
| 9. Export Pipeline | EXPORT-01..03 | 0/0 | Not Started |
| 10. Code Bridge & Documentation | BRIDGE-01..03 | 0/0 | Not Started |

---
*Created: 2026-02-07 — Design System Build roadmap*
*Previous roadmap (Cleanup) completed 2026-02-02 — archived in project history*
