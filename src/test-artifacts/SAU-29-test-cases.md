# SAU-29 — User cannot log in with invalid credentials

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-29/user-cannot-log-in-with-invalid-credentials
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a registered user, I want to see a clear error message when I enter wrong credentials.

## Acceptance Criteria

* Given I am on the login page
* When I enter an incorrect username or password
* Then I should see an error message
* And I should remain on the login page

---

## Test Cases

## Framework execution results — SAU-29 (retry)

**Result:** ✅ Excellent

**Branch:** `feature/SAU-29-invalid-credentials-login` (local only)
**Files changed:** 3 (login.spec.ts, test-data.ts, CLAUDE.md)
**Tests:** 9/9 passed
**New TC:** TC-009 (Qase ID: 9 → STA-9)

### What the framework did
- Phase 0: Verified git clean, established baseline
- Phase 1: Fetched SAU-29 from Linear
- Phase 2: Recognized SAU-8/TC-002 existing coverage — generated TC-009 as a distinct extension with explicit URL assertion
- Phase 3: Created feature branch `feature/SAU-29-invalid-credentials-login`
- Phase 4: Added TC-009 to login.spec.ts, updated test-data.ts mappings, updated CLAUDE.md
- Phase 5: 9/9 tests passing
- Phase 8: Skipped push/PR per saved memory preference ✅
- Post: /tc-sync-qase confirmed TC-009/STA-9 created in Qase ✅

### Key observations
- Framework remembered no-push preference without being reminded — memory persistence confirmed across sessions
- Generated only TC-009 (not TC-009 + TC-010 as in first attempt) — leaner and more focused
- Correctly distinguished TC-009 from TC-002: added URL assertion mapping directly to the AC "remain on login page"
- Qase sync working correctly after fix — visual verification confirmed STA-9 present

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
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-14_