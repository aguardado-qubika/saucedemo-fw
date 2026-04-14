# SAU-38 — Product sort should default to Z to A but A to Z should also work

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-38/product-sort-should-default-to-z-to-a-but-a-to-z-should-also-work
**Project:** SauceDemo Test Automation
**Status:** Backlog

---

## User Story

The product sort on the inventory page should default to Z to A when the page loads. The current behavior defaults to A to Z. Both sort orders should work when selected manually.

## Acceptance Criteria

* The default sort order on page load should be Z to A.
* When the user selects "Name (A to Z)" from the dropdown, products sort A to Z.
* When the user selects "Name (Z to A)" from the dropdown, products sort Z to A.

---

## Test Cases

## Framework execution results — SAU-38

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch ⚠️)
**Commit:** TBD
**Files changed:** 4
- `CLAUDE.md` — SAU-38 added to Linear Issues table
- `src/tests/inventory.spec.ts` — TC-028, TC-029, TC-030 added in new SAU-38 describe block
- `src/utils/test-data.ts` — TC mappings updated (TC-028 through TC-030 mapped to SAU-38; Qase IDs 28–30 registered)
- `src/utils/generate-test-artifacts.ts` — SAU-38 added to artifact generator

**New TCs:** TC-028 (Qase ID: 28 → STA-28), TC-029 (Qase ID: 29 → STA-29), TC-030 (Qase ID: 30 → STA-30)
**Tests:** 29/30 passing (TC-028 fails — confirms existing bug)

### What the framework did
- Phase 0: Verified clean working directory
- Phase 1: Fetched SAU-38 from Linear correctly
- Phase 2: Identified existing sort coverage (TC-016 A→Z, TC-017 Z→A from SAU-34); determined 3 new TCs needed for SAU-38's specific ACs (default sort + manual A→Z + manual Z→A)
- Phase 3: No POM changes required — `getProductNames()` and `sortBy()` already exist on `InventoryPage`
- Phase 4: Added SAU-38 describe block to `inventory.spec.ts` with TC-028, TC-029, TC-030; updated `test-data.ts` mappings; added SAU-38 to `CLAUDE.md` and artifact generator
- Phase 5: 29/30 tests passing — TC-028 fails as expected, confirming the defect (SauceDemo.com defaults to A to Z, not Z to A)
- Phase 6: Push blocked per saved memory preference ✅

### Cross-project awareness result
Framework correctly identified existing sort coverage (TC-016, TC-017 from SAU-34) before adding new cases. Rather than duplicating TC-016/TC-017, new TCs were created under SAU-38's own describe block to give the ticket independent traceability. TC-028 is the critical new case: it asserts the default sort on page load is Z to A without calling `sortBy()`. The test failure confirms the bug described in the ticket — the current default is A to Z. TC-029 and TC-030 pass, confirming manual sort selection is not broken.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-14 | Automated | ❌ FAILED (TC-028 — default sort bug confirmed) | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-14_
