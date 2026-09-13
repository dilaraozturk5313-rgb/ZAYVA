# ZAYVA v0.3 — locked implementation spec

## Theme names
SIGNATURE · PLUM · ESPRESSO · MIDNIGHT · SAGE

The approved mirrored reference image defines the background/fade **direction only**: the deeper visual bloom sits on the right. Text, navigation, numbers and controls remain normally oriented.

## Mobile
- No Safari auto-zoom when focusing text/number/date/select fields.
- No default iOS blue text/link coloring; all UI follows theme colors.

## Home
- Tagline: `Planera idag • möjliggör imorgon`.
- Period control slightly smaller.
- Overview cards: income, remaining, spent, saved.
- Compact `Använt av budget` progress only under Overview.
- Quick purchase entry always available with amount, date, description, note and visible category buttons.
- Budget has all categories, no category icons.
- Fixed costs consolidated under Budget.
- Savings section and goals.
- Recent purchases section; navigation button `Köp` scrolls here.
- Each purchase shows note plus Edit/Delete.

## Accounting
`available = income - fixed costs - purchase spending - period savings`

## Periods
Income, budgets, purchases and savings are isolated per period. Default category budgets are copied into newly created periods and then remain independent. Fixed-cost templates recur each period.

## MER
Language, currency, theme, income day, selected period income, fixed costs, standard budget/categories, focus, notes. Save must persist all edited values.
