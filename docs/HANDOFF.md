# Handoff to Claude Code

## What is complete

- static landing page exists and is responsive;
- visual direction is locked at a useful v0.x level;
- `How it works`, icon walls and generic card-based sections have been removed;
- solution sections follow the separator-beam → clean imagery pattern, with location/coordinates rendered directly on each image (bottom-right);
- navigation and bilingual (EN/TR) UI match the approved direction (ORBWEB-001.1);
- logo/mark SVGs are available;
- SEO basics, sitemap, robots, manifest and 404 are present;
- Vercel headers/config are present;
- imagery provenance manifest and rights notes are present;
- a deterministic validator is included.

## What is deliberately incomplete

- `contact@orbgss.com` requires final confirmation;
- no GitHub/Vercel/Squarespace external writes have been performed by this handoff package;
- final browser/device visual QA has not been signed off.

## Completed

- `ORBWEB-001` (2026-09-09): production imagery generated from USGS Landsat Collection 2 Level-2 data, provenance pinned, remote fallback removed, validator green.
- `ORBWEB-001.1` (2026-09-09): approved navigation (right-aligned, Solutions dropdown, EN | TR), on-image location/coordinate labels replacing the metadata strips, client-side EN/TR bilingual UI. Design/product authority docs updated; these decisions are canonical.

## Next Claude session

Execute `tasks/ORBWEB-002_PREVIEW_DEPLOYMENT.md` exactly. External writes (GitHub, Vercel) need explicit user authorization; DNS stays untouched.
