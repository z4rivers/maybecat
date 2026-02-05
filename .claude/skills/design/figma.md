---
name: figma
description: "Figma MCP integration for design-to-code. Extract designs, colors, typography, components. Generate React/Tailwind code from frames."
---

# Figma MCP Mastery

## Quick Start

```bash
# Already configured. Authenticate:
# Type /mcp in Claude Code → select figma → Authenticate → Allow Access
```

**Your file:** `kIX8fJJs3PIO6uJTQuNu8l` (Maybe Cat - Learning Figma)

---

## Available Tools

| Tool | What It Does |
|------|--------------|
| `get_design_context` | Extracts full design hierarchy, layout, styles → generates React + Tailwind |
| `get_variable_defs` | Pulls design tokens: colors, spacing, typography |
| `get_screenshot` | Captures visual screenshot for comparison |
| `get_metadata` | Returns sparse XML with layer IDs, names, positions, sizes |
| `get_code_connect_map` | Shows mappings between Figma nodes and your codebase components |

---

## Workflow: Design to Code

### Step 1: Prepare Your Figma File
Good Figma files = good code output.

**DO:**
- Use **Auto Layout** everywhere (maps to flexbox)
- Apply **variables** for colors, spacing, typography
- Name layers semantically (`hero-section`, `cta-button`, not `Frame 47`)
- Use **components** for repeating elements
- Add **annotations** for hover states, interactions

**DON'T:**
- Leave layers as "Group 5" or "Rectangle 1"
- Use absolute positioning when Auto Layout works
- Create one-off styles instead of using tokens

### Step 2: Copy the Frame Link
1. Select the frame in Figma
2. Right-click → Copy link to selection
3. Paste to me with your request

### Step 3: Prompt Effectively

**Basic:**
```
Implement this Figma frame: [URL]
```

**Better:**
```
Implement this Figma frame using React + Tailwind.
Use our existing Button component from src/components/ui.
Match the MaybeCat style guide (hot pink + gold gradient).
[URL]
```

**Best:**
```
Generate a React component from this Figma frame: [URL]

Requirements:
- TypeScript with proper types
- Tailwind CSS (we use the default config)
- Use existing components: Button, Card from src/components/ui
- Add onClick handler for the CTA button
- Make it responsive (mobile-first)

Put the file at: src/components/marketing/HeroSection.tsx
```

---

## Common Prompts

### Extract Design Tokens
```
What color and spacing variables are used in my Figma selection?
Extract the typography tokens from this design.
Pull the complete color palette from [URL].
```

### Generate Components
```
Generate this card component in React + Tailwind: [URL]
Implement the selected frame using our existing Stack layout component.
Create a responsive version of this hero section.
```

### Compare & Validate
```
Compare this Figma design against my current implementation.
What's missing between the design and src/components/Hero.tsx?
Analyze the design for accessibility issues.
```

### Improve Figma Files
```
Analyze this design - what's missing for good codegen?
Suggest better layer naming for this frame.
What variables should I create based on this design?
```

---

## What You Can Extract

### Design Tokens
- **Colors:** Fill, stroke, named variables
- **Typography:** Font family, size, weight, line-height, letter-spacing
- **Spacing:** Padding, margins, gaps (from Auto Layout)
- **Border radius:** Corner values
- **Shadows:** Drop shadows, blurs

### Layout
- Auto Layout → Flexbox (direction, align, justify, gap)
- Constraints → Responsive behavior hints
- Frame dimensions and positions

### Components
- Component names and variants
- Instance overrides
- Boolean properties, text content

---

## Code Connect (Advanced)

If you have Figma Organization/Enterprise with Dev Mode:

### Map Figma Components to Code
```
Link PlasmicButton in Figma to src/components/Button.tsx
Create a Code Connect mapping for our Card component.
```

When mapped, I'll generate code using your **actual component names and imports** instead of creating new ones.

---

## Troubleshooting

### "Token limit exceeded"
Large designs hit context limits. Solutions:
- Select smaller sections
- Ask me to increase `MAX_MCP_OUTPUT_TOKENS` to 50000

### Authentication Issues
```
# Re-authenticate:
/mcp → figma → disconnect → reconnect → Allow Access
```

### Slow or Failed Requests
- Toggle MCP off/on in settings
- Verify Figma desktop app is running (for local server)
- Check you have permission to access the file

### Rate Limits
- **Starter/View seats:** 6 tool calls/month
- **Dev/Full seats:** Standard API limits (per-minute)

---

## Best Practices

### 1. Break Up Large Designs
Don't try to generate an entire page at once. Do it section by section:
- Header component
- Hero section
- Feature cards
- Footer

### 2. Specify Your Stack
Always tell me:
- Framework (React, Vue, Svelte)
- Styling (Tailwind, CSS Modules, styled-components)
- Existing components to reuse
- Where to put the file

### 3. Iterate, Don't Regenerate
After first generation:
- Review the code
- Ask for specific fixes: "Make the button larger" not "regenerate everything"
- Use the design as reference, not gospel

### 4. Screenshots for Validation
```
Take a screenshot of [URL] so I can compare to my implementation.
```

---

## MaybeCat-Specific Notes

When generating from Figma for MaybeCat:
- Apply the hot pink → gold gradient: `linear-gradient(135deg, #EC4899, #FBBF24, #D97706)`
- Use Georgia/Cinzel Decorative for typography
- Ensure ornate, maximalist styling - reject anything "clean" or "minimal"
- Check against `/design:style-guide` after generation

---

## Sources
- [Figma MCP Server Guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- [Developer Docs](https://developers.figma.com/docs/figma-mcp-server/)
- [Effective Prompts](https://developers.figma.com/docs/figma-mcp-server/write-effective-prompts/)
- [Builder.io Workflow Guide](https://www.builder.io/blog/claude-code-figma-mcp-server)
