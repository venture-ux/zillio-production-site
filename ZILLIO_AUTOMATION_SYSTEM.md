# ZILLIO Multi-Agent Automation System

**Version**: 1.0.0
**Status**: PRODUCTION READY
**Date**: 2026-03-13
**Target Audience**: UHNW ($100M+) individuals, family offices, industry titans
**Quality Standard**: Singularity University (SU.org) tier

---

## System Overview

ZILLIO is a **100% autonomous multi-agent pipeline** for developing production-ready, UHNW-tier websites. The system operates through 6 specialized agents orchestrated by a master coordinator, ensuring:

- **Component-driven architecture** with unique ZIL- block IDs
- **Absolute preservation** of skeleton structure (zero deletions)
- **Brand system enforcement** via Brand_System.json
- **Binary quality gates** (90/100 minimum pass threshold)
- **Institutional sophistication** (SU.org aesthetic standard)

### The 6 Specialized Agents

1. **@zillio-orchestrator** - Master coordinator, Phase 0 brand extraction, delegation manager
2. **@zillio-architect** - Skeleton mapper, ZIL- block ID authority
3. **@zillio-content-strategist** - UHNW copywriter, zero marketing fluff
4. **@zillio-graphics-agent** - Visual asset strategist, muted sophistication enforcer
5. **@zillio-uiux-engineer** - Front-end implementer, preservation protocol enforcer
6. **@zillio-qa-critic** - Quality gatekeeper, binary Pass/Fail auditor

---

## Project Structure

```
/004 Zillio/
├── 01_BRAND_SYSTEM/
│   ├── Brand_System.json           # Design system source of truth (150+ tokens)
│   └── extraction_notes.md         # Phase 0 extraction notes
│
├── 02_SKELETON/
│   ├── skeleton.html               # Original skeleton framework (IMMUTABLE)
│   └── skeleton_backup.html        # Backup copy
│
├── 03_BLOCKS/
│   ├── ZIL_BLOCK_REGISTRY.json     # Complete block manifest (42+ blocks)
│   ├── ZIL-NAV-MAIN/
│   │   ├── content.md              # Approved copy from Content Strategist
│   │   ├── assets.md               # Visual specifications from Graphics Agent
│   │   ├── implementation.tsx      # Code from UI/UX Engineer
│   │   └── qa_report.md            # Quality audit from QA Critic
│   ├── ZIL-HERO-01/
│   └── [... all other blocks]
│
├── 04_ASSETS/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── 05_BUILD/
│   ├── src/
│   │   ├── components/             # All approved ZIL- blocks
│   │   ├── styles/
│   │   └── App.tsx                 # Master assembly
│   └── public/
│
└── ZILLIO_AUTOMATION_SYSTEM.md     # This documentation
```

---

## The Pipeline: Phase 0 → Architecture → Content → Graphics → UI/UX → QA

### **Phase 0: Brand System Extraction & Lockdown**

**Agent**: `@zillio-orchestrator`

**Input**:
- Brand anchor information (fonts, colors, spacing philosophy)
- Reference sites (e.g., su.org, mckinsey.com, blackstone.com)
- Content guidelines (UHNW tone, banned words, reading level)

**Process**:
1. Ingest brand anchor
2. Extract typography (6 scales, 3 font families)
3. Extract colors (12+ hex codes organized by category)
4. Extract spacing (base-8 system, rem/px multiples)
5. Define aesthetic rules (whitespace, contrast, animations)
6. Generate `Brand_System.json` (150+ tokens)

**Output**: `01_BRAND_SYSTEM/Brand_System.json` (PRODUCTION_READY)

**Completion Criteria**:
- ✅ 150+ design tokens documented
- ✅ All colors as exact hex codes
- ✅ Typography scales using clamp() functions
- ✅ Spacing follows base-8 multiples
- ✅ Aesthetic rules enforce SU.org tier

**Example Invocation**:
```bash
# Using Claude Code Task tool
claude --agent zillio-orchestrator "Execute Phase 0: Extract brand system from provided anchor and generate Brand_System.json"
```

---

### **Phase 1: Architecture Mapping**

**Agent**: `@zillio-architect`

**Input**:
- Skeleton HTML framework (from `02_SKELETON/skeleton.html`)
- Brand anchor information
- Component hierarchy guidelines

**Process**:
1. Count total skeleton nodes (e.g., 42 components)
2. Classify each component (NAV, HERO, AUTH, GRID, etc.)
3. Assign unique ZIL- IDs (e.g., ZIL-NAV-MAIN, ZIL-HERO-01)
4. Map parent-child relationships
5. Define build sequence based on dependencies
6. Generate `ZIL_BLOCK_REGISTRY.json`

**Output**: `03_BLOCKS/ZIL_BLOCK_REGISTRY.json` (complete block manifest)

**Completion Criteria**:
- ✅ Every skeleton component has ZIL- ID
- ✅ Zero deletions from original skeleton
- ✅ Hierarchical relationships mapped
- ✅ Build sequence logical (dependencies first)
- ✅ Preservation audit: 0 deletions

**Example Invocation**:
```bash
claude --agent zillio-architect "Map skeleton from 02_SKELETON/skeleton.html and assign ZIL- block IDs. Generate ZIL_BLOCK_REGISTRY.json"
```

---

### **Phase 2: Content Generation** (Parallel Processing)

**Agent**: `@zillio-content-strategist`

**Input** (per block):
- Block ID (e.g., `ZIL-HERO-01`)
- Block type (Hero, Authority Grid, Resource Grid)
- Content requirements (headline max words, subheadline max words)
- Conceptual brief ("Position Zillio as institutional-grade wealth infrastructure")
- `Brand_System.json` excerpt (typography scales)

**Process**:
1. Research macroeconomic trends (family office statistics, UHNW allocation data)
2. Draft institutional-grade copy (14+ reading level)
3. Enforce zero marketing buzzwords
4. Eliminate exclamation points
5. Ground in data-driven insights
6. Output Markdown-formatted copy

**Output** (per block): `03_BLOCKS/ZIL-HERO-01/content.md`

**Completion Criteria**:
- ✅ Zero banned buzzwords
- ✅ No exclamation points
- ✅ 14+ grade reading level
- ✅ At least 1 quantified metric per 50 words
- ✅ Institutional tone (SU.org standard)
- ✅ Word count compliance

**Example Invocation**:
```bash
claude --agent zillio-content-strategist "Generate copy for ZIL-HERO-01 (Hero Section). Requirements: Headline 12 words max, subheadline 25 words max, body 50 words max. Brief: Position Zillio as institutional wealth infrastructure for $100M+ family offices."
```

---

### **Phase 3: Graphics Specification** (Parallel Processing)

**Agent**: `@zillio-graphics-agent`

**Input** (per block):
- Block ID (e.g., `ZIL-HERO-01`)
- Visual requirements (type, dimensions, mood)
- Content context (hero headline for context)
- `Brand_System.json` colors (for palette matching)

**Process**:
1. Analyze visual requirements
2. Generate AI image generation prompt (Midjourney/DALL-E format)
3. Specify stock photo search parameters (Unsplash/Adobe Stock)
4. Ensure muted palette (20-40% saturation)
5. Specify high resolution (4K+ minimum)
6. Enforce professional composition (40%+ negative space)

**Output** (per block): `03_BLOCKS/ZIL-HERO-01/assets.md`

**Completion Criteria**:
- ✅ Muted palette (saturation <40%)
- ✅ High resolution (4K+ specified)
- ✅ Professional composition
- ✅ No people (unless corporate/professional only)
- ✅ Brand system color alignment
- ✅ Both AI prompt + stock search provided

**Example Invocation**:
```bash
claude --agent zillio-graphics-agent "Specify visual assets for ZIL-HERO-01 (Hero background). Requirements: 1920x1080 minimum, muted sophisticated professional, convey institutional authority. Generate AI prompt + stock search parameters."
```

---

### **Phase 4: UI/UX Implementation** (Sequential, Per Block)

**Agent**: `@zillio-uiux-engineer`

**Input** (per block):
- Block ID (e.g., `ZIL-HERO-01`)
- Skeleton HTML (from registry)
- Approved copy (from Content Strategist)
- Visual assets (from Graphics Agent)
- `Brand_System.json` (complete)

**Process**:
1. Read skeleton HTML structure
2. Insert approved copy into skeleton nodes
3. Apply `Brand_System.json` variables (exact hex codes, clamp() values)
4. Implement visual assets (background images, icons)
5. Add micro-interactions (fade-up reveals, hover states with cubic-bezier)
6. Ensure responsive design (mobile-first, clamp() typography)
7. Output complete, production-ready code (no truncation)

**Output** (per block): `03_BLOCKS/ZIL-HERO-01/implementation.tsx`

**Completion Criteria**:
- ✅ All skeleton nodes preserved (no deletions)
- ✅ Brand_System.json values applied exactly
- ✅ Micro-interactions use cubic-bezier easing
- ✅ Animation durations: 0.2s-0.7s
- ✅ TypeScript types defined
- ✅ Accessibility (WCAG AAA, semantic HTML, alt text)
- ✅ Complete code (no placeholders or truncation)

**Example Invocation**:
```bash
claude --agent zillio-uiux-engineer "Implement ZIL-HERO-01 using approved content from 03_BLOCKS/ZIL-HERO-01/content.md, assets from assets.md, and Brand_System.json. Preserve all skeleton nodes. Output complete production-ready React + TypeScript + Tailwind code."
```

---

### **Phase 5: Quality Assurance** (Sequential, Per Block)

**Agent**: `@zillio-qa-critic`

**Input** (per block):
- Block ID (e.g., `ZIL-HERO-01`)
- Implementation code (from UI/UX Engineer)
- Original skeleton HTML
- Approved copy
- `Brand_System.json`

**Process** (4 Binary Criteria):

**Criterion 1: Structural Integrity (25 points)**
- Audit: Compare skeleton nodes vs. implementation nodes
- Pass: Same count, same hierarchy, no deletions
- Fail: Any node deleted, truncated, or altered

**Criterion 2: System Compliance (35 points)**
- Audit: Extract all colors, typography, spacing → Compare to Brand_System.json
- Pass: 100% exact matches (hex codes, clamp() values, base-8 multiples)
- Fail: Any invented value, approximation, or deviation

**Criterion 3: Linguistic Authority (25 points)**
- Audit: Search for banned buzzwords, exclamation points, reading level
- Pass: Zero banned words, no !, 14+ reading level
- Fail: Any buzzword, any !, reading level <14

**Criterion 4: Aesthetic Polish (15 points)**
- Audit: Extract transitions/animations → Check easing, durations
- Pass: Cubic-bezier easing, 0.2s-0.7s durations, subtle effects
- Fail: Bouncy animations, linear easing, >0.7s durations

**Scoring**:
- Each criterion: Full points or 0 points (binary, no partial credit)
- Total: Sum of passed criteria
- **Pass Threshold**: 90/100 minimum

**Output** (per block): `03_BLOCKS/ZIL-HERO-01/qa_report.md`

**Completion Criteria**:
- ✅ Score ≥90/100 → PASS (approve for integration)
- ❌ Score <90/100 → FAIL (detailed error report, route back to agent)

**Example Invocation**:
```bash
claude --agent zillio-qa-critic "Audit ZIL-HERO-01 implementation from 03_BLOCKS/ZIL-HERO-01/implementation.tsx against Brand_System.json and skeleton. Execute 4-criteria checklist. Issue Pass/Fail verdict."
```

**If FAIL**: Generate error report with line numbers and specific fixes. Route back to `@zillio-uiux-engineer` or `@zillio-content-strategist` for iteration.

**Iteration Limit**: Maximum 3 attempts per block. After 3 failures, escalate to Orchestrator for manual intervention.

---

## Standard Operating Procedure (The Loop)

The Orchestrator executes this loop for each of 42+ blocks:

```
1. STATE ANALYSIS
   └─> Review ZIL_BLOCK_REGISTRY.json
   └─> Identify next pending block (e.g., ZIL-HERO-01)

2. TASK FORMULATION
   └─> Break block into tasks:
       - Content generation
       - Graphics specification
       - UI/UX implementation
       - QA audit

3. DELEGATION (Sequential Execution)

   A. CONTENT + GRAPHICS (Parallel)
      ├─> @zillio-content-strategist → content.md
      └─> @zillio-graphics-agent → assets.md

   B. UI/UX IMPLEMENTATION (Sequential, waits for A)
      └─> @zillio-uiux-engineer → implementation.tsx

   C. QA AUDIT (Sequential, waits for B)
      └─> @zillio-qa-critic → qa_report.md

4. AUDIT & ROUTE

   IF qa_report.md = PASS:
      ├─> Integrate block into 05_BUILD/src/components/
      ├─> Update ZIL_BLOCK_REGISTRY.json (status: "approved")
      └─> Proceed to next block

   IF qa_report.md = FAIL:
      ├─> Generate error report
      ├─> Route back to failing agent (UI/UX or Content)
      ├─> Increment iteration count
      └─> Re-execute failed phase

5. ITERATION CONTROL

   IF iteration_count ≤ 3:
      └─> Retry with fixes

   IF iteration_count > 3:
      ├─> Escalate to Orchestrator
      ├─> Flag for manual intervention
      └─> Document failure pattern

6. COMPLETION CHECK

   IF all_blocks_approved:
      ├─> Assemble final build (05_BUILD/)
      ├─> Generate deployment package
      └─> Output PRODUCTION_READY status

   ELSE:
      └─> Continue loop with next pending block
```

---

## Agent Invocation Reference

### Using Claude Code Task Tool

```bash
# Phase 0: Brand System Extraction
claude --agent zillio-orchestrator \
  "Execute Phase 0: Extract brand system from anchor at 01_BRAND_SYSTEM/anchor.md. Generate Brand_System.json."

# Phase 1: Architecture Mapping
claude --agent zillio-architect \
  "Map skeleton from 02_SKELETON/skeleton.html. Assign ZIL- block IDs. Generate ZIL_BLOCK_REGISTRY.json with build sequence."

# Phase 2: Content Generation (per block)
claude --agent zillio-content-strategist \
  "Generate copy for ZIL-HERO-01. Brief: Institutional wealth infrastructure for $100M+ family offices. Max: Headline 12w, Subheadline 25w, Body 50w."

# Phase 3: Graphics Specification (per block)
claude --agent zillio-graphics-agent \
  "Specify visual assets for ZIL-HERO-01. Requirements: Hero background 1920x1080, muted professional, institutional authority."

# Phase 4: UI/UX Implementation (per block)
claude --agent zillio-uiux-engineer \
  "Implement ZIL-HERO-01 with content from 03_BLOCKS/ZIL-HERO-01/content.md, assets from assets.md, Brand_System.json. Preserve skeleton. Output complete code."

# Phase 5: QA Audit (per block)
claude --agent zillio-qa-critic \
  "Audit ZIL-HERO-01 implementation. Execute 4-criteria checklist. Pass threshold: 90/100. Issue verdict."
```

### Programmatic Invocation (Python Example)

```python
import subprocess
import json

def invoke_agent(agent_name, prompt):
    """Invoke ZILLIO agent via Claude Code CLI"""
    cmd = ["claude", "--agent", agent_name, prompt]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.stdout

# Phase 0
orchestrator_output = invoke_agent(
    "zillio-orchestrator",
    "Execute Phase 0: Extract brand system from 01_BRAND_SYSTEM/anchor.md"
)

# Phase 1
architect_output = invoke_agent(
    "zillio-architect",
    "Map skeleton from 02_SKELETON/skeleton.html"
)

# Load registry
with open("03_BLOCKS/ZIL_BLOCK_REGISTRY.json") as f:
    registry = json.load(f)

# Phase 2-5: Process each block
for block in registry["build_sequence"]:
    block_id = block["id"]

    # Content
    content_output = invoke_agent(
        "zillio-content-strategist",
        f"Generate copy for {block_id}. Brief: {block['brief']}"
    )

    # Graphics
    graphics_output = invoke_agent(
        "zillio-graphics-agent",
        f"Specify visual assets for {block_id}"
    )

    # UI/UX
    uiux_output = invoke_agent(
        "zillio-uiux-engineer",
        f"Implement {block_id} with approved content and assets"
    )

    # QA
    qa_output = invoke_agent(
        "zillio-qa-critic",
        f"Audit {block_id} implementation. Pass threshold: 90/100"
    )

    # Parse QA verdict
    if "STATUS: PASS" in qa_output:
        print(f"✅ {block_id} APPROVED")
    else:
        print(f"❌ {block_id} FAILED - Iteration required")
```

---

## Quality Standards Summary

| Criteria | Standard | Enforcement |
|----------|----------|-------------|
| **Target Audience** | UHNW $100M+ | Content Strategist |
| **Aesthetic** | SU.org tier | QA Critic (all 4 criteria) |
| **Typography** | clamp() fluid scales | UI/UX Engineer + QA |
| **Colors** | Exact hex matches | UI/UX Engineer + QA |
| **Spacing** | Base-8 multiples | UI/UX Engineer + QA |
| **Reading Level** | 14+ (university) | Content Strategist + QA |
| **Buzzwords** | Zero tolerance | Content Strategist + QA |
| **Exclamation Points** | Banned | Content Strategist + QA |
| **Animations** | Cubic-bezier only | UI/UX Engineer + QA |
| **Skeleton Preservation** | 100% (no deletions) | UI/UX Engineer + QA |
| **Brand Compliance** | Exact value matching | QA Critic (35 points) |
| **Pass Threshold** | 90/100 minimum | QA Critic (binary) |

---

## File Locations

| File | Path | Purpose |
|------|------|---------|
| **Agent Definitions** | `~/.claude/agents/zillio-*.md` | 6 agent system prompts |
| **Brand System** | `01_BRAND_SYSTEM/Brand_System.json` | Design system source of truth (150+ tokens) |
| **Skeleton** | `02_SKELETON/skeleton.html` | Original framework (IMMUTABLE) |
| **Block Registry** | `03_BLOCKS/ZIL_BLOCK_REGISTRY.json` | Complete block manifest |
| **Block Outputs** | `03_BLOCKS/ZIL-[ID]/` | Per-block content, assets, code, QA reports |
| **Final Build** | `05_BUILD/src/components/` | Approved production-ready blocks |
| **Documentation** | `ZILLIO_AUTOMATION_SYSTEM.md` | This file |

---

## Next Steps

### To Initialize ZILLIO Project:

1. **Prepare Brand Anchor** (`01_BRAND_SYSTEM/anchor.md`)
   - Typography: Font families, weight preferences
   - Colors: Primary palette (12+ hex codes)
   - Spacing: Base unit (4, 8, or 16px)
   - Aesthetic: Reference sites (su.org, mckinsey.com)
   - Tone: UHNW guidelines, banned words list

2. **Prepare Skeleton** (`02_SKELETON/skeleton.html`)
   - Complete HTML framework
   - All structural elements present
   - Class names as placeholders
   - Component hierarchy clear

3. **Execute Phase 0**
   ```bash
   claude --agent zillio-orchestrator \
     "Execute Phase 0: Extract brand system from 01_BRAND_SYSTEM/anchor.md. Generate Brand_System.json with 150+ tokens."
   ```

4. **Execute Phase 1**
   ```bash
   claude --agent zillio-architect \
     "Map skeleton from 02_SKELETON/skeleton.html. Assign ZIL- block IDs. Generate ZIL_BLOCK_REGISTRY.json."
   ```

5. **Begin Block-by-Block Pipeline**
   - For each block in `build_sequence`:
     - Phase 2: Content + Graphics (parallel)
     - Phase 3: UI/UX Implementation
     - Phase 4: QA Audit
     - Integration or iteration

---

## System Status

- **Version**: 1.0.0
- **Status**: PRODUCTION READY
- **Agents Created**: 6/6 ✅
- **Brand System Template**: Created ✅
- **Registry Template**: Created ✅
- **Documentation**: Complete ✅
- **Ready for Deployment**: YES ✅

---

**Master Orchestrator**: `@zillio-orchestrator`
**Agent Team**: 6 specialists (Architect, Content, Graphics, UI/UX, QA)
**Quality Standard**: 90/100 minimum (UHNW tier)
**Output**: Production-ready, institutional-grade, UHNW-targeted website
