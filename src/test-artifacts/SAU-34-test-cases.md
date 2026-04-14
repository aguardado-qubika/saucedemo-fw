# SAU-34 — User can sort products on the inventory page

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-34/user-can-sort-products-on-the-inventory-page
**Project:** SauceDemo Test Automation
**Status:** Backlog

---

## User Story

As a logged-in user, I want to sort products so that I can find items more easily.

## Acceptance Criteria

* Given I am on the inventory page
* When I select "Name (A to Z)" from the sort dropdown
* Then products should be displayed in ascending alphabetical order
* Given I select "Name (Z to A)"
* Then products should be displayed in descending alphabetical order
* Given I select "Price (low to high)"
* Then products should be ordered from lowest to highest price
* Given I select "Price (high to low)"
* Then products should be ordered from highest to lowest price

---

## Test Cases

_No test cases found._

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-14_