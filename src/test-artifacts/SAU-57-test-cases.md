# SAU-57 — Cart badge count updates correctly when multiple items are added

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-57/cart-badge-count-updates-correctly-when-multiple-items-are-added
**Project:** SauceDemo Test Automation
**Status:** Backlog

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

_No test cases found._

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-16_