# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Architectural Grid"
This design system is built for an era of precision. It moves away from the "softness" of consumer tech and embraces the rigorous, unapologetic nature of geospatial engineering. We are not just building an interface; we are drafting a blueprint.

The system breaks the "template" look by utilizing **intentional asymmetry** and **overlapping architectural layers**. By integrating subtle topographic background patterns and 0px corner radii, we create an environment that feels less like a website and more like a high-end, proprietary surveying terminal. This is "Industrial Editorial"—where massive, bold typography meets the razor-sharp accuracy of a laser scan.

---

## 2. Colors

The palette is a high-contrast study in authority. The dominance of deep charcoals is punctuated by 'Surveying Yellow,' a color synonymous with safety and precision in the field.

### Core Tokens
- **Primary (`#ffe792` / `#ffd709`):** Our "Surveying Yellow." Use it sparingly for critical focus points and high-level calls to action.
- **Surface & Background (`#0e0e0e`):** The foundation. It provides a "darkroom" environment that makes data and industrial imagery pop.
- **On-Surface (`#ffffff`):** Crisp white for maximum legibility against dark backgrounds.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Boundaries between content areas must be defined solely through background color shifts. For example:
- A `surface-container-low` section should sit directly against a `surface` background.
- Use the **topographic texture** at 5-10% opacity as a textural "divider" rather than a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials. 
- **Lowest Tier:** `surface-container-lowest` (#000000) for deep background wells.
- **Middle Tier:** `surface-container` (#1a1a1a) for primary content cards.
- **Highest Tier:** `surface-bright` (#2c2c2c) for interactive elements or high-priority toolbars.

### The "Glass & Gradient" Rule
To add "soul" to the industrial aesthetic, use **Glassmorphism** for floating overlays. Apply `surface-container` with a `backdrop-blur` of 20px. For primary CTAs, use a subtle linear gradient from `primary` (#ffe792) to `primary-dim` (#efc900) at a 135-degree angle to simulate the metallic sheen of surveying equipment.

---

## 3. Typography

The typography scale is built on the interplay between **Space Grotesk** (Display/Headlines) and **Manrope** (Body/Labels). 

- **Display & Headline (Space Grotesk):** Architectural, wide, and modern. These should be set with tight tracking (-2% to -4%) to feel like heavy industrial signage.
- **Body & Title (Manrope):** Chosen for its technical clarity. It balances the "loudness" of the headers with functional, easy-to-read data.

**Editorial Tip:** Use "The Overlap." Allow large Display-LG text to partially underlay or overlap high-quality industrial imagery. This breaks the standard grid and adds a sense of depth and curated design.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-high` card on a `surface-container-low` section to create a soft, natural lift.
- **Ambient Shadows:** For floating modals, use an extra-diffused shadow. 
    - *Shadow color:* `#000000` at 15% opacity.
    - *Blur:* 40px to 60px.
    - *Spread:* -5px.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at 15% opacity. Never use 100% opaque lines; they disrupt the "blueprint" flow.
- **Texture as Elevation:** Use the topographic map pattern only on the lowest surface levels to "ground" the design, while keeping functional interactive layers clean and smooth.

---

## 5. Components

### Buttons
- **Shape:** 0px (Sharp Corners).
- **Primary:** Surveying Yellow (`primary`) with `on-primary` text. No border.
- **Secondary:** Transparent background with a `Ghost Border` and white text.
- **Hover State:** Shift background to `primary-dim` and add a subtle 2px vertical offset to simulate a physical press.

### Input Fields
- **Background:** `surface-container-highest`.
- **Border:** None (use the "No-Line" rule). Instead, use a 2px `primary` bottom border that activates only on focus.
- **Corner:** 0px.

### Cards & Lists
- **Rule:** Forbid divider lines.
- **Separation:** Use vertical white space from the spacing scale (multiples of 8px) or alternate background tints (e.g., `surface-container` vs `surface-container-high`).
- **Imagery:** Cards should feature high-quality industrial photography with a slight "desaturated" filter, returning to full color only on hover.

### Topographic Overlays
A signature component. This is a vector overlay of contour lines. It should be used at the edges of the screen or as a background for "About" or "Contact" sections to reinforce the geospatial identity.

---

## 6. Do's and Don'ts

### Do
- **Do** use massive typography (Display-LG) to create a visual hierarchy that feels authoritative.
- **Do** align all elements to a strict 8-column or 12-column architectural grid.
- **Do** use high-quality, high-contrast imagery of machinery, landscapes, and blueprints.
- **Do** embrace "Void Space"—large areas of deep charcoal to let the primary yellow accents breathe.

### Don't
- **Don't** use rounded corners. Every corner must be 0px to maintain the industrial "machined" look.
- **Don't** use standard blue for links. Every interactive accent must be Surveying Yellow or White.
- **Don't** use traditional dividers. If you feel the need to separate, increase the padding.
- **Don't** use "Soft" or "Playful" icons. Use stroke-based, geometric icons that look like technical symbols.