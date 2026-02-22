# Session Handoff — Dead Weight Audit + Generation Lessons

**Last updated:** 2026-02-21 (second session)

## What Just Happened (Feb 21 Session 2)

### Dead Weight Audit — COMPLETED
- 4 parallel agents audited full response pool (~3,062 responses) against corrected voice principles
- Flagged 100 definite + 37 borderline dead weight responses
- **82 responses CUT** from pool (user reviewed via HTML batch at `.planning/batches/2026-02-21/dead-weight-audit.html`)
- User KEPT movie quotes (Frozen, The Help, FNL, Mean Girls) — agents wrongly flagged these
- 2 responses EDITED (bread tie, cat fur) — agent applying edits now
- Pool is now ~2,980 responses
- TypeScript passes after removals

### Dead Weight Patterns Found
- **Mystical category** was heaviest offender — fortune cookie / horoscope phrasing
- **"[Generic proverb] + [cat thing]"** template — single biggest dead weight factory
- **Cat-rescue-poster copy** — marketing, not voice
- **Late batch (lines 3615-3742)** — different/weaker voice
- **Template system** — 3 dynamic templates have bland slot options (not yet addressed)

### 1 New Response Added
- "That's more of a llama question." (wise) — user-written, added at line 449

### Generation Attempts — ALL FAILED
Three rounds of batch generation, all rejected:
1. **Round 1:** Galifianakis + Aristocats batches — didn't load /maybecat-voice skill. Gave agents stereotype descriptions. Produced clever cold reads and polished aphorisms. User: "thin veneer of stereotype. WASTE OF TIME."
2. **Round 2:** Loaded skill, added divergence seeds + found language requirement. Produced gotcha slogans and life lessons. User: "NOT looking for gotcha slogans. Generic truisms."
3. **Round 3:** Full found language research (ATC, wine, diplomatic protocol, beekeeping). Produced technically interesting relocations with no character. "Resume own navigation" — cool phrase, no cat in it. User: "garbage."

### Critical Lessons Burned Into Memory
- **NEVER generate without loading /maybecat-voice skill first** — no exceptions
- **Agents produce garbage when you skip the process** — but CAN produce quality when full skill is followed
- **Found language is raw material, not the finished product** — it must go through the character (archetypes, attitude, delivery modes)
- **Don't reduce the skill to one mechanic** — found language relocation without character = research exercise
- **ALWAYS build the HTML review file** — never ask "want me to build it?" The review interface IS the deliverable
- **Movie quotes are curated** — they sound great coming from cats, that's the point
- **User's off-the-cuff line beat every agent batch** — "That's more of a llama question" > everything

### CATS Musical Responses — User Hasn't Reviewed Yet
2 responses generated, presented to user but no keep/cut decision made:
- "Touch nothing. Move nothing. When they look for you, you're not there." (cold, Macavity)
- "You keep auditioning for the Heaviside Layer when you could just be warm right now." (wise, Jellicle Ball)

## Outstanding Review Batches
All in `.planning/batches/`:

**From Feb 21 Session 1 (still pending):**
- `2026-02-21/rewrite-feed-me.html` — 46 items, lazy-vs-crafted review
- `2026-02-21/rewrite-profound-cat.html` — 60 items, 24 formula suspects
- `2026-02-21/rewrite-yes-like-and-verdicts.html` — "Yes, like..." rewrites are BAD (trash), single-word verdict section may be useful
- `2026-02-21/yes-energy-stress-test.html` — generated yes-equivalents still to review

**From Feb 20 (still pending):**
- 7 variety update batch review files in `2026-02-20/`

**From Feb 21 Session 2 (DONE or TRASHED):**
- `2026-02-21/dead-weight-audit.html` — DONE. 82 cut, 2 edited, rest kept.
- `2026-02-21/galifianakis-batch.html` — First round, mostly rejected. User kept 0 from agent output, wrote 1 themselves.
- `2026-02-21/aristocats-cats-batch.html` — First round, not reviewed (superseded by failed redo)
- `2026-02-21/found-language-batch.html` — TRASHED. User: "garbage."

## Pending Work
- Apply 2 response edits (agent running now)
- Template system bland slot options — 3 templates identified but not yet cleaned up
- Research files to trash: Buzan, funny scientists
- Fierce Conversations: 20 territories researched, never batched. Keep or trash?

## Hard Rules (Always)
- **NEVER read oracleResponses.ts in main context** (4200+ lines). Send agents.
- **Home.tsx is PROTECTED** by PreToolUse hook. Read `.planning/CAROUSEL-ARCHITECTURE.md` before any changes.
- **ALWAYS load /maybecat-voice skill before ANY generation work.** No exceptions.
- **ALWAYS build the HTML review file.** Don't ask — just build it. The review interface IS the deliverable.
- **The user IS the voice.** Support, don't replace.
- **Movie quotes in the pool are curated and intentional.** Don't flag them as dead weight.
