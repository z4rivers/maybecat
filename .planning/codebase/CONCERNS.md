# Codebase Concerns

**Analysis Date:** 2026-02-06

## Critical Bugs

**safeTrack() infinite recursion:**
- Files: `src/pages/Home.tsx` (line 6-9), `src/hooks/useOracle.ts` (line 6-11)
- Issue: `.then(({ track }) => safeTrack(event, data))` calls itself instead of `track(event, data)`
- Impact: All analytics events silently fail with stack overflow (caught by try/catch)
- Fix: Change `safeTrack(event, data)` to `track(event, data)` in the `.then()` callback
- Also: Function is duplicated in 2 files — should be extracted to shared utility

## Tech Debt

**Home.tsx monolith (682 lines):**
- File: `src/pages/Home.tsx`
- Issue: Single component handles cat selection, carousel, oracle card, brightness analysis, question input, response display, name modal, analytics
- Impact: Hard to test individual pieces, hard to modify without side effects
- Fix approach: Extract `useBrightnessAnalysis()` hook, `<CatCarousel />`, `<OracleReadingCard />` components

**Duplicate safeTrack function:**
- Files: `src/pages/Home.tsx`, `src/hooks/useOracle.ts`
- Issue: Identical function defined in both files
- Fix: Extract to `src/utils/analytics.ts`, import in both

**NameInputModal unsafe DOM query:**
- File: `src/components/NameInputModal.tsx`
- Issue: Uses `document.querySelector('input[type="text"]')` instead of React ref/state
- Impact: Fragile if another text input exists on page
- Fix: Use useRef or controlled state

## Security Considerations

**localStorage JSON parsing without schema validation:**
- File: `src/services/rescueGroups.ts` (getCachedCats)
- Risk: Corrupted or manually edited localStorage could return invalid data structures
- Current mitigation: try-catch around JSON.parse
- Recommendation: Add property existence checks before accessing `.timestamp` and `.cats`

**File upload size not validated:**
- File: `src/pages/Home.tsx` (handleImageUpload)
- Risk: Large images (>5MB) convert to base64 (33% larger), may exceed localStorage quota
- Current mitigation: `safeSetItem()` silently fails on quota overflow
- Recommendation: Add file size check before FileReader conversion, show user feedback

## Performance Bottlenecks

**Oracle responses loaded entirely at startup:**
- File: `src/data/oracleResponses.ts` (2830 lines, ~800 responses)
- Problem: All responses imported as static module, included in initial bundle
- Impact: Minimal — text data compresses well, no runtime performance issue

## Fragile Areas

**Carousel with circular wrapping:**
- File: `src/pages/Home.tsx` (getVisibleCats, lines 79-87)
- Why fragile: Modulo arithmetic with dynamic array length
- Common failures: Empty array (division by zero), array length < VISIBLE_CATS
- Test coverage: Not tested

**Image brightness analysis:**
- File: `src/pages/Home.tsx` (analyzeImageBrightness, lines 91-133)
- Why fragile: Canvas-based pixel analysis, CORS-dependent
- Safe modification: Already wrapped in try-catch, skips external URLs
- Test coverage: Not tested

## Missing Features

**No image error handling:**
- File: `src/pages/Home.tsx` (line 520-525)
- Problem: Cat photo `<img>` has no `onError` handler
- Impact: Broken CDN URLs show browser default broken image icon

**Poor accessibility:**
- Files: `src/pages/Home.tsx`, `src/components/NameInputModal.tsx`
- Missing: role="main", role="status" on thinking state, role="dialog" on modal, aria-busy, `<label>` for inputs

**No production error reporting:**
- Problem: No Sentry/LogRocket — errors only visible in user's browser console

## Test Coverage Gaps

**Components not tested:**
- What's not tested: All React components (decorative, oracle, modal, error boundary)
- Priority: Low (mostly presentational)

**User flows not tested:**
- What's not tested: Full cat selection → question → response cycle
- Priority: Medium

---

*Concerns audit: 2026-02-06*
*Update as issues are fixed or new ones discovered*
