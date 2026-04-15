# SAU-34 — User can sort products on the inventory page

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-34/user-can-sort-products-on-the-inventory-page
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a logged-in user, I want to sort products so that I can find items more easily.

## Acceptance Criteria

* Given I am on the inventory page
* When I select "Name (A to Z)" from the sort dropdown
* Then products should be displayed in ascending alphabetical order
* Given I select "Name (Z to A)"
* Then products should be displayed in descending alphabetical order
* Given I select "Price (low to high)"
* Then products should be ordered from lowest to highest price
* Given I select "Price (high to low)"
* Then products should be ordered from highest to lowest price

---

## Test Cases

## Framework execution results — SAU-34

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `8d61625`
**Files changed:** 4
- `CLAUDE.md` — SAU-34 added to Linear Issues table
- `src/pages/InventoryPage.ts` — `getProductNames()` added
- `src/tests/inventory.spec.ts` — TC-016 through TC-019 added (new describe block)
- `src/utils/test-data.ts` — TC mappings updated

**New TCs:** TC-016 (Qase ID: 16 → STA-16), TC-017 (Qase ID: 17 → STA-17), TC-018 (Qase ID: 18 → STA-18), TC-019 (Qase ID: 19 → STA-19)
**Tests:** 19/19 passing

### What the framework did
- Phase 0: Verified existing test coverage — TC-008 (SAU-48) covers sort-by-price, but no coverage for the 4 AC sort scenarios in SAU-34
- Phase 1: Fetched SAU-34 from Linear correctly
- Phase 2: Identified 4 distinct acceptance criteria → generated TC-016 through TC-019, each targeting one AC
- Phase 3: Extended `inventory.spec.ts` with a dedicated `test.describe('Inventory Page — SAU-34')` block; added `getProductNames()` to `InventoryPage`; updated `test-data.ts` mappings and `CLAUDE.md`
- Phase 4: Test artifacts updated — `SAU-34-test-cases.md` created
- Phase 5: 19/19 tests passing
- Phase 6: Push blocked per saved memory preference ✅

### Cross-project awareness result
Framework correctly identified TC-008 (SAU-48) already covered sort-by-price and avoided duplication. TC-016 through TC-019 each assert one of the four SAU-34 acceptance criteria independently: name A→Z, name Z→A, price low→high, price high→low. Tests appended to existing `inventory.spec.ts` in a dedicated describe block rather than creating a redundant spec file.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-15_