# DESIGN.md

# FinGuard Landing Page — Design System

## 1. Design Intent

Create a visually confident fintech landing page with the same broad visual language as the supplied screenshot:

- Editorial oversized typography
- Strong black/white contrast
- Vivid orange accent
- Large financial-card compositions
- Modular metric cards
- Dense but controlled information hierarchy
- Premium product mockups
- Large dark partner section
- Strong orange closing CTA

The page should feel modern, expensive, trustworthy, and slightly experimental.

Do not copy the screenshot pixel-for-pixel. Recreate its design principles.

---

## 2. Color System

### Primary

```css
--orange: #ff4a0a;
--orange-hover: #ff6126;
--black: #050505;
--black-soft: #111111;
--white: #ffffff;
```

### Neutrals

```css
--gray-50: #fafafa;
--gray-100: #f2f2f2;
--gray-200: #e7e7e7;
--gray-300: #d2d2d2;
--gray-500: #777777;
--gray-700: #303030;
```

### Semantic

```css
--text-primary: #050505;
--text-secondary: #626262;
--surface: #ffffff;
--surface-muted: #f2f2f2;
--surface-dark: #050505;
--text-on-dark: #ffffff;
--accent: #ff4a0a;
```

Orange should be used intentionally. It is the main brand accent, not a background for every component.

---

## 3. Typography

Use a modern grotesk/sans-serif.

Preferred approach:

1. System fallback for reliability.
2. Optional web font only if it can be loaded without harming performance.

Suggested stack:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

### Display heading

Characteristics:

- Extra bold
- Tight tracking
- Tight line-height
- Uppercase
- Large visual footprint

Suggested:

```css
font-size: clamp(3rem, 9vw, 8rem);
font-weight: 900;
line-height: 0.88;
letter-spacing: -0.055em;
```

Do not blindly use `8rem` on small screens.

### Section headings

```css
font-size: clamp(2rem, 4vw, 4.5rem);
font-weight: 850;
line-height: 0.92;
letter-spacing: -0.045em;
```

### Body

```css
font-size: 0.95rem;
line-height: 1.55;
```

---

## 4. Layout

Main content width:

```css
--content-width: 1280px;
--page-gutter: clamp(1rem, 3vw, 3rem);
```

Container:

```css
width: min(
  calc(100% - 2 * var(--page-gutter)),
  var(--content-width)
);
margin-inline: auto;
```

Use large vertical rhythm:

```text
Hero              120–180px+
Standard section  96–140px
Small block       48–80px
```

On mobile reduce spacing proportionally.

---

## 5. Border Radius

Use a consistent but restrained radius system:

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 999px;
```

Metric cards:

- 16–24px

Dashboard:

- 20–28px

Buttons:

- Pill

Partner tiles:

- 14–18px

---

## 6. Buttons

### Primary

Orange background.

```text
GET STARTED →
```

Characteristics:

- Compact height.
- Pill shape.
- Strong weight.
- Subtle hover translation.
- Focus ring.

### Secondary

White/transparent depending on section.

Use arrow icon:

```html
<i class="bi bi-arrow-up-right" aria-hidden="true"></i>
```

Do not rely on the icon alone to convey the action.

---

## 7. Hero Composition

The hero is the most visually important section.

Desktop layout:

```text
┌──────────────────────────────────────────────────────┐
│ NAV                                                  │
├──────────────────────────────────────────────────────┤
│                                                      │
│  HUGE HEADLINE             FINANCIAL CARD STACK      │
│  SUPPORTING COPY           + DECORATIVE ELEMENTS     │
│  CTA                                                │
│                                                      │
│  ACTIVE USERS              PROCESS RAIL              │
└──────────────────────────────────────────────────────┘
```

The card stack should overlap visually into the center of the composition.

Use CSS:

```css
transform:
  translate3d(...)
  rotate(...)
  perspective(...);
```

Avoid excessive 3D that becomes unreadable on mobile.

---

## 8. Financial Card Styling

### Orange card

```css
background: #ff4a0a;
color: #fff;
```

Use:

- Card number
- Brand label
- Expiry
- Name
- Chip-like decorative rectangle

### Black card

```css
background: #151515;
color: #fff;
```

### Silver card

```css
background: #d9d9d9;
color: #111;
```

These are fictional card designs.

Do not imply real payment credentials.

---

## 9. Metrics

The metric area should feel editorial.

Desktop:

```text
500k users | 98% | 24K
```

The first card is intentionally dominant.

Use CSS Grid:

```css
grid-template-columns: 1.5fr 0.75fr 0.75fr;
```

Mobile:

```css
grid-template-columns: 1fr;
```

Tablet:

```css
grid-template-columns: 1.2fr 1fr;
```

---

## 10. Feature List

Rows should look like a premium product specification.

Each row:

```text
01    Feature title                         →
```

Use:

- Light gray inactive state.
- Black active state.
- Thin dividers.
- Large click target.

The dashboard mockup should overlap the active region on desktop.

On mobile:

- Remove overlap.
- Put dashboard after the list.

---

## 11. Dashboard Mockup

Visual hierarchy:

```text
Latest Invoice
━━━━━━━━━━━━━━━━━━
67%       14%     19%
━━━━━━━━━━━━━━━━━━

Avatar  Kelly Williams      SUCCESS
Avatar  John Terry          SUCCESS
Avatar  Colin Clark         PENDING
```

Keep text small but readable.

Do not use tiny text solely to imitate the screenshot.

---

## 12. Benefits Section

Use generous whitespace.

Image/artwork side:

- Orange cards
- Slight rotation
- Soft shadow

Text side:

- Small orange eyebrow
- Strong black heading
- Three benefit bullets
- CTA

The layout should reverse naturally if needed at tablet/mobile.

---

## 13. Partners Section

This is the visual contrast section.

Background:

```css
#050505
```

Cards:

```css
#ff4a0a
```

Use a 2×2 grid on tablet/mobile and 4-column grid on desktop.

Cards should have large centered iconography.

---

## 14. Testimonial

Background:

```css
#efefef
```

Quote is large enough to dominate.

Recommended:

```css
font-size: clamp(1.8rem, 4vw, 4.5rem);
line-height: 0.98;
letter-spacing: -0.04em;
font-weight: 650;
```

Keep quote width controlled.

---

## 15. Footer

Orange background.

The large wordmark is a decorative typographic object.

Implementation idea:

```css
.footer-wordmark {
  font-size: clamp(7rem, 28vw, 28rem);
  font-weight: 900;
  letter-spacing: -0.09em;
  white-space: nowrap;
  transform: translateX(-4%);
}
```

Wrap with:

```css
overflow: hidden;
```

The wordmark must not cause horizontal page scrolling.

Footer content should sit above it using stacking context.

---

## 16. Hairline Integration

The supplied Hairline project should influence the visual system without taking over the page.

Good placements:

### Option A — Hero

Place a subtle Hairline figure behind or beside the card stack.

### Option B — Testimonial

Place a small pointer-reactive isometric line figure near the decorative quotation.

### Option C — Footer

Use a very low-contrast Hairline figure as an abstract background.

Preferred:

- One hero figure.
- One optional footer figure.

Keep opacity/contrast restrained.

Hairline's own design uses line-based isometric figures and supports plain DOM, SVG, reduced motion, and shared animation work; these characteristics make it appropriate as a progressive enhancement here.

---

## 17. Motion Design

Motion should feel smooth and premium.

### Lenis

Global scrolling:

- Soft inertia
- No exaggerated float
- No delayed navigation that feels broken

### AOS

Entrance:

- 650–900ms
- Ease-out
- Small translation
- Slight opacity fade

### Hover

Buttons:

```text
translateY(-2px)
```

Cards:

```text
translateY(-4px)
```

Do not make every object rotate on hover.

---

## 18. Navbar Motion

Default:

```text
translateY(0)
```

Hidden:

```text
translateY(-110%)
```

Transition:

```css
transition:
  transform 420ms cubic-bezier(.22, 1, .36, 1);
```

At reduced motion:

```css
transition: none;
```

---

## 19. Scrollbar Design

Desktop scrollbar:

- Dark track
- Orange thumb
- Rounded thumb
- Small visual footprint

Mobile browsers may not expose the same styling; functionality must remain intact.

---

## 20. Accessibility Visuals

Focus:

```css
:focus-visible {
  outline: 3px solid #ff4a0a;
  outline-offset: 4px;
}
```

Never remove browser focus without replacing it.

Ensure orange text on white is sufficiently darkened where necessary. If pure `#ff4a0a` fails contrast for small text, use a darker orange token for text.

---

## 21. Responsive Visual Rules

### Mobile

- Avoid oversized card rotations.
- Hero card stack centered.
- Heading remains dominant but readable.
- Buttons may become full-width.
- Horizontal decorations may be clipped safely.
- Footer wordmark becomes smaller.

### Tablet

- Preserve two-column storytelling where it improves hierarchy.
- Reduce card overlaps.

### Desktop

- Use the full editorial composition.
- Allow controlled overlaps.
- Increase negative space.

---

## 22. Quality Bar

The final visual should communicate:

**Secure + Modern + Premium + Human + Fast**

Avoid:

- Generic SaaS dashboard aesthetic
- Excessive gradients
- Glassmorphism everywhere
- Excessive rounded cards
- Stock-photo-heavy design
- Overly playful animations
- Tiny unreadable text
- Excessive orange
- Unnecessary UI controls
