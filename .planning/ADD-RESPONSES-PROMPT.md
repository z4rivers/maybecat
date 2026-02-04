# Cat Oracle Response Generation Prompt

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
