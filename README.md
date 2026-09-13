# ZAYVA v0.3 LOCKED

Single-file GitHub Pages build. Upload `index.html` to the root of the ZAYVA repository.

Locked updates in this build:
- Theme set: SIGNATURE, PLUM, ESPRESSO, MIDNIGHT, SAGE.
- One-sided theme bloom/depth is on the **right**, while all UI/text stays normal.
- Tagline: “Planera idag • möjliggör imorgon”.
- Smaller period/month selector.
- Rounded floating bottom dock: Översikt · Budget · ••• MER · Köp · Sparande.
- Köp scrolls to Senaste köp.
- No category icons.
- Quick registration uses visible category buttons and includes notes.
- Purchase notes are visible; every purchase has Edit/Delete.
- Savings deduct from available income alongside fixed costs and purchases.
- Budget progress appears only under Overview, compact and without duplicate Remaining row.
- Save in MER persists settings, period income, fixed costs, categories and notes.
- Mobile input fields are 16px+ to prevent iPhone/Safari focus zoom.
- Browser-default blue text/link styling is overridden by the active ZAYVA theme.
- Period isolation and weekend-adjusted income-day cycle preserved.

Data is stored locally in the browser via `localStorage`. Existing v0.2 local data is migrated on first v0.3 load.
