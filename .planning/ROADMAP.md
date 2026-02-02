# Roadmap: MaybeCat Cleanup

## Overview

Clean up the maybecat codebase without changing user-visible behavior. Remove dead code, add safety nets, extract reusable pieces, and add tests. Each phase delivers something verifiable while keeping the live site working.

## Phases

- [ ] **Phase 1: Remove Dead Code** - Delete unused variant files and routes
- [ ] **Phase 2: Add Safety Net** - Error boundary and safe localStorage parsing
- [ ] **Phase 3: Extract Config** - Magic numbers to config file
- [ ] **Phase 4: Extract Hooks** - Shared logic from Home.tsx to reusable hooks
- [ ] **Phase 5: Extract Components** - Decorative SVGs and modal to components
- [ ] **Phase 6: Add Tests** - Tests for critical paths

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
- [ ] 01-01: Delete variant files and clean up routing

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
- [ ] 02-01: Add error boundary component
- [ ] 02-02: Safe localStorage parsing with try-catch

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
- [ ] 03-01: Create config file and replace magic numbers

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
- [ ] 04-01: Extract useDocumentMeta hook
- [ ] 04-02: Extract useCatStorage hook (localStorage logic)
- [ ] 04-03: Extract useOracle hook (question/response logic)

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
- [ ] 05-01: Extract decorative SVG components
- [ ] 05-02: Extract NameInputModal component

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
- [ ] 06-01: Set up Vitest
- [ ] 06-02: Test API and data functions
- [ ] 06-03: Test hooks

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Remove Dead Code | 0/1 | Not started | - |
| 2. Add Safety Net | 0/2 | Not started | - |
| 3. Extract Config | 0/1 | Not started | - |
| 4. Extract Hooks | 0/3 | Not started | - |
| 5. Extract Components | 0/2 | Not started | - |
| 6. Add Tests | 0/3 | Not started | - |
