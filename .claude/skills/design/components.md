# MaybeCat Component Patterns

Copy-paste code snippets for common UI patterns.

---

## Cards

### Standard Oracle Card

The main card style used for reading results and content display.

```jsx
<div
  className="relative w-full max-w-2xl"
  style={{
    background: 'linear-gradient(145deg, #FEF3C7, #FDE68A, #FCD34D)',
    border: '4px solid #92400E',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 20px 60px rgba(120,53,15,0.3), inset 0 0 40px rgba(255,255,255,0.2)'
  }}
>
  {/* Corner decorations */}
  <span className="absolute top-3 left-3 text-amber-700/50">✦</span>
  <span className="absolute top-3 right-3 text-amber-700/50">✦</span>
  <span className="absolute bottom-3 left-3 text-amber-700/50">✦</span>
  <span className="absolute bottom-3 right-3 text-amber-700/50">✦</span>

  {/* Content goes here */}
</div>
```

### Tarot-Style Card (for cats/characters)

Used for shelter cats with jewel tone variations.

```jsx
const CARD_COLORS = {
  magenta: {
    gradient: ['#EC4899', '#BE185D', '#831843'],
    border: '#500724',
    accent: '#FDF2F8'
  },
  emerald: {
    gradient: ['#10B981', '#047857', '#064E3B'],
    border: '#022C22',
    accent: '#D1FAE5'
  },
  purple: {
    gradient: ['#8B5CF6', '#6D28D9', '#4C1D95'],
    border: '#2E1065',
    accent: '#EDE9FE'
  },
  pink: {
    gradient: ['#F472B6', '#DB2777', '#9D174D'],
    border: '#500724',
    accent: '#FCE7F3'
  },
  coral: {
    gradient: ['#FB923C', '#EA580C', '#9A3412'],
    border: '#431407',
    accent: '#FFEDD5'
  }
};

function TarotCard({ color, image, name }) {
  const c = CARD_COLORS[color];

  return (
    <div
      className="relative w-44 h-[272px] md:w-56 md:h-[360px] overflow-hidden"
      style={{
        background: `linear-gradient(145deg, ${c.gradient.join(', ')})`,
        border: `4px solid ${c.border}`,
        borderRadius: '0.5rem',
        boxShadow: '0 15px 50px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.15)'
      }}
    >
      {/* Ornate inner frame */}
      <div
        className="absolute inset-2 rounded pointer-events-none"
        style={{
          border: `2px solid ${c.accent}40`,
          boxShadow: `inset 0 0 15px ${c.accent}20`
        }}
      />

      {/* Corner flourishes */}
      <span className="absolute top-3 left-3" style={{ color: `${c.accent}70` }}>✦</span>
      <span className="absolute top-3 right-3" style={{ color: `${c.accent}70` }}>✦</span>

      {/* Photo area */}
      <div
        className="absolute inset-4 top-4 bottom-16 rounded overflow-hidden"
        style={{
          border: `3px solid ${c.accent}60`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name banner */}
      <div
        className="absolute bottom-0 left-0 right-0 py-3 md:py-4 text-center"
        style={{
          background: c.border,
          boxShadow: '0 -4px 12px rgba(0,0,0,0.3)'
        }}
      >
        <span
          className="font-black text-lg md:text-xl"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            color: c.accent
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
```

### Upload Card (Your Cat)

The card with dashed upload area.

```jsx
<div
  className="relative w-52 h-80 md:w-64 md:h-[400px] lg:w-72 lg:h-[440px] overflow-hidden cursor-pointer group"
  style={{
    background: 'linear-gradient(145deg, #FEF3C7, #FBBF24, #B45309)',
    border: '5px solid #78350F',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 60px rgba(255,255,255,0.4), 0 0 30px rgba(251,191,36,0.3)'
  }}
>
  {/* Inner ornate frame */}
  <div
    className="absolute inset-3 rounded-lg pointer-events-none"
    style={{
      border: '3px solid #92400E',
      boxShadow: 'inset 0 0 20px rgba(120,53,15,0.2)'
    }}
  />

  {/* Corner fleurons */}
  <span className="absolute top-4 left-4 text-amber-800 text-xl">❧</span>
  <span className="absolute top-4 right-4 text-amber-800 text-xl scale-x-[-1]">❧</span>
  <span className="absolute bottom-4 left-4 text-amber-800 text-xl scale-y-[-1]">❧</span>
  <span className="absolute bottom-4 right-4 text-amber-800 text-xl scale-[-1]">❧</span>

  {/* Upload circle */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <div
      className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
      style={{
        border: '4px dashed #78350F',
        background: 'radial-gradient(circle, rgba(254,243,199,0.5) 0%, transparent 70%)'
      }}
    >
      {/* Upload icon/text */}
    </div>
  </div>
</div>
```

---

## Buttons

### Primary CTA Button

For the most important action on the page.

```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  disabled={isLoading}
  className="w-full py-3 rounded-xl text-white font-bold text-lg disabled:opacity-50"
  style={{
    fontFamily: 'Georgia, serif',
    background: 'linear-gradient(135deg, #7C2D12, #9A3412, #C2410C)',
    boxShadow: '0 4px 20px rgba(124,45,18,0.4)'
  }}
>
  Consult the Cat
</motion.button>
```

### Secondary Button (Current)

```jsx
<button
  className="flex-1 bg-amber-800 hover:bg-amber-900 text-amber-100 font-bold py-3 rounded-xl disabled:opacity-50"
>
  Ask Again
</button>
```

### Secondary Button (Recommended Upgrade)

```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="flex-1 py-3 rounded-xl text-amber-100 font-bold"
  style={{
    background: 'linear-gradient(135deg, #92400E, #B45309, #D97706)',
    boxShadow: '0 4px 20px rgba(146,64,14,0.4)'
  }}
>
  Ask Again
</motion.button>
```

### Accent/Success Button (Current)

```jsx
<button
  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl disabled:opacity-50"
>
  Share Wisdom
</button>
```

### Accent Button (Recommended Upgrade)

```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="flex-1 py-3 rounded-xl text-white font-bold"
  style={{
    background: 'linear-gradient(135deg, #065F46, #047857, #059669)',
    boxShadow: '0 4px 20px rgba(6,95,70,0.4)'
  }}
>
  Share Wisdom
</motion.button>
```

### Close Button (X)

```jsx
<button
  onClick={onClose}
  className="absolute top-4 right-4 p-2 rounded-full bg-amber-900/80 text-amber-100 hover:bg-amber-900 shadow-lg"
>
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
```

### Button Row (Side by Side)

```jsx
<div className="flex gap-3">
  <button className="flex-1 ...">Secondary</button>
  <button className="flex-1 ...">Primary</button>
</div>
```

---

## Form Inputs

### Text Input

```jsx
<input
  type="text"
  placeholder="Enter something mystical..."
  className="w-full bg-amber-50 border-2 border-amber-700 text-amber-900
             placeholder-amber-600/50 px-4 py-3 rounded-xl text-lg text-center
             focus:border-amber-800 focus:ring-2 focus:ring-amber-500/30 focus:outline-none"
  style={{
    fontFamily: 'Georgia, serif',
    boxShadow: 'inset 0 2px 8px rgba(120,53,15,0.1)'
  }}
/>
```

### Textarea

```jsx
<textarea
  placeholder="What wisdom do you seek?"
  className="w-full bg-amber-50 border-2 border-amber-700 text-amber-900
             placeholder-amber-600/50 px-4 py-3 rounded-xl text-lg
             focus:border-amber-800 focus:ring-2 focus:ring-amber-500/30 focus:outline-none
             resize-none"
  rows={4}
  style={{
    fontFamily: 'Georgia, serif',
    boxShadow: 'inset 0 2px 8px rgba(120,53,15,0.1)'
  }}
/>
```

---

## Modals

### Modal Container

```jsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(69, 26, 3, 0.85)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-sm w-full"
        style={{
          background: 'linear-gradient(145deg, #FEF3C7, #FDE68A, #FCD34D)',
          border: '4px solid #92400E',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,255,255,0.2)'
        }}
      >
        {/* Corner decorations */}
        <span className="absolute top-3 left-3 text-amber-700/50">✦</span>
        <span className="absolute top-3 right-3 text-amber-700/50">✦</span>
        <span className="absolute bottom-3 left-3 text-amber-700/50">✦</span>
        <span className="absolute bottom-3 right-3 text-amber-700/50">✦</span>

        {/* Content */}
        {children}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

---

## Decorative Elements

### Decorative Line Divider

```jsx
<div className="flex items-center justify-center gap-3 my-4">
  <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
  <span className="text-amber-100">✦</span>
  <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-100 to-transparent rounded-full" />
</div>
```

### Floating Stars

```jsx
<span className="absolute text-amber-100 drop-shadow-lg text-2xl">★</span>
<span className="absolute text-amber-100 drop-shadow-lg text-lg">✦</span>
<span className="absolute text-amber-100 drop-shadow-lg text-xl">✧</span>
```

### Corner Vines (SVG)

```jsx
<svg className="absolute top-0 left-0 w-32 h-32 text-amber-900/60" viewBox="0 0 100 100">
  <path
    fill="currentColor"
    d="M0,0 Q20,10 15,30 Q10,50 25,60 Q15,40 20,20 Q25,10 0,0 M5,15 Q15,20 12,35 Q8,25 5,15"
  />
</svg>
```

### Inner Decorative Frame

```jsx
<div
  className="absolute inset-4 pointer-events-none rounded-lg"
  style={{ border: '2px solid rgba(180, 83, 9, 0.4)' }}
/>
```

---

## Image Containers

### Cat Photo with Frame

```jsx
<div
  className="relative mx-auto"
  style={{ maxWidth: '280px' }}
>
  <div
    className="rounded-xl overflow-hidden"
    style={{
      border: '4px solid #92400E',
      padding: '8px',
      background: '#FFFBEB',
      boxShadow: '0 12px 30px rgba(120,53,15,0.4)'
    }}
  >
    <img
      src={imageSrc}
      alt={name}
      className="w-full aspect-square object-cover rounded-lg"
    />
  </div>

  {/* Name badge below */}
  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
    <span
      className="bg-amber-800 text-amber-100 font-bold text-sm px-4 py-1 rounded-full shadow-lg"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      {name}
    </span>
  </div>
</div>
```

---

## Text Styles

### Main Title

```jsx
<h1
  className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-amber-100"
  style={{
    fontFamily: "'Cinzel Decorative', serif",
    textShadow: '2px 2px 0 #FBBF24, 4px 4px 0 rgba(0,0,0,0.2), 0 0 30px rgba(251,191,36,0.4)'
  }}
>
  Maybe Cat
</h1>
```

### Subtitle

```jsx
<p
  className="text-xl md:text-2xl italic text-amber-100"
  style={{
    fontFamily: 'Georgia, serif',
    textShadow: '1px 1px 0 rgba(251,191,36,0.6)'
  }}
>
  An Oracle for the Undecided
</p>
```

### Card Heading

```jsx
<h2
  className="text-2xl md:text-3xl font-black text-amber-900"
  style={{
    fontFamily: "'Cinzel Decorative', serif",
    textShadow: '1px 1px 0 rgba(254,243,199,0.5)'
  }}
>
  The Oracle Speaks
</h2>
```

### Body Text on Cards

```jsx
<p
  className="text-lg text-amber-900"
  style={{ fontFamily: 'Georgia, serif' }}
>
  Your mystical reading...
</p>
```
