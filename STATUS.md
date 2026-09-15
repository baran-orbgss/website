# OrbGSS Website — CURRENT

**Canonical version:** `v0.6.0-web-001-vnext-foundation` (branch `feat/web-001-vnext-foundation`, REVIEW_READY, not merged)  
**Date:** 2026-09-15  
**Stage:** WEB-001 vNext information architecture, visual foundation and homepage shell implemented; awaiting review; WEB-002 (product-proof imagery) not started  
**Site architecture:** static HTML + CSS + vanilla JavaScript  
**Public domain target:** `https://orbgss.com`  
**Source repository:** https://github.com/baran-orbgss/website (accepted `main`: `b10cd72`; WEB-001 on `feat/web-001-vnext-foundation`)  
**Registrar / DNS:** Squarespace  
**Hosting target:** Vercel  
**Company:** VirgaSoft  
**Product:** OrbGSS — Orbital Geo-Spatial Solutions  
**Tracking:** Linear MER-89 (WEB-001)

## Authority

`docs/WEB_VNEXT_AUTHORITY.md` is the repository-local summary of the product-owned *OrbGSS Website vNext Product & Execution Authority v1.2*. Where it disagrees with `docs/DESIGN_AUTHORITY.md` or `docs/PRODUCT_AND_CONTENT_AUTHORITY.md`, it wins for vNext work. The active task contract is `tasks/WEB-001_VNEXT_FOUNDATION.md`.

## Current state (WEB-001)

The homepage is a cinematic gallery that tells the evidence-to-intelligence story. Rhythm is unchanged: dark technical beam → large full-width visual panel. Structure:

1. navigation (right-aligned: Platform → Solutions⌄ → Pilot → Company → Contact → EN | TR)
2. hero: static poster (Crater Lake composite), eyebrow / headline / supporting copy / `Explore the Platform` / `Partner With Us`; location + coordinates on the image
3. `01 Observe` beam → panel (`#platform`)
4. `02 Terrain` beam → panel (`#terrain`)
5. `03 Evidence` beam → panel (`#evidence`)
6. `04 Structure` beam → panel (`#structure`)
7. `05 Priority` beam → panel (`#priority`)
8. `06 Geothermal` beam → panel (`#geothermal`) — first active application
9. Pilot ledger (`#pilot`, list `#solutions`): Geothermal `Active · First application`; Mineral (`#mineral`) and Environmental & Land (`#environment`) `Expansion direction`
10. Company + trust list (`#company`)
11. Contact beam (`#contact`)
12. compact footer

Every visible string exists in EN and TR (`I18N` in `script.js`).

## Temporary visuals (WEB-002 owns the replacement)

Story panels 01–06 reuse the four provenance-safe Landsat composites as atmospheric gallery material only. Each carries the on-image label `Natural-color composite` and is marked in markup with `data-visual-slot` / `data-visual-status="temporary-gallery"`. No panel is presented as a DEM, evidence raster, structural map or priority output. Placement is recorded per scene in `assets/imagery/sources.json` (`web_vnext_placement`). The validator enforces slot order and status.

The hero is a static poster (`data-hero-slot="static-poster"`); WEB-005 replaces only `.hero-visual`.

## Locked design decisions

- Full-width, high-resolution Earth-observation imagery is the primary visual system.
- Except for the hero, imagery stays clean: no cards, floating UI, map controls, pins, grids, diagrams or overlay copy.
- Story copy lives on the dark technical beams: index, uppercase title, one or two sentences, monospace descriptor.
- Every satellite image shows its real location and coordinates directly on the image, bottom-right, bare monospace text; story panels add the `Natural-color composite` line. No metadata strip below any image.
- Secondary monospace treatment is reserved for coordinates, evidence labels, metadata, status tags and technical descriptors.
- Desktop navigation order is fixed: Platform → Solutions (Geothermal Exploration, Mineral Exploration, Environmental & Land Intelligence) → Pilot → Company → Contact → EN | TR, right-aligned. All destinations are real anchors.
- Bilingual (EN default, TR) through the client-side dictionary; no flags, no framework.
- No `How it works` section, icon wall, SaaS card grid, fake dashboard, HUD chrome, stock photography or globe in the logo mark.
- Dark, restrained, scientific/EO aesthetic; desktop stays wide and cinematic.

## Product positioning

OrbGSS is a geospatial-intelligence platform. Geothermal Exploration is the first active application (pilot). Mineral Exploration and Environmental & Land Intelligence are expansion directions and are labelled as such. No customer, partner, revenue, ROI, accuracy, AI-performance or production-deployment claims.

## Production blockers

1. Confirm `contact@orbgss.com` before public launch.
2. WEB-001 review and merge (no feature work on `main`).
3. WEB-002: product-proof visuals for the story slots, with provenance recorded before use.
4. Vercel preview from the GitHub repository (explicit authorization for the Vercel write).
5. WEB-006 only: connect `orbgss.com` / `www.orbgss.com` through Squarespace DNS, preserving Google Workspace MX/SPF/DKIM/DMARC.

## Next canonical task

WEB-001 is REVIEW_READY. After review: `WEB-002` (product-proof imagery for the deferred visual slots). Do not start WEB-002 on this branch.

## History

- ORBWEB-001 (2026-09-09): production imagery from USGS Landsat Collection 2 Level-2, provenance pinned.
- ORBWEB-001.1 (2026-09-09): on-image labels, right-aligned navigation with Solutions dropdown, EN/TR.
- ORBWEB-002A (2026-09-10): GitHub publication to `baran-orbgss/website`.
- WEB-001 (2026-09-15): vNext authority published; homepage shell, story sections, pilot ledger, company/trust, contact; navigation and hero renewed; validator extended.
