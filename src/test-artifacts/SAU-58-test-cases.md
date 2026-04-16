# SAU-58 — Performance glitch user — checkout completes despite slow load

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-58/performance-glitch-user-checkout-completes-despite-slow-load
**Project:** SauceDemo Test Automation
**Status:** Backlog

---

## User Story

## User Story

As a performance_glitch_user, I want the full checkout flow to complete successfully despite slow page loads, so that I can confirm my order even under degraded performance conditions.

## Background

TC-034 (SAU-39) already validates that `performance_glitch_user` can log in with a delayed response using an extended timeout (`test.setTimeout(60000)`). No test currently verifies that this user can complete the checkout flow end-to-end under the same slow-load conditions.

The `performance_glitch_user` credential (`performance_glitch_user` / `secret_sauce`) is already defined in `test-data.ts`. The checkout flow (add to cart → info → overview → confirmation) is established in `checkout.spec.ts`.

---

## Acceptance Criteria

**TC-045 — performance_glitch_user completes checkout despite slow load**

* Given I am logged in as `performance_glitch_user`
* When I add a product to the cart
* And I navigate to checkout and fill in First Name, Last Name, and Postal Code with valid values
* And I click Continue, then Finish on the overview page
* Then the order confirmation page displays "Thank you for your order!"
* And the test completes within the extended timeout

---

## Implementation Notes

### Timeout handling

Reuse the same extended timeout pattern established in TC-034:

```typescript
test.setTimeout(60000);
```

### Files to modify

| File | Change |
| -- | -- |
| `src/tests/checkout.spec.ts` | Add `test.describe('Checkout — performance_glitch_user — SAU-58')` block with TC-045 |
| `src/utils/test-data.ts` | Map TC-045 → SAU-58 |
| `CLAUDE.md` | Add SAU-58 to Linear Issues table |

### No new helpers required

All fixtures (`loginPage`, `inventoryPage`, `checkoutPage`) and helpers (`loginAs`, `addFirstProductToCart`, `fillCheckoutInfo`, `finishCheckout`) already exist.

---

## INVEST Validation

| Criterion | Status | Notes |
| -- | -- | -- |
| Independent | ✅ | No blocking dependencies; all fixtures and credentials exist |
| Negotiable | ✅ | Can be added to existing checkout describe block or a new one |
| Valuable | ✅ | Confirms the framework handles slow users through the full purchase flow |
| Estimable | ✅ | \~0.5 day: 1 TC, no new helpers |
| Small | ✅ | Single test case |
| Testable | ✅ | "Thank you for your order!" assertion is deterministic |


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