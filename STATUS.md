# OrbGSS Website — CURRENT

**Canonical version:** `v0.5.1-nav-labels-bilingual`  
**Date:** 2026-09-09  
**Stage:** visual direction locked; production imagery populated; approved navigation, on-image labels and EN/TR revision applied (ORBWEB-001.1); preview deployment pending  
**Site architecture:** static HTML + CSS + vanilla JavaScript  
**Public domain target:** `https://orbgss.com`  
**Source repository:** https://github.com/baran-orbgss/website (branch `main`, public)  
**Registrar / DNS:** Squarespace  
**Hosting target:** Vercel  
**Company:** VirgaSoft  
**Product:** OrbGSS — Orbital Geo-Spatial Solutions

## Current state

The landing-page implementation is functional and intentionally minimal. The accepted information architecture is:

1. navigation (right-aligned: Home → Solutions⌄ → About → Partner With Us → EN | TR)
2. hero satellite image with hero copy; location + coordinates directly on the image, bottom-right
3. dark separator beam with section copy
4. clean full-width satellite image; location + coordinates directly on the image, bottom-right
5. repeat the beam → imagery pattern for each solution
6. compact footer (also the `#about` anchor)

Current solution sections:

- Geothermal Exploration
- Mineral Exploration
- Environmental & Land Intelligence

## Locked design decisions

- Full-width, high-resolution Earth-observation imagery is the primary visual system.
- Except for the hero, imagery stays clean: no cards, labels, floating UI, maps controls, pins, grids, diagrams or text overlays.
- Text that separates imagery belongs on full-width dark horizontal beams.
- Every satellite image shows its real location and coordinates directly on the image, bottom-right, as bare text with no background container. No metadata strip below any image. Sensor/date remain in the manifest only.
- Desktop navigation order is fixed: Home → Solutions (dropdown: Geothermal, Mining, Marine) → About → Partner With Us → EN | TR, right-aligned. Home has a cyan underline; Partner With Us is a plain nav item.
- The homepage is bilingual (EN default, TR) through the client-side dictionary in `script.js`; no flags, no framework.
- No `How it works` section.
- No icon wall.
- No generic SaaS card grid.
- No stock photography.
- Avoid decorative globe/Earth imagery in the logo. The current orbital mark intentionally has no globe in the center.
- Dark, restrained, scientific/EO aesthetic. The satellite imagery supplies most of the color.
- Desktop should feel wide and cinematic; do not compress the imagery into centered content cards.

## Product positioning

OrbGSS is positioned as a broader geospatial intelligence / GIS platform, not as a geothermal-only product. Geothermal is the first pilot/use case. The site may show geothermal, mineral and environmental/land-intelligence directions, but must not present unimplemented capabilities as completed commercial functionality.

## Production imagery (done in ORBWEB-001, 2026-09-09)

- All four scenes are self-hosted OrbGSS natural-color composites generated from USGS Landsat Collection 2 Level-2 surface-reflectance products (public domain). Product identifiers, crop and stretch are pinned per scene in `assets/imagery/sources.json`; `scripts/build_imagery.py` reproduces them.
- Scene metadata (location, sensor, acquisition date, coordinates) was re-verified against the NASA Earth Observatory reference pages and against the Landsat product identifiers.
- The page no longer depends on remote NASA Earth Observatory renderings; a failed image now hides itself instead of loading a remote fallback.
- Resolution note: the composites are native 30 m Landsat surface reflectance. 15 m pan-sharpened Level-1 data for these acquisitions is only available behind USGS EarthExplorer credentials, which were not authorized.

## ORBWEB-001.1 — approved navigation, on-image labels, EN/TR (done 2026-09-09)

- Removed the coordinate strips; each image now carries `LOCATION / COORDINATES` bottom-right with a subtle text-shadow only.
- Rebuilt the navigation: right-aligned Home / Solutions dropdown (Geothermal, Mining, Marine) / About / Partner With Us / EN | TR; accessible disclosure pattern (hover, focus, click, Escape, click-outside, arrow keys); mobile Solutions expands on tap.
- Added client-side EN/TR switching with `localStorage` persistence, `<html lang>`, title and meta updates.
- Marine and About point to safe anchors (`#solutions`, footer `#about`) until real destinations exist. See `docs/PRODUCT_AND_CONTENT_AUTHORITY.md`.
- No change to imagery, provenance, pipeline or claims. Validator PASS, 0 warnings.

## Source control (ORBWEB-002A, 2026-09-10)

Git publication is complete. The canonical repository is https://github.com/baran-orbgss/website, branch `main` (public). The repository was transferred from `bruhnioli/website` with its history preserved; the accepted v0.5.1 website code and all four production imagery assets are published there. ORBWEB-002 steps 2–4 (Git) are done. The Vercel preview (steps 5–7) is still pending. Squarespace DNS and Google Workspace mail DNS records have not been touched.

## Production blockers

1. Confirm `contact@orbgss.com` before public launch.
2. Create the Vercel preview from the GitHub repository and QA desktop/mobile from the hosted URL (needs explicit authorization for the Vercel write).
3. Only after preview approval: connect `orbgss.com` / `www.orbgss.com` through Squarespace DNS.
4. Preserve existing Google Workspace email DNS records; do not alter MX/SPF/DKIM/DMARC when connecting the website.

## Next canonical task

Read and execute only:

`tasks/ORBWEB-002_PREVIEW_DEPLOYMENT.md`

Do not redesign the site while doing that task.
