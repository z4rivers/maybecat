# MaybeCat Technical Roadmap

## Guiding Constraint

**No additional pages. No complexity. Minimal UI changes.**

MaybeCat is a single-page oracle. Keep it that way.

---

## Expansion Area 1: Traffic Monitoring

### Goal
Understand usage patterns without adding UI complexity.

### Approach
- **Vercel Analytics** - Already installed (`@vercel/analytics`)
- **Custom Events** - Track question submissions, answer views
- **No Dashboard** - Use Vercel's built-in analytics dashboard

### Implementation
```typescript
// Already have in App.tsx:
import { Analytics } from '@vercel/analytics/react';

// Add custom event tracking:
import { track } from '@vercel/analytics';

// In handleAskOracle:
track('question_asked', {
  questionLength: question.length,
  hasResponse: !!response
});
```

### Metrics to Track
- Questions asked per day
- Unique visitors
- Return visitors
- Time on page
- Button clicks

---

## Expansion Area 2: Banner Ad Rotation System

### Goal
Rotate sponsor banners in the bottom display bar without backend.

### Current State
- PURRfoot banner is hardcoded in Home.tsx
- 150px fixed height footer area

### Approach: Client-Side Rotation
```typescript
interface Sponsor {
  id: string;
  name: string;
  tagline: string;
  url: string;
  bgColor: string;
  textColor: string;
  logo?: string;
  weight: number; // For weighted random selection
}

const SPONSORS: Sponsor[] = [
  {
    id: 'purrfoot',
    name: 'PURRfoot',
    tagline: 'Heating pads. For cats. Obviously.',
    url: 'https://purrfoot.co',
    bgColor: '#0d1b2a',
    textColor: '#e0e7ff',
    weight: 1
  },
  // Add more sponsors...
];
```

### Rotation Logic
- **Session-based**: Pick sponsor on page load, keep for session
- **Weighted random**: Some sponsors get more impressions
- **Click tracking**: Use Vercel Analytics to track sponsor clicks

### No Backend Required
- Store sponsor data in `src/data/sponsors.ts`
- Rotate client-side
- Track via analytics events

---

## Expansion Area 3: SEO

### Goal
Make MaybeCat discoverable for "ask a cat" / "cat oracle" searches.

### Current State
- Basic meta tags in index.html
- No Open Graph tags
- No structured data

### Implementation Checklist
1. **Meta Tags** (index.html)
   ```html
   <title>Maybe Cat | Ask Your Cat for Wisdom</title>
   <meta name="description" content="The internet's sassiest cat oracle. Ask a question, get feline wisdom. Maybe helpful. Maybe judgment. Definitely cat.">
   ```

2. **Open Graph** (for social sharing)
   ```html
   <meta property="og:title" content="Maybe Cat">
   <meta property="og:description" content="Ask the cat. Get wisdom. Maybe.">
   <meta property="og:image" content="https://maybecat.com/og-image.png">
   <meta property="og:url" content="https://maybecat.com">
   ```

3. **Twitter Card**
   ```html
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="Maybe Cat">
   <meta name="twitter:description" content="The internet's sassiest oracle.">
   ```

4. **Structured Data** (JSON-LD)
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "WebApplication",
     "name": "Maybe Cat",
     "description": "Cat oracle for life advice",
     "url": "https://maybecat.com"
   }
   </script>
   ```

### No Additional Pages Needed
- Single page is fine for SEO
- Meta tags + structured data = sufficient
- Social sharing drives organic traffic

---

## Expansion Area 4: Question Filter → Answer Influence

### Goal
Analyze question content to bias answer selection without showing UI.

### Current State
- Random answer selection from oracleResponses.ts
- Answers have `category` field (demanding, sassy, wise, etc.)

### Approach: Keyword-Based Category Weighting

```typescript
interface QuestionSignals {
  isRelationship: boolean;  // "text", "call", "date", "ex"
  isCareer: boolean;        // "job", "work", "boss", "quit"
  isDecision: boolean;      // "should I", "or", "choice"
  isExistential: boolean;   // "life", "meaning", "happy"
  isTrivial: boolean;       // "lunch", "color", "movie"
}

function analyzeQuestion(question: string): QuestionSignals {
  const q = question.toLowerCase();
  return {
    isRelationship: /text|call|date|ex|love|crush|ghost/.test(q),
    isCareer: /job|work|boss|quit|interview|hired/.test(q),
    isDecision: /should i|or\b|choice|decide/.test(q),
    isExistential: /life|meaning|happy|purpose|why/.test(q),
    isTrivial: /lunch|dinner|color|movie|show|watch/.test(q)
  };
}

function weightCategories(signals: QuestionSignals): Record<string, number> {
  // Return weights for each answer category based on signals
  if (signals.isRelationship) {
    return { sassy: 2, demanding: 1.5, wise: 1 };
  }
  if (signals.isTrivial) {
    return { sassy: 2, chaotic: 2, wise: 0.5 };
  }
  // Default weights
  return { sassy: 1, demanding: 1, wise: 1, chaotic: 1 };
}
```

### No UI Changes
- Analysis happens invisibly
- User never sees category selection
- Just "smarter" feeling answers

### Future Enhancement: Sentiment
Could add basic sentiment detection:
- Anxious questions → more reassuring answers
- Confident questions → more challenging answers

---

## Expansion Area 5: Promotional Graphics

### Goal
Create shareable graphics for social media, stickers, and magnets.

### Assets Needed
- **Social sharing image** (1200x630) - OG image for links
- **Square social** (1080x1080) - Instagram/threads
- **Sticker designs** - Die-cut friendly, transparent background
- **Magnet designs** - Print-ready, CMYK

### Design Constraints
- Must work at small sizes (stickers)
- Readable text at thumbnail size
- Cat + "Maybe Cat" brand clear
- Attitude captured visually

### Storage
- `public/promo/` - Web-ready assets
- `assets/print/` - Print-ready files (not deployed)

---

## Expansion Area 6: Pet Adoption API Integration

### Goal
Show real adoptable cats instead of static image. Give the oracle a face. Drive adoption.

### API Status
**APPROVED** - Have access to pet adoption API.

### Approach: Oracle = Adoptable Cat

```typescript
interface AdoptableCat {
  id: string;
  name: string;
  photoUrl: string;
  shelter: string;
  location: string;
  adoptionUrl: string;
  // Personality traits could influence answers!
  traits?: string[];
}
```

### Integration Pattern
1. **Fetch on load** - Get random adoptable cat
2. **Cache for session** - Same cat answers all questions
3. **Display in cat card** - Replace static image
4. **"Adopt Me" link** - Subtle link to shelter

### UI Changes (Minimal)
- Cat card shows real cat photo
- Cat name displayed (if available)
- Small "Adopt [Name]" link below image
- Footer could show shelter attribution

### Answer Personalization
Cat's personality traits could weight answer categories:
- "Playful" cat → more chaotic answers
- "Calm" cat → more wise answers
- "Sassy" cat → more demanding answers

### Technical Considerations
- **Fallback** - If API fails, use default cat image
- **Caching** - Don't hammer API, cache cats
- **Rate limits** - Respect API limits
- **Attribution** - Properly credit shelter/API

### Impact
- Makes oracle feel alive
- Drives real-world adoption
- Every session = different cat = return visits
- Viral potential: "This cat told me to dump them"

---

## Architecture Principle

**All expansion happens in code, not UI.**

- Traffic: Analytics events (invisible)
- Ads: Data file + rotation logic (footer stays same size)
- SEO: Meta tags in HTML (no page changes)
- Filters: Question analysis (invisible to user)

The cat remains inscrutable. The magic stays hidden.
