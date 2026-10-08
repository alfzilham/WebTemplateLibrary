# SPEC.md

# Landing Page Product Specification

## 1. Product Direction

Create a premium futuristic technology landing page inspired by the
supplied screenshot.

The visual language should communicate:

-   AI
-   infrastructure
-   modular systems
-   precision
-   scale
-   futuristic engineering
-   premium software product

The page should feel cinematic without becoming visually noisy.

Primary visual reference:

-   Supplied screenshot: monochrome black/white AI landing page
-   Hairline repository: https://github.com/lucasmarkes/hairline
-   Hairline website: https://hairline.lucasmarkes.com/

------------------------------------------------------------------------

## 2. Global Requirements

### Mandatory stack

-   HTML5
-   CSS3
-   Vanilla JavaScript
-   Lenis
-   AOS
-   Bootstrap Icons CDN

Do not use:

-   React
-   Vue
-   Angular
-   Tailwind
-   Bootstrap CSS
-   jQuery
-   GSAP unless explicitly requested later

------------------------------------------------------------------------

## 3. Page Sections

### 3.1 Navigation

Desktop:

``` text
[Brand]     Product   How It Works   Features   Resources       [Get Started]
```

Mobile:

``` text
[Brand]                                  [Menu]
```

Requirements:

-   Fixed/sticky positioning
-   Transparent or glass-like initial state
-   Subtle background when scrolling
-   Auto-hide on downward scroll
-   Smooth reappear on upward scroll
-   Always visible near top
-   Mobile menu animated with CSS
-   Escape closes mobile menu
-   Menu button has accessible state

------------------------------------------------------------------------

## 4. Hero Section

### Composition

The hero should occupy approximately 90--100vh on desktop.

Structure:

``` text
small eyebrow

large headline
large headline

supporting statement

[Primary CTA]

central glowing product/core object

large monochrome flowing terrain/line field

partner/logo strip
```

### Visual direction

Background:

-   Near-black
-   Very subtle vertical/radial gradients
-   No colorful neon background

Terrain:

-   Thin grayscale lines
-   Isometric/perspective appearance
-   Flowing wave-like shape
-   Central valley or focal point
-   Pointer-responsive movement on desktop

Hero object:

-   Small luminous central module
-   Soft glow
-   Minimal icon
-   Avoid excessive glassmorphism

------------------------------------------------------------------------

## 5. Introduction Section

Use the screenshot's pattern:

``` text
[small section badge]

What is [Product]?

Short explanatory paragraph

[Feature Card] [Feature Card] [Feature Card]
```

Three cards should communicate the product's core value.

Example placeholder copy:

### Decentralized Execution

Run modular workloads across connected nodes.

### Real-Time Interaction

Trigger actions and workflows with fast, direct interaction.

### Protocol Interoperability

Connect applications, services, and execution layers through one system.

Copy should remain concise.

------------------------------------------------------------------------

## 6. How It Works Section

Use a four-step sequence.

``` text
1. Choose Node
2. Deploy
3. Register + Publish
4. Playground Mode
```

Desktop:

-   Four columns

Tablet:

-   Two columns

Mobile:

-   One column

Each card should contain:

-   Step number
-   Title
-   Short description
-   Small UI/diagram
-   Hover state

The cards should feel like product interfaces, not generic marketing
cards.

------------------------------------------------------------------------

## 7. Features / What We Provide

Use a mixed-size editorial grid.

Recommended structure:

``` text
[Large Feature] [Medium Feature] [Medium Feature]

[Large Visual / Code] [Large Feature]
```

Feature categories:

-   Core Engine
-   Edge-Synced Execution
-   Developer Tools
-   Protocol Layer
-   Real-Time Runtime
-   Observability

Cards should have subtle borders and gradient/noise-like depth without
relying on heavy images.

------------------------------------------------------------------------

## 8. Showcase Section

Include at least one large visual demonstration.

Possible content:

-   Terminal
-   Code panel
-   Architecture diagram
-   Modular node visualization
-   API request/response
-   Interactive terrain

The visual should support the product story rather than becoming
decoration only.

------------------------------------------------------------------------

## 9. Final CTA

Minimal section:

``` text
Ready to build with the system?

[Enter the platform]
```

Use generous whitespace.

The CTA should have:

-   high contrast
-   clear focus state
-   hover lift/glow
-   keyboard accessibility

------------------------------------------------------------------------

## 10. Footer

Four-column professional footer.

### Column 1 --- Brand

Logo/name

Short description

Social icons

### Column 2 --- Product

Overview

Features

How It Works

Changelog

### Column 3 --- Resources

Documentation

GitHub

Hairline Reference

Support

### Column 4 --- Company

About

Contact

Careers

Status

Footer should collapse to one or two columns on mobile.

------------------------------------------------------------------------

## 11. Copyright Row

Desktop:

``` text
© 2026 [Product]. All rights reserved.          Terms of Service   Privacy Policy
```

Left side:

-   copyright

Right side:

-   Terms of Service
-   Privacy Policy

Both links are placeholders only.

Use:

``` html
<a href="#" aria-label="Terms of Service">Terms of Service</a>
<a href="#" aria-label="Privacy Policy">Privacy Policy</a>
```

Do not create separate pages.

------------------------------------------------------------------------

## 12. Reference Links Requirement

Both provided Hairline links must be applied to the website.

Recommended location:

Footer → Resources.

Example:

``` text
Hairline GitHub
Hairline Website
```

They should be actual external links opening in a new tab.

Recommended security attributes:

``` html
target="_blank"
rel="noopener noreferrer"
```

Do not pretend Hairline is part of the product. Present it as a
design/interaction reference or inspiration resource.

------------------------------------------------------------------------

## 13. Animation Specification

### Lenis

Purpose:

-   Smooth page scrolling
-   Premium scroll feel
-   Anchor link compatibility

Do not make scrolling excessively slow.

### AOS

Use AOS for section/card entrance animations.

Suggested patterns:

``` text
fade-up
fade-down
fade-left
fade-right
zoom-in
```

Avoid animating every element individually.

Suggested timing:

``` text
duration: 800–1000ms
offset: 80–120px
once: true
```

### Navbar

Scroll direction:

``` text
down → translateY(-100%)
up   → translateY(0)
top  → translateY(0)
```

Transition:

``` text
transform 300–450ms cubic-bezier(...)
```

### Hero pointer effect

Desktop only:

-   Pointer position influences terrain
-   Small movement on core object
-   Soft parallax
-   No cursor replacement
-   No aggressive motion

Touch:

-   Static or very subtle ambient animation

Reduced motion:

-   Disable pointer animation
-   Disable nonessential transitions
-   Keep content fully usable

------------------------------------------------------------------------

## 14. Scrollbar

Implement WebKit scrollbar:

``` css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #050505;
}

::-webkit-scrollbar-thumb {
  background: #2a2a2a;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #454545;
}
```

Also provide Firefox-compatible properties where appropriate:

``` css
html {
  scrollbar-width: thin;
  scrollbar-color: #2a2a2a #050505;
}
```

------------------------------------------------------------------------

## 15. Accessibility Acceptance Criteria

Must pass the following manual checks:

-   Page can be navigated using Tab
-   Focus is clearly visible
-   Mobile menu is keyboard accessible
-   Escape closes mobile menu
-   Screen readers receive meaningful labels
-   Decorative visuals do not create noise
-   Heading hierarchy is logical
-   Links describe their destinations
-   Color contrast is readable
-   Reduced motion is respected
-   Touch targets are at least approximately 44×44px

------------------------------------------------------------------------

## 16. Browser / Device Targets

Primary:

-   Chrome
-   Edge
-   Firefox
-   Safari

Device classes:

-   360px mobile
-   390px mobile
-   768px tablet
-   1024px tablet/small desktop
-   1280px desktop
-   1440px desktop
-   1920px wide desktop

------------------------------------------------------------------------

## 17. Quality Constraints

Do not:

-   create horizontal scroll
-   use excessive `!important`
-   use giant shadow stacks
-   use random animation delays everywhere
-   hide essential content behind animation
-   rely on hover for critical functionality
-   use placeholder Lorem Ipsum
-   duplicate styles unnecessarily
-   add unnecessary dependencies

The final result should look deliberately designed rather than like a
generic AI-generated landing page.
