# Phase 1: Color Foundations - Research

**Researched:** 2026-02-07
**Domain:** Figma Variables / Color Token Architecture
**Confidence:** HIGH

## Summary

This phase establishes the complete color variable architecture in Figma using three collections (Primitives, Semantic, Component) following the standard three-tier token pattern that is the established best practice in the Figma design systems community as of 2025/2026. The MaybeCat codebase uses approximately 35 unique hex color values plus several rgba opacity variants. All colors fall into clear families: amber/brown (the dominant palette), pink/fuchsia, gold/yellow, and five shelter card color themes (pink, green, purple, hot-pink, orange), plus two dark overlay/UI colors.

The biggest architectural decision is how to handle opacity variants. Figma does NOT support applying opacity modifiers to color variable aliases -- this is a known, unresolved limitation. The practical workaround is to bake opacity into specific color variables where needed (e.g., `amber-900-60` as a separate variable with the alpha channel embedded in the hex8 value), rather than trying to separate color from opacity.

**Primary recommendation:** Create three Figma variable collections with slash-separated group naming mirroring Tailwind conventions. Keep the Primitives collection as the complete palette (with opacity variants as distinct variables), Semantic collection for purpose-based aliases, and a lightweight Component collection for card themes and specific UI element tokens.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Naming Convention
- Mirror Tailwind naming at the primitive level (pink-500, amber-400, orange-900) for familiarity with the codebase
- Semantic names should be descriptive and purpose-based (text-primary, surface-card, border-accent)
- Use Figma's slash-separated group convention for organization (color/pink/500, color/amber/400)
- Keep it simple -- this is a single-page app, not a multi-brand enterprise system

#### Collection Architecture
- 3 collections following 2025/2026 Figma best practice:
  1. **Primitives** -- Every raw hex value from the site (the palette)
  2. **Semantic** -- Purpose-mapped aliases that reference primitives (what colors MEAN)
  3. **Component** -- Component-specific tokens that reference semantics (button-bg, card-border)
- Keep it lightweight -- the site is largely WYSIWYG, not deeply themed
- Architecture should allow future flexibility (dark mode, alternate themes) but not build for it now

#### Card Color Theming
- The 5 shelter card colors (pink, green, purple, hot-pink, orange) were picked organically
- No systematic theming logic exists -- each card color set is independent (gradient stops, border color, accent color)
- Implement as 5 grouped variable sets within the Primitive collection, not as variable modes
- Each card color group contains: gradient-start, gradient-mid, gradient-end, border, accent, text

#### Scope
- Extract ONLY colors that exist on the live site right now
- Include the SEO keyword drifter text color (rgba brown, very low opacity)
- Don't pre-build colors for future features or themes
- Structure should make it easy to ADD colors later without restructuring

### Claude's Discretion
- Exact grouping hierarchy within each collection
- How to handle opacity variants (separate variable vs applied opacity)
- Whether to scope variables to specific properties (fills, strokes, text)
- Organization of the Figma variables panel (ordering, descriptions)

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

## Standard Stack

### Core
| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Figma Variables | Current (2025/2026) | Native variable system for design tokens | Built into Figma, no plugins required, supports aliasing between collections |
| Figma MCP | Connected | Programmatic access to Figma file | Can read/write variables, inspect existing state |

### Supporting
| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| Figma Styles | Current | Gradient definitions (variables can't store gradients) | For gradient fills that reference color variables at each stop |
| Figma Dev Mode | Current | Verify variable output matches code values | Validation after variable creation |

### Not Needed
| Tool | Why Not |
|------|---------|
| Tokens Studio plugin | Overkill for single-page app; native Figma variables suffice |
| Style Dictionary | No code generation needed in this phase (Figma-only) |
| W3C Design Tokens export | Not needed yet; can be added later without restructuring |

## Architecture Patterns

### Recommended Collection Structure

```
Collection 1: Primitives
  Groups:
    pink/
      50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
    amber/
      50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
    orange/
      ...
    emerald/
      ...
    violet/
      ...
    fuchsia/
      ...
    red/
      ...
    neutral/
      black, white
    card-pink/
      gradient-start, gradient-mid, gradient-end, border, accent
    card-green/
      gradient-start, gradient-mid, gradient-end, border, accent
    card-purple/
      gradient-start, gradient-mid, gradient-end, border, accent
    card-hotpink/
      gradient-start, gradient-mid, gradient-end, border, accent
    card-orange/
      gradient-start, gradient-mid, gradient-end, border, accent
    ui/
      banner-bg, overlay-bg, error-bg, error-text, drifter-text

Collection 2: Semantic
  Groups:
    text/
      primary, secondary, accent, muted, on-dark, on-action
    surface/
      page-gradient-start, page-gradient-mid, page-gradient-end,
      card, card-inner, photo-frame
    border/
      primary, secondary, accent, decorative
    icon/
      primary, secondary, accent, on-dark
    interactive/
      focus-ring, hover-bg

Collection 3: Component
  Groups:
    button/
      primary-start, primary-mid, primary-end, text
    input/
      bg, border, text, placeholder, focus-border
    modal/
      overlay, surface-start, surface-mid, surface-end, border
    header/
      title, subtitle, decoration
    banner/
      bg, text, accent, divider
    card-name/
      bg, text
    adopt-badge/
      gradient-start, gradient-mid, gradient-end, border, text
```

### Pattern 1: Slash-Separated Group Naming

**What:** Using forward slashes in variable names automatically creates collapsible folder groups in Figma's variables panel.
**When to use:** Always -- this is the primary organizational mechanism.
**How it works:**
- Variable named `pink/500` appears under a `pink` group folder
- Variable named `card-pink/gradient-start` appears under a `card-pink` group folder
- Groups are displayed alphabetically in the panel sidebar
- Groups can be collapsed/expanded for navigation

**Source:** [Figma Learn - Create and manage variables](https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables-and-collections), [zeroheight - Variable Architecture](https://zeroheight.com/blog/figma-variables-and-design-tokens-part-one-variable-architecture/)

### Pattern 2: Three-Tier Aliasing Chain

**What:** Component tokens reference Semantic tokens, which reference Primitive tokens. Never skip a level.
**When to use:** For all color assignments in the design file.
**Example chain:**
```
Primitive:  amber/800     = #92400E
Semantic:   border/primary = {amber/800}  (alias reference)
Component:  modal/border   = {border/primary}  (alias reference)
```

**Why:** Changes to the primitive propagate through the chain. If `amber/800` changes, everything aliased to it updates automatically.

**Source:** [zeroheight - Variable Architecture](https://zeroheight.com/blog/figma-variables-and-design-tokens-part-one-variable-architecture/), [Design Systems Collective - 2025/2026 Playbook](https://www.designsystemscollective.com/design-system-mastery-with-figma-variables-the-2025-2026-best-practice-playbook-da0500ca0e66)

### Pattern 3: Hiding Primitives from Publishing

**What:** Mark Primitive variables as hidden from publishing so designers only see Semantic and Component tokens when applying colors.
**When to use:** After the full architecture is built and validated.
**Why:** Prevents accidental use of raw values; enforces semantic naming in designs.

**Source:** [Figma Learn - Create and manage variables](https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables-and-collections)

**Note for MaybeCat:** Since this is a single-designer project, hiding primitives is optional. It adds cleanliness but isn't critical. Recommend doing it as a final polish step.

### Anti-Patterns to Avoid
- **Flat variable list with no groups:** Makes the panel unusable once you have 50+ variables. Always use slash groups.
- **Skipping the semantic layer:** Applying primitives directly to component tokens defeats the purpose -- you lose the "what does this color MEAN" context.
- **Using modes for card color themes:** Modes are for contextual switching (light/dark). The 5 card themes are parallel options, not contextual modes. Grouped variables are correct.
- **Over-nesting groups:** `color/palette/warm/amber/base/500` is too deep. Two levels max: `amber/500`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Opacity variants | Separate opacity + color combination at runtime | Baked hex8 values in Primitives | Figma cannot apply opacity modifiers to color variable aliases |
| Gradient definitions | Individual gradient stop variables only | Figma Color Styles for full gradients, with each stop referencing a variable | Figma variables cannot store gradient values, only solid colors |
| Color palette generation | Manual selection of intermediate shades | Use existing Tailwind scale values directly | The site already uses Tailwind's curated amber/pink/etc. scales |

**Key insight:** Figma color variables store single solid color values (hex/rgba). Gradients, shadows, and complex effects must remain as Figma Styles or be applied at the layer level. The variables provide the color values that feed into those styles.

## Common Pitfalls

### Pitfall 1: Opacity Aliasing Limitation
**What goes wrong:** You create `amber/800` as a primitive, alias it to `border/decorative`, then try to apply it at 60% opacity in Figma. The opacity modification breaks the variable reference -- you get a detached hex value instead.
**Why it happens:** Figma does not support applying opacity/alpha modifiers to color variable aliases. This is a long-standing feature request that remains unimplemented as of early 2026.
**How to avoid:** For colors that are ALWAYS used at a specific opacity, create a separate primitive with the opacity baked in: `amber/800-60` = `#92400E99` (hex8 with 99 = 60% alpha). For colors used at their base opacity AND at reduced opacity, create both variants.
**Warning signs:** In the codebase, look for Tailwind classes like `text-amber-900/60` and `bg-amber-800/60` -- these indicate opacity variants that need dedicated variables.

**Source:** [Figma Forum - Variables: Color alias with alpha/opacity](https://forum.figma.com/suggest-a-feature-11/variables-color-alias-with-alpha-opacity-rgba-ideally-14240), [Figma Forum - Change opacity on referenced color variable](https://forum.figma.com/suggest-a-feature-11/change-opacity-on-a-referenced-color-variable-20641)

### Pitfall 2: Gradients Can't Be Variables
**What goes wrong:** Attempting to create a variable that stores a full gradient (e.g., the main background `linear-gradient(135deg, #EC4899 0%, #F472B6 20%, ...)`.
**Why it happens:** Figma variables only support solid color values (Color type), not gradient fills.
**How to avoid:** Create individual primitive variables for each gradient stop color. Apply the gradient at the Figma layer level (or via a Figma Color Style), referencing the variables for each stop.
**Warning signs:** Any `linear-gradient()` or `radial-gradient()` in the codebase.

### Pitfall 3: Variable Panel Pollution
**What goes wrong:** Creating too many variables without proper grouping, making the panel overwhelming.
**Why it happens:** Including every possible opacity variant, shadow color, and edge case as separate primitives.
**How to avoid:** Only create primitives for colors that are ACTUALLY used in the codebase. The audit below identifies exactly which values exist. Add more later as needed -- the structure supports extension.
**Warning signs:** More than ~80 primitives for a single-page app.

### Pitfall 4: Alphabetical Ordering Surprises
**What goes wrong:** Groups and variables appear in unexpected order because Figma sorts alphabetically.
**Why it happens:** Figma's variable panel sorts groups alphabetically, not in creation order.
**How to avoid:** Name groups so alphabetical order matches logical order. For the card themes, `card-green`, `card-hotpink`, `card-orange`, `card-pink`, `card-purple` sorts sensibly. For main palette groups, `amber`, `emerald`, `fuchsia`, `neutral`, `orange`, `pink`, `red`, `violet` also sorts well alphabetically.

### Pitfall 5: Scope Misconfiguration
**What goes wrong:** A color variable meant only for text fills shows up as an option for background fills, causing confusion.
**Why it happens:** Default scope is "all supported properties."
**How to avoid:** Use Figma's scoping feature to restrict variables. Text colors -> TEXT_FILL scope. Border colors -> STROKE_COLOR scope. Background colors -> FRAME_FILL + SHAPE_FILL scope.

**Source:** [Figma Developer Docs - VariableScope](https://developers.figma.com/docs/plugins/api/VariableScope/)

## Complete Color Audit

### Hex Values Mapped to Tailwind Names

All colors extracted from the live codebase (`src/` directory), mapped to their Tailwind CSS equivalents:

#### Amber/Brown Family (Primary Palette)
| Hex | Tailwind Name | Usage Count | Context |
|-----|--------------|-------------|---------|
| `#FFFBEB` | amber-50 | 3 | Photo frame bg, ornate frame bg |
| `#FEF3C7` | amber-100 | 10+ | Card surface, label text, text shadows, export bg |
| `#FDE68A` | amber-200 | 2 | Card surface gradient mid |
| `#FCD34D` | amber-300 | 3 | Card surface gradient end, button gradient start |
| `#FBBF24` | amber-400 | 8+ | Main gradient stop, title text shadow, upload card gradient, adopt badge border |
| `#F59E0B` | amber-500 | 3 | Main gradient stop, celestial button border, button gradient mid |
| `#D97706` | amber-600 | 1 | Main gradient end stop |
| `#B45309` | amber-700 | 3 | Upload card gradient end, frame gradient, button gradient end |
| `#92400E` | amber-800 | 10+ | Border primary (modal, card, photo frame), crescent/symbol color, inner frame border |
| `#78350F` | amber-900 | 8+ | Title text, upload card border, dashed circle border, frame gradient, celestial button gradient |
| `#451A03` | amber-950 | 3 | Tagline text, celestial button gradient end, overlay base color |

#### Pink/Fuchsia Family
| Hex | Tailwind Name | Usage Count | Context |
|-----|--------------|-------------|---------|
| `#FDF2F8` | pink-50 | 1 | Card-pink accent |
| `#FCE7F3` | pink-100 | 1 | Card-hotpink accent |
| `#F472B6` | pink-400 | 2 | Main gradient stop, card-hotpink gradient start |
| `#EC4899` | pink-500 | 3 | Main gradient start, card-pink gradient start, adopt badge gradient start |
| `#DB2777` | pink-600 | 1 | Card-hotpink gradient mid |
| `#BE185D` | pink-700 | 2 | Card-pink gradient mid, adopt badge gradient mid |
| `#9D174D` | pink-800 | 1 | Card-hotpink gradient end |
| `#831843` | pink-900 | 2 | Card-pink gradient end, adopt badge gradient end |
| `#500724` | pink-950 | 2 | Card-pink border, card-hotpink border |

#### Orange Family
| Hex | Tailwind Name | Usage Count | Context |
|-----|--------------|-------------|---------|
| `#FFEDD5` | orange-100 | 1 | Card-orange accent |
| `#FB923C` | orange-400 | 1 | Card-orange gradient start |
| `#EA580C` | orange-600 | 1 | Card-orange gradient mid |
| `#C2410C` | orange-700 | 2 | Submit button gradient end |
| `#9A3412` | orange-800 | 2 | Card-orange gradient end, submit button gradient mid |
| `#7C2D12` | orange-900 | 2 | Submit button gradient start |
| `#431407` | orange-950 | 1 | Card-orange border |

#### Green/Emerald Family
| Hex | Tailwind Name | Usage Count | Context |
|-----|--------------|-------------|---------|
| `#D1FAE5` | emerald-100 | 1 | Card-green accent |
| `#10B981` | emerald-500 | 1 | Card-green gradient start |
| `#047857` | emerald-700 | 1 | Card-green gradient mid |
| `#064E3B` | emerald-800 | 1 | Card-green gradient end |
| `#022C22` | emerald-950 | 1 | Card-green border |

#### Violet/Purple Family
| Hex | Tailwind Name | Usage Count | Context |
|-----|--------------|-------------|---------|
| `#EDE9FE` | violet-100 | 1 | Card-purple accent |
| `#8B5CF6` | violet-400 | 1 | Card-purple gradient start |
| `#6D28D9` | violet-700 | 1 | Card-purple gradient mid |
| `#4C1D95` | violet-800 | 1 | Card-purple gradient end |
| `#2E1065` | violet-950 | 2 | Card-purple border, refresh card border |

#### Red Family (MagicButton only)
| Hex | Tailwind Name | Usage Count | Context |
|-----|--------------|-------------|---------|
| `#7F1D1D` | red-900 | 2 | MagicButton gradient start/end |
| `#991B1B` | red-800 | 1 | MagicButton gradient mid |

#### UI / Dark Colors
| Hex | Tailwind Name | Usage Count | Context |
|-----|--------------|-------------|---------|
| `#0d1b2a` | (custom) | 1 | Banner/footer background |
| `#1a1a2e` | (custom) | 1 | Error boundary background |
| `#e8d5b7` | (custom) | 2 | Error boundary text/border |

#### Opacity Variants (from codebase)
| Value | Base Color | Opacity | Context |
|-------|-----------|---------|---------|
| `rgba(120, 53, 15, 0.12)` | amber-900 | 12% | SEO keyword drifter text |
| `rgba(69, 26, 3, 0.85)` | amber-950 | 85% | Modal overlay background |
| `rgba(0, 0, 0, 0.2-0.5)` | black | varies | Box shadows (NOT tokenizable as fills) |
| `rgba(255, 255, 255, 0.1-0.5)` | white | varies | Inset shadows/glows (NOT tokenizable as fills) |
| `rgba(251, 191, 36, 0.3-0.6)` | amber-400 | varies | Gold glow effects, text shadows |
| `rgba(120, 53, 15, 0.1-0.4)` | amber-900 | varies | Shadow effects |
| `rgba(254, 243, 199, 0.5)` | amber-100 | 50% | Radial gradient center, text shadow |
| `rgba(236, 72, 153, 0.5)` | pink-500 | 50% | Adopt badge box shadow |
| `rgba(147, 51, 234, 0.3)` | violet-600 | 30% | Refresh card glow |

**Tailwind class-based opacity variants (from className attributes):**
| Class | Base Color | Opacity | Figma Equivalent |
|-------|-----------|---------|-----------------|
| `text-amber-900/60` | amber-900 | 60% | Decorative vine fill |
| `text-fuchsia-900/30` | fuchsia-900 | 30% | Mandala decoration |
| `text-amber-700/50` | amber-700 | 50% | Corner star decorations |
| `text-amber-700/40` | amber-700 | 40% | Inner frame border |
| `text-amber-800/60` | amber-800 | 60% | Divider lines |
| `text-amber-800/70` | amber-800 | 70% | Example questions label |
| `text-amber-600/60` | amber-600 | 60% | Input placeholder |
| `text-amber-600/40` | amber-600 | 40% | Input decoration star |
| `text-amber-500/60` | amber-500 | 60% | Banner "click to visit" text |
| `text-amber-400/80` | amber-400 | 80% | Banner location text |
| `text-amber-700/60` | amber-700 | 60% | Hashtag text |
| `bg-amber-900/80` | amber-900 | 80% | Close button bg |
| `bg-amber-900/20` | amber-900 | 20% | Adoption CTA hover bg |
| `border-amber-600/30` | amber-600 | 30% | Example question pill border |
| `bg-amber-100/80` | amber-100 | 80% | Example question pill bg |
| `bg-amber-200/80` | amber-200 | 80% | Example question pill hover bg |

## Recommendations (Claude's Discretion Areas)

### Opacity Handling Strategy

**Recommendation: Hybrid approach -- bake critical opacities, apply layer opacity for decorative uses.**

Rationale:
1. **Bake into primitives** for colors that are ALWAYS used at a specific opacity and serve as fills/text:
   - `amber-900/12` (drifter text) -> `#78350F1F` (hex8)
   - `amber-950/85` (modal overlay) -> `#451A03D9` (hex8)
   - `amber-900/60` (vine decoration) -> `#78350F99` (hex8)
   - `fuchsia-900/30` (mandala decoration) -> `#701A754D` (hex8)

2. **Apply at the layer level** for colors used at varying opacities (amber-700 at 40%, 50%, 60% -- use the base variable and adjust layer opacity in Figma).

3. **Don't create variables for shadow/glow rgba values.** These are effect properties, not fill colors. Figma handles them through the Effects panel, not color variables.

This keeps the primitive count manageable (~55-65 variables) while covering every fill/text/stroke color in the codebase.

### Variable Scoping Strategy

**Recommendation: Scope Semantic and Component collections; leave Primitives unscoped.**

- Primitives: ALL_SCOPES (they're the raw palette; let aliasing handle restriction)
- Semantic `text/*`: TEXT_FILL scope
- Semantic `surface/*`: FRAME_FILL, SHAPE_FILL scope
- Semantic `border/*`: STROKE_COLOR scope
- Semantic `icon/*`: FRAME_FILL, SHAPE_FILL scope (icons are shapes)
- Component tokens: Inherit appropriate scope from their semantic alias

This prevents misuse (you won't accidentally use a text color as a background fill) while keeping primitives flexible.

### Variable Panel Organization

**Recommendation: Alphabetical-friendly naming with descriptions.**

Collections ordered:
1. `01 Primitives` (prefixed number ensures it appears first)
2. `02 Semantic`
3. `03 Component`

Within Primitives, groups alphabetize naturally:
- `amber/` (dominant palette, lots of shades)
- `card-green/`, `card-hotpink/`, `card-orange/`, `card-pink/`, `card-purple/`
- `emerald/`
- `fuchsia/`
- `neutral/`
- `orange/`
- `pink/`
- `red/`
- `ui/`
- `violet/`

**Descriptions:** Add a brief description to each semantic/component variable explaining its purpose. Example: `text/primary` -> "Main body text and headings. Amber-900 on light surfaces."

### Grouping Hierarchy

**Recommendation: Maximum 2 levels of nesting.**

- Good: `amber/800`, `card-pink/gradient-start`, `text/primary`
- Too deep: `palette/warm/amber/800` or `component/button/primary/background/default`

Two levels provides enough organization without making the panel tedious to navigate.

## Code Examples

### Creating a Primitive Variable via Figma MCP

Variables are created in the Figma UI via the Variables panel:
1. Open Variables modal (right sidebar or keyboard shortcut)
2. Create collection named `01 Primitives`
3. Click `+ Create variable` -> Color type
4. Name it `amber/800` (slash creates group automatically)
5. Set value to `#92400E`
6. Add description: "Tailwind amber-800. Dark amber used for borders and text."

### Creating an Alias Reference

1. In `02 Semantic` collection, create variable `border/primary`
2. Instead of entering a hex value, click the hex field and select "Library Variables"
3. Navigate to `01 Primitives` -> `amber` group -> select `800`
4. The semantic variable now references the primitive -- changes propagate automatically

### Setting Variable Scope

1. Right-click a variable in the panel
2. Select "Edit variable"
3. Open the "Scope" tab
4. Uncheck "Show in all supported properties"
5. Check only the relevant scopes (e.g., STROKE_COLOR for border variables)

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Figma Color Styles only | Variables + Styles together | Figma Variables release 2023 | Variables handle solid colors; Styles handle gradients and effects |
| Flat style lists | Slash-grouped variable hierarchies | 2023+ | Organized, scalable variable panels |
| Single collection | Multi-collection with aliasing | 2023+ | Clean separation of concerns (primitive/semantic/component) |
| Manual color documentation | Variable descriptions + scoping | 2024+ | Self-documenting design file |
| Plugin-dependent tokens (Tokens Studio) | Native Figma variables | 2023-2025 | No plugin dependency for basic token architecture |
| Custom opacity workarounds | Still a workaround (baked hex8) | Unchanged | Figma still lacks native opacity-on-alias support |

**Current limitations (as of Feb 2026):**
- Figma variables cannot store gradient values (only solid colors)
- No opacity modifier on color variable aliases
- Variables panel sorts alphabetically only (no custom ordering)
- Maximum 5,000 variables per collection (not a concern for this project)

## Open Questions

1. **Figma file current variable state**
   - What we know: The Figma file exists at project ID `kIX8fJJs3PIO6uJTQuNu8l`
   - What's unclear: Whether any variables already exist in the file (MCP tool was permission-denied during research)
   - Recommendation: Check for existing variables at plan execution time. If variables exist, audit them first and build on top rather than replacing.

2. **ErrorBoundary and OrgComparison colors**
   - What we know: ErrorBoundary uses `#1a1a2e`, `#e8d5b7` (non-Tailwind values). OrgComparison page uses review-tool colors (`#4ecca3`, `#e94560`, `#ffd93d`, etc.)
   - What's unclear: Whether these should be included in the Figma design system
   - Recommendation: Include ErrorBoundary colors under `ui/` group (they're part of the live app). Skip OrgComparison -- it's a dev/debug tool page, not user-facing design.

3. **Tailwind classes with opacity vs inline style hex values**
   - What we know: The codebase uses BOTH Tailwind utility classes (e.g., `text-amber-900/60`) and inline hex values (e.g., `color: '#78350F'`). Both resolve to the same underlying colors.
   - What's unclear: Whether the Figma file should track which delivery method is used in code
   - Recommendation: The Figma variables represent the DESIGN INTENT, not the code implementation. Map them to the correct Tailwind equivalent name regardless of how the code delivers the color.

## Estimated Variable Counts

| Collection | Estimated Count | Groups |
|-----------|----------------|--------|
| 01 Primitives | ~55-65 | ~15 groups (amber, pink, orange, emerald, violet, red, fuchsia, neutral, ui, 5x card-*) |
| 02 Semantic | ~20-25 | ~5 groups (text, surface, border, icon, interactive) |
| 03 Component | ~25-30 | ~7 groups (button, input, modal, header, banner, card-name, adopt-badge) |
| **Total** | **~100-120** | **~27 groups** |

This is well within Figma's 5,000-per-collection limit and manageable for a single-page app.

## Sources

### Primary (HIGH confidence)
- [Figma Learn - Create and manage variables and collections](https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables-and-collections) -- Variable creation, groups, scoping, hiding from publishing
- [Figma Learn - Overview of variables, collections, and modes](https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes) -- Collections, groups, modes, capacity limits
- [Figma Learn - Apply variables to designs](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs) -- Variable picker, applying to fills/strokes
- [Figma Developer Docs - VariableScope](https://developers.figma.com/docs/plugins/api/VariableScope/) -- Valid scopes for color variables (ALL_FILLS, TEXT_FILL, STROKE_COLOR, etc.)
- MaybeCat codebase audit -- Complete hex/rgba extraction from all `src/**/*.tsx` and `src/**/*.ts` files

### Secondary (MEDIUM confidence)
- [zeroheight - How to Structure Figma Variables & Design Tokens](https://zeroheight.com/blog/figma-variables-and-design-tokens-part-one-variable-architecture/) -- Three-tier architecture pattern, naming conventions, aliasing between collections
- [Design Systems Collective - 2025/2026 Best-Practice Playbook](https://www.designsystemscollective.com/design-system-mastery-with-figma-variables-the-2025-2026-best-practice-playbook-da0500ca0e66) -- Current best practices, variable types, scoping
- [Figma Forum - Variables: Color alias with alpha/opacity](https://forum.figma.com/suggest-a-feature-11/variables-color-alias-with-alpha-opacity-rgba-ideally-14240) -- Confirmed opacity limitation is still unresolved
- [Figma Forum - Change opacity on referenced color variable](https://forum.figma.com/suggest-a-feature-11/change-opacity-on-a-referenced-color-variable-20641) -- Community workarounds for opacity

### Tertiary (LOW confidence)
- [Medium - How I Organize Variables in Figma (Joey Banks)](https://medium.com/@joeyabanks/how-i-organize-variables-in-figma-8debf7c06f26) -- Slash naming confirmation, group behavior
- [Medium - Too many Figma variables? Try using opacity (Luis Ouriach)](https://medium.com/@disco_lu/too-many-figma-variables-try-opacity-337dcb64fd11) -- Alternative opacity strategy (layer-level)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- Native Figma variables are the only standard tool needed; well-documented
- Architecture: HIGH -- Three-tier pattern is universally recommended across all authoritative sources
- Color audit: HIGH -- Extracted directly from codebase via grep, every hex and rgba value captured
- Opacity handling: MEDIUM -- Workaround is well-understood but is a workaround, not a native solution; may need adjustment during implementation
- Scoping: MEDIUM -- Official docs confirm the API exists but practical experience with scoping in this specific context is limited

**Research date:** 2026-02-07
**Valid until:** 2026-03-07 (Figma variables API is stable; unlikely to change within 30 days)
