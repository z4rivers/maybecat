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

### Headlines
- **Font:** Georgia, Cinzel Decorative for special moments
- **Style:** Bold, italic for mystical energy
- **Color:** Deep brown (#7C2D12) on light, cream (#FEF3C7) on dark

### Oracle Response Text
- Large, bold, centered
- Georgia serif for gravitas
- Text shadow for readability on gradients

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

### Rule 3: WHEN IN DOUBT, BOLDER
If you're unsure whether something is too much - it's probably not enough. This isn't a meditation app.

---

## QUICK CHECKLIST

Before shipping any UI change:

- [ ] Are colors still BOLD (not muted)?
- [ ] Does it feel like a tarot deck, not a wellness app?
- [ ] Is there enough decorative detail?
- [ ] Do gradients flow hot pink → gold?
- [ ] Would it look good as a screenshot share?
- [ ] Is text readable with proper contrast?
