# Share Card + Merch Pipeline

## The Insight

Oracle responses are catchy slogans. The share card frames them beautifully. That same frame IS a merch design. One asset, three jobs:

1. **In-app moment** — user sees the response, screenshots it
2. **Share card** — tap to generate a perfectly framed shareable image
3. **Merch design** — same layout goes on shirts, mugs, stickers, magnets

## Share Card Design

Tap the response card to generate a shareable PNG:

- Cat photo (the oracle who dispensed the wisdom)
- Response text (the catchy slogan)
- MaybeCat logo/branding
- Sized for social sharing (1080x1080 or 1080x1350)

**Must look good enough to share AND good enough to wear.** This is the constraint that drives design quality. If it's not merch-worthy, it's not share-worthy either.

## Bottom Bar Layout

```
[ MERCH ]  |  [ MAIN AD STAGE ]  |  [ ADOPT ]
```

- **Left: Merch link** — permanent. Portion of revenue goes to shelters/adoption groups
- **Center: Main stage** — full-width ad serving area, flexible
- **Right: Adoption link** — permanent. Links to current shelter cat's adoption profile

The whole bar tells the story: buy stuff, see ads, save cats.

## Merch Strategy

- **Product types:** Stickers, magnets, shirts, mugs
- **Designs:** Best oracle responses, framed with cat art + MaybeCat branding
- **Revenue split:** Portion goes to partner shelters/adoption organizations
- **Fulfillment:** Print-on-demand (no inventory risk) — Printful, Printify, or similar
- **Connection to app:** "Get this on a shirt" link appears on share card? Or curated merch store with best-of responses

## Implementation Phases

### Phase 1: Share Card (builds the foundation)
- Tap response card → generate PNG
- Canvas/html2canvas or server-side rendering
- Social sharing (native share API on mobile, download on desktop)
- Get the design right — this IS the merch template

### Phase 2: Merch Store
- Set up print-on-demand integration
- Curate best responses for merch collection
- Bottom bar left slot: merch link
- Landing page or external store (Shopify, Etsy, etc.)

### Phase 3: Dynamic Merch
- "Get this on a shirt" from share card
- User-generated merch from their specific oracle reading
- Custom merch with their cat's photo + the response they got

## Key Decisions (TBD)

- Print-on-demand provider (Printful vs Printify vs others)
- Store platform (standalone Shopify, Etsy, or embedded)
- Revenue split model with shelters (flat %, per-item, or tiered)
- Merch design style — match the app's tarot/mystical aesthetic?
- Which responses are merch-worthy vs share-only
