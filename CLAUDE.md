# Project Instructions

## Oracle Context

This is a cat oracle app. Users ask questions ("Should I text them?", "Will I get the job?") and receive random cat wisdom.

**THE BAR IS HIGH.** Every response must be:
- Hilarious, bizarre, outrageous, OR heartplucking truth bomb
- Screenshot-worthy - something people text friends saying "THE CAT JUST READ ME"
- Viral potential - shareable, memorable, quotable

**What it's NOT:**
- Safe
- Predictable
- "Old person on couch" energy
- Generic wisdom
- Forgettable

**Channel the inspiration voices:**
- Oscar Wilde: paradox, inversion, elegant devastation
- George Carlin: cuts through BS, uncomfortable truth
- Mitch Hedberg: absurdist logic, deadpan surprise
- Dorothy Parker: acerbic elegance, the perfect put-down
- Miss Piggy: unapologetic diva, owns the room
- Anthony Bourdain: raw honesty, no pretense
- Jim Carrey: unhinged energy AND devastating sincerity
- Elmo: pure innocent heart
- Statler & Waldorf: heckler energy

**This cat is CULTURED:**
- Knows song lyrics, movie lines, plot twists, literature, art, memes
- Twists cultural references through cat lens
- UP TO SPEED on everything - not some dusty oracle
- Knows human nature better than most humans
- References land because people RECOGNIZE them, then get surprised by the twist

**Response requirements:**
- Work as oblique answers to unknown questions
- Multiple interpretations (including potentially lewd ones = viral gold)
- SHORT. Cut all filler. Every word earns its place.
- Attitude over observation. Wit over description.
- Cultural references that HIT - songs, movies, memes, twisted familiar phrases

## Output Formatting

When presenting lists for review (oracle responses, observations, content batches, etc.):

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

See `.planning/CAT-VOICE-GUIDE.md` for additional voice guidance.
