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
