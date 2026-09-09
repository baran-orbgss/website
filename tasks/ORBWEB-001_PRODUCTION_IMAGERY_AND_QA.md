# ORBWEB-001 — Production imagery and local QA

## Objective

Turn the current local-first imagery prototype into a production-safe local website without changing the approved visual design.

## Scope

1. Read the repository bootstrap authority in `CLAUDE.md`.
2. Verify all four selected scenes and their metadata/provenance.
3. Obtain suitable production imagery derived from clearly reusable source data, preferably direct USGS Landsat Collection 2 full-resolution browse exports or OrbGSS-generated RGB composites from those public-domain products.
4. Store the final images at the exact paths already referenced by HTML:
   - `assets/imagery/crater-lake-2023.jpg`
   - `assets/imagery/yellowstone-2013.jpg`
   - `assets/imagery/chuquicamata-2024.jpg`
   - `assets/imagery/ili-delta-2020.jpg`
5. Update `assets/imagery/sources.json` with exact production-source identifiers/URLs/metadata where available.
6. Update `IMAGERY_RIGHTS.md` so the live asset provenance is explicit.
7. If final assets make remote fallback unnecessary, remove production dependence on the remote fallback while preserving graceful failure behavior.
8. Optimize imagery for web delivery while maintaining the wide high-resolution look.
9. Run `python scripts/validate_site.py`.
10. Preview locally at desktop and mobile widths and verify that the design remains unchanged.

## Explicitly out of scope

- homepage redesign
- adding `How it works`
- adding icons/cards/dashboards
- adding a new JS framework
- changing logo identity
- changing product positioning
- connecting the public domain
- changing Squarespace DNS
- creating/updating Google Workspace records

## Acceptance criteria

- all four local image files exist and are non-trivial valid image assets;
- each scene's displayed location/date/sensor/coordinates match the canonical manifest;
- provenance is sufficient to trace the final production asset back to its source data;
- no unapproved imagery license is introduced;
- site validator passes;
- no broken local paths;
- desktop/mobile preview preserves the accepted image-led layout;
- changed paths and evidence are reported concisely.

## Stop conditions

Stop rather than inventing information if:

- exact source/licensing cannot be established;
- a scene's date/location/sensor is inconsistent across authoritative sources;
- obtaining the required asset needs credentials or paid access not already authorized;
- the task appears to require redesign rather than asset finalization.

## Completion record — 2026-09-09

- Source: USGS Landsat Collection 2 Level-2 surface reflectance (public domain), read anonymously through the Microsoft Planetary Computer STAC mirror; products `LC08_L2SP_045030_20230318_02_T1`, `LC08_L2SP_038029_20130609_02_T1`, `LC09_L2SP_001075_20240104_02_T1`, `LC08_L2SP_152029_20200307_02_T1` + `LC08_L2SP_152028_20200307_02_T1`.
- Pipeline: `scripts/build_imagery.py` (crop in scene UTM, OLI 4/3/2 natural color, documented stretch, progressive JPEG). Parameters and rendered bounds are recorded per scene in `assets/imagery/sources.json`.
- Metadata re-verified against the NASA Earth Observatory reference pages: sensor and acquisition date match for all four scenes.
- Remote fallback removed from `index.html`/`script.js`; failure now hides the image gracefully.
- Validator: PASS, 0 warnings. Local preview QA at desktop and mobile widths performed.
- Not done: 15 m pan-sharpened variants (requires USGS EarthExplorer credentials, not authorized). Composites are native 30 m.
