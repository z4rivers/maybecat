# Roadmap: MaybeCat Cleanup

## Overview

Clean up the maybecat codebase without changing user-visible behavior. Remove dead code, add safety nets, extract reusable pieces, and add tests. Each phase delivers something verifiable while keeping the live site working.

## Phases

- [x] **Phase 1: Remove Dead Code** - Delete unused variant files and routes
- [x] **Phase 2: Add Safety Net** - Error boundary and safe localStorage parsing
- [x] **Phase 3: Extract Config** - Magic numbers to config file
- [x] **Phase 4: Extract Hooks** - Shared logic from Home.tsx to reusable hooks
- [x] **Phase 5: Extract Components** - Decorative SVGs and modal to components
- [x] **Phase 6: Add Tests** - Tests for critical paths

## Phase Details

### Phase 1: Remove Dead Code
**Goal**: Eliminate unused variant pages and simplify routing
**Depends on**: Nothing (first phase)
**Requirements**: Delete VariantA.tsx and VariantB.tsx
**Success Criteria** (what must be TRUE):
  1. VariantA.tsx and VariantB.tsx no longer exist
  2. App.tsx only routes to Home (no /a or /b)
  3. Site at maybecat.com works exactly as before
**Plans**: 1 plan

Plans:
- [x] 01-01: Delete variant files and clean up routing

### Phase 2: Add Safety Net
**Goal**: Protect the app from crashes with error handling
**Depends on**: Phase 1
**Requirements**: Add error boundary, add try-catch around localStorage/JSON.parse
**Success Criteria** (what must be TRUE):
  1. Error boundary wraps the app and shows fallback on crash
  2. localStorage.getItem + JSON.parse wrapped in try-catch
  3. Corrupted localStorage data doesn't crash the app
  4. Site works exactly as before with valid data
**Plans**: 2 plans

Plans:
- [x] 02-01: Add error boundary component
- [x] 02-02: Safe localStorage parsing with try-catch

### Phase 3: Extract Config
**Goal**: Centralize magic numbers in a config file
**Depends on**: Phase 2
**Requirements**: Extract magic numbers to config (brightness threshold, delays, etc.)
**Success Criteria** (what must be TRUE):
  1. Config file exists with named constants
  2. Home.tsx imports values from config
  3. No hardcoded magic numbers in Home.tsx
  4. All timing and threshold behavior unchanged
**Plans**: 1 plan

Plans:
- [x] 03-01: Create config file and replace magic numbers

### Phase 4: Extract Hooks
**Goal**: Move reusable logic from Home.tsx to custom hooks
**Depends on**: Phase 3
**Requirements**: Extract shared logic from Home.tsx into reusable hooks
**Success Criteria** (what must be TRUE):
  1. useOracle hook handles question/response logic
  2. useCatStorage hook handles localStorage persistence
  3. useDocumentMeta hook in separate file (already exists inline)
  4. Home.tsx is smaller and cleaner
  5. All behavior unchanged
**Plans**: 3 plans

Plans:
- [x] 04-01: Extract useDocumentMeta hook
- [x] 04-02: Extract useCatStorage hook
- [x] 04-03: Extract useOracle hook

### Phase 5: Extract Components
**Goal**: Move reusable UI pieces to component files
**Depends on**: Phase 4
**Requirements**: Extract reusable UI components (decorative SVGs, modal, etc.)
**Success Criteria** (what must be TRUE):
  1. CornerVine, CenterMandala, MysticalStar in src/components/decorative/
  2. NameInputModal in src/components/
  3. Home.tsx imports these components
  4. Visual appearance unchanged
**Plans**: 2 plans

Plans:
- [x] 05-01: Extract decorative SVG components
- [x] 05-02: Extract NameInputModal component

### Phase 6: Add Tests
**Goal**: Test critical paths to catch regressions
**Depends on**: Phase 5
**Requirements**: Add tests for critical paths (API, localStorage, response selection)
**Success Criteria** (what must be TRUE):
  1. Vitest configured and running
  2. Tests for rescueGroups.ts API functions
  3. Tests for localStorage hooks (valid data, corrupted data, missing data)
  4. Tests for oracleResponses.ts (getRandomResponse)
  5. All tests pass
**Plans**: 3 plans

Plans:
- [x] 06-01: Set up Vitest
- [x] 06-02: Test API and data functions
- [x] 06-03: Test hooks

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Remove Dead Code | 1/1 | Complete | 2026-02-02 |
| 2. Add Safety Net | 2/2 | Complete | 2026-02-02 |
| 3. Extract Config | 1/1 | Complete | 2026-02-02 |
| 4. Extract Hooks | 3/3 | Complete | 2026-02-02 |
| 5. Extract Components | 2/2 | Complete | 2026-02-02 |
| 6. Add Tests | 3/3 | Complete | 2026-02-02 |
