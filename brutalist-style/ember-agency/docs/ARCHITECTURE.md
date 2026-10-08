# ARCHITECTURE.md

# Brutalist Creative Landing Page — Architecture

## 1. Overview

Landing page agency/creative studio dengan visual **editorial brutalist / neo-brutalist** yang terinspirasi dari reference image pengguna, namun tidak menyalin layout secara identik.

**Primary stack**
- Vanilla HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- Lenis — smooth scrolling
- AOS — entrance/exit reveal animation
- Bootstrap Icons — icon library via CDN
- Hairline — optional interactive visual from the supplied reference

**Reference sources**
- GitHub: `https://github.com/lucasmarkes/hairline`
- Live demo: `https://hairline.lucasmarkes.com/`

Hairline should be used as a small interactive visual/detail, not as the entire visual language of the page.

---

## 2. Project Structure

```text
/
├── index.html
├── assets/
│   ├── images/
│   │   ├── hero.webp
│   │   ├── project-01.webp
│   │   ├── project-02.webp
│   │   └── project-03.webp
│   └── icons/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── components.css
│   └── style.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   └── hairline.js
├── pages/
│   └── (placeholder only if pages are added later)
├── ARCHITECTURE.md
├── SPEC.md
├── DESIGN.md
└── README.md
```

For a lightweight version, the implementation may consolidate CSS/JS into `style.css` and `main.js`. The architecture must remain logically modular even if fewer physical files are used.

---

## 3. Semantic HTML Architecture

Use:

```html
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <header>
    <nav aria-label="Primary navigation">...</nav>
  </header>

  <main id="main-content">
    <section id="hero">...</section>
    <section id="services">...</section>
    <section id="statement">...</section>
    <section id="work">...</section>
    <section id="about">...</section>
    <section id="contact">...</section>
  </main>

  <footer>...</footer>
</body>
```

Rules:
- One `<h1>` only.
- Heading hierarchy must not skip levels unnecessarily.
- Buttons are `<button>`.
- Navigation actions that change location are `<a>`.
- Images require meaningful `alt`, or empty `alt=""` when decorative.
- Interactive Hairline figure must have an accessible label.
- External/reference links should clearly communicate their destination.

---

## 4. Component Boundaries

### Header / Navbar
Responsibilities:
- Brand
- Desktop navigation
- Mobile menu
- CTA
- Scroll-direction visibility

States:
- `is-visible`
- `is-hidden`
- `is-menu-open`

### Hero
Responsibilities:
- Large editorial headline
- Short agency statement
- Primary CTA
- Hero image/visual
- Decorative orange block
- Optional Hairline interaction

### Services
Responsibilities:
- Numbered service cards
- Short description
- Arrow/icon
- Strong typographic hierarchy

Suggested service model:

```js
[
  {
    number: "01",
    title: "Branding & Identity",
    description: "..."
  },
  {
    number: "02",
    title: "Web Design & Development",
    description: "..."
  },
  {
    number: "03",
    title: "Content & Campaigns",
    description: "..."
  },
  {
    number: "04",
    title: "Strategy & Consulting",
    description: "..."
  }
]
```

### Statement / CTA
Large black section with oversized white typography and orange CTA.

### Work / Portfolio
Asymmetric editorial grid:
- Featured project
- Secondary project
- Wide project
- Project category
- View-all action

### About / Philosophy
Short manifesto, metrics or principles, plus Hairline interactive figure.

### Contact
High-contrast CTA section:
- Heading
- Short copy
- Email/contact CTA
- Optional social links

### Footer
Exactly 4 columns on desktop:
1. Brand / description
2. Navigation
3. Services
4. Contact / social

Bottom copyright bar:
- Left: copyright
- Right: Terms of Service + Privacy Policy placeholders

---

## 5. JavaScript Architecture

### `main.js`
Bootstrap:
1. DOM ready
2. Initialize Lenis
3. Initialize AOS
4. Initialize navbar
5. Initialize mobile navigation
6. Initialize Hairline
7. Register accessibility/reduced-motion behavior

### `navigation.js`
- Detect scroll direction
- Hide navbar on downward scrolling
- Show navbar on upward scrolling
- Always show near the top
- Do not hide while mobile menu is open

Pseudo-logic:

```text
if scrollY <= threshold:
    show navbar

else if mobile menu open:
    show navbar

else if currentScroll > previousScroll:
    hide navbar

else:
    show navbar

previousScroll = currentScroll
```

Use `requestAnimationFrame` or a small throttling strategy to avoid excessive scroll work.

### `animations.js`
- Initialize AOS
- Configure duration/easing/offset
- Respect `prefers-reduced-motion`

### `hairline.js`
If Hairline is enabled:

```js
import { terrain } from "https://esm.sh/@lucasmarkes/hairline";

const figure = document.querySelector("#hairline-figure");

if (figure && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  terrain(figure, {
    intensity: 0.65,
    theme: "light",
    label: "Interactive line illustration responding to the pointer"
  });
}
```

Hairline's official documentation confirms vanilla DOM support and an ESM CDN example via `esm.sh`.

---

## 6. Smooth Scroll Architecture

Lenis controls the primary scrolling experience.

Requirements:
- Smooth but not sluggish
- No excessive inertia
- Native anchor navigation must remain usable
- Do not break keyboard scrolling
- Do not interfere with focus management

Concept:

```js
const lenis = new Lenis({
  smoothWheel: true,
  lerp: 0.08
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

The exact Lenis options may be adjusted after browser testing.

---

## 7. AOS Architecture

Use AOS only for meaningful reveal moments.

Recommended:
- `fade-up` for text blocks
- `fade-right` / `fade-left` for editorial columns
- `zoom-in` sparingly for featured imagery
- staggered `data-aos-delay` for service cards

Avoid animating every element.

AOS must not become the source of layout movement.

---

## 8. CSS Architecture

Use CSS custom properties for design tokens.

Example:

```css
:root {
  --color-bg: #f5f2ec;
  --color-surface: #ffffff;
  --color-text: #090909;
  --color-muted: #6b6b6b;
  --color-black: #050505;
  --color-accent: #ff4b00;

  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 3rem;
  --space-6: 5rem;
  --space-7: 8rem;

  --container: 1440px;
  --radius: 0;
  --transition: 240ms cubic-bezier(.2,.8,.2,1);
}
```

The page should deliberately use sharp corners or very small radii to preserve the brutalist/editorial character.

---

## 9. Responsive Strategy

Mobile-first:

```text
Base     → Mobile
≥ 576px  → Large mobile / small tablet
≥ 768px  → Tablet
≥ 992px  → Desktop
≥ 1200px → Large desktop
```

Do not simply shrink the desktop layout.

At mobile:
- Stack content
- Simplify decorative blocks
- Reduce headline size
- Convert multi-column grids to one column
- Use mobile navigation
- Keep CTAs touch-friendly
- Preserve strong typography

At tablet:
- 2-column grids where appropriate
- Maintain asymmetric editorial rhythm

At desktop:
- 12-column grid
- Large typography
- Asymmetric compositions
- Full 4-column footer

---

## 10. Accessibility Architecture

Required:
- Skip link
- Visible keyboard focus
- `aria-label` where icon-only controls are used
- `aria-expanded` for mobile menu
- `aria-controls` for menu relationship
- Logical tab order
- Sufficient contrast
- Alt text
- Reduced-motion support
- No hover-only critical interaction
- Buttons and links must have discernible names
- Focus must not disappear behind the fixed navbar

For animation:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Also configure AOS to minimize/disable motion when reduced motion is requested.

---

## 11. Performance Rules

- Use responsive image sizes.
- Prefer WebP/AVIF.
- Lazy-load below-the-fold images.
- Do not load unnecessary icon libraries.
- Keep JavaScript dependency-light.
- Avoid continuous animations unless meaningful.
- Hairline should not be initialized if it is off-screen or motion is reduced.
- Avoid layout-triggering animations.
- Animate `transform` and `opacity` whenever possible.

---

## 12. External Dependency Policy

Allowed:
- Lenis CDN
- AOS CDN
- Bootstrap Icons CDN
- Hairline ESM CDN

Do not add:
- React
- Vue
- Angular
- Bootstrap CSS
- jQuery
- GSAP
- Tailwind
- unnecessary UI frameworks

The page must remain a genuine Vanilla HTML/CSS/JS implementation.
