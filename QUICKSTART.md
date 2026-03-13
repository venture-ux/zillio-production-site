# ZILLIO Quick Start Guide

**Get your UHNW-tier website up and running in 6 steps.**

---

## Prerequisites

- Claude Code CLI installed
- 6 ZILLIO agents loaded (`~/.claude/agents/zillio-*.md`)
- Brand anchor information ready
- Skeleton HTML framework prepared

---

## Step 1: Prepare Brand Anchor (5 minutes)

Create `01_BRAND_SYSTEM/anchor.md` with your brand information:

```markdown
# ZILLIO Brand Anchor

## Typography
- **Primary Font**: Inter Variable (or SF Pro Display)
- **Secondary Font**: Georgia (or Crimson Pro)
- **Monospace**: JetBrains Mono
- **Weight Preferences**: Bold (700) for headlines, Regular (400) for body

## Color Palette
- **Background Primary**: #FAFAF9 (warm white)
- **Text Primary**: #18181B (near black)
- **Text Secondary**: #52525B (dark gray)
- **Accent**: #18181B (black)
- **Borders**: #E4E4E7 (light gray)

## Spacing Philosophy
- **Base Unit**: 8px (base-8 system)
- **Section Padding**: Generous (8rem desktop, 4rem mobile)
- **Whitespace**: 1.5-2x standard (institutional feel)

## Aesthetic Standard
- **Reference Sites**: su.org, mckinsey.com, blackstone.com
- **Vibe**: Institutional authority, muted sophistication, understated elegance
- **Reading Level**: 14+ (university graduate)

## Banned Elements
- Exclamation points (!)
- Marketing buzzwords: unlock, supercharge, journey, innovative, cutting-edge
- Bouncy animations (elastic, spring, bounce)
- Vibrant colors (max 40% saturation)
```

---

## Step 2: Execute Phase 0 (Brand Extraction) (2 minutes)

```bash
cd "/Users/lgzlholding/Documents/dev-website Templates_cloning from ai/Projects/004 Zillio"

claude --agent zillio-orchestrator \
  "Execute Phase 0: Extract brand system from 01_BRAND_SYSTEM/anchor.md"
```

**Expected Output**: `01_BRAND_SYSTEM/Brand_System.json` (150+ tokens)

---

## Step 3: Execute Phase 1 (Architecture Mapping) (2 minutes)

```bash
claude --agent zillio-architect \
  "Map skeleton from 02_SKELETON/skeleton.html and assign ZIL- block IDs"
```

**Expected Output**: `03_BLOCKS/ZIL_BLOCK_REGISTRY.json`

---

## Step 4: Process Blocks (Automated Loop)

For each block in build sequence:

```bash
BLOCK_ID="ZIL-HERO-01"

# Content
claude --agent zillio-content-strategist \
  "Generate copy for $BLOCK_ID"

# Graphics
claude --agent zillio-graphics-agent \
  "Specify visual assets for $BLOCK_ID"

# Implementation
claude --agent zillio-uiux-engineer \
  "Implement $BLOCK_ID with approved content and assets"

# QA
claude --agent zillio-qa-critic \
  "Audit $BLOCK_ID implementation. Pass threshold: 90/100"
```

---

**Full documentation**: See `ZILLIO_AUTOMATION_SYSTEM.md`
