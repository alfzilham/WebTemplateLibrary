# ARCHITECTURE.md

# Landing Page Architecture

## 1. Project Goal

Build a premium, futuristic AI/technology landing page inspired by the
supplied visual reference and the interaction philosophy of Hairline by
Lucas Marques.

The implementation must remain intentionally lightweight:

-   Vanilla HTML
-   Vanilla CSS
-   Vanilla JavaScript
-   Lenis for smooth scrolling
-   AOS for entrance/exit reveal animations
-   Bootstrap Icons via CDN
-   No frontend framework
-   No build step required
-   Semantic HTML
-   Mobile-first responsive architecture

Reference projects:

-   GitHub: https://github.com/lucasmarkes/hairline
-   Live demo: https://hairline.lucasmarkes.com/

Hairline should be treated as an interaction/design reference, not as a
source to copy wholesale. Its strongest relevant characteristics are
responsive pointer-reactive SVG/isometric line graphics, restrained
monochrome styling, and performance-conscious animation.

------------------------------------------------------------------------

## 2. Recommended File Structure

``` text
/
├── index.html
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── sections.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── scroll.js
│   ├── animations.js
│   └── pointer-field.js
├── ARCHITECTURE.md
├── SPEC.md
├── DESIGN.md
└── GEMINI_CANVAS_PROMPT.md
```

For a single-file Canvas prototype, the CSS and JS may be embedded in
`index.html`, but the code should still be organized internally into the
same logical modules.

------------------------------------------------------------------------

## 3. Page Architecture

``` text
<body>
│
├── Skip Link
│
├── <header class="site-header">
│   └── <nav>
│       ├── Brand
│       ├── Desktop Navigation
│       └── Mobile Menu Toggle
│
├── <main>
│   │
│   ├── <section id="hero">
│   │   ├── Eyebrow
│   │   ├── Main Heading
│   │   ├── Supporting Text
│   │   ├── Primary CTA
│   │   └── Interactive Hero Visual
│   │
│   ├── <section id="introduction">
│   │   ├── Section Label
│   │   ├── Heading
│   │   ├── Description
│   │   └── Feature Cards
│   │
│   ├── <section id="workflow">
│   │   ├── Section Label
│   │   ├── Heading
│   │   ├── Description
│   │   └── Process Cards
│   │
│   ├── <section id="features">
│   │   ├── Section Label
│   │   ├── Heading
│   │   ├── Description
│   │   └── Feature Grid
│   │
│   ├── <section id="showcase">
│   │   └── Large Visual / Product Demonstration
│   │
│   └── <section id="cta">
│       ├── Heading
│       ├── Supporting Text
│       └── CTA
│
├── <footer class="site-footer">
│   ├── 4-column footer content
│   └── Copyright row
│       ├── Copyright — left
│       └── Terms / Privacy — right
│
└── External CDN scripts
```

------------------------------------------------------------------------

## 4. Component Boundaries

### Navigation

Responsibilities:

-   Brand
-   Desktop links
-   Mobile menu
-   Scroll direction detection
-   Header hide/show state
-   Accessible focus management

States:

``` text
default
scrolled
hidden
mobile-open
```

The header must never disappear while the mobile navigation is open.

### Hero

Responsibilities:

-   High-impact headline
-   CTA
-   Interactive abstract terrain
-   Partner/logo strip
-   Pointer-reactive visual layer

The hero visual should be decorative and must not prevent text selection
or interaction with the CTA.

### Section Header

Reusable structure:

``` html
<div class="section-heading">
  <span class="section-kicker">...</span>
  <h2>...</h2>
  <p>...</p>
</div>
```

### Cards

Cards should share a common base component:

``` text
.card
.card-icon
.card-title
.card-description
.card-media
```

Variants can be created with modifier classes rather than duplicated
CSS.

### Footer

Four-column desktop layout that collapses progressively on smaller
screens.

Suggested columns:

1.  Brand / description
2.  Product
3.  Resources
4.  Company / Social

------------------------------------------------------------------------

## 5. JavaScript Responsibilities

### `main.js`

Bootstrap:

1.  DOM ready
2.  Initialize Lenis
3.  Initialize AOS
4.  Initialize navigation
5.  Initialize pointer-reactive visuals
6.  Register reduced-motion behavior

### `navigation.js`

Responsibilities:

-   Mobile menu toggle
-   Escape-to-close
-   Click-outside close
-   Scroll-direction detection
-   Header visibility
-   Active/focus states

Recommended behavior:

``` text
scroll down + delta > threshold
→ hide header

scroll up + delta > threshold
→ show header

near top
→ always show header
```

Do not run expensive DOM work on every raw scroll event. Use
`requestAnimationFrame` or a throttled state update.

### `scroll.js`

Responsibilities:

-   Lenis setup
-   Animation frame loop
-   Anchor-link integration

Conceptual loop:

``` js
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

### `animations.js`

Responsibilities:

-   AOS initialization
-   Global reduced-motion handling
-   Optional delayed hero animation

Suggested AOS defaults:

``` text
duration: 800–1000ms
once: true
offset: 80–120px
easing: cubic-bezier(...)
```

### `pointer-field.js`

Responsibilities:

-   Mouse / pointer position
-   Interactive terrain or line field
-   Desktop interaction only when useful
-   Touch fallback
-   Reduced-motion fallback

Use CSS transforms, SVG attributes, or canvas only where necessary.
Avoid continuous DOM layout calculations.

------------------------------------------------------------------------

## 6. External Dependencies

### Bootstrap Icons

Use the CDN version directly in HTML.

Example:

``` html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
>
```

Use icons consistently instead of mixing multiple icon families.

### Lenis

Use the official CDN distribution or a pinned CDN version.

### AOS

Use a pinned CDN version for predictable output.

No unnecessary libraries should be introduced.

------------------------------------------------------------------------

## 7. Accessibility Architecture

Required:

-   Semantic landmarks
-   One logical `<h1>`
-   Sequential heading hierarchy
-   Keyboard-operable navigation
-   Visible focus states
-   `aria-expanded` on mobile menu
-   `aria-controls` connecting menu button and menu
-   `aria-label` where icon-only controls exist
-   Decorative graphics marked appropriately
-   Meaningful alternative text for meaningful images
-   `prefers-reduced-motion` support
-   Adequate color contrast
-   Skip-to-content link
-   No information conveyed by animation alone

Interactive decorative visuals must not become keyboard traps.

------------------------------------------------------------------------

## 8. Performance Architecture

Priority order:

1.  HTML content
2.  Critical CSS
3.  Core interaction
4.  Decorative animation
5.  Non-critical media

Rules:

-   Avoid huge unoptimized images
-   Use lazy loading below-the-fold images
-   Avoid layout-triggering animation
-   Prefer `transform` and `opacity`
-   Use `will-change` sparingly
-   Pause expensive visuals when not visible
-   Respect reduced-motion
-   Avoid excessive blur layers on mobile

------------------------------------------------------------------------

## 9. Responsive Strategy

Mobile-first breakpoints:

``` text
Base:     < 576px
Tablet:   >= 768px
Desktop:  >= 992px
Wide:     >= 1200px
```

The design should not simply shrink desktop.

Mobile must have:

-   Smaller type scale
-   Single-column cards
-   Simplified visual effects
-   Compact navigation
-   Reduced decorative density
-   Comfortable touch targets

Desktop may introduce:

-   Multi-column grids
-   Larger hero field
-   Pointer-reactive terrain
-   More complex card compositions

------------------------------------------------------------------------

## 10. Visual Layering

Use a controlled z-index system:

``` text
base content       1
decorative field   2
cards              5
header             50
mobile menu        60
modal / overlay    100
```

Do not create arbitrary z-index values throughout the project.

------------------------------------------------------------------------

## 11. Content/Data Separation

Repeated UI content should be represented in JavaScript data structures
when this improves maintainability.

Example:

``` js
const features = [
  {
    icon: "bi-diagram-3",
    title: "Feature title",
    description: "Short description."
  }
];
```

Do not over-engineer the page into a framework-like architecture.

------------------------------------------------------------------------

## 12. Definition of Done

The landing page is complete when:

-   It works by opening `index.html`
-   Desktop/tablet/mobile layouts are stable
-   Lenis works
-   AOS works
-   Navbar hides on downward scroll and returns on upward scroll
-   Mobile navigation is keyboard accessible
-   Custom WebKit scrollbar is implemented
-   Bootstrap Icons are used
-   Footer contains four columns
-   Copyright is left aligned
-   Terms and Privacy placeholders are right aligned
-   Reduced-motion behavior works
-   No console errors occur
-   No horizontal overflow occurs
-   Reference URLs are visibly applied in an appropriate
    Resources/References area
