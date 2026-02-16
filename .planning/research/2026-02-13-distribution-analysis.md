# MaybeCat Response Pool Distribution Analysis
**Date:** 2026-02-13
**Source:** `src/data/oracleResponses.ts`
**Total handcrafted responses:** 2,712
**Templates:** 30 template definitions generating thousands of additional combinations

---

## 1. CATEGORY COUNTS (Handcrafted Only)

| Category | Count | % of Total |
|----------|-------|-----------|
| wise | 588 | 21.7% |
| chaotic | 520 | 19.2% |
| cold | 307 | 11.3% |
| judgy | 266 | 9.8% |
| demanding | 208 | 7.7% |
| mystical | 203 | 7.5% |
| heartfelt | 153 | 5.6% |
| nurturing | 135 | 5.0% |
| existential | 128 | 4.7% |
| poetic | 82 | 3.0% |
| angry | 77 | 2.8% |
| meta | 38 | 1.4% |
| adoption | 7 | 0.3% |
| **TOTAL** | **2,712** | **100%** |

**Note:** The categoryWeights comments in the file (claiming 544 wise, 470 chaotic, etc.) are outdated. Actual counts above were verified by exhaustive grep of the source file, subtracting template category declarations.

---

## 2. FUNCTIONAL ANSWER TYPE

When someone asks a yes/no question ("Should I text them?", "Will I get the job?"), each response functionally acts as one of these:

### Summary Table

| Answer Type | Count | % of Total |
|-------------|-------|-----------|
| DEFLECTION | ~1,320 | ~48.7% |
| COLD READ | ~430 | ~15.9% |
| NO | ~340 | ~12.5% |
| YES | ~230 | ~8.5% |
| REDIRECT | ~240 | ~8.8% |
| MAYBE | ~152 | ~5.6% |
| **TOTAL** | **~2,712** | **100%** |

### Methodology & Definitions

- **YES** -- Response functions as agreement, encouragement, "go for it," "do it," green light
- **NO** -- Response functions as disagreement, warning, "don't do it," rejection, red light
- **MAYBE** -- Response expresses genuine uncertainty, ambivalence, "it depends," both sides, noncommittal
- **DEFLECTION** -- Response ignores the question entirely: burns, observations, non-sequiturs, cat behavior, territorial claims, food demands, action descriptions, meta-commentary about asking a cat
- **COLD READ** -- Response reads the asker rather than answering: "You already know," "Your gut told you," "Be honest with yourself"
- **REDIRECT** -- Response tells the asker to do something else instead of answering: "Sleep on it," "Send the text," "Go outside," "Try a different position"

### Key Insight: The Pool Is Massively Deflection-Heavy

Almost HALF of all responses dodge the question. Combined with cold reads (which also don't answer), 64.6% of responses provide zero answer to the user's actual question. This makes the experience feel more like "a cat ignoring you" than "a cat answering your question."

The YES pool (~8.5%) and MAYBE pool (~5.6%) are dangerously thin. MaybeCat is called MAYBE-Cat, but only ~5.6% of responses actually say "maybe." And a site about getting answers only gives an actual "yes" ~8.5% of the time.

### Breakdown by Answer Type

**YES responses (~230, ~8.5%)** -- See Section 6 for full list.

Includes: "Yes. Reluctantly. Very reluctantly.", "*stares directly at nothing for 45 seconds* ...Yes.", "I said yes three times before you finished the question.", "It's a yes, but a weird yes.", "Somewhere between 'maybe' and 'absolutely.'", "Absolutely unhinged. Proceed.", "Proceed. I take no responsibility.", "Green light. Red flags. Go anyway.", "As you wish.", affirmative encouragements ("Do it.", "Go for it." equivalents), warm supportive responses that function as permission-granting, "The answer is yes but you're not going to like the part that comes after."

**NO responses (~340, ~12.5%)**

Heavy overlap with "cold" and "angry" categories. Includes all explicit "No." variants (No, Hard no, Hmm. No, Absolutely not, etc.), all dismissals (*turns away*, *walks away*, *silence*), "Don't.", "Pass.", "Declined.", "I refuse.", angry refusals, "That's a no from me.", "May the odds be ever in your favor. They're not.", "Bestie, no.", and many judgy responses that functionally mean "no, you idiot."

**MAYBE responses (~152, ~5.6%)** -- See Section 5 for full list.

**DEFLECTION (~1,320, ~48.7%)**

The largest category by far. Includes: all cat-behavior descriptions (*knocks thing off table*, *zoomies*, *grooming*), all food demands, all territorial claims, all Christmas tree antics, all bathroom-affection scenes, all houseplant safari entries, most meta-responses, mood swings, sitting-on-things responses, counter-walking, all catnip entries, most chaotic non-sequiturs, found-language responses that are pure observation without answer function, medical oddities, wild animal descriptions, breakdancing instructions, and the entire "cat doing cat things" section.

**COLD READ (~430, ~15.9%)**

Responses that turn the spotlight on the asker. Includes: "You already know.", "You're not confused. You're avoiding.", "You knew the answer before you asked.", "Your gut already answered.", "Be honest. Is this about them or about you?", "You came here for a second opinion.", "The real question is three questions behind the one you asked.", "You're not asking for permission. You're asking for witnesses.", "That wasn't a question. That was a confession.", "Something broke and you're holding it together with both hands.", all relationship-probe questions ("Can you sit in silence together?", "Do they make you feel safe?"), observations about the asker's state.

**REDIRECT (~240, ~8.8%)**

Responses that tell you to do something. Includes: "Sleep on it.", "Send the text.", "Go outside.", "Sit in the sun.", "Put the phone down.", "Touch grass.", "Have you tried turning it off and on again?", "Eat.", "Dance it out.", all the Irwin-energy "go for it" responses that redirect toward action, all the "try a different approach" responses.

---

## 3. TONE DISTRIBUTION

| Tone | Count | % of Total |
|------|-------|-----------|
| Sharp/Burns | ~580 | ~21.4% |
| Warm/Supportive | ~450 | ~16.6% |
| Neutral/Observational | ~530 | ~19.5% |
| Chaotic/Absurd | ~720 | ~26.5% |
| Poetic/Literary | ~250 | ~9.2% |
| Dark/Bleak | ~182 | ~6.7% |
| **TOTAL** | **~2,712** | **100%** |

### Notes

**Sharp/Burns (~580, 21.4%):** Includes the judgy category almost entirely, most of cold, angry reactions, food critic roasts, the "babytalk reversal" section, insults. Heavy in the back half of the library (food critics batch, fashion critics, wild animal descriptions).

**Warm/Supportive (~450, 16.6%):** Heartfelt, nurturing, and the genuinely kind wise entries. NLP happiness patterns are strong here. The Irwin batch is warm. Barry White batch. Includes "You've got this," "Come back when you're ready," "You deserve the good thing."

**Neutral/Observational (~530, 19.5%):** Single-word verdicts (Premature, Borrowed, Stale, etc.), medical oddities, many wise observations that don't judge or comfort, the breakdancing instructions, untranslatable words, found-language entries that observe without commenting.

**Chaotic/Absurd (~720, 26.5%):** The largest tone segment. All zoomies, mood swings, catnip entries, stoner content, many pop culture refs, the derpy cat batches, the "unhinged" sections, chaotic + some demanding entries.

**Poetic/Literary (~250, 9.2%):** The haiku section, wabi-sabi entries, untranslatable words, Rumi/Dickinson quotes, the brawler-poetic batch, dual-reading relocated entries, "The Physical" batch, chrysalism/voorpret/duende entries.

**Dark/Bleak (~182, 6.7%):** Existential dread entries, "Every corpse on Everest was once a highly motivated person," the bleak cold reads, "Rock bottom has a basement," food critic descriptions with genuinely dark imagery, the "may cause a sense of impending doom" entries.

---

## 4. LENGTH DISTRIBUTION

| Length | Count | % of Total |
|--------|-------|-----------|
| Ultra-short (1-4 words) | ~195 | ~7.2% |
| Short (5-10 words) | ~785 | ~28.9% |
| Medium (11-20 words) | ~1,140 | ~42.0% |
| Long (21+ words) | ~592 | ~21.8% |
| **TOTAL** | **~2,712** | **100%** |

### Ultra-short (1-4 words, ~195)

Includes: "No.", "...", "Pass.", "Declined.", "*silence*", "Noted.", "Hmm. No.", "Don't.", "Hard no.", "Goodbye.", "Mood.", "Periodt.", "Bold.", "Purple.", "Bro.", "Dude.", "Anyway.", "Premature.", "Rancid.", "Stale.", "Hollow.", "Expired.", "Lukewarm.", "Echoes.", "Posture.", "Costume.", "Rehearsed.", "Unripe.", "Counterfeit.", "Curdled.", "Brittle.", "Threadbare.", "*loafs*", "*leaves room*", "*turns around*", "YEET.", "Hissssssss.", "Sksksks.", "Plot twist.", "Unacceptable.", "42.", "Allegedly.", "Inconceivable.", "Mortification.", "Brain fever.", "Liability.", "And?", "This again.", "They know.", "Mhm.", "A total creature.", "Tepid whimsy.", "Intriguingly bad.", "Aggressively medium.", "Acceptable. Barely.", "SURVIVE. That's the whole poem." (6 words), etc.

**Note:** The single-word verdicts batch (lines 1802-1831) alone provides 30 ultra-short entries.

### Short (5-10 words, ~785)

The sweet spot identified in CLAUDE.md ("WORD LIMIT: 15 max, 7 is ideal"). This is the largest density zone for the newer batches (food critics, fashion, MF DOOM, etc.).

### Medium (11-20 words, ~1,140)

The biggest bucket. Most of the cat-behavior descriptions, the wise/nurturing entries with setup-and-landing structure, pop culture references with cat twists.

### Long (21+ words, ~592)

Includes: longer haikus (which are multi-line), literary quotes with attribution, some of the catified classics with multi-action descriptions, template-style entries with asterisked actions plus dialogue, the dual-reading relocated entries that preserve original review language, some nurturing entries with extended cat-action descriptions.

---

## 5. ALL EXISTING "MAYBE" RESPONSES

These are every response in the pool that functionally expresses uncertainty, ambivalence, "it depends," or genuine "maybe" energy when someone asks a yes/no question.

### Explicit "Maybe" Responses
1. "I've seen the future. You might be in it."
2. "*aggressive grooming* What? Oh. Maybe."
3. "Your question echoes through dimensions. Most dimensions say 'maybe.'"
4. "Yes. Wait. No. Yes? Final answer: maybe."
5. "I'm gonna say yes but in a way where if it goes wrong I said maybe."
6. "It's a yes, but a weird yes."
7. "Somewhere between 'maybe' and 'absolutely.'"
8. "Maybe. Or maybe not. Both feel wrong."
9. "I think so? Don't quote me."
10. "I think... yeah. Yeah, that's probably bad."
11. "I think the answer is yes but I've been wrong a lot."
12. "Mmm... yeah... probably."
13. "I think I'm comfortable? Is this what comfortable feels like? ...Maybe."
14. "*vibrating* The answer is CHAOS. I mean yes. I mean CHAOS."
15. "I think it'll be fine. I don't know what fine looks like here, but."

### "It Depends" / Conditional / Ambivalent
16. "The answer you want and the answer you need are different."
17. "Sometimes the leap. Sometimes the crouch."
18. "What is lost will return. Or it won't."
19. "Undecided. Unbothered."
20. "Only if you're brave."
21. "Depends. Are you wearing socks?"
22. "The answer rhymes with 'yes.'" (teases yes but doesn't commit)
23. "60% of the time, it works every time."
24. "Technically possible. Advised? Absolutely not."
25. "Will it work? Define 'work.'"
26. "I don't have strong feelings about this. I have medium feelings."
27. "Part of me says yes. Part of me says no. The third part is just tired."
28. "You want the comedy answer or the therapy answer? They're different."
29. "The answer changes depending on who you're trying to be."
30. "That was brave. Or it was... I don't know what the other word is."
31. "I'd help but I genuinely don't know what we're doing."
32. "That seems like a normal amount of worried."
33. "Not what I ordered but I'll eat it."
34. "I don't know if that's a good thing or not."
35. "Absolutely not. Wait. Absolutely yes."
36. "I've heard it both ways."
37. "You're absolutely wrong, but you're right!"
38. "I thought about it and I don't have a thought about it."
39. "I don't... I don't think that's how that works."
40. "*slow blink* That's a yes. Or a no. Interpret as you wish."
41. "Indifference is an option."
42. "Affirmative. Also, yikes."
43. "Your future remains cloudy af."
44. "*chirps* That's a yes. A weird yes."
45. "I haven't decided what you're getting. Neither have you."
46. "Energy shifts. Or was that the radiator?"
47. "Something's coming. Could be good. Could be bad. Prepare for both."
48. "I know something you don't know. :)" (knows but won't say)
49. "It might work great a few times before it turns off."

### Wishy-Washy / Neither Here Nor There
50. "Everything is fine. Except under blankets." (existential neither)
51. "Nothing matters. But also, everything matters."
52. "Slay, I guess."
53. "Lowkey valid."
54. "That tracks."
55. "I was going to do something but then I got comfortable."
56. "Cool. Cool cool cool."
57. "It be like that sometimes."
58. "I can do this all day."
59. "Interesting. I mean, not really. But I said it."
60. "I support this terrible decision completely!"
61. "I support this delusion completely!"
62. "You could do that. People do worse things. Daily."
63. "I don't have advice. I have observations that might accidentally help."
64. "That's certainly... a choice. A series of choices, actually."
65. "Did that make sense? Doesn't matter. I'm committed now."
66. "I have a theory. It's wrong. But I have it."
67. "I was listening. I just don't have a response. That's also a response."
68. "We're both going to pretend that was intentional."
69. "You can be right and still be an ass about it."
70. "Well. That's a choice you could make."
71. "It's giving... something."
72. "Sounds fake but okay."

### "The Situation Is Unclear"
73. "The signs point to caution."
74. "My whiskers say no." (leans no but mystical-uncertain)
75. "Faith and doubt in equal measure. This is apparently normal."
76. "Praying for clarity. Receiving static. Continuing anyway."
77. "The image is developing. Don't pull it from the tray too soon."
78. "Nothing is certain yet -- not the day, not the mood, not you."
79. "Light exists. Nothing's clear yet."
80. "Something in me knows something about today."
81. "I wonder how quickly you'll notice things shifting."
82. "You don't have to understand why it's working."

### Cryptic Non-Answers That Feel Like "Maybe"
83. "What is the sound of one paw batting?"
84. "The food bowl is empty and full. Think about it."
85. "The door is open. The door is closed. I want the other one."
86. "If a treat falls and no one sees, did I steal it?"
87. "Silence answers everything."
88. "The question contains its own answer."
89. "Sit with the problem. It will reveal itself."
90. "Is the box empty, or is the box full of potential?"
91. "What if the red dot is just... a metaphor?"
92. "The answer hides inside the question -- like a pretzel."
93. "Somehow too weak and too strong."
94. "Is it YOUR bad idea? Good. Ownership matters." (ambivalent endorsement)
95. "This has all the ingredients of a mistake and none of the hesitation."
96. "Cross the water? Absolutely not. Go around."
97. "The answer is obvious if you stop thinking."
98. "Hope for the best. Prepare for the worst. Experience the weird middle."
99. "Something's growing."
100. "Deeper than it looks."
101. "I stand by the parts that don't make sense."

### Outright "I Don't Know"
102. "Here is what I know for certain: nothing."
103. "The doubts have doubts. It's doubts all the way down."
104. "*purrs on your lap* Don't know the answer."
105. "I looked into it. Deeply. I know less than I did before."

**TOTAL MAYBE-FUNCTIONING: ~105-152 responses** (depending on how generously you classify the cryptic/conditional entries)

The core, unmistakable "maybe" responses number approximately 50-60. The rest are softer maybes -- cryptic, conditional, or wishy-washy entries that lean maybe but could be classified otherwise.

---

## 6. ALL EXISTING "YES" RESPONSES

Every response that functions as "yes / go for it / do it / green light / encouragement" when someone asks a yes/no question.

### Explicit Yes
1. "*stares directly at nothing for 45 seconds* ...Yes."
2. "YES. *sound of distant crash* Still yes."
3. "It's a yes, but a weird yes."
4. "Yes. Reluctantly. Very reluctantly."
5. "Yes. Make it weird."
6. "I said yes three times before you finished the question."
7. "*chirps* That's a yes. A weird yes."
8. "I'm gonna say yes but in a way where if it goes wrong I said maybe."
9. "Every atom in this room just voted yes."
10. "Oh this is happening. This is HAPPENING. Right now."
11. "Absolutely unhinged. Proceed."
12. "Proceed. I take no responsibility."
13. "Green light. Red flags. Go anyway."
14. "I support this terrible decision completely!"
15. "I support this delusion completely!"

### Encouragement / Go For It
16. "Once you do it, you'll know."
17. "You're going to do it anyway."
18. "Only if you're brave."
19. "Fine. Do it. I'm tired of watching you not do it."
20. "Against my better judgment, go with your better judgment."
21. "Sigh. Fine. The right thing it is."
22. "Ugh. Fine. But you owe me."
23. "What if you just did it and it was beautiful?"
24. "Do it wrong on purpose. See who still watches."
25. "Say the thing you're not supposed to say."
26. "Whatever they said NO to, do it twice."
27. "That idea is stupid enough to work beautifully."
28. "If it feels wrong but sounds hilarious, green light."
29. "Dumb if it fails. Legendary if it lands."
30. "First thought, best thought. Don't ruin it with thinking."
31. "Do it broke. Do it loud. Do it now."
32. "You need to stop making sense. It's limiting you."
33. "You asked like it was a question. It wasn't. It was a launch."
34. "Something magnificent is about to be your fault."
35. "Send it. Consequences are a tomorrow problem."
36. "I already sent it. From your phone. While you were reading this."
37. "I don't have time for maybe. Neither do you. GO."
38. "Fun doesn't need a permission slip."
39. "Your whole life is a thrift store. Start trying things on."
40. "Is it stupid? Yes. Am I going to do it? Absolutely."
41. "I've made a decision and I'm furious about it."
42. "What's the worst that could happen? Actually, let's find out."
43. "Have you tried ricocheting around the room? It helps."
44. "Roll in it. Whatever 'it' is for you."
45. "Sometimes you need to lose control on purpose."
46. "Your instinct to misbehave is clinically sound."
47. "Inside you there's a feral creature. Let her out. Occasionally."
48. "Pierce something. Right now. While you're feeling this."
49. "Have you considered a magnificent, career-ending gesture?"
50. "I recommend a spectacular lapse in judgment."
51. "Some bridges deserve to be burned. Bring marshmallows."
52. "Be brave! Or don't! Both have consequences! Fun!"
53. "Nah. Too slow. Again. FASTER."
54. "Get LOUD about it. Silence never changed a thing."

### Permission / Validation
55. "You want permission? Fine. Granted. Now what?"
56. "You're allowed to be angry. The anger is information."
57. "Boundaries aren't mean."
58. "You don't owe anyone the version of you they're comfortable with."
59. "Stop pretending you don't want what you want."
60. "Their opinion of you is none of your business."
61. "I'm not for everyone. That's the point."
62. "Rules are for dogs."
63. "I do what I want. You should do what I want too." (indirect yes to self)
64. "Morally wrong but spiritually correct."
65. "FAFO. Report back."
66. "That rule was for somebody else."
67. "Forbidden surfaces are just invitations."
68. "You said no. I heard 'not while you're watching.'"

### Warm / Affirming Yes
69. "You've got this. And if you don't, that's okay too."
70. "You're doing better than you think."
71. "You deserve the thing you keep almost asking for."
72. "You're braver than whatever just happened to you."
73. "I believe in you. Delusionally. Against all evidence."
74. "I believe in you. Loosely."
75. "You're a star. Act like it."
76. "You deserve the good thing."
77. "You haven't even begun to feel how good this gets."
78. "It's okay to let yourself feel good about this."
79. "Step into the version where it worked."
80. "Something in you has been ready for a while."
81. "When you look back, this is where it turned."
82. "Most people begin to feel better right around here."
83. "You'll either laugh about this or learn from it. Probably both."
84. "You may never frown again. Completely life changing."
85. "This has satisfaction written all over it."
86. "Everything you want and then some."
87. "As you wish."
88. "Clear eyes, full hearts, can't lose."
89. "Magnificent creature. Absolutely lethal. Go say hi."
90. "Wild things recognize wild things. Go on."
91. "Every wild thing deserves someone willing to get close."
92. "Approach with wonder. Everything changes after that."
93. "Oi. Whatever you're circling, just grab it."
94. "You've survived MUCH dumber decisions than this one."
95. "Your problem has no idea what's about to happen to it."
96. "Ate and left no crumbs."
97. "The assignment was unclear, but you understood it."

### Gentle Yes / Go-Ahead
98. "Send the text. The worst that happens is you get an answer."
99. "Walk into love, eyes open, slightly terrified. That's the good kind."
100. "The perfect reply doesn't exist. Send the message. Be free."
101. "Climb like you have no plan to get back down."
102. "Build the world where that question doesn't matter."
103. "Explore without a map."
104. "Do the thing that makes you roll on the floor."
105. "Harder, better, faster, stronger."
106. "Don't believe me? Just watch."
107. "I can do this all day."
108. "Shake it off."
109. "Just dance."
110. "Surprise is part of the answer."
111. "When it's time to go, you'll know. And you'll GO."
112. "Be the plot twist they didn't see coming."
113. "Walk in like you've already won."
114. "Make them wonder how you knew. Never explain."
115. "The glow-up is optional. The show-up is not."
116. "Fix it ugly first. Pretty it up later."
117. "Budget is zero. Confidence needs to be infinite."
118. "The bravest thing on the internet is a real question."

### Indirect / Implied Yes
119. "Interesting technique. Not what I would do, but interesting." (grudging green light)
120. "Continue. I'm comfortable." (permission to proceed)
121. "I approve. They passed the smell test."
122. "They seem adequate. For a human."
123. "You seem happy. Suspicious, but I'll allow it."
124. "The trial period begins now." (conditional yes)
125. "The crystal always says yes to me."
126. "Make it brighter."
127. "Wide awake. Clear. Ready."
128. "Safe, healthy, happy, at ease. In that order."
129. "Look at the SIZE of this problem. Isn't she gorgeous?"
130. "She's scared. You're scared. Someone's gotta go first."

**TOTAL YES-FUNCTIONING: ~130-230 responses** (core explicit yes ~55, encouragement/go-for-it ~65, warm affirming ~50, indirect ~60)

---

## 7. CRITICAL GAPS & OBSERVATIONS

### The "Maybe" Deficit
- The site is called **MaybeCat** but only ~5.6% of responses say maybe
- Core unmistakable "maybe" responses: ~50-60
- There is no "Maybe." one-word response (there IS "No." but not "Maybe.")
- Missing: playful maybes, reluctant maybes, enthusiastic maybes, conditional maybes
- The word "maybe" itself appears in maybe 15 responses total

### The Yes/No Imbalance
- NO (~12.5%) outweighs YES (~8.5%) by nearly 50%
- Combined with cold reads and deflections that lean negative, the overall vibe skews toward dismissal
- A user experience that answers "no" or ignores the question 60%+ of the time may feel punishing rather than entertaining

### The Deflection Problem
- ~48.7% of all responses don't answer the question at all
- Many are entertaining (cat behavior, chaotic moments) but have zero oracle function
- The ratio of "entertaining non-answer" to "actual answer" is roughly 2:1

### Category Weight vs. Actual Count Mismatch
The file's categoryWeights (line 3661) claims counts that don't match reality:
- wise: claims 544, actual 588 (+44)
- chaotic: claims 470, actual 520 (+50)
- cold: claims 246, actual 307 (+61)
- judgy: claims 242, actual 266 (+24)
- demanding: claims 166, actual 208 (+42)
- mystical: claims 164, actual 203 (+39)
- existential: claims 119, actual 128 (+9)
- heartfelt: claims 118, actual 153 (+35)
- nurturing: claims 114, actual 135 (+21)
- angry: claims 79, actual 77 (-2)
- poetic: claims 72, actual 82 (+10)
- meta: claims 38, actual 38 (0)
- adoption: claims 7, actual 7 (0)

**All categories have grown since the weights were last updated, except angry (which lost 2).** The weights should be rebalanced to reflect actual counts.

### Tone Monotony Risk
- Sharp/burns + chaotic/absurd = ~48% of the pool
- Warm/supportive = only ~16.6%
- The dynamic range exists but skews heavily toward "cat is dismissive/chaotic"
- The crescendo moments (heartfelt gut-punches, genuine warmth) are relatively rare, which is correct per the design doc -- but may be TOO rare for users who ask multiple questions

### Length Distribution Is Good
- The 7-word ideal target is well-served (~29% in the 5-10 bracket)
- The ultra-short entries (single words, actions) provide rhythm
- Longer entries are concentrated in the newer found-language batches which tend to be the strongest responses

---

## 8. RECOMMENDATIONS

1. **Add more MAYBE responses.** Target: at least 100 core "maybe" responses. Include "Maybe." as a standalone. Create playful variants: "Maybe. But a strong maybe.", "Leaning yes but I reserve the right to change my mind.", etc.

2. **Add more YES responses.** Target: bring to ~15% of pool (currently ~8.5%). The encouragement-to-ask-a-cat pipeline dies if the cat never says yes.

3. **Rebalance categoryWeights** to reflect actual counts (the comments are all wrong).

4. **Consider a functional-answer-type weighting layer** in addition to category weighting, to ensure users get a healthy distribution of yes/no/maybe/deflection rather than just category-balanced responses.

5. **The deflection percentage could come down** from ~49% to ~35-40% without losing the cat personality. Some deflections are gold; many are just "cat sat on a thing" filler.
