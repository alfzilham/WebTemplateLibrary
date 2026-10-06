# SPEC.md

# Landing Page Functional & Content Specification

## 1. Goal

Create a premium creative-studio landing page that feels like an **independent digital design studio**, not a generic SaaS template.

Primary visual reference: the uploaded brutalist/editorial website screenshot.

The design should communicate:

> Bold ideas. Strong identity. Digital experiences without unnecessary rules.

---

# 2. Page Sections

## 2.1 Header

### Desktop

Grid-based navigation:

```text
[ LOGO ] [ STUDIO ] [ WORK ] [ ABOUT ] [ SERVICES ] [ JOURNAL ] [ CONTACT ] [ START A PROJECT ↗ ]
```

Requirements:

- fixed or sticky header
- 1px black borders
- white background
- black typography
- yellow CTA
- logo uses bold condensed typography
- no gradients

### Mobile

```text
[ LOGO ]                         [ MENU ]
```

When opened:

```text
WORK
ABOUT
SERVICES
JOURNAL
CONTACT

START A PROJECT ↗
```

---

# 3. Hero

## Layout

Desktop:

```text
┌───────────────────────────────┬───────────────┐
│                               │ INTRO COPY    │
│ WE DESIGN                     │               │
│ WITHOUT                       │ HAIRLINE      │
│ RULES.                        │ VISUAL        │
│                               │               │
│ category                     │               │
│ CTA                           │               │
└───────────────────────────────┴───────────────┘
```

Use an asymmetric editorial grid.

### Main Heading

Example:

```text
WE DESIGN
WITHOUT
RULES.
```

Use:

- uppercase
- extremely large
- condensed/heavy font
- tight line-height
- negative letter-spacing
- `clamp()` sizing

Suggested desktop size:

```css
font-size: clamp(4.5rem, 10vw, 10rem);
```

Do not hard-code a fixed desktop font size.

### Intro

Example:

```text
A CREATIVE STUDIO
BUILDING BOLD BRANDS
AND DIGITAL EXPERIENCES
THAT STAND OUT.
```

### Supporting Line

```text
BRANDING. WEBSITES. DIGITAL EXPERIENCES.
```

Add a small yellow square before the text.

### Primary CTA

```text
VIEW OUR WORK ↗
```

Button:

- white background
- black 1–2px border
- uppercase
- icon from Bootstrap Icons
- hover fills black and changes text to white

---

# 4. Hairline Integration

The supplied Hairline project must be incorporated into the experience.

References:

```text
https://github.com/lucasmarkes/hairline
https://hairline.lucasmarkes.com/
```

Use Hairline as an **interactive visual element**, not as the entire website.

Preferred placement:

```text
Hero → right-side visual panel
```

Suggested figure:

```text
terrain
```

Reason:

- visually technical
- geometric
- reacts to pointer
- complements the brutalist grid
- feels like a digital sculpture

The Hairline visual should:

- have a black/white treatment
- remain inside a bordered frame
- react subtly to pointer movement
- not compete with the hero headline
- have a fallback if JavaScript/CDN fails

Also provide a small external-reference area somewhere near the footer:

```text
INTERACTIVE REFERENCE

[ VIEW HAIRLINE GITHUB ↗ ]
[ VIEW LIVE DEMO ↗ ]
```

These must use the exact supplied URLs.

---

# 5. Statement Strip

Create a horizontal section:

```text
(2026)     WE DON'T FOLLOW TRENDS.
           WE SET DIRECTIONS.                    →
```

Requirements:

- black border
- strong uppercase typography
- yellow status block
- subtle horizontal reveal on scroll

Status:

```text
AVAILABLE
FOR NEW
PROJECTS
●
```

---

# 6. Selected Work

## Header

```text
SELECTED
WORK

↓
SEE ALL WORK ↗
```

## Projects

Minimum 3 projects.

### Project 01

```text
01
CONCRETE VISION
BRANDING / IDENTITY
```

### Project 02

```text
02
GRIDLINE STUDIO
WEB DESIGN / DEVELOPMENT
```

### Project 03

```text
03
FORMA SYSTEMS
BRANDING / DIGITAL
```

Use project images with editorial crops.

Project 02 can use a red accent block inspired by the supplied reference.

---

# 7. Project Interaction

Desktop:

- image zooms subtly on hover
- metadata remains stable
- arrow translates 4–8px
- optional color inversion

Mobile:

- no hover dependency
- entire project is tappable
- preserve image aspect ratio
- no excessive zoom

AOS:

```html
data-aos="fade-up"
data-aos-duration="800"
```

Images:

```html
data-aos="zoom-out"
```

Avoid excessive animation stacking.

---

# 8. Studio Statement

Large split section:

```text
[ YELLOW GRAPHIC ]     BUILT TO
                       DISRUPT.

                       We combine strategy,
                       design and technology
                       to create digital
                       experiences that
                       challenge the ordinary.
```

Yellow graphic may use:

- Bootstrap Icon
- geometric SVG
- CSS-created asterisk
- simple brand mark

Do not use gradients.

---

# 9. Services

Accordion list:

```text
OUR
SERVICES →

01  BRANDING                 +
02  WEB DESIGN               +
03  DEVELOPMENT              +
04  DIGITAL STRATEGY         +
```

When opened:

```text
BRANDING

Identity systems, visual language,
art direction and brand foundations
built for long-term recognition.
```

Requirements:

- keyboard accessible
- `aria-expanded`
- smooth height animation
- one active item at a time
- mobile-friendly

---

# 10. CTA

Large CTA:

```text
LET'S CREATE
SOMETHING
DIFFERENT. ↗
```

Use red accent background.

Secondary newsletter block:

```text
SUBSCRIBE TO OUR NEWSLETTER

[ ENTER YOUR EMAIL ] [ SUBSCRIBE ]
```

No backend required for the prototype.

On submit:

- prevent page reload
- show inline success message
- do not send data anywhere

---

# 11. Footer

Include:

```text
STUDIO
WORK
ABOUT
SERVICES
CONTACT

FOLLOW US
IG.
BE.
LI.
TW.
```

Also include:

```text
HAIRLINE REFERENCE
GITHUB ↗
LIVE DEMO ↗
```

Exact URLs:

```text
https://github.com/lucasmarkes/hairline
https://hairline.lucasmarkes.com/
```

---

# 12. Scroll Behavior

Lenis is mandatory.

Expected experience:

- smooth wheel scrolling
- smooth anchor navigation
- natural inertia
- no scroll hijacking for form controls
- normal native scrolling when reduced motion is enabled

Do not implement a second custom smooth-scroll engine.

---

# 13. AOS Animation Rules

Use AOS as the main entrance/exit animation system.

Preferred effects:

- `fade-up`
- `fade-down`
- `fade-right`
- `fade-left`
- `zoom-out`
- `fade`

Animation rules:

- 500–1000ms duration
- stagger repeated cards
- do not animate every text node
- keep hero animation minimal
- use `mirror: true` selectively for exit/re-entry behavior
- respect reduced motion

---

# 14. Scrollbar

Custom WebKit scrollbar:

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f5f5f0;
}

::-webkit-scrollbar-thumb {
  background: #111111;
  border: 2px solid #f5f5f0;
}

::-webkit-scrollbar-thumb:hover {
  background: #f4e400;
}
```

Firefox fallback:

```css
html {
  scrollbar-width: thin;
  scrollbar-color: #111 #f5f5f0;
}
```

---

# 15. Responsive Breakpoints

Mobile-first:

```text
< 576px     Mobile
576–767px   Large mobile
768–991px   Tablet
992–1199px  Desktop
1200–1439px Large desktop
1440px+     Wide desktop
```

The page must remain usable at:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

---

# 16. Content Language

The design copy may be in English to preserve the international creative-studio tone.

Use concise phrases.

Avoid:

- long paragraphs
- corporate jargon
- generic AI-generated marketing language
- excessive section labels

---

# 17. Acceptance Criteria

The implementation is complete when:

- [ ] Vanilla HTML/CSS/JS only
- [ ] Mobile-first
- [ ] Desktop/tablet/mobile responsive
- [ ] Lenis implemented
- [ ] AOS implemented
- [ ] Bootstrap Icons loaded through CDN
- [ ] Custom WebKit scrollbar implemented
- [ ] Hairline reference integrated
- [ ] GitHub Hairline link exists
- [ ] Hairline live demo link exists
- [ ] Mobile navigation works
- [ ] Services accordion works
- [ ] Newsletter form has frontend feedback
- [ ] Project cards are interactive
- [ ] keyboard navigation works
- [ ] reduced-motion behavior works
- [ ] no horizontal overflow
- [ ] no framework dependency
