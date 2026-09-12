# ZAYVA v0.2 NEXT

This is a single-file GitHub Pages build. Upload `index.html` to the repository root.

Core changes in this build:
- DF-inspired ZAYVA layout and typography, without personal/Dilara-specific data.
- Bottom dock: Overview / Budget / More / Purchases / Savings.
- More is the only button that opens a separate settings sheet.
- Quick purchase registration on the main page.
- Category click opens category detail + purchase registration.
- No six-category cap; all categories render on the page.
- Fixed costs live in More, render at bottom of Budget, and are deducted from period income.
- Income-day-to-income-day cycle only.
- Weekend income days move backward to Friday using the real calendar.
- Period-specific income, transactions, savings and category budgets.
- Default budget templates seed new periods; editing one period does not alter past/future periods.
- Fixed cost templates recur automatically.
- Empty numeric fields use placeholders/null, never fake zero values.
- Onboarding: language, currency, theme, income day, fixed costs, exactly five starting categories.
- Swedish/English and independent currency setting.
- Five themes.

Version: 0.2.0
