# SAU-30 — Locked out user cannot access the application

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-30/locked-out-user-cannot-access-the-application
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a system, I want to prevent locked out users from logging in.

## Acceptance Criteria

* Given I am on the login page
* When I enter username "locked_out_user" and password "secret_sauce"
* Then I should see the message "Epic sadface: Sorry, this user has been locked out."

---

## Test Cases

## Framework execution results — SAU-30 (updated)

**Result:** ✅ Excellent

**Branch:** `feature/SAU-30-locked-out-user-login` (merged into `agentic-framework-evaluation`)
**Files changed:** 8
**New TC:** TC-011 (Qase ID: 11 → STA-11)
**Tests:** 11/11 passing

### End-to-end lifecycle executed
1. `/implement-ticket SAU-30` — framework created feature branch and implemented
2. Reviewed diff on feature branch
3. Switched to `agentic-framework-evaluation`
4. `git merge feature/SAU-30-locked-out-user-login` — fast-forward, no conflicts
5. Modified test artifacts staged and committed
6. `npm test` — all tests passing
7. SAU-30 marked Done in Linear

### Cross-project awareness result
Framework did NOT reuse TC-005 (SAU-9 locked out test). Generated TC-011 as a distinct extension — same logic as TC-005 plus one additional assertion: `expect(page).toHaveURL('/')` explicitly verifying the user remains on the login page.

This is the same pattern observed in SAU-29 vs TC-002. The framework consistently:
- Recognizes existing coverage
- Generates a new TC that extends it with the differentiating AC
- Uses the "remain on login page" AC as justification for a new TC

### Artifact issue noted
`SAU-30-test-cases.md` shows "No test cases found" under Test Cases section. TC-011 was not linked back to SAU-30 in Linear at artifact generation time. Separate issue — does not affect test execution.

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
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-14 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-17 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-17_