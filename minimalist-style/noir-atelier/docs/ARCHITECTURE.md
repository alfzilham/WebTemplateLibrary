# ARCHITECTURE.md

## ArchiStudio Landing Page --- Technical Architecture

### 1. Project Overview

Build a responsive, premium architecture-studio landing page inspired by
the supplied reference screenshot. The visual language is dark editorial
minimalism: architectural photography, oversized typography, thin
borders, rounded image panels, generous negative space, and restrained
motion.

The website reference `https://hairline.lucasmarkes.com/` is a secondary
interaction reference for subtle pointer-responsive line illustrations.
Hairline must complement the architecture photography rather than
replace it or dominate the page.

### 2. Goals

-   Present the studio's identity, services, philosophy, and selected
    projects.
-   Encourage visitors to explore projects and initiate a project
    inquiry.
-   Reproduce the reference's overall composition while adapting it
    responsively.
-   Keep the implementation framework-free and understandable.
-   Meet practical accessibility requirements, including keyboard
    navigation and reduced-motion support.

### 3. Technology Stack

-   HTML5: semantic document structure.
-   CSS3: design tokens, responsive layout, grid/flex, transitions,
    custom scrollbar.
-   Vanilla JavaScript (ES modules where useful): navigation state,
    interactions, progressive enhancement.
-   Lenis: smooth scrolling.
-   AOS (Animate On Scroll): entrance animations for content sections.
-   Bootstrap Icons CDN: interface icons.
-   Hairline via its documented Vanilla CDN/ES module entry when an
    appropriate figure is used.
-   No frontend framework, build step, or required backend for this
    static landing page.

External libraries must be loaded from their official/documented CDN
endpoints and pinned to a known version where possible. Verify the exact
current CDN/version during implementation instead of inventing package
URLs.

### 4. Suggested File Structure

``` text
/
├── index.html
├── assets/
│   ├── images/
│   │   ├── hero-architecture.webp
│   │   ├── studio-interior.webp
│   │   ├── project-lumina.webp
│   │   ├── project-minial-haven.webp
│   │   ├── project-nordic-timber.webp
│   │   └── project-urban-loft.webp
│   └── icons/                 # optional local SVG marks
├── css/
│   ├── styles.css
│   └── responsive.css         # optional; may be merged into styles.css
├── js/
│   ├── main.js
│   ├── navigation.js          # optional module
│   └── hairline-figure.js     # optional module
├── privacy-policy.html        # placeholder only, optional
├── terms-of-service.html      # placeholder only, optional
└── README.md                  # optional setup notes
```

For a Gemini Canvas single-file output, the same architecture may be
collapsed into one HTML document with embedded CSS and JavaScript, while
retaining clear section comments. Prefer separate files if Canvas
supports a multi-file project.

### 5. Page Composition

1.  Skip link.
2.  Header/navigation: studio mark, primary links, language controls
    only if real language switching is implemented, and prominent
    "Discuss a Project" CTA.
3.  Hero: asymmetrical architectural image collage, large studio
    wordmark/headline, concise positioning statement.
4.  About / studio introduction: eyebrow label and two-column editorial
    copy.
5.  Studio highlights: two wide image-backed cards with proof points and
    calls to action.
6.  Selected projects: four project cards with image, project name, and
    a clear project link affordance.
7.  Services/process section: clear, scannable service offerings;
    content may be adapted to the actual studio.
8.  Inquiry CTA / contact: direct contact route or mail link. Do not
    invent contact details.
9.  Footer: four columns; bottom row has copyright aligned left and
    Terms of Service + Privacy Policy links aligned right.

The first screen should prioritize imagery and brand identity. Avoid
adding sections that make the page feel like a generic template.

### 6. External Library Responsibilities

#### Lenis

-   Initialize once after the DOM is available.
-   Keep native anchor behavior usable and test anchor offsets.
-   If AOS is used, call `AOS.refresh()` after major layout changes and
    after image loading when necessary.
-   Do not run a second independent animation loop if the selected Lenis
    integration already provides one.
-   Do not prevent normal page scrolling when JavaScript fails.

#### AOS

-   Apply restrained entrance animations to section headings, copy, and
    cards.
-   Use short distances and durations; avoid animating every child
    separately.
-   Disable or simplify motion under `prefers-reduced-motion: reduce`.
-   AOS is primarily an entrance-on-scroll library. Do not rely on it
    for exit animations that are required for core functionality; use
    CSS/Vanilla JS transitions for dismissals and state changes.

#### Bootstrap Icons

-   Load via official Bootstrap Icons CDN stylesheet.
-   Use icons as decorative when adjacent text already names the action;
    add accessible names to icon-only controls.
-   Do not use icons as a substitute for clear labels.

#### Hairline

-   Reference: https://hairline.lucasmarkes.com/
-   Documentation: https://hairline.lucasmarkes.com/docs
-   The library offers pointer-responsive SVG line drawings and a
    Vanilla entry.
-   Use at most one restrained Hairline figure in a suitable secondary
    area (for example, a studio/process detail or an empty decorative
    canvas), not on top of the hero photography.
-   Use the documented Vanilla API/ES module CDN pattern. Supply a
    descriptive accessible label and a dark theme matching the page.
-   Treat this as progressive enhancement: if the module fails, the rest
    of the page remains complete and usable.
-   On touch devices, keep the figure legible without pointer
    interaction; never make hover the only way to discover information.

### 7. Interaction Architecture

-   Navigation hide/show: track scroll direction with a threshold, avoid
    reacting to tiny scroll deltas, keep header visible at the top, and
    always show it when keyboard focus enters the header. Use
    `transform` and `opacity` transitions.
-   Mobile menu: accessible button with `aria-expanded`,
    `aria-controls`, Escape-to-close, focus visibility, and
    close-on-navigation.
-   Anchor links: native `href="#section-id"` links; apply
    `scroll-margin-top` to target sections.
-   Project cards: make the primary link explicit and keyboard
    accessible; avoid nested interactive elements.
-   Contact CTA: use a real destination only when supplied. Otherwise
    use a placeholder anchor/contact section without fabricated email or
    phone details.
-   Terms/Privacy: footer links point to placeholder paths
    `terms-of-service.html` and `privacy-policy.html`. If these pages
    are not built, clearly mark them as placeholders in code/comments
    and do not pretend they contain legal content.

### 8. Responsive Strategy --- Mobile First

-   Base styles target small screens.
-   Start with a single-column flow and compact navigation.
-   At tablet widths, introduce two-column text and card layouts.
-   At desktop widths, recreate the asymmetrical collage and
    multi-column project grid.
-   Use fluid type with `clamp()` and responsive spacing tokens.
-   Ensure no horizontal overflow at 320 CSS px.
-   Images use `object-fit: cover`; select appropriate focal positions
    per image.

Suggested breakpoints (adjust after visual testing): - Small:
320--599px - Tablet: 600--899px - Desktop: 900px and above - Wide
desktop: 1280px and above

### 9. Accessibility

-   Use semantic `header`, `nav`, `main`, `section`, `article`, and
    `footer`.
-   One descriptive `h1`; preserve logical heading order.
-   Provide a skip link, visible focus indicators, sufficient contrast,
    and descriptive image `alt` text.
-   Use `aria-label` only when visible text is insufficient; avoid
    unnecessary ARIA.
-   Mobile menu and all controls must work with keyboard and touch.
-   Respect `prefers-reduced-motion`; turn off Lenis smoothing and
    nonessential animation where possible.
-   Avoid communicating project information through imagery alone.
-   Use minimum comfortable touch targets around 44×44 CSS px where
    practical.
-   Ensure focus is not hidden by the auto-hiding header.
-   If language controls are displayed, implement actual language
    behavior or omit them; do not show fake toggles.

### 10. Performance and Resilience

-   Use appropriately sized WebP/AVIF images with explicit width/height
    or aspect ratio.
-   Eager-load the hero image; lazy-load below-the-fold images.
-   Avoid layout shifts by reserving image dimensions.
-   Keep JavaScript small and initialize features defensively.
-   If a CDN script fails, content remains readable and links remain
    functional.
-   Avoid autoplay video, heavy parallax, and unnecessary third-party
    trackers.

### 11. Acceptance Checklist

-   [ ] Works at 320px, tablet, laptop, and wide desktop.
-   [ ] Screenshot-inspired dark editorial layout is recognizable.
-   [ ] Both supplied references are represented appropriately.
-   [ ] Lenis smooth scrolling is initialized and degrades gracefully.
-   [ ] AOS entrance animations work without blocking content.
-   [ ] Bootstrap Icons load correctly.
-   [ ] Custom WebKit scrollbar is styled, with usable fallback
    behavior.
-   [ ] Header hides on downward scroll and returns on upward scroll;
    remains available for keyboard focus.
-   [ ] Four-column footer at desktop, stacked responsively on small
    screens.
-   [ ] Copyright is left-aligned and Terms/Privacy links right-aligned
    in the footer bottom row.
-   [ ] Semantic structure, visible focus, keyboard navigation, and
    reduced-motion support are present.
-   [ ] No fabricated client details, broken links, console errors, or
    horizontal overflow.
