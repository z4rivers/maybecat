# Codebase Concerns

**Analysis Date:** 2026-02-02

## Tech Debt

**Massive Code Duplication Across Pages:**
- Issue: Nearly identical implementations in three page components
- Files: `src/pages/Home.tsx` (743 lines), `VariantA.tsx` (586 lines), `VariantB.tsx` (690 lines)
- Why: Each variant created as a copy with UI tweaks
- Impact: Changes to logic require updates in 3 places, high risk of inconsistency
- Fix approach: Extract shared logic into custom hooks and reusable components, create base Oracle component with variant styling

**Unfinished TODOs:**
- Issue: Incomplete sponsor banner implementation
- Files: `src/pages/VariantA.tsx:581`, `src/pages/VariantB.tsx:685`
- Content: `/* TODO: Add designed PURRfoot banner image here */`
- Fix approach: Complete sponsor banner or remove TODO comments

**Magic Numbers and Hardcoded Values:**
- Issue: Threshold values, delays, and sizes scattered throughout
- Files: `src/pages/Home.tsx:163` (brightness threshold `70`), various delay values (`1500`, `800`, etc.)
- Impact: Difficult to tune behavior, values not documented
- Fix approach: Extract to constants file or config

**Duplicated SVG Components:**
- Issue: CornerVine, CenterMandala, MysticalStar defined identically in multiple files
- Files: `src/pages/Home.tsx`, `src/pages/VariantB.tsx`
- Fix approach: Extract to `src/components/decorative/` directory

## Known Bugs

**Potential JSON.parse Crash:**
- Symptoms: App could crash if localStorage contains malformed JSON
- Trigger: Corrupted localStorage data
- Files: `src/pages/Home.tsx:119`, `VariantA.tsx:70`, `VariantB.tsx:119`
- Workaround: None - crash would occur
- Root cause: `JSON.parse(stored)` without try-catch or validation
- Fix: Wrap in try-catch, validate parsed object schema

## Security Considerations

**Unsafe JSON.parse Without Validation:**
- Risk: Malformed localStorage data crashes app; no type validation on parsed ShelterCat
- Files: `src/pages/Home.tsx:119`, `VariantA.tsx:70`, `VariantB.tsx:119`
- Current mitigation: None
- Recommendations: Add try-catch wrapper, validate with Zod schema

**Missing Input Validation:**
- Risk: File upload accepts any file type/size, name input has no length limit
- File: `src/pages/Home.tsx:192-204` (file handler)
- Current mitigation: Browser file picker provides some filtering
- Recommendations: Validate file type (image/*) and size before processing

**Base64 Images in localStorage:**
- Risk: Large images can exceed localStorage quota (5-10MB typical)
- Files: `src/pages/Home.tsx:197-198`
- Current mitigation: None
- Recommendations: Compress images before storage, add size validation

**DOM Query Without Null Safety:**
- Risk: Could throw error if modal structure changes
- Files: `src/pages/Home.tsx:706`, `VariantA.tsx:506`, `VariantB.tsx:610`
- Code: `document.querySelector('input[type="text"]')`
- Fix: Add null check before calling methods

## Performance Bottlenecks

**Image Brightness Analysis Blocking Main Thread:**
- Problem: Creates canvas, draws image, reads pixels synchronously
- File: `src/pages/Home.tsx:132-166`
- Measurement: Blocks UI during analysis
- Cause: Synchronous pixel analysis on main thread
- Improvement path: Move to Web Worker or use requestIdleCallback

**Inline Style Objects Created Every Render:**
- Problem: Gradient strings, shadow objects recreated each render
- Files: All page components
- Cause: Inline style objects in JSX
- Improvement path: Extract to CSS classes or memoize style objects

**No Memoization of Expensive Components:**
- Problem: Large components re-render on any state change
- Files: `src/pages/Home.tsx`, `VariantA.tsx`, `VariantB.tsx`
- Improvement path: Add React.memo, useMemo for derived values

**Dynamic Import on Every Share:**
- Problem: `await import('html2canvas')` called each time user shares
- Files: `src/pages/Home.tsx:253, 264`
- Improvement path: Import once and cache, or bundle in main chunk

## Fragile Areas

**Complex Image Brightness Detection:**
- File: `src/pages/Home.tsx:132-166`
- Why fragile: Threshold-based approach may fail for edge cases, CORS issues possible
- Common failures: Wrong text color on certain images
- Safe modification: Add tests for various image types before changing threshold
- Test coverage: None

**Modal Without Accessibility:**
- Files: Name input modals in all page components
- Why fragile: Manual focus management, no ARIA attributes, no Portal
- Common failures: Keyboard trap issues, screen reader problems
- Safe modification: Use established modal library
- Test coverage: None

**Router Without Error Boundaries:**
- File: `src/App.tsx`
- Why fragile: Page component errors crash entire app
- Common failures: White screen of death
- Safe modification: Wrap routes in ErrorBoundary component

## Scaling Limits

**localStorage Capacity:**
- Current capacity: ~5MB per origin
- Limit: Base64 images can quickly fill quota
- Symptoms at limit: Silent failure to save, potential data loss
- Scaling path: Compress images, implement quota checking, consider IndexedDB

## Dependencies at Risk

**html2canvas:**
- Package: html2canvas 1.4.1
- Risk: Complex library with rendering edge cases, last major update 2023
- Impact: Share/download functionality breaks if library has bugs
- Migration plan: Monitor for issues, consider modern-screenshot or dom-to-image alternatives

## Missing Critical Features

**No Error Boundaries:**
- Problem: Runtime errors crash entire application
- Current workaround: User must refresh page
- Blocks: Graceful error handling, error reporting
- Implementation complexity: Low - wrap App in ErrorBoundary

**No Explicit Loading/Error States:**
- Problem: API failures silently fall back, user doesn't know what happened
- Current workaround: Console.error only
- Blocks: User awareness of issues
- Implementation complexity: Low - add loading/error state to shelter cat section

**No Accessibility (a11y):**
- Problem: Missing ARIA attributes, no keyboard navigation, no screen reader support
- Current workaround: None
- Blocks: Users with disabilities
- Implementation complexity: Medium - requires audit and fixes throughout

## Test Coverage Gaps

**No Tests Exist:**
- What's not tested: Everything
- Risk: Any change could break functionality undetected
- Priority: High
- Difficulty to test: Medium - need to set up Vitest, mock localStorage and APIs

**Critical Untested Paths:**
1. API failure scenarios and fallback behavior
2. localStorage quota exceeded
3. JSON.parse on corrupted data
4. Image upload validation
5. Share/download across browsers

---

*Concerns audit: 2026-02-02*
*Update as issues are fixed or new ones discovered*
