# ZILLIO BRAND DNA EXTRACTION COMPLETE

**Status:** PRODUCTION_READY
**Extracted By:** Agent Alpha (DNA Extractor)
**Date:** 2026-03-13
**Golden Standard:** TheLine.jsx (http://localhost:5173/TheLine)

---

## EXTRACTION RESULTS

### Files Analyzed
1. **TheLine.jsx** - Main golden standard page (460 lines)
2. **NeomNav.jsx** - Navigation component (86 lines)
3. **NeomFooter.jsx** - Footer component (63 lines)

**Total Source Code:** 609 lines analyzed

---

## DESIGN TOKENS EXTRACTED: 165 TOKENS

### 1. TYPOGRAPHY SYSTEM (32 tokens)
**Font Family:**
- Primary: 'Outfit', sans-serif (weights 300-900)
- Serif: For quotes/testimonials
- Google Fonts import included

**Headings:**
- Hero Display: text-[12vw], font-black, tracking-tighter, letterSpacing: -0.04em
- Section Large: text-5xl md:text-7xl, font-light, tracking-[0.2em]
- Section Hero Black: text-4xl md:text-7xl, font-black, letterSpacing: -0.03em

**Body Text:**
- Large: text-2xl md:text-3xl, font-light, text-gray-800
- Medium: text-xl md:text-2xl, font-light, text-gray-700

**Labels (Eyebrows):**
- Large: text-xs md:text-sm, font-bold, tracking-[0.3em], color: #c9a76c
- Small: text-[11px], font-bold, tracking-[0.3em], color: #c9a76c
- Tiny: text-[10px], font-bold, tracking-[0.2em]

**Navigation:**
- Primary: text-xs, font-light, tracking-[0.18em], uppercase
- Dropdown: text-xs, font-light, tracking-[0.15em]

**Buttons:**
- Primary: text-xs, font-bold, tracking-widest
- CTA: text-xs, font-medium, tracking-[0.15em]

**Footer:**
- Category: text-xs, font-medium, tracking-[0.2em]
- Links: text-xs, font-light, tracking-wide
- Small: text-xs, font-light

**Quotes:**
- Text: text-2xl md:text-4xl, font-light, italic, font-serif

---

### 2. COLOR PALETTE (38 tokens)

**Brand Colors:**
- Gold Accent: #c9a76c (PRIMARY BRAND COLOR)
- Gold Shadow: rgba(201,167,108,0.5)
- NEOM Red: #C41E3A (logo only)

**Backgrounds:**
- Black Pure: #000000
- Black Deep: #050505
- Black Dark: #0a0a0a
- Cream Light: #f6f5f1
- Cream Lighter: #faf9f6
- White: #FFFFFF

**Overlays (11 shades):**
- Black: 95%, 94%, 90%, 80%, 50%, 40%, 30%, 20%, 10%
- Deep Black: 97%
- White: 10%, 5%

**Text Colors (13 variations):**
- White: 100%, 90%, 80%, 70%, 60%, 50%, 40%, 35%, 30%, 25%
- Gray: 800, 700
- Black

**Borders (9 variations):**
- White: 40%, 30%, 20%, 12%, 10%, 8%, 6%, 5%
- Gold: 30%

---

### 3. SPACING SYSTEM (28 tokens)

**Section Vertical:**
- Large: py-32
- Standard: py-24
- Medium: py-20
- Small: py-16
- Compact: py-10
- Tiny: py-6

**Section Horizontal:**
- Desktop: px-8 md:px-16 lg:px-24
- Footer: px-8 md:px-20
- Nav: px-8 md:px-16
- Mobile: px-6

**Containers:**
- Max Width: 5xl, 6xl, 7xl, 4xl
- Always centered: mx-auto

**Gaps:**
- Nav Desktop: gap-7 xl:gap-9
- Nav Mobile: gap-5
- Grid: gap-12 lg:gap-20
- Footer Grid: gap-8
- Footer Links: space-y-3.5
- Carousel: gap-1.5, gap-4

**Margins:**
- Section Title: mb-20
- Section Title Small: mb-10
- Eyebrow to Content: mb-8
- Content Block: mb-6
- Quote Icon: mb-12
- Quote Text: mb-14

**Padding:**
- Button Primary: px-8 py-3.5
- Button Secondary: px-5 py-2.5
- Button Small: px-6 py-4
- Input Field: px-5 py-3.5
- Card Content: p-10

---

### 4. LAYOUT PATTERNS (22 tokens)

**Screen Structure:**
- Hero: h-screen, min-h-[700px]
- Video: h-[70vh] min-h-[500px]
- Carousel: h-screen min-h-[700px]
- Grid Cards: h-[400px] xl:h-[750px]

**Navigation:**
- Height: h-[70px]
- Position: fixed top-0 left-0 w-full z-50
- Scrolled BG: rgba(0,0,0,0.94) + blur(20px)
- Default BG: linear-gradient (black/55% to transparent)
- Dropdown BG: rgba(5,5,5,0.97) + blur(20px)

**Sidebar Dots:**
- Position: fixed right-6 top-1/2 -translate-y-1/2 z-50
- Display: hidden lg:flex
- Layout: flex-col gap-4
- Dot Size: w-1.5 h-1.5
- Active Scale: 1.5x

**Grid Systems:**
- Revolution Cards: grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
- Footer Links: grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6
- Zigzag: flex flex-col md:flex-row gap-12 lg:gap-20
- Zigzag Reverse: md:flex-row-reverse

---

### 5. COMPONENT PATTERNS (32 tokens)

**Hero Section:**
- Wrapper: relative h-screen flex items-center justify-center
- Image: absolute inset-0 object-cover opacity-80
- Overlay: bg-gradient-to-b from-black/50 via-transparent to-black/80
- Badge Circle: w-14 h-14 rounded-full border border-white/20
- Badge BG: rgba(255,255,255,0.05)

**Section Headers (Eyebrow Pattern):**
- Vertical Divider: w-px h-16 bg-[#c9a76c] mx-auto mb-8
- Horizontal Divider: w-12 h-px bg-[#c9a76c] mb-6
- Animated Divider: 48px → 80px width expansion

**Buttons:**
- Primary: bg-white → hover:bg-[#c9a76c], rounded-full, shadow-xl
- Outlined: border rgba(255,255,255,0.4), hover:bg-white hover:text-black
- Footer Subscribe: bg-white, px-6 py-3.5

**Cards (Revolution Section):**
- Wrapper: relative group overflow-hidden border-r border-white/5
- Image: opacity-50 → hover:opacity-100
- Overlay: bg-gradient-to-t from-black/95 via-black/40
- Divider: w-12 h-[2px] bg-[#c9a76c]
- Hover: Card scale(1.02), Image scale(1.1)

**Video Player:**
- Play Button: w-20 h-20 bg-white rounded-full shadow-2xl
- Modal Overlay: bg-black/95 z-[100]

**Carousel:**
- Active Dot: 32px width, 3px height, #c9a76c
- Inactive Dot: 8px width, 3px height, rgba(255,255,255,0.3)
- Arrow Button: w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm

**Footer:**
- Input Field: bg-rgba(255,255,255,0.05), border rgba(255,255,255,0.12)
- Newsletter Divider: border-t border-white/10 pt-10

---

### 6. ANIMATION & MOTION (13 tokens)

**Scroll Animations (Framer Motion):**
- FadeIn: initial {opacity: 0, y: 30} → {opacity: 1, y: 0}
- Duration: 0.8s
- Easing: [0.16, 1, 0.3, 1] (custom cubic-bezier)
- Viewport: once: true, margin: -10%

**Hover Animations:**
- Card Scale: 1.02 (0.4s)
- Image Scale: 1.1 (2.0s)
- Button Scale: 1.1
- Divider ScaleX: 1.5 (origin: left)

**Transitions:**
- Nav Scroll: 500ms
- Colors: 300ms
- Opacity: transition-opacity
- Transform: 300ms
- All: 500ms

**Carousel:**
- Fade Initial: opacity: 0, scale: 1.05
- Fade Animate: opacity: 1, scale: 1
- Duration: 1.0s

**Parallax:**
- Mouse Tracking: translate(x * 0.01px, y * 0.01px) scale(1.05)
- Spring: stiffness: 50, damping: 20

---

### 7. GRADIENTS & EFFECTS (12 tokens)

**Background Gradients:**
- Hero Overlay: from-black/50 via-transparent to-black/80
- Section Top: from-[#f6f5f1] via-transparent to-transparent
- Section Bottom: from-[#f6f5f1] via-transparent to-[#050505]
- Carousel: from-black/90 via-black/20 to-black/40
- Card: from-black/95 via-black/40 to-transparent
- Video: black/30 → hover:black/10
- Nav Default: linear-gradient(rgba(0,0,0,0.55) to transparent)

**Backdrop:**
- Blur Strong: backdrop-blur-sm
- Blur Nav: blur(20px)

**Shadows:**
- Text Hero: 0 10px 30px rgba(0,0,0,0.3)
- Button Primary: shadow-xl
- Card Image: shadow-2xl
- Play Button: shadow-2xl
- Gold Glow: 0 0 10px rgba(201,167,108,0.5)

---

### 8. BRAND VIOLATIONS (24 violation types defined)

**CATASTROPHIC (-25 to -30 points):**
- Theme Inversion (dark on light or vice versa)
- Wrong Primary Font (not 'Outfit')
- Wrong Gold Color (not #c9a76c)

**CRITICAL (-15 to -20 points):**
- Missing Eyebrow Divider
- Wrong Eyebrow Tracking (not tracking-[0.3em])
- Missing Uppercase Transform
- Wrong Section Padding (not py-24/py-32)

**HIGH (-10 to -12 points):**
- Wrong Button Tracking (not tracking-widest)
- Wrong Hero Letter Spacing (not -0.04em/-0.03em)
- Wrong Overlay Gradient
- Wrong Nav Height (not h-[70px])
- Missing Font Weight (not font-black/font-light)

**MEDIUM (-6 to -8 points):**
- Wrong Gap Spacing
- Wrong Max Width
- Missing Transition
- Wrong Carousel Dot Width (not 32px active)

**LOW (-2 to -5 points):**
- Wrong Border Opacity
- Inconsistent Backdrop Blur
- Missing Hover State
- Wrong Icon Stroke (not 1.5)
- Inconsistent Rounded Corners

---

### 9. SCORING SYSTEM (100 points total)

**Breakdown:**
- Typography Compliance: 25 points
- Color Compliance: 20 points
- Spacing Compliance: 15 points
- Component Patterns: 20 points
- Animation Effects: 10 points
- Layout Structure: 10 points

**Grading Scale:**
- S Tier: 95-100 (Perfect)
- A Tier: 85-94 (Excellent)
- B Tier: 70-84 (Good)
- C Tier: 50-69 (Acceptable)
- D Tier: 30-49 (Poor)
- F Tier: 0-29 (Fail)

---

## KEY BRAND RULES

### THE GOLDEN STANDARD
1. **Font:** 'Outfit' ONLY (300-900 weights)
2. **Gold Accent:** #c9a76c ONLY (no other gold shades)
3. **Eyebrow Pattern:** ALWAYS use gold divider (w-px h-16 OR w-12 h-px) + uppercase label with tracking-[0.3em]
4. **Letter Spacing:** Hero -0.04em, Large -0.03em, Eyebrows +0.3em
5. **Section Padding:** py-32 (main) or py-24 (standard)
6. **Button Style:** rounded-full, tracking-widest, px-8 py-3.5
7. **Animations:** Cubic-bezier [0.16, 1, 0.3, 1], duration 0.8s
8. **Navigation:** h-[70px], scrolled bg-rgba(0,0,0,0.94) + blur(20px)
9. **Carousel Dots:** 32px active, 8px inactive, 3px height
10. **Icon Stroke:** strokeWidth={1.5} for all Lucide icons

### BACKGROUND PATTERN
Pages alternate: **black → cream → black**
- Black sections: #000000, #050505, #0a0a0a
- Cream sections: #f6f5f1, #faf9f6

### TYPOGRAPHY HIERARCHY
- **Hero:** font-black (900), text-[12vw]
- **Section Titles:** font-light (300), text-5xl md:text-7xl
- **Body:** font-light (300), text-2xl md:text-3xl
- **Labels:** font-bold (700), text-xs, tracking-[0.3em]
- **Nav/Buttons:** font-light (300) nav, font-bold (700) buttons

---

## USAGE FOR AGENT BETA

Agent Beta will use this file to:
1. Load design_tokens.yaml as the golden standard
2. Scan target page for violations
3. Compare each component against token patterns
4. Generate audit_report_[PageName].yaml with:
   - Violation type
   - Severity level
   - Points deducted
   - Component location
   - Correct pattern from tokens

---

## USAGE FOR AGENT GAMMA

Agent Gamma will:
1. Read audit_report_[PageName].yaml from Beta
2. Load design_tokens.yaml for correct patterns
3. Generate fix_script.sh with Edit commands
4. Prioritize by severity (CATASTROPHIC first)
5. Include before/after examples

---

## FILE DETAILS

**Output File:** design_tokens.yaml
**Lines:** 722 lines
**Size:** ~35 KB
**Format:** YAML (human + machine readable)
**Location:** `/Users/lgzlholding/Documents/dev-website Templates_cloning from ai/Projects/004 Zillio/design_tokens.yaml`

---

## NEXT STEPS

1. **Agent Beta:** Ready to audit subpages against this golden standard
2. **Agent Gamma:** Ready to generate fixes from Beta's audit reports
3. **Updates:** Only update this file after major homepage rebrand

---

**EXTRACTION COMPLETE** - The Zillio brand DNA is now fully documented and ready for automated brand consistency audits.

**Agent Alpha signing off.**
