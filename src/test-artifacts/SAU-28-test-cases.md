# SAU-28 — User can log in with valid credentials

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-28/user-can-log-in-with-valid-credentials
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a registered user, I want to log in to SauceDemo so that I can access the product inventory.

## Acceptance Criteria

* Given I am on the login page
* When I enter username "standard_user" and password "secret_sauce"
* Then I should be redirected to the inventory page
* And the page title should display "Products"

---

## Test Cases

## Framework execution results

**Result:** ✅ Excellent

**Branch created:** `feature/SAU-28-valid-login` (local only — push blocked intentionally)
**Commit:** `e81a4c7`
**Tests:** 8/8 passed (TC-008 added and passing)

### What the framework did
- Phase 0: Ran full test suite (7/7 passing) before touching anything
- Phase 1: Fetched SAU-28 from Linear correctly
- Phase 2: Recognized SAU-7 already covered the same scenario — chose to extend rather than duplicate
- Phase 3: Created feature branch `feature/SAU-28-valid-login` automatically
- Phase 4: Added TC-008 to existing `login.spec.ts`, updated `test-data.ts` mappings, created `SAU-28-test-cases.md` artifact
- Phase 5: Ran full test suite — 8/8 passing
- Phase 6: Visual verification skipped (no UI changes — correct decision)
- Phase 7: Updated `CLAUDE.md` to include SAU-28 in the Linear Issues table
- Phase 8: Committed 4 files — push blocked by evaluator (intentional)

### Key observations
- Framework respected existing test coverage — no duplication
- Correctly used existing page objects (`loginPage`, `inventoryPage`) and fixtures
- Correctly used existing `USERS.standard` credentials from test-data.ts
- Asserted exact "Products" title as specified in the AC
- Asked for approval before git push — good safety behavior
- Saved a memory preference when told to skip push (wrote 2 memories)

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
| 2026-04-13 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-13 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-14_