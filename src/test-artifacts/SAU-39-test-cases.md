# SAU-39 — Refactor login helper to support all saucedemo.com user types

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-39/refactor-login-helper-to-support-all-saucedemocom-user-types
**Project:** SauceDemo Test Automation
**Status:** Done

---

## User Story

As a QA engineer, I want the login helper to support all [saucedemo.com](<http://saucedemo.com>) user types so that tests can easily run under different user conditions.

## Acceptance Criteria

* The login helper accepts a user type parameter: `standard_user`, `locked_out_user`, `problem_user`, `performance_glitch_user`.
* Each user type uses the correct credentials (all share password "secret_sauce").
* Existing tests that currently log in as standard_user continue to pass without modification.
* A test exists for each user type confirming login behavior: success for standard_user and problem_user, failure for locked_out_user, and delayed response for performance_glitch_user.

---

## Test Cases

## Framework execution results — [SAU-39](https://linear.app/saucedemo-qa/issue/SAU-39/refactor-login-helper-to-support-all-saucedemocom-user-types)

**Result:** ✅ Excellent

**Branch:** `agentic-framework-evaluation` (committed directly — no feature branch)
**Commit:** `d687c15`
**Files changed:** 5

* `CLAUDE.md` — [SAU-39](https://linear.app/saucedemo-qa/issue/SAU-39/refactor-login-helper-to-support-all-saucedemocom-user-types) added to Linear Issues table
* `src/pages/LoginPage.ts` — `loginAs(userType)` method added; stray `ß` character fixed in locator declaration
* `src/tests/login.spec.ts` — TC-031 through TC-034 added covering all four user types
* `src/utils/test-data.ts` — `UserType` union type, `USER_CREDENTIALS` map, and TC mappings added
* `src/utils/sync-qase-cases.ts` — [SAU-39](https://linear.app/saucedemo-qa/issue/SAU-39/refactor-login-helper-to-support-all-saucedemocom-user-types) added to SUITE_MAP

**New TCs:** TC-031 (Qase ID: 31 → STA-31), TC-032 (Qase ID: 32 → STA-32), TC-033 (Qase ID: 33 → STA-33), TC-034 (Qase ID: 34 → STA-34)
**Tests:** 33/34 passing (TC-031–034 all pass; TC-028 is a pre-existing [SAU-38](https://linear.app/saucedemo-qa/issue/SAU-38/product-sort-should-default-to-z-to-a-but-a-to-z-should-also-work) failure)

### What the framework did

* Phase 0: Verified existing test coverage — TC-001 through TC-011 cover login scenarios; no coverage for multi-user-type login helper
* Phase 1: Fetched [SAU-39](https://linear.app/saucedemo-qa/issue/SAU-39/refactor-login-helper-to-support-all-saucedemocom-user-types) from Linear correctly
* Phase 2: Identified 4 acceptance criteria — generated TC-031 (standard_user), TC-032 (problem_user), TC-033 (locked_out_user), TC-034 (performance_glitch_user)
* Phase 3: Added `UserType` union type and `USER_CREDENTIALS` map to `test-data.ts`; extended `LoginPage.ts` with `loginAs(userType)` typed method; fixed stray `ß` character in locator declaration detected during implementation; added TC-031–034 to `login.spec.ts` within the existing describe block
* Phase 4: Test artifacts updated — `SAU-39-test-cases.md` created; `sync-qase-cases.ts` updated with SUITE_MAP entry
* Phase 5: All 4 [SAU-39](https://linear.app/saucedemo-qa/issue/SAU-39/refactor-login-helper-to-support-all-saucedemocom-user-types) tests passing; full suite 33/34 (TC-028 pre-existing failure from [SAU-38](https://linear.app/saucedemo-qa/issue/SAU-38/product-sort-should-default-to-z-to-a-but-a-to-z-should-also-work))
* Phase 6: Push blocked per saved memory preference

### Cross-project awareness result

Framework correctly identified that existing login tests (TC-001 through TC-011) did not cover parameterized multi-user login — the gap was at the helper layer, not the assertion layer. Rather than adding new assertions to existing tests, the framework extended the `LoginPage` POM with a typed `loginAs()` method that maps user type strings to credentials, then added four dedicated TCs to validate each user type independently. Existing tests using `loginWith()` were unaffected.

### Clarification questions asked: 0

### Self-review iterations: 1

### Output quality: Excellent

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-15 | Automated | ❌ FAILED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |
| 2026-04-16 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-16_