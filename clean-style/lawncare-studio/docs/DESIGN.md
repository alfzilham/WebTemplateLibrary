# DESIGN.md

# Lawn Care Landing Page — Design System

## 1. Design Direction

### Keywords

```text
Premium
Local
Natural
Editorial
Confident
Clean
Warm
Reliable
Modern
```

The design should feel closer to a premium landscaping studio than a generic contractor template.

The supplied reference uses:

- large photographic surfaces
- rounded corners
- white editorial whitespace
- forest/lawn imagery
- dark green overlays
- bright lime CTAs
- black/charcoal typography
- understated logos
- compact information cards

Keep those principles, but create an original visual system.

---

## 2. Color Tokens

Use CSS custom properties.

```css
:root {
  --color-bg: #f6f7f2;
  --color-surface: #ffffff;
  --color-surface-soft: #eef1e8;

  --color-ink: #172019;
  --color-ink-soft: #536057;

  --color-green-950: #102017;
  --color-green-900: #17351f;
  --color-green-800: #24502d;
  --color-green-700: #326c3d;

  --color-lime: #c9f36a;
  --color-lime-hover: #b8e758;
  --color-lime-soft: #e8f9bd;

  --color-border: #dfe4db;
  --color-white: #ffffff;
  --color-black: #0d110e;

  --color-focus: #5b8cff;
}
```

The lime accent should be used selectively:

- primary CTA
- active indicators
- small badges
- important icon accents

Do not make the entire site neon green.

---

## 3. Typography

Use a modern sans-serif for UI/body and a restrained serif for editorial emphasis.

Suggested:

```text
Sans:
Inter
Manrope
DM Sans

Serif:
DM Serif Display
Instrument Serif
Cormorant Garamond
```

If Google Fonts is used, load only the necessary weights.

Suggested weights:

```text
400 — body
500 — labels
600 — buttons
700 — headings
```

Serif should be used for selected words, e.g.:

```html
<h1>
  A better-looking yard,
  <em>without the extra work.</em>
</h1>
```

Do not use serif everywhere.

---

## 4. Type Scale

Use fluid typography.

```css
--text-xs: clamp(.72rem, .69rem + .1vw, .78rem);
--text-sm: clamp(.82rem, .78rem + .15vw, .92rem);
--text-base: clamp(.95rem, .9rem + .2vw, 1.05rem);
--text-lg: clamp(1.15rem, 1rem + .45vw, 1.4rem);
--text-xl: clamp(1.5rem, 1.2rem + 1vw, 2.1rem);
--text-2xl: clamp(2rem, 1.5rem + 2vw, 3.5rem);
--text-3xl: clamp(2.7rem, 2rem + 3.4vw, 5.4rem);
```

Hero headline:

```text
~48–88px desktop
~40–56px tablet
~38–48px mobile
```

Use tight line-height:

```css
line-height: 0.95–1.05;
```

Body:

```text
16–18px
line-height: 1.55–1.7
```

---

## 5. Layout

Global:

```css
--container: min(1280px, calc(100% - 40px));
--container-mobile: calc(100% - 32px);
```

Desktop content should breathe.

Use:

```text
section padding:
mobile 72–96px
tablet 96–120px
desktop 120–160px
```

Avoid excessive equal spacing between every section; alternate dense and open sections.

---

## 6. Radius System

Reference-inspired but not excessively rounded.

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 999px;
```

Hero:

```text
24–32px
```

Cards:

```text
18–24px
```

Buttons:

```text
999px
```

---

## 7. Shadows

Keep shadows soft and sparse.

```css
--shadow-soft:
  0 16px 50px rgba(15, 28, 19, 0.08);

--shadow-card:
  0 8px 30px rgba(15, 28, 19, 0.06);
```

Do not use heavy drop shadows.

---

## 8. Hero Design

The hero is the visual anchor.

Desktop composition:

```text
┌──────────────────────────────────────────────┐
│ NAV                                          │
│                                              │
│  eyebrow                                     │
│  Large editorial headline       photo/visual │
│  supporting copy                             │
│  [CTA] [Call]                                │
│                                              │
│                           [proof card]       │
└──────────────────────────────────────────────┘
```

Hero image treatment:

```css
.hero-media::after {
  background:
    linear-gradient(
      90deg,
      rgba(9, 22, 14, .82) 0%,
      rgba(9, 22, 14, .42) 55%,
      rgba(9, 22, 14, .08) 100%
    );
}
```

On mobile, the overlay must preserve readable text without making the entire image black.

---

## 9. Buttons

Primary:

- lime background
- dark green text
- pill shape
- compact arrow icon
- subtle hover translation

Example:

```text
Get a Free Quote  ↗
```

Secondary:

- transparent
- text/underline
- optional arrow

Hover:

```text
transform: translateY(-2px)
```

Do not make buttons jump more than a few pixels.

---

## 10. Cards

Service cards should be image-led.

Structure:

```text
┌────────────────────┐
│                    │
│      IMAGE         │
│                    │
│ label              │
│ Service title      │
│ description        │
│ [Learn More ↗]     │
└────────────────────┘
```

Use a dark gradient at the bottom so white text stays readable.

Hover:

- image scale 1.03–1.06
- CTA arrow moves 2–4px
- no excessive 3D transform

---

## 11. Logo Strip

Use low-contrast grayscale logos.

Opacity:

```text
0.55–0.75
```

On hover, optionally raise to full opacity.

Do not compete with the hero.

---

## 12. About Section

Use asymmetry.

Desktop:

```text
40% image
60% content
```

The image should be large enough to feel editorial.

Add a tiny uppercase eyebrow:

```text
ABOUT [BRAND]
```

Typography:

- heading large
- body narrow
- CTA close to body copy
- avoid excessive paragraphs

---

## 13. Service Rail

The reference uses a horizontal visual rhythm.

Desktop:

```text
[partial] [card] [card] [card] [partial]
```

This gives a sense that more services continue beyond the viewport.

Mobile:

```text
[card] → [card] → [card]
```

Use CSS scroll snap:

```css
.service-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(78%, 1fr);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
```

On desktop, increase card width and allow neighboring cards to peek.

---

## 14. Process Design

Use an editorial grid rather than a basic vertical timeline.

Desktop:

```text
┌──────────────┬──────────────┬──────────────┐
│ STEP 01      │ STEP 02      │ STEP 03      │
│ title        │ title        │ title        │
│ copy         │ copy         │ copy         │
│ image        │ visual       │ image        │
└──────────────┴──────────────┴──────────────┘
                         ┌─────────────────────┐
                         │ STEP 04 / GUARANTEE │
                         └─────────────────────┘
```

Mobile becomes one column.

---

## 15. Hairline Visual

Use Hairline as a subtle premium interaction.

Preferred:

```text
terrain
```

Concept:

- abstract miniature landscape / terrain
- pointer causes nearby forms to react
- monochrome green/cream theme
- no text required

The figure should sit behind or beside CTA content, not replace meaningful imagery.

Recommended styling variables:

```css
.hairline-figure {
  --hairline-plate: #17351f;
  --hairline-hi: #e9f7bf;
  --hairline-edge: #9bb582;
  --hairline-mid: #54705a;
  --hairline-lo: #294632;
  --hairline-stroke: 0.9;
}
```

Respect Hairline's accessibility and reduced-motion behavior.

---

## 16. Scrollbar

Custom WebKit scrollbar:

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #eef1e8;
}

::-webkit-scrollbar-thumb {
  background: #72806f;
  border: 2px solid #eef1e8;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4e604f;
}
```

Also define Firefox behavior:

```css
html {
  scrollbar-width: thin;
  scrollbar-color: #72806f #eef1e8;
}
```

Never make the scrollbar so thin that it becomes difficult to use.

---

## 17. Navbar Visual

At top:

```text
transparent / over hero
```

After scrolling:

```text
background: rgba(255,255,255,.92)
backdrop-filter: blur(16px)
border-bottom: 1px solid var(--color-border)
```

Use a short transition.

Hidden state:

```css
transform: translateY(-110%);
```

Visible state:

```css
transform: translateY(0);
```

---

## 18. Responsive Rules

### 320–479px

- no side-by-side content
- buttons can become full width
- 16px page padding
- service cards 82–88vw
- hero headline stays compact

### 480–767px

- two-button rows can return if space permits
- about image and content remain stacked

### 768–1023px

- two-column sections
- 2-column footer
- process can use two columns

### 1024–1279px

- full desktop navigation
- 3-column process
- 4-column footer
- generous card widths

### 1280px+

- max-width container
- larger typography
- more negative space
- hero can use asymmetric composition

---

## 19. Motion

Motion should communicate hierarchy.

Good:

- fade + translate 16–30px
- subtle image scale
- navbar slide
- button arrow movement
- card hover

Avoid:

- bouncing
- excessive rotation
- large parallax
- text spinning
- infinite decorative motion

Use:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Lenis must also respect reduced-motion.

---

## 20. Image Direction

Use realistic local lawn/property photography.

Image subjects:

- healthy green lawns
- mower close-ups
- worker maintaining lawn
- landscaping beds
- fertilizer equipment
- residential exterior
- commercial property
- seasonal cleanup
- snow removal

Prefer natural daylight.

Avoid:

- overly staged stock photos
- people looking directly at camera in every image
- excessive lens blur
- neon color grading
- fake 3D imagery

Use `object-position` deliberately.

---

## 21. Icon Rules

Bootstrap Icons only for interface icons.

Examples:

```text
bi-arrow-up-right
bi-arrow-right
bi-telephone
bi-check-circle
bi-chevron-left
bi-chevron-right
bi-list
bi-x-lg
bi-instagram
bi-facebook
bi-linkedin
bi-geo-alt
bi-clock
bi-shield-check
```

Do not use icons as decorative noise.

---

## 22. Visual QA

Before finalizing:

- check 320px
- check 375px
- check 768px
- check 1024px
- check 1280px
- check 1440px
- test keyboard navigation
- test reduced motion
- test mobile menu
- test navbar direction behavior
- test service horizontal scrolling
- test anchor links
- test if CDN resources fail
- test no horizontal overflow
- test all CTA hit areas
