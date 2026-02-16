# Project Instructions

## What MaybeCat Is

A cat answers your life questions. Users ask ("Should I text them?", "Will I get the job?") and a real adoptable shelter cat answers. Maybe. The cat is the expert — 10,000 years of judging humans. The only hedge is "maybe."

**Positioning:** Advice with a voice. NOT an oracle, NOT a fortune teller, NOT mystical. A cat with opinions and no filter. Wingman energy, not Zoltar energy. See `.planning/seo-research/STRATEGY.md` for the full competitive research.

**THE EXPERIENCE IS THE BOMB.** Not every response needs to be a knockout — the *experience* does. Like a great song, you need rhythm to make the crescendos hit. Dynamic range matters.

**Response tiers:**
- **Crescendos** — Hilarious, bizarre, OR heartplucking truth bombs. Screenshot-worthy. "THE CAT JUST READ ME."
- **Solid rhythm** — Clever, on-brand, keeps the energy. Not trying to be the moment, but earns its place.
- **Both matter.** If every response is a 10, nothing is.

**What it's NOT:**
- Safe or predictable
- "Old person on couch" energy
- Generic wisdom
- Forgettable filler

**Voice & response craft:** Use `/dark-funny` skill for voice details, inspiration voices, and response requirements. See `.planning/CAT-VOICE-GUIDE.md` for additional voice guidance.

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

## Content Guidelines

See `/dark-funny` skill and `.planning/CAT-VOICE-GUIDE.md` for voice and content rules.
