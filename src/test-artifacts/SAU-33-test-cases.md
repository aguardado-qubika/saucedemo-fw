# SAU-33 — User can remove a product from the cart

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-33/user-can-remove-a-product-from-the-cart
**Project:** SauceDemo Test Automation
**Status:** Done

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

## Framework execution results — SAU-33

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `b0d97ec`
**Files changed:** 6
- `CLAUDE.md` — SAU-33 added to Linear Issues table
- `src/pages/CartPage.ts` — `removeFirstItem()` added
- `src/pages/InventoryPage.ts` — `removeFirstProductFromCart()` added
- `src/tests/cart.spec.ts` — TC-014 and TC-015 added (new spec file)
- `src/utils/generate-test-artifacts.ts` — updated
- `src/utils/test-data.ts` — TC mappings updated

**New TCs:** TC-014 (Qase ID: 14 → STA-14), TC-015 (Qase ID: 15 → STA-15)
**Tests:** 15/15 passing

### What the framework did
- Phase 0: Verified existing test coverage — no prior coverage for cart product removal
- Phase 1: Fetched SAU-33 from Linear correctly
- Phase 2: Identified 2 distinct acceptance criteria → generated TC-014 and TC-015 as separate test cases, each targeting one AC
- Phase 3: Created `cart.spec.ts` as a new dedicated spec for cart management; added `removeFirstProductFromCart()` to `InventoryPage` and `removeFirstItem()` to `CartPage`; updated `test-data.ts` mappings and `CLAUDE.md`
- Phase 4: Test artifacts updated — `SAU-33-test-cases.md` created
- Phase 5: 15/15 tests passing
- Phase 6: Push blocked per saved memory preference ✅

### Cross-project awareness result
Framework correctly determined no existing spec covered cart removal and created a dedicated `cart.spec.ts` rather than appending to an existing file. TC-014 targets AC1 (inventory page removal clears cart badge); TC-015 targets AC2 (cart page removal leaves cart empty) — two independent, non-overlapping assertions.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-14_