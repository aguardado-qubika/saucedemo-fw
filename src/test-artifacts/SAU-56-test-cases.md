# SAU-56 — User can view product details

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-56/user-can-view-product-details
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

## User Story

As a logged-in user, I want to view the product detail page so that I can see the full name, description, price, and image of a product before deciding to add it to my cart.

## Acceptance Criteria

**TC-038 — Navigate to product detail page**

* Given I am logged in and on the inventory page
* When I click on a product name or image
* Then I am taken to the product detail page (`/inventory-item.html`)
* And the page URL contains the correct product ID parameter

**TC-039 — Product detail page displays correct information**

* Given I am on the product detail page
* Then the product name is visible and non-empty
* And the product description is visible and non-empty
* And the product price is visible and formatted as a currency value (e.g. `$X.XX`)
* And the product image is visible

**TC-040 — User can add product to cart from detail page**

* Given I am on the product detail page
* When I click the "Add to cart" button
* Then the cart badge displays `1`
* And the "Add to cart" button changes to "Remove"

**TC-041 — User can navigate back to inventory from detail page**

* Given I am on the product detail page
* When I click the "Back to products" button
* Then I am returned to the inventory page (`/inventory.html`)
* And all products are still listed

## Implementation Notes

* New POM: `src/pages/ProductDetailPage.ts`
* New spec: `src/tests/product-detail.spec.ts`
* New TCs: TC-038 – TC-041
* `test-data.ts` mappings required for TC-038–TC-041 → [SAU-56](https://linear.app/saucedemo-qa/issue/SAU-56/user-can-view-product-details)

---

## Test Cases

## Implementation Complete

Added full product detail page coverage with 4 new automated test cases (TC-038–TC-041).

### What was built

- **`src/pages/ProductDetailPage.ts`** — New POM with selectors and actions for the product detail page (name, description, price, image, Add to cart, Remove, Back to products)
- **`src/tests/product-detail.spec.ts`** — New spec covering navigation, content display, add-to-cart, and back navigation
- **`InventoryPage.goToFirstProduct()`** — Helper to click through to the first product detail page
- **`productDetailPage` fixture** — Added to `test-fixtures.ts` for DI into specs
- **`test-data.ts`** — Mapped TC-038–TC-041 to SAU-56

### Test Cases

| TC | Description | Result |
|----|-------------|--------|
| TC-038 | Navigate to product detail page | ✅ PASSED |
| TC-039 | Product detail page displays correct information | ✅ PASSED |
| TC-040 | User can add product to cart from detail page | ✅ PASSED |
| TC-041 | User can navigate back to inventory from detail page | ✅ PASSED |

All 4 tests passed on 2026-04-16.

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-16_