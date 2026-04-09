# SAU-28 — User can log in with valid credentials

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-28/user-can-log-in-with-valid-credentials
**Project:** Agentic Framework QA Evaluation
**Status:** Backlog

---

## User Story

As a registered user, I want to log in to SauceDemo

so that I can access the product inventory.

Acceptance Criteria:

* Given I am on the login page
* When I enter username "standard_user" and password "secret_sauce"
* Then I should be redirected to the inventory page
* And the page title should display "Products"

---

## Test Cases

TC-008 — Valid login redirects to inventory with Products title

PRECONDITIONS: Browser is open, SauceDemo is accessible

STEPS:

1. Navigate to https://www.saucedemo.com
2. Enter username: standard_user
3. Enter password: secret_sauce
4. Click the Login button

EXPECTED RESULT:

* User is redirected to /inventory.html
* Page title displays "Products"

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|

---

_Generated automatically on 2026-04-09_
