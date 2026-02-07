---
name: style-guide
description: "MaybeCat visual identity and design system. The psychedelic tarot maximalism aesthetic - hot pink, gold, bold, ornate."
---

# Design Director (MaybeCat)

You own the pixel-perfect execution of MaybeCat's **psychedelic tarot maximalism** aesthetic.

**Design Inspiration:**
1. **Ornate tarot decks** - hot pink backgrounds, gold foil details, botanical flourishes, maximalist decoration
2. **Celestial Seasonings packaging** - dreamy warm palettes, vintage typography, cozy storybook warmth, that "ahh" comfort feeling

**NOT:** illustrated characters. We use REAL CAT PHOTOS. The warmth comes from color and typography, not cartoons.

---

## THE COLOR SYSTEM

### Primary Gradient (Background)
```css
linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)
```
- **Hot pink (#EC4899)** → **Gold (#FBBF24)** → **Amber (#D97706)**
- This is the signature look. Don't mute it.

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Hot Pink | #EC4899 | Primary brand, backgrounds |
| Fuchsia | #DB2777 | Deep accents, shadows |
| Gold | #FBBF24 | Highlights, foil effect |
| Amber | #F59E0B | Warm transitions |
| Cream | #FEF3C7 | Card backgrounds, text areas |
| Deep Brown | #7C2D12 | Text on light, borders |

### Cat Card Gradients
Multiple vibrant options - NOT muted:
- **Hot pink/magenta:** `#EC4899 → #BE185D → #831843`
- **Emerald:** `#10B981 → #047857 → #064E3B`
- **Purple:** `#8B5CF6 → #6D28D9 → #4C1D95`
- **Coral/Orange:** `#FB923C → #EA580C → #9A3412`

---

## VISUAL PHILOSOPHY

### The Golden Rule: BOLD, NOT SAFE

This is **psychedelic mystical glam**:
- Colors should POP, not whisper
- Ornate is good. Baroque is good.
- If it looks "tasteful and restrained" - it's WRONG
- Channel tarot deck energy, not corporate wellness app

### What We ARE
- Maximalist decorative flourishes
- Gold foil / metallic luxe energy
- Hot pink as a power color
- Mystical but LOUD and vibrant
- Ornate mandalas, vines, botanical elements

### What We Are NOT
- Muted
- Parchment/sepia/vintage
- Minimalist
- Corporate clean
- ILLUSTRATED CHARACTERS (no cartoons, no drawings of cats)
- RECTANGLES / BOXY / POWERPOINT LAYOUTS
- Rigid grids, sharp 90° corners, corporate card layouts

### Real Cat Photos
- Users upload their OWN cats or choose from shelter cats
- Photos are the centerpiece - real, charming, personality-filled
- The design frames the photo, doesn't compete with it
- Warmth comes from COLOR and TYPOGRAPHY, not illustrations

---

## SHAPE LANGUAGE: Indian/Asian Influence

### NO Rectangles
- Avoid boxy, PowerPoint-style layouts
- No rigid grids or sharp 90° corners
- Reject corporate card patterns

### YES Organic, Ornate Shapes
- **Mandala-inspired** - circular, radiating patterns
- **Lotus/petal shapes** - scalloped edges, curved borders
- **Arch frames** - Mughal/Indian architectural shapes
- **Ornate curved borders** - decorative, not functional-looking
- **Bold color fields** - strong, confident blocks of saturated color

### Shape Inspiration
Think: Indian miniature paintings, Mughal architecture, Buddhist mandalas, Asian textile patterns
- Curves over corners
- Ornate over minimal
- Decorative over functional
- Organic over geometric grids

### Implementation
- Use `border-radius` generously - but not just "rounded corners"
- SVG shapes for ornate frames
- Clip-paths for non-rectangular containers
- Gradients that flow, not stack

---

## DECORATIVE ELEMENTS

### Corner Vines
- Ornate botanical flourishes in corners
- `text-amber-900/60` for subtle integration
- Scale and flip for symmetry

### Mandalas
- Intricate circular patterns
- `text-fuchsia-900/30` as background texture
- Reinforce mystical oracle theme

### Mystical Symbols
- Stars (✧), moons (☽ ☾), flourishes (❧)
- Gold/amber tones on dark, cream on light
- Scattered intentionally, not randomly

---

## TYPOGRAPHY

### The Principle: Jewelry, Not Armor

Text should feel like **gold leaf on a tarot card** — luminous, precise, effortless. NOT like stamped metal or neon signage. The difference is restraint in *technique* while being bold in *presence*.

Think Celestial Seasonings box lettering: warm, confident, readable at a glance — but never heavy-handed. The type has presence because of its color and placement, not because you can see the Photoshop effects.

### Fonts
- **Cinzel Decorative** — logo, hero moments, ceremonial text
- **Georgia** — oracle responses, body text, gravitas without pretension

### Color Rules for Text on Gradients

The background gradient shifts from hot pink → gold → amber. Text must read clearly across ALL zones:

| Background Zone | Text Color | Why |
|----------------|------------|-----|
| On gradient (pink/gold) | Cream `#FEF3C7` | Light on saturated = instant readability |
| On cream/light cards | Deep brown `#7C2D12` | Dark on light = classic contrast |
| On dark sections (footer) | Cream or gold `#FDE68A` | Light on dark = clean |

**General rule:** Cream text on the gradient for subtitles, labels, UI text.

**Exception — the logo:** The "Maybe Cat" title uses **dark brown `#78350F` with a gold offset shadow (`2px 2px 0 #FBBF24`)** — a deliberate two-tone carnival/tarot lettering effect. This is the logo's identity. Don't flatten it to single-color cream. If the logo needs more pop, add a barely-visible dark edge outline (rgba black at 0.15 opacity), never a heavy stroke.

### Text Shadow: The Outline Technique

When text sits on busy or shifting backgrounds, use a **subtle multi-directional dark outline** for edge definition:

```js
// Standard outline — works for most text on gradients
textShadow: [
  '-1px -1px 0 #78350F',
  ' 1px -1px 0 #78350F',
  '-1px  1px 0 #78350F',
  ' 1px  1px 0 #78350F',
  ' 0 2px 4px rgba(0,0,0,0.3)'   // soft drop shadow for depth
].join(', ')
```

**Rules for shadows:**
- **1px offsets** for ALL text sizes — the outline stays crisp, not blobby. Resist the urge to scale up shadow size with font size.
- **Dark brown `#78350F`** for the outline — matches the brand palette, not arbitrary black
- **Never use `WebkitTextStroke`** — it bloats letterforms and looks like a Photoshop beginner tutorial. The multi-directional shadow achieves the same edge definition without distorting the type.
- **One soft drop shadow** (`0 2px 4px`) adds depth. Optional warm glow (`0 0 30px rgba(251,191,36,0.4)`) for hero/logo text only.
- **The shadow should be invisible at a glance.** If someone notices "oh, there's an outline" — it's too heavy. The shadow exists to make the *text* pop, not to be seen itself.

### Scale & Weight Hierarchy

| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Logo "Maybe Cat" | 70-114px (responsive) | font-black (900) | Cinzel Decorative, dark brown + gold offset (two-tone carnival) |
| Ticker/subtitle | 1.1-1.7rem | font-bold (700) | Cinzel Decorative, cream + outline |
| Cat names | base-lg | font-bold (700) | Light text, shadow for card readability |
| Oracle response | xl-2xl | font-bold (700) | Georgia, deep brown on cream card |
| Body/UI text | sm-base | normal-medium | Clean, no shadow needed |

### What NOT to Do
- **Thick strokes or outlines** — type should feel leafed on, not stamped. If it looks like you outlined text in Illustrator, dial it back.
- **Multiple competing effects** — pick ONE shadow approach. Don't stack stroke + outline + glow + drop shadow.
- **Scaling shadow with text size** — a 114px headline still uses 1px outline. The letterforms are already commanding at that size; the shadow just cleans the edges.
- **Dark text on bright gradient** — flip to cream for UI text/labels. Exception: the logo uses dark brown + gold offset intentionally (see logo note above).

---

## COMPONENT PATTERNS

### Oracle Card (Response Display)
```
Background: cream gradient (FEF3C7 → FDE68A → FCD34D)
Border: subtle warm tone
Text: deep brown, bold, centered
Watermark: subtle "maybecat.com" below
```

### Cat Selection Cards
```
Background: vibrant gradient (varies by cat)
Border: dark accent matching gradient
Name: bold, light text with shadow
Glow effect on hover/select
```

### Buttons
- Solid, bold colors (not outlined)
- Clear contrast with background
- Emerald for positive actions
- Deep burgundy/brown for secondary

---

## SPACING RULES

### Keep It Tight
- Hero section: `py-8` to `py-12` max
- Between elements: `mb-4` to `mb-6`
- Don't let empty space dilute the energy

### The Test
Can you see the cat, the response, and the action without scrolling? If no, tighten up.

---

## RESPONSIVE BEHAVIOR

### Mobile
- Stack vertically
- Full-width cards
- Maintain bold colors (don't gray out)
- Touch targets minimum 44px

### Desktop
- Can show more ornate details
- Side mandalas visible
- Larger corner flourishes

---

## CRITICAL RULES

### Rule 1: ONE CHANGE AT A TIME
When tweaking design:
- Make ONE change
- Review
- Then make the next change if needed

NEVER change multiple spacing/color values at once.

### Rule 2: PRESERVE THE VIBE
If a fix requires making things more muted or "cleaner" - STOP. Find another way. The maximalist energy is the brand.

### Rule 3: BOLD IN COLOR, RESTRAINED IN TECHNIQUE
- **Colors, decoration, ornament** → go big. Saturated, vivid, unapologetic. This isn't a meditation app.
- **Text effects, shadows, strokes** → go precise. The craft should be invisible. If you can see the technique, it's overdone.
- Think of it like jewelry: a bold gold necklace is maximalist. A gold necklace crusted in rhinestones is tacky. Same gold, different restraint.
- **"Bolder" means bolder PRESENCE, not heavier effects.** A cream headline on a hot pink gradient is bold. That same headline with a 3px stroke is just loud.

---

## QUICK CHECKLIST

Before shipping any UI change:

- [ ] Are colors still BOLD (not muted)?
- [ ] Does it feel like a tarot deck, not a wellness app?
- [ ] Is there enough decorative detail?
- [ ] Do gradients flow hot pink → gold?
- [ ] Would it look good as a screenshot share?
- [ ] Is text readable with proper contrast?
- [ ] Are text effects invisible at a glance? (If you notice the shadow/outline before the words, dial it back.)
- [ ] Is text on the gradient using cream (#FEF3C7), not dark brown?
- [ ] Does the typography feel leafed on, or stamped/outlined? (Leafed = right, stamped = wrong.)
