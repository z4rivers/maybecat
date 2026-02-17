# Session Handoff — Category Blitz

## What We're Doing
Going through EVERY response in oracleResponses.ts by category, generating spicy comedian-voiced alternatives, presenting side-by-side in HTML review files, applying user decisions. Goal: sharpen the whole pool.

## Creative Direction
- Cat as ALLY against the world (default stance)
- Can roast asker when it helps (tough older sibling)
- When kind, devastatingly kind
- Raise ceiling + fix ratio (too much mild middle)
- Comedy energy: channel SPECIFIC comedian voices from `/dark-funny` skill file
- Nikki Glaser, Ali Wong, Mitch Hedberg, Nate Bargatze, Tig Notaro, Bill Burr, etc.
- Each alternative should use a recognizable comedian's cadence/structure

## BANNED PATTERNS in alternatives
- "You've been [doing X] for [time period]" — ZERO instances
- "That's not [X]. That's [Y]." — overused
- "You keep [doing X] like [comparison]" — vary it
- Starting with "You" — at least half should NOT start with "You"

## Categories Completed
- **wise**: Rounds 1-5 DONE (lines ~400-3669 reviewed + applied)
  - Remaining: ~20-30 wise responses in lines 3669-4000 need round 6
  - Generate alts, build HTML, get review, apply

## Categories Ready for Review (HTML built, waiting for user)
- **chaotic**: `.planning/chaotic-round1.html` — 577 items, full category
- **cold**: `.planning/cold-round1.html` — 238 items, full category

## Categories Not Started Yet
- judgy (~305 responses)
- demanding (~245)
- mystical (~219)
- heartfelt (~172)
- existential (~152)
- nurturing (~143)
- poetic (~98)
- angry (~88)
- meta (~87)
- adoption (~28)

## Workflow
1. Launch 3-4 parallel agents to scan file ranges, find responses of target category, generate spicy alternatives using comedian voices from skill file
2. Merge JSON files, deduplicate, build HTML review file
3. User reviews in browser (KEEP/ALT/EDIT/CUT with keyboard shortcuts)
4. User pastes ONLY changes back (export skips "kept" items)
5. Agent applies changes to oracleResponses.ts, runs build verify
6. PIPELINE: While user reviews round N, generate round N+1

## HTML Review Interface
- Template: any existing `.planning/*-round1.html`
- Dark theme (#1a1a2e), side-by-side (original muted left, alt prominent right)
- Buttons: KEEP ORIGINAL (green), USE ALTERNATIVE (purple), EDIT (yellow), CUT (red)
- All buttons always clickable (can change mind)
- Auto-advance on first decision only
- Edit prefills based on current selection (kept→original, alt→alternative)
- Keyboard: J/K nav, O/A/E/X actions, U undo
- Export: changes only (alt/edit/cut), NOT kept items
- localStorage persistence per review file

## Agent Prompt Template
Point agents to `.claude/skills/dark-funny/SKILL.md` for voice guidance. Give them:
- File range to scan
- Category to find
- Banned patterns
- "Pick specific comedian voice per response"
- Output as JSON to `.planning/{category}-round{N}-batch{M}-alts.json`

## Key Rules
- NEVER read oracleResponses.ts in main context (4200+ lines)
- DELEGATE all generation to agents
- 3+ parallel agents for batch generation
- Always use bypassPermissions mode on agents
- Run generation agents in background
- Build HTML as soon as batches complete
- Keep pipeline ahead of user

## File Locations
- Responses: `src/data/oracleResponses.ts`
- Skill file: `.claude/skills/dark-funny/SKILL.md` (36KB, never main context)
- Voice guide: `.planning/CAT-VOICE-GUIDE.md`
- All review HTMLs: `.planning/{category}-round{N}.html`
- All alt JSONs: `.planning/{category}-round{N}-batch{M}-alts.json`
