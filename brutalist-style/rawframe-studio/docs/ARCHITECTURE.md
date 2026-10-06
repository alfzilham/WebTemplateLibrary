# ARCHITECTURE.md

# Brutalist Creative Studio Landing Page — Architecture

## 1. Project Overview

Landing page untuk creative/design studio dengan visual **editorial brutalist** yang terinspirasi dari referensi gambar yang diberikan:

- oversized condensed typography
- rigid black grid
- 1–2 accent colors
- visible borders
- asymmetrical editorial composition
- large project imagery
- compact navigation
- strong CTA blocks
- interactive micro-interactions

### Technology

- **HTML5** — semantic page structure
- **CSS3** — layout, responsive system, typography, animation, custom scrollbar
- **Vanilla JavaScript** — interactions and UI behavior
- **Lenis** — smooth scrolling
- **AOS** — entrance/exit scroll animations
- **Bootstrap Icons** — icon library via CDN
- **Hairline** — optional interactive isometric line figure used as a visual enhancement, loaded as browser ESM without React

No React, Vue, Angular, Bootstrap JS, jQuery, or build framework is required.

---

## 2. Recommended Folder Structure

```text
/
├── index.html
├── ARCHITECTURE.md
├── SPEC.md
├── DESIGN.md
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── animations.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── animations.js
│   │   ├── smooth-scroll.js
│   │   └── hairline.js
│   │
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   └── journal/
│   │
│   └── fonts/
│
└── favicon/
    └── favicon.svg
```

For a small prototype, `style.css` and `main.js` may be enough. The separated structure above is preferred for maintainability.

---

## 3. HTML Architecture

```text
<body>
│
├── Skip Link
│
├── Header / Navigation
│   ├── Logo
│   ├── Studio Label
│   ├── Work
│   ├── About
│   ├── Services
│   ├── Journal
│   ├── Contact
│   └── Start a Project CTA
│
├── Main
│   │
│   ├── Hero
│   │   ├── Eyebrow
│   │   ├── Oversized Heading
│   │   ├── Intro Copy
│   │   ├── CTA
│   │   └── Hairline Interactive Visual
│   │
│   ├── Statement / Marquee
│   │
│   ├── Selected Work
│   │   ├── Section Label
│   │   ├── Project 01
│   │   ├── Project 02
│   │   └── Project 03
│   │
│   ├── Studio Statement
│   │
│   ├── Services
│   │   ├── Branding
│   │   ├── Web Design
│   │   ├── Development
│   │   └── Digital Strategy
│   │
│   ├── About / Philosophy
│   │
│   ├── CTA Banner
│   │
│   └── Footer
│
└── Scripts
    ├── AOS
    ├── Lenis
    └── App Module
```

---

## 4. External Libraries

### Lenis

Use Lenis for the primary smooth-scroll experience.

```html
<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.26/dist/lenis.css">
<script src="https://unpkg.com/lenis@1.3.26/dist/lenis.min.js"></script>
```

Recommended initialization:

```js
const lenis = new Lenis({
  autoRaf: true,
  anchors: true,
  smoothWheel: true
});
```

### AOS

Use AOS for section entrance/exit animation.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
/>

<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
```

Initialize:

```js
AOS.init({
  duration: 800,
  easing: "ease-out-quart",
  once: false,
  mirror: true,
  offset: 80
});
```

### Bootstrap Icons

Use the icon font through CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
/>
```

Example:

```html
<i class="bi bi-arrow-up-right" aria-hidden="true"></i>
```

### Hairline

The supplied Hairline references should be treated as a visual/interaction reference and optionally used directly in the hero.

Repository:

```text
https://github.com/lucasmarkes/hairline
```

Live demo:

```text
https://hairline.lucasmarkes.com/
```

The library supports DOM usage without React and provides interactive figures such as `terrain`, `riffle`, `exploded`, `terminal`, `keyboard`, and others.

For a no-build Vanilla JS implementation, prefer a browser ESM import:

```js
import { terrain } from "https://esm.sh/@lucasmarkes/hairline";
```

Then:

```js
const figure = terrain(document.querySelector("#hairline-visual"), {
  intensity: 0.65
});
```

If CDN compatibility becomes an issue, the implementation should gracefully fall back to a CSS/SVG placeholder rather than breaking the landing page.

---

## 5. JavaScript Responsibilities

### `main.js`

Responsible for:

- DOM readiness
- library initialization
- global interaction setup
- reduced-motion detection
- error-safe initialization

### `navigation.js`

Responsible for:

- mobile menu
- active navigation state
- menu close on link click
- keyboard accessibility
- body scroll locking when necessary

### `smooth-scroll.js`

Responsible for:

- Lenis initialization
- anchor navigation
- scroll synchronization

### `animations.js`

Responsible for:

- AOS initialization
- reveal classes
- hover interactions
- project image transitions
- optional cursor effects

### `hairline.js`

Responsible for:

- Hairline import
- figure initialization
- cleanup
- reduced-motion fallback

---

## 6. Interaction Architecture

### Navigation

Desktop:
- horizontal grid navigation
- visible borders
- CTA cell at far right

Mobile:
- compact header
- hamburger button
- full-width overlay/menu panel
- CTA remains prominent

### Project Cards

Each project card should support:

- image hover
- project metadata
- category
- year
- arrow icon
- clickable entire card

### Services

Use accordion behavior:

```text
01  BRANDING                    +
02  WEB DESIGN                  +
03  DEVELOPMENT                 +
04  DIGITAL STRATEGY            +
```

Only one item may be expanded at a time on mobile.

### Cursor

Optional only on desktop.

Do not create a heavy custom cursor on touch devices.

---

## 7. Responsive Strategy

Use **mobile-first CSS**.

Base styles target small screens.

Then progressively enhance:

```css
@media (min-width: 576px) { ... }
@media (min-width: 768px) { ... }
@media (min-width: 992px) { ... }
@media (min-width: 1200px) { ... }
@media (min-width: 1440px) { ... }
```

Recommended layout behavior:

### Mobile

- 1-column
- typography scales with `clamp()`
- stacked cards
- simplified navigation
- reduced decorative complexity

### Tablet

- 2-column editorial layouts
- larger heading
- project image + metadata split
- navigation begins transitioning toward desktop

### Desktop

- 12-column grid
- asymmetric layouts
- oversized hero typography
- project cards spanning different column widths
- strong horizontal section dividers

---

## 8. Performance Rules

- Use lazy loading for below-the-fold images.
- Use `decoding="async"` for content images.
- Avoid huge background videos.
- Avoid excessive DOM nodes.
- Keep animations transform/opacity based.
- Respect `prefers-reduced-motion`.
- Initialize Hairline only when supported.
- Do not block initial rendering with unnecessary scripts.

---

## 9. Accessibility

Required:

- semantic headings
- semantic navigation
- keyboard-accessible buttons
- visible focus states
- `aria-label` on icon-only buttons
- descriptive image alt text
- sufficient contrast
- reduced-motion support
- mobile menu accessible by keyboard
- accordion state exposed with `aria-expanded`

---

## 10. Failure Strategy

The website must remain functional if:

- Lenis CDN fails
- AOS CDN fails
- Hairline CDN fails
- images fail to load

Core content and navigation must still work with normal browser scrolling and CSS transitions.
