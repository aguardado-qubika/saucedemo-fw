# SAU-33 — User can remove a product from the cart

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-33/user-can-remove-a-product-from-the-cart
**Project:** SauceDemo Test Automation
**Status:** Backlog

---

## User Story

As a logged-in user, I want to remove a product from my cart so that I can adjust my order before checkout.

## Acceptance Criteria

* Given I am logged in and have 1 product in my cart
* When I click "Remove" on that product from the inventory page
* Then the cart badge should disappear
* Given I am on the cart page with 1 product
* When I click "Remove" on that product
* Then the cart should be empty and show no items

---

## Test Cases

_No test cases found._

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-14_