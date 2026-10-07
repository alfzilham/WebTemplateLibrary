# SPEC.md

# Lawn Care Landing Page — Functional & Content Specification

## 1. Product Definition

A premium local lawn care / landscaping landing page designed to convert visitors into quote requests and calls.

The page should feel:

- trustworthy
- established
- premium
- local
- energetic but not playful
- editorial
- image-led
- conversion-focused

The supplied screenshot is a visual reference for hierarchy, spacing, composition, imagery, cards, and overall polish. Do not reproduce its exact copy, logo, or proprietary content.

---

## 2. Primary Conversion Goal

Primary:

> Request a Free Quote

Secondary:

> Call Now

Tertiary:

> Explore Services

Every major page section should support the conversion journey without becoming repetitive.

---

## 3. Content Model

Use realistic placeholder content that can easily be replaced.

Brand:

```text
[BRAND NAME]
```

Service area:

```text
[PRIMARY CITY / REGION]
```

Phone:

```text
[PHONE NUMBER]
```

Email:

```text
[EMAIL ADDRESS]
```

Primary CTA:

```text
Get a Free Quote
```

---

## 4. Hero Specification

### Layout

Desktop:

- rounded outer hero container
- large landscape image
- dark green/black image treatment
- content aligned left
- floating trust card toward lower-right
- subtle visual detail on the right
- CTA row beneath the description

Mobile:

- image becomes stacked/contained
- text remains high contrast
- CTAs stack or wrap
- floating proof card becomes a normal card near the bottom
- no content should overlap awkwardly

### Hero copy

Eyebrow:

```text
LOCAL LAWN & PROPERTY CARE
```

Headline direction:

```text
A better-looking yard,
without the extra work.
```

Use an editorial serif/italic treatment on one phrase, but do not overuse italics.

Supporting text:

```text
Reliable mowing, landscaping, seasonal care, and property maintenance
for homeowners and businesses across [SERVICE AREA].
```

CTA:

```text
Get a Free Quote
```

Secondary:

```text
Call [PHONE]
```

Trust indicators:

```text
4.9 / 5
Local Customer Rating

Licensed & Insured
Reliable service, every season
```

Floating card:

```text
2K+
Happy Customers
```

The actual numbers are placeholders and must be clearly replaceable.

---

## 5. Trusted-by / Logo Strip

Immediately below hero.

Use 4–6 grayscale placeholder partner/client logos.

Requirements:

- monochrome
- subtle
- visually secondary
- horizontally aligned on desktop
- horizontally scrollable or wrapped on mobile
- no dependence on a specific brand

Use `aria-label="Trusted by"` or an equivalent meaningful heading.

---

## 6. About Section

Two-column desktop composition.

Left:

- rounded image
- small eyebrow
- optional small location/service badge

Right:

- headline
- 2 short paragraphs
- primary CTA
- secondary call link

Suggested heading:

```text
The local team
behind better properties.
```

Content should emphasize:

- reliability
- consistent service
- local knowledge
- seasonal expertise
- straightforward communication

Avoid unsupported claims such as exact years, certifications, or customer counts unless supplied by the final business owner.

---

## 7. Services Section

Heading:

```text
Everything your property needs.
```

Subheading:

```text
One dependable team for the work that keeps your property looking its best.
```

Cards:

1. Lawn Mowing
2. Power Raking
3. Fertilizing
4. Landscaping
5. Seasonal Cleanup
6. Snow Removal

Each card includes:

- image
- category label
- title
- short description
- Learn More link
- Bootstrap Icon
- subtle image zoom on hover

Desktop behavior:

- horizontal card rail / carousel-like presentation
- partially visible neighboring card is acceptable
- previous/next buttons are accessible

Mobile:

- horizontally scrollable snap rail
- cards remain readable
- avoid tiny cards
- hide overflow controls if native touch scrolling is sufficient

---

## 8. Process Section

Heading:

```text
How we work,
from start to finish.
```

Three primary steps:

### Step 01
```text
Free Property Assessment
```

Description:

```text
We learn what your property needs and recommend the right service plan.
```

### Step 02
```text
Track Your Service Schedule
```

Description:

```text
Know what is happening, when it is happening, and what comes next.
```

### Step 03
```text
Custom Quote & Property Plan
```

Description:

```text
Get a clear scope and straightforward pricing built around your property.
```

Optional Step 04:

```text
Satisfaction Guaranteed
```

The visual language should resemble a premium editorial process system rather than a generic SaaS timeline.

---

## 9. Testimonial Section

Use one strong testimonial card.

Content structure:

```text
★★★★★

“Short customer quote about reliable service, great communication,
and a property that looks noticeably better.”

Customer Name
Homeowner / Property Manager
```

Do not fabricate real customer identity. Use clearly fictional placeholder data during prototyping.

---

## 10. Final CTA

Dark green or deep charcoal background.

Heading:

```text
Ready for a yard you can feel good about?
```

Supporting copy:

```text
Tell us what your property needs. We'll help you figure out the next step.
```

Primary:

```text
Get a Free Quote
```

Secondary:

```text
Call [PHONE]
```

Optional Hairline visual can appear as a subtle decorative layer.

---

## 11. Footer

Four desktop columns.

### Brand

```text
[BRAND NAME]

Reliable lawn care and property services for
[REGION].
```

Social icons:

- Instagram
- Facebook
- LinkedIn

Use Bootstrap Icons.

### Services

- Lawn Mowing
- Landscaping
- Fertilizing
- Seasonal Cleanup
- Snow Removal

### Company

- About
- Services
- Process
- Testimonials
- Contact

### Contact

- [PHONE]
- [EMAIL]
- [SERVICE AREA]
- Get a Free Quote

Bottom row:

Left:

```text
© 2026 [BRAND NAME]. All rights reserved.
```

Right:

```text
Terms of Service
Privacy Policy
```

Policy pages are placeholders only.

---

## 12. Navbar Specification

Desktop:

- logo left
- navigation centered
- phone / utility item
- CTA right

Navigation:

```text
Home
About
Services
Process
Contact
```

Mobile:

- logo
- hamburger
- CTA can remain visible if space allows
- menu opens with accessible state

Auto-hide:

- scrolling down → translateY(-110%)
- scrolling up → translateY(0)
- page top → visible
- menu open → forced visible

---

## 13. Scroll Animation Specification

AOS:

```text
Hero supporting content       fade-up
Logo strip                    fade-up
About image                   fade-right
About content                 fade-left
Service cards                 fade-up + stagger
Process cards                 fade-up + stagger
Testimonial                   fade-up
Final CTA                     fade-up
Footer                        fade-up
```

Animation constraints:

- duration: 600–850ms
- easing: ease-out-cubic
- stagger: 50–100ms
- avoid excessive parallax
- no content may remain inaccessible if animation fails

AOS should support both entrance and exit/mirror behavior where it improves the experience.

---

## 14. Responsive Specification

### Mobile

- single-column layout
- 16–20px page gutters
- 44px minimum interactive target
- service cards snap horizontally
- no horizontal page overflow
- typography uses `clamp()`
- image aspect ratios preserved

### Tablet

- two-column sections where space allows
- process cards can become 2 + 1
- service rail remains horizontally scrollable
- navigation may remain desktop-style if space is sufficient

### Desktop

- max content width around 1200–1320px
- generous white space
- large hero
- editorial typography
- 3-column process/service compositions
- four-column footer

---

## 15. Accessibility Acceptance Criteria

- keyboard can reach every interactive element
- focus ring is always visible
- skip link works
- mobile menu is keyboard-operable
- menu button exposes `aria-expanded`
- menu uses `aria-controls`
- images have appropriate alt text
- decorative Hairline has no distracting screen-reader output
- buttons/links have meaningful accessible names
- no animation is essential to understanding content
- `prefers-reduced-motion: reduce` disables/reduces nonessential animation
- color contrast is tested
- no text embedded inside images for essential information

---

## 16. Acceptance Checklist

### Visual
- [ ] Reference-inspired premium lawn-care aesthetic
- [ ] Rounded hero
- [ ] Dark green imagery
- [ ] Lime accent
- [ ] Editorial typography
- [ ] White content sections
- [ ] Service image cards
- [ ] Process cards
- [ ] Professional footer

### Technical
- [ ] Vanilla HTML/CSS/JS
- [ ] semantic HTML
- [ ] Lenis
- [ ] AOS
- [ ] Bootstrap Icons CDN
- [ ] Hairline integrated
- [ ] custom WebKit scrollbar
- [ ] mobile-first
- [ ] responsive at 320px+
- [ ] no horizontal overflow

### UX
- [ ] auto-hide navbar
- [ ] reveal-on-scroll-up navbar
- [ ] mobile menu
- [ ] smooth anchors
- [ ] accessible focus states
- [ ] reduced-motion support

### Footer
- [ ] exactly four logical columns on desktop
- [ ] copyright left
- [ ] Terms of Service right
- [ ] Privacy Policy right
- [ ] both are placeholders
