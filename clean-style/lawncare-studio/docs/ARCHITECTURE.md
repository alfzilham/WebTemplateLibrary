# ARCHITECTURE.md

# Lawn Care Landing Page — Architecture

## 1. Project Goal

Build a premium, conversion-focused lawn care / landscaping landing page inspired by the supplied visual reference:

- large rounded photographic hero
- white editorial sections
- dark green / forest photography
- lime-green accent color
- compact pill-shaped CTAs
- service cards with image overlays
- process / steps section
- professional multi-column footer
- polished motion without sacrificing accessibility or performance

The implementation must be **Vanilla HTML + CSS + JavaScript**, mobile-first, semantic, accessible, and dependency-light.

The supplied Hairline project and demo are also part of the implementation reference:

- https://github.com/lucasmarkes/hairline
- https://hairline.lucasmarkes.com/

Hairline should be used as an interactive visual enhancement, not as the site's primary UI framework.

---

## 2. Technology Stack

### Required

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules where useful)
- Lenis — smooth scrolling
- AOS — entrance / exit-on-scroll animation
- Bootstrap Icons — icon library via CDN
- Hairline — interactive DOM/isometric visual
- Native CSS custom properties
- CSS Grid + Flexbox
- No React
- No Vue
- No Tailwind
- No Bootstrap CSS
- No jQuery

### CDN / external resources

Bootstrap Icons:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
/>
```

AOS 2.3.4:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/aos@2.3.4/dist/aos.css"
/>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
```

Lenis:

Use the current `lenis` package through a pinned CDN URL. Prefer a version-pinned ESM/browser-compatible build rather than `latest`.

Hairline:

Use the DOM API from `@lucasmarkes/hairline` through an ESM CDN import, for example:

```js
import { terrain } from "https://esm.run/@lucasmarkes/hairline";
```

If the CDN build changes, verify the package's current browser/ESM entry before implementation. Hairline is dependency-free and supports DOM usage without React.

---

## 3. Recommended File Structure

```text
/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── sections.css
│   ├── responsive.css
│   └── utilities.css
├── js/
│   ├── main.js
│   ├── smooth-scroll.js
│   ├── navbar.js
│   ├── mobile-menu.js
│   ├── aos.js
│   ├── hairline.js
│   └── utilities.js
├── assets/
│   ├── images/
│   ├── logos/
│   └── icons/
└── pages/
    └── placeholder/
```

For a compact one-page implementation, the CSS and JS files may be consolidated, but the responsibilities below should remain separated logically.

---

## 4. Page Architecture

```text
<body>
  <a class="skip-link">Skip to content</a>

  <header id="site-header">
    <nav aria-label="Primary navigation">
      logo
      desktop navigation
      phone/contact CTA
      quote CTA
      mobile menu button
    </nav>
  </header>

  <main id="main-content">

    <section id="hero">
      hero copy
      CTA group
      trust/social proof
      hero image
      floating customer proof card
      Hairline visual enhancement
    </section>

    <section id="trusted-by">
      client / partner logos
    </section>

    <section id="about">
      image
      editorial copy
      CTA group
    </section>

    <section id="services">
      section heading
      service carousel / horizontal cards
    </section>

    <section id="process">
      process introduction
      Step 01
      Step 02
      Step 03
      Step 04 / satisfaction guarantee
    </section>

    <section id="testimonials">
      customer quote
      rating / trust indicators
    </section>

    <section id="cta">
      final conversion block
    </section>

  </main>

  <footer id="site-footer">
    four-column footer
    bottom copyright row
    terms / privacy placeholders
  </footer>
</body>
```

---

## 5. Header Behavior

The navbar is fixed/sticky at the top.

### Scroll rules

- At page top: visible.
- Scrolling down: smoothly hide upward.
- Scrolling up: smoothly reveal.
- Do not hide while the mobile menu is open.
- Do not create layout shift.
- Use CSS transform for the visual movement.
- Use a small hysteresis threshold, e.g. 8–16px, to prevent jitter.
- Do not react to every raw scroll event with expensive DOM work.
- Prefer Lenis' scroll event when available.

Suggested states:

```text
.site-header
.site-header.is-hidden
.site-header.is-scrolled
.site-header.menu-open
```

---

## 6. Mobile Navigation

Mobile-first:

- hamburger button with accessible `aria-expanded`
- off-canvas or dropdown navigation
- focus-visible states
- ESC closes menu
- body scroll lock while menu is open
- clicking an anchor closes the menu
- menu remains usable with keyboard
- touch target minimum: approximately 44 × 44px

Do not rely on hover for any essential interaction.

---

## 7. Smooth Scroll Architecture

Lenis owns page-level smooth scrolling.

Responsibilities:

- smooth wheel/touch scrolling
- smooth anchor navigation
- preserve normal browser navigation behavior where possible
- respect `prefers-reduced-motion`
- avoid interfering with native nested scrolling

Do not combine Lenis with another smooth-scroll library.

AOS should observe the same page but should not attempt to replace Lenis.

---

## 8. Animation Architecture

### AOS

Use AOS for:

- hero secondary elements
- trusted-by logos
- about image/text entrance
- service cards
- process cards
- testimonial
- final CTA
- footer reveal

Suggested defaults:

```js
AOS.init({
  duration: 750,
  easing: "ease-out-cubic",
  offset: 80,
  once: false,
  mirror: true,
  anchorPlacement: "top-bottom"
});
```

Use restrained motion. Avoid animating large text blocks with dramatic effects.

### Custom CSS transitions

Use CSS transitions for:

- navbar hide/reveal
- button hover
- card hover
- icon movement
- menu state
- image zoom
- focus states

### Hairline

Use one Hairline figure in the hero or services visual zone.

Recommended figure:

- `terrain` for an abstract landscape/terrain metaphor
- or `branches` for a landscaping / growth metaphor

The figure should be decorative and should not be required to understand the page.

Set an accessible label if it communicates meaning. Otherwise mark the surrounding decorative container appropriately.

---

## 9. Accessibility Architecture

Target:

- WCAG 2.2 AA-oriented implementation
- semantic headings
- semantic landmarks
- descriptive link names
- visible keyboard focus
- sufficient color contrast
- alt text for meaningful images
- empty alt for purely decorative images
- reduced-motion support
- no keyboard traps
- mobile menu keyboard support
- `aria-current` where useful
- `aria-expanded` / `aria-controls` for menu
- form labels if a form is added
- buttons for actions, links for navigation

Never use an icon as the only accessible name of a button.

---

## 10. Footer Architecture

Four columns on desktop, collapsing to 2 columns and then 1 column.

Example:

```text
Column 1
Brand
Short description
Social icons

Column 2
Services
Lawn Care
Landscaping
Fertilizing
Snow Removal

Column 3
Company
About
Process
Testimonials
Contact

Column 4
Contact
Phone
Email
Service area
CTA
```

Bottom row:

```text
© 2026 [Brand Name]. All rights reserved.       Terms of Service · Privacy Policy
```

Both policy links are placeholders only and may use `href="#"` or `/terms-of-service` and `/privacy-policy` without creating those pages.

---

## 11. Performance

- lazy-load below-the-fold images
- use `decoding="async"`
- provide width/height or aspect-ratio to prevent layout shift
- avoid huge uncompressed hero images
- use `object-fit: cover`
- use `loading="eager"` only for the primary hero image
- minimize DOM nesting
- avoid scroll listeners that force layout
- use transforms/opacity for animation
- pause/deactivate decorative effects when offscreen where practical
- keep Hairline to one primary instance unless there is a strong reason for more

---

## 12. Interaction Rules

All CTA buttons should have a clear destination.

Primary CTA examples:

- Get a Free Quote
- Book a Property Assessment
- Call Now

Secondary CTA:

- Explore Services
- See How We Work

No fake buttons.

Placeholder phone/email links are acceptable during prototyping.

---

## 13. Browser / Device Targets

Support modern:

- Chrome
- Edge
- Firefox
- Safari
- iOS Safari
- Android Chrome

Breakpoints should be content-driven, approximately:

```text
Mobile: 0–767px
Tablet: 768–1023px
Desktop: 1024px+
Wide: 1280px+
```

Do not design desktop first and simply shrink it. Build the layout mobile-first.

---

## 14. Error / Fallback Strategy

If Hairline fails to load:

- page must remain fully usable
- show a static decorative background or hide the figure
- no JavaScript error should block other page behavior

If AOS fails:

- content must remain visible
- do not permanently hide content with CSS

If Lenis fails:

- native scrolling must still work

External libraries are enhancement layers, not critical dependencies for content access.
