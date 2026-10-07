# Architecture

## Overview

Limeframe Studio adalah static landing page tanpa build step. Struktur dibuat modular supaya setiap bagian visual mudah dirawat tanpa framework.

## Layers

1. `index.html` — semantic page structure and inline SVG-style art.
2. `assets/css/variable.css` — tokens for color, typography, radius, and shadow.
3. `assets/css/global.css` — reset, page shell, utility classes, and accessible motion fallback.
4. `assets/css/components.css` — navigation, hero, cards, cases, contact block, and footer.
5. `assets/css/responsive.css` — tablet/mobile layout adjustments.
6. `assets/js/main.js` — reveal-on-scroll, mobile navigation, and dynamic year.

## Principles

- No runtime dependency beyond the font CDN.
- Content remains usable when JavaScript is unavailable.
- Interaction is progressive enhancement, not a requirement for navigation.
- Layout is mobile-first at the component breakpoint level.
