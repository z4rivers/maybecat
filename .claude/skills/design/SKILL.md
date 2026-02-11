---
name: design
description: "MaybeCat design system — psychedelic tarot maximalism. Use when adding UI elements, changing colors, modifying visual styling, typography, layout, glow effects, backgrounds, or making ANY design decision for MaybeCat. Covers colors, shapes, components, Figma MCP, Plasmic codegen."
---

# MaybeCat Design System

**Psychedelic tarot maximalism.** Gold foil tarot decks meets Celestial Seasonings warmth. REAL cat photos, never illustrations.

## Reference Files

| File | When to Read |
|------|-------------|
| [colors.md](colors.md) | Hex values, gradients, jewel tones, shadows |
| [components.md](components.md) | Copy-paste JSX for cards, buttons, modals, inputs |
| [typography.md](typography.md) | Fonts, sizes, text shadows, spacing, responsive scale |
| [shapes.md](shapes.md) | Organic containers, clip-paths, SVG borders, masks |
| [figma.md](figma.md) | Figma MCP integration, design-to-code workflow |
| [plasmic.md](plasmic.md) | Plasmic CLI sync, wrappers, variants, slots |

---

## The Gradient

```css
linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)
```

## Quick Color Reference

| Role | Hex | Tailwind |
|------|-----|----------|
| Hot Pink | #EC4899 | pink-500 |
| Fuchsia | #DB2777 | pink-600 |
| Gold | #FBBF24 | amber-400 |
| Amber | #F59E0B | amber-500 |
| Cream | #FEF3C7 | amber-100 |
| Deep Brown | #7C2D12 | orange-900 |
| Text Dark | #78350F | amber-900 |

## Typography

- **Headlines:** `Cinzel Decorative`, Georgia, serif
- **Body/Buttons:** `Georgia`, serif
- **Never:** sans-serif, system fonts

---

## CRITICAL RULES

### Rule 0: ASK BEFORE ANY FRONT-FACING CREATIVE DECISION
**Icons, images, copy, visual design, anything the user or visitors will SEE** — explain what you plan to do, give options, and get user approval BEFORE generating or implementing. No exceptions. Backend/config/URL fixes are fine to just do. Creative choices are NOT. Show the user the result and get approval before wiring anything up.

### Rule 1: ONE CHANGE AT A TIME
Make ONE visual change. Review. Then next change if needed. NEVER change multiple spacing/color/effect values at once.

### Rule 2: PRESERVE THE VIBE
If a fix requires making things more muted or "cleaner" — STOP. Find another way. The maximalist energy IS the brand.

### Rule 3: BOLD IN COLOR, RESTRAINED IN TECHNIQUE
- **Colors, decoration, ornament** → go big. Saturated, vivid, unapologetic.
- **Text effects, shadows, strokes** → go precise. Invisible craft.
- A bold gold necklace is maximalist. A gold necklace crusted in rhinestones is tacky. Same gold, different restraint.
- **"Bolder" means bolder PRESENCE, not heavier effects.**

### Rule 4: JEWELRY, NOT ARMOR
Text should feel like **gold leaf on a tarot card** — luminous, precise, effortless. NOT stamped metal or neon signage. If someone notices "oh, there's an outline" — it's too heavy. The shadow exists to make the *text* pop, not to be seen itself.

### Rule 5: BRAND ASSET CONSISTENCY
All brand assets (icons, og:image, share cards, favicons) must be **pixel-perfect derivatives of the live site**, not approximations or recreations.
- **NEVER recreate brand elements from scratch** — capture them from the live rendered site (Puppeteer, screenshot, etc.)
- **NEVER generate brand logos/wordmarks with AI image tools** — they will not match the actual CSS rendering
- The source of truth is the live site. Assets are captured FROM it, not inspired BY it.
- Every derivative asset must be visually compared side-by-side with the live site before approval.
- Icon sizes (180, 192, 512) are crops/resizes of the same high-res capture — not separate renders.

---

## Typography on Gradients

| Background Zone | Text Color | Why |
|----------------|------------|-----|
| On gradient (pink/gold) | Cream `#FEF3C7` | Light on saturated |
| On cream/light cards | Deep brown `#7C2D12` | Dark on light |
| On dark sections | Cream or gold `#FDE68A` | Light on dark |

**The logo exception:** "Maybe Cat" uses dark brown `#78350F` with gold offset shadow `2px 2px 0 #FBBF24` — deliberate two-tone carnival/tarot lettering. Don't flatten to cream.

### Text Shadow: The Outline Technique

```js
// Standard outline for text on gradients
textShadow: [
  '-1px -1px 0 #78350F',
  ' 1px -1px 0 #78350F',
  '-1px  1px 0 #78350F',
  ' 1px  1px 0 #78350F',
  ' 0 2px 4px rgba(0,0,0,0.3)'
].join(', ')
```

- **1px offsets for ALL text sizes** — stays crisp, not blobby
- **Dark brown `#78350F`** for the outline — on-brand
- **Never use `WebkitTextStroke`** — bloats letterforms
- **One soft drop shadow** for depth. Warm glow optional for hero/logo only.

---

## Visual Philosophy

### What We ARE
- Maximalist decorative flourishes
- Gold foil / metallic luxe energy
- Hot pink as a power color
- Mystical but LOUD and vibrant
- Ornate mandalas, vines, botanical elements
- Organic, curved, flowing shapes

### What We Are NOT
- Muted, parchment, sepia, vintage
- Minimalist, corporate, clean
- Illustrated characters (REAL cat photos only)
- Rectangles, boxy, PowerPoint layouts
- Rigid grids, sharp 90° corners

### Shape Language
Think: Indian miniature paintings, Mughal architecture, Buddhist mandalas, Asian textile patterns.
- Curves over corners
- Ornate over minimal
- Decorative over functional
- See [shapes.md](shapes.md) for implementation techniques

---

## Decorative Elements

| Element | Color | Opacity |
|---------|-------|---------|
| Corner sparkles (✦) | amber-700 | 50% |
| Corner fleurons (❧) | amber-800 | 100% |
| Stars | amber-100 | 100% |
| Corner vines (SVG) | amber-900 | 60% |
| Center mandala | fuchsia-900 | 30% |

---

## Gemini Integration

Claude orchestrates, Gemini generates design artifacts. Available tools:

| Tool | Use Case |
|------|----------|
| `gemini-generate-image` | Decorative elements, ornaments, SVG patterns |
| `gemini-image-prompt` | Prompts for tarot-style imagery |
| `gemini-analyze-image` | Color extraction from references |
| `gemini-brainstorm` | Layout variations, shape ideas |

**Quality gate:** Always validate Gemini output against this design system before implementing.

---

## Before Shipping Checklist

- [ ] Colors still BOLD (not muted)?
- [ ] Feels like a tarot deck, not a wellness app?
- [ ] Enough decorative detail?
- [ ] Gradient flows hot pink → gold?
- [ ] Screenshot-worthy?
- [ ] Text readable with proper contrast?
- [ ] Text effects invisible at a glance?
- [ ] Text on gradient uses cream (#FEF3C7), not dark brown?
- [ ] Typography feels leafed on, not stamped/outlined?

---

## Project IDs

| Tool | ID |
|------|----|
| Figma | `kIX8fJJs3PIO6uJTQuNu8l` |
| Plasmic | `4ffb6YXS6J8qRiPY69uq36` |
