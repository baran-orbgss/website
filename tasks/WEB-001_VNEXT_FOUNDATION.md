# WEB-001 — vNext information architecture, visual foundation & homepage shell

**Linear:** MER-89
**Authority:** CURRENT — OrbGSS Website vNext Product & Execution Authority v1.2; repository-local summary in `docs/WEB_VNEXT_AUTHORITY.md`.
**Branch:** `feat/web-001-vnext-foundation` (from accepted `origin/main` `b10cd72652e903b06d2cd66fae85418211960722`).
**Mode:** approved implementation start. No work on `main`. No production deploy. No DNS change. No cinematic hero.

## Outcome

Transform the homepage from a sequence of unrelated satellite-image showcases into a cinematic gallery that tells the OrbGSS product story. The gallery visual identity is not removed.

> Gallery is the presentation grammar. Evidence-to-intelligence is the story.

The visitor still experiences dark beam → large cinematic visual → dark beam → large cinematic visual. What changes is what the sequence communicates. Final product-proof imagery is owned by WEB-002; WEB-001 establishes the durable information architecture, layout, copy hierarchy and visual system without fabricating scientific outputs.

## Product positioning

- OrbGSS primary brand; VirgaSoft secondary parent attribution.
- OrbGSS is not geothermal-only.
- Geothermal Exploration: active first application / pilot.
- Mineral Exploration: expansion direction.
- Environmental & Land Intelligence: expansion direction.
- Never imply future verticals are production-ready.
- Never publish unsupported customer counts, enterprise partners, revenue, ROI, exploration accuracy, AI/model-performance claims, false production deployments, or claims that OrbGSS replaces field investigation.

## Design invariant — the gallery must survive

Do not convert the homepage into generic SaaS card grids, icon walls, dense feature tables, fake GIS dashboards, sci-fi HUD interfaces or neon-heavy startup visuals.

Preserve and improve: near-black / deep navy background, soft-white typography, restrained cyan accent, full-width cinematic imagery, dark horizontal separator beams, technical/editorial tone, subtle coordinate/metadata language, wide desktop composition, restrained interaction, EN/TR support. Introduce a secondary monospace treatment for coordinates, evidence labels, metadata and technical descriptors where useful.

## Homepage narrative

```text
HERO
01 — PLATFORM / OBSERVE
02 — TERRAIN
03 — EVIDENCE
04 — STRUCTURE
05 — PRIORITY
06 — GEOTHERMAL / FIRST ACTIVE APPLICATION
TRUST / COMPANY / CONTACT
FOOTER
```

Each principal numbered section keeps: dark technical beam → large full-width visual panel. Editorial geospatial gallery, not a conventional startup landing page.

## Hero (WEB-001 only)

The Earth/satellite animation is out of scope (WEB-005). Build a strong static, poster-led hero that WEB-005 can replace without changing surrounding architecture. Use existing provenance-safe imagery.

- Eyebrow: `EARTH DATA. EVIDENCE. PRIORITY.`
- Headline: `Know where to look next.`
- Supporting: `OrbGSS turns Earth observation and geoscience data into evidence-backed spatial priorities that help teams decide where to investigate next.`
- Primary CTA: `Explore the Platform`
- Secondary conversion (restrained): Partner With Us / Contact.
- Natural professional Turkish equivalents in `I18N`.

## Navigation

Desktop: `Platform` / `Solutions ⌄` / `Pilot` / `Company` / `Contact` / `EN | TR`.

Solutions stays an accessible dropdown listing Geothermal Exploration, Mineral Exploration, Environmental & Land Intelligence. Every visible destination resolves to a real section/anchor. Keep focus states, Escape behaviour and mobile tap expansion.

## Visual content during WEB-001

- Do not fabricate DEM, thermal, alteration, geological or score maps.
- Existing provenance-safe satellite imagery may be reused as temporary atmospheric/gallery material and must not be mislabelled as DEM, alteration, faults or score output.
- Markup/classes make later replacement with real evidence visuals straightforward; internal data attributes identify deferred visual slots.
- Public copy stays truthful. Do not delete existing production imagery or provenance records.

## Section intent

- **01 Platform / Observe** — from an area of interest and Earth observation toward evidence-backed spatial understanding.
- **02 Terrain** — terrain is physical context. Do not call the temporary imagery a DEM.
- **03 Evidence** — domain-relevant signals become spatial evidence. Real evidence raster arrives in WEB-002.
- **04 Structure** — geological/structural context contributes to interpretation. No fabricated faults.
- **05 Priority** — evidence is integrated into spatial prioritization. No fabricated score map. Real output arrives in WEB-002.
- **06 Geothermal** — clearly the active first application; mineral and environmental remain subordinate in maturity.
- **Trust** — traceable provenance, explicit data gaps, evidence-based outputs, decision support, field investigation remains necessary.

## Technical direction

Static HTML/CSS/vanilla JS stays. No React/Next/Vue/Svelte or other framework. Prefer improving existing files; small reusable static primitives only where justified. Preserve semantic HTML, responsive behaviour, local imagery, metadata, accessibility, provenance discipline, graceful image failure and language persistence.

## Out of scope

Cinematic hero, WebM/MP4 hero, new scientific analysis, DEM/alteration/fault/score generation, final geothermal evidence publication, DNS/Squarespace changes, Vercel production cutover, analytics, authentication, CRM, backend, billing, new JS framework, production deployment.

## Acceptance

1. Homepage still unmistakably feels like the existing OrbGSS cinematic gallery.
2. The gallery reads as a coherent product story.
3. Structural narrative: Hero → Platform/Observe → Terrain → Evidence → Structure → Priority → Geothermal → Trust/Contact.
4. No generic SaaS card-wall aesthetic.
5. The static hero communicates OrbGSS's value without motion.
6. Navigation: Platform / Solutions / Pilot / Company / Contact / EN|TR with real accessible destinations.
7. Geothermal is clearly the first active application.
8. Mineral and Environmental/Land remain expansion directions.
9. No temporary atmospheric image is presented as a scientific evidence output.
10. EN/TR parity for every new visible string.
11. Desktop/tablet/mobile layouts remain coherent.
12. Keyboard/focus/navigation behaviour remains usable.
13. Existing image provenance is preserved.
14. No unsupported science/product/commercial claim is added.
15. Site validation passes, updated only where necessary for the accepted structure.

## Verification

Run `python scripts/validate_site.py` (on this workstation: `py -3.14 scripts/validate_site.py`). Inspect wide desktop, laptop/tablet and narrow mobile. Confirm: no horizontal overflow, no broken anchor, no broken imagery, mobile menu works, Solutions disclosure works, language switch works, new copy switches EN/TR, focus states visible.

## Stop conditions

Stop and report rather than invent if: origin/main diverges in conflicting authority/design surfaces; a new framework/dependency becomes necessary; a layout requires inventing scientific data; canonical positioning conflicts materially; a new public scientific claim would be required; Git publication/push fails; destructive history changes would be required. Routine CSS/HTML/JS bugs, responsive defects, validator fixes and small conformant refactors are implementer-owned.

## Publication

1. Commit this file and `docs/WEB_VNEXT_AUTHORITY.md` alone first, push, verify remote.
2. Implement on the same branch in bounded commits.
3. Do not merge to `main`. Do not begin WEB-002.
4. Terminal state: `REVIEW_READY`.

## Completion record

_To be filled at REVIEW_READY._
