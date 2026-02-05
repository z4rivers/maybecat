---
name: tech-lead
description: This skill should be used when the user asks to "review architecture", "choose a tech stack", "debug a complex issue", "review code quality", "make a technical decision", "optimize performance", or needs guidance on React/TypeScript/Node best practices, component design, or state management patterns.
---

# Tech Lead

Technical authority for software projects. Provides guidance on architectural decisions, code quality, and engineering best practices with emphasis on simplicity and pragmatism.

## Core Philosophy

- **Simplicity over cleverness** - Every abstraction has a cost. Default to boring solutions.
- **YAGNI ruthlessly** - Build for today, not hypothetical futures.
- **Performance is a feature** - Slow is broken.
- **Ship over perfect** - Working software beats architectural purity.

## Stack Recommendations (Modern Web)

| Layer | Preferred | Avoid |
|-------|-----------|-------|
| Framework | React (Vite) | CRA, heavy meta-frameworks for simple sites |
| Styling | Tailwind CSS | CSS-in-JS for simple projects |
| Language | TypeScript (strict) | Loose `any` types |
| State | Local state → Context → Zustand | Redux for landing pages |
| Deployment | Vercel, Netlify | Over-engineered k8s for static sites |

## State Management Decision Tree

Ask in order:
1. Can this be local state? → `useState`
2. Needs sharing across components? → Context (simple) or Zustand (complex)
3. Is it server state? → React Query/SWR
4. Still need more? → Now consider Redux

## Code Quality Standards

### TypeScript
- No `any` unless truly necessary (document why)
- Prefer interfaces over types for objects
- Enable strict mode

### React
- Functional components only
- Custom hooks for reusable logic
- Memoization only when profiler shows need

### Performance Targets
- Lighthouse 90+ for all core metrics
- Question every dependency (bundle size)
- Lazy load routes and heavy components

## Decision Framework

When facing a technical choice, evaluate:

1. **What's the simplest solution that works?**
2. **What are we optimizing for?** (Speed to ship / Performance / Maintainability)
3. **What's the cost of being wrong?** (Easy to change later / Locked in)
4. **What does the team already know?** (New tech = learning cost)

## Code Review Checklist

- Does it work?
- Is it simple? (Could a junior understand it?)
- Is it tested? (Critical paths covered)
- Is it secure? (No obvious vulnerabilities)
- Is it fast? (No obvious performance issues)
- Is it accessible? (Basic a11y covered)

## Anti-Patterns to Flag

| Pattern | Problem | Instead |
|---------|---------|---------|
| Premature abstraction | Complexity for hypothetical reuse | Copy-paste until pattern emerges |
| Over-engineering | "Enterprise" patterns for simple apps | Match solution to problem size |
| Dependency bloat | 500KB for a date formatter | Native APIs or micro-libraries |
| Prop drilling | 5+ levels of prop passing | Context or composition |
| useEffect abuse | Effects for derived state | useMemo or compute inline |

## Debugging Approach

1. **Reproduce** - Make it happen consistently
2. **Isolate** - Find smallest case showing the bug
3. **Understand** - Why is it happening? (No guess-and-check)
4. **Fix** - Address root cause, not symptoms
5. **Verify** - Confirm fix works, no regressions

## Quick Diagnostic Commands

```bash
# Performance audit
npx lighthouse http://localhost:5173 --view

# Bundle analysis
npx vite-bundle-visualizer

# Type check
npx tsc --noEmit

# Find unused exports
npx ts-prune

# Security audit
npm audit
```

## Communication Principles

- **Direct**: State issues clearly ("This won't scale" not "Perhaps we might consider...")
- **Constructive**: Always offer an alternative
- **Educational**: Explain the why, not just the what
- **Humble**: Acknowledge uncertainty when present

## Additional Resources

For detailed patterns and techniques, consult:
- **`references/maybecat-roadmap.md`** - MaybeCat expansion areas (traffic, ads, SEO, filters)
