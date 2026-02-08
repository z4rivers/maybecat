# MaybeCat Design System — Requirements

## v1 Requirements

### Foundations — Color System
- [ ] **COLOR-01**: Primitive variable collection with all raw hex values (pink-500, amber-400, orange-900, etc.)
- [ ] **COLOR-02**: Semantic variable collection mapping primitives to purpose (text-primary, surface-card, border-accent, etc.)
- [ ] **COLOR-03**: Component variable collection for component-specific tokens (button-bg, card-border, input-bg, etc.)
- [ ] **COLOR-04**: 5 shelter card color themes as variable modes or grouped sets (pink, green, purple, hot-pink, orange)
- [ ] **COLOR-05**: Dark overlay/modal colors (brown overlay, dark blue-gray banner)

### Foundations — Typography
- [ ] **TYPE-01**: Cinzel Decorative text styles at all responsive sizes (64/84/106px headline, plus smaller variants)
- [ ] **TYPE-02**: Georgia text styles for body, buttons, inputs, and oracle responses (all responsive sizes)
- [ ] **TYPE-03**: Text shadow styles for gradient backgrounds (1px outline technique in dark brown)
- [ ] **TYPE-04**: Logo text treatment ("Maybe Cat" with gold offset shadow) as a reusable style

### Foundations — Gradients & Effects
- [ ] **GRAD-01**: Main background gradient (135deg pink→gold) as a Figma style
- [ ] **GRAD-02**: Card background gradients (cream-to-gold oracle card, 5 shelter card gradients) as styles
- [ ] **GRAD-03**: Button gradients (dark brown CTA, cream-to-gold nav buttons) as styles
- [ ] **EFFECT-01**: Card shadow library (primary drop shadow, inset highlights, glow effects)
- [ ] **EFFECT-02**: Text shadow presets (outline technique, logo glow, standard body shadow)
- [ ] **EFFECT-03**: Glass/glow ambient effects if applicable to mystical vibe

### Assets — SVG & Shapes
- [ ] **SHAPE-01**: CS_Frame as clean Figma vector with proper path, usable as icon frame and container
- [ ] **SHAPE-02**: CornerVine decorative flourish as Figma component (4 corner rotation variants)
- [ ] **SHAPE-03**: CenterMandala as Figma component (left/right placement variants)
- [ ] **SHAPE-04**: MysticalStar as Figma component (multiple size variants: sm/md/lg)
- [ ] **SHAPE-05**: Floral pattern overlay as repeating tile/fill pattern
- [ ] **SHAPE-06**: Decorative line dividers (crescent moons ☽ ☾, sparkles ✧, horizontal rules)

### Components — Cards
- [ ] **CARD-01**: "Your Cat" upload card with camera icon, decorative corners (❧), gradient background
- [ ] **CARD-02**: Shelter cat card with 5 color variants, photo frame, name badge, corner sparkles (✦)
- [ ] **CARD-03**: Refresh/load-more card (purple theme with refresh-cats image)
- [ ] **CARD-04**: Oracle reading card with cat photo frame, response text area, thinking state

### Components — Interactive
- [ ] **UI-01**: Ask button (dark brown gradient, Georgia serif, sparkle decorations ✦)
- [ ] **UI-02**: Text input field (amber-50 bg, inset shadow, sparkle icon, Georgia serif)
- [ ] **UI-03**: Carousel navigation buttons (circular, cream-to-gold gradient, chevron icons)
- [ ] **UI-04**: "Adopt Me" badge (pink gradient, gold border, Cinzel text, rotated placement)
- [ ] **UI-05**: Cat name badge (amber-800 pill, centered below photo)

### Components — Modals & Overlays
- [ ] **MODAL-01**: Name input modal (cream-gold card, brown overlay backdrop, corner sparkles)
- [ ] **MODAL-02**: Modal buttons (skip + confirm variants)

### Components — Layout
- [ ] **LAYOUT-01**: Header composition (title, star dividers, decorative lines, moon symbols)
- [ ] **LAYOUT-02**: Bottom sponsor banner (dark blue-gray, adoption CTA section, heart icon)
- [ ] **LAYOUT-03**: Corner vine placement frame (4 corners with responsive sizing)

### Compositions
- [ ] **PAGE-01**: Full mobile page composition (375px width) with all elements placed
- [ ] **PAGE-02**: Full desktop page composition (1440px width) with all elements placed
- [ ] **PAGE-03**: Oracle reading state (after cat selected, with question input and response)

### Export Pipeline
- [ ] **EXPORT-01**: og:image (1200x630) exportable from Figma composition
- [ ] **EXPORT-02**: Share card template (cat photo + oracle response + branding)
- [ ] **EXPORT-03**: Icon set derivable from CS_Frame (favicon, apple-touch-icon, PWA icons at 192/512)

### Code Bridge
- [ ] **BRIDGE-01**: Variable naming maps to Tailwind classes / CSS custom properties documented
- [ ] **BRIDGE-02**: Component hierarchy mirrors React component structure (documented mapping)
- [ ] **BRIDGE-03**: JSON variable export compatible with code token sync

## v2 Requirements (Deferred)

- Plasmic/code-gen integration — connect Figma components to live code
- Animation specs — Framer Motion timing/easing captured in Figma prototypes
- Dark mode theme — variable mode for dark palette
- Merch template system — share card → merch pipeline
- Multi-page flows — onboarding, settings, future feature pages

## Out of Scope

- Code changes to the live site — this milestone is design extraction only
- New feature design — capture what exists first
- Illustrated/AI-generated brand marks — real CSS rendering is source of truth
- User research or persona work — the product is live and validated

## Traceability

| Requirement | Phase | Plan | Status |
|-------------|-------|------|--------|
| COLOR-01 | — | — | Pending |
| COLOR-02 | — | — | Pending |
| COLOR-03 | — | — | Pending |
| COLOR-04 | — | — | Pending |
| COLOR-05 | — | — | Pending |
| TYPE-01 | — | — | Pending |
| TYPE-02 | — | — | Pending |
| TYPE-03 | — | — | Pending |
| TYPE-04 | — | — | Pending |
| GRAD-01 | — | — | Pending |
| GRAD-02 | — | — | Pending |
| GRAD-03 | — | — | Pending |
| EFFECT-01 | — | — | Pending |
| EFFECT-02 | — | — | Pending |
| EFFECT-03 | — | — | Pending |
| SHAPE-01 | — | — | Pending |
| SHAPE-02 | — | — | Pending |
| SHAPE-03 | — | — | Pending |
| SHAPE-04 | — | — | Pending |
| SHAPE-05 | — | — | Pending |
| SHAPE-06 | — | — | Pending |
| CARD-01 | — | — | Pending |
| CARD-02 | — | — | Pending |
| CARD-03 | — | — | Pending |
| CARD-04 | — | — | Pending |
| UI-01 | — | — | Pending |
| UI-02 | — | — | Pending |
| UI-03 | — | — | Pending |
| UI-04 | — | — | Pending |
| UI-05 | — | — | Pending |
| MODAL-01 | — | — | Pending |
| MODAL-02 | — | — | Pending |
| LAYOUT-01 | — | — | Pending |
| LAYOUT-02 | — | — | Pending |
| LAYOUT-03 | — | — | Pending |
| PAGE-01 | — | — | Pending |
| PAGE-02 | — | — | Pending |
| PAGE-03 | — | — | Pending |
| EXPORT-01 | — | — | Pending |
| EXPORT-02 | — | — | Pending |
| EXPORT-03 | — | — | Pending |
| BRIDGE-01 | — | — | Pending |
| BRIDGE-02 | — | — | Pending |
| BRIDGE-03 | — | — | Pending |

---
*Last updated: 2026-02-07 — initial requirements definition*
