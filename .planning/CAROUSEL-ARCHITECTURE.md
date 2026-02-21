# Carousel Architecture — Break Glass Recovery Document

> **Source file:** `src/pages/Home.tsx`
> **Last verified:** 2026-02-21
> **Warning:** This carousel has been broken and fixed 15+ times. Every section below exists because something went wrong. Read before touching.

---

## 1. Two Distinct Rotation Modes

The carousel operates in fundamentally different ways depending on screen size. These are NOT variations of the same system — they are two separate mechanical approaches that share card rendering code.

### Desktop/Tablet: Windowed Index Rotation (sm and above, visibleCats > 1)

**Mechanism:** A `carouselIndex` state integer rotates through a virtual ordered ring of `totalSlots` items. Only `visibleCats` items are shown at once as a sliding window over the ring.

```
Ring order: [your_cat, shelter_cat_0, shelter_cat_1, ..., shelter_cat_N, refresh]
              idx 0       idx 1          idx 2              idx N      idx N+1
```

- `totalSlots = shelterCats.length + 2` (line 115) — +1 for Your Cat at index 0, +1 for Refresh at the end
- `nextCat` increments `carouselIndex` by 1 mod `totalSlots` (line 117-119)
- `prevCat` decrements by 1 mod `totalSlots` (line 121-123)
- `getVisibleSlots()` (line 160-189) maps `carouselIndex + i` for `i` in `[0..visibleCats-1]` to card types
- Navigation via chevron arrow buttons (hidden on mobile via `hidden sm:flex`, lines 750-763, 964-977)
- Framer Motion `AnimatePresence mode="popLayout"` (line 789) handles enter/exit transitions as cards rotate

**Key detail:** There is NO auto-rotation timer. Desktop carousel ONLY moves on user click of prev/next arrows.

### Mobile: Triple-Wrap Infinite Scroll (below sm, visibleCats <= 1)

**Mechanism:** The full card set is tripled (`[...base, ...base, ...base]`, line 171) into a native-scrolling `<div>`. The scroll position starts in the middle third. When the user scrolls near either boundary, the position teleports by one set-width to create the illusion of infinite scroll.

```
Layout: [SET A][SET B][SET C]
                 ^ start here (scrollLeft = setWidth)
```

- Base set order: `[your_cat, shelter_cat_0, ..., shelter_cat_N, refresh]` (lines 166-170)
- Triple: `return [...base, ...base, ...base]` (line 171)
- Initial position set in useEffect (lines 130-138): `el.scrollLeft = setWidth` where `setWidth = el.scrollWidth / 3`
- Scroll container: `mobileScrollRef` div with `overflow-x-auto` and hidden scrollbar (line 769)
- NO arrow buttons visible on mobile (`hidden sm:flex` on arrows)
- User navigates by native touch swipe / scroll

---

## 2. Responsive Breakpoints

Three tiers. `visibleCats` state controls which mode is active.

| Breakpoint | Window width | `visibleCats` | Mode | Cards shown |
|---|---|---|---|---|
| Mobile | < 640px (`max-width: 639px`) | 1 | Triple-wrap infinite scroll | 1 at a time (swipe) |
| Tablet | 640px - 1023px | 3 | Windowed index rotation | 3 visible |
| Desktop | >= 1024px (`min-width: 1024px`) | 4 | Windowed index rotation | 4 visible |

**Detection method** (lines 94-110): Two `matchMedia` listeners — `(max-width: 639px)` and `(min-width: 1024px)`. The `update` function checks `sm.matches` first (mobile), then `lg.matches` (desktop), else tablet. Listeners fire on `change` events.

**Initial value** (lines 87-92): SSR-safe initializer checks `window.innerWidth` with the same thresholds.

**What changes per breakpoint:**

| Feature | Mobile (<640) | Tablet (640-1023) | Desktop (>=1024) |
|---|---|---|---|
| Scroll mode | Native horizontal scroll | Arrows + AnimatePresence | Arrows + AnimatePresence |
| Arrow buttons | Hidden (`hidden sm:flex`) | Visible, 32x32px | Visible, 40x40px |
| Scale-to-fit container | DISABLED (bypassed) | Active | Active |
| Card container padding | `px-0` | `px-4` | `px-8` |
| Card gap | `gap-2` | `gap-4` | `gap-4` |
| Carousel row padding | `pt-[15px] pb-0` | `pt-6 pb-4` | `pt-6 pb-4` |
| Mandala decorations | Hidden | Hidden | Visible (`hidden lg:block`) |
| SEO footer | Hidden (`hidden sm:block`) | Visible | Visible |

**Scale-to-fit bypass on mobile** (lines 662-676): When `visibleCats <= 1`, the `selectionContainerRef` and `selectionContentRef` are NOT attached, and no `transform: scale()` style is applied. Mobile gets a plain flex column with `min-h-0`. This was a critical fix — applying scale-to-fit on mobile broke the native scroll.

---

## 3. Card Dimensions

### Cat Card (shelter cat)

| Breakpoint | Width | Height | Class |
|---|---|---|---|
| Mobile (<640px) | 260px | 368px | `w-[260px] h-[368px]` |
| Tablet (md: 768px+) | 240px (w-60) | 368px | `md:w-60 md:h-[368px]` |
| Desktop (lg: 1024px+) | 256px (w-64) | 391px | `lg:w-64 lg:h-[391px]` |

> Line 903: `className="w-[260px] h-[368px] md:w-60 md:h-[368px] lg:w-64 lg:h-[391px]"`

### Your Cat Card

| Breakpoint | Width | Height | Class |
|---|---|---|---|
| Mobile (<640px) | 260px | 368px | `w-[260px] h-[368px]` |
| Tablet (md: 768px+) | 256px (w-64) | 400px | `md:w-64 md:h-[400px]` |
| Desktop (lg: 1024px+) | 288px (w-72) | 430px | `lg:w-72 lg:h-[430px]` |

> Line 819: `className="w-[260px] h-[368px] md:w-64 md:h-[400px] lg:w-72 lg:h-[430px]"`

**Your Cat is intentionally LARGER** than shelter cats at tablet and desktop. This signals it's a different kind of card (upload prompt). At mobile all cards are equal width for smooth scrolling.

### Refresh Card

Same dimensions as Cat Card (shelter cat):

| Breakpoint | Width | Height | Class |
|---|---|---|---|
| Mobile (<640px) | 260px | 368px | `w-[260px] h-[368px]` |
| Tablet (md: 768px+) | 240px (w-60) | 368px | `md:w-60 md:h-[368px]` |
| Desktop (lg: 1024px+) | 256px (w-64) | 391px | `lg:w-64 lg:h-[391px]` |

> Line 868: `className="w-[260px] h-[368px] md:w-60 md:h-[368px] lg:w-64 lg:h-[391px]"`

### Carousel Row Container Height

The outer `div` wrapping the card flex row:

| Breakpoint | Height |
|---|---|
| Base | 368px (`h-[368px]`) |
| md (768px+) | 400px (`md:h-[400px]`) |
| lg (1024px+) | 430px (`lg:h-[430px]`) |

> Line 781: `className="flex items-center gap-3 h-[368px] md:h-[400px] lg:h-[430px]"`

These match the Your Cat card heights so the tallest card defines the row.

---

## 4. Framer Motion Animation Config

### AnimatePresence

```tsx
<AnimatePresence mode="popLayout">
```

> Line 789. Mode is `"popLayout"` — exiting elements are removed from layout flow immediately so entering elements don't jump. This was specifically chosen; `"wait"` and `"sync"` both caused visual glitches during rotation.

### Card Enter/Exit Transitions

All three card types share the same animation pattern:

```tsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.8 }}
```

### Layout Transition (spring)

```tsx
transition={{
  layout: { type: 'spring', stiffness: 200, damping: 25 },
  opacity: { duration: 0.2 }
}}
```

> Lines 811, 856-858, 892-895. All three card types use identical values. The `layout` prop is set on all motion elements, so Framer Motion animates position changes when cards enter/exit the visible window.

### Hover States

```tsx
whileHover={{ scale: 1.06, y: -10, rotate: 0, zIndex: 10 }}
```

> Your Cat (line 812), Refresh (line 860), Shelter cat (line 896). The `rotate: 0` is critical — cards have a base rotation applied, and hover straightens them. `zIndex: 10` brings the hovered card above neighbors.

### Tap States

- Your Cat: `whileTap={{ scale: 0.98 }}` (line 813)
- Refresh: `whileTap={{ scale: 0.95 }}` (line 861)
- Shelter cat: `whileTap={{ scale: 0.95 }}` (line 897)

### Base Rotations

```tsx
const rotations = [-1.5, 0.8, -0.8, 1.5];
const rotation = rotations[i % rotations.length];
// Applied as: style={{ rotate: rotation }}
```

> Lines 800-801. Each card gets a slight tilt based on its index in the visible array. This creates the "fanned out" tarot card look.

### Card Color Cycling

```tsx
const cardColors = [
  { bg: '...pink...', border: '#500724', accent: '#FDF2F8' },   // 0: pink
  { bg: '...green...', border: '#022C22', accent: '#D1FAE5' },  // 1: green
  { bg: '...purple...', border: '#2E1065', accent: '#EDE9FE' }, // 2: purple
  { bg: '...rose...', border: '#500724', accent: '#FCE7F3' },   // 3: rose
  { bg: '...orange...', border: '#431407', accent: '#FFEDD5' }, // 4: orange
];
const color = cardColors[i % cardColors.length];
```

> Lines 792-799. Color assigned by visual position index `i`, not by cat identity. This means the same cat can be a different color after rotation.

### Share Button Spring

```tsx
transition={{ type: 'spring', stiffness: 300, damping: 25 }}
```

> Line 635. Used for the share button's enter/exit animation in reading view.

---

## 5. Key Prop Rules (CRITICAL)

Key props control which elements Framer Motion treats as the "same" element across renders. Wrong keys caused the carousel to break multiple times (see commits `aeadb73`, `61d24df`).

### Rules:

| Card type | Mobile key | Desktop/Tablet key | Why different |
|---|---|---|---|
| Your Cat | `your-cat-${i}` | `'your-cat'` | Mobile has 3 copies (tripled); each needs unique key. Desktop has one instance. |
| Refresh | `refresh-${i}` | `'refresh-card'` | Same reason — 3 copies on mobile vs 1 on desktop. |
| Shelter cat | `${cat.id}-${i}` | `cat.id` | Mobile: 3 copies of same cat need unique keys. Desktop: cat.id is already unique. |

> Your Cat key: line 806. Refresh key: line 851. Shelter cat key: line 887.

**The `isMobile` check** (`const isMobile = visibleCats <= 1`, line 791) determines which key pattern to use.

**Why this matters:** If mobile cards share the same key (e.g., all three copies of cat #42 have key `42`), Framer Motion treats them as one element and the layout breaks — cards teleport instead of scrolling. If desktop cards have index-based keys (e.g., `cat.id-0`, `cat.id-1`), Framer Motion sees every rotation as all-new elements and the slide animation breaks — cards pop in/out instead of sliding.

---

## 6. State Variables and Refs

### State Variables

| Variable | Type | Initial | Purpose | Lines |
|---|---|---|---|---|
| `shelterCats` | `ShelterCat[]` | `[]` | Array of cats fetched from RescueGroups API | 73 |
| `loadingShelterCats` | `boolean` | `true` | Loading spinner flag while fetching cats | 74 |
| `needsBrightening` | `boolean` | `false` | Whether current cat image is too dark and needs CSS filter | 75 |
| `carouselIndex` | `number` | `0` | Current rotation offset for desktop/tablet windowed mode | 76 |
| `visibleCats` | `number` | 1/3/4 | Number of cards visible — determines mobile vs desktop mode | 87-92 |
| `readingScale` | `number` | `1` | Scale factor for reading view (cat selected, asking questions) | 81 |
| `selectionScale` | `number` | `1` | Scale factor for selection view (choosing a cat) — desktop/tablet only | 84 |

### Refs

| Ref | Type | Purpose | Lines |
|---|---|---|---|
| `fileInputRef` | `HTMLInputElement` | Hidden file input for "Your Cat" upload | 77 |
| `answerRef` | `HTMLParagraphElement` | Answer text element (used by shrink callback) | 78 |
| `scaleContainerRef` | `HTMLDivElement` | Reading view — outer container for scale calculation | 79 |
| `scaleContentRef` | `HTMLDivElement` | Reading view — inner content being scaled | 80 |
| `selectionContainerRef` | `HTMLDivElement` | Selection view — outer container for scale calc (desktop/tablet only) | 82 |
| `selectionContentRef` | `HTMLDivElement` | Selection view — inner content being scaled (desktop/tablet only) | 83 |
| `mobileScrollRef` | `HTMLDivElement` | Mobile scroll container — the div with overflow-x-auto | 126 |
| `scrollReady` | `boolean` (ref) | Gate flag — prevents teleport logic from firing before initial scroll position is set | 127 |
| `teleporting` | `boolean` (ref) | Lock flag — prevents recursive teleport during scroll position adjustment | 128 |

---

## 7. Mobile Scroll Teleporting Logic

### Initialization (lines 130-138)

```tsx
useEffect(() => {
  if (visibleCats > 1 || !mobileScrollRef.current || shelterCats.length === 0) return;
  const el = mobileScrollRef.current;
  requestAnimationFrame(() => {
    const setWidth = el.scrollWidth / 3;
    el.scrollLeft = setWidth;
    scrollReady.current = true;
  });
}, [visibleCats, shelterCats]);
```

- Runs only when in mobile mode (`visibleCats <= 1`), scroll element exists, and cats are loaded
- Calculates `setWidth` = total scroll width / 3 (since content is tripled)
- Positions scroll to start of the MIDDLE copy
- Sets `scrollReady` gate to allow teleport handler
- Uses `requestAnimationFrame` to ensure DOM has painted

### Teleport Handler (lines 140-155)

```tsx
const handleMobileScroll = useCallback(() => {
  if (!scrollReady.current || teleporting.current) return;
  const el = mobileScrollRef.current;
  if (!el) return;
  const setWidth = el.scrollWidth / 3;
  const threshold = 50;
  if (el.scrollLeft >= setWidth * 2 - threshold) {
    teleporting.current = true;
    el.scrollLeft -= setWidth;
    requestAnimationFrame(() => { teleporting.current = false; });
  } else if (el.scrollLeft <= threshold) {
    teleporting.current = true;
    el.scrollLeft += setWidth;
    requestAnimationFrame(() => { teleporting.current = false; });
  }
}, []);
```

**Visual diagram:**

```
                 threshold=50px
                 |                                              |
  [--SET A------][--SET B--(user starts here)--SET B---][--SET C------]
  |              |                                      |              |
  scrollLeft=0   scrollLeft=setWidth                    scrollLeft=setWidth*2

  If scrollLeft <= 50:          teleport RIGHT by +setWidth
  If scrollLeft >= setWidth*2-50: teleport LEFT by -setWidth
```

- `threshold = 50` pixels — the boundary zone where teleport fires
- `teleporting` ref prevents re-entrant calls (scroll event fires during programmatic scrollLeft change)
- `requestAnimationFrame` clears the teleporting lock after one frame

### Dependencies

- `handleMobileScroll` has an empty dependency array (`[]`) — it's stable across renders
- Attached to the scroll container via `onScroll` prop only when `visibleCats <= 1` (line 768)
- The initialization useEffect depends on `[visibleCats, shelterCats]` — re-runs if screen resizes across the mobile breakpoint or cats are refreshed

---

## 8. Scale Calculation

Two independent scale systems exist — one for reading view, one for selection view. Both use the same algorithm.

### Algorithm

```
scale = min(containerWidth / contentWidth, containerHeight / contentHeight)
```

The content is rendered at its natural size, then uniformly scaled down (never up — though the math allows it, the content is always designed to be at-or-larger-than the viewport).

### Reading View Scale (lines 313-337)

- **Refs:** `scaleContainerRef` (outer), `scaleContentRef` (inner)
- **State:** `readingScale` (default 1)
- **Applied at:** line 443: `style={{ width: '56rem', maxWidth: '100%', transform: \`scale(${readingScale})\`, transformOrigin: 'top center' }}`
- **Content width base:** `56rem` (896px)
- **Transform origin:** `top center` — scales from top so content doesn't shift below viewport
- **Dependencies:** `[catImage, response, isThinking]` — recalculates when entering reading view, when response appears, and when thinking state changes
- **Observer:** `ResizeObserver` on both container and content, disconnected on cleanup
- **Guard:** If `!catImage`, sets scale to 1 and returns (no reading view active)

### Selection View Scale (lines 339-361)

- **Refs:** `selectionContainerRef` (outer), `selectionContentRef` (inner)
- **State:** `selectionScale` (default 1)
- **Applied at:** lines 672-675: `transform: \`scale(${selectionScale})\`, transformOrigin: 'top center'`
- **MOBILE BYPASS:** Refs are only attached when `visibleCats > 1` (lines 663, 670). On mobile, no refs = no scaling = no observer.
- **Dependencies:** `[catImage, shelterCats, loadingShelterCats, visibleCats]`
- **Guard:** If `catImage` is set (reading view active), sets scale to 1 and returns

---

## 9. Card Ordering in the Virtual Ring

The ordered sequence for both modes:

```
Index 0:             Your Cat
Index 1..N:          shelterCats[0] through shelterCats[N-1]
Index N+1:           Refresh
```

This is enforced in `getVisibleSlots()` (lines 160-189):

```tsx
if (idx === 0) {
  slots.push({ type: 'your_cat' });
} else if (idx <= shelterCats.length) {
  slots.push({ type: 'cat', cat: shelterCats[idx - 1] });
} else {
  slots.push({ type: 'refresh' });
}
```

For mobile, the base array is built explicitly (lines 166-170):
```tsx
const base: CarouselSlot[] = [{ type: 'your_cat' }];
for (const cat of shelterCats) {
  base.push({ type: 'cat', cat });
}
base.push({ type: 'refresh' });
```

---

## 10. "DO NOT CHANGE" Checklist

These 10 items have each caused carousel breakage when modified. Every item is verified against the code as of 2026-02-21.

### 1. Key Prop Patterns on AnimatePresence/motion Elements

**DO NOT CHANGE the key logic at lines 806, 851, 887.**

- Mobile keys MUST include the array index `i` to distinguish tripled copies
- Desktop keys MUST use stable identity-based keys (no index)
- The `isMobile` check at line 791 (`const isMobile = visibleCats <= 1`) gates this

Changing these breaks: desktop slide animations (cards pop instead of slide) OR mobile scroll (cards teleport to wrong positions).

History: Commit `aeadb73` fixed broken keys that destroyed desktop carousel animations.

### 2. The Exact Order of Cards in the Array

**DO NOT CHANGE the order: Your Cat (idx 0), Shelter Cats (idx 1..N), Refresh (idx N+1).**

This order is hardcoded in two places:
- `getVisibleSlots()` desktop path (lines 178-187)
- `getVisibleSlots()` mobile base array (lines 166-170)

Changing this breaks: `carouselIndex` math (all index-to-type mappings break), the Refresh card's `setCarouselIndex(0)` call (line 862) which resets to Your Cat after refresh.

History: Commits `9cd39e7` and `61d24df` fixed ordering bugs.

### 3. The Scroll Teleporting Thresholds

**DO NOT CHANGE `threshold = 50` at line 145, or the teleport math.**

- Right boundary: `el.scrollLeft >= setWidth * 2 - threshold` (line 146)
- Left boundary: `el.scrollLeft <= threshold` (line 150)
- Teleport amounts: `el.scrollLeft -= setWidth` / `el.scrollLeft += setWidth`

Changing these breaks: infinite scroll illusion. Too small a threshold = user sees the edge before teleport fires. Too large = teleport fires too early, causing visible jump. The `setWidth = el.scrollWidth / 3` division is load-bearing — it MUST be 3 because the content is tripled.

### 4. The Responsive Breakpoint Values

**DO NOT CHANGE the breakpoints: 639px (mobile), 1024px (desktop).**

```tsx
const sm = window.matchMedia('(max-width: 639px)');   // line 95
const lg = window.matchMedia('(min-width: 1024px)');  // line 96
```

And the initial value:
```tsx
if (window.innerWidth < 640) return 1;   // line 89
if (window.innerWidth < 1024) return 4;  // line 90
```

These align with Tailwind's `sm:` (640px) and `lg:` (1024px) breakpoints. If these drift from Tailwind, the JS mode (mobile vs desktop) will disagree with the CSS visibility classes (e.g., `hidden sm:flex` on arrows), causing layout mismatches.

### 5. The Spring Animation Parameters

**DO NOT CHANGE `stiffness: 200, damping: 25` for layout transitions.**

```tsx
layout: { type: 'spring', stiffness: 200, damping: 25 }
```

These are tuned for the card slide speed. Lower stiffness = cards drift slowly and look laggy. Higher stiffness = cards snap too hard and look janky. The `opacity: { duration: 0.2 }` is also tuned — faster causes flash, slower causes ghosting.

### 6. The Card Dimension Calculations

**DO NOT CHANGE card sizes without changing ALL matching elements.**

The card sizes at lines 819, 868, 903 must stay consistent with:
- The carousel row height at line 781 (`h-[368px] md:h-[400px] lg:h-[430px]`)
- The Your Cat card must be >= the row height at each breakpoint (it defines the row height)
- Mobile cards must ALL be the same width (260px) for smooth scroll

If cat cards become wider than Your Cat on mobile, the scroll snapping becomes uneven.

### 7. The useEffect Dependencies for Scroll Handling

**DO NOT CHANGE dependencies for the scroll initialization effect (lines 130-138).**

```tsx
}, [visibleCats, shelterCats]);
```

Must depend on `visibleCats` (re-init when crossing mobile breakpoint) and `shelterCats` (re-init when cats load or refresh). Missing `shelterCats` = scroll position not set after refresh. Missing `visibleCats` = scroll position not set when rotating phone.

**DO NOT CHANGE the empty deps on `handleMobileScroll` (line 155).**

```tsx
}, []);
```

This callback reads from refs only (no state), so it's stable. Adding state dependencies would cause it to re-create, which would be fine but pointless.

### 8. The Touch/Pointer Event Handlers

**DO NOT ADD touch/pointer event handlers to the mobile scroll container.**

The mobile carousel uses **native browser scroll only** via `overflow-x-auto` (line 769). Earlier attempts to add custom touch handlers (`touchstart`, `touchmove`, pointer events) all broke the native momentum scrolling on iOS and caused jank.

The scroll container's CSS is also load-bearing:
```
overflow-x-auto overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
```

- `overflow-y-visible` prevents card hover animations from being clipped vertically
- Scrollbar hiding is cosmetic but expected by users

### 9. The Desktop Rotation Interval Logic

**There is NO auto-rotation timer.** DO NOT ADD ONE without extreme care.

Desktop/tablet carousel rotates ONLY on user click of prev/next arrows. Previous auto-rotation attempts caused:
- Race conditions with manual navigation
- AnimatePresence key conflicts when timer and click fire within the same frame
- Accessibility issues (motion without user intent)

If auto-rotation is ever added, it MUST: pause on hover, pause on focus, clear on any manual interaction, and use `useRef` for the interval (not state).

### 10. The z-index Stacking Order

**DO NOT CHANGE the z-index structure:**

| Element | z-index | Purpose |
|---|---|---|
| Background pattern | none (auto) | Below everything |
| Main content | `z-10` (line 405) | Above background, below footer |
| Arrow buttons | `z-10` (lines 753, 967) | Same level as content, positioned by flex |
| Hovered card | `zIndex: 10` (inline, whileHover) | Above sibling cards during hover |
| Adopt Me badge | `z-20` (line 533) | Above card content |
| Close button (X) | `z-30` (line 506) | Above badge |
| PURRfoot banner | `z-50` (line 995) | Above everything (fixed) |

The hovered card's `zIndex: 10` (via Framer `whileHover`) is relative to siblings in the flex container, not the page. The Adopt Me badge at `z-20` and close button at `z-30` are positioned within the card's stacking context.

If the PURRfoot banner's `z-50` is lowered, cards can appear above it during hover animations.

---

## Appendix: Full Slot Type Definition

```tsx
type CarouselSlot =
  | { type: 'cat'; cat: ShelterCat }
  | { type: 'refresh' }
  | { type: 'your_cat' };
```

> Line 158. Defined inline within the component.

## Appendix: Config Values

From `src/config.ts`:
- `shelterCats.fetchCount: 12` — number of cats fetched from API, all included in carousel
- So `totalSlots = 12 + 2 = 14` in the typical case

## Appendix: Commit History (Carousel Fixes)

Most recent first:

| Commit | Fix |
|---|---|
| `61d24df` | Your Cat first in rotation, Refresh last — all cards rotate together |
| `9cd39e7` | Pin Your Cat leftmost, Refresh rightmost on desktop |
| `8506e72` | Center cards vertically, reduce Your Cat size difference |
| `ac4bcb9` | Your Cat card joins desktop carousel rotation, stays larger |
| `aeadb73` | Restore desktop carousel slide animations (broken keys) |
| `3415034` | Mobile: nudge cards down 3px |
| `db2ae23` | Mobile: 25% bigger cat cards (260x368), push cards lower |
| `b0d67bc` | Mobile carousel: no bottom clip, edge-to-edge cards |
| `c0406b4` | Mobile: infinite circular scroll, no vertical movement |
| `1b64998` | Add w-full to main content div — root cause of broken mobile scroll |
| `8ef0c93` | Bypass scale-to-fit container on mobile entirely |
| `e6952a0` | Mobile scroll: constrain content width, fix file input |
| `8e24327` | Mobile: restore native horizontal scroll |
| `92fb69b` | Mobile carousel: single card swipe with Your Cat in rotation |
| `83b5c5b` | Add touch swipe to mobile carousel |
| `35b4a65` | Restore mobile swipe carousel: disable scale on small screens |
| `f5d5b27` | Responsive cat carousel: show 2/3/4 cats by viewport width |
| `1104ba7` | Scale-to-fit cat selection view to eliminate scrolling |
