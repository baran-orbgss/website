# OrbGSS website — design authority

## Accepted direction

The desired site is a cinematic, minimal Earth-observation landing page. Think of the page as alternating horizontal layers rather than a conventional SaaS homepage.

### Structural rhythm

```text
[ NAVIGATION: OrbGSS ............ Home  Solutions⌄  About  Partner With Us | EN | TR ]

[ HERO: full-width satellite imagery + minimal hero copy      location / coords ↘ ]

[ DARK BEAM: section number + section title ---------------- short phrase ]
[ CLEAN FULL-WIDTH SATELLITE IMAGE — no overlay copy          location / coords ↘ ]

[ DARK BEAM: next section ]
[ CLEAN FULL-WIDTH SATELLITE IMAGE                           location / coords ↘ ]

[ repeat ]

[ compact footer ]
```

This alternating beam/image rhythm is the core design system. Images sit directly against the beams; there is no metadata band between them (changed in ORBWEB-001.1).

## Visual principles

### 1. Imagery first

Real high-resolution EO/satellite scenes should carry the visual character. Do not obscure them with excessive UI.

### 2. Clean images after hero

Only the hero is allowed substantial overlay copy. Subsequent solution images should remain visually clean.

### 3. Separator beams carry language

The horizontal beam between images is where the solution title and short editorial phrase live. It should span the entire viewport.

### 4. On-image location labels are part of the brand language

Every satellite scene carries its real-world location and coordinates **directly on the image, bottom-right**, as two lines of small uppercase tracked text:

```text
CRATER LAKE, OREGON, USA
42.9443° N, 122.1353° W
```

Rules (ORBWEB-001.1, canonical):

- no card, box, pill, semi-transparent rectangle or separate metadata band;
- a subtle text-shadow is the only readability aid allowed;
- the same system on every image, hero included;
- sensor and acquisition date are not displayed on the homepage; they remain in `assets/imagery/sources.json` and `IMAGERY_RIGHTS.md`.

Keep it subtle and technical, not badge-like.

### 5. Scale matters

On desktop, images must occupy a large vertical slice and use the full viewport width. The site should communicate geographic scale and context, not look like a gallery of cropped thumbnails.

### 6. Restraint

Avoid:

- card grids
- feature icons
- decorative dashboards
- fake GIS controls
- glowing network lines
- abstract 3D globes
- excessive cyan accents
- multiple competing CTAs
- long explanatory sections
- scroll-jacking and gratuitous motion

## Navigation

Desktop (≥ 981 px): logo far left; the whole navigation group right-aligned, never centered. Order is fixed:

`Home` → `Solutions ⌄` → `About` → `Partner With Us` → `|` → `EN | TR`

- Home carries the active state as a 1 px cyan underline.
- Partner With Us is a normal text item (the boxed CTA lives only in the hero).
- Solutions is a compact disclosure dropdown with exactly Geothermal, Mining, Marine: dark surface matching the header, no icons, no descriptions, no mega menu. Hover, keyboard focus and click open it; Escape and clicking outside close it; arrow keys move through items.
- The language switch is text only (`EN | TR`), active language in the cyan accent, inactive muted; no flags, no dropdown.

Mobile (≤ 980 px): hamburger reveals a restrained stacked list in the same order; Solutions expands and collapses on tap (never hover); Escape and link selection close the menu; the language switch stays at the bottom with tap-sized targets.

## Language

The homepage is bilingual: English is the default, Turkish is the second language. Switching is instant, client-side, preserves scroll position, updates `<html lang>`, the title and meta descriptions, and persists in `localStorage`. All strings live in the `I18N` dictionary in `script.js`; a new visible string is not done until both languages exist. Turkish copy is written as professional Turkish, not literal translation.

## Palette

Current implementation variables are in `styles.css`.

- nearly-black / deep navy base
- soft white primary type
- muted gray-blue metadata
- restrained cyan accent
- Earth imagery supplies the actual chromatic variation

Do not add a broad multi-color UI palette without approval.

## Typography

Current system stack is intentional for dependency-free deployment. The intended tone is technical, editorial and premium rather than playful. Large hero text can be light/regular weight. Section beams use compact uppercase tracking.

A webfont may be introduced later only if it improves the final identity and licensing/performance are handled deliberately.

## Logo

Current vector assets:

- `assets/logo.svg`
- `assets/mark.svg`

The accepted orbital mark has **no Earth/globe inside it**. Preserve that property.

## Reference image

`references/visual-direction-reference.png` records an earlier visual direction approved as a starting point. It is reference material only. The textual rules in this document represent later user feedback and therefore override any conflicting details in that image.
