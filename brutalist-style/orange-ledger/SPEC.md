# SPEC.md

# FinGuard Landing Page — Functional & Technical Specification

## 1. Product Definition

Create a high-end financial platform landing page for a fictional brand named **FinGuard**.

The page should communicate:

> Secure your financial future with trusted protection, smart monitoring, and seamless financial services.

The design should be strongly inspired by the supplied screenshot but must be implemented as an original responsive website.

Do not reproduce the screenshot as a flat image.

---

## 2. Reference Material

Primary visual reference:

- User-supplied FinGuard screenshot.

Secondary interaction/visual references:

- https://github.com/lucasmarkes/hairline
- https://hairline.lucasmarkes.com/

Hairline is specifically useful for subtle pointer-reactive/isometric visual accents. Its official repository documents a plain DOM API, SVG output, accessibility considerations, reduced-motion behavior, and performance characteristics.

---

## 3. Mandatory Technology

### Required

- HTML5
- CSS3
- Vanilla JavaScript
- Semantic HTML
- Lenis smooth scroll
- AOS animation library
- Bootstrap Icons CDN
- Hairline plain-DOM integration

### Forbidden

- React
- Vue
- Svelte
- Angular
- Tailwind CSS
- Bootstrap CSS framework
- jQuery
- GSAP
- Three.js
- Any build step that is unnecessary for the requested Canvas output

---

## 4. Page Sections

### 4.1 Header

Desktop:

- Brand/logo left.
- Navigation centered/right.
- CTA on right.
- Transparent/dark styling over hero.
- Compact height.

Suggested navigation:

- Products
- Features
- Benefits
- Partners

CTA:

- Sign Up

Mobile:

- Brand left.
- Hamburger button right.
- Full-screen or dropdown navigation.
- CTA included inside mobile menu.

Navbar behavior:

- At top: visible.
- Scrolling downward: smoothly hide.
- Scrolling upward: smoothly reveal.
- Must not jitter.
- Must remain visible while mobile menu is open.
- Must remain visible while keyboard focus is inside it.

---

## 5. Hero

### Visual Direction

Dark near-black background.

Accent:

- Bright FinGuard orange/red-orange.
- White typography.
- Small warm decorative shapes.
- Large financial-card composition.

Suggested tokens:

```css
--color-black: #050505;
--color-surface: #111111;
--color-white: #ffffff;
--color-muted: #a8a8a8;
--color-orange: #ff4a0a;
--color-orange-dark: #e63d05;
--color-gray: #ececec;
--color-border: rgba(255,255,255,.14);
```

### Hero content

Eyebrow:

```text
TRUSTED PROTECTION & EXPERT GUIDANCE
```

Headline:

```text
SECURE YOUR
FINANCIAL FUTURE
```

Supporting copy:

```text
Trusted protection and expert guidance
for your finances.
```

Buttons:

- Get Started
- Secondary circular arrow control

Trust block:

```text
Active Users
95K+
```

Add small avatar stack.

### Hero side process

Use three concise steps:

1. Selecting your provider
2. Set Up Your Account
3. Enjoy Seamless Banking

Each row gets a Bootstrap arrow icon.

### Hero cards

Create a stack of three stylized financial cards using HTML/CSS rather than embedding the entire reference image.

Card characteristics:

- Orange primary card.
- Dark/black secondary cards.
- Slight 3D rotation.
- Layered depth.
- Subtle shadow.
- Responsive scaling.
- Accessible decorative labeling.

The card stack may use CSS transforms and pseudo-elements.

---

## 6. About / Trust Metrics

White or very light background.

Intro layout:

Left:

```text
ABOUT US

GETTING TO
KNOW FINGUARD
```

Right:

A concise credibility paragraph.

Metrics:

### Metric 1

```text
500k users
```

Supporting text:

```text
FinGuard rapidly attracting a substantial user base of over
500,000 customers within its first year of operation.
```

### Metric 2

```text
98%
```

Supporting:

```text
Users enjoy faster transaction processing time.
```

### Metric 3

```text
24K
```

Supporting:

```text
A network of over 20,000 partner ATMs worldwide.
```

Cards should be visually varied:

- Large orange card
- Black card
- Light-gray card

---

## 7. Features

Intro:

```text
FEATURES

ALL-IN-ONE PLATFORM
FOR SAVINGS
```

Description:

```text
Simplify your financial life by securely connecting your
accounts automatically categorizing transactions.
```

Feature list:

1. Secure and Easy Transactions
2. Real-Time Financial Monitoring
3. Fast & Easy Transactions
4. Comprehensive Financial Planning

Interaction:

- Rows occupy full available width.
- Active row uses dark background.
- Circular arrow button at right.
- Dashboard mockup overlaps the feature area.
- On mobile, convert the list to stacked cards and place dashboard below it.

Dashboard mockup:

- White rounded panel.
- Header: Latest Invoice.
- Progress bar.
- Percentage labels.
- Customer rows.
- Status pills.
- Small avatars.

This is a visual mockup only; no real financial data is processed.

---

## 8. Benefits

Two-column layout.

Left:

- FinGuard card artwork.
- Small decorative navigation dots.

Right:

```text
BENEFITS

SHOPPING ON
INTERNATIONAL
```

Bullets:

- Get 2% cashback on all purchases.
- Access exclusive travel deals and discounts on flights and hotels.
- Includes travel insurance and purchase protection.

CTA:

```text
LEARN MORE
```

Use Bootstrap Icons for bullet indicators.

---

## 9. Partners

Full-width black section.

Heading:

```text
OUR TRUSTED PARTNERS

REAL-TIME FINANCIAL
MONITORING
```

Supporting copy:

```text
Just like us, FinGuard believes in building
long-term relationships with clients. Their
focus on customer service aligns perfectly
with our own values.
```

Trust metric:

```text
98%
```

Supporting copy:

```text
Partners are happy with our collaboration,
noting increased efficiency and mutual growth
since joining us.
```

Integration grid:

Create four large orange square cards:

- Apple Pay
- PayPal
- Transfer-style mark
- Google Pay

Important:

- Treat partner marks as text/icon placeholders unless licensed brand assets are provided.
- Do not fake official logos using inaccurate vectors.
- Use accessible labels.

Final small CTA block:

```text
CREATING IMPACTFUL
SOLUTIONS AND LASTING
PARTNERSHIPS
```

Button:

```text
LET'S WORK TOGETHER
```

---

## 10. Testimonial

Light-gray background.

Eyebrow:

```text
WHAT THEY SAY ABOUT US
```

Large quote:

```text
“FinGuard has completely transformed the way I
manage my finances. The real-time updates and
personalized advice have been invaluable.”
```

Author:

```text
Kelly Williams
Head of Design, Layers
```

Add avatar placeholder.

Right-side quotation icon:

- Bootstrap Icons quote mark if available.
- Decorative only.

Navigation buttons:

- Previous
- Next

These can be visual controls without implementing a full carousel unless time permits.

---

## 11. Final CTA / Footer

Bright orange section.

Use a giant cropped/extruded `finguard` wordmark as a visual treatment.

Do not use an external brand asset unless provided.

Use CSS typography with clipping/overflow to create a large typographic background.

CTA heading:

```text
READY TO TAKE
CONTROL OF YOUR
FINANCIAL FUTURE
```

Button:

```text
GET STARTED
```

---

## 12. Footer

Professional four-column footer.

### Column 1

Brand + short statement.

### Column 2 — Features

- Analytics
- Collaboration
- Data Management
- Integrations
- Security

### Column 3 — Company

- About Us
- Blog
- Careers
- Cookie Policy

### Column 4 — Resources / Support

Resources:

- Customers
- Strategies
- E-books & Guides
- Webinar

Support:

- Help Center
- Contact

The exact grouping may be adjusted to maintain a clean four-column desktop grid.

### Copyright row

Left aligned:

```text
© 2026 FinGuard
```

Right aligned:

```text
Terms of Service
Privacy Policy
```

These two links are placeholders only.

They should use:

```html
href="#"
```

and should not navigate to nonexistent pages.

Mobile:

- Copyright becomes full width.
- Terms and Privacy remain visible below or beside it.
- Maintain readable spacing.

---

## 13. Responsive Requirements

### Mobile First

Base:

- 320px–639px.
- One-column content.
- Reduced hero heading.
- Horizontal overflow prohibited.
- Cards stack.
- Feature list becomes vertical.
- Partner grid becomes 2 columns.
- Footer becomes one column or compact two-column layout.

### Tablet

Approx. 640px–1023px:

- Two-column content where useful.
- Hero card stack remains visible.
- Partner grid 2×2.
- Footer can use two columns.

### Desktop

1024px+:

- Full hero composition.
- Feature dashboard overlaps list.
- Benefits becomes two columns.
- Partners grid becomes four cards.
- Footer uses four columns.
- Max content width approximately 1200–1320px.

### Large Desktop

1280px+:

- Increase whitespace.
- Preserve readable max-width.
- Never stretch paragraphs to extreme widths.

---

## 14. Scrollbar

Implement a custom WebKit scrollbar:

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #050505;
}

::-webkit-scrollbar-thumb {
  background: #ff4a0a;
  border-radius: 999px;
  border: 3px solid #050505;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff6a32;
}
```

Also define a Firefox-friendly `scrollbar-color` fallback.

---

## 15. Smooth Scroll

Lenis:

- Initialize once.
- Use one RAF loop.
- Do not combine Lenis with CSS `scroll-behavior: smooth` for the same interactions.
- Anchor links should use Lenis scrolling where possible.
- Provide native fallback if Lenis is unavailable.

Pseudo-implementation:

```js
const lenis = new Lenis({
  smoothWheel: true,
  lerp: 0.1
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

If the installed Lenis version exposes different current options, adapt to that API rather than forcing obsolete options.

---

## 16. AOS Animation Specification

Use:

- `fade-up` for section headings.
- `fade-right` / `fade-left` for two-column content.
- `zoom-in` very sparingly for hero cards.
- `fade-up` with staggered delays for metric cards.
- `fade-up` for partner cards.

Do not animate every paragraph.

Suggested timing:

```text
duration: 650–900ms
delay: 0–250ms
easing: ease-out
```

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

and configure AOS appropriately.

---

## 17. Accessibility Acceptance Criteria

The implementation passes these checks:

- Keyboard can reach every interactive element.
- Focus indicator is clearly visible.
- Mobile menu is keyboard usable.
- Escape closes mobile menu.
- Menu button exposes correct ARIA state.
- Decorative graphics are not read as content.
- Text remains readable at zoom.
- No content is conveyed only through color.
- Buttons have meaningful accessible names.
- `alt` attributes are correct.
- Reduced-motion users do not receive aggressive animation.
- No horizontal scroll on 320px viewport.
- Footer placeholder links are keyboard reachable.
- Heading hierarchy is logical.

---

## 18. Definition of Done

The page is complete only when:

- It visually follows the supplied reference's hierarchy.
- It is responsive at mobile/tablet/desktop sizes.
- Lenis works.
- AOS works.
- Bootstrap Icons are used.
- Hairline is integrated appropriately.
- Navbar hides on downward scroll and reveals on upward scroll.
- Custom scrollbar is implemented.
- Footer has four desktop columns.
- Copyright is left-aligned and Terms/Privacy are right-aligned on desktop.
- Terms/Privacy are placeholders.
- The two supplied Hairline URLs are represented in the implementation documentation/comments where appropriate.
- No framework is used.
- No major layout shift occurs during page load.
