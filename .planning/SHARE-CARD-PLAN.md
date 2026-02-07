# Share Card Implementation Plan

## Current State (Good News)

- `html2canvas` v1.4.1 **already installed**
- `src/config.ts` already has `export.scale: 2` and `export.backgroundColor`
- `OracleResponseCard.tsx` already has `forwardRef` + `maybecat.com` watermark — was designed for this
- `ResponseActions.tsx` already has `onShare` prop wired into its interface
- `src/assets/tarot_frame.png` — ornate gold frame asset exists
- Decorative SVGs exist: `CornerVine`, `CenterMandala`, `MysticalStar`

## Architecture Decision

**html2canvas with a dedicated offscreen render target** (not a screenshot of the visible card).

Why offscreen render, not screenshot:
1. Share card needs different layout (1080x1080 square, self-contained, with branding)
2. Fixed pixel dimensions regardless of viewport
3. No interactive elements, animations, or responsive breakpoints
4. Merch-quality requires pixel-perfect control

## Component Structure

```
src/
  components/share/
    ShareCard.tsx          -- Offscreen render target (the actual image layout)
    ShareCardOverlay.tsx   -- Modal showing preview + share/download buttons
    index.ts
  hooks/
    useShareCard.ts        -- Generates PNG blob, handles share vs download
```

## Share Card Visual Layout (1080x1080)

```
+--------------------------------------------------+
|  [Corner Vine]              [Corner Vine mirrored]|
|                                                    |
|              ✦  MAYBE CAT  ✦                      |
|              --- ☽ ✧ ☾ ---                        |
|                                                    |
|         +----------------------------+             |
|         |     CAT PHOTO (400x400)    |             |
|         +----------------------------+             |
|              [ Cat Name ]                          |
|                                                    |
|         "The oracle response text                  |
|          goes here, beautifully                    |
|          typeset in Georgia serif."                |
|                                                    |
|              --- ☽ ✧ ☾ ---                        |
|              maybecat.com                          |
|  [Corner Vine rotated]     [Corner Vine rotated]  |
+--------------------------------------------------+
```

**Styling:**
- Background: `linear-gradient(145deg, #FEF3C7 → #FDE68A → #FCD34D)`
- Border: 8px solid `#92400E` with inner decorative border
- Header: `Cinzel Decorative` 700, `#78350F`, gold text-shadow
- Response text: Georgia serif bold, `#1C1917`, auto-scaled by length
- Watermark: `maybecat.com` at 40% opacity, small caps

**Font size auto-scaling:**
- Under 30 chars: 56px
- 30-60 chars: 48px
- 60-100 chars: 40px
- Over 100 chars: 34px

## CORS Solution (Critical)

Shelter cat images come from `rescuegroups.org` CDN — cross-origin. html2canvas will fail.

**Solution: Normalize all cat images to data URLs at selection time.**
- Modify `setCatFromShelter` to fetch image → draw to canvas → store data URL
- Resize to max 800x800 before storing (saves localStorage space)
- Uploaded cats already do this via `readAsDataURL`
- Bonus: app works offline after cat selection

## Mobile vs Desktop Sharing

**Mobile:** `navigator.share({ files: [pngFile], text, url })` → native share sheet (Instagram, iMessage, WhatsApp)
**Desktop:** Download PNG + "Copy to clipboard" fallback
**Detection:** `navigator.canShare({ files: [...] })` to pick primary action

## Trigger UX

1. **Primary:** Tap/click the response text → subtle pulse hint after 2s
2. **Secondary:** "Share This Wisdom" button below "Ask Again"

## Implementation Steps (Ordered)

### Step 1: Normalize cat images to data URLs
- Modify `setCatFromShelter` in `useCatStorage.ts`
- Eliminates CORS entirely

### Step 2: ShareCard render component
- New `src/components/share/ShareCard.tsx`
- Offscreen 1080x1080, reuses decorative components
- Self-contained styling for html2canvas

### Step 3: useShareCard hook
- New `src/hooks/useShareCard.ts`
- `generateShareImage()`, `shareImage()`, `downloadImage()`
- Analytics: `share_card_generated`, `share_card_shared`

### Step 4: ShareCardOverlay UI
- New `src/components/share/ShareCardOverlay.tsx`
- Modal with preview, share/download buttons, Framer Motion

### Step 5: Integrate into Home.tsx
- Mount offscreen ShareCard when response exists
- Wire share trigger + overlay
- State: `showShareOverlay`, `shareImageBlob`

### Step 6: Config updates
- `config.shareCard.width/height/fontSizeBreakpoints/hashtags`

### Step 7: Polish
- `await document.fonts.ready` before rendering (Cinzel Decorative must load)
- Loading animation during generation
- Error fallback: "screenshot the screen instead"

## Files Changed

| File | Action | Purpose |
|------|--------|---------|
| `src/components/share/ShareCard.tsx` | Create | Offscreen 1080x1080 render target |
| `src/components/share/ShareCardOverlay.tsx` | Create | Modal preview + share/download |
| `src/components/share/index.ts` | Create | Barrel export |
| `src/hooks/useShareCard.ts` | Create | Image generation + sharing logic |
| `src/hooks/useCatStorage.ts` | Modify | Normalize shelter cat photos to data URLs |
| `src/pages/Home.tsx` | Modify | Wire in share trigger, overlay, offscreen card |
| `src/config.ts` | Modify | Add share card config |

## Risks

| Risk | Mitigation |
|------|------------|
| html2canvas fails | Graceful fallback: suggest manual screenshot |
| Cinzel Decorative not loaded | `await document.fonts.ready` |
| Large data URLs fill localStorage | Cap at 800x800, JPEG 0.8 compression |
| Share card generation slow | Loading spinner + "Crafting your wisdom..." |

## Future: Merch Pipeline

- 1080x1080 works for Instagram, stickers, mugs
- 1080x1350 variant later for Instagram stories, phone cases
- Same component at 3-4x scale for print-quality merch
- "Get this on a shirt" button = natural extension in ShareCardOverlay
