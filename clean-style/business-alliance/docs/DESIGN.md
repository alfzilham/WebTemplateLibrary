# DESIGN.md

## 1. Visual Direction

**Design keywords:** architectural, restrained, confident, spacious, editorial, premium B2B.

Follow the supplied reference screenshot closely in composition: a compact header, a large rounded hero image, a two-part About section, a horizontal partner strip, an image-led property catalog, and a two-column process section. Continue the same visual language into reviews, FAQ, contact, and footer.

Use https://hairline.lucasmarkes.com/ as a secondary reference for overall web craft and interaction inspiration. The real-estate screenshot remains the primary reference for layout and art direction.

## 2. Design Tokens

Define reusable CSS custom properties in `:root`:

```css
:root {
  --color-page: #f7f7f6;
  --color-surface: #ffffff;
  --color-text: #151515;
  --color-muted: #626262;
  --color-line: #d7d7d4;
  --color-hero-overlay: rgb(0 0 0 / 0.28);
  --color-icon: #111111;

  --font-body: "Inter", "Manrope", Arial, sans-serif;
  --content-width: 1440px;
  --page-gutter: clamp(20px, 4.2vw, 64px);

  --radius-card: 22px;
  --radius-hero: 26px;
  --radius-pill: 999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 88px;

  --shadow-subtle: 0 8px 28px rgb(0 0 0 / 0.05);
  --transition-fast: 180ms ease;
  --transition-normal: 280ms ease;
}
```

Adjust colors if required by image contrast, but keep the palette predominantly neutral. Avoid gradients, saturated accents, glassmorphism, and decorative effects that are not present in the reference.

## 3. Layout and Spacing

- Center content within a maximum width of approximately 1440 px.
- Use consistent page gutters that scale with viewport width.
- Desktop section spacing: approximately 72–104 px between major sections.
- Tablet section spacing: approximately 56–72 px.
- Mobile section spacing: approximately 40–56 px.
- Use CSS Grid for the About layout, catalog intro/cards, process section, and footer.
- Use Flexbox for navigation, metric rows, partner strip, and compact card metadata.
- Keep paragraph line length comfortable; avoid long full-width text blocks.

## 4. Typography

- Use a modern sans-serif, preferably Inter or Manrope.
- Hero heading: bold, tight line-height, responsive using `clamp()`.
- Section headings: bold, dark, with compact line-height.
- Metric numbers: large and heavy; labels smaller and muted.
- Body copy: readable, moderately compact, muted charcoal.
- Navigation and metadata: small but legible; never reduce below comfortable accessibility sizes.

Suggested responsive scales:
- Hero heading: `clamp(2.25rem, 5vw, 4.25rem)`.
- Section headings: `clamp(1.8rem, 3vw, 2.7rem)`.
- Body copy: `clamp(0.95rem, 1.1vw, 1.05rem)`.
- Use `line-height: 1.45–1.65` for body text and around `1.05–1.15` for large headings.

## 5. Header and Navigation

- Small monochrome logo/wordmark at the upper left.
- Desktop links sit on one line on the right with generous spacing.
- Keep the header background visually consistent with the page.
- For hide/reveal behavior, animate with `transform: translateY(-110%)` and a CSS transition. Keep the header at the top of the document visible.
- Reveal when scrolling upward; reveal when keyboard focus enters the header; never hide an open mobile menu.
- On mobile, show a menu toggle and a compact panel with generous touch targets.
- Include a visible focus ring and a skip link.

## 6. Hero Image

- Full-width within the content container.
- Use a wide aspect ratio on desktop (roughly 2.1:1); allow a taller crop on mobile.
- Rounded corners around 24–28 px.
- Choose a grayscale or low-saturation photograph of a contemporary commercial building, ideally with a strong diagonal roofline and open negative space for text.
- Position the headline and copy on the left, vertically centered.
- Use a subtle dark overlay or gradient only where needed for text legibility.
- CTA is a white or near-white pill with dark text, medium weight, and a clear hover/focus state.

## 7. About and Metrics

- Two-column desktop layout: text on the left, metrics on the right.
- About heading is bold and visually prominent.
- Paragraph width is limited to avoid a long line length.
- Metrics use a 2×2 grid with large black numerals and short muted labels.
- On mobile, stack the copy and metrics; keep the metrics in two columns if each cell remains readable.

## 8. Partner Strip

- Six neutral logo placeholders in a single row on wide screens.
- Use dark marks and small wordmarks; keep their visual weight consistent.
- On small screens, allow horizontal overflow with deliberate spacing or wrap to two rows.
- Use no third-party logos without authorization.

## 9. Property Catalog Cards

- Desktop layout: intro column plus three property cards in a row, similar to the screenshot.
- Cards are image-first; use a tall portrait crop with consistent ratio.
- Rounded corners around 20–24 px.
- Titles directly below the image; metadata appears smaller and muted.
- Hover effect should be subtle (small image scale or slight elevation) and must not be the only indication that a card is interactive.
- Carousel arrows are circular, high-contrast controls with visible focus states.
- On mobile, stack cards or use a snap-scrolling horizontal row with working controls and an accessible status label.

## 10. How We Work

- Desktop: image on the left, ordered list of five steps on the right.
- Use a tall architectural photograph with a cool, slightly desaturated treatment.
- Add an optional circular muted-gray consultation badge overlapping the image edge; ensure it does not obscure important content or cause overflow.
- Each step uses a solid dark circular icon container with a white Bootstrap Icon.
- Headings are bold and concise; descriptions are smaller and muted.
- Separate process rows with thin neutral dividers.
- On mobile, stack the image and process list and remove or reposition the floating badge if it interferes with content.

## 11. Reviews, FAQ, and Contact

- **Reviews:** keep cards minimal with white or page-colored surfaces, neutral borders, concise copy, and visible attribution placeholders. Clearly identify sample content until real testimonials are provided.
- **FAQ:** simple divider-based accordion. Use a plus/minus or chevron Bootstrap Icon, a clear expanded state, and enough spacing for touch interaction.
- **Contact:** use a two-column layout on desktop—intro/contact details on one side, form on the other. Stack on mobile. Fields use neutral borders, comfortable padding, and strong focus states.
- Keep all form feedback text visible and accessible to screen readers via an appropriate live region.

## 12. Footer

- Four columns on desktop, with balanced gaps and small section labels.
- Company summary and wordmark in the first column.
- Navigation and services in the middle columns.
- Contact and social links in the fourth column.
- Use a thin top border or generous spacing to distinguish the footer from the content.
- Bottom utility row:
  - Copyright aligned left.
  - “Terms of Service” and “Privacy Policy” aligned right.
- On mobile, stack the utility row and align the legal links naturally without overflow.
- Legal destinations are placeholders only; make this explicit in code comments and avoid fake content pages.

## 13. Motion and Microinteractions

- Lenis smooth scrolling with a sensible duration and easing; disable or reduce it when `prefers-reduced-motion` is enabled.
- AOS entrance animations should be subtle: short fade-up or fade-in, small distance, and modest stagger.
- Avoid exit animations that leave content hidden or delay navigation.
- Header hide/reveal should be smooth and independent of AOS.
- Buttons and links should have restrained hover, active, and focus states.
- Keep animation duration generally between 180–650 ms, except smooth scrolling.

## 14. Custom Scrollbar

- Use a neutral track close to the page background and a medium-gray rounded thumb.
- Add `::-webkit-scrollbar` pseudo-elements for WebKit browsers.
- Add `scrollbar-color` and `scrollbar-width` for Firefox.
- Keep the scrollbar visible and usable; do not make it nearly invisible.

## 15. Responsive Behavior

**Mobile first**
- Default CSS targets small screens.
- At 600 px, introduce two-column layouts where they remain comfortable.
- At 900–1024 px, expand navigation and the catalog layout.
- At 1200 px and above, use the full composition and more generous whitespace.
- At all widths, avoid fixed heights for text-heavy sections, preserve image focal points, prevent horizontal overflow, and keep touch targets approximately 44×44 px or larger.

## 16. Accessibility and Reduced Motion

- Maintain WCAG AA contrast for text and controls.
- Focus outlines must remain visible against light and dark surfaces.
- Provide descriptive alt text for meaningful property images.
- Decorative icon glyphs should be hidden from assistive technology (`aria-hidden="true"`).
- Use semantic buttons for actions and anchors for navigation.
- Honor `prefers-reduced-motion: reduce`: disable AOS transitions and use native scrolling.
