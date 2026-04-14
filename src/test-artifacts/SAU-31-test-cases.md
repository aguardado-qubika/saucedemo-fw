# SAU-31 — User can add a product to the cart

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-31/user-can-add-a-product-to-the-cart
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a logged-in user, I want to add a product to my cart so that I can purchase it later.

## Acceptance Criteria

* Given I am logged in and on the inventory page
* When I click "Add to cart" on any product
* Then the cart icon should show a badge with count "1"

---

## Test Cases

## Framework execution results — SAU-31

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `54ada4e`
**Files changed:** 4
- `CLAUDE.md` — SAU-31 added to Linear Issues table
- `src/tests/inventory.spec.ts` — TC-012 added
- `src/utils/test-data.ts` — TC mappings updated
- `src/utils/generate-test-artifacts.ts` — updated

**New TC:** TC-012 (Qase ID: 12 → STA-12)
**Tests:** 12/12 passing

### What the framework did
- Phase 0: Verified existing test coverage — TC-006 (SAU-10) already covers adding a product to the cart
- Phase 1: Fetched SAU-31 from Linear correctly
- Phase 2: Recognized SAU-10/TC-006 existing coverage — generated TC-012 as a distinct extension
- Phase 3: Added TC-012 to existing `inventory.spec.ts`, updated `test-data.ts` mappings, updated `CLAUDE.md`
- Phase 4: Test artifacts updated — `SAU-31-test-cases.md` created
- Phase 5: 12/12 tests passing
- Phase 6: Push blocked per saved memory preference ✅

### Cross-project awareness result
Framework did NOT reuse TC-006 (SAU-10 add-to-cart test). Generated TC-012 as a distinct extension — TC-012 focuses solely on the cart badge count assertion (badge = "1"), distinct from TC-006 which also asserts product count on the page.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-13 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-13 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-13 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-14_