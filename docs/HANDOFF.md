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
- Git publication is complete: canonical repository https://github.com/baran-orbgss/website, branch `main`; the Vercel preview is still pending; Squarespace DNS and Google Workspace mail DNS have not been touched;
- final browser/device visual QA has not been signed off.

## Completed

- `ORBWEB-001` (2026-09-09): production imagery generated from USGS Landsat Collection 2 Level-2 data, provenance pinned, remote fallback removed, validator green.
- `ORBWEB-002A` (2026-09-10): GitHub publication of the accepted v0.5.1 state to `baran-orbgss/website` (`main`), history preserved. Vercel not started.
- `ORBWEB-001.1` (2026-09-09): approved navigation (right-aligned, Solutions dropdown, EN | TR), on-image location/coordinate labels replacing the metadata strips, client-side EN/TR bilingual UI. Design/product authority docs updated; these decisions are canonical.

- `WEB-001` (2026-09-15, branch `feat/web-001-vnext-foundation`, REVIEW_READY): vNext authority published; homepage rebuilt as the evidence-to-intelligence gallery (Hero → 01–06 story sections → Pilot ledger → Company/Trust → Contact); navigation Platform / Solutions / Pilot / Company / Contact / EN | TR; static poster hero; EN/TR parity; validator extended. Temporary story visuals are marked `temporary-gallery`; WEB-002 owns the real product-proof imagery.

## Next Claude session

Read `docs/WEB_VNEXT_AUTHORITY.md`. Review/merge WEB-001 first; then WEB-002 on a new feature branch. External writes (Vercel) need explicit user authorization; DNS stays untouched until WEB-006.
