# Deployment plan — Git → Vercel → Squarespace domain

## Target topology

```text
Git repository
      ↓
Vercel deployment
      ↓
preview URL for QA
      ↓ approved
orbgss.com / www.orbgss.com
      ↑
Squarespace DNS
```

Squarespace remains the registrar/DNS host. There is no reason to transfer the domain merely to host the website elsewhere.

## Guardrail: email DNS

The domain is also used with Google Workspace. Website deployment must not break mail.

When Vercel provides the required domain records:

- add/update only the records required to route the website;
- do **not** remove or replace Google Workspace MX records;
- do **not** remove SPF, DKIM or DMARC records;
- inspect for conflicting root (`@`) / `www` A, AAAA, ALIAS/ANAME or CNAME records before changing anything;
- capture the pre-change DNS state before making production edits.

## Recommended deployment sequence

1. Put this repository under Git version control.
2. Create a Vercel project from the repository.
3. Deploy to the generated Vercel preview/production URL without attaching the public domain yet.
4. QA desktop and mobile.
5. Populate all local production imagery and eliminate unintended network fallback behavior.
6. Confirm CTA email and final logo/copy.
7. Add `orbgss.com` and `www.orbgss.com` in Vercel.
8. Use the **exact DNS values shown by Vercel at that time** rather than hard-coding old values into documentation.
9. Apply only those website DNS changes in Squarespace.
10. Verify HTTPS, apex/`www` redirect behavior, mail delivery and the final site.

## Rollback principle

Before DNS modification, record the previous web-related DNS records. If the public site fails after the change, restore those web records without touching mail-related records.
