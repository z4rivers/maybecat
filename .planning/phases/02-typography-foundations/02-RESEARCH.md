# Phase 2: Typography Foundations - Research

**Researched:** 2026-02-07
**Domain:** Typography tokens / Text styles for Figma design system
**Confidence:** HIGH

## Summary

This phase extracts every text style from the live MaybeCat codebase and documents them for translation into Figma text styles via Tokens Studio. The site uses exactly two font families: **Cinzel Decorative** (display/title font loaded from Google Fonts) and **Georgia** (system serif used for all body text, inputs, buttons, and oracle responses). Georgia is also set as the global body font in CSS.

The codebase uses 26 distinct text style combinations across two screens (cat selection and oracle reading). Most styles have responsive variants using Tailwind's `sm:` / `md:` / `lg:` breakpoint prefixes. Text shadows are used extensively -- five distinct shadow techniques exist, from the complex logo treatment (gold offset + depth + glow + edge definition) to simple readability outlines on gradient backgrounds.

A significant finding: the Google Fonts import only loads Cinzel Decorative at weights 400 and 700, but the CSS applies `font-black` (weight 900) to multiple Cinzel Decorative elements including the main title. The browser faux-bolds weight 700 to simulate 900, which may produce slightly different results than the true 900 weight available on Google Fonts. This should be documented as a design system note.

**Primary recommendation:** Create primitive typography tokens (fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacing) and compose them into typography composite tokens using Tokens Studio's JSON format. Structure responsive variants as separate tokens (e.g., `heading-title/base`, `heading-title/md`, `heading-title/lg`) since Tokens Studio does not support responsive breakpoints natively.

## Standard Stack

### Core
| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Tokens Studio for Figma | Current (2025/2026) | Import typography tokens as JSON, export as Figma Text Styles | Industry standard plugin for design token management in Figma |
| Google Fonts - Cinzel Decorative | wght@400;700;900 | Display/title typeface | Already used in the live site; weight 900 available but not currently loaded |
| Georgia (system font) | System | Body/UI typeface | Already used as global body font; no loading needed |

### Supporting
| Tool | Purpose | When to Use |
|------|---------|-------------|
| Figma Text Styles | Native text style management | Created by Tokens Studio export; used for applying styles to frames |
| Figma Variables (from Phase 1) | Color variable references in text styles | Text colors reference semantic color variables |

## Architecture Patterns

### Recommended Token File Structure

```
tokens/
├── primitives/
│   ├── fontFamilies.json    # Cinzel Decorative, Georgia
│   ├── fontSizes.json       # All px values
│   ├── fontWeights.json     # 400, 600, 700, 900
│   ├── lineHeights.json     # tight, relaxed, none, etc.
│   └── letterSpacing.json   # tight, wider, widest
└── composite/
    └── typography.json      # Composed text styles
```

### Pattern 1: Primitive + Composite Token Architecture

**What:** Define individual text properties as primitive tokens, then compose them into typography composite tokens that Tokens Studio exports as Figma Text Styles.

**When to use:** Always -- this is the standard Tokens Studio pattern.

**Example JSON (primitives):**
```json
{
  "fontFamilies": {
    "cinzel": {
      "value": "Cinzel Decorative",
      "type": "fontFamilies"
    },
    "georgia": {
      "value": "Georgia",
      "type": "fontFamilies"
    }
  },
  "fontSizes": {
    "10": { "value": "10px", "type": "fontSizes" },
    "11": { "value": "11px", "type": "fontSizes" },
    "12": { "value": "12px", "type": "fontSizes" },
    "14": { "value": "14px", "type": "fontSizes" },
    "16": { "value": "16px", "type": "fontSizes" },
    "18": { "value": "18px", "type": "fontSizes" },
    "20": { "value": "20px", "type": "fontSizes" },
    "22": { "value": "22px", "type": "fontSizes" },
    "24": { "value": "24px", "type": "fontSizes" },
    "26": { "value": "26px", "type": "fontSizes" },
    "30": { "value": "30px", "type": "fontSizes" },
    "36": { "value": "36px", "type": "fontSizes" },
    "48": { "value": "48px", "type": "fontSizes" },
    "60": { "value": "60px", "type": "fontSizes" },
    "64": { "value": "64px", "type": "fontSizes" },
    "72": { "value": "72px", "type": "fontSizes" },
    "84": { "value": "84px", "type": "fontSizes" },
    "106": { "value": "106px", "type": "fontSizes" }
  },
  "fontWeights": {
    "regular": { "value": 400, "type": "fontWeights" },
    "semibold": { "value": 600, "type": "fontWeights" },
    "bold": { "value": 700, "type": "fontWeights" },
    "black": { "value": 900, "type": "fontWeights" }
  },
  "lineHeights": {
    "none": { "value": "100%", "type": "lineHeights" },
    "tight": { "value": "125%", "type": "lineHeights" },
    "default": { "value": "150%", "type": "lineHeights" },
    "relaxed": { "value": "163%", "type": "lineHeights" }
  },
  "letterSpacing": {
    "tight": { "value": "-0.025em", "type": "letterSpacing" },
    "normal": { "value": "0", "type": "letterSpacing" },
    "wider": { "value": "0.05em", "type": "letterSpacing" },
    "widest": { "value": "0.1em", "type": "letterSpacing" }
  }
}
```

**Example JSON (composite typography token):**
```json
{
  "heading": {
    "title": {
      "base": {
        "value": {
          "fontFamily": "{fontFamilies.cinzel}",
          "fontWeight": "{fontWeights.black}",
          "fontSize": "{fontSizes.64}",
          "lineHeight": "{lineHeights.tight}",
          "letterSpacing": "{letterSpacing.tight}",
          "textCase": "none",
          "textDecoration": "none"
        },
        "type": "typography"
      },
      "md": {
        "value": {
          "fontFamily": "{fontFamilies.cinzel}",
          "fontWeight": "{fontWeights.black}",
          "fontSize": "{fontSizes.84}",
          "lineHeight": "{lineHeights.tight}",
          "letterSpacing": "{letterSpacing.tight}",
          "textCase": "none",
          "textDecoration": "none"
        },
        "type": "typography"
      },
      "lg": {
        "value": {
          "fontFamily": "{fontFamilies.cinzel}",
          "fontWeight": "{fontWeights.black}",
          "fontSize": "{fontSizes.106}",
          "lineHeight": "{lineHeights.tight}",
          "letterSpacing": "{letterSpacing.tight}",
          "textCase": "none",
          "textDecoration": "none"
        },
        "type": "typography"
      }
    }
  }
}
```

**Source:** [Tokens Studio - Typography Composite](https://docs.tokens.studio/manage-tokens/token-types/typography), [Tokens Studio - Font Family](https://docs.tokens.studio/manage-tokens/token-types/typography/font-family)

### Pattern 2: Responsive Variants as Separate Tokens

**What:** Since Tokens Studio has no concept of CSS breakpoints, create separate tokens for each responsive size (base/md/lg) and apply the appropriate one to each Figma frame size.

**When to use:** For every text style that changes across breakpoints.

**Source:** This is the standard approach -- Figma has no responsive text styles. Each Figma frame (mobile/tablet/desktop) uses the matching text style variant.

### Anti-Patterns to Avoid
- **Creating text styles in Figma UI instead of tokens:** Loses the structured JSON source of truth. Always define in Tokens Studio JSON first.
- **Mixing font family into style names:** Name by purpose, not by font. Use `heading/title` not `cinzel-64-black`.
- **Forgetting to pair fontFamily with fontWeight:** Tokens Studio requires BOTH to be applied simultaneously to a text layer for the visual to match.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Text style creation | Manual Figma text styles one by one | Tokens Studio JSON import + export to styles | Structured, versionable, repeatable |
| Responsive variants | Figma variables for font size switching | Separate text styles per breakpoint | Figma text styles don't support variable font sizes natively |
| Text shadow effects | Text shadow as part of text style | Figma Effect Styles (separate from text) | Text shadows are not part of Tokens Studio typography tokens; they are Figma effects |

**Key insight:** Tokens Studio typography tokens cover font family, size, weight, line-height, letter-spacing, text-case, and text-decoration. Text shadows, text colors, and other visual effects must be handled separately (via Figma color variables and effect styles).

## Complete Text Style Audit

### Font Families Used

| Font Family | CSS Value | Loaded From | Weights Loaded | Weights Used |
|-------------|-----------|-------------|----------------|--------------|
| Cinzel Decorative | `'Cinzel Decorative', Georgia, serif` | Google Fonts | 400, 700 | 400 (regular), 700 (bold), **900 (black -- NOT loaded, faux-bolded)** |
| Georgia | `Georgia, serif` / `Georgia, 'Times New Roman', serif` | System font | All system weights | 400 (regular), 600 (semibold), 700 (bold), 900 (black) |

**IMPORTANT:** The Google Fonts import (`wght@400;700`) does NOT include weight 900 (Black). However, `font-black` (weight 900) is applied to the main title and several card labels. The browser faux-bolds the 700 weight. The Figma design system should document this -- either match the faux-bold behavior or recommend updating the import to include weight 900.

### Global CSS (src/index.css)

```css
body {
  font-family: Georgia, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Tailwind Config (tailwind.config.js)

```js
fontFamily: {
  cinzel: ['Cinzel Decorative', 'serif'],
  georgia: ['Georgia', 'serif'],
}
```

### Tailwind Size-to-Pixel Reference

| Tailwind Class | Font Size | Default Line Height |
|---------------|-----------|-------------------|
| `text-[10px]` | 10px | (none set) |
| `text-[11px]` | 11px | (none set) |
| `text-xs` | 12px | 1.33 (16px) |
| `text-sm` | 14px | 1.43 (20px) |
| `text-base` | 16px | 1.5 (24px) |
| `text-lg` | 18px | 1.56 (28px) |
| `text-xl` | 20px | 1.4 (28px) |
| `text-[22px]` | 22px | (none set) |
| `text-[1.5rem]` | 24px | (none set) |
| `text-2xl` | 24px | 1.33 (32px) |
| `text-[26px]` | 26px | (none set) |
| `text-3xl` | 30px | 1.2 (36px) |
| `text-4xl` | 36px | 1.11 (40px) |
| `text-5xl` | 48px | 1.0 |
| `text-6xl` | 60px | 1.0 |
| `text-7xl` | 72px | 1.0 |
| `text-[64px]` | 64px | (none set) |
| `text-[84px]` | 84px | (none set) |
| `text-[106px]` | 106px | (none set) |

### Tailwind Leading Reference

| Tailwind Class | Line Height |
|---------------|-------------|
| `leading-none` | 1.0 |
| `leading-tight` | 1.25 |
| `leading-snug` | 1.375 |
| `leading-normal` | 1.5 |
| `leading-relaxed` | 1.625 |
| `leading-loose` | 2.0 |

### Tailwind Tracking Reference

| Tailwind Class | Letter Spacing |
|---------------|---------------|
| `tracking-tight` | -0.025em |
| `tracking-normal` | 0em |
| `tracking-wider` | 0.05em |
| `tracking-widest` | 0.1em |

### Tailwind Font Weight Reference

| Tailwind Class | Weight |
|---------------|--------|
| `font-normal` | 400 |
| `font-semibold` | 600 |
| `font-bold` | 700 |
| `font-black` | 900 |

---

### Complete Text Style Table

Each row is a distinct text style found in the codebase. "Responsive" column shows breakpoint changes.

#### Cinzel Decorative Styles

| # | Element | Component | Font | Size (base) | Size (md) | Size (lg) | Weight | Line Height | Letter Spacing | Text Transform | Color | Text Shadow |
|---|---------|-----------|------|-------------|-----------|-----------|--------|-------------|---------------|----------------|-------|-------------|
| C1 | **Main Title "Maybe Cat"** | Home.tsx (h1) | Cinzel Decorative | 64px | 84px | 106px | 900 (black) | tight (1.25) | tight (-0.025em) | none | `#78350F` (amber-900) | Logo shadow (see below) |
| C2 | **"CHOOSE CAT..." instruction** | Home.tsx (p) | Cinzel Decorative | 16px (base) | 24px (1.5rem) | -- | 700 (bold) | default | normal | none | `#FEF3C7` (amber-100) | Outline shadow |
| C3 | **"Your Cat" upload label** | Home.tsx (p) | Cinzel Decorative | 20px (xl) | 24px (2xl) | 30px (3xl) | 900 (black) | default | normal | none | `#78350F` (amber-900) | Subtle warm shadow |
| C4 | **Shelter cat name (card)** | Home.tsx (p) | Cinzel Decorative | 16px (base) | 18px (lg) | 20px (xl) | 900 (black) | default | normal | none | card accent color (varies) | none |
| C5 | **"Summoning cats..." loading** | Home.tsx (p) | Cinzel Decorative | 20px (xl) | -- | -- | 400 (regular) | default | normal | none | amber-100 | none |
| C6 | **"Adopt Me!" badge** | Home.tsx (span) | Cinzel Decorative | 11px | 12px (xs) | -- | 700 (bold) | none (1.0) | normal | none | `#FEF3C7` (amber-100) | `0 1px 2px rgba(0,0,0,0.4)` |
| C7 | **"Adopt [Name]" banner CTA** | Home.tsx (p) | Cinzel Decorative | 14px (sm) | -- | -- | 700 (bold) | tight (1.25) | normal | none | amber-100 | none |
| C8 | **OracleHeader title** (component) | OracleHeader.tsx (h1) | Cinzel Decorative | 48px (5xl) | 60px (6xl) | 72px (7xl) | 900 (black) | default | tight (-0.025em) | none | `#78350F` (amber-900) | Simplified logo shadow |
| C9 | **CatCard upload "Your Cat"** (component) | CatCard.tsx (p) | Cinzel Decorative | 24px (2xl) | 30px (3xl) | 36px (4xl) | 900 (black) | default | normal | none | card border color | Subtle warm shadow |
| C10 | **CatCard shelter name** (component) | CatCard.tsx (p) | Cinzel Decorative | 18px (lg) | 20px (xl) | -- | 900 (black) | default | normal | none | card accent color | none |
| C11 | **MagicButton text** (component) | MagicButton.tsx (span) | Cinzel Decorative | 18px (lg) | 20px (xl) | -- | 700 (bold) | default | wider (0.05em) | none | amber-50 | `1px 2px 4px rgba(0,0,0,0.5)` |
| C12 | **CelestialButton text** (component) | CelestialButton.tsx (span) | Cinzel Decorative | 18px (lg) | -- | -- | 700 (bold) | default | widest (0.1em) | uppercase | amber-100 | `0 2px 4px rgba(0,0,0,0.8)` |

#### Georgia Styles

| # | Element | Component | Font | Size (base) | Size (md) | Size (lg) | Weight | Line Height | Letter Spacing | Italic | Color | Text Shadow |
|---|---------|-----------|------|-------------|-----------|-----------|--------|-------------|---------------|--------|-------|-------------|
| G1 | **Oracle response text** | Home.tsx (p) | Georgia | 24px (2xl) | 30px (3xl) | 36px (4xl) | 700 (bold) | relaxed (1.625) | normal | no | `#451A03` (amber-950) | none |
| G2 | **"[Cat] contemplates..." thinking** | Home.tsx (p) | Georgia | 16px (base) | -- | -- | 400 (regular) | default | normal | yes | amber-800 | none |
| G3 | **Cat name badge (below photo)** | Home.tsx (p) | Georgia | 16px (base) | 18px (lg) | -- | 700 (bold) | default | normal | no | amber-100 | none |
| G4 | **Question input text** | Home.tsx (input) | Georgia | 18px (lg) | 20px (xl) | -- | 400 (regular) | default | normal | no | amber-900 | none |
| G5 | **Question input placeholder** | Home.tsx (input) | Georgia | 18px (lg) | 20px (xl) | -- | 400 (regular) | default | normal | no | amber-600/60 | none |
| G6 | **Submit button "What Does the Cat Say?"** | Home.tsx (button) | Georgia | 18px (lg) | 20px (xl) | -- | 700 (bold) | default | normal | no | white | none |
| G7 | **"tap to upload" subtitle** | Home.tsx (p) | Georgia | 14px (sm) | 16px (base) | -- | 600 (semibold) | default | normal | no | amber-800 | none |
| G8 | **Shelter cat location** | Home.tsx (p) | Georgia | 12px (xs) | 14px (sm) | -- | 400 (regular) | default | normal | no | card accent/90 opacity | none |
| G9 | **OracleTagline lines** | OracleTagline.tsx (p) | Georgia | 18px (lg) | 24px (2xl) | 30px (3xl) | 600 (semibold) | default | normal | yes | `#451A03` (amber-950) | `1px 1px 0 rgba(251,191,36,0.6)` |
| G10 | **OracleTagline final line** | OracleTagline.tsx (p) | Georgia | 20px (xl) | 30px (3xl) | 36px (4xl) | 900 (black) | default | normal | no | `#451A03` (amber-950) | `1px 1px 0 rgba(251,191,36,0.6)` |
| G11 | **OracleHeader tagline** | OracleHeader.tsx (p) | Georgia | 18px (lg) | 24px (2xl) | 30px (3xl) | 600 (semibold) | default | normal | yes | `#451A03` (amber-950) | `1px 1px 0 rgba(251,191,36,0.6)` |
| G12 | **NameInputModal title "Name Your Oracle"** | NameInputModal.tsx (h3) | Georgia | 24px (2xl) | -- | -- | 700 (bold) | default | normal | no | amber-900 | none |
| G13 | **NameInputModal input text** | NameInputModal.tsx (input) | Georgia | 18px (lg) | -- | -- | 400 (regular) | default | normal | no | amber-900 | none |
| G14 | **NameInputModal buttons "Skip"/"Confirm"** | NameInputModal.tsx (button) | Georgia | 16px (base implied) | -- | -- | 700 (bold) | default | normal | no | amber-100 / white | none |
| G15 | **ExampleQuestions label "Try asking:"** | ExampleQuestions.tsx (p) | Georgia | 14px (sm) | -- | -- | 400 (regular) | default | normal | no | amber-800/70 | none |
| G16 | **ExampleQuestions pill text** | ExampleQuestions.tsx (button) | Georgia | 14px (sm) | -- | -- | 400 (regular) | default | normal | no | amber-800 | none |
| G17 | **ResponseActions "Ask Again"/"Share"** | ResponseActions.tsx (button) | Georgia | 16px (base implied) | -- | -- | 700 (bold) | default | normal | no | amber-100 / white | none |
| G18 | **ResponseActions hashtags** | ResponseActions.tsx (button) | Georgia | 14px (sm) | -- | -- | 400 (regular) | default | normal | no | amber-700/60 | none |
| G19 | **OracleResponseCard cat name** | OracleResponseCard.tsx (p) | Georgia | 14px (sm) | -- | -- | 700 (bold) | default | normal | no | amber-100 | none |
| G20 | **OracleResponseCard response** | OracleResponseCard.tsx (p) | Georgia | 20px (xl) | 24px (2xl) | -- | 700 (bold) | relaxed (1.625) | normal | no | amber-950 | none |
| G21 | **QuestionInput component input** | QuestionInput.tsx (input) | Georgia | 18px (lg) | -- | -- | 400 (regular) | default | normal | no | amber-900 | none |
| G22 | **QuestionInput component button** | QuestionInput.tsx (button) | Georgia | 18px (lg) | -- | -- | 700 (bold) | default | normal | no | white | none |
| G23 | **Banner "Click to visit"** | Home.tsx (p) | Georgia | 10px | -- | -- | 400 (regular) | default | wider (0.05em) | no | amber-500/60 | none |
| G24 | **Banner cat location** | Home.tsx (p) | Georgia | 12px (xs) | -- | -- | 400 (regular) | default | normal | no | amber-400/80 | none |

#### Decorative / SEO Styles

| # | Element | Component | Font | Size (base) | Size (md) | Weight | Style | Color |
|---|---------|-----------|------|-------------|-----------|--------|-------|-------|
| D1 | **Drifting keyword whispers** | Home.tsx (motion.span) | Georgia | 10px | 12px (xs) | 400 (regular) | italic | `rgba(120,53,15,0.12)` |
| D2 | **Crescent symbols ☽ ☾** | Home.tsx (span) | (inherited) | 22px | 26px | 400 | normal | `#92400E` (amber-800) |
| D3 | **Star symbol ✧** | Home.tsx (span) | (inherited) | 18px | -- | 400 | normal | `#92400E` (amber-800) |
| D4 | **Corner decoration ❧** | Home.tsx (div) | (inherited) | 16px (base) | -- | 400 | normal | amber-800 |
| D5 | **Corner star ✦** | Home.tsx (div) | (inherited) | 14px (sm) | -- | 400 | normal | card accent/70 opacity |

#### ErrorBoundary Styles (edge case, inline styles only)

| # | Element | Font | Size | Weight | Color |
|---|---------|------|------|--------|-------|
| E1 | **Error heading** | Georgia (inherited) | 1.5rem (24px) | 400 | `#e8d5b7` |
| E2 | **Error body** | Georgia (inherited) | (default) | 400 | `#e8d5b7` at 80% opacity |
| E3 | **Error button** | inherit | 1rem (16px) | 400 | `#e8d5b7` |

---

## Text Shadow Techniques

### Shadow 1: Logo Title Treatment (Main "Maybe Cat" h1)

**CSS:**
```css
textShadow:
  2px 2px 0 #FBBF24,                   /* gold offset -- carnival two-tone */
  4px 4px 0 rgba(0,0,0,0.2),            /* depth layer */
  0 0 30px rgba(251,191,36,0.4),        /* warm glow */
  -1px -1px 0 rgba(0,0,0,0.15),         /* edge definition (4 corners) */
   1px -1px 0 rgba(0,0,0,0.15),
  -1px  1px 0 rgba(0,0,0,0.15),
   1px  1px 0 rgba(0,0,0,0.15)
```

**Components:**
1. **Gold offset shadow** -- `2px 2px 0 #FBBF24` -- Creates the carnival/woodblock two-tone effect. Gold (#FBBF24, amber-400) offset 2px right and 2px down with no blur.
2. **Depth layer** -- `4px 4px 0 rgba(0,0,0,0.2)` -- Darker shadow behind the gold for 3D depth.
3. **Warm glow** -- `0 0 30px rgba(251,191,36,0.4)` -- Large blur radius creates ambient gold halo.
4. **Edge definition** -- Four 1px shadows in all corners at `rgba(0,0,0,0.15)` -- Creates a subtle dark outline around letter edges for crispness on the gradient background.

**Used by:** Home.tsx main `<h1>` title only (the full treatment)

### Shadow 2: Simplified Logo Shadow (OracleHeader component)

**CSS:**
```css
textShadow: 2px 2px 0 #FBBF24, 4px 4px 0 rgba(0,0,0,0.2), 0 0 30px rgba(251,191,36,0.4)
```

Same as Shadow 1 but WITHOUT the edge definition. Used in the extracted OracleHeader component.

### Shadow 3: Dark Outline for Gradient Readability

**CSS:**
```css
textShadow:
  -1px -1px 0 #78350F,
   1px -1px 0 #78350F,
  -1px  1px 0 #78350F,
   1px  1px 0 #78350F,
   0 2px 4px rgba(0,0,0,0.3)
```

**Purpose:** Creates a solid dark brown (#78350F, amber-900) 1px outline around text, plus a subtle drop shadow. Ensures light-colored text (amber-100) remains readable on the pink-to-gold gradient background.

**Used by:** "CHOOSE CAT... ASK QUESTION... CAT MAY ANSWER" instruction text (C2)

### Shadow 4: Gold Highlight Shadow

**CSS:**
```css
textShadow: 1px 1px 0 rgba(251,191,36,0.6)
```

**Purpose:** Subtle warm gold glow offset 1px. Adds depth to dark text on lighter backgrounds.

**Used by:** OracleTagline lines (G9, G10), OracleHeader tagline (G11)

### Shadow 5: Subtle Warm Shadow

**CSS:**
```css
textShadow: 1px 1px 0 rgba(254,243,199,0.5)
```

**Purpose:** Very subtle cream/amber-100 highlight. Adds slight lift to Cinzel Decorative text on the upload card.

**Used by:** "Your Cat" label on upload card (C3, C9)

### Shadow 6: Dark Drop Shadow (Buttons)

**CSS:**
```css
textShadow: 1px 2px 4px rgba(0,0,0,0.5)
```
or
```css
textShadow: 0 2px 4px rgba(0,0,0,0.8)
```

**Purpose:** Standard dark drop shadow for text on dark/gradient button backgrounds.

**Used by:** MagicButton (C11), CelestialButton (C12)

### Shadow 7: Adopt Badge Shadow

**CSS:**
```css
textShadow: 0 1px 2px rgba(0,0,0,0.4)
```

**Purpose:** Minimal shadow for very small text on gradient badge background.

**Used by:** "Adopt Me!" badge text (C6)

---

## Logo Text Treatment Full Specification

**Element:** `<h1>` in Home.tsx (line 316-334)

| Property | Value |
|----------|-------|
| Font Family | `'Cinzel Decorative', Georgia, serif` |
| Font Size (base) | 64px |
| Font Size (md: 768px+) | 84px |
| Font Size (lg: 1024px+) | 106px |
| Font Weight | 900 (font-black) -- NOTE: only 700 actually loaded |
| Line Height | tight (1.25) |
| Letter Spacing | tight (-0.025em) |
| Text Color | `#78350F` (amber-900) |
| Text Shadow | Shadow 1 (see above) -- 7 shadow layers |
| Cursor | pointer |
| Hover | opacity 80% transition |
| Purpose | Clickable title; clicking clears cat and returns to selection |

**Figma Implementation Notes:**
- The gold offset shadow (`2px 2px 0 #FBBF24`) is the signature visual effect
- In Figma, this requires a Drop Shadow effect (not Inner Shadow)
- The 4-corner edge definition can be approximated with a single Stroke effect in Figma, or replicated as 4 individual drop shadows
- The warm glow (`0 0 30px`) can be a separate Drop Shadow with high blur

---

## Tokens Studio JSON Format for Typography

### Token Type Reference

| Property | Independent Type | Composite Property | Value Format |
|----------|-----------------|-------------------|--------------|
| Font Family | `"type": "fontFamilies"` | `"fontFamily"` | String matching Figma exactly |
| Font Size | `"type": "fontSizes"` | `"fontSize"` | `"16px"` or `"1rem"` |
| Font Weight | `"type": "fontWeights"` | `"fontWeight"` | Number (400, 700, 900) or String ("Bold") |
| Line Height | `"type": "lineHeights"` | `"lineHeight"` | `"150%"` (percent) or `"24px"` (fixed) |
| Letter Spacing | `"type": "letterSpacing"` | `"letterSpacing"` | `"-0.025em"` or `"4%"` |
| Text Case | N/A (in composite) | `"textCase"` | `"none"`, `"uppercase"`, `"lowercase"`, `"capitalize"` |
| Text Decoration | N/A (in composite) | `"textDecoration"` | `"none"`, `"underline"`, `"line-through"` |

**Key rules:**
- Independent tokens use PLURAL type names (`fontFamilies`, `fontSizes`, `fontWeights`, `lineHeights`)
- Composite typography tokens use SINGULAR property names (`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`)
- Font Family value MUST exactly match Figma's spelling/capitalization
- Line Height as percentage = relative to font size (recommended for responsive)
- No spaces between numbers and units (`"16px"` not `"16 px"`)
- Font Weight can be number (converted automatically) or string (must match Figma)

### Complete Token JSON for MaybeCat Typography

```json
{
  "fontFamilies": {
    "cinzel": {
      "value": "Cinzel Decorative",
      "type": "fontFamilies",
      "description": "Display/title typeface. Loaded from Google Fonts."
    },
    "georgia": {
      "value": "Georgia",
      "type": "fontFamilies",
      "description": "Body/UI typeface. System font, no loading required."
    }
  },
  "fontSizes": {
    "10": { "value": "10px", "type": "fontSizes" },
    "11": { "value": "11px", "type": "fontSizes" },
    "12": { "value": "12px", "type": "fontSizes" },
    "14": { "value": "14px", "type": "fontSizes" },
    "16": { "value": "16px", "type": "fontSizes" },
    "18": { "value": "18px", "type": "fontSizes" },
    "20": { "value": "20px", "type": "fontSizes" },
    "22": { "value": "22px", "type": "fontSizes" },
    "24": { "value": "24px", "type": "fontSizes" },
    "26": { "value": "26px", "type": "fontSizes" },
    "30": { "value": "30px", "type": "fontSizes" },
    "36": { "value": "36px", "type": "fontSizes" },
    "48": { "value": "48px", "type": "fontSizes" },
    "60": { "value": "60px", "type": "fontSizes" },
    "64": { "value": "64px", "type": "fontSizes" },
    "72": { "value": "72px", "type": "fontSizes" },
    "84": { "value": "84px", "type": "fontSizes" },
    "106": { "value": "106px", "type": "fontSizes" }
  },
  "fontWeights": {
    "regular": { "value": 400, "type": "fontWeights" },
    "semibold": { "value": 600, "type": "fontWeights" },
    "bold": { "value": 700, "type": "fontWeights" },
    "black": { "value": 900, "type": "fontWeights" }
  },
  "lineHeights": {
    "none": { "value": "100%", "type": "lineHeights", "description": "Tailwind leading-none. Used for badge text." },
    "tight": { "value": "125%", "type": "lineHeights", "description": "Tailwind leading-tight. Used for title, banner CTA." },
    "default": { "value": "150%", "type": "lineHeights", "description": "Tailwind default / leading-normal. Most text." },
    "relaxed": { "value": "163%", "type": "lineHeights", "description": "Tailwind leading-relaxed. Oracle response text." }
  },
  "letterSpacing": {
    "tight": { "value": "-0.025em", "type": "letterSpacing", "description": "Tailwind tracking-tight. Title text." },
    "normal": { "value": "0", "type": "letterSpacing", "description": "Default. Most text." },
    "wider": { "value": "0.05em", "type": "letterSpacing", "description": "Tailwind tracking-wider. Banner micro text, MagicButton." },
    "widest": { "value": "0.1em", "type": "letterSpacing", "description": "Tailwind tracking-widest. CelestialButton uppercase." }
  }
}
```

---

## Responsive Breakpoints

MaybeCat uses Tailwind CSS 4 with standard breakpoints:

| Breakpoint | Prefix | Min Width | Usage |
|-----------|--------|-----------|-------|
| Default (mobile-first) | none | 0px | Base styles |
| Medium | `md:` | 768px | Tablet/small desktop |
| Large | `lg:` | 1024px | Desktop |

**sm: (640px) is NOT used** for text sizing in this codebase -- the app jumps directly from base to md.

### Text Elements That Change At Breakpoints

| Element | Base | md (768px+) | lg (1024px+) |
|---------|------|-------------|--------------|
| Main title "Maybe Cat" | 64px | 84px | 106px |
| "CHOOSE CAT..." instruction | 16px | 24px | -- |
| "Your Cat" upload label | 20px | 24px | 30px |
| Shelter cat name (card) | 16px | 18px | 20px |
| Shelter cat location | 12px | 14px | -- |
| Adopt Me badge | 11px | 12px | -- |
| Cat name badge (photo) | 16px | 18px | -- |
| Oracle response | 24px | 30px | 36px |
| Question input | 18px | 20px | -- |
| Submit button | 18px | 20px | -- |
| Crescent symbols | 22px | 26px | -- |
| OracleHeader title | 48px | 60px | 72px |
| OracleHeader tagline | 18px | 24px | 30px |
| OracleTagline lines | 18px | 24px | 30px |
| OracleTagline final | 20px | 30px | 36px |
| OracleResponseCard response | 20px | 24px | -- |
| MagicButton text | 18px | 20px | -- |
| CatCard upload label | 24px | 30px | 36px |
| CatCard upload subtitle | 16px | 18px | -- |
| CatCard shelter name | 18px | 20px | -- |
| OracleHeader crescent | 20px | 24px | -- |

---

## Common Pitfalls

### Pitfall 1: Font Weight Mismatch (Cinzel Decorative)

**What goes wrong:** The design system specifies weight 900 (Black) for Cinzel Decorative, but the live site only loads weights 400 and 700 from Google Fonts. The browser faux-bolds 700 to approximate 900.

**Why it happens:** The Google Fonts import URL (`wght@400;700`) was set up before `font-black` was applied to elements.

**How to avoid:** Either:
- Update the Google Fonts import to include 900: `wght@400;700;900`
- Document in the design system that Cinzel Decorative "black" is actually browser-faux-bolded 700

**Warning signs:** In Figma, text will look different from the live site if using true 900 weight vs faux-bolded 700.

### Pitfall 2: Text Shadows Are NOT Part of Typography Tokens

**What goes wrong:** Attempting to include text-shadow values in the Tokens Studio typography composite token. Typography tokens only cover fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textCase, and textDecoration.

**Why it happens:** Text shadows are visually coupled with text styles but are technically separate CSS properties.

**How to avoid:** Create text shadows as separate Figma Effect Styles. Apply them independently from text styles. Document which text styles pair with which shadow effects.

### Pitfall 3: Tokens Studio Plural vs Singular Type Names

**What goes wrong:** Using `"type": "fontFamily"` (singular) for an independent token, which should be `"type": "fontFamilies"` (plural).

**Why it happens:** Confusing the independent token type name with the composite property name.

**How to avoid:** Independent tokens = PLURAL (`fontFamilies`, `fontSizes`, `fontWeights`, `lineHeights`). Composite typography properties = SINGULAR (`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`).

### Pitfall 4: Georgia Italic as a Separate Weight

**What goes wrong:** In Figma, italic is a separate font style, not a CSS property. If you create a typography token with `"fontWeight": "Regular"` and expect to apply italic separately, it won't work -- Figma treats "Regular" and "Italic" as different font weight entries.

**Why it happens:** CSS separates `font-style: italic` from `font-weight`, but Figma combines them.

**How to avoid:** For italic Georgia styles, use `"fontWeight": "Italic"` or `"fontWeight": "Bold Italic"` in the token. Create separate tokens for italic variants rather than trying to toggle italic as an overlay.

### Pitfall 5: Line Height Percentage vs Pixels

**What goes wrong:** Writing `"lineHeight": "24"` (unitless) in a Tokens Studio token -- Figma interprets this as 24 PIXELS, not a relative value.

**Why it happens:** CSS uses unitless values as multipliers (e.g., `line-height: 1.5` = 1.5x font size), but Tokens Studio treats bare numbers as pixels.

**How to avoid:** Always use percentage for relative line heights: `"125%"` = 1.25 multiplier. Use `"24px"` only when you want a fixed pixel value.

---

## Concerns and Edge Cases

### Duplicate Styles Across Components

The codebase has text styles defined in BOTH `Home.tsx` (the live page) and extracted component files (`OracleHeader.tsx`, `CatCard.tsx`, `OracleResponseCard.tsx`, etc.). These are slightly different versions:

| Style | Home.tsx Version | Component Version |
|-------|-----------------|-------------------|
| Title | 64/84/106px, 7 shadow layers | 48/60/72px (5xl/6xl/7xl), 3 shadow layers |
| Response | 24/30/36px (2xl/3xl/4xl) | 20/24px (xl/2xl) |
| Cat name badge | 16/18px (base/lg) | 14px (sm) |

**Recommendation:** The design system should document the Home.tsx versions as canonical since that is the live page. The component files appear to be extracted/refactored versions that may not be actively used (Home.tsx still has all styles inline).

### Text Color Is Separate From Typography Tokens

Text colors should reference the semantic color variables created in Phase 1 (COLOR-01 through COLOR-05). Typography tokens define structure (font, size, weight, spacing); color is applied separately in Figma via Fill using color variables.

### No Custom @font-face Declarations

All fonts are loaded externally (Google Fonts CDN for Cinzel Decorative, system for Georgia). No local font files exist in the project.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual Figma text styles | Tokens Studio JSON import | 2023+ | Structured, versionable, code-synced |
| Single text style per element | Responsive variant tokens (base/md/lg) | Standard practice | Matches real breakpoint behavior |
| Typography + color in same token | Typography structure separate from color fill | Tokens Studio convention | Cleaner separation of concerns |

---

## Open Questions

1. **Should Cinzel Decorative weight 900 be loaded?**
   - What we know: The code applies `font-black` (900) but only loads 400 and 700.
   - What's unclear: Whether the user prefers the faux-bolded look or the true 900 weight.
   - Recommendation: Flag this as a decision for the user during planning. True 900 is available on Google Fonts and would be a one-line change to the import URL.

2. **Which component versions are canonical?**
   - What we know: Home.tsx contains inline styles AND extracted components exist with slightly different values.
   - What's unclear: Whether the components are actively used or are refactored-but-not-integrated.
   - Recommendation: Use Home.tsx values as the source of truth for the design system since it is the live page.

3. **Text shadow as Figma Effect Styles or manual application?**
   - What we know: 7 distinct text shadow techniques exist.
   - What's unclear: Whether Tokens Studio can create Figma Effect Styles, or if these must be created manually.
   - Recommendation: Create text shadow effects manually as Figma Effect Styles, paired with documented guidance on which text styles use which shadows.

---

## Sources

### Primary (HIGH confidence)
- MaybeCat codebase audit -- Complete extraction from `src/pages/Home.tsx`, `src/components/**/*.tsx`, `src/index.css`, `tailwind.config.js`, `index.html`
- [Tokens Studio - Typography Composite](https://docs.tokens.studio/manage-tokens/token-types/typography) -- Composite token structure, 9 properties
- [Tokens Studio - Font Family](https://docs.tokens.studio/manage-tokens/token-types/typography/font-family) -- JSON format, exact naming requirement
- [Tokens Studio - Font Size](https://docs.tokens.studio/manage-tokens/token-types/typography/font-size) -- Units (px, rem), JSON format
- [Tokens Studio - Font Weight](https://docs.tokens.studio/manage-tokens/token-types/typography/font-weight) -- Numeric-to-string conversion, JSON format
- [Tokens Studio - Line Height](https://docs.tokens.studio/manage-tokens/token-types/typography/line-height) -- Percentage vs px, Figma interpretation
- [Tokens Studio - Letter Spacing](https://docs.tokens.studio/manage-tokens/token-types/typography/letter-spacing) -- em/percent/px, JSON format
- [Tailwind CSS - Font Size](https://tailwindcss.com/docs/font-size) -- Size-to-pixel mapping with default line heights
- [Tailwind CSS v3 - Line Height](https://v3.tailwindcss.com/docs/line-height) -- Named leading utilities (tight, relaxed, etc.)

### Secondary (MEDIUM confidence)
- [Google Fonts - Cinzel Decorative](https://fonts.google.com/specimen/Cinzel+Decorative) -- Available weights: 400, 700, 900
- [Tailwind CSS - Letter Spacing](https://tailwindcss.com/docs/letter-spacing) -- tracking-tight through tracking-widest values
- [Tailwind CSS - Font Weight](https://tailwindcss.com/docs/font-weight) -- font-bold/black/semibold numeric values

### Tertiary (LOW confidence)
- None -- all findings verified against primary sources

---

## Metadata

**Confidence breakdown:**
- Text style audit: HIGH -- Extracted directly from codebase, every text element captured with grep across all files
- Tokens Studio JSON format: HIGH -- Verified against official Tokens Studio documentation for each property type
- Text shadow techniques: HIGH -- Extracted verbatim from codebase, all 7 variations documented
- Responsive breakpoints: HIGH -- Verified against Tailwind CSS documentation and codebase usage
- Font weight mismatch finding: HIGH -- Confirmed by comparing Google Fonts import URL with CSS usage
- Figma implementation notes: MEDIUM -- Based on Figma capabilities knowledge, not tested in the specific file

**Research date:** 2026-02-07
**Valid until:** 2026-03-07 (Typography fundamentals are stable)
