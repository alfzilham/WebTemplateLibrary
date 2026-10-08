# ARCHITECTURE.md

# FinGuard Landing Page — Architecture

## 1. Project Goal

Build a premium, conversion-focused financial-services landing page inspired by the supplied FinGuard reference image, while using the two supplied Hairline resources as an interaction/visual reference:

- GitHub: https://github.com/lucasmarkes/hairline
- Live demo: https://hairline.lucasmarkes.com/

The implementation must remain lightweight and framework-free:

- Vanilla HTML5
- Vanilla CSS3
- Vanilla JavaScript
- Lenis for smooth scrolling
- AOS for entrance/exit reveal animations
- Bootstrap Icons CDN for UI icons
- Hairline for subtle pointer-reactive/isometric decorative visuals where appropriate

The page should feel like a polished fintech/product-marketing site rather than a direct pixel copy.

---

## 2. Recommended Folder Structure

```text
/
├── index.html
├── assets/
│   ├── images/
│   │   ├── hero-card.webp
│   │   ├── feature-card.webp
│   │   ├── testimonial-avatar.webp
│   │   └── ...
│   └── icons/
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   └── hairline.js
├── ARCHITECTURE.md
├── SPEC.md
├── DESIGN.md
└── README.md
```

For Gemini Canvas, the preferred output can initially be a self-contained `index.html` with embedded CSS and JS. If Canvas naturally separates files, preserve the same responsibilities.

---

## 3. High-Level Component Tree

```text
<body>
├── Skip Link
├── Header / Navbar
│   ├── Brand
│   ├── Desktop Navigation
│   ├── Primary CTA
│   └── Mobile Menu Toggle
│
├── Main
│   ├── Hero Section
│   │   ├── Eyebrow
│   │   ├── Display Heading
│   │   ├── Supporting Copy
│   │   ├── CTA Group
│   │   ├── Trust / Active Users
│   │   ├── Hero Card Stack
│   │   └── Process / Benefits Rail
│   │
│   ├── About / Metrics Section
│   │   ├── Section Intro
│   │   └── Metric Cards
│   │
│   ├── Features Section
│   │   ├── Section Intro
│   │   ├── Feature List
│   │   └── Financial Dashboard Mockup
│   │
│   ├── Benefits Section
│   │   ├── Product Visual
│   │   └── Benefit Copy
│   │
│   ├── Partners Section
│   │   ├── Dark Background
│   │   ├── Partner Trust Statistic
│   │   └── Partner Logo / Integration Grid
│   │
│   ├── Testimonial Section
│   │   ├── Quote
│   │   ├── Author
│   │   └── Decorative Hairline / 3D Wordmark
│   │
│   └── CTA / Footer
│       ├── Large Orange CTA Area
│       ├── Brand
│       ├── Four Footer Columns
│       └── Copyright Row
│
└── Scripts
```

---

## 4. Responsibilities

### `index.html`

Responsible only for:

- Semantic page structure
- Accessible headings
- Navigation landmarks
- Buttons/links
- Form-free CTA interactions
- Data attributes for AOS
- Containers for Hairline figures
- CDN imports

Avoid unnecessary presentation logic in HTML.

### `style.css`

Responsible for:

- Design tokens
- Typography
- Layout
- Components
- Buttons
- Cards
- Hero composition
- Footer
- Scrollbar
- Responsive base/mobile styles
- Reduced-motion fallbacks

### `responsive.css`

Optional if the CSS becomes large. Responsible for:

- Tablet breakpoint
- Desktop breakpoint
- Wide-screen refinements
- Mobile navigation
- Grid transformations
- Type scaling

### `main.js`

Responsible for:

- Lenis initialization
- AOS initialization
- Global interactions
- Reduced-motion detection
- Smooth anchor behavior if required

### `navigation.js`

Responsible for:

- Mobile menu open/close
- Escape key behavior
- Focus handling
- Scroll-direction detection
- Navbar auto-hide / reveal
- `aria-expanded`
- `aria-hidden` where appropriate

### `hairline.js`

Responsible for:

- Initializing the Hairline plain-DOM figure(s)
- Keeping Hairline decorative and non-essential
- Disabling or simplifying it for reduced-motion users
- Destroying/releasing instances when necessary

---

## 5. External Libraries

### Lenis

Use Lenis through a CDN in the page. The architecture should not depend on npm or a build step.

Preferred pattern:

```html
<script src="https://cdn.jsdelivr.net/npm/lenis@latest/dist/lenis.min.js"></script>
```

Initialize one global Lenis instance and drive it through `requestAnimationFrame`.

### AOS

Load AOS CSS and JS from CDN.

Preferred pattern:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.css">
<script src="https://cdn.jsdelivr.net/npm/aos@latest/dist/aos.js"></script>
```

Use AOS only for purposeful reveal choreography. Do not animate every element.

### Bootstrap Icons

Load the icon font through CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.min.css">
```

Use icons for:

- Arrow CTAs
- Menu/close
- Checkmarks
- Metric indicators
- Feature controls
- Social links
- Footer utility links

Never use icon-only controls without an accessible name.

### Hairline

The supplied Hairline repository provides plain-DOM usage in addition to React, so it can fit the Vanilla JS stack. The project describes twenty-seven isometric figures and exposes a DOM API. Use it as a subtle enhancement, not as the primary content.

The live site specifically presents Hairline as SVG-based, dependency-free figures for React or plain DOM.

---

## 6. Interaction Architecture

### Navbar

State machine:

```text
VISIBLE
   ↓ scroll down
HIDDEN
   ↓ scroll up
VISIBLE
```

Rules:

- Never hide while the user is at the very top.
- Use a small scroll threshold to prevent jitter.
- Do not react to tiny scroll movements.
- Apply a CSS transform rather than changing `display`.
- Keep a smooth transition.
- When mobile navigation is open, navbar must remain visible.
- When keyboard focus is inside the navbar, never hide it.
- `prefers-reduced-motion` should disable the animated transition.

Suggested classes:

```text
.navbar
.navbar--hidden
.navbar--menu-open
```

### Mobile Navigation

Use a real `<button>`:

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="primary-navigation"
  aria-label="Open navigation"
>
```

When opened:

- Lock page scrolling.
- Set `aria-expanded="true"`.
- Reveal navigation.
- Trap focus if implemented as an overlay.
- Close on Escape.
- Close after selecting a navigation link.

### Scroll

Lenis controls visual scroll interpolation.

Do not implement a second custom smooth-scroll engine.

### AOS

Recommended data attributes:

```html
data-aos="fade-up"
data-aos-duration="700"
data-aos-once="false"
```

Use alternate directions sparingly.

### CTA

Primary CTAs should scroll to a meaningful section such as Features, Benefits, or Contact/CTA. Avoid dead buttons except explicitly marked placeholders.

---

## 7. Performance Architecture

- Use CSS transforms for movement.
- Avoid layout-triggering animations.
- Avoid excessive `backdrop-filter`.
- Use `loading="lazy"` for below-the-fold images.
- Use `decoding="async"` for non-critical images.
- Keep hero artwork eager-loaded if it is an actual image.
- Avoid large background videos.
- Do not create dozens of independent animation loops.
- Hairline should be instantiated only where visually useful.
- AOS should animate modest numbers of elements.
- Respect `prefers-reduced-motion`.

---

## 8. Accessibility Architecture

Target WCAG 2.2 AA-oriented implementation.

Required:

- One logical `<h1>`.
- Heading levels must not be skipped for styling reasons.
- Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Visible keyboard focus.
- Skip-to-content link.
- Descriptive link names.
- Accessible mobile navigation.
- Decorative images use empty `alt=""`.
- Meaningful images use descriptive alt text.
- Decorative Hairline canvas/SVG receives an appropriate accessible label only if it conveys meaning; otherwise mark it decorative.
- Do not communicate meaning by color alone.
- Maintain strong text/background contrast.
- Buttons and links must have adequate touch targets.
- Respect reduced-motion.
- Avoid flashing effects.
- Never make essential information dependent on hover.

---

## 9. Responsive Architecture

Mobile-first:

```text
Base CSS       → Mobile
@media 640px   → Large mobile / small tablet
@media 768px   → Tablet
@media 1024px  → Desktop
@media 1280px  → Large desktop refinement
```

Use fluid CSS wherever possible:

```css
clamp()
min()
max()
```

Prefer CSS Grid and Flexbox.

Avoid fixed pixel widths for primary content containers.

---

## 10. Content Architecture

The visual reference contains these main storytelling beats:

1. Strong fintech hero statement.
2. Trust / active user metric.
3. Company credibility metrics.
4. All-in-one feature platform.
5. Product/benefit showcase.
6. Partner/integration proof.
7. Customer testimonial.
8. Strong final CTA and footer.

Keep that storytelling order.

---

## 11. Failure / Fallback Strategy

If an external library fails to load:

- Core page must remain readable and usable.
- Navigation must still work.
- Anchor links must still work.
- CSS transitions can replace AOS.
- Native browser scrolling is acceptable as Lenis fallback.
- Hairline visuals should simply disappear without breaking layout.
- Bootstrap Icons may be replaced by text/accessible labels or CSS shapes for critical controls.

External dependencies are enhancements, not content dependencies.
