# SPEC.md

# Landing Page Functional & Content Specification

## 1. Goal

Build a premium creative-agency landing page that communicates:

> Bold creative work. Strong digital experiences. No generic templates.

The visual direction follows the supplied reference:
- editorial
- neo-brutalist
- monochrome + vivid orange
- oversized typography
- asymmetric image composition
- visible grid/borders
- strong contrast
- minimal rounded UI

Do not copy the reference pixel-for-pixel.

---

## 2. Required Sections

### 01 — Header / Navigation

Desktop:
- Logo/wordmark at left
- Work
- About
- Services
- Insights
- Contact
- Orange "Start a Project" CTA

Mobile:
- Logo
- Menu button
- Full-screen or dropdown navigation panel
- CTA

Behavior:
- Fixed/sticky header
- Hide when scrolling down
- Reappear when scrolling up
- Smooth transition
- Remain visible near top
- Do not hide when mobile navigation is open

---

### 02 — Hero

Layout:
- Large editorial headline
- Supporting statement
- Main visual
- Accent orange geometric panel
- Small circular/typographic decorative element
- CTA

Example copy:

```text
WE
DON'T
DO
AVERAGE.
```

Accent word/line:

```text
DIGITAL EXPERIENCES.
```

Supporting copy:

```text
A CREATIVE DIGITAL STUDIO
BUILDING BOLD BRANDS,
INTERFACES AND EXPERIENCES
THAT PEOPLE REMEMBER.
```

CTA:

```text
VIEW OUR WORK
```

Hero requirements:
- One `<h1>`
- Strong responsive typography
- Image must not destroy readability
- Decorative elements must not create accessibility problems
- Use `object-fit: cover` where appropriate

---

### 03 — Services

Title/label:

```text
WHAT WE DO
```

Four service cards:

```text
01
BRANDING & IDENTITY

Strategic branding that
builds recognition.
```

```text
02
WEB DESIGN & DEVELOPMENT

Crafting digital experiences
that perform.
```

```text
03
CONTENT & CAMPAIGNS

Storytelling that engages
and inspires.
```

```text
04
STRATEGY & CONSULTING

Data-driven strategies
that drive growth.
```

Each card:
- Number
- Title
- Description
- Arrow icon
- Hover/focus state
- Clear border

---

### 04 — Manifesto / CTA

Black background.

Large heading:

```text
STOP USING
BORING WEB
TEMPLATES.
```

Supporting copy:

```text
STAND OUT.
BREAK RULES.
BUILD SOMETHING ICONIC.
```

CTA:

```text
LET'S BUILD SOMETHING DIFFERENT
```

Use AOS reveal.

---

### 05 — Featured Work

Use an asymmetric project grid.

Example:

```text
01 / ELEVATE APPAREL
Branding, Web Design

02 / NEXUS TECH
Web Development

03 / VISION STUDIOS
Branding, Campaigns

04 / CLOUD NINE
Digital Experience
```

Grid behavior:
- Desktop: asymmetric multi-column
- Tablet: 2 columns
- Mobile: 1 column

Each project card:
- image
- project number
- title
- category
- arrow
- hover/focus interaction

---

### 06 — About / Philosophy

Purpose:
- Establish credibility
- Explain creative approach
- Reinforce brand philosophy

Example:

```text
WE MAKE DIGITAL
FEEL DIFFERENT.
```

Copy:

```text
We combine strategy, design and technology
to create digital experiences with a point of view.
```

Optional:
- small stats
- principles
- Hairline interactive figure

Hairline can be integrated here as an interactive line-based visual because its official docs support vanilla DOM and CDN usage.

---

### 07 — Contact CTA

Large statement:

```text
HAVE A PROJECT
IN MIND?
LET'S MAKE IT
UNFORGETTABLE.
```

CTA:
```text
START A PROJECT →
```

Optional email:
```text
hello@example.com
```

---

## 3. Footer

Professional 4-column footer.

### Column 1 — Brand
- Logo
- Short description

### Column 2 — Explore
- Work
- About
- Services
- Insights

### Column 3 — Services
- Branding
- Web Design
- Development
- Content
- Strategy

### Column 4 — Contact
- Email
- Phone
- Location
- Social links

Footer bottom:

Left:
```text
© 2026 BRAND NAME. ALL RIGHTS RESERVED.
```

Right:
```text
Terms of Service
Privacy Policy
```

Terms and Privacy are placeholder links only:
```html
<a href="#">Terms of Service</a>
<a href="#">Privacy Policy</a>
```

No separate pages are required.

---

## 4. Interaction Requirements

### Navbar
- Scroll down → hide
- Scroll up → show
- Near top → show
- Mobile menu → accessible toggle

### Smooth Scroll
Use Lenis.

### Reveal Animation
Use AOS.

### Buttons
Hover:
- subtle translation
- background inversion where appropriate
- arrow movement

Focus:
- strong visible outline
- same interaction must be usable with keyboard

### Project Cards
Hover may:
- slightly scale image
- reveal arrow movement
- shift metadata

Do not depend on hover for essential information.

---

## 5. Scrollbar

Custom WebKit scrollbar:

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #090909;
}

::-webkit-scrollbar-thumb {
  background: #ff4b00;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
```

Also provide a Firefox-compatible fallback:

```css
html {
  scrollbar-color: #ff4b00 #090909;
  scrollbar-width: thin;
}
```

---

## 6. Breakpoint Requirements

### Mobile
- 1 column
- menu button
- reduced decorative complexity
- readable H1
- 44px+ touch targets

### Tablet
- 2-column work/services where appropriate
- medium typography

### Desktop
- 12-column visual grid
- asymmetric composition
- 4-column footer
- large display typography

### Large Desktop
- constrain content using max-width
- avoid excessive line lengths
- maintain whitespace

---

## 7. Accessibility Acceptance Criteria

The final page is acceptable only if:

- Keyboard can reach every interactive element.
- Focus state is clearly visible.
- Mobile menu has correct ARIA state.
- Images have appropriate alt text.
- Decorative images use empty alt.
- Color is not the only way information is communicated.
- Text remains readable at zoom.
- Reduced-motion preference is respected.
- No essential content depends on hover.
- Semantic landmarks are present.
- Heading hierarchy is logical.
- Links have meaningful accessible names.

---

## 8. Technical Acceptance Criteria

Must use:
- Vanilla HTML
- Vanilla CSS
- Vanilla JS
- Lenis
- AOS
- Bootstrap Icons CDN
- Custom WebKit scrollbar
- Responsive mobile-first layout
- Semantic HTML
- Accessibility best practices

Must not use:
- React
- Vue
- Angular
- Bootstrap CSS
- Tailwind
- jQuery
- GSAP

Hairline is optional but recommended for one interactive visual:
- Official GitHub: `https://github.com/lucasmarkes/hairline`
- Official live site: `https://hairline.lucasmarkes.com/`

---

## 9. Definition of Done

The implementation is complete when:

- All sections are present.
- Desktop/tablet/mobile layouts work.
- Navbar scroll behavior works.
- Lenis works without breaking anchor links.
- AOS animations work.
- Reduced motion works.
- Bootstrap Icons render.
- Scrollbar is customized.
- Footer has 4 columns on desktop.
- Copyright is left aligned.
- Terms/Privacy are right aligned.
- Terms/Privacy remain placeholders.
- Hairline/reference integration is visible and intentional.
- No console errors.
- No broken images.
- No horizontal overflow on mobile.
- Keyboard navigation works.
