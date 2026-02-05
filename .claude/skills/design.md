---
name: design
description: "MaybeCat design system and tools. Visual identity, Figma MCP, Plasmic codegen. Use /design for overview or invoke sub-skills directly."
---

# Design Skills

## Sub-Skills

| Command | Mastery Level | Use For |
|---------|---------------|---------|
| `/design:style-guide` | MaybeCat visual identity, colors, typography, ornate maximalism |
| `/design:figma` | Extract from Figma via MCP, generate React code from frames |
| `/design:plasmic` | Sync Plasmic Studio to code, add behavior, manage components |

---

## Quick Commands

### Figma (MCP Connected)
```bash
# Authenticate first time:
# /mcp → figma → Authenticate → Allow Access
```
Then ask me:
- "Implement this Figma frame: [URL]"
- "Extract the color palette from [URL]"
- "Compare this design to my implementation"

### Plasmic (CLI Ready)
```bash
# Sync latest designs
plasmic sync --projects 4ffb6YXS6J8qRiPY69uq36

# Watch for live changes
plasmic watch --projects 4ffb6YXS6J8qRiPY69uq36
```

---

## MaybeCat Identity (Quick Ref)

### The Gradient
```css
linear-gradient(135deg, #EC4899 0%, #F472B6 20%, #FBBF24 50%, #F59E0B 80%, #D97706 100%)
```

### Colors
| Role | Hex |
|------|-----|
| Hot Pink | #EC4899 |
| Fuchsia | #DB2777 |
| Gold | #FBBF24 |
| Amber | #F59E0B |
| Cream | #FEF3C7 |
| Deep Brown | #7C2D12 |

### Typography
- **Headlines:** Cinzel Decorative, Georgia
- **Body:** Georgia
- **Style:** Bold, ornate, NOT minimal

### Vibe Check
- Psychedelic tarot maximalism
- Ornate > clean
- Bold > subtle
- If it looks "tasteful and restrained" — it's WRONG

---

## Project IDs

| Tool | ID |
|------|----|
| Figma | `kIX8fJJs3PIO6uJTQuNu8l` |
| Plasmic | `4ffb6YXS6J8qRiPY69uq36` |
