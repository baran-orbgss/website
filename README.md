# OrbGSS Website

Minimal, static public landing page for **OrbGSS — Orbital Geo-Spatial Solutions**.

This package is prepared specifically so development can continue safely in **Claude Code** without reconstructing the design/product context from chat history.

## Start here

Claude Code should automatically inspect `CLAUDE.md`. The canonical manual bootstrap is:

1. `CLAUDE.md`
2. `STATUS.md`
3. `docs/DESIGN_AUTHORITY.md`
4. `docs/PRODUCT_AND_CONTENT_AUTHORITY.md`
5. `IMAGERY_RIGHTS.md`
6. `assets/imagery/sources.json`
7. task named by `STATUS.md`

For a fresh Claude session, `CLAUDE_SESSION_BOOTSTRAP.txt` contains a copy/paste bootstrap prompt.

## Local validation

```bash
python scripts/validate_site.py
```

The validator passes with zero warnings once the four production images exist; errors are never acceptable.

## Local preview

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Rebuilding production imagery

The four scene images are OrbGSS composites generated from public-domain USGS Landsat Collection 2 Level-2 data. To rebuild them exactly as pinned in `assets/imagery/sources.json`:

```bash
python -m venv .venv
.venv/Scripts/pip install "numpy>=2" rasterio pillow pyproj pystac-client planetary-computer
.venv/Scripts/python scripts/build_imagery.py --record
```

Use an isolated environment: recent rasterio wheels require numpy 2.

## Current next task

`tasks/ORBWEB-002_PREVIEW_DEPLOYMENT.md`

Do not redesign while executing that task.

## Deployment target

- Git source repository
- Vercel hosting
- Squarespace registrar/DNS
- `orbgss.com`

See `docs/DEPLOYMENT_SQUARESPACE_VERCEL.md` before any external deployment/DNS change.
