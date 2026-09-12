# ZAYVA v0.2 locked implementation notes

1. Visual language should be closer to Dilara Finance, while all branding/data remain generic ZAYVA.
2. Fixed bottom navigation: Overview, Budget, More, Purchases, Savings. No plus buttons on Home.
3. Overview/Budget/Purchases/Savings are sections on one scrollable page. More opens a separate settings surface.
4. Quick registration is available directly on the main page.
5. Every category is visible; there is no max-six Home limit.
6. Clicking a category opens budget/spent/remaining plus direct purchase registration.
7. Budget shows Used of budget and a large Remaining figure.
8. Fixed costs are managed from More, displayed together at the bottom of Budget, recur each period, and are deducted from period income.
9. Budget cycle is income-day-to-income-day only.
10. Calendar rule: if the selected income day falls on Saturday or Sunday, use the nearest prior weekday (Friday).
11. Example: selected day 25, October 2026 uses the adjusted September income date through the day before the adjusted October income date.
12. Each period stores its own income, purchases, savings, and category budgets.
13. A default/preset category budget is used only as a template when a new period is first created. A period-specific edit never changes existing other periods or the preset.
14. Fixed cost templates recur automatically until edited/deleted.
15. Numeric data starts empty/null. Placeholders are visual only and must never be included in calculations.
16. Income is directly editable for each selected period.
17. On first launch: language -> currency -> theme -> income day -> fixed costs -> exactly 5 starting variable categories.
18. Fixed costs and categories can later be edited, deleted, and expanded.
19. Savings remains period-specific and multiple savings goals are supported.
20. More contains language, currency, theme, budget cycle/income day, fixed costs, default budget/categories, focus controls, notes, and selected-period income.
