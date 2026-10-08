# SPEC.md

## ArchiStudio Landing Page --- Functional & Content Specification

### 1. Product Definition

A premium, single-page architecture studio website that introduces the
studio, establishes credibility, showcases selected work, and guides
prospective clients toward a project discussion.

**Primary reference image:** user-provided dark architecture portfolio
screenshot. **Secondary interaction reference:**
https://hairline.lucasmarkes.com/

### 2. Target Audience

-   Homeowners planning a new home or renovation.
-   Property developers and commercial clients.
-   People exploring architecture, interiors, and visualization
    services.

### 3. Primary User Goals

1.  Understand the studio's positioning quickly.
2.  View selected projects and their imagery.
3.  Learn what the studio offers and how it works.
4.  Find a clear way to discuss a project.

### 4. Information Architecture and Requirements

#### A. Header / Navigation

**Content** - Studio wordmark or logo. - Navigation anchors: Home,
About, Portfolio, Services, Process, Journal (optional), Contact. -
Primary CTA: "Discuss a Project".

**Behavior** - Sticky/fixed header with a smooth auto-hide behavior:
hide after scrolling down beyond a threshold; reveal while scrolling up;
stay visible near page top. - Keep header visible when it contains
keyboard focus. - Mobile navigation toggles open/closed with accessible
state and Escape support. - All navigation links point to real section
IDs. - Do not include nonfunctional language toggles. If language
buttons are included, they must actually switch the page language.

#### B. Hero

**Purpose:** Immediate visual impact and brand recognition.

**Required elements** - Asymmetric collage of architectural images
inspired by the supplied screenshot. - Large studio name/wordmark
(placeholder: "ARCHISTUDIO"). - Short positioning statement
(placeholder: "Architecture shaped by context, light, and the way we
live."). - Optional secondary statement at the right on larger
screens. - Main CTA: "Discuss a Project" or "Explore Projects".

**Rules** - Use high-quality architecture imagery; use clearly
replaceable placeholders if final images are not provided. - Preserve
the dark frame/gutter aesthetic. - Avoid putting important text over
busy image areas without contrast treatment.

#### C. About the Studio

-   Eyebrow/pill label: "About Us".
-   Heading and concise studio introduction.
-   Two-column editorial layout on desktop, stacked on mobile.
-   Copy should be sample content and easy to replace.

#### D. Studio Highlights

Two wide cards inspired by the screenshot: 1. Experience / project count
card (use editable placeholder figures, not invented facts presented as
real). 2. Portfolio / design approach card. Each card includes a
background image, headline, supporting copy, and a CTA. Use sample
labels such as "13 years" or "150+ projects" only as editable demo
content and clearly flag them for replacement.

#### E. Selected Projects

-   Section label: "Projects".
-   Four sample project cards:
    -   Lumina Grove House
    -   Minial Haven Apartment
    -   Nordic Timber Retreat
    -   Urban Loft Signature
-   Each card includes an image, project title, and visible arrow/link
    affordance.
-   Project cards should have consistent corner radii and thin borders.
-   Use semantic articles and links.
-   Card layout may use a staggered/asymmetric grid on desktop, a
    two-column grid on tablet, and one column or compact two-column
    cards on mobile depending on legibility.
-   Project names and imagery are placeholders and must be easy to
    update.

#### F. Services

Recommended editable service items: - Architecture - Interior Design -
3D Visualization - Consultation / Feasibility Do not assert that the
real studio offers any service unless confirmed; label these as demo
content.

#### G. Process

A concise process overview, e.g. Discovery → Concept → Development →
Delivery. Use restrained visual markers and optional Hairline
illustration if it supports the narrative.

#### H. Contact / Inquiry CTA

-   Clear heading inviting visitors to discuss a project.
-   Primary action should link to the Contact section or use a supplied
    real contact channel.
-   Do not fabricate email addresses, phone numbers, addresses, or
    social accounts.
-   If no contact details are provided, provide a placeholder CTA and
    document what must be replaced.

#### I. Footer

**Four columns on desktop**, with responsive stacking on
tablet/mobile: 1. Studio logo/name + short positioning statement. 2.
Explore: Home, About, Portfolio. 3. Services: Architecture, Interiors,
Visualization (editable demo labels). 4. Contact: placeholder contact
CTA and optional supplied social links.

**Footer bottom row** - Copyright notice aligned left. - "Terms of
Service" and "Privacy Policy" links aligned right. - Links point to
`terms-of-service.html` and `privacy-policy.html` as placeholders
only. - Do not create fake legal copy. If placeholder pages are
generated, state clearly that they need real legal content before
launch. - On narrow screens, allow bottom-row content to wrap or stack
while retaining logical reading order.

### 5. Visual Design Requirements

-   Near-black background, white/off-white primary text, muted gray
    secondary text.
-   Architectural imagery in neutral concrete, glass, wood, greenery,
    and daylight tones.
-   Thin gray borders and softly rounded image/card corners.
-   Oversized bold sans-serif heading.
-   Tight, deliberate spacing in the hero; generous vertical spacing
    between sections.
-   Minimal pills/eyebrow labels.
-   CTAs as high-contrast light buttons with dark text.
-   Avoid excessive gradients, neon colors, generic dashboard styling,
    or overuse of glassmorphism.

### 6. Required Libraries and Features

-   Vanilla HTML/CSS/JavaScript only; no React, Vue, or other UI
    framework.
-   Lenis smooth scroll.
-   AOS for entrance animations.
-   Bootstrap Icons via CDN.
-   Custom WebKit scrollbar (`::-webkit-scrollbar`, track, thumb) with
    appropriate `scrollbar-color` fallback.
-   Hairline reference used for a subtle pointer-responsive SVG line
    drawing if it fits the page.
-   Responsive, mobile-first layout.
-   Semantic HTML and accessibility support.

### 7. Animation Rules

-   Use AOS for section/card entrance effects such as fade-up or
    restrained fade-in.
-   Use CSS/Vanilla JS for navbar transitions, mobile menu, and
    interaction-state changes.
-   Do not make content dependent on animation.
-   Respect `prefers-reduced-motion: reduce`: disable/simplify AOS,
    Lenis smoothing, and decorative motion.
-   Do not add heavy parallax or long delays.

### 8. Responsive Acceptance

**Mobile (320--599px)** - Single-column hero composition or controlled
overlapping image stack. - Compact header with accessible menu. - Text
remains readable without clipping. - Cards stack or use a legible
compact grid. - No horizontal scrolling.

**Tablet (600--899px)** - Two-column grids where suitable. - Hero
collage can partially overlap but must preserve readable text. - Footer
columns can form a 2×2 grid.

**Desktop (900px+)** - Asymmetric hero collage and editorial two-column
sections. - Project grid with varied card heights inspired by the
reference. - Four-column footer and aligned bottom row.

### 9. Content and Asset Rules

-   Use replaceable demo content for studio name, figures, project
    names, descriptions, and service offerings.
-   Do not imply sample numbers are verified company facts.
-   Provide useful `alt` text for meaningful architectural images; use
    empty alt text for purely decorative images.
-   Prefer compressed local images. If remote placeholder images are
    used, keep image URLs centralized for easy replacement and provide
    fallback backgrounds.

### 10. Definition of Done

-   All sections and links work.
-   No dead buttons or fake controls.
-   Header auto-hide/show behavior is smooth and accessible.
-   Lenis, AOS, Bootstrap Icons, and optional Hairline figure are
    correctly integrated.
-   Custom scrollbar works in supported browsers without impairing
    scroll usability.
-   Reduced-motion preference is respected.
-   Footer has four columns on desktop and correct bottom-row alignment.
-   Terms and Privacy links are explicitly placeholders.
-   No console errors, missing assets, layout shifts that materially
    affect use, or horizontal overflow at 320px.
