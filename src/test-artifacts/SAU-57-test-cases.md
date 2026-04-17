# SAU-57 — Cart badge count updates correctly when multiple items are added

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-57/cart-badge-count-updates-correctly-when-multiple-items-are-added
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

## User Story

As a logged-in shopper, I want the cart badge to reflect the exact number of items in my cart so that I always know how many products I have selected.

## Background

Existing coverage (TC-014, TC-040) only validates single-item add/remove scenarios. No test currently verifies that the badge increments correctly when two or more distinct products are added.

The current `addFirstProductToCart()` helper is hardcoded to `sauce-labs-backpack` — a generic `addNthProductToCart(n: number)` helper is needed to enable multi-item scenarios.

---

## Acceptance Criteria

**TC-042 — Badge increments to 2 when two products are added**

* Given I am logged in and on the inventory page
* When I add the first product to the cart
* And I add a second distinct product to the cart
* Then the cart badge displays `2`

**TC-043 — Badge increments to 3 when three products are added**

* Given I am logged in and on the inventory page
* When I add three distinct products to the cart
* Then the cart badge displays `3`

**TC-044 — Badge decrements correctly when one item is removed from a multi-item cart**

* Given I am logged in and have 2 items in my cart
* When I remove one product from the inventory page
* Then the cart badge displays `1`

---

## Implementation Notes

### New helper required

Add `addNthProductToCart(index: number)` to `InventoryPage`:

```typescript
async addNthProductToCart(index: number): Promise<void> {
  await this.page
    .locator('[data-test^="add-to-cart-"]')
    .nth(index)
    .click();
  await this.takeScreenshot(`05-product-${index}-added-to-cart`);
}
```

### Files to modify / create

| File | Change |
| -- | -- |
| `src/pages/InventoryPage.ts` | Add `addNthProductToCart(index)` helper |
| `src/tests/cart.spec.ts` | Add `test.describe('Cart badge — SAU-XX')` block with TC-042–TC-044 |
| `src/utils/test-data.ts` | Map TC-042, TC-043, TC-044 → new issue ID |

### INVEST Validation

| Criterion | Status | Notes |
| -- | -- | -- |
| Independent | ✅ | No blocking dependencies; InventoryPage already exists |
| Negotiable | ✅ | Helper implementation is flexible |
| Valuable | ✅ | Badge count is a critical e-commerce UI signal |
| Estimable | ✅ | \~1 day: 1 helper method + 3 test cases |
| Small | ✅ | Scoped to 3 TCs and 1 new helper |
| Testable | ✅ | Badge text assertions are deterministic |


---

## Test Cases

## Framework execution results — SAU-57

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `d198a20`
**Files changed:** 5
- `CLAUDE.md` — SAU-57 added to Linear Issues table
- `src/pages/InventoryPage.ts` — `addNthProductToCart(index)` helper added
- `src/tests/cart.spec.ts` — TC-042–TC-044 added to Cart badge describe block
- `src/utils/test-data.ts` — TC-042–TC-044 mapped to SAU-57
- `src/utils/sync-qase-cases.ts` — SAU-57 added to SUITE_MAP

**New TCs:** TC-042 (Qase ID: 42 → STA-42), TC-043 (Qase ID: 43 → STA-43), TC-044 (Qase ID: 44 → STA-44)
**Tests:** 44/44 passing (1 known bug xfailed)

### What the framework did
- Phase 0: Verified existing coverage — TC-014 and TC-040 only covered single-item add/remove; no multi-item badge assertions existed
- Phase 1: Fetched SAU-57 from Linear; identified 3 distinct acceptance criteria → generated TC-042–TC-044
- Phase 2: Identified that `addFirstProductToCart()` was hardcoded to `sauce-labs-backpack` — added `addNthProductToCart(index)` to `InventoryPage` to enable flexible multi-product selection
- Phase 3: Added TC-042–TC-044 to the existing `cart.spec.ts` under a new `Cart badge — SAU-57` describe block
- Phase 4: Updated `test-data.ts` mappings and `sync-qase-cases.ts` SUITE_MAP; regenerated test artifacts
- Phase 5: 44/44 tests passing (1 known bug xfailed)

### Cross-project awareness result
Framework correctly appended to the existing `cart.spec.ts` rather than creating a new file, and identified the need for a generalized helper before writing any test cases. The `addNthProductToCart` helper is reusable across future multi-item scenarios.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Implementation Complete

Added multi-item cart badge coverage with 3 new test cases (TC-042–TC-044).

### What was done

- Added `addNthProductToCart(index: number)` helper to `InventoryPage` — replaces the hardcoded `sauce-labs-backpack` approach and enables selecting any product by DOM index
- Added a `Cart badge — SAU-57` describe block to `cart.spec.ts` with:
  - **TC-042** — badge increments to 2 when two products are added
  - **TC-043** — badge increments to 3 when three products are added
  - **TC-044** — badge decrements to 1 when one item is removed from a multi-item cart
- Mapped TC-042, TC-043, TC-044 to SAU-57 in `test-data.ts`
- Registered SAU-57 in `SUITE_MAP` in `sync-qase-cases.ts`

### Result

All 3 test cases passed on 2026-04-16 (Automated / Playwright).

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-17 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-17_