# OrbGSS imagery rights and provenance — v0.5

## Production rule

OrbGSS serves only self-hosted Earth-observation imagery derived from source products whose reuse terms are clear enough for a commercial website. The production source is **USGS Landsat Collection 2 Level-2** surface reflectance.

USGS states that Landsat data are official USGS records in the public domain, permission is not required for use, and there are no restrictions on use or redistribution. USGS requests source acknowledgement.

Reference pages:

- https://www.usgs.gov/faqs/are-landsat-data-cloud-still-considered-be-within-public-domain
- https://www.usgs.gov/faqs/are-there-any-restrictions-use-or-redistribution-landsat-data
- https://www.usgs.gov/landsat-missions/landsat-collection-2-level-2-science-products

Acknowledgement carried in the site footer:

> Landsat data courtesy of the U.S. Geological Survey.

## How the live assets were produced

Every file under `assets/imagery/*.jpg` is an **OrbGSS-generated natural-color composite** (OLI bands 4, 3, 2) built by `scripts/build_imagery.py` from the Landsat Collection 2 Level-2 products listed below. The pipeline:

1. reads the surface-reflectance Cloud-Optimized GeoTIFFs for the pinned product identifiers through the Microsoft Planetary Computer STAC API (`landsat-c2-l2` collection, anonymous read-only mirror of the USGS archive);
2. crops a fixed frame in the scene's native UTM grid at 30 m, mosaicking consecutive rows of the same path/date where a frame crosses a scene boundary;
3. applies the USGS reflectance scaling, a documented per-scene contrast stretch and gamma, mild saturation;
4. encodes a progressive JPEG.

The pixels are USGS products; only the crop, stretch and encoding are OrbGSS work. All parameters and the rendered bounds are recorded in `assets/imagery/sources.json` under each scene's `production` block, so any asset can be regenerated bit-for-bit in intent.

No NASA-rendered pixels, NASA logos or identifiers are served. The NASA Earth Observatory pages listed below are kept only as the references that motivated each scene selection and as an independent confirmation of the acquisition metadata.

## Selected scenes

### Crater Lake — hero
- Location: Crater Lake, Oregon, USA
- Coordinates displayed: 42.9443° N, 122.1353° W
- Acquisition: 18 March 2023
- Sensor: Landsat 8 OLI
- Production source product: `LC08_L2SP_045030_20230318_02_T1` (WRS-2 path 045 row 030, Tier 1)
- Reference page: https://science.nasa.gov/earth/earth-observatory/a-clear-view-of-crater-lake-151161/

### Yellowstone — geothermal
- Location: Yellowstone National Park, USA
- Coordinates displayed: 44.4604° N, 110.8282° W
- Acquisition: 9 June 2013
- Sensor: Landsat 8 OLI
- Production source product: `LC08_L2SP_038029_20130609_02_T1` (path 038 row 029, Tier 1)
- Reference page: https://science.nasa.gov/earth/earth-observatory/yellowstone-national-park-87881/
- Note: the NASA reference rendering also used ASTER GDEM terrain. The production composite is a plain orthographic Landsat view with no ASTER data.

### Chuquicamata — mineral
- Location: Chuquicamata, Antofagasta, Chile
- Coordinates displayed: 22.3150° S, 68.9010° W
- Acquisition: 4 January 2024
- Sensor: Landsat 9 OLI-2
- Production source product: `LC09_L2SP_001075_20240104_02_T1` (path 001 row 075, Tier 1)
- Reference page: https://science.nasa.gov/earth/earth-observatory/copper-mining-at-chuquicamata-152368/

### Ili River Delta / Lake Balkhash — environmental
- Location: Ili River Delta & Lake Balkhash, Kazakhstan
- Coordinates displayed: 45.0600° N, 74.5200° E
- Acquisition: 7 March 2020
- Sensor: Landsat 8 OLI
- Production source products: `LC08_L2SP_152029_20200307_02_T1` and `LC08_L2SP_152028_20200307_02_T1` (path 152 rows 029 + 028, same overpass, mosaicked)
- Reference page: https://earthobservatory.nasa.gov/images/146552/a-delta-oasis-in-southeastern-kazakhstan

## Resolution note

The composites are native 30 m Landsat surface reflectance. 15 m pan-sharpened Level-1 products for these acquisitions are only obtainable through USGS EarthExplorer / Machine-to-Machine access, which requires an account that was not authorized for this work. If sharper hero imagery is wanted later, that is the path; the provenance model above stays the same.

## Deployment gate

Before `orbgss.com` is made public:

1. Every file listed in `assets/imagery/sources.json` under `local_file` exists and passes `python scripts/validate_site.py` (done in v0.5).
2. Each image has been visually checked against its scene metadata (done in v0.5).
3. No NASA logo/identifier is embedded in any image (none: assets are generated from raw Landsat bands).
4. Keep the USGS acknowledgement in the footer.
5. If a non-USGS source is introduced later, record its exact license and attribution requirement here before it enters production.
