# ORBWEB-002 — Git/Vercel preview deployment

## Prerequisite

`ORBWEB-001` is complete and green.

## Objective

Create a reviewable hosted preview while keeping the public Squarespace domain untouched until the user approves the preview.

## Scope

1. Run `python scripts/validate_site.py`.
2. Put the site under Git version control if not already in a repository.
3. Commit the approved local site state.
4. With explicit authorization for external writes, create/use the intended GitHub repository and Vercel project.
5. Deploy a Vercel preview/temporary URL.
6. QA desktop and mobile from the deployed URL.
7. Report the preview URL and any deployment warnings.

## Out of scope until a separate explicit approval

- editing Squarespace DNS;
- attaching `orbgss.com` or `www.orbgss.com`;
- deleting/replacing existing DNS records;
- modifying Google Workspace mail records.

## Acceptance criteria

- validator green;
- hosted preview loads over HTTPS;
- all four production images are served from the deployment, not dependent on prototype NASA fallbacks;
- mobile navigation works;
- canonical UI structure matches `docs/DESIGN_AUTHORITY.md`;
- user can review the site before public-domain cutover.
