---
name: plasmic
description: "Plasmic visual builder workflow. Sync designs to React code, add behavior, manage components. Full codegen mastery."
---

# Plasmic Codegen Mastery

## Quick Reference

```bash
# Sync designs to code
plasmic sync --projects 4ffb6YXS6J8qRiPY69uq36

# Watch for live changes while designing
plasmic watch --projects 4ffb6YXS6J8qRiPY69uq36

# Force sync (fixes most issues)
plasmic sync --force
```

**Project ID:** `4ffb6YXS6J8qRiPY69uq36`
**Studio:** https://studio.plasmic.app/projects/4ffb6YXS6J8qRiPY69uq36

---

## File Structure

```
src/components/
├── Button.tsx              # YOUR wrapper (add behavior here)
├── Card.tsx                # YOUR wrapper
└── plasmic/                # PLASMIC-OWNED (never edit)
    ├── PlasmicButton.tsx   # Generated presentation
    ├── PlasmicCard.tsx     # Generated presentation
    └── plasmic.module.css  # Generated styles
```

### The Golden Rule
- **`plasmic/` folder:** NEVER edit. Gets overwritten on every sync.
- **Wrapper components:** YOUR code. Add state, handlers, logic here.

---

## CLI Commands

| Command | Purpose |
|---------|---------|
| `plasmic sync` | Pull latest designs into code |
| `plasmic sync --force` | Force sync, resolve conflicts |
| `plasmic sync --yes` | Auto-answer prompts |
| `plasmic watch` | Auto-sync on Studio changes |
| `plasmic init` | Initialize in new project |

### Sync Workflow
```bash
# 1. Make changes in Plasmic Studio
# 2. Run sync
plasmic sync --projects 4ffb6YXS6J8qRiPY69uq36

# 3. Check what changed
git diff src/components/plasmic/

# 4. Commit the synced code
git add . && git commit -m "sync: update from Plasmic Studio"
```

---

## Adding Behavior to Components

### Basic Pattern: Wrapper Component

Plasmic generates `PlasmicButton` (presentation only). You create `Button` (with behavior):

```tsx
// src/components/Button.tsx (YOU OWN THIS)
import * as React from "react";
import { PlasmicButton, DefaultButtonProps } from "./plasmic/PlasmicButton";

export interface ButtonProps extends DefaultButtonProps {
  onClick?: () => void;
  loading?: boolean;
}

function Button({ onClick, loading, ...props }: ButtonProps) {
  return (
    <PlasmicButton
      {...props}
      root={{
        onClick,
        disabled: loading,
      }}
      isLoading={loading}  // Controls a Plasmic variant
    />
  );
}

export default Button;
```

### Override Props

Control any element in the Plasmic component tree:

```tsx
<PlasmicCard
  // Override the root element
  root={{
    onClick: handleClick,
    className: "extra-class",
    style: { marginTop: 20 },
  }}

  // Override a named element
  title={{
    children: "Custom Title",  // Replace text
  }}

  // Override with render function
  icon={{
    render: (props, Component) => <CustomIcon {...props} />,
  }}

  // Wrap an element
  button={{
    wrap: (node) => <Tooltip content="Click me">{node}</Tooltip>,
  }}
/>
```

### Override Object Properties

| Property | What It Does |
|----------|--------------|
| `props` | Merge additional props onto the element |
| `as` | Change the element type (`'button'`, `'a'`, MyComponent) |
| `render` | Completely replace with custom render function |
| `wrap` | Wrap the element in another component |
| `wrapChildren` | Add content before/after children |

---

## Slots vs Variants

### Slots = "Holes" for Content
Use when the **content structure varies** but layout is fixed.

```tsx
// In Plasmic Studio: Create a slot named "content"
// In code:
<PlasmicModal
  content={
    <div>
      <h2>Dynamic Title</h2>
      <p>Any content goes here</p>
    </div>
  }
/>
```

### Variants = Style/State Changes
Use when **content is fixed** but appearance changes.

```tsx
// Toggle variant (boolean)
<PlasmicButton isLoading={true} />

// Single-choice variant group
<PlasmicButton size="large" />  // "small" | "medium" | "large"

// Multi-choice variants
<PlasmicButton states={["selected", "highlighted"]} />
```

### Decision Guide

| Scenario | Use |
|----------|-----|
| Button text changes | Slot |
| Button has loading spinner | Variant |
| Card can hold any content | Slot |
| Card has "featured" style | Variant |
| Modal body is dynamic | Slot |
| Modal has error/success state | Variant |

---

## Design Tokens

### Using Plasmic Tokens in Code

Plasmic exports tokens to CSS variables:

```tsx
// Import the generated CSS
import './plasmic/plasmic.module.css';

// Use tokens as CSS variables
<div
  className="plasmic_tokens"
  style={{
    color: 'var(--plasmic-token-brandColor)',
    padding: 'var(--plasmic-token-spacing-md)',
  }}
>
```

### Registering Your Tokens for Studio

```tsx
// plasmic-init.ts
PLASMIC.registerToken({
  name: 'MaybeCat Pink',
  value: '#EC4899',
});

PLASMIC.registerToken({
  name: 'MaybeCat Gold',
  value: '#FBBF24',
});
```

---

## Registering Code Components

Make your React components available in Plasmic Studio:

```tsx
// plasmic-init.ts
import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { OracleCard } from "./components/OracleCard";

export const PLASMIC = initPlasmicLoader({
  projects: [
    { id: "4ffb6YXS6J8qRiPY69uq36", token: "..." }
  ],
});

PLASMIC.registerComponent(OracleCard, {
  name: "OracleCard",
  props: {
    // Basic types
    message: "string",
    catName: "string",

    // Slot for custom content
    children: { type: "slot" },

    // Choice prop
    mood: {
      type: "choice",
      options: ["mystical", "sassy", "wise", "chaotic"],
    },

    // Boolean toggle
    isRevealed: "boolean",

    // Object prop
    cat: { type: "object" },
  },
});
```

---

## Data Fetching

### With usePlasmicQueryData

```tsx
import { usePlasmicQueryData } from "@plasmicapp/query";
import { DataProvider } from "@plasmicapp/loader-react";

function CatDataWrapper({ children }) {
  const { data, isLoading } = usePlasmicQueryData("cats", async () => {
    return fetch("/api/cats").then(r => r.json());
  });

  if (isLoading) return <div>Loading cats...</div>;

  return (
    <DataProvider name="cats" data={data}>
      {children}
    </DataProvider>
  );
}
```

### In Plasmic Studio
After registering a DataProvider, you can bind elements to `cats.name`, `cats.image`, etc.

---

## Version Control

### plasmic.json Settings

```json
{
  "projects": [{
    "projectId": "4ffb6YXS6J8qRiPY69uq36",
    "version": "latest"  // Unpublished changes (dev)
    // "version": ">=1.0.0" // Published versions only (stable)
  }]
}
```

| Version Setting | Behavior |
|-----------------|----------|
| `"latest"` | Sync unpublished changes (for development) |
| `">=1.0.0"` | Only sync published versions (for stability) |
| `"1.2.3"` | Lock to specific version |

### Workflow for Teams
1. Designers work in Studio (changes = "latest")
2. Developer runs `plasmic sync` to pull changes
3. Commit generated code to git
4. Code review as normal
5. Designer publishes version when ready for production

---

## Common Issues & Fixes

### "Component not synced"
```bash
plasmic sync --force
```

### Package Version Mismatch
```bash
# Check for conflicts
npm list @plasmicapp/loader-react

# All @plasmicapp packages must match versions
npm update @plasmicapp/react-web @plasmicapp/loader-react
```

### Import Errors After Sync
- Delete `src/components/plasmic/` folder
- Run `plasmic sync --force`
- Check `plasmic.json` for outdated settings

### 502 Errors
- Retry the sync
- Check [Plasmic Status](https://status.plasmic.app)

### "Element type is invalid"
- Check component exports (default vs named)
- Verify component is properly registered

---

## Best Practices

### 1. Treat Plasmic Like a Library
The `plasmic/` folder is like `node_modules` - generated code you don't touch.

### 2. Use Wrapper Components
Always add behavior through wrappers, not by editing generated code.

### 3. Design for Reuse
In Plasmic Studio:
- Create variants for states (hover, loading, error)
- Use slots for variable content
- Apply consistent naming

### 4. Keep Syncs Small
- Sync frequently (smaller diffs)
- Review generated code before committing
- Use `--force` sparingly

### 5. Publish for Stability
- Use `"latest"` during active development
- Switch to `">=X.Y.Z"` for production
- Publish in Studio after major changes

---

## MaybeCat Integration

When building MaybeCat components in Plasmic:

### Design System
- Use the hot pink → gold gradient as background
- Apply Cinzel Decorative for headlines
- Create variants for mystical states

### Component Ideas for Studio
- `OracleCard` - displays cat wisdom
- `CatSelector` - grid of cat photos
- `QuestionInput` - styled input with submit
- `ShareCard` - screenshot-ready response display

### Connecting to Code
```tsx
// Register MaybeCat-specific components
PLASMIC.registerComponent(OracleCard, {
  name: "OracleCard",
  props: {
    response: "string",
    catImage: "imageUrl",
    mood: {
      type: "choice",
      options: ["mystical", "sassy", "wise", "unhinged"],
    },
  },
});
```

---

## Quick Checklist

Before syncing:
- [ ] Studio changes saved?
- [ ] On correct project?

After syncing:
- [ ] `git diff` looks reasonable?
- [ ] No errors in console?
- [ ] App still builds?

Before committing:
- [ ] Only Plasmic-related changes?
- [ ] Wrapper components still work?
- [ ] Test the component in browser?

---

## Sources
- [Plasmic CLI Usage](https://docs.plasmic.app/learn/cli/)
- [Codegen Guide](https://docs.plasmic.app/learn/codegen-guide/)
- [Component Patterns](https://docs.plasmic.app/learn/codegen-components/)
- [Variants](https://docs.plasmic.app/learn/variants/)
- [Slots](https://docs.plasmic.app/learn/slots/)
- [Best Practices](https://docs.plasmic.app/learn/best-practices/)
- [Common Issues](https://docs.plasmic.app/learn/common-issues/)
