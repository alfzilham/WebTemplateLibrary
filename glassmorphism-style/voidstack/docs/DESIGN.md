# DESIGN.md

# Visual Design System

## 1. Design Intent

The design combines the supplied screenshot's monochrome futuristic
aesthetic with the interaction philosophy of Hairline.

The result should feel:

-   premium
-   technical
-   cinematic
-   minimal
-   precise
-   calm
-   spatial

Avoid:

-   generic SaaS gradients
-   excessive purple/blue neon
-   excessive glass cards
-   cartoon visuals
-   noisy particle backgrounds
-   over-rounded UI
-   excessive text

------------------------------------------------------------------------

## 2. Color System

Primary background:

``` css
--color-bg: #050505;
```

Secondary background:

``` css
--color-surface: #0b0b0c;
```

Elevated surface:

``` css
--color-surface-2: #111112;
```

Primary text:

``` css
--color-text: #f5f5f5;
```

Secondary text:

``` css
--color-text-muted: #8a8a8f;
```

Tertiary text:

``` css
--color-text-subtle: #5c5c61;
```

Border:

``` css
--color-border: rgba(255,255,255,0.10);
```

Bright border:

``` css
--color-border-strong: rgba(255,255,255,0.18);
```

Glow:

``` css
--color-glow: rgba(255,255,255,0.18);
```

The page should remain overwhelmingly grayscale.

------------------------------------------------------------------------

## 3. Typography

Recommended:

-   Inter
-   Geist
-   system-ui

If external font loading is used, keep it minimal.

### Type scale

Mobile:

``` text
Hero H1: 42–56px
Section H2: 32–40px
H3: 20–24px
Body: 15–17px
Small: 12–14px
```

Desktop:

``` text
Hero H1: 72–104px
Section H2: 48–64px
H3: 22–28px
Body: 16–18px
Small: 12–14px
```

Hero headline should use tight line-height:

``` css
line-height: 0.95–1.05;
letter-spacing: -0.04em;
```

Body text should have comfortable line-height:

``` css
line-height: 1.6–1.75;
```

------------------------------------------------------------------------

## 4. Layout

Maximum content width:

``` text
1200–1320px
```

Desktop horizontal padding:

``` text
32–48px
```

Tablet:

``` text
24–32px
```

Mobile:

``` text
18–20px
```

Use generous vertical rhythm.

Recommended section spacing:

``` text
Mobile: 96–128px
Desktop: 144–200px
```

------------------------------------------------------------------------

## 5. Grid System

### Feature grid

Desktop:

``` text
repeat(3, 1fr)
```

Workflow:

``` text
repeat(4, 1fr)
```

Mobile:

``` text
1fr
```

Tablet:

``` text
repeat(2, 1fr)
```

Use CSS Grid for page-level layouts.

Use Flexbox for:

-   navigation
-   buttons
-   metadata
-   icon groups
-   footer rows

------------------------------------------------------------------------

## 6. Cards

Card style:

``` css
background: linear-gradient(
  145deg,
  rgba(255,255,255,0.055),
  rgba(255,255,255,0.018)
);

border: 1px solid rgba(255,255,255,0.09);
border-radius: 18px;
```

Do not overuse blur.

Optional:

``` css
backdrop-filter: blur(14px);
```

Only where it provides meaningful depth.

Card hover:

-   translateY(-3px)
-   border becomes slightly brighter
-   subtle glow

Transition:

``` text
250–400ms
```

------------------------------------------------------------------------

## 7. Buttons

Primary:

``` text
white background
black text
```

Secondary:

``` text
transparent
white text
thin border
```

Shape:

-   pill or medium radius
-   not excessively rounded

Minimum height:

``` text
44px
```

Hover:

``` text
translateY(-1px)
slight brightness change
```

Focus:

``` text
2px visible outline
```

------------------------------------------------------------------------

## 8. Hero Terrain

The hero is the strongest visual signature.

Concept:

``` text
       flowing line field
   \\\\\\\\\        /////////
    \\\\\\\\        ////////
      \\\\\\  ●    ////////
         \\\\\____//////
            \\\\\///
```

Characteristics:

-   dozens of thin lines
-   perspective depth
-   center convergence
-   subtle glow
-   large empty black space
-   pointer-reactive displacement

Hairline's `Terrain` concept is a useful interaction reference: it uses
an isometric field of elements that responds to the pointer. The actual
landing page should implement an original terrain rather than
reproducing the library's artwork.

------------------------------------------------------------------------

## 9. Hero Core

Use a small central object:

``` text
soft circular glow
        ↓
rounded square module
        ↓
simple Bootstrap icon
```

The object should look like a machine core or system node.

Do not use a complicated 3D model unless specifically requested.

------------------------------------------------------------------------

## 10. Section Kicker

Small pill:

``` text
[ icon ]  INTRODUCTION
```

Style:

-   tiny uppercase text
-   generous letter spacing
-   dark surface
-   subtle border
-   compact padding

Example:

``` css
font-size: 10px;
letter-spacing: 0.12em;
text-transform: uppercase;
```

------------------------------------------------------------------------

## 11. Logo / Partner Strip

Use muted monochrome marks.

The strip should be:

-   small
-   low contrast
-   evenly distributed
-   secondary to the hero

If real logos are unavailable, use text placeholders rather than
inventing official brand logos.

------------------------------------------------------------------------

## 12. Borders and Dividers

Use hairline-style borders:

``` css
border-color: rgba(255,255,255,0.08);
```

The border should be felt more than seen.

Avoid thick borders.

------------------------------------------------------------------------

## 13. Shadows and Glow

Preferred:

``` css
box-shadow:
  0 20px 80px rgba(0,0,0,0.45);
```

For core glow:

``` css
box-shadow:
  0 0 80px rgba(255,255,255,0.10);
```

Avoid:

-   colorful neon shadows
-   multiple huge shadows
-   excessive blur

------------------------------------------------------------------------

## 14. Motion Design

Motion should communicate depth.

Priority:

1.  Scroll reveal
2.  Header movement
3.  Pointer terrain
4.  Card hover
5.  CTA hover

Animation curves:

``` text
cubic-bezier(0.22, 1, 0.36, 1)
```

Motion must feel slow enough to feel premium but not sluggish.

------------------------------------------------------------------------

## 15. Mobile Design

Mobile is not a compressed desktop.

On mobile:

-   hero terrain becomes simpler
-   pointer interaction is disabled
-   hero headline scales down
-   cards become single-column
-   footer becomes stacked
-   decorative lines are reduced
-   navigation becomes a compact menu

Preserve the visual identity while reducing computational and visual
complexity.

------------------------------------------------------------------------

## 16. Accessibility Visual Rules

Focus ring:

``` css
:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}
```

Do not remove default focus without replacement.

Text should remain readable against the black background.

Motion should never be required to understand content.

------------------------------------------------------------------------

## 17. Reference Integration

The website should contain a small Resources/References area with:

-   Hairline GitHub
-   Hairline Website

These should be visually consistent with the footer and clearly indicate
that they are external references.

The references:

-   https://github.com/lucasmarkes/hairline
-   https://hairline.lucasmarkes.com/

Hairline itself is described as a collection of pointer-responsive
isometric line figures for React and DOM environments. Its documentation
also emphasizes accessibility, reduced motion, and performance-conscious
animation. These principles should influence the implementation without
copying its source or artwork.
