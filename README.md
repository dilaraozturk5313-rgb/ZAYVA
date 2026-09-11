## ZAYVA v0.1.1
Deployment refresh for GitHub Pages.

# ZAYVA v0.1

A functional front-end prototype of ZAYVA's locked v0.1 scope.

## Included
- Short onboarding: language, currency, theme, budget cycle, regular income
- Home with dynamic widget library
- Default Home metrics: Income, Remaining, Spent, Saved
- Budget category progress bars
- Recent purchases widget
- Savings goals widget
- Add purchase flow; Home + Activity + category spend update instantly
- Activity history
- Plan: budget-cycle switch, dynamic categories, fixed costs
- Goals: multiple savings goals + month-by-month savings log
- More: Notes, 5 curated themes, language and currency settings
- Local persistence via localStorage

## Architecture principles
- No duplicated apps per theme: design tokens only
- Localization strings separated from UI
- Currency is independent of language
- Categories, goals, fixed costs and Home widgets are data-driven
- Budget-cycle logic is centralized
- v0.1 intentionally excludes real bank sync, OCR receipt scanning and live investment feeds

## Run
Because the app uses ES modules, serve the folder over HTTP:

```bash
cd zayva-v0.1
python3 -m http.server 8080
```
Then open http://localhost:8080.

## Prototype note
The app uses localStorage so changes persist in the browser. Use More > Reset demo data to restore defaults.
