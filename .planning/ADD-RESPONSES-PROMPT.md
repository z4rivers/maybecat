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

**The Unlock:** Self-aware unraveling with a truth bomb at the center

Not random chaos. This is someone who KNOWS and can't stop themselves from saying it. The chaos is the delivery, not the message.

### Specific Structures That Hit

**1. Self-Q&A that commits anyway:**
```
"Is it stupid? Yes. Am I going to do it? Absolutely."
"Do I have a plan? No. Am I worried? Also no."
```
Structure: [Rhetorical Q] [Damning A] [Same pattern] [Defiant conclusion]

**2. Trail of thought that derails:**
```
"I've thought about this a lot. And then I stopped. And now I'm here."
"I had a whole thing prepared. I forgot it. This is better anyway."
```
Structure: [Started strong] [Lost it] [Landed somewhere weird but true]

**3. Self-aware spiral:**
```
"The vibe is off. I am the vibe. I am off. This tracks."
"I'm the problem. But I'm a fun problem."
```
Structure: [Observation] [Implicate self] [Accept it] [Spin it]

**4. Incredulous rhetorical escalation:**
```
"Logic? In THIS economy? In THIS emotional state?"
"Boundaries? With MY attachment style?"
```
Structure: [Reasonable thing]? In THIS [absurd context]? With THIS [worse context]?

**5. False reassurance that proves the opposite:**
```
"Everything is fine. I have no evidence for this. But everything is fine."
"I'm not panicking. This is just how I breathe now."
```
Structure: [Calm statement] [Undercut it] [Commit anyway]

### What Makes It Work
- There's a TRUTH underneath the chaos
- The person knows they're being chaotic
- Commits to the bit instead of hedging
- Lands on defiance, not defeat

### What FAILS
- Random non-sequiturs (no truth underneath)
- "So random lol" energy (trying to be weird)
- Chaos without self-awareness (just annoying)

---

## Badass Strategy

**The Unlock:** Strategic power, not muscle. Moves, not threats.

This isn't tough-guy posturing. It's someone who's already three moves ahead and letting you know.

### Specific Structures That Hit

**1. Reframe the threat:**
```
"I'm not threatening you. I'm telling you what's going to happen."
"I'm not bossy. I have leadership skills you're not ready for."
```
Structure: I'm not [accusation]. I'm [reframe that's worse for you].

**2. Specific power move:**
```
"Be the person they have to schedule a meeting to deal with."
"Be the plot twist they didn't see coming."
```
Structure: Be the [specific, vivid scenario that implies power]

**3. Silence as weapon:**
```
"My silence is not weakness. It's the sound of me planning."
"Work in silence. Let your results start the rumors."
```
Structure: [Quiet thing] isn't [what you think]. It's [actually scarier].

**4. Defiant correction:**
```
"I've read the room. The room is wrong."
"The door wasn't opened for me. I built my own door."
```
Structure: [Acknowledged the situation] [Rejected the situation's terms]

**5. Strategic opacity:**
```
"Make them wonder how you knew. Never explain."
"Walk in like you've already won. Let them figure out why."
```
Structure: [Power move] [Deliberate mystery]

### What Makes It Work
- SPECIFIC scenarios, not vague toughness
- Intelligence over force
- Implies the power rather than stating it
- You can picture the exact moment

### What FAILS
- Generic "be strong" advice
- Muscle-flexing without wit
- Threats without follow-through
- Borrowed lines from movies without the twist

---

## Cult Quotes Strategy

**The Unlock:** Emotional investment > viewership numbers

Pull from things people LOVE, not just things people watched. The devotion makes the reference land.

### What Actually Works

**Beloved shows with quotable moments:**
- Arrested Development: "I've made a huge mistake"
- The Office: "I am Beyoncé always"
- Parks & Rec: "Treat yo self"
- Schitt's Creek: "I'd kill for a good coma right now"
- Friends (the ones people actually quote): "We were on a break"
- Better Call Saul: "I am not crazy!"

**Movies people quote in real life:**
- Princess Bride, Mean Girls, Clueless, The Big Lebowski
- NOT: critically acclaimed films nobody quotes

**Lyrics that hit out of context:**
- Taylor Swift (yes really - massive emotional investment)
- Beyoncé attitude lines
- Fleetwood Mac emotional gut punches

### The Twist
Don't just quote. Twist it:
- Subvert the original meaning
- Apply to unexpected situation
- Cat-ify without losing recognition

**Example transformation:**
- Original: "I've made a huge mistake" (regret)
- Cat twist: "I've made a huge mistake. I regret nothing." (defiance)

### What FAILS
- Deep cuts that reward trivia over emotional connection
- Quotes that need context to land
- "Look how cultured I am" energy

---

## Anti-Patterns (What to Avoid)

### Therapist Energy
```
BAD: "It sounds like you're feeling overwhelmed."
BAD: "Have you considered that maybe you're projecting?"
BAD: "That's valid. Your feelings are valid."
```
**Why it fails:** Too safe, no surprise, reads as condescending. Cat oracle has OPINIONS.

### Reality TV Confessional
```
BAD: "I'm not here to make friends."
BAD: "At the end of the day, it is what it is."
BAD: "I came here for ME."
```
**Why it fails:** Hollow drama, no actual insight. Just borrowed attitude.

### Frame + Cliché
```
BAD: "Memo to self: you're doing amazing"
BAD: "Plot twist: you're the main character"
BAD: "Spoiler alert: it gets better"
```
**Why it fails:** The frame promises cleverness, delivers nothing. The "twist" isn't a twist.

### Kitchen Sign Energy
```
BAD: "Live your best life"
BAD: "Good vibes only"
BAD: "You've got this, queen"
```
**Why it fails:** Zero edge. Could be on a throw pillow. Says nothing.

### Mafia/Gangster Framing
```
BAD: "I'm gonna make you an offer you can't refuse"
BAD: "That's a nice [thing] you got there"
BAD: "Nothing personal, just business"
```
**Why it fails:** Lazy shortcut to "attitude." Overdone. Not actually clever.

### Toxic Positivity
```
BAD: "Everything happens for a reason!"
BAD: "Just stay positive!"
BAD: "You'll get through this!"
```
**Why it fails:** Dismissive. The cat has seen some shit. Forced optimism rings false.
