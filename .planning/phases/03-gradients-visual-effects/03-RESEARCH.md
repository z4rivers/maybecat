# Phase 3: Gradients & Visual Effects - Research

**Researched:** 2026-02-08
**Domain:** CSS gradients, box-shadows, and ambient effects -> Figma Fill Styles + Effect Styles via Tokens Studio
**Confidence:** HIGH

## Summary

This phase extracts every gradient and shadow/effect definition from the live MaybeCat codebase and documents them for translation into Figma Fill Styles (gradients) and Effect Styles (shadows/glows). The codebase contains **12 distinct gradient definitions** across 4 categories (page background, card backgrounds, button fills, decorative/SVG), and **15 distinct box-shadow compositions** used across cards, buttons, modals, and photo frames. There is also 1 radial gradient used as an ambient glow, several Tailwind utility shadows (`shadow-lg`, `drop-shadow-lg`, `drop-shadow-xl`), and a floral SVG background pattern overlay.

A critical architectural finding: **Figma variables cannot store gradients** -- only solid colors. Gradients must be created as Figma Fill Styles (the older "color styles" system), but each gradient stop can reference a Figma color variable from the Phase 1 primitives collection. Tokens Studio supports gradient definitions using CSS-like syntax within color tokens (`$type: "color"` with a `linear-gradient(...)` value), and box-shadow definitions using the composite `boxShadow` type. Both can be exported to Figma as Fill Styles and Effect Styles respectively.

Text shadows were already documented exhaustively in Phase 2 research (7 techniques). This phase focuses on EFFECT-02 only to the extent of ensuring those text shadow techniques are captured as Figma Effect Styles -- the CSS values are already extracted and should not be re-researched.

**Primary recommendation:** Create two new Tokens Studio JSON files -- `gradients.json` for all gradient fill styles and `effects.json` for all box-shadow effect styles -- following the same W3C DTCG format (`$type`, `$value`, `$description`) used by the existing token files. Gradient tokens use `$type: "color"` with CSS-like `linear-gradient(...)` values. Shadow tokens use `$type: "boxShadow"` with composite objects. The user imports these via Tokens Studio and exports to Figma as Fill Styles and Effect Styles.

## Standard Stack

### Core
| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Tokens Studio for Figma | Current (2025/2026) | Import gradient + shadow tokens as JSON, export as Figma Fill Styles + Effect Styles | Already used for Phase 1 (colors) and Phase 2 (typography); maintains single workflow |
| Figma Fill Styles | Native | Store gradient definitions as reusable styles | Variables cannot store gradients; Fill Styles are the only option |
| Figma Effect Styles | Native | Store box-shadow/drop-shadow definitions as reusable styles | The standard way to store reusable shadow presets in Figma |

### Supporting
| Tool | Purpose | When to Use |
|------|---------|-------------|
| Figma Color Variables (from Phase 1) | Reference primitive colors as gradient stops | When binding gradient stop colors to existing variables |
| Phase 2 Research (text shadows) | Reference for EFFECT-02 text shadow presets | When creating text shadow effect styles -- values already extracted |

### Not Needed
| Tool | Why Not |
|------|---------|
| Manual Figma style creation | Tokens Studio JSON import is faster and reproducible |
| CSS gradient generators | All values already extracted from the live codebase |
| Gradient design tools | We are extracting, not designing new gradients |

## Architecture Patterns

### Recommended Token File Structure

```
scripts/figma-tokens/
  manifest.json           # (existing -- add new collections)
  primitives.json         # (existing -- Phase 1 colors)
  semantic.json           # (existing)
  component.json          # (existing)
  typography.json         # (existing -- Phase 2)
  gradients.json          # NEW -- gradient fill tokens
  effects.json            # NEW -- box-shadow + effect tokens
```

### Pattern 1: Gradient Tokens as Color Type with CSS Syntax

**What:** Tokens Studio stores gradients as color tokens with `linear-gradient(...)` CSS syntax as the value. This is NOT a separate gradient token type -- it is a color token whose value happens to be a gradient string.

**When to use:** For all linear gradients that need to become Figma Fill Styles.

**Limitations:**
- Only linear gradients are supported for Figma export
- Radial gradients are NOT supported by the Tokens Studio -> Figma export pipeline
- The angle in CSS and the angle in Figma are different coordinate systems (CSS: 0deg = bottom-to-top; Figma: 0deg = left-to-right). Tokens Studio handles this conversion.
- Token references in gradient stops ARE supported: `linear-gradient(135deg, {pink.500} 0%, {amber.400} 100%)`

**Example (W3C DTCG format matching existing project):**
```json
{
  "page-background": {
    "$type": "color",
    "$value": "linear-gradient(135deg, {pink.500} 0%, {pink.400} 20%, {amber.400} 50%, {amber.500} 80%, {amber.600} 100%)",
    "$description": "Main page background. Hot pink to gold, 135deg diagonal."
  }
}
```

**Source:** [Tokens Studio - Gradient Colors](https://docs.tokens.studio/manage-tokens/token-types/color/gradient)

### Pattern 2: Box Shadow Tokens as Composite Type

**What:** Tokens Studio stores box shadows as composite tokens with `$type: "boxShadow"`. The value is either a single shadow object or an array of shadow objects for multi-layer shadows.

**When to use:** For all `boxShadow` CSS values that need to become Figma Effect Styles.

**Example (single shadow):**
```json
{
  "button-shadow": {
    "$type": "boxShadow",
    "$value": {
      "x": "0",
      "y": "4",
      "blur": "20",
      "spread": "0",
      "color": "rgba(124,45,18,0.4)",
      "type": "dropShadow"
    },
    "$description": "Submit/CTA button drop shadow."
  }
}
```

**Example (multiple shadows):**
```json
{
  "card-oracle": {
    "$type": "boxShadow",
    "$value": [
      {
        "x": "0",
        "y": "20",
        "blur": "60",
        "spread": "0",
        "color": "rgba(120,53,15,0.3)",
        "type": "dropShadow"
      },
      {
        "x": "0",
        "y": "0",
        "blur": "40",
        "spread": "0",
        "color": "rgba(255,255,255,0.2)",
        "type": "innerShadow"
      }
    ],
    "$description": "Oracle reading card shadow. Drop shadow + inner glow."
  }
}
```

**Key rules:**
- Values are unitless numbers (pixels assumed) OR strings with `px` suffix
- `type` is either `"dropShadow"` or `"innerShadow"`
- CSS `inset` maps to Tokens Studio `"type": "innerShadow"`
- Color can be hex, rgba, or a token reference
- Multiple shadows = array of objects (order matters: first = outermost in Figma)
- CSS `box-shadow: A, B, C` maps to `[$value: [A, B, C]]` in the same order

**Source:** [Tokens Studio - Box Shadow](https://docs.tokens.studio/manage-tokens/token-types/box-shadow)

### Pattern 3: Figma Fill Styles with Variable-Bound Gradient Stops

**What:** After importing gradient tokens as Figma Fill Styles, each gradient stop color can be manually bound to a Figma variable from the Phase 1 Primitives collection. This creates a live link between the gradient and the color system.

**When to use:** After Tokens Studio creates the Fill Style, optionally bind stops to variables for future flexibility.

**How it works in Figma:**
1. Click the gradient fill color stop
2. Open the color picker
3. Click the Libraries/Variables panel
4. Select the matching primitive variable

**Source:** [Figma Learn - Use gradients as a fill or stroke](https://help.figma.com/hc/en-us/articles/34208860210199-Use-gradients-as-a-fill-or-stroke), [Figma Forum - Gradients with variables](https://www.figma.com/community/file/1295349493892095561/gradients-with-variables)

### Anti-Patterns to Avoid
- **Storing gradients as variables:** Figma variables only support solid colors. Gradients MUST be Fill Styles.
- **Recreating gradient colors instead of referencing primitives:** The Phase 1 primitives collection already has every hex value used in gradients. Reference them with `{amber.400}` syntax in Tokens Studio.
- **Creating separate tokens for each gradient stop:** The stops are already captured in the primitives. The gradient token captures the COMPOSITION (angle, positions, stop colors together).
- **Ignoring CSS-to-Figma angle conversion:** CSS `135deg` does NOT equal Figma `135deg`. Tokens Studio handles this conversion, but if creating manually, be aware that CSS 0deg = bottom-to-top while Figma 0deg = left-to-right.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Gradient fill styles | Manual Figma gradient creation one by one | Tokens Studio JSON import + export to Fill Styles | Structured, versionable, references primitive tokens |
| Shadow effect styles | Manual Figma effect creation one by one | Tokens Studio JSON import + export to Effect Styles | Complex multi-layer shadows are error-prone to recreate manually |
| CSS-to-Figma angle math | Manual angle conversion for gradients | Tokens Studio automatic conversion | CSS and Figma use different angle coordinate systems |
| Shadow color matching | Eyedropping rgba values | Copy exact rgba values from codebase audit below | Precision matters for pixel-match fidelity |

**Key insight:** All gradient and shadow values are ALREADY defined in the codebase. This phase is pure extraction and translation -- no design decisions needed, just faithful reproduction in Figma's format.

---

## Complete Gradient Audit

Every gradient definition extracted from the codebase, organized by requirement.

### GRAD-01: Main Background Gradient

| # | Name | CSS | Stops | Used By |
|---|------|-----|-------|---------|
| G1 | **Page Background** | `linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)` | pink-500 -> pink-400 -> amber-400 -> amber-500 -> amber-600 | Home.tsx root `<div>` |

**Token reference format:**
```
linear-gradient(135deg, {pink.500} 0%, {pink.400} 20%, {amber.400} 50%, {amber.500} 80%, {amber.600} 100%)
```

**Notes:** This is the signature gradient. 5 stops, diagonal 135deg. The pink-to-gold transition defines the entire visual identity.

### GRAD-02: Card Background Gradients

| # | Name | CSS | Stops | Used By |
|---|------|-----|-------|---------|
| G2 | **Oracle Reading Card** | `linear-gradient(145deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)` | amber-100 -> amber-200 -> amber-300 | Home.tsx oracle card, NameInputModal, OracleResponseCard |
| G3 | **Upload Card (Your Cat)** | `linear-gradient(145deg, #FEF3C7 0%, #FBBF24 50%, #B45309 100%)` | amber-100 -> amber-400 -> amber-700 | Home.tsx upload card, CatCard upload variant |
| G4 | **Shelter Card: Pink** | `linear-gradient(145deg, #EC4899 0%, #BE185D 50%, #831843 100%)` | pink-500 -> pink-700 -> pink-900 | Home.tsx shelter cards, CatCard shelter default, Adopt badge |
| G5 | **Shelter Card: Green** | `linear-gradient(145deg, #10B981 0%, #047857 50%, #064E3B 100%)` | emerald-500 -> emerald-700 -> emerald-800 | Home.tsx shelter cards |
| G6 | **Shelter Card: Purple** | `linear-gradient(145deg, #8B5CF6 0%, #6D28D9 50%, #4C1D95 100%)` | violet-400 -> violet-700 -> violet-800 | Home.tsx shelter cards |
| G7 | **Shelter Card: Hot Pink** | `linear-gradient(145deg, #F472B6 0%, #DB2777 50%, #9D174D 100%)` | pink-400 -> pink-600 -> pink-800 | Home.tsx shelter cards |
| G8 | **Shelter Card: Orange** | `linear-gradient(145deg, #FB923C 0%, #EA580C 50%, #9A3412 100%)` | orange-400 -> orange-600 -> orange-800 | Home.tsx shelter cards |

**Shared pattern:** All card gradients use 145deg angle, 3 stops at 0%/50%/100%. The shelter cards go light-to-dark in their respective jewel tone.

**Token reference format for shelter cards:**
```
linear-gradient(145deg, {card-pink.gradient-start} 0%, {card-pink.gradient-mid} 50%, {card-pink.gradient-end} 100%)
```

### GRAD-03: Button Gradients

| # | Name | CSS | Stops | Used By |
|---|------|-----|-------|---------|
| G9 | **Submit/CTA Button (Dark Brown)** | `linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)` | orange-900 -> orange-800 -> orange-700 | Home.tsx submit button, NameInputModal confirm button, QuestionInput button |
| G10 | **Carousel Nav Button** | `linear-gradient(145deg, #FEF3C7 0%, #FBBF24 100%)` | amber-100 -> amber-400 | Home.tsx left/right carousel arrows |
| G11 | **CelestialButton** | `linear-gradient(180deg, #78350F 0%, #451A03 100%)` | amber-900 -> amber-950 | CelestialButton component |

### Additional Gradients (Decorative / SVG)

| # | Name | CSS/SVG | Stops | Used By |
|---|------|---------|-------|---------|
| G12 | **Radial Camera Glow** | `radial-gradient(circle, rgba(254,243,199,0.5) 0%, transparent 70%)` | amber-100/50% -> transparent | Home.tsx camera circle bg, CatCard upload circle |
| G13 | **MagicButton Gold Stroke** | SVG `linearGradient`: #FCD34D -> #F59E0B -> #B45309 | amber-300 -> amber-500 -> amber-700 | MagicButton.tsx SVG stroke |
| G14 | **MagicButton Red Fill** | SVG `linearGradient`: #7F1D1D -> #991B1B -> #7F1D1D | red-900 -> red-800 -> red-900 | MagicButton.tsx SVG fill |
| G15 | **OrnateFrame Background** | `radial-gradient(circle at center, #FFFBEB 0%, #FEF3C7 100%)` | amber-50 -> amber-100 | OrnateFrame.tsx |
| G16 | **OrnateFrame SVG Border** | SVG `linearGradient`: #78350F -> #B45309 -> #78350F | amber-900 -> amber-700 -> amber-900 | OrnateFrame.tsx border overlay |
| G17 | **Decorative Divider** | Tailwind `bg-gradient-to-r from-transparent via-amber-100 to-transparent` | transparent -> amber-100 -> transparent | Home.tsx header divider lines, OracleHeader |
| G18 | **Adopt Badge** | `linear-gradient(145deg, #EC4899 0%, #BE185D 50%, #831843 100%)` | Same as G4 (card-pink) | Home.tsx adopt badge |

**Notes on non-importable gradients:**
- G12, G15 are **radial gradients** -- Tokens Studio cannot export these to Figma. Must be created manually or documented for manual application.
- G13, G14, G16 are **SVG gradients** -- defined inside SVG `<defs>` elements, not CSS gradients. Must be documented but created as part of SVG extraction in Phase 4.
- G17 is a Tailwind utility gradient -- translates to a simple linear gradient in Figma.
- G18 is identical to G4 (reuse the same Fill Style).

---

## Complete Box-Shadow Audit

Every `boxShadow` and `box-shadow` value extracted from the codebase.

### EFFECT-01: Card Shadow Library

| # | Name | CSS `box-shadow` | Used By |
|---|------|-------------------|---------|
| S1 | **Upload Card Shadow** | `0 15px 50px rgba(0,0,0,0.45), inset 0 0 40px rgba(255,255,255,0.4), 0 0 20px rgba(251,191,36,0.3)` | Home.tsx upload card |
| S2 | **Upload Card Inner Frame** | `inset 0 0 15px rgba(120,53,15,0.2)` | Home.tsx upload card inner border |
| S3 | **Shelter Card Shadow** | `0 15px 50px rgba(0,0,0,0.45), inset 0 0 40px rgba(255,255,255,0.15)` | Home.tsx shelter cards |
| S4 | **Shelter Card Inner Glow** | `inset 0 0 15px {accent}20` | Home.tsx shelter card inner border (accent color varies per card) |
| S5 | **Shelter Card Photo Frame** | `0 4px 12px rgba(0,0,0,0.3)` | Home.tsx shelter card photo border |
| S6 | **Shelter Card Name Banner** | `0 -4px 12px rgba(0,0,0,0.3)` | Home.tsx shelter card bottom name area |
| S7 | **Oracle Reading Card Shadow** | `0 20px 60px rgba(120,53,15,0.3), inset 0 0 40px rgba(255,255,255,0.2)` | Home.tsx oracle card, NameInputModal card, OracleResponseCard |
| S8 | **Oracle Card Photo Frame** | `0 12px 30px rgba(120,53,15,0.4)` | Home.tsx photo frame in oracle reading |
| S9 | **Refresh Card Shadow** | `0 15px 50px rgba(0,0,0,0.45), 0 0 20px rgba(147,51,234,0.3)` | Home.tsx refresh card (purple glow) |

**Detailed token breakdown for S1 (Upload Card Shadow -- most complex):**
```json
{
  "card-upload": {
    "$type": "boxShadow",
    "$value": [
      { "x": "0", "y": "15", "blur": "50", "spread": "0", "color": "rgba(0,0,0,0.45)", "type": "dropShadow" },
      { "x": "0", "y": "0", "blur": "40", "spread": "0", "color": "rgba(255,255,255,0.4)", "type": "innerShadow" },
      { "x": "0", "y": "0", "blur": "20", "spread": "0", "color": "rgba(251,191,36,0.3)", "type": "dropShadow" }
    ],
    "$description": "Upload card. Deep drop shadow + white inner glow + gold ambient glow."
  }
}
```

### Button/Interactive Shadows

| # | Name | CSS `box-shadow` | Used By |
|---|------|-------------------|---------|
| S10 | **Submit/CTA Button Shadow** | `0 4px 20px rgba(124,45,18,0.4)` | Home.tsx submit button, QuestionInput button |
| S11 | **Carousel Nav Button Shadow** | `0 3px 8px rgba(120,53,15,0.3), inset 0 1px 2px rgba(255,255,255,0.5)` | Home.tsx carousel left/right arrows |
| S12 | **CelestialButton Shadow** | `0 4px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)` | CelestialButton.tsx |
| S13 | **Adopt Badge Shadow** | `0 4px 15px rgba(236,72,153,0.5), 0 2px 6px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.3)` | Home.tsx adopt badge |

### Input/Modal Shadows

| # | Name | CSS `box-shadow` | Used By |
|---|------|-------------------|---------|
| S14 | **Input Inset Shadow** | `inset 0 2px 8px rgba(120,53,15,0.1)` | Home.tsx question input, QuestionInput |
| S15 | **Modal Overlay Shadow** | `0 20px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,255,255,0.2)` | NameInputModal card |

### Tailwind Utility Shadows (from className)

| # | Name | Tailwind Class | CSS Equivalent | Used By |
|---|------|----------------|----------------|---------|
| U1 | **shadow-lg** | `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` | Name badge pill, close button |
| U2 | **drop-shadow-lg** | `drop-shadow-lg` | `drop-shadow(0 10px 8px rgba(0,0,0,0.04)) drop-shadow(0 4px 3px rgba(0,0,0,0.1))` | MysticalStar icons, MagicButton SVG |
| U3 | **drop-shadow-xl** | `drop-shadow-xl` | `drop-shadow(0 20px 13px rgba(0,0,0,0.03)) drop-shadow(0 8px 5px rgba(0,0,0,0.08))` | OrnateFrame SVG overlay |

**Notes:**
- Tailwind `shadow-lg` and `drop-shadow-lg/xl` are CSS filter effects, not box-shadows. In Figma, these translate to standard Drop Shadow effects.
- U1-U3 use Tailwind 4 default values. They can be created as simple Figma Effect Styles.

---

## EFFECT-02: Text Shadow Presets

**Already researched in Phase 2.** The 7 text shadow techniques are documented in `.planning/phases/02-typography-foundations/02-RESEARCH.md` under "Text Shadow Techniques" (Shadows 1-7).

Summary for Effect Style creation:

| # | Name | Layers | Phase 2 Ref |
|---|------|--------|-------------|
| TS1 | Logo Title Treatment | 7 shadow layers (gold offset + depth + glow + 4x edge) | Shadow 1 |
| TS2 | Simplified Logo Shadow | 3 shadow layers (gold offset + depth + glow) | Shadow 2 |
| TS3 | Dark Outline for Readability | 5 shadow layers (4x amber-900 outline + drop) | Shadow 3 |
| TS4 | Gold Highlight Shadow | 1 shadow layer (`1px 1px 0 rgba(251,191,36,0.6)`) | Shadow 4 |
| TS5 | Subtle Warm Shadow | 1 shadow layer (`1px 1px 0 rgba(254,243,199,0.5)`) | Shadow 5 |
| TS6 | Dark Drop Shadow (Buttons) | 1 shadow layer (`1px 2px 4px rgba(0,0,0,0.5)` or `0 2px 4px rgba(0,0,0,0.8)`) | Shadow 6 |
| TS7 | Adopt Badge Shadow | 1 shadow layer (`0 1px 2px rgba(0,0,0,0.4)`) | Shadow 7 |

**Figma limitation:** Figma does not have native "text shadow" -- it uses Drop Shadow / Inner Shadow effects on text layers. These work identically to box-shadow effects. Text shadows with offset/blur/color map directly to Figma Drop Shadow effects.

**Important:** Text shadows in CSS use `text-shadow` which does NOT have a `spread` property. When converting to Figma Effect Styles (or Tokens Studio boxShadow tokens), set `spread: 0` for all text shadow conversions.

---

## EFFECT-03: Glass/Glow Ambient Effects

### Ambient Effects Found in Codebase

| # | Name | Description | How Implemented | Applicable? |
|---|------|-------------|-----------------|-------------|
| A1 | **Gold Ambient Glow** | `0 0 20px rgba(251,191,36,0.3)` as the 3rd shadow layer on upload card S1 | Part of card shadow composition (box-shadow) | Yes -- captured in S1 above |
| A2 | **Purple Refresh Glow** | `0 0 20px rgba(147,51,234,0.3)` on refresh card | Part of refresh card shadow S9 | Yes -- captured in S9 above |
| A3 | **White Inner Glow** | `inset 0 0 40px rgba(255,255,255,0.4)` on upload card | Part of card shadow composition | Yes -- captured in S1, S3, S7 above |
| A4 | **Radial Camera Glow** | `radial-gradient(circle, rgba(254,243,199,0.5) 0%, transparent 70%)` | CSS radial gradient on div | Document as manual Figma effect -- NOT tokenizable |
| A5 | **MagicButton SVG Glow** | SVG `<filter id="glow">` with `feGaussianBlur stdDeviation="2"` | SVG filter in component | Phase 4 (SVG extraction) territory |
| A6 | **Floral Background Pattern** | `opacity-15` div with inline SVG `backgroundImage` pattern | SVG data URL as repeating background | Document -- becomes a Figma pattern fill or separate layer |
| A7 | **Gold Foil Overlay** | `mix-blend-multiply opacity-20 bg-amber-100` on OrnateFrame | CSS blend mode + opacity | Document -- Figma supports blend modes on layers |
| A8 | **Warm Glow (Title)** | `0 0 30px rgba(251,191,36,0.4)` as part of logo text shadow | Part of text shadow TS1/TS2 | Yes -- captured in text shadows above |

### EFFECT-03 Assessment

**Verdict: Most ambient/glow effects are ALREADY captured** as components of card shadows (S1-S9) or text shadows (TS1-TS8). They are not independent effects but layers within multi-shadow compositions.

**Genuinely independent ambient effects:**
- A4 (radial camera glow): Must be created manually in Figma as a radial gradient fill on a circle shape
- A6 (floral background pattern): Document as a separate deliverable -- either a repeating tile pattern or an SVG layer placed behind content
- A7 (gold foil overlay): Figma blend modes on layers -- document as a layer technique, not a style

**Not applicable to this phase:**
- A5 (SVG glow filter): Part of SVG component extraction in Phase 4

---

## CSS-to-Figma Mapping Reference

### Gradient Angle Conversion

| CSS Angle | Direction Description | Figma Equivalent |
|-----------|----------------------|------------------|
| `135deg` | Top-left to bottom-right | Tokens Studio converts automatically. In Figma: drag gradient handle from top-left corner to bottom-right. |
| `145deg` | Similar to 135deg, slightly more vertical | Same auto-conversion. |
| `180deg` | Top to bottom | Vertical gradient, top to bottom. |

**CSS angle system:** 0deg = bottom-to-top, increases clockwise.
**Figma angle system:** 0deg = left-to-right, increases clockwise.
**Conversion:** Figma angle = CSS angle - 90deg. Tokens Studio handles this automatically.

### Box Shadow Property Mapping

| CSS Property | Figma Effect Property | Notes |
|-------------|----------------------|-------|
| `x` offset | X offset | Same units (px) |
| `y` offset | Y offset | Same units (px) |
| `blur` radius | Blur | Same units (px) |
| `spread` radius | Spread | Same units (px). Not available for text shadows (always 0). |
| `color` | Color + opacity | rgba values split into color hex + opacity percentage |
| `inset` keyword | Inner Shadow (vs Drop Shadow) | `inset` = Inner Shadow; no `inset` = Drop Shadow |

### Gradient Property Mapping

| CSS Property | Figma Fill Property | Notes |
|-------------|-------------------|-------|
| `linear-gradient` | Linear gradient fill | Supported by Tokens Studio export |
| `radial-gradient` | Radial gradient fill | NOT supported by Tokens Studio -- create manually |
| Angle (deg) | Gradient handle direction | Auto-converted by Tokens Studio |
| Color stops (%) | Gradient stops (0-1 scale) | 0% = 0, 100% = 1; auto-converted |
| `rgba()` colors | Color + opacity on stop | Split into hex color + opacity slider |

---

## Tokens Studio JSON for Gradients

Complete JSON file following the project's W3C DTCG format.

### Importable Gradients (Linear Only)

```json
{
  "gradient": {
    "page-background": {
      "$type": "color",
      "$value": "linear-gradient(135deg, {pink.500} 0%, {pink.400} 20%, {amber.400} 50%, {amber.500} 80%, {amber.600} 100%)",
      "$description": "GRAD-01: Main page background. Hot pink to gold diagonal."
    },
    "card-oracle": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {amber.100} 0%, {amber.200} 50%, {amber.300} 100%)",
      "$description": "GRAD-02: Oracle reading card, modal card, name input modal. Cream to gold."
    },
    "card-upload": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {amber.100} 0%, {amber.400} 50%, {amber.700} 100%)",
      "$description": "GRAD-02: Upload card (Your Cat). Cream to deep gold."
    },
    "card-pink": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {card-pink.gradient-start} 0%, {card-pink.gradient-mid} 50%, {card-pink.gradient-end} 100%)",
      "$description": "GRAD-02: Shelter card pink theme. Also used for Adopt badge."
    },
    "card-green": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {card-green.gradient-start} 0%, {card-green.gradient-mid} 50%, {card-green.gradient-end} 100%)",
      "$description": "GRAD-02: Shelter card green/emerald theme."
    },
    "card-purple": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {card-purple.gradient-start} 0%, {card-purple.gradient-mid} 50%, {card-purple.gradient-end} 100%)",
      "$description": "GRAD-02: Shelter card purple/violet theme."
    },
    "card-hotpink": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {card-hotpink.gradient-start} 0%, {card-hotpink.gradient-mid} 50%, {card-hotpink.gradient-end} 100%)",
      "$description": "GRAD-02: Shelter card hot pink theme."
    },
    "card-orange": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {card-orange.gradient-start} 0%, {card-orange.gradient-mid} 50%, {card-orange.gradient-end} 100%)",
      "$description": "GRAD-02: Shelter card orange theme."
    },
    "button-submit": {
      "$type": "color",
      "$value": "linear-gradient(135deg, {orange.900} 0%, {orange.800} 50%, {orange.700} 100%)",
      "$description": "GRAD-03: Dark brown CTA/submit button. Also used for modal confirm."
    },
    "button-nav": {
      "$type": "color",
      "$value": "linear-gradient(145deg, {amber.100} 0%, {amber.400} 100%)",
      "$description": "GRAD-03: Cream-to-gold carousel navigation buttons."
    },
    "button-celestial": {
      "$type": "color",
      "$value": "linear-gradient(180deg, {amber.900} 0%, {amber.950} 100%)",
      "$description": "GRAD-03: CelestialButton. Dark brown vertical gradient."
    },
    "divider-line": {
      "$type": "color",
      "$value": "linear-gradient(90deg, transparent 0%, {amber.100} 50%, transparent 100%)",
      "$description": "Header decorative divider line. Transparent-cream-transparent."
    }
  }
}
```

**Gradients requiring manual creation (not Tokens Studio importable):**

| Name | Type | Value | Notes |
|------|------|-------|-------|
| Radial Camera Glow | Radial | `radial-gradient(circle, rgba(254,243,199,0.5) 0%, transparent 70%)` | Apply manually as radial gradient fill in Figma |
| OrnateFrame Background | Radial | `radial-gradient(circle at center, #FFFBEB 0%, #FEF3C7 100%)` | Phase 4 (part of OrnateFrame component) |
| MagicButton Gold | SVG linearGradient | #FCD34D -> #F59E0B -> #B45309 | Phase 4 (part of SVG extraction) |
| MagicButton Red | SVG linearGradient | #7F1D1D -> #991B1B -> #7F1D1D | Phase 4 (part of SVG extraction) |
| OrnateFrame Border | SVG linearGradient | #78350F -> #B45309 -> #78350F | Phase 4 (part of SVG extraction) |

---

## Tokens Studio JSON for Box Shadows

Complete JSON file following the project's W3C DTCG format.

```json
{
  "shadow": {
    "card-upload": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "15", "blur": "50", "spread": "0", "color": "rgba(0,0,0,0.45)", "type": "dropShadow" },
        { "x": "0", "y": "0", "blur": "40", "spread": "0", "color": "rgba(255,255,255,0.4)", "type": "innerShadow" },
        { "x": "0", "y": "0", "blur": "20", "spread": "0", "color": "rgba(251,191,36,0.3)", "type": "dropShadow" }
      ],
      "$description": "EFFECT-01: Upload card (Your Cat). Deep shadow + white inner glow + gold ambient."
    },
    "card-upload-inner": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "0", "blur": "15", "spread": "0", "color": "rgba(120,53,15,0.2)", "type": "innerShadow" },
      "$description": "EFFECT-01: Upload card inner ornate frame."
    },
    "card-shelter": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "15", "blur": "50", "spread": "0", "color": "rgba(0,0,0,0.45)", "type": "dropShadow" },
        { "x": "0", "y": "0", "blur": "40", "spread": "0", "color": "rgba(255,255,255,0.15)", "type": "innerShadow" }
      ],
      "$description": "EFFECT-01: Shelter cat card. Deep shadow + subtle inner glow."
    },
    "card-shelter-inner": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "0", "blur": "15", "spread": "0", "color": "rgba(255,255,255,0.125)", "type": "innerShadow" },
      "$description": "EFFECT-01: Shelter card inner frame. Note: actual color varies per card accent+20 hex opacity."
    },
    "card-photo-frame": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "4", "blur": "12", "spread": "0", "color": "rgba(0,0,0,0.3)", "type": "dropShadow" },
      "$description": "EFFECT-01: Shelter card photo frame drop shadow."
    },
    "card-name-banner": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "-4", "blur": "12", "spread": "0", "color": "rgba(0,0,0,0.3)", "type": "dropShadow" },
      "$description": "EFFECT-01: Shelter card bottom name banner. Shadow goes UP (negative y)."
    },
    "card-oracle": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "20", "blur": "60", "spread": "0", "color": "rgba(120,53,15,0.3)", "type": "dropShadow" },
        { "x": "0", "y": "0", "blur": "40", "spread": "0", "color": "rgba(255,255,255,0.2)", "type": "innerShadow" }
      ],
      "$description": "EFFECT-01: Oracle reading card, modal card. Brown drop shadow + white inner glow."
    },
    "card-oracle-photo": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "12", "blur": "30", "spread": "0", "color": "rgba(120,53,15,0.4)", "type": "dropShadow" },
      "$description": "EFFECT-01: Oracle card photo frame."
    },
    "card-refresh": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "15", "blur": "50", "spread": "0", "color": "rgba(0,0,0,0.45)", "type": "dropShadow" },
        { "x": "0", "y": "0", "blur": "20", "spread": "0", "color": "rgba(147,51,234,0.3)", "type": "dropShadow" }
      ],
      "$description": "EFFECT-01: Refresh card. Deep shadow + purple ambient glow."
    },
    "button-submit": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "4", "blur": "20", "spread": "0", "color": "rgba(124,45,18,0.4)", "type": "dropShadow" },
      "$description": "EFFECT-01: Submit/CTA button. Warm brown drop shadow."
    },
    "button-nav": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "3", "blur": "8", "spread": "0", "color": "rgba(120,53,15,0.3)", "type": "dropShadow" },
        { "x": "0", "y": "1", "blur": "2", "spread": "0", "color": "rgba(255,255,255,0.5)", "type": "innerShadow" }
      ],
      "$description": "EFFECT-01: Carousel nav button. Drop shadow + white top highlight."
    },
    "button-celestial": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "4", "blur": "15", "spread": "0", "color": "rgba(0,0,0,0.4)", "type": "dropShadow" },
        { "x": "0", "y": "1", "blur": "0", "spread": "0", "color": "rgba(255,255,255,0.1)", "type": "innerShadow" }
      ],
      "$description": "EFFECT-01: CelestialButton. Dark drop + subtle top shine."
    },
    "badge-adopt": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "4", "blur": "15", "spread": "0", "color": "rgba(236,72,153,0.5)", "type": "dropShadow" },
        { "x": "0", "y": "2", "blur": "6", "spread": "0", "color": "rgba(0,0,0,0.3)", "type": "dropShadow" },
        { "x": "0", "y": "1", "blur": "3", "spread": "0", "color": "rgba(255,255,255,0.3)", "type": "innerShadow" }
      ],
      "$description": "EFFECT-01: Adopt Me badge. Pink glow + dark shadow + inner shine."
    },
    "input-inset": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "2", "blur": "8", "spread": "0", "color": "rgba(120,53,15,0.1)", "type": "innerShadow" },
      "$description": "EFFECT-01: Question input field inset shadow."
    },
    "modal-card": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "20", "blur": "60", "spread": "0", "color": "rgba(0,0,0,0.5)", "type": "dropShadow" },
        { "x": "0", "y": "0", "blur": "40", "spread": "0", "color": "rgba(255,255,255,0.2)", "type": "innerShadow" }
      ],
      "$description": "EFFECT-01: Name input modal card. Similar to oracle card but darker drop shadow."
    },
    "utility-shadow-lg": {
      "$type": "boxShadow",
      "$value": [
        { "x": "0", "y": "10", "blur": "15", "spread": "-3", "color": "rgba(0,0,0,0.1)", "type": "dropShadow" },
        { "x": "0", "y": "4", "blur": "6", "spread": "-4", "color": "rgba(0,0,0,0.1)", "type": "dropShadow" }
      ],
      "$description": "Tailwind shadow-lg equivalent. Name badge pill, close button."
    },
    "text-logo-full": {
      "$type": "boxShadow",
      "$value": [
        { "x": "2", "y": "2", "blur": "0", "spread": "0", "color": "#FBBF24", "type": "dropShadow" },
        { "x": "4", "y": "4", "blur": "0", "spread": "0", "color": "rgba(0,0,0,0.2)", "type": "dropShadow" },
        { "x": "0", "y": "0", "blur": "30", "spread": "0", "color": "rgba(251,191,36,0.4)", "type": "dropShadow" },
        { "x": "-1", "y": "-1", "blur": "0", "spread": "0", "color": "rgba(0,0,0,0.15)", "type": "dropShadow" },
        { "x": "1", "y": "-1", "blur": "0", "spread": "0", "color": "rgba(0,0,0,0.15)", "type": "dropShadow" },
        { "x": "-1", "y": "1", "blur": "0", "spread": "0", "color": "rgba(0,0,0,0.15)", "type": "dropShadow" },
        { "x": "1", "y": "1", "blur": "0", "spread": "0", "color": "rgba(0,0,0,0.15)", "type": "dropShadow" }
      ],
      "$description": "EFFECT-02: Full logo text shadow (7 layers). Gold offset + depth + glow + edge definition."
    },
    "text-logo-simple": {
      "$type": "boxShadow",
      "$value": [
        { "x": "2", "y": "2", "blur": "0", "spread": "0", "color": "#FBBF24", "type": "dropShadow" },
        { "x": "4", "y": "4", "blur": "0", "spread": "0", "color": "rgba(0,0,0,0.2)", "type": "dropShadow" },
        { "x": "0", "y": "0", "blur": "30", "spread": "0", "color": "rgba(251,191,36,0.4)", "type": "dropShadow" }
      ],
      "$description": "EFFECT-02: Simplified logo text shadow (3 layers). Gold offset + depth + glow, no edge."
    },
    "text-outline-dark": {
      "$type": "boxShadow",
      "$value": [
        { "x": "-1", "y": "-1", "blur": "0", "spread": "0", "color": "#78350F", "type": "dropShadow" },
        { "x": "1", "y": "-1", "blur": "0", "spread": "0", "color": "#78350F", "type": "dropShadow" },
        { "x": "-1", "y": "1", "blur": "0", "spread": "0", "color": "#78350F", "type": "dropShadow" },
        { "x": "1", "y": "1", "blur": "0", "spread": "0", "color": "#78350F", "type": "dropShadow" },
        { "x": "0", "y": "2", "blur": "4", "spread": "0", "color": "rgba(0,0,0,0.3)", "type": "dropShadow" }
      ],
      "$description": "EFFECT-02: Dark outline for gradient readability. 4x amber-900 outline + subtle drop."
    },
    "text-gold-highlight": {
      "$type": "boxShadow",
      "$value": { "x": "1", "y": "1", "blur": "0", "spread": "0", "color": "rgba(251,191,36,0.6)", "type": "dropShadow" },
      "$description": "EFFECT-02: Gold highlight shadow for tagline text."
    },
    "text-warm-subtle": {
      "$type": "boxShadow",
      "$value": { "x": "1", "y": "1", "blur": "0", "spread": "0", "color": "rgba(254,243,199,0.5)", "type": "dropShadow" },
      "$description": "EFFECT-02: Subtle cream shadow for 'Your Cat' label text."
    },
    "text-button-dark": {
      "$type": "boxShadow",
      "$value": { "x": "1", "y": "2", "blur": "4", "spread": "0", "color": "rgba(0,0,0,0.5)", "type": "dropShadow" },
      "$description": "EFFECT-02: Dark drop shadow for button text (MagicButton)."
    },
    "text-button-heavy": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "2", "blur": "4", "spread": "0", "color": "rgba(0,0,0,0.8)", "type": "dropShadow" },
      "$description": "EFFECT-02: Heavy dark drop shadow for CelestialButton text."
    },
    "text-badge": {
      "$type": "boxShadow",
      "$value": { "x": "0", "y": "1", "blur": "2", "spread": "0", "color": "rgba(0,0,0,0.4)", "type": "dropShadow" },
      "$description": "EFFECT-02: Minimal shadow for Adopt Me badge small text."
    }
  }
}
```

---

## Common Pitfalls

### Pitfall 1: Radial Gradients Cannot Be Exported via Tokens Studio

**What goes wrong:** Defining a radial gradient in Tokens Studio JSON and expecting it to appear as a Figma Fill Style.
**Why it happens:** Tokens Studio only supports linear gradient export to Figma. Radial gradients are not yet implemented.
**How to avoid:** Create radial gradients manually in Figma. Document them in the JSON for reference but mark them as "manual creation required."
**Warning signs:** Any `radial-gradient()` in the codebase (2 instances: camera circle glow, OrnateFrame background).

### Pitfall 2: CSS vs Figma Angle Systems

**What goes wrong:** Creating a gradient at CSS angle 135deg directly in Figma results in the wrong direction.
**Why it happens:** CSS 0deg = bottom-to-top; Figma 0deg = left-to-right. They are offset by 90 degrees.
**How to avoid:** Use Tokens Studio for import -- it handles the conversion automatically. If creating manually in Figma, subtract 90 from the CSS angle (CSS 135deg = Figma 45deg).
**Warning signs:** Gradient direction looks wrong compared to the live site.

### Pitfall 3: Multi-Layer Shadow Order Matters

**What goes wrong:** Shadow layers appear in the wrong order in Figma, creating a different visual effect.
**Why it happens:** CSS `box-shadow` lists shadows from front to back, but Figma's effects panel renders from top to bottom.
**How to avoid:** Maintain the same order from the CSS in the Tokens Studio JSON array. The first item in the CSS list should be the first object in the `$value` array. Tokens Studio preserves order when exporting to Figma Effect Styles.
**Warning signs:** Shadows look subtly different from the live site -- check layer order.

### Pitfall 4: Text Shadow Has No Spread

**What goes wrong:** Including a non-zero `spread` value when converting CSS `text-shadow` to a Tokens Studio boxShadow token.
**Why it happens:** CSS `text-shadow` does not support the `spread` property (only offset-x, offset-y, blur-radius, color). Box-shadow has spread; text-shadow does not.
**How to avoid:** Always set `"spread": "0"` when creating effect tokens from text-shadow CSS values. The text shadow values from Phase 2 research already omit spread.
**Warning signs:** Tokens Studio may still accept non-zero spread for text shadow tokens, but the Figma export will look wrong.

### Pitfall 5: Shelter Card Inner Glow Uses Dynamic Color

**What goes wrong:** The shelter card inner frame glow (`S4`) uses `${color.accent}20` -- a dynamic value that changes per card theme.
**Why it happens:** The accent color (e.g., `#FDF2F8` for pink, `#D1FAE5` for green) is appended with `20` hex opacity, making each card's inner glow a different tint.
**How to avoid:** Create 5 separate shelter card inner glow tokens (one per theme), or create a single generic token and note that the color changes per card variant. The 5-variant approach is more faithful but produces more tokens.
**Warning signs:** All shelter cards having identical inner glow tint when they should be different.

### Pitfall 6: Token References in Gradients Must Match Existing Primitives

**What goes wrong:** Using `{pink.500}` in a gradient token but the actual primitive is named differently in the JSON.
**Why it happens:** The gradient token references must exactly match the group/key path in `primitives.json`.
**How to avoid:** Verify all references against the existing `scripts/figma-tokens/primitives.json` before importing. The audit above maps every gradient stop to its primitive name.
**Warning signs:** Tokens Studio shows "broken reference" errors after import.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual Figma Fill Styles | Tokens Studio gradient tokens -> Fill Styles | 2024+ | Versionable, code-synced gradient definitions |
| Manual Figma Effect Styles | Tokens Studio boxShadow tokens -> Effect Styles | 2024+ | Complex multi-layer shadows from JSON |
| Gradients as separate token type | Gradients as color tokens with CSS syntax | Current (Tokens Studio) | W3C DTCG `gradient` type exists but Tokens Studio hasn't adopted it yet |
| No variable binding in gradients | Variables on gradient stops | Figma 2024+ | Each stop can reference a color variable for live updates |

**Current limitations (as of Feb 2026):**
- Figma variables cannot store gradients (only solid colors)
- Tokens Studio only exports linear gradients to Figma (not radial or conic)
- Tokens Studio does not yet support the W3C DTCG `gradient` token type as independent
- Figma Effect Styles for text work the same as box-shadow effects (Drop Shadow / Inner Shadow)

---

## Token Count Estimates

| Category | Count | Type |
|----------|-------|------|
| Linear gradient Fill Styles | 12 | color tokens (gradient values) |
| Box-shadow Effect Styles (EFFECT-01) | 15 | boxShadow composite tokens |
| Text shadow Effect Styles (EFFECT-02) | 8 | boxShadow composite tokens |
| Radial gradients (manual) | 2 | Document only -- manual Figma creation |
| SVG gradients (Phase 4) | 3 | Deferred to Phase 4 |
| **Total tokens** | **~35** | **Plus 2 manual + 3 deferred** |

---

## Open Questions

1. **Should shelter card inner glow be 1 generic or 5 themed tokens?**
   - What we know: The CSS uses `${color.accent}20` which produces a different tint per card theme.
   - What's unclear: Whether the visual difference is significant enough to warrant 5 separate tokens.
   - Recommendation: Start with 1 generic token using white at 12.5% opacity (`rgba(255,255,255,0.125)` -- close average). If the user wants per-card precision, add 5 variants.

2. **Should the floral background pattern be a Figma style or a component?**
   - What we know: It is an inline SVG data URL applied as a `background-image` with `opacity: 0.15`.
   - What's unclear: Whether it should be a Figma pattern fill, a separate SVG layer, or deferred to Phase 4 (SVG extraction).
   - Recommendation: Defer to Phase 4 (SVG Asset Extraction). It is a decorative SVG pattern, not a gradient or shadow effect. Document it here for completeness but do not create a token for it.

3. **Token reference syntax for gradient stops -- primitives only or semantic too?**
   - What we know: Gradient stops reference raw color values that map to primitives (e.g., `{pink.500}`, `{amber.400}`).
   - What's unclear: Whether to reference primitives directly or go through the semantic layer.
   - Recommendation: Reference primitives directly. Gradients ARE the semantic meaning -- the page background gradient IS "page background." Adding a semantic indirection layer would add complexity without value. The card gradients already reference `{card-pink.gradient-start}` etc. which are primitive-level tokens.

---

## Sources

### Primary (HIGH confidence)
- MaybeCat codebase audit -- Complete extraction from `src/pages/Home.tsx`, `src/components/**/*.tsx`, all gradient and box-shadow values captured
- [Tokens Studio - Gradient Colors](https://docs.tokens.studio/manage-tokens/token-types/color/gradient) -- CSS-like gradient syntax, linear-only Figma export limitation
- [Tokens Studio - Box Shadow](https://docs.tokens.studio/manage-tokens/token-types/box-shadow) -- Composite type, x/y/blur/spread/color/type properties, multiple shadows as array
- [Tokens Studio - Token Types](https://docs.tokens.studio/manage-tokens/token-types) -- Overview of all supported types
- Phase 2 Research (`.planning/phases/02-typography-foundations/02-RESEARCH.md`) -- 7 text shadow techniques already extracted
- Phase 1 Research (`.planning/phases/01-color-foundations/01-RESEARCH.md`) -- Color variable architecture, primitives collection structure
- Existing token files (`scripts/figma-tokens/primitives.json`) -- W3C DTCG format confirmation, primitive token names for gradient references

### Secondary (MEDIUM confidence)
- [Figma Learn - Use gradients as a fill or stroke](https://help.figma.com/hc/en-us/articles/34208860210199-Use-gradients-as-a-fill-or-stroke) -- Variable binding to gradient stops
- [Figma Community - Gradients with variables](https://www.figma.com/community/file/1295349493892095561/gradients-with-variables) -- Community reference for variable-bound gradients
- [Figma Forum - Add Gradients as a variable type](https://forum.figma.com/suggest-a-feature-11/add-gradients-as-a-variable-type-26400) -- Confirms gradients still not supported as variables (as of 2026)
- [Tokens Studio - Token Format (W3C DTCG)](https://docs.tokens.studio/manage-settings/token-format) -- DTCG format with `$` prefix

### Tertiary (LOW confidence)
- None -- all findings verified against primary sources

---

## Metadata

**Confidence breakdown:**
- Gradient audit: HIGH -- Extracted directly from codebase, every `linear-gradient`, `radial-gradient`, and SVG `linearGradient` captured
- Shadow audit: HIGH -- Extracted directly from codebase, every `boxShadow` inline style and Tailwind shadow utility captured
- Tokens Studio gradient format: HIGH -- Verified against official Tokens Studio documentation, CSS-like syntax confirmed
- Tokens Studio boxShadow format: HIGH -- Verified against official docs, property names and structure confirmed
- Figma Fill/Effect Style behavior: HIGH -- Verified against Figma official docs, variable binding to gradient stops confirmed
- Radial gradient limitation: HIGH -- Confirmed by Tokens Studio docs that only linear gradients export to Figma
- CSS-to-Figma angle conversion: MEDIUM -- Based on known coordinate system differences, Tokens Studio auto-conversion confirmed by docs but not personally tested

**Research date:** 2026-02-08
**Valid until:** 2026-03-08 (Tokens Studio and Figma gradient/effect systems are stable)
