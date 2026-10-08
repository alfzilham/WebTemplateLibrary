# SPEC.md

## 1. Objective

Create a polished commercial-real-estate landing page for a company provisionally named **Business Alliance**, using the supplied screenshot as the main layout reference and https://hairline.lucasmarkes.com/ as an additional website reference.

The finished page should feel professional, architectural, minimal, and trustworthy. It must be responsive, accessible, and built with Vanilla HTML, CSS, and JavaScript.

## 2. Audience and Primary Action

**Audience:** businesses seeking offices, warehouses, land, rental, purchase, or property-management support.

**Primary conversion:** click “Start cooperation” and reach the contact section or begin an enquiry.

**Secondary actions:** browse property categories, understand the process, review client feedback, and read FAQs.

## 3. Required Sections

### A. Header
- Brand symbol and “Business Alliance” wordmark on the left.
- Desktop navigation links: About Us, Catalog, How We Work, Reviews, Contacts.
- Anchor links scroll to the corresponding sections.
- Header is fixed or sticky at the top, with a smooth hide-on-scroll-down / show-on-scroll-up behavior.
- Do not hide while the user is at the top of the page, using keyboard navigation, or interacting with the mobile menu.
- Mobile menu button must have an accessible name and accurate `aria-expanded`.

### B. Hero
- Wide architectural image with rounded corners, cropped to fill.
- Large white headline: **Real Estate for Business**.
- Supporting copy: “Rent, sale, turnkey selection, rent, sale and management of properties for your business.”
- Primary pill-shaped CTA: **Start cooperation**.
- Apply a dark/neutral overlay as needed to maintain text contrast.
- On mobile, stack content naturally and preserve readable text over the image.

### C. About Us and Metrics
- Section heading: **About Us**.
- Short paragraph describing a commercial-real-estate network and its service scope.
- Four prominent metrics in a 2×2 grid on desktop/tablet where suitable:
  - 10+ — years in the market
  - 1000+ — successful deals
  - 4000+ — properties in our database
  - 95% — satisfied clients
- Treat figures as sample content until verified by the business.

### D. Partner Strip
- Six evenly spaced monochrome logo placeholders.
- Keep the strip low-contrast and visually secondary.
- Do not use actual third-party brand logos without permission.

### E. Property Catalog
- Intro column with heading **Property Catalog** and concise description.
- Three image cards:
  1. Office spaces — 4000+ properties
  2. Warehouse spaces — 1000+ properties
  3. Land plots — 2000+ properties
- Images use consistent rounded corners and aspect ratios.
- Provide functional previous/next controls when cards overflow or become a carousel. On wide screens, display the three cards together.
- Counts are placeholder copy and must be easy to change.

### F. How We Work
- Heading **How we work** with a short explanatory sentence.
- Two-column layout: architectural image and a five-step process list.
- Process items:
  1. Free consultation — consultation and needs analysis.
  2. Search and selection of properties — shortlist options matching budget and goals.
  3. Property viewing and assessment — arrange viewings and provide an overview.
  4. Document verification and preparation — review documents and ownership rights.
  5. Transaction support — support through contract and closing.
- Each item includes a Bootstrap Icon, title, description, and subtle divider.
- A circular floating badge on or near the image may say “Free consultation”.

### G. Reviews
- Testimonial cards consistent with the minimalist design.
- Use clearly marked placeholder testimonials or neutral placeholders; do not present invented reviews as authentic.
- If a slider is included, its controls must work and be keyboard accessible.

### H. FAQ
- Include at least four useful questions about consultation, finding a property, document verification, and transaction support.
- Use an accessible accordion with real buttons.
- Support keyboard operation and reduced motion.

### I. Contacts
- Heading and short CTA copy.
- Provide replaceable placeholder phone, email, office location, and social links.
- Include a contact form with name, email, phone (optional), and message.
- Every field has a visible label; required fields use native validation.
- As no backend or form provider was requested, do not claim the form has sent a message. Show an honest demo success message or use a `mailto:` fallback.

### J. Footer
- Four columns on desktop, stacked on smaller screens:
  1. Company name, short summary, and optional logo.
  2. Navigation links.
  3. Services/property categories.
  4. Contact details and social links.
- Bottom line:
  - Copyright text aligned left.
  - **Terms of Service** and **Privacy Policy** aligned right.
- Both legal links are placeholders only (for example, `href="#"` with click behavior prevented or a clearly labeled placeholder destination). They must not lead to nonexistent pages or accidentally jump to the top.

## 4. Responsive Requirements

Use a mobile-first CSS strategy. Suggested breakpoints (adjust as needed):
- Base: 320–599 px.
- Tablet: 600–1023 px.
- Desktop: 1024 px and above.
- Large desktop: 1440 px and above, with a sensible maximum content width.

At 320 px width:
- No horizontal page overflow.
- Text remains readable and buttons remain tappable.
- Navigation is usable.
- Cards stack or use a deliberate, operable horizontal scroller.
- Footer columns stack cleanly.

At tablet widths:
- Use two-column layouts where space permits.
- Keep card images and metrics balanced.
- Do not squeeze process descriptions into narrow columns.

At desktop widths:
- Match the screenshot's spacious grid, wide hero, large headings, three-card catalog, and two-column process section.

## 5. Motion and Scrolling

- **Lenis:** smooth scrolling for anchor navigation and normal page movement.
- **AOS:** subtle entrance animations for sections, cards, metrics, and process rows.
- **Auto-hiding navbar:** hide on downward scrolling after a modest threshold and reveal on upward scrolling.
- Use short, restrained transitions; avoid distracting parallax or excessive movement.
- Respect `prefers-reduced-motion: reduce`. In reduced-motion mode, turn off AOS animation and Lenis smoothing where possible and use native scrolling.
- Ensure anchor destinations are not obscured by the header.

## 6. Icon and Scrollbar Requirements

- Bootstrap Icons loaded from the official jsDelivr CDN.
- Use icons consistently for process steps, mobile menu, arrows, contact methods, and social links.
- Do not use emoji as interface icons.
- Add a custom WebKit scrollbar (`::-webkit-scrollbar`, `::-webkit-scrollbar-track`, `::-webkit-scrollbar-thumb`) with subtle neutral colors and a rounded thumb.
- Also set `scrollbar-color` and `scrollbar-width` for Firefox.
- Keep scrollbar contrast sufficient and avoid making the scrollbar excessively narrow.

## 7. Accessibility Acceptance Criteria

- Semantic HTML landmarks and one `h1`.
- Skip-to-content link.
- All controls have accessible names and visible focus indicators.
- All form fields have programmatically associated labels.
- Images have appropriate alt text; decorative images use empty alt text.
- Icon-only buttons include accessible labels.
- Color contrast meets WCAG AA for normal text wherever practical.
- Keyboard-only users can access all navigation, controls, accordions, and form fields.
- Motion is reduced for users who request reduced motion.
- No interaction depends solely on hover or color.
- No fake testimonials, endorsements, or unverified business claims are presented as confirmed facts.

## 8. Content and Asset Handling

- Use high-quality architectural imagery: modern office towers, industrial warehouse exteriors, aerial land plots, and glass skyscrapers.
- Use local assets if available; otherwise use stable, replaceable image URLs and provide graceful fallbacks.
- Add meaningful alt text for informative imagery.
- Avoid text baked into images.
- Make all copy, figures, URLs, and image sources easy to replace.

## 9. Definition of Done

- The page is visually aligned with the reference screenshot's clean, pale background, charcoal text, rounded architectural hero, spacious sections, large metric numerals, image-led cards, and restrained monochrome styling.
- All requested sections exist.
- Lenis, AOS, Bootstrap Icons CDN, custom scrollbar, responsive mobile-first layout, semantic HTML, and accessibility features are implemented.
- Navbar hide/reveal behavior works smoothly and does not trap keyboard users.
- Catalog controls, mobile navigation, FAQ, and form feedback work.
- Footer has four columns plus left-aligned copyright and right-aligned legal placeholder links.
- No dead buttons, console errors caused by the implementation, or horizontal overflow at mobile sizes.
