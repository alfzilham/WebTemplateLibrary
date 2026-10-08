# DESIGN.md

# Visual Design System

## 1. Creative Direction

**Style:** Neo-brutalist editorial creative agency.

The supplied image establishes the main visual direction:
- oversized condensed typography
- black / white / orange palette
- hard rectangular geometry
- asymmetrical composition
- strong borders
- editorial spacing
- large photographic subjects
- minimal decoration with high visual impact

The design should feel:
- confident
- unconventional
- premium
- sharp
- modern
- creative
- slightly raw

Avoid:
- generic SaaS gradients
- excessive glassmorphism
- excessive rounded cards
- soft pastel UI
- generic startup templates
- excessive shadows
- overly complex 3D effects

---

## 2. Color System

### Primary

```css
--color-bg: #F4F1EB;
--color-white: #FFFFFF;
--color-black: #050505;
--color-text: #0A0A0A;
--color-orange: #FF4B00;
--color-muted: #6B6B6B;
--color-border: #171717;
```

Orange is the brand accent.

Use orange primarily for:
- CTA
- highlighted headline
- active states
- small geometric blocks
- arrows
- selected metadata

Do not flood the page with orange.

---

## 3. Typography

Recommended combination:

### Display
Use a bold condensed sans-serif.

Preferred options:
- Bebas Neue
- Oswald
- Archivo Narrow
- Anton

If using a web font, load only the weights actually needed.

### Body
Use a neutral sans-serif:
- Inter
- Manrope
- system sans-serif

### Metadata
Use uppercase condensed/monospace styling.

Example:

```css
.meta {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

---

## 4. Type Scale

Mobile:

```text
Display XL  → clamp(4rem, 18vw, 8rem)
Display L   → clamp(3rem, 12vw, 6rem)
H2          → clamp(2.5rem, 8vw, 5rem)
H3          → clamp(1.4rem, 4vw, 2rem)
Body        → 1rem–1.125rem
Small       → 0.75rem–0.875rem
```

Desktop display typography should be very large but must remain readable.

Recommended CSS:

```css
.hero-title {
  font-size: clamp(4rem, 12vw, 11rem);
  line-height: 0.82;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}
```

---

## 5. Grid

Desktop:
- 12-column grid
- 24px–32px gap
- max-width around 1440px

Tablet:
- 6-column conceptual grid
- 16px–24px gap

Mobile:
- 4-column conceptual grid
- 16px gap

Global container:

```css
.container {
  width: min(100% - 2rem, 1440px);
  margin-inline: auto;
}
```

Increase side padding at larger breakpoints.

---

## 6. Spacing

Use a consistent scale:

```text
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

Large sections should have generous vertical spacing.

The brutalist style depends on whitespace as much as typography.

---

## 7. Borders

Borders should be visible and intentional.

```css
border: 1px solid var(--color-border);
```

Use:
- horizontal separators
- vertical separators
- project-card boundaries
- service-card boundaries
- footer column boundaries

Avoid excessive border radius.

Recommended:
```css
border-radius: 0;
```

A radius of 2–4px is acceptable only where needed for usability.

---

## 8. Buttons

Primary CTA:

```text
[ START A PROJECT → ]
```

Visual:
- orange background
- black text
- uppercase
- bold
- rectangular
- arrow icon

Hover:
- black background
- white text
- orange border or subtle inversion

Transition:
```css
transition:
  background-color 220ms ease,
  color 220ms ease,
  transform 220ms ease;
```

Focus must remain obvious.

---

## 9. Hero Composition

Desktop concept:

```text
┌────────────────────────────────────────────────────────────┐
│ LOGO        NAV NAV NAV NAV            [ START PROJECT ]  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  WE              supporting copy         IMAGE / SUBJECT   │
│  DON'T                                    ███████████      │
│  DO                                       ███████████      │
│  AVERAGE.              CTA                ORANGE BLOCK     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

The image should partially overlap or interact with the typographic composition.

Do not reproduce the exact reference composition.

---

## 10. Services Design

Use a black panel with four bordered cells.

Desktop:

```text
┌────────┬──────────────┬──────────────┬──────────────┐
│ LABEL  │ 01           │ 02           │ 03           │
│        │ BRANDING     │ WEB          │ CONTENT      │
├────────┴──────────────┴──────────────┴──────────────┤
│ 04 STRATEGY                                           │
└───────────────────────────────────────────────────────┘
```

On mobile, stack cards.

---

## 11. Manifesto Section

Full-width black background.

Use:
- white display typography
- orange CTA
- minimal copy
- large whitespace

The manifesto should be one of the strongest visual moments.

---

## 12. Portfolio Grid

Use asymmetry intentionally.

Example:

```text
┌───────────────────┬───────────────┐
│                   │ PROJECT 02    │
│ PROJECT 01        ├───────────────┤
│                   │ PROJECT 04    │
├───────────────────┼───────────────┤
│ PROJECT 03        │               │
└───────────────────┴───────────────┘
```

Use real project images when available.

Image treatment:
- high contrast
- monochrome where suitable
- occasional orange graphic overlays
- sharp crops

---

## 13. Hairline Integration

Hairline should appear as a restrained interactive element.

Recommended use:
- About/Philosophy section
- Contact section
- small experimental visual block

Suggested figure:
- `terrain`
- `terminal`
- `plot`
- `exploded`

Recommended styling:

```css
.hairline-frame {
  min-height: 280px;
  background: var(--color-bg);
  border: 1px solid var(--color-black);
  overflow: hidden;

  --hairline-plate: #F4F1EB;
  --hairline-hi: #050505;
  --hairline-edge: #6B6B6B;
  --hairline-mid: #B9B5AE;
  --hairline-lo: #DDD8D0;
  --hairline-stroke: 0.9;
}
```

The official Hairline docs state that the figures render as SVG, support plain DOM, and can be imported from `esm.sh` without a bundler.

---

## 14. Animation Direction

Animation should feel:
- quick
- deliberate
- editorial
- physical

### Lenis
Smooth continuous scrolling.

### AOS
Use for:
- section entry
- title reveal
- project cards
- service cards

### CSS
Use for:
- hover
- button interaction
- menu
- image transform

Do not animate everything.

---

## 15. Navbar Motion

Default:

```text
visible
   ↓ scroll down
translateY(-110%)
   ↓ scroll up
translateY(0)
```

CSS:

```css
.site-header {
  transform: translateY(0);
  transition: transform 360ms cubic-bezier(.2,.8,.2,1);
}

.site-header.is-hidden {
  transform: translateY(-110%);
}
```

Mobile menu open should override the hidden state.

---

## 16. Footer Design

Desktop 4-column layout:

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ BRAND        │ EXPLORE      │ SERVICES     │ CONTACT      │
│ description  │ links        │ links        │ email/social │
└──────────────┴──────────────┴──────────────┴──────────────┘

© 2026 BRAND                         Terms · Privacy
```

Bottom row:
- copyright = left
- policy links = right

Mobile:
- columns stack
- bottom row stacks or remains flex with wrapping
- maintain readable spacing

---

## 17. Accessibility Visual Rules

Focus:

```css
:focus-visible {
  outline: 3px solid var(--color-orange);
  outline-offset: 4px;
}
```

Do not remove outlines.

Text must remain readable against orange and black.

Do not use tiny uppercase text for important content.

---

## 18. Responsive Art Direction

Mobile should not look like a compressed desktop.

Mobile priorities:
1. headline
2. CTA
3. visual
4. services
5. manifesto
6. work
7. about
8. contact
9. footer

Decorative elements may be removed if they create clutter.

---

## 19. Image Direction

Preferred:
- editorial photography
- architecture
- people with strong silhouettes
- products
- abstract textures
- black/white photography with orange graphic accents

Avoid:
- generic stock business team photos
- smiling corporate handshake imagery
- overly polished SaaS illustrations

Use `loading="lazy"` below the fold.

---

## 20. Final Visual Test

The final page should feel like:

> A serious creative studio that refuses generic web design.

The reference image is a visual direction, not a template to copy.
