# SAU-40 — Add checkout form validation error coverage to the checkout step helper

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-40/add-checkout-form-validation-error-coverage-to-the-checkout-step
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a QA engineer, I want the checkout step helper to handle form validation errors gracefully so that tests can cover incomplete form submission scenarios.

## Acceptance Criteria

* Given the user is on the checkout information page
* When they click Continue without filling in First Name
* Then an error message "Error: First Name is required" is displayed
* When they click Continue without filling in Last Name
* Then an error message "Error: Last Name is required" is displayed
* When they click Continue without filling in Zip/Postal Code
* Then an error message "Error: Postal Code is required" is displayed
* All existing checkout tests continue to pass without modification.

---

## Test Cases

## Framework execution results — SAU-40

**Result:** ✅ Excellent

**Branch:** `feature/SAU-40-checkout-validation-helper` (merged into `agentic-framework-evaluation`)
**Commit:** `04e4e43`
**Files changed:** 6
- `CLAUDE.md` — SAU-40 added to Linear Issues table
- `src/pages/CheckoutPage.ts` — `submitCheckoutForm(firstName, lastName, zipCode)` helper added
- `src/tests/checkout.spec.ts` — TC-035 through TC-037 added (new describe block)
- `src/utils/generate-test-artifacts.ts` — SAU-40 added to generator
- `src/utils/sync-qase-cases.ts` — SAU-40 added (suite 3: Checkout)
- `src/utils/test-data.ts` — TC mappings updated

**New TCs:** TC-035 (Qase ID: 35 → STA-35), TC-036 (Qase ID: 36 → STA-36), TC-037 (Qase ID: 37 → STA-37)
**Tests:** 36/37 passing (TC-028 carries pre-existing xfail from SAU-38 — unrelated to SAU-40)

### What the framework did
- Phase 0: Verified existing test coverage — TC-024 through TC-027 (SAU-37) cover form validation via inline fill steps; no reusable helper existed for the fill+continue action
- Phase 1: Fetched SAU-40 from Linear correctly
- Phase 2: Identified 3 acceptance criteria — generated TC-035 (missing first name), TC-036 (missing last name), TC-037 (missing postal code); planned `submitCheckoutForm()` as a new POM helper
- Phase 3: Created feature branch `feature/SAU-40-checkout-validation-helper`
- Phase 4: Added `submitCheckoutForm(firstName, lastName, zipCode)` to `CheckoutPage.ts` — combines fill + continue in one step with a neutral screenshot label; extended `checkout.spec.ts` with a dedicated `test.describe` block for SAU-40; updated `test-data.ts`, `generate-test-artifacts.ts`, `sync-qase-cases.ts`, and `CLAUDE.md`
- Phase 5: 36/37 tests passing (TC-028 xfail is pre-existing and unrelated)
- Phase 6: Push blocked per saved memory preference

### Cross-project awareness result
Framework correctly identified that SAU-37 (TC-024 through TC-027) already covered the validation error messages via inline interactions and avoided duplication. Rather than adding raw fill+continue steps again, it introduced `submitCheckoutForm()` as a reusable POM helper — keeping the new TCs clean and consistent with the existing checkout helper pattern (`proceedToCheckout`, `fillCheckoutForm`, etc.). The screenshot label was also corrected from the misleading `09-order-summary` to `09-checkout-submitted` to accurately reflect validation error scenarios.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

✅ AUTOMATED TEST EXECUTION — PASSED
Date: 2026-04-15
Executed by: Playwright + TypeScript Framework
Environment: https://www.saucedemo.com
Browser: Chromium
Framework: Playwright v1 + TypeScript

RESULTS:
✅ TC-035 — PASSED (2.2s)
✅ TC-036 — PASSED (2.2s)
✅ TC-037 — PASSED (2.2s)

Total: 36/37 passed
Evidence: evidence/2026-04-15/run-10/summary.md

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-16_