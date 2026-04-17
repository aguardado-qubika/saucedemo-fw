# SAU-58 — Performance glitch user — checkout completes despite slow load

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-58/performance-glitch-user-checkout-completes-despite-slow-load
**Project:** SauceDemo Test Automation
**Status:** Done

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

## Framework execution results — SAU-58

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `b17e71f`
**Files changed:** 4
- `CLAUDE.md` — SAU-58 added to Linear Issues table
- `src/tests/checkout.spec.ts` — TC-045 added under `Checkout — performance_glitch_user — SAU-58` describe block
- `src/utils/test-data.ts` — TC-045 mapped to SAU-58
- `src/utils/sync-qase-cases.ts` — SAU-58 added to SUITE_MAP

**New TCs:** TC-045 (Qase ID: 45 → STA-45)
**Tests:** 45/45 passing (1 known bug xfailed)

### What the framework did
- Phase 0: Verified existing coverage — TC-034 (SAU-39) covers `performance_glitch_user` login with an extended timeout; no test verified the full checkout flow for this user type
- Phase 1: Fetched SAU-58 from Linear; identified 1 acceptance criterion → generated TC-045
- Phase 2: Confirmed all required fixtures (`loginPage`, `inventoryPage`, `checkoutPage`) and helpers (`loginAs`, `addFirstProductToCart`, `fillCheckoutInfo`, `finishCheckout`) already exist — no new helpers required
- Phase 3: Added TC-045 to `checkout.spec.ts` under a new `Checkout — performance_glitch_user — SAU-58` describe block with `test.setTimeout(60000)`
- Phase 4: Updated `test-data.ts` mappings and registered SAU-58 in `sync-qase-cases.ts` SUITE_MAP; regenerated test artifacts
- Phase 5: 45/45 tests passing (1 known bug xfailed)

### Cross-project awareness result
Framework correctly identified that the `performance_glitch_user` credential was already defined in `test-data.ts` and the checkout flow fixtures were fully established, requiring zero new helpers. The extended timeout pattern (`test.setTimeout(60000)`) was reused directly from TC-034 (SAU-39), maintaining consistency with the existing slow-user handling approach.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-17 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-17_