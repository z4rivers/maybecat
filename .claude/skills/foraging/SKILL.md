# /forage — MaybeCat Ingredient Foraging System

The pipeline that produces original MaybeCat responses by separating FINDING from CRAFTING. Never generate responses directly — forage ingredients, then build chimeras.

## The Pipeline

### Step 1: Forage
Send 3-5 parallel agents into different "aisles" to collect raw language. No cat, no advice — just interesting phrases, structures, emotional moves.

Each agent browses via WebSearch, collects 15-20 finds, writes to `.planning/finds/YYYY-MM-DD-{aisle-name}.md`.

**Find format:**
```
**"the exact raw phrase or sentence"**
Source: where it came from
Hook: why it's interesting (1 line max)
```

### Found Whole — The Exception
Sometimes a foraging agent finds something that's already perfect as a MaybeCat response — layered, has cat energy, multiple readings, a cultural hook. Don't send it through the shredder automatically.

**When to flag a find as "Found Whole":**
- It already works as an oblique answer to an unknown question
- It has dual readings or multiple interpretations
- It has physical/sensory specificity
- It could survive as-is with just a cat voice assignment

**Format in finds file:**
```
**FOUND WHOLE: "the exact phrase"**
Source: where it came from
Hook: why it's already complete
Cat energy: which archetype fits naturally
```

Found Wholes get presented alongside chimeras in the review batch — not ground into parts. If something arrives fully formed, respect it.

### Step 2: Chop Shop
Break finds into functional parts:
- **Structure** — escalation? anticlimax? bathos? format-as-joke?
- **Word choice** — which single word does all the work?
- **Emotional move** — betrayal? resigned self-awareness? disproportionate drama?
- **Compression** — how did they say so much in so few words?

### Step 3: Frankenstein
Combine parts from DIFFERENT source worlds into new creatures:
- Part A structure + Part B language + Part C emotional territory
- Minimum 2 source worlds per response — if traceable to one source, it's a copy
- The combination should produce something that didn't exist in any source

### Step 4: Voice Filter
Run each chimera through a specific comedian/artist delivery:
- How would Tig Notaro pause through this?
- How would Tim Robinson commit to this past the breaking point?
- How would Tia Corine rap this?
- How would Nate Bargatze deadpan this?

The voice isn't decoration — it's the final distortion pass that makes the chimera unrecognizable from its parts.

### Step 5: Cat Voice
LAST step. Take the filtered chimera and assign it to one of the 31 cat archetypes. The cat voice is the final lens, not the starting point.

---

## Aisle Library

### Already Foraged (check `.planning/finds/` for existing hauls)
- Reddit weird language (r/BrandNewSentence, r/suspiciouslyspecific, r/rareinsults)
- Product review rage/devotion (Amazon 1-star and 5-star extremes)
- Obituaries + real estate listings (compressed found language)
- Institutional suffering (DMV reviews, nurse humor, medical charts)
- Warning labels + legal absurdity (court transcripts, disclaimers)

### Unforaged Aisles (fresh territory)
- Dating app bios (the unhinged ones, the brutally honest, the accidentally poetic)
- Restaurant critic takedowns (professional demolition as art form)
- Nature documentary narration (clinical observation of absurd behavior)
- Weather reports from extreme events (apocalyptic language for Tuesday)
- Sports commentary (play-by-play urgency applied to mundane situations)
- Auction/antique language (provenance, patina, "as-is condition")
- Veterinary records (clinical descriptions of animal behavior)
- Flight attendant announcements (safety theater, passive-aggressive professionalism)
- Craigslist missed connections (yearning in 50 words)
- Divorce filings / family court (legal language straining to contain human mess)
- Gardening forums (patience, rot, growth — accidentally profound)
- IT support tickets (the gap between user description and actual problem)
- Parole board transcripts (formal language around messy human reality)
- Cookbooks from the 1950s (the casual brutality of vintage instruction)
- Museum placard voice (institutional authority describing chaos)
- Auto mechanic descriptions (diagnostic language for human problems)
- Airline lost baggage claims (the bureaucracy of loss)

### How to Pick Aisles
- Mix familiar and weird — one Reddit + one institutional + one wildcard
- Don't repeat aisles unless going deeper (raw sources vs. aggregators)
- The weirder the aisle, the more original the ingredients

---

## Agent Prompt Template: Foraging

```
You are a FORAGING agent for MaybeCat. Browse the internet and collect interesting raw language.

## YOU ARE NOT WRITING CAT RESPONSES.
Collect RAW INGREDIENTS. No cats. No advice. Just language that caught your eye.

## Your Aisle: [SPECIFIC AISLE]
[Specific search terms and what to look for]

## What You're Looking For
- Phrases that make you stop and reread
- Sentences where word choice is perfect and unexpected
- Emotional bombs disguised as casual statements
- Accidentally profound constructions
- Language that creates a mental image you can't shake
- Crude, exaggerated, or consequential language that HITS
- Structures where the format IS the joke

## What You're NOT Looking For
- Puns or mechanical wordplay
- Context-dependent memes
- Generic observations or motivational quotes
- Anything safe, middle, or expected

## Output: 15-20 finds to .planning/finds/YYYY-MM-DD-{aisle}.md
```

## Agent Prompt Template: Crafting (Chimera Assembly)

```
You are a CRAFTING agent for MaybeCat. You have raw ingredients from foraging runs. Your job is to build chimeras — original responses assembled from multiple source worlds.

## Read These First
1. The full skill: .claude/skills/dark-funny/SKILL.md (ALL of it — 36KB+)
2. ALL find files in .planning/finds/ (your ingredient shelf)

## The Method
For each response:
1. Pick 2-3 finds from DIFFERENT source files
2. Identify what makes each one work (structure, word, emotion, compression)
3. Combine those functional parts into a new construction
4. Run through a comedian/artist voice filter
5. Assign a cat archetype as the final lens

## Quality Gates
- Every response must be traceable to 2+ source worlds
- If you can't name the parts, it's constructed cleverness — cut it
- 2 sentences max. Fragments welcome.
- Must work as an oblique answer to an unknown question
- Dual readings are gold
- Check dead trope and dead construct blacklists in the skill

## Output: HTML review file in .planning/batches/YYYY-MM-DD/
```

---

## Running the Pipeline

**Quick run (what /forage does):**
1. Launch 3-5 foraging agents in parallel (pick aisles from library)
2. When agents return, launch 1 crafting agent with ALL finds
3. Crafting agent produces HTML review batch
4. User reviews KEEP/CUT/EDIT, exports JSON
5. Agent adds keepers to oracleResponses.ts

**Deep run:**
1. Forage 5+ aisles
2. Browse finds manually, flag favorites
3. Craft from flagged favorites specifically
4. Multiple voice filter passes on the best chimeras
5. Review and add

---

## The Rule

**Found language > constructed cleverness.** Every time. The model's gravity pulls toward the middle. The only counter is specificity from real sources, combined in ways nobody expected. If a response could have been generated without the foraging step, it failed.
