# DESIGN.md

# Visual Design System

## 1. Design Direction

### Core Style

**Brutalist Editorial Digital Studio**

Keywords:

- brutalist
- editorial
- Swiss-inspired grid
- high contrast
- oversized typography
- raw geometry
- asymmetry
- monochrome
- experimental
- premium
- art-directed

The supplied screenshot is the primary composition reference.

Do not create a generic portfolio template.

---

# 2. Color System

## Primary

```css
--color-black: #0A0A0A;
--color-white: #F7F7F2;
--color-yellow: #F4E400;
--color-red: #FF2A1F;
--color-gray: #B8B8B2;
```

### Usage

Black:
- typography
- borders
- navigation
- footer

White:
- page background
- cards
- negative space

Yellow:
- primary CTA
- availability badge
- small graphic accents

Red:
- selected project highlight
- major CTA section
- experimental accent

Gray:
- metadata
- secondary copy
- inactive states

No gradients.

---

# 3. Typography

## Headings

Use a heavy condensed grotesk.

Preferred order:

1. locally supplied condensed font if available
2. `Arial Narrow`
3. `Helvetica Neue`
4. `Arial`
5. sans-serif fallback

Recommended CSS:

```css
font-family:
  "Arial Narrow",
  "Helvetica Neue",
  Arial,
  sans-serif;

font-weight: 900;
text-transform: uppercase;
letter-spacing: -0.055em;
```

## Body

```css
font-family:
  Inter,
  Helvetica,
  Arial,
  sans-serif;
```

If no external font is loaded, use a system sans stack.

---

# 4. Type Scale

Use fluid typography.

```css
--text-xs: clamp(0.65rem, 0.6rem + 0.15vw, 0.8rem);
--text-sm: clamp(0.75rem, 0.7rem + 0.2vw, 0.95rem);
--text-md: clamp(0.95rem, 0.85rem + 0.35vw, 1.15rem);
--text-lg: clamp(1.5rem, 1.2rem + 1vw, 2.5rem);
--text-xl: clamp(3rem, 7vw, 8rem);
--text-display: clamp(4rem, 10vw, 11rem);
```

Hero typography must dominate the visual hierarchy.

---

# 5. Grid System

Desktop:

```css
grid-template-columns: repeat(12, minmax(0, 1fr));
```

Gap:

```css
gap: 0;
```

The reference aesthetic depends on **visible grid lines** rather than whitespace-only separation.

Use borders:

```css
border: 1px solid var(--color-black);
```

---

# 6. Spacing

Base unit:

```text
4px
```

Suggested scale:

```text
4
8
12
16
24
32
48
64
96
128
160
```

Use large spacing only when creating deliberate editorial breathing room.

---

# 7. Borders

Borders are a primary visual element.

Standard:

```css
border: 1px solid #0A0A0A;
```

Strong:

```css
border: 2px solid #0A0A0A;
```

Do not use:

- glassmorphism
- soft shadows
- excessive rounded cards
- floating SaaS cards

Border radius should generally be:

```css
border-radius: 0;
```

---

# 8. Buttons

### Primary

```text
VIEW OUR WORK ↗
```

Style:

- white background
- black border
- uppercase
- compact
- square corners

Hover:

```text
background: black
color: white
```

### Accent CTA

```text
START A PROJECT ↗
```

Style:

- yellow background
- black text
- black border

Hover:

- black background
- yellow text

Transition:

```css
transition:
  background-color 220ms ease,
  color 220ms ease,
  transform 220ms ease;
```

---

# 9. Navigation

The navigation must visually resemble a physical grid.

Every nav item should feel like a separate cell.

Example:

```text
┌────────┬────────┬──────┬─────────┬────────┬────────┬────────────┐
│ LOGO   │ STUDIO │ WORK │ SERVICES│ JOURNAL│ CONTACT│ START ↗    │
└────────┴────────┴──────┴─────────┴────────┴────────┴────────────┘
```

Avoid pill navigation.

---

# 10. Hero Composition

Hero should feel almost like a poster.

Left:

```text
WE DESIGN
WITHOUT
RULES.
```

Right:

```text
A CREATIVE STUDIO
BUILDING BOLD BRANDS
AND DIGITAL EXPERIENCES
THAT STAND OUT.

┌────────────────────────┐
│                        │
│ HAIRLINE VISUAL        │
│                        │
└────────────────────────┘
```

Use a strong vertical dividing line.

---

# 11. Hairline Visual Style

Hairline should visually sit between:

- generative technical drawing
- architectural diagram
- interactive sculpture

Recommended container:

```css
background: #f7f7f2;
border: 1px solid #0a0a0a;
overflow: hidden;
aspect-ratio: 5 / 4;
```

The pointer response should be subtle.

Do not make the figure neon or futuristic.

Use monochrome tones so it belongs to the editorial system.

Reference:

```text
GitHub:
https://github.com/lucasmarkes/hairline

Live:
https://hairline.lucasmarkes.com/
```

---

# 12. Project Cards

Project cards should resemble editorial spreads rather than rounded portfolio thumbnails.

Recommended structure:

```text
┌────────┬──────────────────────────────┐
│ 01     │ PROJECT IMAGE               │
│        │                              │
│ TITLE  │                              │
│ TYPE   │                              │
└────────┴──────────────────────────────┘
```

Project 02 may use red:

```css
background: #FF2A1F;
```

Project 01 and 03 remain monochrome.

---

# 13. Image Treatment

Use:

```css
object-fit: cover;
```

Recommended aspect ratios:

```text
Hero visual       5:4
Project           4:3
Editorial image   3:2
```

Hover:

```css
transform: scale(1.025);
```

Keep the transition subtle.

---

# 14. AOS Motion Language

Motion should feel:

**precise + editorial + mechanical**

Avoid:

- bounce
- elastic animation
- cartoon easing
- excessive parallax
- spinning UI

Preferred:

```text
fade-up
fade-left
fade-right
zoom-out
```

Duration:

```text
600–900ms
```

---

# 15. Micro Interactions

Arrow:

```css
transform: translateX(0);
```

Hover:

```css
transform: translateX(5px);
```

Links:

```text
color inversion
underline reveal
small horizontal movement
```

Accordion:

```text
height + opacity
```

Project image:

```text
scale(1.02)
```

Everything should feel restrained.

---

# 16. Mobile Design

Mobile is not a compressed desktop.

On mobile:

- remove non-essential decorative elements
- reduce hero visual complexity
- stack grid cells
- keep borders
- preserve oversized typography
- make buttons full-width where appropriate
- keep tap targets at least ~44px
- use simplified navigation

Hero:

```text
WE
DESIGN
WITHOUT
RULES.
```

Do not allow the headline to create horizontal overflow.

---

# 17. Accessibility Visuals

Focus state:

```css
:focus-visible {
  outline: 3px solid var(--color-yellow);
  outline-offset: 3px;
}
```

Never remove focus indicators.

---

# 18. Reduced Motion

When:

```css
@media (prefers-reduced-motion: reduce)
```

Disable/reduce:

- Lenis smoothing
- Hairline pointer motion
- AOS transitions
- image scaling
- marquee motion

Content must remain fully accessible.

---

# 19. Visual Don'ts

Do not use:

- gradients
- glassmorphism
- huge border radii
- soft pastel palettes
- generic SaaS layouts
- excessive shadows
- stock-photo-looking UI
- excessive animations
- random decorative blobs
- purple AI aesthetics
- floating glass cards

The design should feel **intentional, editorial and art-directed**.
