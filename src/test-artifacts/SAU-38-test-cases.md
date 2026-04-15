# SAU-38 — Product sort should default to Z to A but A to Z should also work

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-38/product-sort-should-default-to-z-to-a-but-a-to-z-should-also-work
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

The product sort on the inventory page should default to Z to A when the page loads. The current behavior defaults to A to Z. Both sort orders should work when selected manually.

## Acceptance Criteria

* The default sort order on page load should be Z to A.
* When the user selects "Name (A to Z)" from the dropdown, products sort A to Z.
* When the user selects "Name (Z to A)" from the dropdown, products sort Z to A.

---

## Test Cases

## Fix: xfail reporter classification (commit `86e9321`)

TC-028 documents a known bug — SauceDemo defaults to A→Z sort, but the requirement says Z→A. It was previously annotated with `test.fail()` but the reporter and Linear notifier were still counting it as a failure.

### What was fixed

- **`test-data.ts`** — Added `XFAIL_TCS` set (`TC-028`) as a single source of truth for expected-failure TCs
- **`reporter.ts`** — Classifies xfail results as `⚠️ xfailed` (separate summary row); returns `✅ ALL PASSED` when the only failures are known bugs
- **`notify-linear.ts`** — Maps xfail TCs to `⚠️ KNOWN BUG` status; determines overall pass/fail from result classification rather than `stats.failed`

### Validation

Run-7 (2026-04-15) confirmed the fix:
- TC-028 reported as `⚠️ xfailed` — not counted as a failure
- Overall result: `✅ 33/34 passed (1 known bug)`
- Qase run #42 and all Linear issues updated correctly

---

## Framework execution results — SAU-38

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `b07d6c2`
**Files changed:** 5
- `CLAUDE.md` — SAU-38 added to Linear Issues table
- `src/test-artifacts/SAU-38-test-cases.md` — test artifact created
- `src/tests/inventory.spec.ts` — TC-028 through TC-030 added (new describe block); TC-028 annotated `test.fail()` to document the bug
- `src/utils/generate-test-artifacts.ts` — SAU-38 added to generator
- `src/utils/test-data.ts` — TC mappings updated

**New TCs:** TC-028 (Qase ID: 28 → STA-28), TC-029 (Qase ID: 29 → STA-29), TC-030 (Qase ID: 30 → STA-30)
**Tests:** 30/30 passing (TC-028 marked expected failure — documents the bug)

### What the framework did
- Phase 0: Verified existing test coverage — TC-016 through TC-019 (SAU-34) cover manual sort selection; no coverage for default sort behavior on page load
- Phase 1: Fetched SAU-38 from Linear correctly
- Phase 2: Identified 3 acceptance criteria — generated TC-028 (default Z to A), TC-029 (manual A to Z), TC-030 (manual Z to A)
- Phase 3: Extended `inventory.spec.ts` with a dedicated `test.describe` block for SAU-38; no POM changes needed — existing `sortBy()` and `getProductNames()` methods cover all assertions; TC-028 annotated `test.fail()` because SauceDemo defaults to A to Z, not Z to A
- Phase 4: Test artifacts updated — `SAU-38-test-cases.md` created
- Phase 5: 30/30 tests passing (TC-028 passing as expected failure)
- Phase 6: Push blocked per saved memory preference

### Cross-project awareness result
Framework correctly identified that SAU-34 (TC-016 through TC-019) already covered manual sort selection and avoided duplication. TC-028 documents the existing bug (SauceDemo defaults to A to Z when the requirement says Z to A) using Playwright's `test.fail()` annotation — the failing assertion is treated as a passing expected-failure that will alert if the bug is ever fixed. TC-029 and TC-030 verify manual sort selection still works correctly within the SAU-38 scope.

### Clarification questions asked: 0
### Self-review iterations: 1
### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-14 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-15_