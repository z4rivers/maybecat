# MaybeCat Color Palette

Complete color reference for the MaybeCat design system.

---

## Page Background Gradient

The signature warm gradient flowing diagonally across the page.

| Stop | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| 1 | `#EC4899` | `pink-500` | Start (top-left) |
| 2 | `#F472B6` | `pink-400` | Early transition |
| 3 | `#FBBF24` | `amber-400` | Center |
| 4 | `#F59E0B` | `amber-500` | Late transition |
| 5 | `#D97706` | `amber-600` | End (bottom-right) |

```css
background: linear-gradient(135deg, #EC4899, #F472B6, #FBBF24, #F59E0B, #D97706);
```

---

## Text Colors

| Purpose | Hex | Tailwind | Notes |
|---------|-----|----------|-------|
| Primary body text | `#78350F` | `text-amber-900` | Main readable text |
| Dark emphasis | `#451A03` | `text-amber-950` | Headlines, important text |
| Light on dark | `#FEF3C7` | `text-amber-100` | Text on dark backgrounds |
| Muted/placeholder | `#D97706` | `text-amber-600` | 50% opacity for placeholders |
| Secondary light | `#FBBF24` | `text-amber-400` | Decorative, less important |

**Never use:**
- Pure black (`#000000`)
- Pure white (`#FFFFFF`)
- Gray scale colors

---

## Card Backgrounds

### Standard Card (Cream-Amber)

| Position | Hex | Tailwind |
|----------|-----|----------|
| Top | `#FEF3C7` | `amber-100` |
| Middle | `#FDE68A` | `amber-200` |
| Bottom | `#FCD34D` | `amber-300` |

```css
background: linear-gradient(145deg, #FEF3C7, #FDE68A, #FCD34D);
```

### "Your Cat" Card (Deeper Amber)

| Position | Hex | Tailwind |
|----------|-----|----------|
| Top | `#FEF3C7` | `amber-100` |
| Middle | `#FBBF24` | `amber-400` |
| Bottom | `#B45309` | `amber-700` |

```css
background: linear-gradient(145deg, #FEF3C7, #FBBF24, #B45309);
```

---

## Border Colors

| Purpose | Hex | Tailwind | Width |
|---------|-----|----------|-------|
| Card main border | `#78350F` | `amber-900` | 5px |
| Ornate frame | `#92400E` | `amber-800` | 4px |
| Image frame | `#92400E` | `amber-800` | 3px |
| Inner decorative | `#92400E` | `amber-800` | 2px |
| Input border | `#B45309` | `amber-700` | 2px |

---

## Button Colors

### Primary CTA (Consult the Cat)

Rich burnt orange gradient for the main action.

| Position | Hex | Notes |
|----------|-----|-------|
| Start | `#7C2D12` | `orange-900` |
| Middle | `#9A3412` | `orange-800` |
| End | `#C2410C` | `orange-700` |

```css
background: linear-gradient(135deg, #7C2D12, #9A3412, #C2410C);
box-shadow: 0 4px 20px rgba(124,45,18,0.4);
```

### Secondary (Ask Again) - Current

| State | Hex | Tailwind |
|-------|-----|----------|
| Default | `#92400E` | `bg-amber-800` |
| Hover | `#78350F` | `bg-amber-900` |

### Secondary - Recommended Upgrade

```css
background: linear-gradient(135deg, #92400E, #B45309, #D97706);
box-shadow: 0 4px 20px rgba(146,64,14,0.4);
```

### Accent/Success (Share Wisdom) - Current

| State | Hex | Tailwind |
|-------|-----|----------|
| Default | `#047857` | `bg-emerald-700` |
| Hover | `#065F46` | `bg-emerald-800` |

### Accent - Recommended Upgrade

```css
background: linear-gradient(135deg, #065F46, #047857, #059669);
box-shadow: 0 4px 20px rgba(6,95,70,0.4);
```

### Adoption CTA (Green Gradient)

| Position | Hex |
|----------|-----|
| Start | `#065F46` |
| Middle | `#047857` |
| End | `#059669` |
| Border | `#064E3B` |

---

## Jewel Tone Cards

For shelter cats and repeating elements that need variety.

### Hot Pink/Magenta

| Element | Hex |
|---------|-----|
| Gradient start | `#EC4899` |
| Gradient middle | `#BE185D` |
| Gradient end | `#831843` |
| Border | `#500724` |
| Accent (light) | `#FDF2F8` |

### Emerald Green

| Element | Hex |
|---------|-----|
| Gradient start | `#10B981` |
| Gradient middle | `#047857` |
| Gradient end | `#064E3B` |
| Border | `#022C22` |
| Accent (light) | `#D1FAE5` |

### Purple

| Element | Hex |
|---------|-----|
| Gradient start | `#8B5CF6` |
| Gradient middle | `#6D28D9` |
| Gradient end | `#4C1D95` |
| Border | `#2E1065` |
| Accent (light) | `#EDE9FE` |

### Pink

| Element | Hex |
|---------|-----|
| Gradient start | `#F472B6` |
| Gradient middle | `#DB2777` |
| Gradient end | `#9D174D` |
| Border | `#500724` |
| Accent (light) | `#FCE7F3` |

### Coral/Orange

| Element | Hex |
|---------|-----|
| Gradient start | `#FB923C` |
| Gradient middle | `#EA580C` |
| Gradient end | `#9A3412` |
| Border | `#431407` |
| Accent (light) | `#FFEDD5` |

---

## Shadow Colors

| Purpose | Value |
|---------|-------|
| Deep shadow | `rgba(0,0,0,0.4-0.5)` |
| Amber shadow | `rgba(120,53,15,0.3-0.4)` |
| White inset glow | `rgba(255,255,255,0.15-0.4)` |
| Golden glow | `rgba(251,191,36,0.3-0.4)` |
| Button shadow (orange) | `rgba(124,45,18,0.4)` |
| Button shadow (green) | `rgba(6,95,70,0.4)` |

---

## Modal Overlay

```css
background: rgba(69, 26, 3, 0.85);  /* Dark amber at 85% opacity */
```

Hex breakdown: `#451A03` (amber-950) with alpha.

---

## Input Fields

| Element | Value |
|---------|-------|
| Background | `#FFFBEB` (amber-50) |
| Border | `#B45309` (amber-700) |
| Text | `#78350F` (amber-900) |
| Placeholder | `#D97706` at 50% opacity |
| Focus ring | `#F59E0B` at 30% opacity |
| Inset shadow | `rgba(120,53,15,0.1)` |

---

## Decorative Elements

| Element | Color | Opacity |
|---------|-------|---------|
| Corner sparkles (✦) | `text-amber-700` | 50% |
| Corner fleurons (❧) | `text-amber-800` | 100% |
| Decorative stars | `text-amber-100` | 100% |
| Divider lines | `amber-100` | via gradient |
| Corner vines (SVG) | `text-amber-900` | 60% |
| Center mandala | `text-fuchsia-900` | 30% |

---

## Color Relationships

```
Background (warm pink/amber)
    ↓
Card (cream/light amber) - provides contrast
    ↓
Border (dark amber) - defines edges
    ↓
Text (amber-900/950) - readable against cream
    ↓
Accents (jewel tones) - add visual interest
```

This hierarchy ensures readability while maintaining the mystical warmth.
