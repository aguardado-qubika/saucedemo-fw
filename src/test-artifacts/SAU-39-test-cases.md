# SAU-39 — Refactor login helper to support all saucedemo.com user types

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-39/refactor-login-helper-to-support-all-saucedemocom-user-types
**Project:** SauceDemo Test Automation
**Status:** Backlog

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

_No test cases found._

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-15 | Automated | ❌ FAILED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-15_