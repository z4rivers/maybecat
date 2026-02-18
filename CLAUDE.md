# MaybeCat

A cat answers your life questions. Users ask ("Should I text them?", "Will I get the job?") and a real adoptable shelter cat answers. Maybe. The cat is the expert — 10,000 years of judging humans. The only hedge is "maybe."

**Positioning:** Advice with a voice. NOT an oracle, NOT a fortune teller, NOT mystical. A cat with opinions and no filter. Wingman energy, not Zoltar energy.

**The bigger picture:** A cat meme machine with heart. Humor, surprise, cleverness — but also warmth, encouragement, love. Full emotional range so answers surprise in ALL directions. The cat doesn't know what you asked — the magic is that your brain does the work. The meme is the door, the real adoptable cats are what's behind it.

**Live site:** maybecat.com
**Stack:** React 19 + TypeScript + Vite 7 + Tailwind v4 + Framer Motion, deployed on Vercel

---

## Current State

**Last updated:** 2026-02-18

### Active workstreams

**Response library** — Primary focus. 2,379 responses across 13 categories in `oracleResponses.ts`, plus dynamic template generation (12% of requests). Ongoing sprint since Feb 11: 80+ batch review files, comedian voice filters, found language mining, concept mashups. Pool audit (`.planning/response-pool-audit-2026-02-13.md`) identified gaps driving current work. Tonal expansion underway — adding more warmth, encouragement, positivity alongside existing edge.

**Design system (Figma)** — Phase 3 of 10, paused since Feb 8. Color foundations and typography done. Gradients/effects token files created, Figma import pending. Blocked by: Figma MCP is read-only, variable creation requires manual Tokens Studio import. Full state: `.planning/STATE.md`

**SEO** — Strategy complete. Competitive research across 9 categories in `.planning/seo-research/`. Content scaling plan exists but not yet executed.

**Share card** — Built and functional. Canvas-based rendering (1080x1350), mobile Web Share API, desktop PNG download. Components: `ShareCard.tsx`, `useShareCard.ts`, `renderShareCard.ts`.

### What just happened
- Response generation sprint (Feb 11-18): 80+ batches, found language breakthrough, comedian voice filters
- Pool grew from ~800 to 2,379 responses across 13 categories
- Share card feature completed
- Tonal direction clarified: full emotional range, meme with heart

### What's next
- Continue tonal expansion — more warmth, fun, encouragement, positivity
- Fill response gaps from audit (yes/no mastery, high-stakes maybes, physical cat behaviors)
- Found language mining (Reddit, Edinburgh Fringe, comedian descriptions)
- Resume design system Phase 3 Plan 2 (Figma token import)

---

## Key Decisions

- **Dynamic range over consistent 10s** — The experience is the bomb, not every response. Crescendos (screenshot-worthy) + solid rhythm (keeps energy). Like a great song.
- **CS_Frame as foundational brand shape** — Celestial Seasonings ornate blob anchors icons, containers, brand marks
- **Extract from live site, don't recreate** — Live CSS is source of truth for all visual elements
- **Figma variables, 3-tier architecture** — primitive → semantic → component color tokens
- **Figma MCP is read-only** — Claude generates JSON, user imports via Tokens Studio plugin
- **Response format** — `oracleResponses.ts` with `{ text, category }` structure. 13 categories, weighted selection. 31+ cat archetypes defined in `/maybecat-voice` skill.
- **Real cat photos only** — Never illustrated characters. Design accommodates photo placement.
- **Maximalist energy preserved** — If "cleaner" kills the vibe, find another way.

---

## Voice & Content

**THE EXPERIENCE IS THE BOMB.** Not every response needs to be a knockout — the *experience* does.

**Response tiers:**
- **Crescendos** — Hilarious, bizarre, OR heartplucking truth bombs. Screenshot-worthy. "THE CAT JUST READ ME."
- **Solid rhythm** — Clever, on-brand, keeps the energy. Not trying to be the moment, but earns its place.

**Full range, all directions.** Dark, warm, weird, encouraging, savage, sweet — the surprise IS the product. Edge and heart amplify each other. If people know MaybeCat is unpredictable, every tap becomes exciting.

**What it's NOT:** Safe, predictable, "old person on couch" energy, generic wisdom, forgettable filler. Also not ONLY edge — warmth that still sounds like MaybeCat, not like a greeting card.

**Deep refs:**
- `/maybecat-voice` skill — voice details, 31 archetypes, inspiration voices, response requirements
- `.planning/CAT-VOICE-GUIDE.md` — the magic formula, structure, tone, what works
- `.planning/ADD-RESPONSES-PROMPT.md` — generation strategy (double-tap, batch process)
- `.planning/GENERATION-METRICS.md` — batch stats, hit rates, comedian filters
- `.planning/famous-cats-reference.md` — 50+ famous cats for voice inspiration

---

## Project Map

### Content & Strategy
| What | Where |
|------|-------|
| Response pool audit | `.planning/response-pool-audit-2026-02-13.md` |
| Generational answers draft | `.planning/GENERATIONAL-ANSWERS-DRAFT.md` |
| Batch review files (83 HTML) | `.planning/batches/` by date |
| Voice research (49 files) | `.planning/research/` |
| SEO strategy & competitors | `.planning/seo-research/STRATEGY.md` + files 01-10 |
| Content scaling plan | `.planning/seo-research/10-content-scaling-strategy.md` |

### Design System
| What | Where |
|------|-------|
| Project definition | `.planning/PROJECT.md` |
| 10-phase roadmap | `.planning/ROADMAP.md` |
| Current phase state | `.planning/STATE.md` |
| Phase plans & research | `.planning/phases/` |
| Design skill | `/design` skill |

### Codebase
| What | Where |
|------|-------|
| Architecture overview | `.planning/codebase/ARCHITECTURE.md` |
| File structure | `.planning/codebase/STRUCTURE.md` |
| Code conventions | `.planning/codebase/CONVENTIONS.md` |
| Testing approach | `.planning/codebase/TESTING.md` |
| API integrations | `.planning/codebase/INTEGRATIONS.md` |
| Known concerns/debt | `.planning/codebase/CONCERNS.md` |

### Features
| What | Where |
|------|-------|
| Share card (built) | `src/components/ShareCard.tsx`, `src/hooks/useShareCard.ts`, `src/lib/renderShareCard.ts` |
| Share card concept & plan | `.planning/share-card-concept.md`, `.planning/SHARE-CARD-PLAN.md` |
| RescueGroups compliance | `docs/RESCUEGROUPS_COMPLIANCE.md` |

### Full directory index
`.planning/INDEX.md` — 223 files cataloged

---

## Output Formatting

When presenting lists for review (cat responses, observations, content batches, etc.):

**Format:** Standalone HTML files with review interface

**Structure per item:**
- Item text in styled block
- Action buttons: KEEP, CUT, EDIT (with textarea)
- Decision tracking stats at top (sticky header)
- **Export: JSON block at bottom of page** (copyable, not file download)

**Styling:**
- Dark theme: `background: #1a1a2e`, accent colors for status
- Keep: `#4ecca3` (green)
- Cut/Reject: `#e94560` (red)
- Edit: `#ffd93d` (yellow)

**Export format:**
- JSON array with `text` and `category` fields (matches oracleResponses.ts structure)
- Keep it simple - voice/edited metadata optional for review but not needed in final export
- Example: `[{ "text": "Know your worth. Then add tax.", "category": "demanding" }]`
