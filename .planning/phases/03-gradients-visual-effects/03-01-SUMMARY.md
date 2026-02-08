---
phase: 03-gradients-visual-effects
plan: 01
subsystem: design-tokens
tags: [figma, tokens-studio, gradients, shadows, box-shadow, text-shadow, w3c-dtcg]

# Dependency graph
requires:
  - phase: 01-color-foundations
    provides: Primitive color tokens (amber, pink, orange, emerald, violet, card-* groups)
provides:
  - 12 linear gradient tokens for Figma fill styles
  - 24 shadow effect tokens for Figma effect styles
  - Updated manifest with 6 registered collections
affects: [03-02-PLAN, phase-04-assets, phase-05-components]

# Tech tracking
tech-stack:
  added: []
  patterns: [multi-layer-shadow-arrays, gradient-token-references, w3c-dtcg-effects]

key-files:
  created:
    - scripts/figma-tokens/gradients.json
    - scripts/figma-tokens/effects.json
  modified:
    - scripts/figma-tokens/manifest.json

key-decisions:
  - "Used $type: color for gradients (CSS linear-gradient values) rather than a custom gradient type, matching Tokens Studio expected format"
  - "Used $type: boxShadow for both box-shadow and text-shadow tokens, with layer arrays for multi-layer shadows"
  - "Numbered collections sequentially (05, 06) following existing 01-04 pattern"

patterns-established:
  - "Multi-layer shadows: use JSON arrays with objects containing x/y/blur/spread/color/type fields"
  - "Gradient token references: use {group.key} syntax pointing to primitives collection"
  - "Collection numbering: sequential XX prefix in manifest.json"

# Metrics
duration: 3min
completed: 2026-02-08
---

# Phase 3 Plan 1: Gradient & Effect Token Files Summary

**12 linear gradient tokens and 24 shadow effect tokens in W3C DTCG format, referencing Phase 1 primitives, registered in Tokens Studio manifest**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-08T14:40:46Z
- **Completed:** 2026-02-08T14:43:49Z
- **Tasks:** 2
- **Files created/modified:** 3

## Accomplishments
- Created gradients.json with 12 linear gradient tokens covering page background (GRAD-01), 7 card gradients (GRAD-02), 3 button gradients (GRAD-03), and 1 decorative divider
- Created effects.json with 24 shadow tokens: 15 box-shadow (EFFECT-01) + 8 text shadow (EFFECT-02) + 1 utility shadow, with multi-layer shadows using array format
- Updated manifest.json from 4 to 6 collections, adding 05 Gradients and 06 Effects
- Verified all 29 unique gradient token references resolve to existing primitives.json keys

## Task Commits

Each task was committed atomically:

1. **Task 1: Create gradients.json and effects.json** - `5405ecd` (feat)
2. **Task 2: Update manifest.json to register new collections** - `e70fe7b` (feat)

## Files Created/Modified
- `scripts/figma-tokens/gradients.json` - 12 linear gradient tokens with primitive token references
- `scripts/figma-tokens/effects.json` - 24 shadow effect tokens (box-shadow + text shadow)
- `scripts/figma-tokens/manifest.json` - Added 05 Gradients and 06 Effects collections

## Decisions Made
- Used `$type: "color"` for gradient tokens with CSS `linear-gradient()` values, as this is the format Tokens Studio expects for fill style generation
- Used `$type: "boxShadow"` for both box-shadow and text-shadow tokens, following Tokens Studio conventions where text shadows use the same schema
- Gradient stops reference Phase 1 primitive tokens using `{group.key}` syntax (e.g., `{pink.500}`, `{card-pink.gradient-start}`) for single-source-of-truth color values

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required. User imports the JSON files via Tokens Studio plugin in Figma.

## Next Phase Readiness
- All gradient and effect tokens ready for Tokens Studio import into Figma
- Plan 03-02 (if it exists) can proceed with additional visual effect tokens or Figma import verification
- Phase 4+ components can reference these gradient and effect tokens

---
*Phase: 03-gradients-visual-effects*
*Completed: 2026-02-08*

## Self-Check: PASSED

- [x] `scripts/figma-tokens/gradients.json` exists on disk
- [x] `scripts/figma-tokens/effects.json` exists on disk
- [x] `git log --oneline --all --grep="03-01"` returns 2 plan commits (5405ecd, e70fe7b)
