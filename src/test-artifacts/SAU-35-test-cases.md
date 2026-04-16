# SAU-35 — User can log out of the application

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-35/user-can-log-out-of-the-application
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a logged-in user, I want to log out so that I can end my session securely.

## Acceptance Criteria

* Given I am logged in and on the inventory page
* When I open the burger menu and click "Logout"
* Then I should be redirected to the login page
* And I should not be able to navigate back to the inventory page without logging in again

---

## Test Cases

## Framework execution results — SAU-35

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `43b69f7`
**Files changed:** 4
- `CLAUDE.md` — SAU-35 added to Linear Issues table
- `src/pages/InventoryPage.ts` — `logout()` method added (burger menu + logout link locators)
- `src/tests/logout.spec.ts` — TC-020 and TC-021 added (new spec file)
- `src/utils/test-data.ts` — TC mappings updated

**New TCs:** TC-020 (Qase ID: 20 → STA-20), TC-021 (Qase ID: 21 → STA-21)
**Tests:** 21/21 passing

### What the framework did
- Phase 0: Verified existing test coverage — no prior logout coverage found
- Phase 1: Fetched SAU-35 from Linear correctly
- Phase 2: Identified 2 distinct acceptance criteria → generated TC-020 and TC-021, each targeting one AC
- Phase 3: Created `logout.spec.ts` as a new spec file with a dedicated `test.describe('Logout — SAU-35')` block; added `logout()` method to `InventoryPage` with burger menu and logout link locators; updated `test-data.ts` mappings and `CLAUDE.md`
- Phase 4: Test artifacts updated — `SAU-35-test-cases.md` created
- Phase 5: 21/21 tests passing
- Phase 6: Push blocked per saved memory preference ✅

### Cross-project awareness result
Framework correctly identified no prior logout coverage existed. TC-020 asserts the user is redirected to the login page after clicking logout. TC-021 asserts the user cannot navigate back to the inventory page after logging out. Tests placed in a new dedicated `logout.spec.ts` spec file, following the one-domain-per-file convention established by the framework.

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
| 2026-04-14 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-16_