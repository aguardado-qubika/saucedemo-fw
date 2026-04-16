# SAU-56 — User can view product details

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-56/user-can-view-product-details
**Project:** SauceDemo Test Automation
**Status:** Backlog

---

## User Story

As a logged-in user, I want to view the product detail page so that I can see the full name, description, price, and image of a product before deciding to add it to my cart.

## Acceptance Criteria

### TC-038 — Navigate to product detail page
* Given I am logged in and on the inventory page
* When I click on a product name or image
* Then I am taken to the product detail page (`/inventory-item.html`)
* And the page URL contains the correct product ID parameter

### TC-039 — Product detail page displays correct information
* Given I am on the product detail page
* Then the product name is visible and non-empty
* And the product description is visible and non-empty
* And the product price is visible and formatted as a currency value (e.g. `$X.XX`)
* And the product image is visible

### TC-040 — User can add product to cart from detail page
* Given I am on the product detail page
* When I click the "Add to cart" button
* Then the cart badge displays `1`
* And the "Add to cart" button changes to "Remove"

### TC-041 — User can navigate back to inventory from detail page
* Given I am on the product detail page
* When I click the "Back to products" button
* Then I am returned to the inventory page (`/inventory.html`)
* And all products are still listed

---

## Implementation Notes

**New file required:** `src/pages/ProductDetailPage.ts`
- Extend `BasePage`
- Selectors: `[data-test="inventory-item-name"]`, `[data-test="inventory-item-desc"]`, `.inventory_details_price`, `[data-test="add-to-cart"]`, `[data-test="back-to-products"]`
- Screenshot calls follow `NN-description` naming convention

**New spec file:** `src/tests/product-detail.spec.ts`
- Use `loggedInPage` fixture for pre-authenticated state
- Navigate to detail page by clicking first product name from `InventoryPage`
- Group under `test.describe('Product Detail Page — SAU-56', ...)`

**test-data.ts updates required:**
- Add `TC-038` through `TC-041` to `TC_TO_LINEAR` mapping (`SAU-56`)
- Add `SAU-56` entry to `LINEAR_ISSUES` array
- Add Qase ID mappings `38`–`41` to `QASE_TO_TC`

---

## Test Cases

_No test cases executed yet._

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-16_
