# MaybeCat Typography & Spacing

Font stacks, size scales, and spacing rhythm for the MaybeCat design system.

---

## Font Families

### Display Font: Cinzel Decorative

Used for titles, headings, and mystical emphasis.

```css
font-family: 'Cinzel Decorative', serif;
```

**Load via Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet">
```

**Usage:**
- Main title "Maybe Cat"
- Card headings ("The Oracle Speaks")
- Cat names on tarot cards
- Section titles

### Body Font: Georgia

Used for all readable content, buttons, and UI text.

```css
font-family: Georgia, serif;
```

**Fallback stack:**
```css
font-family: Georgia, 'Times New Roman', serif;
```

**Usage:**
- Body text
- Buttons
- Input fields
- Descriptions
- Oracle readings

---

## Font Weights

| Weight | Tailwind | Usage |
|--------|----------|-------|
| 900 (Black) | `font-black` | Main title, card names, headings |
| 700 (Bold) | `font-bold` | Buttons, important labels, emphasis |
| 600 (Semibold) | `font-semibold` | Secondary headings, labels |
| 400 (Normal) | `font-normal` | Body text |

---

## Font Sizes

### Responsive Scale

| Element | Mobile | Tablet (md:) | Desktop (lg:) |
|---------|--------|--------------|---------------|
| Main title | `text-5xl` | `text-6xl` | `text-7xl` |
| Section heading | `text-2xl` | `text-3xl` | `text-3xl` |
| Card heading | `text-xl` | `text-2xl` | `text-2xl` |
| Body large | `text-lg` | `text-lg` | `text-xl` |
| Body | `text-base` | `text-base` | `text-lg` |
| Small/Caption | `text-sm` | `text-sm` | `text-base` |
| Button | `text-lg` | `text-lg` | `text-lg` |

### Tailwind Size Reference

| Class | Size |
|-------|------|
| `text-sm` | 0.875rem (14px) |
| `text-base` | 1rem (16px) |
| `text-lg` | 1.125rem (18px) |
| `text-xl` | 1.25rem (20px) |
| `text-2xl` | 1.5rem (24px) |
| `text-3xl` | 1.875rem (30px) |
| `text-4xl` | 2.25rem (36px) |
| `text-5xl` | 3rem (48px) |
| `text-6xl` | 3.75rem (60px) |
| `text-7xl` | 4.5rem (72px) |

---

## Text Effects

### Title Text Shadow (Golden Glow)

```css
text-shadow:
  2px 2px 0 #FBBF24,           /* Golden offset */
  4px 4px 0 rgba(0,0,0,0.2),   /* Dark depth */
  0 0 30px rgba(251,191,36,0.4); /* Golden glow */
```

### Subtitle Text Shadow

```css
text-shadow: 1px 1px 0 rgba(251,191,36,0.6);
```

### Card Text Shadow (Cream)

```css
text-shadow: 1px 1px 0 rgba(254,243,199,0.5);
```

### Letter Spacing

| Class | Effect |
|-------|--------|
| `tracking-tight` | Tighter letter spacing (titles) |
| `tracking-normal` | Default |
| `tracking-wide` | Slightly wider (all caps text) |

---

## Spacing System

### Padding

| Size | Tailwind | Pixels | Usage |
|------|----------|--------|-------|
| xs | `p-2` | 8px | Small elements, badges |
| sm | `p-4` | 16px | Compact cards, small sections |
| md | `p-6` | 24px | Standard cards |
| lg | `2rem` (inline) | 32px | Modals, large containers |

### Common Padding Patterns

```jsx
// Card padding
className="p-6"  // or style={{ padding: '1.5rem' }}

// Button padding
className="py-3 px-4"

// Input padding
className="px-4 py-3"

// Modal padding
style={{ padding: '2rem' }}

// Compact element
className="px-2 py-1"
```

### Margins

| Size | Tailwind | Usage |
|------|----------|-------|
| xs | `mt-1`, `mb-1` | Tight spacing |
| sm | `mt-2`, `mb-2` | Between related items |
| md | `mt-4`, `mb-4` | Between sections |
| lg | `mt-6`, `mb-6` | Major section breaks |
| xl | `mt-8`, `mb-8` | Page-level spacing |

### Gap (Flex/Grid Spacing)

| Size | Tailwind | Mobile | Tablet | Desktop |
|------|----------|--------|--------|---------|
| sm | `gap-2` | 8px | - | - |
| md | `gap-3` | 12px | - | - |
| base | `gap-4` | 16px | `gap-6` | `gap-8` |

**Responsive gap pattern:**
```jsx
className="gap-4 md:gap-6 lg:gap-8"
```

---

## Border Radius

| Size | Tailwind | Usage |
|------|----------|-------|
| sm | `rounded` | Inner frames |
| md | `rounded-lg` | Cards, images |
| lg | `rounded-xl` | Buttons, inputs |
| xl | `rounded-2xl` | Large cards |
| full | `rounded-full` | Circular elements, badges |

**Common patterns:**
```jsx
// Cards
className="rounded-lg"  // or style={{ borderRadius: '0.5rem' }}

// Buttons & inputs
className="rounded-xl"

// Badges & close buttons
className="rounded-full"

// Large containers
style={{ borderRadius: '1rem' }}
```

---

## Border Widths

| Width | Usage |
|-------|-------|
| 2px | Inner frames, inputs |
| 3px | Image frames |
| 4px | Card borders, ornate frames |
| 5px | Main card border (heavy emphasis) |

---

## Responsive Breakpoints

| Breakpoint | Prefix | Min Width |
|------------|--------|-----------|
| Mobile | (none) | 0px |
| Tablet | `md:` | 768px |
| Desktop | `lg:` | 1024px |

### Common Responsive Patterns

**Text sizing:**
```jsx
className="text-xl md:text-2xl lg:text-3xl"
```

**Element sizing:**
```jsx
className="w-52 md:w-64 lg:w-72"
className="h-80 md:h-[400px] lg:h-[440px]"
```

**Spacing:**
```jsx
className="gap-4 md:gap-6 lg:gap-8"
className="p-4 md:p-6"
```

**Visibility:**
```jsx
className="hidden md:block"      // Hide on mobile
className="block md:hidden"      // Show only on mobile
className="hidden lg:block"      // Show only on desktop
```

---

## Box Shadows

### Standard Card Shadow

```css
box-shadow:
  0 15px 50px rgba(0,0,0,0.4),              /* Outer elevation */
  inset 0 0 40px rgba(255,255,255,0.15);    /* Inner glow */
```

### Large Card Shadow (with glow)

```css
box-shadow:
  0 20px 60px rgba(0,0,0,0.5),              /* Deep outer shadow */
  inset 0 0 60px rgba(255,255,255,0.4),     /* Strong inner glow */
  0 0 30px rgba(251,191,36,0.3);            /* Golden ambient glow */
```

### Reading Card Shadow (amber-tinted)

```css
box-shadow:
  0 20px 60px rgba(120,53,15,0.3),          /* Amber outer shadow */
  inset 0 0 40px rgba(255,255,255,0.2);     /* Soft inner glow */
```

### Button Shadow

```css
/* Orange button */
box-shadow: 0 4px 20px rgba(124,45,18,0.4);

/* Green button */
box-shadow: 0 4px 20px rgba(6,95,70,0.4);

/* Amber button */
box-shadow: 0 4px 20px rgba(146,64,14,0.4);
```

### Input Inset Shadow

```css
box-shadow: inset 0 2px 8px rgba(120,53,15,0.1);
```

### Photo Frame Shadow

```css
box-shadow: 0 12px 30px rgba(120,53,15,0.4);
```

### Inner Frame Shadow

```css
box-shadow: inset 0 0 20px rgba(120,53,15,0.2);
```

---

## Animation & Motion

### Hover Scale

```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>
```

### Card Hover (with lift and rotate)

```jsx
<motion.div
  whileHover={{
    scale: 1.05,
    y: -10,
    rotate: -2
  }}
>
```

### Button Hover

```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
```

### Modal Enter/Exit

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
  >
```

### Hover Transition (CSS)

```jsx
className="transition-all group-hover:scale-110"
```

---

## Z-Index Layers

| Layer | z-index | Usage |
|-------|---------|-------|
| Base content | 0 | Normal flow |
| Elevated cards | 10 | Hover states |
| Floating elements | 20 | Tooltips, dropdowns |
| Modal overlay | 50 | Modal backgrounds |
| Modal content | 51 | Modal cards |
| Toast/notifications | 100 | System messages |
