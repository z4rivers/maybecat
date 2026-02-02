# MaybeCat Cleanup

## What This Is

A whimsical web app where users upload or select a cat, ask it a question, and receive cat wisdom. Live at maybecat.com. The site works and people use it—this project is about making the codebase solid without changing what users see.

## Core Value

The site keeps working exactly as it does now. No regressions, no surprises.

## Requirements

### Validated

- ✓ User uploads their own cat image — existing
- ✓ User selects from adoptable shelter cats via RescueGroups API — existing
- ✓ User asks question, receives random cat wisdom response — existing
- ✓ "Thinking" delay before response (1.5-3s first ask, 0.8-1.6s subsequent) — existing
- ✓ Animated response reveal via Framer Motion — existing
- ✓ Share/download response as PNG via html2canvas — existing
- ✓ localStorage persistence for cat image and name — existing
- ✓ Fallback to demo cats when API unavailable — existing
- ✓ Sponsor banner display (PURRfoot) — existing

### Active

- [ ] Delete VariantA.tsx and VariantB.tsx (unused)
- [ ] Extract shared logic from Home.tsx into reusable hooks
- [ ] Extract reusable UI components (decorative SVGs, modal, etc.)
- [ ] Add error boundary so crashes don't kill the whole app
- [ ] Add try-catch around localStorage/JSON.parse operations
- [ ] Add tests for critical paths (API, localStorage, response selection)
- [ ] Extract magic numbers to config (brightness threshold, delays, etc.)

### Out of Scope

- Oracle response content — ~300 messages stay exactly as-is
- Visual design — colors, fonts, layout, animations unchanged
- Stack changes — no new frameworks without solid reason
- New features — this is cleanup only

## Context

**Current state:** Working production site at maybecat.com. Three variant pages exist but only Home.tsx is used. Code is functional but has ~2000 lines of duplication across variants, no tests, no error handling, and fragile localStorage parsing.

**Why this matters:** User gets upset when asking for one adjustment results in major reworking of elements that weren't supposed to be changed. This cleanup must be surgical.

**Codebase mapped:** See `.planning/codebase/` for detailed analysis (7 documents).

## Constraints

- **Minimal blast radius**: When asked to change X, only X changes. No "while I'm here" refactors.
- **Working site**: The live site must keep working at every step. No breaking changes.
- **Plan first**: No code changes without a plan. Changes need solid reasons.
- **Preserve behavior**: User-visible behavior stays identical. Same delays, same animations, same everything.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep Home.tsx, delete variants A & B | Only Home.tsx is used on live site | — Pending |
| Extract logic to hooks, not new frameworks | Minimal change, stays in React paradigm | — Pending |
| Add Vitest for testing | Vite-native, zero config needed | — Pending |

---
*Last updated: 2026-02-02 after initialization*
