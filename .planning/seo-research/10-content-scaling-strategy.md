# Content Scaling Strategy: The Void With Voice
*Compiled: 2026-02-09*

## The Core Idea

People ask questions into the void and get 2,000-word articles, therapy-speak, or 47 Reddit comments. MaybeCat gives them one sharp line from a cat that didn't wait to be invited.

**The cat inserts itself where not asked.** That's the most cat thing possible. Nobody invited the cat. The cat showed up anyway. The cat has opinions. Any question, anywhere — the cat has a take on it. Whether you wanted it or not.

---

## Category Coverage

All fair game. The cat doesn't have boundaries:

1. **Relationships** — dating, breakups, exes, crushes, marriage, friendships
2. **Career** — quitting, starting, staying, asking, risking
3. **Money** — spending, saving, investing, "is it worth it"
4. **Health** — anxiety spirals, symptom-searching, "am I okay"
5. **Identity** — sexuality, self-worth, "am I normal", "who am I"
6. **Existential** — meaning, purpose, "what's the point", late-night spirals

The seven core emotional domains across all void questions:
- **Relationship Security** (Does he/she love me? Should I stay?)
- **Self-Worth & Identity** (Am I good enough? Am I normal? Who am I?)
- **Life Direction** (What should I do with my life? Is this it?)
- **Emotional Health** (Am I depressed? Why do I feel this way?)
- **Decision-Making** (Should I? Is it worth it? Can I change?)
- **Fear & Doubt** (Will I ever? Will this work? Can I trust them?)
- **Meaning & Purpose** (What's the point? Does it matter?)

---

## Question Source Mining

### Primary Sources

**Reddit — the goldmine:**
- Fully browsable without an account
- Google made a deal with Reddit in 2024 to surface it more in search — Reddit IS where Google sends people for these questions
- Key subreddits: r/AmItheAsshole, r/relationships, r/advice, r/NoStupidQuestions, r/TooAfraidToAsk, r/DoesAnybodyElse, r/AskReddit
- Search "should I" on any of these → thousands of real human questions
- Sorted by upvotes = sorted by "most people had this same question"

**Quora:**
- Literally a question site, fully public
- Good for finding question patterns that repeat

**AnswerThePublic.com:**
- Visualizes Google autocomplete questions as a map
- Shows what people actually type

**AlsoAsked.com:**
- Maps the "People Also Ask" chains from Google
- Shows how questions connect to each other

**Google autocomplete itself:**
- Type "should I" and watch what fills in
- Real-time view of what people are searching right now

### Less Useful
**Twitter/X** — Statement-driven, not question-driven. People tweet opinions, not questions. More locked down since Musk (API expensive). Not worth mining for questions.

---

## Path to 10,000 Responses

Current state: ~800 responses, 12 categories + templates.

Target: 10,000. This is a QUALITY number. 100,000 is beyond what we could curate and the site would just be chat-with-a-cat AI jibberish.

### The Bottleneck
Not generation — it's review. At the current hit rate (~20-25% kept), getting to 10K means reviewing ~40,000 candidates.

### Three Levers

**1. Handcrafted responses (expand from 800 → ~2,000)**
- Batched review sessions like the Feb 2026 work
- Best hit rate categories: dual-reading, heartstrings, unhinged
- Lessons learned: depth > punchlines, sentences with teeth > one-word innuendo, twisted narratives > original observations

**2. Templates (~5,000 from 50 templates)**
- The template system (oracleResponses.ts) combines setup slots x punchline slots
- One template with 10 setups and 10 punchlines = 100 possible responses
- You only review ~20 individual lines instead of 100 full responses — 5x more efficient
- Right now there are a handful of templates
- If there were 50 well-crafted templates averaging 100 combinations each = 5,000 responses from a reviewable amount of individual lines

**3. Question-bucketed responses (~3,000 across 8-10 buckets)**
- Right now every question gets the full random pool
- If responses were tagged by question-type (relationship, career, existential, food, money, the cat itself), you could have 2,000 "general" responses + 1,500 spread across 8-10 question buckets
- The EFFECTIVE library feels much bigger because the responses land more often
- "Evidence suggests otherwise" hitting on a relationship question is worth 10 generic randoms
- Lets you be MORE specific without being repetitive — system is smarter about when to surface what

### Realistic Breakdown
| Source | Count | Review Load |
|--------|-------|------------|
| Handcrafted | ~2,000 | Batched review sessions |
| Templates | ~5,000 | Review individual slot lines (~1,000 lines) |
| Question-bucketed | ~3,000 | Category-specific review sessions |
| **Total** | **~10,000** | |

---

## Quality Bar

This is non-negotiable. The quality bar from Feb 2026 response sessions:

- Surface humor/punchlines don't land — need depth and layers
- One-word innuendo too obvious. Sentences with teeth work.
- Fortune cookie positivity = zero cat attitude. Dead on arrival.
- Dating/adoption cliche punchlines = lazy. Need REAL observations underneath.
- Strip the landing. Let it breathe. Always trim shorter.
- Cult lyrics work when layered as cat answers (Mitski, The Smiths). Famous greatest hits don't.
- Twisted narratives > original observations (flip what everyone's heard)
- Young comedian energy (Kat Bird etc) — redefining narratives, not recycling them
- Best hit rate: dual-reading (G-surface / X-underneath) — 7/30 kept

**The standard:** Every response must work as an oblique answer to an unknown question. Multiple interpretations. Every word earns its place. Curated, not generated.

---

## The Cat Philosophy

The cat doesn't wait to be invited. The cat sits on your keyboard while you're trying to Google "am I being gaslit" and says something that hits harder than the 2,000-word Psychology Today article.

What the cat does that Google results can't:
- Names the feeling directly (cuts through therapy-speak)
- Is oblique but honest (the answer to "Does he like me?" could be devastating or hilarious)
- Offers perspective shift (not "you should text him" but a reframe that catches you off-guard)
- Is SHORT (nobody wants 2,000 words at 3 AM)
- Sounds like someone who gets it (not Google, not a therapist, not an advice column)

What the cat doesn't need to do:
- Predict the future
- Give universal advice
- Apply clinical frameworks
- Hedge with disclaimers

---

## See Also
- `09-void-questions.md` — Full research on the 7 void categories, volume data, 150+ question list
- `STRATEGY.md` — Overall SEO strategy and competitive landscape
- `.planning/CAT-VOICE-GUIDE.md` — Voice guidance for response writing
