# SAU-40 — Add checkout form validation error coverage to the checkout step helper

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-40/add-checkout-form-validation-error-coverage-to-the-checkout-step
**Project:** SauceDemo Test Automation
**Status:** Backlog

---

## User Story

As a QA engineer, I want the checkout step helper to handle form validation errors gracefully so that tests can cover incomplete form submission scenarios.

## Acceptance Criteria

* Given the user is on the checkout information page
* When they click Continue without filling in First Name
* Then an error message "Error: First Name is required" is displayed
* When they click Continue without filling in Last Name
* Then an error message "Error: Last Name is required" is displayed
* When they click Continue without filling in Zip/Postal Code
* Then an error message "Error: Postal Code is required" is displayed
* All existing checkout tests continue to pass without modification.

---

## Test Cases

_No test cases found._

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|
| 2026-04-15 | Automated | ✅ PASSED | Playwright / Alexis Guardado |

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-04-15_