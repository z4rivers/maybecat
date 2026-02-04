# Cat Oracle Response Generation Prompt

## Key Learnings

**Nate Bargatze energy works great for cat oracle** - that deadpan "So." delivery. Understated, doesn't try too hard.

**Double Tap Strategy:** Generate content in two passes:
1. **First pass:** Generate open observations/insights (simple truths, no punchlines)
2. **Second pass:** Take the keepers and run them through comedian voice filters

This doubles your yield from good insights and creates variety in delivery.

**What works:**
- Open observations that sit (no setup/punchline)
- Comedian voices on existing truths
- Badass strategic energy (clever, not muscle)
- Insight with bite (funny because true)

**What doesn't work:**
- Cliché factory (kitchen sign energy)
- Setup → punchline format for every response
- Therapy-speak without edge
- Landing the plane too neatly

---

## How to Use
Run each batch separately. Wait for review file, then proceed to next batch.
Each batch = ~20-25 responses = stays under token limits.

---

## BATCH 1: Setup + First 25

```
Read the oracleResponses.ts file (first 500 lines) to understand the style.

Then generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Brutal dating honesty
- Nikki Glaser, Taylor Tomlinson energy
- Sharp observations about relationships, self-deception, modern dating

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Focus: life observations, internal monologue, people-watching, absurdity
- Multiple interpretations welcome (including spicy ones)

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## BATCH 2: Dark & Deadpan

```
Generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Dark one-liners + deadpan absurdism
- Sam Morril, Nate Bargatze, Tig Notaro energy
- Unexpected darkness, matter-of-fact delivery, existential observations

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Categories: existential, cold, chaotic, wise

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## BATCH 3: Meta & Existential

```
Generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Meta-existential spiral
- Bo Burnham, Neal Brennan energy
- Self-aware, fourth-wall adjacent, anxiety as content, performance of wellness

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Categories: existential, meta, chaotic

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## BATCH 4: No-BS Truth

```
Generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Unfiltered truth bombs
- Wanda Sykes, Michelle Wolf, Jerrod Carmichael energy
- Cuts through BS, uncomfortable honesty, boundaries as wisdom

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Categories: cold, judgy, wise, demanding

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## BATCH 5: Chaotic & Unhinged

```
Generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Chaotic energy
- James Acaster, Shane Gillis, Iliza Shlesinger, Katt Williams energy
- Unhinged confidence, party goblin, righteous chaos

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Categories: chaotic, angry, demanding

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## BATCH 6: Angry Everyman + Neurotic

```
Generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Frustrated wisdom
- Bill Burr, Marc Maron, Gary Gulman energy
- Neurotic rage, overthinking, angry but accurate

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Categories: angry, judgy, chaotic, wise

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## BATCH 7: Surreal & Philosophical

```
Generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Weird wisdom
- Julio Torres, Pete Holmes, Maria Bamford energy
- Surreal observations, goofy profundity, mental health absurdism

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Categories: mystical, existential, chaotic, nurturing

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## BATCH 8: Heartfelt & Nurturing

```
Generate 25 NEW cat oracle responses as an HTML review file.

STYLE INSPIRATION (this batch): Unexpected tenderness
- The soft side of all the above - moments of genuine connection
- Sarah Silverman's sincere moments, Hannah Gadsby's truth bombs

RULES:
- All cat perspective
- Short, punchy (1-2 sentences max)
- Avoid: naps, sunbeams, knocking things over, 3am, sitting in boxes
- Categories: heartfelt, nurturing, wise

Output: HTML review file with KEEP/CUT/EDIT buttons and JSON export
```

---

## After All Batches

1. Open each HTML file
2. Mark KEEP/CUT/EDIT on each response
3. Copy JSON exports from each file
4. Combine into single array
5. Add to oracleResponses.ts

---

## Quick Single-Batch Prompt (for ad-hoc additions)

```
Generate 20 cat oracle responses.

Style: [COMEDIAN NAME] energy
Vibe: [one-word like "chaotic" or "brutal" or "tender"]
Avoid: naps, sunbeams, knocking things over, boxes, 3am

Output as JSON array:
[{ "text": "response", "category": "category" }]

Categories: mystical, nurturing, poetic, cold, angry, heartfelt, judgy, chaotic, wise, existential, demanding, meta
```

---

## Double Tap Strategy

Generate content in two passes for better yield:

### Pass 1: Open Observations
```
Generate 20 open observations about life/situations.

NOT:
- Setup → punchline jokes
- Therapy-speak clichés
- Kitchen-sign wisdom
- Neat conclusions

YES:
- Simple truths that sit
- Things you notice and can't un-notice
- Observations without the clever twist
- Let it breathe, don't land the plane

Format: Just the text, keep it short (1 sentence)
```

### Pass 2: Comedian Voices
```
Take these [X] insights and have different comedians say the same thing in their voice:

[paste keepers from Pass 1]

For each insight, give 3-5 versions from different comedian perspectives:
- Their take on the same truth
- Their contrarian spin
- How they'd phrase it

Comedians to try: Nate Bargatze (deadpan), Bill Burr (angry),
Mitch Hedberg (absurdist), Anthony Jeselnik (dark), Tig Notaro (dry),
Marc Maron (neurotic), Jerrod Carmichael (uncomfortable truth)
```

### Why This Works
- Pass 1 finds the kernel of truth
- Pass 2 multiplies it through different deliveries
- Doubles yield from good insights
- Creates variety in tone/category from same source material

---

## Make Boring Cool Strategy

Take obvious truths / clichés and strip the sentimental packaging. Deliver gruff.

### The Formula
1. Start with a boring truth ("you're doing okay", "you tried", "things worked out")
2. Strip the Hallmark energy
3. Say it clipped, gruff, backhanded
4. The support is INSIDE the tough delivery, not wrapped around it

### What Works
```
"Duct tape solution. Duct tape holds."
"Half-assed but whole-hearted. Acceptable trade."
"Failed upward. Trajectory holds."
"Wrong, but in the right direction."
"You overthought it, underprepared, and still landed. Baffling."
"Tolerable. Surprisingly."
"Everyone's winging it. You're just honest about it."
```

### What Doesn't Work
- Frame + cliché ("Memo to self: [nice thing]")
- Mafia/gangster framing (lazy, overdone)
- "Adjective but adjective" formula on repeat
- Landing on the encouragement too hard

### Prompt
```
Generate 20 gruff encouragements. Cloaked wisdom.

Take obvious truths and deliver them tough:
- Clipped sentences
- Backhanded compliments that are actually kind
- Grudging acknowledgment
- The kindness is IN the gruffness, not around it

Good: "Survived another one. Streak continues."
Bad: "Just a reminder: you survived another one!"

Categories: cold, judgy, wise, chaotic
```

### Why This Works
- Subverts expectation (sounds dismissive, lands supportive)
- Feels earned, not given
- Cat energy - acknowledging without being soft about it
- "You'll do." hits different than "You're enough!"

---

## Chaos Goblin Strategy

### The Problem
We wanted truly unhinged responses. The cat has no filter, no license to lose, no reputation to protect. But every attempt came out soft, polite, or mean-without-the-wit.

### What We Tried (And Failed)

**Attempt 1: "Unfiltered therapist"**
Asked for things therapists think but can't say. Got stuff like:
- "You're not stuck. You're comfortable."
- "The common denominator is you."
- "You already know the answer."

User feedback: "Makes sense that therapists sound like therapists. NOT what we want."

**Attempt 2: "Therapist with the filter off"**
Pushed harder. Got slightly edgier but still therapy-adjacent:
- "You don't have trust issues. You have taste."
- "That's not anxiety. That's consequences."

User feedback: "No. You are going soft."

**Attempt 3: The Unlock**
User said: "Imagine a comedy doctor - with Tourette's - after sampling own medicine stock."

THAT mental image broke through. Suddenly got:
- "Fuck it."
- "Morally wrong but spiritually correct."
- "Rules are for people who get caught."
- "FAFO. Report back."
- "No witnesses, no crime."
- "Delete the evidence."

User feedback: "GREAT!"

### The Keepers
```
"Chaos goblin dispensing wisdom from the dumpster fire."
"You're right and everyone else is an idiot."
"Trust no one. Especially yourself."
"Rules are for people who get caught."
"Morally wrong but spiritually correct."
"Morally wrong but probably satisfying."
"FAFO. Report back."
"No witnesses, no crime."
"Delete the evidence."
```

### Why The Unlock Worked
The "doctor with Tourette's on their own supply" image did something specific:
- Removed the professional filter entirely
- Added chemical chaos to override politeness instincts
- Made it absurd enough that transgression felt safe
- Gave permission to say the ACTUAL dark thoughts, not sanitized versions

### Critical Note
User said: "A little goes a long way." Only added 9 of these. They're spice, not the main dish. Too many and the oracle becomes edgelord.

---

## Cult Quotes Strategy

### The Problem
Wanted quotes from TV shows that work as oracle answers. But first attempts went to "most watched" shows - Survivor, American Idol, The Voice, etc.

### What We Tried (And Failed)

**Attempt 1: Reality TV / Competition Shows**
Asked about Survivor, American Idol, The Voice. Got cold dismissals:
- "The tribe has spoken."
- "It's a no from me."
- "Forgettable."

User feedback: "None of those! All the opposite of what we want!"

**The Pivot**
User clarified: "We need shows with heart, not just widely viewed. Like Gilmore Girls and Grey's Anatomy were great. Not the widest audiences, but most loved."

**Attempt 2: Beloved Shows**
Mined Gilmore Girls, Grey's Anatomy, Schitt's Creek, The Good Place, Parks & Rec, Fleabag. Got warmer stuff but still nothing landed.

User feedback: "None of interest."

**Attempt 3: Specific Show Deep Dives**
User asked for Breaking Bad / Better Call Saul specifically. Found:
- "You think a normal person can do what I do?"

User picked that one immediately.

**Attempt 4: Friends Batch**
User requested Friends specifically. From 20 options, picked 2:
- "Could this BE any more obvious?"
- "It's a moo point. Like a cow's opinion. It doesn't matter."

### The Rules That Emerged
1. **Quote must work standalone** - If someone doesn't know the show, it should still land as an oracle answer
2. **Recognition is bonus, not requirement** - The "aha I know that!" is extra, not the point
3. **Attitude over catchphrase** - "We were on a break" = too context-dependent. "Inconceivable" = has attitude alone.
4. **Beloved > Widely Watched** - Shows people LOVE, not shows with biggest ratings. Heart over numbers.

### What Works
```
"That's just like, your opinion, man." (Big Lebowski) - dismissive, works for any question
"As you wish." (Princess Bride) - heartfelt yes, works universally
"Inconceivable." (Princess Bride) - judgy disbelief, standalone attitude
"Allegedly." (Letterkenny) - one word, casts doubt, chaotic
"42." (Hitchhiker's Guide) - absurd non-answer, mystical
"There's always money in the banana stand." (Arrested Development) - cryptic, mystical
"Not great, Bob." (Mad Men) - understated disappointment, judgy
"I've heard it both ways." (Psych) - chaotic non-commitment
"You think a normal person can do what I do?" (Better Call Saul) - cold flex
"Could this BE any more obvious?" (Friends) - Chandler emphasis, judgy
"It's a moo point. Like a cow's opinion. It doesn't matter." (Friends) - Joey wisdom
```

### What Doesn't Work
- **Reality TV dismissals** - "The tribe has spoken" is cold but not witty. Wrong energy.
- **Quotes that need the scene** - "We were on a break" means nothing without Friends context
- **Catchphrases without attitude** - "How you doin'?" is recognition-only, no oracle value

### Shows Worth Mining
**Beloved > Widely Watched. Heart > Ratings.**
- Gilmore Girls, Grey's Anatomy, Schitt's Creek, The Good Place
- Arrested Development, Parks & Rec, The Office, Community
- Breaking Bad, Better Call Saul, Mad Men
- Princess Bride, Big Lebowski
- Fleabag (though most quotes need context)

**Skip:**
- Reality competition (Survivor, Idol, Voice, Drag Race) - dismissal energy wrong for oracle
- Procedurals (NCIS, Chicago Fire) - not quotable in the right way
- Most sitcoms - catchphrases without standalone attitude

---

## What Doesn't Work (Anti-Patterns)

### Therapist Energy (Even "Unfiltered")
We tried multiple times to get "what therapists really think." Every version still sounded like therapy. The framing itself is the problem - the role carries politeness even when you try to strip it.

Example of what we got:
- "You're not stuck. You're comfortable."
- "You don't want advice. You want permission."

These aren't BAD, they're just... therapist. The cat isn't a therapist. Skip this whole angle.

### Reality TV Dismissals
Tried mining Survivor, American Idol, The Voice for quotes. Got cold without wit:
- "The tribe has spoken."
- "It's a no from me."
- "Forgettable."

User feedback: "All the opposite of what we want!" These are dismissals without personality. The cat is cold but clever, not just cold.

### Frame + Cliché
Earlier session tried adding "frames" around boring truths. Like:
- "Memo to self: [nice thing]"
- Mafia/gangster framing around encouragement

User feedback: "Lazy route. Overdone stereotype." Adding a frame around a cliché doesn't transform it. The truth itself needs to be delivered differently, not wrapped differently.

### Adjective-But-Adjective Formula
Pattern like "Wrong but right" / "Broken but whole" works a few times then gets stale fast. User noticed when we leaned on it too hard: "Lost steam."

Use sparingly. Don't make it a formula.
