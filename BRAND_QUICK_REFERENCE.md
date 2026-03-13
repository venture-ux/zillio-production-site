# ZILLIO BRAND QUICK REFERENCE CARD

**For:** Developers, Designers, QA Teams
**Source:** design_tokens.yaml (Golden Standard: TheLine.jsx)
**Last Updated:** 2026-03-13

---

## NEVER VIOLATE THESE (CATASTROPHIC -25 to -30 points)

1. **Font Family:** 'Outfit', sans-serif ONLY
   ```css
   font-family: "'Outfit', sans-serif"
   ```

2. **Gold Accent:** #c9a76c ONLY (no #FFD700, no other golds)
   ```css
   color: #c9a76c
   background: #c9a76c
   ```

3. **Theme Consistency:** Keep dark pages dark, light pages light
   - Dark: #000000, #050505, #0a0a0a
   - Light: #f6f5f1, #faf9f6

---

## CRITICAL PATTERNS (CRITICAL -15 to -20 points)

### Eyebrow Section Header (REQUIRED)
```jsx
<div className="w-px h-16 bg-[#c9a76c] mx-auto mb-8" />
<h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-10"
    style={{ color: "#c9a76c" }}>
  Section Title
</h2>
```

### Section Padding
```jsx
className="py-32"  // Main sections
className="py-24"  // Standard sections
```

### Uppercase Transform
All eyebrows, nav items, buttons MUST be uppercase:
```jsx
className="uppercase"
```

---

## TYPOGRAPHY QUICK GUIDE

### Hero Headings
```jsx
className="text-[12vw] leading-none font-black tracking-tighter uppercase"
style={{ letterSpacing: "-0.04em" }}
```

### Section Large Headings
```jsx
className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase"
style={{ letterSpacing: "0.15em" }}
```

### Section Hero Black
```jsx
className="text-4xl md:text-7xl font-black tracking-tighter uppercase"
style={{ letterSpacing: "-0.03em" }}
```

### Body Large
```jsx
className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800 max-w-4xl mx-auto"
```

### Eyebrows (Labels)
```jsx
// Large
className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase"
style={{ color: "#c9a76c" }}

// Small
className="text-[11px] font-bold tracking-[0.3em] uppercase"
style={{ color: "#c9a76c" }}
```

---

## BUTTON STYLES

### Primary Button
```jsx
className="px-8 py-3.5 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#c9a76c] hover:text-white transition-colors duration-300 shadow-xl"
```

### Outlined Button
```jsx
className="text-white text-xs px-5 py-2.5 tracking-[0.15em] uppercase font-light hover:bg-white hover:text-black transition-all duration-250"
style={{ border: "1px solid rgba(255,255,255,0.4)" }}
```

---

## NAVIGATION

### Height
```jsx
className="h-[70px]"  // ALWAYS this height
```

### Scrolled State
```jsx
style={{
  background: "rgba(0,0,0,0.94)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)"
}}
```

### Default State
```jsx
style={{
  background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)"
}}
```

### Nav Links
```jsx
className="text-xs font-light tracking-[0.18em] uppercase opacity-80 hover:opacity-100 transition-opacity"
```

---

## SPACING SHORTCUTS

### Container Patterns
```jsx
className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24"  // Standard container
className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24"  // Wide container
className="max-w-4xl mx-auto"  // Body text container
```

### Grid Gaps
```jsx
className="gap-12 lg:gap-20"  // Content grid
className="gap-7 xl:gap-9"    // Nav items
className="gap-8"             // Footer grid
```

### Section Spacing
```jsx
className="py-32"  // Main sections (hero, major)
className="py-24"  // Standard sections
className="py-20"  // Medium sections
```

---

## ANIMATION STANDARDS

### Framer Motion FadeIn
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-10%" }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
```

### Hover Transitions
```jsx
className="transition-colors duration-300"  // Color changes
className="transition-opacity"             // Opacity fades
className="transition-all duration-500"     // Multiple properties
```

### Card Hover
```jsx
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
```

### Image Zoom
```jsx
whileHover={{ scale: 1.1 }}
transition={{ duration: 2, ease: "easeOut" }}
```

---

## CAROUSEL COMPONENTS

### Active Dot
```jsx
style={{
  width: "32px",
  height: "3px",
  background: "#c9a76c",
  borderRadius: "2px"
}}
```

### Inactive Dot
```jsx
style={{
  width: "8px",
  height: "3px",
  background: "rgba(255,255,255,0.3)",
  borderRadius: "2px"
}}
```

### Arrow Button
```jsx
className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
```

---

## HERO SECTION PATTERN

```jsx
<section className="relative h-screen w-full flex items-center justify-center pt-20">
  <img
    src="..."
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

  <div className="relative z-10 text-center flex flex-col items-center mt-10">
    <div
      className="w-14 h-14 mb-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm"
      style={{ background: "rgba(255,255,255,0.05)" }}
    >
      <span className="text-white font-black text-[10px] tracking-[0.2em]">
        NEOM
      </span>
    </div>

    <h1
      className="text-[12vw] leading-none font-black tracking-tighter uppercase text-white mb-6"
      style={{ letterSpacing: "-0.04em", textShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
    >
      THE LINE
    </h1>

    <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-white/90 font-bold mb-10">
      New Wonders For The World
    </p>

    <button className="px-8 py-3.5 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#c9a76c] hover:text-white transition-colors duration-300 shadow-xl">
      Get In Touch
    </button>
  </div>
</section>
```

---

## CARD PATTERN (Revolution Section)

```jsx
<motion.div
  className="relative group overflow-hidden border-r border-white/5 last:border-r-0 h-[400px] xl:h-full cursor-pointer"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  <motion.img
    src="..."
    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 2, ease: "easeOut" }}
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-10 flex flex-col justify-end transition-all duration-500">
    <div className="w-12 h-[2px] bg-[#c9a76c] mb-6" />

    <h3 className="text-xl font-bold tracking-[0.15em] uppercase mb-4 leading-snug">
      CARD TITLE
    </h3>

    <motion.p
      className="text-sm font-light text-white/80 leading-relaxed"
      initial={{ y: "100%", opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      Description text that appears on hover...
    </motion.p>
  </div>
</motion.div>
```

---

## ICON STANDARDS

### Lucide Icons
```jsx
import { Play, Search, Menu, X, ChevronDown } from "lucide-react";

<Search className="w-4 h-4" strokeWidth={1.5} />
<Menu className="w-5 h-5" strokeWidth={1.5} />
```

**ALWAYS use strokeWidth={1.5}**

---

## GRADIENT OVERLAYS

### Hero/Carousel
```jsx
className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"
```

### Cards
```jsx
className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"
```

### Section Transitions (Light to Dark)
```jsx
className="absolute inset-0 bg-gradient-to-b from-[#f6f5f1] via-transparent to-[#050505]"
```

### Section Transitions (Dark to Light)
```jsx
className="absolute inset-0 bg-gradient-to-t from-[#f6f5f1] via-transparent to-transparent"
```

---

## FOOTER PATTERN

```jsx
<footer className="bg-black text-white border-t border-white/10">
  {/* Links Section */}
  <div className="px-8 md:px-20 py-16 md:py-20">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {/* Category columns */}
      <div>
        <h4 className="text-white/80 text-xs font-medium tracking-[0.2em] uppercase mb-6">
          Category
        </h4>
        <ul className="space-y-3.5">
          <li>
            <a href="#" className="text-white/35 text-xs hover:text-white/70 transition-colors tracking-wide font-light">
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 px-8 md:px-20 py-6">
    <span className="text-white/30 text-xs font-light">
      © 2026 NEOM. All rights reserved.
    </span>
  </div>
</footer>
```

---

## COMMON MISTAKES TO AVOID

1. **Wrong Gold:** Using #FFD700 instead of #c9a76c
2. **Wrong Font:** Using system fonts instead of 'Outfit'
3. **Missing Tracking:** Forgetting tracking-[0.3em] on eyebrows
4. **Wrong Padding:** Using py-16 instead of py-24/py-32
5. **Missing Uppercase:** Lowercase buttons/nav items
6. **Wrong Nav Height:** Using h-16 instead of h-[70px]
7. **Missing Transitions:** Buttons without hover transitions
8. **Wrong Icon Stroke:** Using default strokeWidth instead of 1.5
9. **Mixed Rounded:** Using rounded-md instead of rounded-full for buttons
10. **Wrong Carousel Dots:** Using 10px instead of 32px for active dots

---

## TESTING CHECKLIST

Before submitting any page, verify:

- [ ] Font is 'Outfit' throughout
- [ ] Gold accent is exactly #c9a76c
- [ ] All eyebrows have gold divider + tracking-[0.3em]
- [ ] Section padding is py-32 or py-24
- [ ] All buttons/nav items are uppercase
- [ ] Navigation height is h-[70px]
- [ ] Buttons have hover:bg-[#c9a76c]
- [ ] Icons use strokeWidth={1.5}
- [ ] Carousel active dots are 32px width
- [ ] All transitions are present

---

**Quick Reference Card for Zillio Brand System**
**Full Documentation:** design_tokens.yaml (165 tokens)
**Extracted From:** TheLine.jsx (Golden Standard)
