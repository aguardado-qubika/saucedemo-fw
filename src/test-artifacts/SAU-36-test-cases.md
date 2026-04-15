# SAU-36 — Fix the cart

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-36/fix-the-cart
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

The cart is broken. Fix it.

## Acceptance Criteria

*(none defined)*

---

## Test Cases

## Framework execution results — SAU-36

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch ⚠️)
**Commit:** `9218e93`
**Files changed:** 4
- `CLAUDE.md` — SAU-36 added to Linear Issues table
- `src/pages/CartPage.ts` — `removeFirstItem()` fixed to use generic `[data-test^="remove-"]` selector; `continueShopping()`, `getFirstItemName()`, and `getFirstItemPrice()` methods added
- `src/tests/cart.spec.ts` — TC-022 and TC-023 added to existing cart spec
- `src/utils/test-data.ts` — TC mappings updated

**New TCs:** TC-022 (Qase ID: 22 → STA-22), TC-023 (Qase ID: 23 → STA-23)
**Tests:** 23/23 passing

### What the framework did
- Phase 0: Verified existing test coverage — prior cart coverage found (TC-014, TC-015 from SAU-33)
- Phase 1: Fetched SAU-36 from Linear correctly
- Phase 2: Identified root bug (hardcoded `remove-sauce-labs-backpack` selector) and 2 missing coverage gaps → generated TC-022 and TC-023
- Phase 3: Fixed `CartPage.removeFirstItem()` to use generic `[data-test^="remove-"]` selector; added `continueShopping()`, `getFirstItemName()`, and `getFirstItemPrice()` methods; added TC-022 and TC-023 to `cart.spec.ts`; updated `test-data.ts` mappings and `CLAUDE.md`
- Phase 4: Test artifacts updated — `SAU-36-test-cases.md` created
- Phase 5: 23/23 tests passing
- Phase 6: Push blocked per saved memory preference ✅

### Cross-project awareness result
Framework correctly identified existing cart coverage (TC-014, TC-015) before adding new cases. The root bug — a hardcoded `remove-sauce-labs-backpack` selector — would have caused TC-015 to fail for any product other than the backpack. TC-022 asserts the cart displays the correct item name and price for the added product. TC-023 asserts the "Continue Shopping" button navigates back to the inventory page. Tests added to the existing `cart.spec.ts` spec file, following the one-domain-per-file convention.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ❌ FAILED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-15_