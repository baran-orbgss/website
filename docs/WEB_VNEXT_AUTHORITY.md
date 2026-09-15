# OrbGSS website vNext — repository-local authority

**Source of truth:** CURRENT — OrbGSS Website vNext Product & Execution Authority v1.2 (product-owned).
**Tracking:** Linear MER-89 — WEB-001 — vNext information architecture, visual foundation & homepage shell.
**Status:** published with WEB-001 (2026-09-15). Where this document and the older `docs/DESIGN_AUTHORITY.md` / `docs/PRODUCT_AND_CONTENT_AUTHORITY.md` disagree, this document wins for vNext work; the older documents remain valid for everything they cover that is not restated here (imagery rules, palette, on-image labels, logo, claim discipline).

## 1. Brand hierarchy

- **OrbGSS** (Orbital Geo-Spatial Solutions) is the primary public brand.
- **VirgaSoft** is the secondary parent attribution only ("Built by VirgaSoft"). It never leads.

## 2. Positioning

OrbGSS is a geospatial-intelligence platform. It turns Earth observation and geoscience data into evidence-backed spatial priorities that help teams decide where to investigate next.

Application maturity is explicit and must stay visible in copy:

| Application | Public status |
| --- | --- |
| Geothermal Exploration | active first application / pilot |
| Mineral Exploration | expansion direction |
| Environmental & Land Intelligence | expansion direction |

Never imply that expansion directions are production-ready. Never position OrbGSS as geothermal-only.

## 3. Presentation grammar: the gallery

The existing large-image gallery rhythm is a brand asset and survives vNext:

```text
HERO (image-led, overlay copy allowed)
DARK TECHNICAL BEAM → LARGE FULL-WIDTH VISUAL PANEL
DARK TECHNICAL BEAM → LARGE FULL-WIDTH VISUAL PANEL
…
TRUST / COMPANY / CONTACT
FOOTER
```

Canonical principle: **"Gallery is the presentation grammar. Evidence-to-intelligence is the story."**

Preserve: near-black / deep navy ground, soft-white type, restrained cyan accent, full-width cinematic imagery, dark separator beams, technical/editorial tone, coordinate/metadata language, wide desktop composition, restrained interaction. A secondary monospace treatment is allowed for coordinates, evidence labels, metadata and technical descriptors.

Prohibited: SaaS card grids, icon walls, dense feature tables, fake GIS dashboards, sci-fi HUD chrome, neon-heavy startup visuals, `How it works` sections, decorative pins/globes, scroll-jacking.

## 4. Narrative: evidence to intelligence

Homepage story order (WEB-001 onward):

1. Hero
2. 01 — Platform / Observe
3. 02 — Terrain
4. 03 — Evidence
5. 04 — Structure
6. 05 — Priority
7. 06 — Geothermal (first active application)
8. Trust / Company / Contact
9. Footer

Each numbered story section keeps the beam → visual rhythm. The story is what the sequence communicates; the gallery is how it is shown.

## 5. Scientific and public-claim boundaries

- Do not fabricate DEM, thermal, alteration, geological, fault or score outputs. Temporary atmospheric imagery must never be labelled as one of those.
- Real evidence / product-proof visuals are owned by WEB-002. Until then, story panels reuse provenance-safe Landsat composites and are marked as deferred slots in markup (`data-visual-slot`), not in public copy.
- Never publish unsupported customer counts, enterprise partners, revenue, ROI, exploration accuracy, AI/model-performance claims, false production deployments, or claims that OrbGSS replaces field investigation.
- Trust language is restrained and truthful: traceable provenance, explicit data gaps, evidence-based outputs, decision support, field investigation remains necessary.
- Imagery provenance rules in `IMAGERY_RIGHTS.md` and `assets/imagery/sources.json` are unchanged and mandatory.

## 6. Language

EN is the default, TR is the second language, both served from the `I18N` dictionary in `script.js`. A visible string is not done until both languages exist. Turkish is professional, natural Turkish, not literal translation.

## 7. Navigation (vNext)

Desktop, right-aligned, in this order:

`Platform` → `Solutions ⌄` → `Pilot` → `Company` → `Contact` → `|` → `EN | TR`

- Solutions is an accessible disclosure listing Geothermal Exploration, Mineral Exploration, Environmental & Land Intelligence.
- Every visible destination resolves to a real section anchor. No placeholder links to unrelated sections.
- Keyboard/disclosure behaviour (focus states, Escape, arrow keys, mobile tap expansion) is preserved.

This supersedes the `Home → Solutions → About → Partner With Us` order recorded in `docs/DESIGN_AUTHORITY.md` and `CLAUDE.md`.

## 8. Execution rules

- **No feature work on `main`.** All vNext work lands on feature branches and is reviewed before merge.
- Static HTML + CSS + vanilla JavaScript remains the architecture. A framework or dependency change requires Product approval.
- No analytics, auth, CRM, backend, billing or production deployment inside website tasks unless a task says so.
- Each task publishes its contract under `tasks/` before implementation code is written.

## 9. Task sequence

```text
WEB-001 → WEB-002 → WEB-003 → WEB-004 → WEB-005 → WEB-006
```

- **WEB-001** — information architecture, visual foundation, homepage shell (this repository state).
- **WEB-002** — real evidence / product-proof imagery for the story panels.
- **WEB-003, WEB-004** — subsequent vNext tasks as defined by the product authority.
- **WEB-005** — cinematic Earth/satellite hero (motion, WebM/MP4). **Deferred; the WEB-001 hero is a static poster designed to be replaced without touching surrounding architecture.**
- **WEB-006** — production DNS cutover (`orbgss.com` via Squarespace → Vercel). **Deferred; no DNS or production-domain change before then. Google Workspace MX/SPF/DKIM/DMARC are never touched by website work.**
