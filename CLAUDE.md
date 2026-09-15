# CLAUDE.md — OrbGSS website repository authority

This file is the first authority to read when continuing OrbGSS website work in Claude Code.

## Bootstrap order

Before changing code, read in this order:

1. `STATUS.md`
2. `docs/WEB_VNEXT_AUTHORITY.md` (vNext authority; wins over 3–4 where they disagree)
3. `docs/DESIGN_AUTHORITY.md`
4. `docs/PRODUCT_AND_CONTENT_AUTHORITY.md`
5. `IMAGERY_RIGHTS.md`
6. `assets/imagery/sources.json`
7. the exact task file named by `STATUS.md`

Then inspect `index.html`, `styles.css`, `script.js`, and run the site validator before editing.

## Repository intent

This repository contains the public OrbGSS product landing page. It is intentionally a small static site: semantic HTML, CSS and minimal vanilla JavaScript. Do not introduce React, Next.js, Tailwind, a component framework, package manager dependencies, animation libraries or a CMS merely for convenience. A stack migration requires explicit approval.

## Design invariants

These are requirements, not suggestions:

- The page is image-led and extremely restrained.
- Full-width real Earth-observation imagery dominates the page.
- Hero text may overlay the first image; story panels after the hero are clean.
- Story copy appears on dark full-width technical beams between images (index, title, one or two sentences, monospace descriptor). The homepage sequence is Hero → 01 Observe → 02 Terrain → 03 Evidence → 04 Structure → 05 Priority → 06 Geothermal → Pilot ledger → Company/Trust → Contact → Footer (WEB-001).
- Each image carries its location and coordinates directly on the image, bottom-right, as bare monospace text (no card, box, band or background container). Story panels add a `Natural-color composite` line while they reuse gallery imagery. Sensor and acquisition date stay in the manifest and are not shown on the homepage. There is no separate metadata strip below any image.
- Temporary story panels are marked `data-visual-slot` / `data-visual-status="temporary-gallery"` and must never be labelled as DEM, evidence, structural or priority outputs. WEB-002 owns the real visuals.
- Desktop navigation is right-aligned in exactly this order: Platform → Solutions (dropdown: Geothermal Exploration, Mineral Exploration, Environmental & Land Intelligence) → Pilot → Company → Contact → EN | TR. Every item resolves to a real anchor; no flags in the language switch.
- The homepage is bilingual (English default, Turkish) via the lightweight client-side dictionary in `script.js`. Every new visible string needs both languages.
- No `How it works` section.
- No icon wall, feature-card grid, fake dashboard overlay, HUD chrome or decorative map pins.
- Keep generous horizontal/vertical scale on desktop. The user explicitly wants sections broader in both physical size and visual context.
- The logo orbital mark has no globe in the middle.
- Do not replace the current aesthetic with generic blue-gradient SaaS styling.

If a requested change conflicts with these rules, stop and ask for explicit design approval rather than silently drifting.

## Content / claim discipline

- OrbGSS is a geospatial intelligence / GIS platform with geothermal as the first pilot vertical.
- Mineral and environmental/land intelligence may be presented as solution directions.
- Do not claim a capability, customer, pilot result, AI feature, benchmark, accuracy figure or production integration unless it is explicitly supported by current canonical material supplied by the user.
- Keep copy concise. The design is not intended to explain the entire platform on the landing page.
- Geothermal Exploration is the first active application; Mineral Exploration and Environmental & Land Intelligence are expansion directions and must be labelled as such.

## Imagery policy

- Production imagery must have documented provenance and reuse rights.
- Preferred source: USGS Landsat Collection 2 / OrbGSS-generated composites from public-domain Landsat source data.
- Every production scene must be recorded in `assets/imagery/sources.json`.
- Keep `IMAGERY_RIGHTS.md` current when a source changes.
- Do not add stock-photo satellite imagery or AI-generated satellite imagery to the production site.
- Remote NASA Earth Observatory URLs are prototype fallbacks, not the desired final production dependency.

## Branching

No feature work on `main`. vNext tasks (WEB-001 → WEB-006) land on feature branches and are reviewed before merge. The cinematic hero is WEB-005; production DNS cutover is WEB-006.

## Deployment safety

Target deployment:

- source: Git repository
- hosting: Vercel
- domain registrar/DNS: Squarespace
- public domain: `orbgss.com`

When the custom domain is connected, only change DNS records needed for web hosting. Do not modify Google Workspace MX/SPF/DKIM/DMARC records.

Never create/delete external resources, connect DNS, publish the production domain, or modify the user's email setup unless the user explicitly authorizes that external write.

## Change discipline

For each bounded task:

1. state the task and files expected to change;
2. run `python scripts/validate_site.py` before changes;
3. make the smallest coherent change;
4. run the validator again;
5. preview locally if visual behavior changed;
6. report changed paths, validation result, remaining blockers and the next safe action.

Do not opportunistically redesign unrelated sections.
