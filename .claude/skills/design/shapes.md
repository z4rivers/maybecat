# MaybeCat Shape & Embellishment Techniques

Organic shapes and decorative elements beyond rectangles. Move toward the Celestial Seasonings aesthetic.

---

## Non-Rectangular Containers

### Asymmetric Border Radius (Blob Shapes)
```css
/* Organic card shape */
border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%;

/* Soft organic feel */
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
```

### Clip-Path Shapes
```css
/* Hexagonal frame */
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

/* Wavy bottom edge */
clip-path: ellipse(120% 100% at 50% 0%);

/* Shield/crest shape */
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%);

/* Ticket/badge with notches */
clip-path: polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%);
```

### SVG as Container
```jsx
<svg viewBox="0 0 200 100" className="w-full">
  <defs>
    <clipPath id="organic-shape">
      <path d="M10,50 Q50,10 100,30 T190,50 Q150,90 100,70 T10,50" />
    </clipPath>
  </defs>
  <foreignObject clipPath="url(#organic-shape)" width="200" height="100">
    {/* Content inside organic shape */}
  </foreignObject>
</svg>
```

---

## Decorative Borders & Frames

### Scalloped Borders (CSS)
```css
background: radial-gradient(circle at 50% 100%, transparent 8px, #FEF3C7 8px);
background-size: 16px 100%;
```

### Double/Triple Borders
```css
border: 4px solid #92400E;
outline: 2px solid #B45309;
outline-offset: 4px;
box-shadow: 0 0 0 8px rgba(251,191,36,0.3);
```

### SVG Border Patterns
```jsx
<svg className="absolute inset-0 pointer-events-none">
  <rect x="4" y="4" width="calc(100%-8)" height="calc(100%-8)"
        fill="none" stroke="url(#vine-pattern)" strokeWidth="2" />
</svg>
```

---

## Mask Effects

### Faded/Vignette Edges
```css
mask-image: radial-gradient(ellipse 80% 80% at center, black 60%, transparent 100%);
```

### Decorative Cutouts
```css
mask-image: url('data:image/svg+xml,...');
mask-size: contain;
mask-repeat: no-repeat;
mask-position: center;
```

---

## Text on Paths (Future Enhancement)

```jsx
<svg viewBox="0 0 200 50">
  <path id="curve" d="M10,40 Q100,10 190,40" fill="none" />
  <text>
    <textPath href="#curve" className="fill-amber-900 font-display">
      Mystical Oracle
    </textPath>
  </text>
</svg>
```

---

## Shape-Outside for Text Wrapping

```css
.mystical-image {
  float: left;
  shape-outside: circle(50%);
  clip-path: circle(50%);
  margin-right: 1rem;
}
```

---

## Browser Support
- `clip-path`: Excellent (all modern browsers)
- `border-radius` (asymmetric): Universal
- `mask-image`: Good (prefix may be needed for older Safari)
- `shape-outside`: Good support
- SVG: Universal
