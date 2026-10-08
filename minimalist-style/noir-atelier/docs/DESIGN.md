# DESIGN.md

## ArchiStudio Landing Page --- Visual Design System

### 1. Design Intent

Create a confident, architectural editorial experience: dark,
restrained, tactile, image-led, and spacious. The supplied screenshot is
the main composition reference. Reproduce its visual principles rather
than copying every pixel or using unrelated template patterns.

The Hairline reference (`https://hairline.lucasmarkes.com/`) informs
only a small interactive line-art detail. Architecture photography
remains the dominant visual material.

### 2. Design Principles

1.  **Image first:** large architectural imagery establishes atmosphere.
2.  **Editorial hierarchy:** oversized headlines paired with compact
    supporting copy.
3.  **Dark frame:** near-black canvas makes bright concrete, glass, and
    greenery stand out.
4.  **Asymmetry with control:** uneven image heights and staggered
    project cards, aligned to a consistent grid.
5.  **Motion with purpose:** subtle reveal and navigation transitions,
    never motion for its own sake.
6.  **Accessible by default:** legible contrast, keyboard focus, reduced
    motion, and responsive text.

### 3. Color Tokens

Use these as starting values and tune against the actual photography.

``` css
:root {
  color-scheme: dark;
  --color-bg: #101010;
  --color-surface: #171717;
  --color-surface-raised: #202020;
  --color-text: #f4f3ef;
  --color-text-muted: #a4a4a1;
  --color-text-subtle: #777875;
  --color-border: #444442;
  --color-border-strong: #686865;
  --color-cta-bg: #f1f0ec;
  --color-cta-text: #111111;
  --color-focus: #f4f3ef;
}
```

Do not use pure white for every text element. Reserve high contrast for
headlines, navigation, and primary actions.

### 4. Typography

-   Use a modern neutral sans-serif stack. A local/system stack is
    acceptable; if loading a web font, use a reliable font source and
    sensible fallbacks.
-   Hero wordmark: heavy weight, tight line-height, uppercase where
    appropriate.
-   Section headings: strong but clearly smaller than the hero.
-   Body: relaxed line-height and muted tone.
-   Navigation and eyebrow labels: compact, medium weight, readable at
    small sizes.

Suggested fluid scale:

``` css
:root {
  --font-xs: clamp(0.7rem, 0.66rem + 0.12vw, 0.78rem);
  --font-sm: clamp(0.82rem, 0.78rem + 0.15vw, 0.92rem);
  --font-body: clamp(0.92rem, 0.86rem + 0.22vw, 1.05rem);
  --font-h2: clamp(1.7rem, 1.25rem + 2vw, 3.2rem);
  --font-display: clamp(2.7rem, 1.3rem + 7vw, 7.4rem);
}
```

Use `clamp()` to avoid abrupt jumps between breakpoints.

### 5. Layout and Spacing

-   Main page gutter: roughly 16--24px mobile, 24--40px tablet, 32--56px
    desktop.
-   Maximum content width: approximately 1600px, with fluid side
    gutters.
-   Use CSS Grid for the hero collage, project cards, and footer; use
    Flexbox for navigation and inline action rows.
-   Maintain a consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64,
    96px).
-   Use `gap` rather than ad hoc margins where possible.
-   Apply `scroll-margin-top` to anchor sections to account for the
    header.

### 6. Hero Image Collage

-   Desktop: create three or four architectural image panels of
    different heights, with controlled overlaps and narrow black
    gutters.
-   Keep text/wordmark anchored near the lower portion of the collage or
    directly beneath it, inspired by the screenshot.
-   Ensure the primary title does not collide with navigation or become
    obscured by imagery.
-   Mobile: simplify to a single strong image plus one or two smaller
    panels; prioritize readability over exact desktop overlap.
-   Use `object-fit: cover`, with per-image `object-position` to
    preserve building features.
-   Reserve image aspect ratios to prevent layout shifts.

### 7. About and Highlight Cards

-   About section: small outlined pill label, then two columns on
    desktop: short intro on the left and fuller studio statement on the
    right.
-   Highlight cards: wide landscape imagery with a dark overlay/gradient
    only where needed for legible text.
-   Cards have thin borders, medium corner radii, compact typography,
    and full-width CTA pills.
-   Do not place long paragraphs over busy images.

### 8. Project Cards

-   Desktop: four cards in a staggered grid; vary heights while
    preserving baseline alignment and consistent gutters.
-   Tablet: two columns.
-   Mobile: one column for immersive tall cards or two columns only when
    titles and images remain readable.
-   Border radius: approximately 18--26px.
-   Border: 1px solid `var(--color-border)`.
-   Project title: white, medium-to-bold, positioned near the lower
    image edge with a subtle readability overlay.
-   Arrow affordance: light circular control at the top-right; it must
    be inside a real link with an accessible name.
-   Hover: tiny image scale or brightness change and a small arrow
    shift; disable/reduce under reduced motion.

### 9. Buttons, Pills, and Icons

-   Primary CTA: light background, dark text, rounded capsule; clear
    focus ring.
-   Secondary CTA: transparent/dark background with thin border.
-   Eyebrow labels: transparent fill, thin border, capsule radius.
-   Bootstrap Icons should be visually consistent in stroke/weight and
    aligned to text.
-   Icon-only controls require an accessible label; decorative icons use
    `aria-hidden="true"`.

### 10. Navigation Behavior

-   Header sits above page content with a subtle dark backdrop only if
    needed for readability.
-   At page top, header is visible.
-   Scroll down beyond a modest threshold: translate header upward and
    reduce opacity.
-   Scroll up: reveal header with a smooth transform/opacity transition.
-   Never hide the header while one of its controls has keyboard focus.
-   Use a small scroll-delta threshold to avoid flicker.
-   Mobile menu uses a clear open state, visible focus, Escape-to-close,
    and sensible focus order.
-   Avoid relying on color alone to show active navigation.

### 11. Motion

**Lenis** - Smooth, natural scrolling with restrained easing. - Keep
anchor navigation and browser history usable. - Disable or reduce smooth
behavior when `prefers-reduced-motion: reduce` is active.

**AOS** - Preferred effects: `fade-up`, `fade`, or subtle `zoom-in` only
for selected imagery. - Typical duration: 450--750ms. - Typical delay:
0--120ms; avoid long stagger sequences. - Use once-only reveals for a
calm portfolio feel. - Content must remain visible if AOS does not load.

**CSS / Vanilla JS** - Header: around 250--350ms ease. - Button hover:
around 180--240ms. - Project image hover: small scale change, around
300--500ms. - Respect reduced-motion preferences throughout.

### 12. Hairline Integration

Reference: https://hairline.lucasmarkes.com/ Documentation:
https://hairline.lucasmarkes.com/docs

-   Use the Vanilla CDN/module API documented by Hairline; do not add
    React.
-   Suitable placement: process section, studio details, or a small
    interactive accent near the footer.
-   The figure should use a dark theme and match the page's
    surface/background.
-   Add a descriptive label, and keep adjacent explanatory text visible
    without pointer interaction.
-   Limit to one figure initially; do not compete with architectural
    imagery.
-   Test pointer, touch, keyboard (where the chosen figure supports it),
    and reduced-motion behavior.
-   Keep it optional so a CDN/module failure cannot break the page.

### 13. Custom Scrollbar

Implement a narrow scrollbar without making it difficult to use. Include
WebKit pseudo-elements and a standards-based fallback.

``` css
:root {
  scrollbar-color: #555 #151515;
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}
::-webkit-scrollbar-track {
  background: #151515;
}
::-webkit-scrollbar-thumb {
  background: #555;
  border: 2px solid #151515;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #777;
}
```

Do not hide the scrollbar completely or make the thumb too low-contrast.

### 14. Footer

-   Desktop: four equal or intentionally proportioned columns.
-   Column headings are small and clear; links have generous vertical
    spacing.
-   Footer is separated from the main content with a thin top border or
    clear spacing.
-   Bottom row: copyright aligned left; Terms of Service and Privacy
    Policy aligned right.
-   Mobile: columns stack or form a two-column grid; bottom row
    wraps/stack without clipping.
-   The legal links are placeholders only and should not imply legal
    review has occurred.

### 15. Accessibility States

-   Visible `:focus-visible` outline with adequate contrast.
-   Hover effects have equivalent focus feedback.
-   Do not remove outlines without replacement.
-   All menus, links, and buttons are keyboard operable.
-   Maintain meaningful alt text for architecture images.
-   Avoid text smaller than comfortable reading sizes.
-   Support zoom/reflow and avoid fixed-width layouts.
-   Reduce or disable nonessential animation based on user preference.

### 16. Quality Review

Before handoff, inspect at mobile, tablet, desktop, and wide desktop
sizes. Check title wrapping, image crops, footer alignment, contrast,
focus visibility, mobile menu behavior, reduced-motion mode, failed-CDN
behavior, and console warnings.
