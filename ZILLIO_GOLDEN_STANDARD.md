# ZILLIO GOLDEN STANDARD
## Single Source of Truth - Extracted from REHome.jsx (95-98/100 A)

**Status:** PRODUCTION READY
**Version:** 1.0.0
**Source:** neom-vision-template/src/pages/REHome.jsx
**Last Updated:** 2026-03-14
**Authority:** REHome.jsx is the ONLY golden standard

---

## 1. TYPOGRAPHY SYSTEM

### Font Family (MANDATORY)
```javascript
// Apply to root element
style={{ fontFamily: "'Outfit', sans-serif" }}

// Import in <head> or component
<style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');`}</style>
```

### Font Weights
```javascript
// Hero headlines
className="font-black"  // 900 weight

// Body text, descriptions
className="font-light"  // 300 weight

// Navigation, buttons
className="font-medium"  // 500 weight
```

### Letter Spacing
```javascript
// Hero headlines
style={{ letterSpacing: "-0.04em" }}  // Tight, condensed
OR
style={{ letterSpacing: "-0.03em" }}  // Slightly less tight

// Section headlines
style={{ letterSpacing: "0.15em" }}   // Wide spacing

// Eyebrow labels
className="tracking-[0.3em]"          // Extra wide

// Navigation
className="tracking-widest"           // Maximum spacing

// Button text
className="tracking-widest"           // Maximum spacing
```

### Text Transform
```javascript
// All major headings
className="uppercase"

// All navigation items
className="uppercase"

// All eyebrow labels
className="uppercase"

// All button text
className="uppercase"
```

---

## 2. COLOR SYSTEM

### Primary Brand Color (GOLD)
```javascript
// Define as constant (REQUIRED)
const GOLD = "#c9a76c";

// Usage examples
style={{ background: GOLD }}
style={{ color: GOLD }}
style={{ background: `linear-gradient(135deg, ${GOLD}, #a07840)` }}
```

### Background Colors
```javascript
// Light sections
className="bg-white"

// Dark sections (hero, properties, testimonials)
className="bg-black"

// NO CSS variables like var(--bg-surface)
```

### Text Colors
```javascript
// On white backgrounds
className="text-gray-900"   // Headings
className="text-gray-400"   // Body text

// On black backgrounds
className="text-white"      // Headings
className="text-white/50"   // Body text
className="text-white/35"   // Subtle text
className="text-white/70"   // Links/hover
```

### Border Colors
```javascript
// On white backgrounds
className="border-black/5"
style={{ borderColor: "rgba(0,0,0,0.05)" }}

// On black backgrounds
className="border-white/10"
className="border-white/8"
className="border-white/20"
```

---

## 3. SPACING SYSTEM

### Section Padding (CRITICAL)
```javascript
// Main sections (standard)
className="py-24 md:py-32"

// Alternative (acceptable)
className="py-24"  // Desktop and mobile same
className="py-32"  // Larger sections

// NO custom values like py-20, py-28
```

### Horizontal Padding
```javascript
// Content sections
className="px-10 md:px-24"

// Navigation (if using RENav pattern)
className="px-8 md:px-16 lg:px-24"

// Footer (if using REFooter pattern)
className="px-8 md:px-20"
```

### Container Max Width
```javascript
className="max-w-7xl mx-auto"  // Standard container
className="max-w-5xl mx-auto"  // Narrower sections
```

### Grid Gaps
```javascript
// Standard content grid
className="gap-12 lg:gap-20"

// Navigation items (if using RENav)
className="gap-7 xl:gap-9"
```

---

## 4. COMPONENT PATTERNS

### Eyebrow Divider (SIGNATURE ELEMENT)
```jsx
{/* Gold horizontal line + label */}
<div className="flex items-center gap-3 mb-6">
  <div className="h-px w-10" style={{ background: GOLD }} />
  <span className="text-xs tracking-[0.3em] font-light uppercase" style={{ color: GOLD }}>
    Eyebrow Label
  </span>
</div>
```

### Hero Headlines (Large Format)
```jsx
{/* Large hero format - for dramatic impact */}
<h1
  className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-white leading-[1.1] mb-8"
  style={{ letterSpacing: "0.15em", whiteSpace: "pre-line" }}
>
  ONEPACK<br />REAL ESTATE
</h1>
```

### Section Headlines
```jsx
<h2
  className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-gray-900 leading-[1.1] mb-8"
  style={{ letterSpacing: "0.15em" }}
>
  Section<br />Headline
</h2>
```

### Primary Button
```jsx
<Link
  to={url}
  className="group inline-flex items-center gap-3 text-white text-sm font-light tracking-widest uppercase px-7 py-3.5 rounded-full transition-all hover:opacity-90"
  style={{ background: `linear-gradient(135deg, ${GOLD}, #a07840)` }}
>
  Button Text <ArrowRight className="w-4 h-4" />
</Link>
```

### Outlined Button (Secondary)
```jsx
<Link
  to={url}
  className="flex items-center gap-3 text-gray-900 text-sm font-light tracking-widest uppercase px-8 py-4 rounded-full"
  style={{ border: "1.5px solid rgba(0,0,0,0.15)" }}
>
  Button Text
</Link>
```

---

## 5. LAYOUT PATTERNS

### Hero Section
```jsx
<section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black">
  {/* Background image */}
  <img
    src={image}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
    style={{ filter: "brightness(0.5)" }}
  />

  {/* Gradient overlay */}
  <div
    className="absolute inset-0"
    style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)" }}
  />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24">
    {/* Eyebrow */}
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px w-12" style={{ background: GOLD }} />
      <span className="text-xs tracking-[0.3em] font-light uppercase" style={{ color: GOLD }}>
        Label
      </span>
    </div>

    {/* Headline */}
    <h1
      className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-white leading-[1.1] mb-8"
      style={{ letterSpacing: "0.15em", whiteSpace: "pre-line" }}
    >
      Hero\nHeadline
    </h1>

    {/* Body */}
    <p className="text-white/50 font-light mb-10 max-w-md leading-relaxed">
      Description text here.
    </p>

    {/* CTA */}
    <div className="flex items-center gap-5">
      {/* Primary button here */}
    </div>
  </div>
</section>
```

### Content Section (Light Background)
```jsx
<section className="bg-white px-10 md:px-24 py-24 md:py-32">
  <div className="max-w-7xl mx-auto">
    {/* Eyebrow */}
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-10" style={{ background: GOLD }} />
      <span className="text-xs tracking-[0.3em] font-light uppercase" style={{ color: GOLD }}>
        Section Label
      </span>
    </div>

    {/* Headline */}
    <h2
      className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-gray-900 leading-[1.1] mb-8"
      style={{ letterSpacing: "0.15em" }}
    >
      Section<br />Headline
    </h2>

    {/* Body */}
    <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
      Content here.
    </p>

    {/* Grid/Content */}
  </div>
</section>
```

### Content Section (Dark Background)
```jsx
<section className="py-24 md:py-32 bg-black text-white">
  <div className="px-10 md:px-24 mb-14 flex items-end justify-between">
    <div>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px w-10" style={{ background: GOLD }} />
        <span className="text-xs tracking-[0.3em] font-light uppercase" style={{ color: GOLD }}>
          Label
        </span>
      </div>

      {/* Headline */}
      <h2
        className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-white leading-[1.1]"
        style={{ letterSpacing: "0.15em" }}
      >
        Section<br />Headline
      </h2>
    </div>
  </div>

  {/* Grid/Content */}
</section>
```

---

## 6. NAVIGATION PATTERN (RENav Component)

### Fixed Navigation Bar
```jsx
// Height MUST be 70px
className="h-[70px]"

// Horizontal padding
className="px-8 md:px-16 lg:px-24"

// Nav items gap
className="gap-7 xl:gap-9"

// Nav link styles
className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors"
```

### Scrolled State
```jsx
// Background when scrolled
style={{
  background: "rgba(0,0,0,0.94)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.06)"
}}
```

---

## 7. FOOTER PATTERN (REFooter Component)

### Footer Structure
```jsx
<footer
  className="border-t px-8 md:px-20 py-16 md:py-20"
  style={{ background: "#000000", borderColor: "rgba(255,255,255,0.10)" }}
>
  {/* Content */}
</footer>
```

### Footer Bottom Bar
```jsx
<div className="px-8 md:px-16 py-5 border-t border-white/10">
  {/* Copyright, legal links */}
</div>
```

---

## 8. IMAGE HANDLING

### Hero/Feature Images
```jsx
<img
  src={url}
  alt=""
  className="w-full h-full object-cover"
  style={{ filter: "brightness(0.5)" }}  // Darken for text readability
/>
```

### Card Images
```jsx
<img
  src={url}
  alt={title}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  style={{ filter: "brightness(0.55)" }}
/>
```

---

## 9. GRADIENTS & OVERLAYS

### Hero Gradient (Behind Content)
```jsx
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)"
  }}
/>
```

### Card Gradient (Bottom to Top)
```jsx
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%)"
  }}
/>
```

### Button Gradient (Gold)
```jsx
style={{
  background: `linear-gradient(135deg, ${GOLD}, #a07840)`
}}
```

---

## 10. ANIMATIONS & TRANSITIONS

### Hover Transitions
```jsx
// Buttons
className="transition-all hover:opacity-90"

// Links
className="transition-colors"

// Images
className="transition-transform duration-700 group-hover:scale-110"
```

### Backdrop Effects
```jsx
// Glassmorphism
style={{
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(24px)"
}}
```

---

## 11. ICONS (Lucide React)

### Standard Icon Usage
```jsx
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";

// Arrow in button
<ArrowRight className="w-4 h-4" />

// Arrow in link
<ArrowUpRight className="w-4 h-4" />

// Play button
<Play className="w-4 h-4 ml-0.5" fill="white" />
```

### Icon Stroke Width
```javascript
// NO custom strokeWidth needed
// Default is 1.5 (correct)
```

---

## 12. MANDATORY RULES

### ✅ ALWAYS USE:
- Direct Tailwind classes (`bg-white`, `text-gray-900`)
- Inline gold constant (`const GOLD = "#c9a76c"`)
- `font-family: "'Outfit', sans-serif"` on root element
- Eyebrow dividers before major sections
- `uppercase` on headings, nav, buttons
- `rounded-full` on buttons
- `py-24 md:py-32` for sections
- `h-[70px]` for navigation

### ❌ NEVER USE:
- CSS variables (`var(--bg-surface)`, `var(--text-primary)`)
- Fonts other than Outfit
- Colors other than gold #c9a76c for accents
- Custom section padding (py-20, py-28, etc.)
- `rounded-lg` on primary buttons
- Navigation height other than 70px

---

## 13. VALIDATION CHECKLIST

Before deploying any page, verify:

- [ ] Font: 'Outfit', sans-serif applied to root
- [ ] Gold: `const GOLD = "#c9a76c"` defined
- [ ] Eyebrow dividers: Present before major sections
- [ ] Typography: font-black on heroes, font-light on body
- [ ] Uppercase: Applied to headings, nav, buttons
- [ ] Letter spacing: -0.03em/-0.04em on heroes, 0.15em on sections
- [ ] Section padding: py-24 md:py-32 or py-24
- [ ] Button shape: rounded-full (not rounded-lg)
- [ ] Button text: tracking-widest uppercase
- [ ] Navigation height: h-[70px]
- [ ] No CSS variables: Only direct Tailwind classes
- [ ] Background alternation: white → black → white pattern
- [ ] Gold gradient: `linear-gradient(135deg, ${GOLD}, #a07840)` on buttons

---

## 14. QUICK REFERENCE

**Font:** 'Outfit', sans-serif
**Gold:** #c9a76c
**Section Padding:** py-24 md:py-32
**Nav Height:** h-[70px]
**Button:** rounded-full, tracking-widest, uppercase
**Eyebrow:** Gold horizontal line + uppercase label
**Headline:** font-light, tracking-[0.2em], uppercase, letterSpacing: "0.15em"
**Body:** font-light, text-gray-400 (light) or text-white/50 (dark)

---

## 15. EXAMPLE IMPLEMENTATION

See complete reference implementation:
- **File:** neom-vision-template/src/pages/REHome.jsx
- **Score:** 95-98/100 (A grade)
- **Status:** PRODUCTION READY

---

**Authority:** This document represents the ONLY brand standard for Zillio.
**Source:** Extracted from REHome.jsx after fixing 11 violations to achieve A grade.
**Version:** 1.0.0
**Last Verified:** 2026-03-14

All zillio-site pages MUST conform to these patterns exactly.
