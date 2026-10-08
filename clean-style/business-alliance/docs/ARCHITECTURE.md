# ARCHITECTURE.md

## 1. Project Overview

Build a responsive, single-page commercial real-estate landing page inspired by the supplied Business Alliance reference screenshot. The site presents a commercial property agency, establishes credibility, showcases property categories, explains the service process, displays client reviews, and generates consultation enquiries.

The implementation must use **Vanilla HTML, CSS, and JavaScript**—no frontend framework and no build step required.

Reference inputs:
- Visual reference: the screenshot supplied with this request.
- Website reference: https://hairline.lucasmarkes.com/

Use the screenshot as the primary visual direction and the website URL as an additional reference for interaction quality and implementation inspiration. Do not copy unrelated branding or assets blindly; reproduce the requested composition using appropriate commercial-real-estate content and replaceable image assets.

## 2. Technology Stack

- HTML5: semantic page structure.
- CSS3: responsive layout, design tokens, transitions, custom WebKit scrollbar.
- Vanilla JavaScript: navigation behavior, mobile menu, catalog controls, FAQ, and other interactions.
- Bootstrap Icons CDN: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
- Lenis: smooth scrolling.
- AOS (Animate On Scroll): entrance/reveal animations.
- Google Fonts (optional): use a clean sans-serif such as Inter or Manrope; include a system-font fallback.

Use pinned CDN versions where practical. Include graceful fallbacks so the core page remains usable if a third-party script fails to load.

## 3. Suggested File Structure

```text
real-estate-landing/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── hero-building.jpg
│   │   ├── office-spaces.jpg
│   │   ├── warehouse-spaces.jpg
│   │   ├── land-plots.jpg
│   │   └── process-building.jpg
│   └── README.md
├── ARCHITECTURE.md
├── SPEC.md
└── DESIGN.md
```

For Gemini Canvas, it is acceptable to generate the site in a single previewable HTML artifact if the environment requires it. Keep code clearly sectioned and make it straightforward to split into the structure above later.

## 4. Page Sections and Responsibilities

1. **Header / Navigation**
   - Brand mark and company name on the left.
   - Desktop links: About Us, Catalog, How We Work, Reviews, Contacts.
   - Compact mobile navigation with an accessible menu button.
   - Hide on downward scrolling after a small threshold; reappear on upward scrolling.
   - Always keep the header visible at the top and when keyboard focus enters the navigation.

2. **Hero**
   - Large rounded architectural photograph with a subtle overlay.
   - Main headline: “Real Estate for Business”.
   - Short description covering rent, sale, turnkey selection, and property management.
   - Primary CTA: “Start cooperation”, linking to the contact section.

3. **About / Trust Metrics**
   - Short company introduction.
   - Four proof-point metrics: 10+ years in the market, 1000+ successful deals, 4000+ properties in database, 95% satisfied clients.
   - Use realistic, editable placeholder figures; do not imply independently verified claims.

4. **Client / Partner Logos**
   - A horizontally aligned strip of six logo placeholders.
   - Use text-based placeholder brands or simple neutral marks; do not invent real endorsements.

5. **Property Catalog**
   - Three featured categories: Office Spaces, Warehouse Spaces, Land Plots.
   - Each card has a relevant image, title, short supporting metric, and accessible link or button.
   - Optional previous/next controls on narrower screens. Controls must work and announce the visible item range.
   - If the catalog is not backed by real data, clearly treat counts and imagery as placeholders.

6. **How We Work**
   - Large architectural image with a floating consultation badge.
   - Five process steps: Free Consultation; Search and Selection; Viewing and Assessment; Document Verification; Transaction Support.
   - Each step uses a Bootstrap Icon, heading, and concise description.

7. **Reviews**
   - Client testimonial cards or a compact slider.
   - Use clearly labeled sample/placeholder testimonials until approved client quotes are supplied.
   - Avoid fabricating identifiable people, companies, or verified ratings.

8. **FAQ**
   - Accessible accordion with native buttons and `aria-expanded` / `aria-controls`.
   - Questions cover consultation, property search, documents, fees, and transaction support.

9. **Contact**
   - Clear invitation to start a conversation.
   - Contact details as editable placeholders.
   - Accessible enquiry form with labels, required-field validation, and a clear success/error state.
   - Do not imply the form sends data unless a real endpoint or service is configured. Default to a front-end demonstration with an honest “demo form” note or a mailto fallback.

10. **Footer**
    - Four responsive columns for company overview, navigation, services, and contact/social links.
    - Bottom row: copyright aligned left; “Terms of Service” and “Privacy Policy” links aligned right.
    - Terms and privacy destinations are placeholders only; do not create separate pages.

## 5. Runtime and Initialization

Initialize each enhancement independently and defensively:
- Lenis: create the smooth-scroll instance only when the library is available; synchronize it with AOS if required by the selected versions.
- AOS: initialize after the DOM is ready and refresh after responsive/catalog changes.
- Navigation: use a passive scroll listener and requestAnimationFrame or a small state threshold to avoid excessive work.
- Mobile menu: toggle via a button, close on Escape, close after selecting a section, and keep `aria-expanded` synchronized.
- Catalog controls: update the visible cards and accessible status text, or use native horizontal scrolling with functional controls.
- FAQ: native button interactions, keyboard operability, and accurate ARIA state.
- Contact form: native validation plus an honest confirmation message; no fake network submission.

## 6. Accessibility and Performance

- Use `header`, `nav`, `main`, `section`, `article`, `address`, and `footer` where appropriate.
- One clear `h1`; preserve logical heading order.
- Add a skip link, visible focus styles, descriptive link names, image alt text, and sufficient contrast.
- Respect `prefers-reduced-motion: reduce`; disable or greatly reduce Lenis/AOS motion for those users.
- Avoid animating essential content into an inaccessible hidden state.
- Lazy-load below-the-fold images and provide image dimensions or aspect ratios to limit layout shift.
- Avoid layout thrashing in scroll handlers; use CSS transforms for the hide/show header.
- Ensure all functionality works with a keyboard and touch input.

## 7. External Dependencies

Use only the requested libraries:
- Bootstrap Icons CDN.
- Lenis CDN.
- AOS CSS and JS CDN.
- Optional web font.

Do not add React, Vue, Angular, jQuery, Tailwind, Bootstrap's full CSS framework, or a backend. Keep the page lightweight and easy to maintain.
