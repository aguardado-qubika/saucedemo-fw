# SAU-59 — problem_user — product images are broken or mismatched

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-59/problem-user-product-images-are-broken-or-mismatched
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

## Bug Summary

On SauceDemo, `problem_user` encounters intentionally broken image rendering: all product images on the inventory page display the same asset (the backpack image regardless of product), and the product detail page image does not match the selected product. No tests currently document this defect. This ticket adds coverage using the established `test.fail()` pattern (consistent with TC-028 / [SAU-38](https://linear.app/saucedemo-qa/issue/SAU-38/product-sort-should-default-to-z-to-a-but-a-to-z-should-also-work)).

---

## Background

`problem_user` credentials (`problem_user` / `secret_sauce`) are already defined in `test-data.ts`. The `loginWith()` method on `LoginPage` accepts arbitrary username/password and is the correct login path for non-standard users. `InventoryPage` and `ProductDetailPage` POMs exist but neither exposes a helper to retrieve inventory image `src` values — one new method is required.

---

## Acceptance Criteria

**TC-046 — problem_user inventory page shows mismatched product images**

* Given I am logged in as `problem_user`
* When I view the inventory page
* Then each product image should have a unique `src` value
* Annotated with `test.fail()` — known platform bug: all images share the same `src`

**TC-047 — problem_user product detail page shows mismatched image**

* Given I am logged in as `problem_user`
* When I navigate to the first product's detail page
* Then the product image `src` should not match the default broken image path (`/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg`)
* Annotated with `test.fail()` — known platform bug: image does not match selected product

---

## Implementation Notes

### New helper required

Add `getProductImageSrcs()` to `InventoryPage`:

```typescript
async getProductImageSrcs(): Promise<string[]> {
  const images = await this.page.locator('.inventory_item img').all();
  const srcs: string[] = [];
  for (const img of images) {
    srcs.push(await img.getAttribute('src') ?? '');
  }
  return srcs;
}
```

### Login pattern

Use `loginPage` + `inventoryPage` fixtures directly — do not use `loggedInPage` (hardcoded to `standard_user`):

```typescript
await loginPage.loginWith(USERS.problem.username, USERS.problem.password);
```

### test.fail() annotation

Both TCs document known platform defects, consistent with TC-028 ([SAU-38](https://linear.app/saucedemo-qa/issue/SAU-38/product-sort-should-default-to-z-to-a-but-a-to-z-should-also-work)). The assertion states what *should* be true; `test.fail()` marks it as an expected failure.

### Files to modify

| File | Change |
| -- | -- |
| `src/pages/InventoryPage.ts` | Add `getProductImageSrcs()` helper |
| `src/tests/inventory.spec.ts` | Add TC-046 under new describe block |
| `src/tests/product-detail.spec.ts` | Add TC-047 under new describe block |
| `src/utils/test-data.ts` | Map TC-046, TC-047 → this issue; add to `LINEAR_ISSUES` |
| `CLAUDE.md` | Add this issue to Linear Issues table |

---

## INVEST Validation

| Criterion | Status | Notes |
| -- | -- | -- |
| Independent | ✅ | No blocking dependencies; credentials and all POMs exist |
| Negotiable | ✅ | Test location flexible (new spec vs. existing files) |
| Valuable | ✅ | Documents known platform defects consistently with TC-028 pattern |
| Estimable | ✅ | \~0.5 day: 2 TCs, 1 new helper method |
| Small | ✅ | 2 test cases, minimal new code |
| Testable | ✅ | Image `src` attribute comparison is deterministic |


---

## Test Cases

## Framework execution results — SAU-59

| Field | Value |
| -- | -- |
| Run date | 2026-04-17 |
| Qase run | #47 |
| Branch | `feature/SAU-59-problem-user-product-images-broken` |
| Merged into | `agentic-framework-evaluation` |

| TC | Title | Result |
| -- | -- | -- |
| TC-046 | problem_user inventory page shows unique image per product | ⚠️ xfail (known bug confirmed) |
| TC-047 | problem_user inventory image matches product detail image for same product | ⚠️ xfail (known bug confirmed) |

Both TCs annotated with `test.fail()` — expected failures documenting the confirmed image rendering defect. All 47 tests passed (3 total xfail including TC-028/SAU-38).

**Implementation note:** TC-047 was refined during implementation. The original assertion (detail page shows backpack URL) passed unexpectedly — the bug is confined to the inventory grid; the detail page renders correctly. TC-047 was rewritten to expose the cross-view mismatch: inventory image src ≠ detail page image src for the same product (Sauce Labs Bike Light).

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-17 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-05-04_