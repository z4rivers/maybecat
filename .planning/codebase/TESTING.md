# Testing Patterns

**Analysis Date:** 2026-02-06

## Test Framework

**Runner:**
- Vitest 4.0.18
- Config: `vitest.config.ts` (jsdom environment, globals enabled)
- Setup file: `src/test/setup.ts`

**Assertion Library:**
- Vitest built-in expect
- @testing-library/jest-dom matchers (toBeInTheDocument, etc.)

**Run Commands:**
```bash
npm test                    # Watch mode
npm run test:run            # Single run (CI)
```

## Test File Organization

**Location:**
- Colocated with source files (*.test.ts alongside *.ts)

**Naming:**
- `[filename].test.ts` for all tests

**Structure:**
```
src/
  hooks/
    useOracle.ts
    useOracle.test.ts
    useCatStorage.ts
    useCatStorage.test.ts
  services/
    rescueGroups.ts
    rescueGroups.test.ts
  data/
    oracleResponses.ts
    oracleResponses.test.ts
  test/
    setup.ts              # localStorage mock, jest-dom matchers
    smoke.test.ts          # Basic setup verification
```

## Test Structure

**Suite Organization:**
```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

describe('useOracle', () => {
  describe('initial state', () => {
    it('starts with empty question', () => {
      const { result } = renderHook(() => useOracle());
      expect(result.current.question).toBe('');
    });
  });

  describe('setQuestion', () => {
    it('updates question state', () => {
      const { result } = renderHook(() => useOracle());
      act(() => { result.current.setQuestion('Will it rain?'); });
      expect(result.current.question).toBe('Will it rain?');
    });
  });
});
```

**Patterns:**
- `beforeEach(() => localStorage.clear())` for isolation
- `renderHook()` for testing custom hooks
- `act()` for state updates
- Nested describes for logical grouping (feature → behavior)

## Mocking

**Framework:**
- Vitest built-in (vi)
- Custom localStorage mock in `src/test/setup.ts`

**localStorage Mock:**
```typescript
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value; },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
```

**What's Mocked:**
- localStorage (custom implementation in setup)
- Browser APIs not available in jsdom

**What's NOT Mocked:**
- Pure data functions (oracleResponses)
- Internal utilities

## Test Coverage

**Currently Tested:**
- Hooks: useOracle (initial state, setQuestion), useCatStorage (persistence, corruption handling)
- Services: rescueGroups (fallback data structure, required fields)
- Data: oracleResponses (random generation, structure validation, category validation, variety)
- Setup: smoke test (vitest works, localStorage mock works)

**NOT Tested:**
- React components (no component-level rendering tests)
- Pages (Home.tsx, OrgComparison.tsx)
- Image brightness analysis
- Carousel navigation edge cases
- Analytics tracking
- Error boundary behavior
- NameInputModal interactions

**Total:** 27 tests passing (as of Phase 6 completion)

## Test Types

**Unit Tests:**
- Hook state and behavior
- Data function output validation
- Service fallback data structure

**Integration Tests:**
- None currently

**E2E Tests:**
- None currently

---

*Testing analysis: 2026-02-06*
*Update when test patterns change*
