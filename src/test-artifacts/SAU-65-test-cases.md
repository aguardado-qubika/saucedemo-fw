# SAU-65 — Login page — validate all UI elements are present with correct content

**Linear:** https://linear.app/saucedemo-qa/issue/SAU-65/login-page-validate-all-ui-elements-are-present-with-correct-content
**Project:** SauceDemo Test Automation
**Status:** Backlog

---

## User Story

## User Story

As a QA engineer, I want to navigate to the SauceDemo login page and assert that all required UI elements are present, visible, and contain correct text content — without performing any authentication — so that login page integrity is automatically verified on every regression run.

---

## Context

SauceDemo's login page (`/`) is the application entry point. It renders a static form with no authentication required to load. This ticket covers structural and content validation of that form: element presence, correct placeholder/label text, absence of unexpected error state on initial load, and element count (no duplicates).

**In scope:** Login page UI only — no credential input, no login action.
**Out of scope:** Post-login navigation, error message content triggered by wrong credentials.

---

## Acceptance Criteria

1. The Swag Labs logo/title is visible on the login page
2. The username input (`[data-test="username"]`) is visible with placeholder text `"Username"`
3. The password input (`[data-test="password"]`) is visible with placeholder text `"Password"`
4. The login button (`[data-test="login-button"]`) is visible with label text `"Login"`
5. The error message container (`[data-test="error"]`) is **not** visible on initial page load
6. Exactly **1** username input, **1** password input, and **1** login button exist in the DOM (no duplicates)

---

## BDD Scenarios

### Scenario 1: All required form elements are visible on page load

```
Given I navigate to the SauceDemo login page
When the page finishes loading
Then the username input field is visible
And the password input field is visible
And the login button is visible
And the Swag Labs logo is visible
```

### Scenario 2: Form elements have correct placeholder text

```
Given I navigate to the SauceDemo login page
When the page finishes loading
Then the username input placeholder text is "Username"
And the password input placeholder text is "Password"
```

### Scenario 3: Login button displays correct label

```
Given I navigate to the SauceDemo login page
When the page finishes loading
Then the login button text is "Login"
```

### Scenario 4: Error message is not visible on initial load

```
Given I navigate to the SauceDemo login page
When the page finishes loading without any user interaction
Then the error message container is not visible
```

### Scenario 5: Exactly one of each form element exists (no duplicates)

```
Given I navigate to the SauceDemo login page
When the page finishes loading
Then there is exactly 1 username input in the DOM
And there is exactly 1 password input in the DOM
And there is exactly 1 login button in the DOM
```

---

## Test Cases

| TC ID | Description | Expected Result |
| -- | -- | -- |
| TC-048 | All form elements visible on login page load | username input, password input, login button, and logo are all visible |
| TC-049 | Form elements have correct placeholder and button text | username placeholder = "Username", password placeholder = "Password", button text = "Login" |
| TC-050 | Error message not visible on initial page load | `[data-test="error"]` is not visible before any interaction |
| TC-051 | Exactly one of each form element in the DOM | count(username input) = 1, count(password input) = 1, count(login button) = 1 |

---

## Implementation Notes

* Spec file: `src/tests/login.spec.ts` (extend existing describe block)
* Page Object: `src/pages/LoginPage.ts` — add `getLoginButton()`, `getLogo()`, `getPasswordInput()`, `getUsernameInput()` locator accessors as needed
* No new POM file needed — extend `LoginPage`
* User type: none — navigate to `/` and assert without credentials
* Screenshots at each assertion step per existing convention

---

## INVEST Validation

| Criterion | Status | Notes |
| -- | -- | -- |
| Independent | ✅ | No dependency on auth or other tickets |
| Negotiable | ✅ | Element count and exact text values can be adjusted |
| Valuable | ✅ | Catches regressions in form structure on every run |
| Estimable | ✅ | \~0.5 day to implement 4 test cases |
| Small | ✅ | Single page, no login flow required |
| Testable | ✅ | All criteria are assertable via Playwright locators |


---

## Test Cases

/create-sdd-ticket --from-input "Navigate to the SauceDemo page and validate UI elements"

\--save-to-linear [Sauce Demo | Agentic Framework QA Evaluation](https://linear.app/saucedemo-qa/project/sauce-demo-or-agentic-framework-qa-evaluation-2d83798ec18d/issues)

\--project-key SAU

⏺ Starting the /create-sdd-ticket workflow. Let me first explore the project to gather context for intelligent gap detection.

Searched for 1 pattern, read 5 files, listed 1 directory (ctrl+o to expand)

⏺ Phase 1: Input parsed — plain text description.

Phase 2: Intelligent Gap Detection — analyzing existing codebase...

From codebase analysis I can infer:

* Tech stack: Playwright + TypeScript with POM architecture
* Pages exist for: Login, Inventory, Cart, Checkout, ProductDetail
* User types: standard_user, problem_user, locked_out_user, performance_glitch_user
* Next TC ID: TC-048
* Pattern: one spec file per domain, screenshots captured at each step

Three gaps remain that cannot be inferred from code:

---

Phase 3: Batch Questions

I have 3 targeted questions before generating the ticket:

1. Which specific page(s)?

"Navigate to the SauceDemo page" is ambiguous. Options:

* (a) Login page — validate form elements before authentication
* (b) Inventory page — validate product listing UI after login
* (c) Both pages in sequence
* (d) Other page (cart, checkout, product detail)

2. Which user type?

* (a) standard_user (default happy path)
* (b) All user types (standard, problem, performance_glitch)
* (c) Login page only — no auth needed

3. What level of UI validation?

* (a) Presence only — assert elements are visible
* (b) Text content — assert labels, titles, placeholder text match expected values
* (c) Both presence + content + count (e.g., 6 products on inventory page)

Please answer with numbers and letters, e.g.: 1a, 2a, 3b

✻ Sautéed for 56s

❯ 1a, 2c, 3c

⏺ Phase 4: Processing answers

* Page: Login page (no auth required)
* User type: No login needed — page-load only
* Validation: Presence + text content + element count

Phase 5: INVEST validation — Login page UI check is Independent, Valuable, Estimable (\~0.5 day), Small, Testable. ✅

Phase 6: Generating BDD scenarios + ticket...

Let me load the Linear tools and look up the project.

Called Linear 2 times (ctrl+o to expand)

⏺ Phase 7: Creating ticket in Linear — project "Sauce Demo | Agentic Framework QA Evaluation", team "SauceDemo QA".

⏺ Calling Linear… (ctrl+o to expand)

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

Tool use

[claude.ai](<http://claude.ai>) Linear - save_issue(title: "Login page — validate all UI elements are present with correct content", team: "SauceDemo QA", project: "Sauce Demo | Agentic Framework QA         
   Evaluation", priority: 3, description: "## User Story\\n\\nAs a QA engineer, I want to navigate to the SauceDemo login page and assert that all required UI elements are present,

visible, and contain correct text content — without performing any authentication — so that login page integrity is automatically verified on every regression run.\\n\\n---\\n\\n##

Context\\n\\nSauceDemo's login page (`/`) is the application entry point. It renders a static form with no authentication required to load. This ticket covers structural and content

validation of that form: element presence, correct placeholder/label text, absence of unexpected error state on initial load, and element count (no duplicates).\\n\\n**In scope:**

Login page UI only — no credential input, no login action.\\n**Out of scope:** Post-login navigation, error message content triggered by wrong credentials.\\n\\n---\\n\\n## Acceptance

Criteria\\n\\n1. The Swag Labs logo/title is visible on the login page\\n2. The username input (`[data-test=\"username\"]`) is visible with placeholder text `\"Username\"`\\n3. The

password input (`[data-test=\"password\"]`) is visible with placeholder text `\"Password\"`\\n4. The login button (`[data-test=\"login-button\"]`) is visible with label text

`\"Login\"`\\n5. The error message container (`[data-test=\"error\"]`) is **not** visible on initial page load\\n6. Exactly **1** username input, **1** password input, and **1** login

button exist in the DOM (no duplicates)\\n\\n---\\n\\n## BDD Scenarios\\n\\n### Scenario 1: All required form elements are visible on page load\\n\\n`\nGiven I navigate to the SauceDemo    login page\nWhen the page finishes loading\nThen the username input field is visible\nAnd the password input field is visible\nAnd the login button is visible\nAnd the Swag Labs logo     is visible\n`\\n\\n### Scenario 2: Form elements have correct placeholder text\\n\\n`\nGiven I navigate to the SauceDemo login page\nWhen the page finishes loading\nThen the    username input placeholder text is \"Username\"\nAnd the password input placeholder text is \"Password\"\n`\\n\\n### Scenario 3: Login button displays correct label\\n\\n`\nGiven I    navigate to the SauceDemo login page\nWhen the page finishes loading\nThen the login button text is \"Login\"\n`\\n\\n### Scenario 4: Error message is not visible on initial
   load\\n\\n`\nGiven I navigate to the SauceDemo login page\nWhen the page finishes loading without any user interaction\nThen the error message container is not visible\n`\\n\\n###
   Scenario 5: Exactly one of each form element exists (no duplicates)\\n\\n`\nGiven I navigate to the SauceDemo login page\nWhen the page finishes loading\nThen there is exactly 1    username input in the DOM\nAnd there is exactly 1 password input in the DOM\nAnd there is exactly 1 login button in the DOM\n`\\n\\n---\\n\\n## Test Cases\\n\\n| TC ID | Description |
   Expected Result |\\n|-------|-------------|-----------------|\\n| TC-048 | All form elements visible on login page load | username input, password input, login button, and logo are all
    visible |\\n| TC-049 | Form elements have correct placeholder and button text | username placeholder = "Username", password placeholder = "Password", button text = "Login" |\\n|
    TC-050 | Error message not visible on initial page load | `[data-test=\"error\"]` is not visible before any interaction |\\n| TC-051 | Exactly one of each form element in the DOM |
   count(username input) = 1, count(password input) = 1, count(login button) = 1 |\\n\\n---\\n\\n## Implementation Notes\\n\\n- Spec file: `src/tests/login.spec.ts` (extend existing describe
   block)\\n- Page Object: `src/pages/LoginPage.ts` — add `getLoginButton()`, `getLogo()`, `getPasswordInput()`, `getUsernameInput()` locator accessors as needed\\n- No new POM file
   needed — extend `LoginPage`\\n- User type: none — navigate to `/` and assert without credentials\\n- Screenshots at each assertion step per existing convention\\n\\n---\\n\\n## INVEST
   Validation\\n\\n| Criterion | Status | Notes |\\n|-----------|--------|-------|\\n| Independent | ✅ | No dependency on auth or other tickets |\\n| Negotiable | ✅ | Element count and
   exact text values can be adjusted |\\n| Valuable | ✅ | Catches regressions in form structure on every run |\\n| Estimable | ✅ | \~0.5 day to implement 4 test cases |\\n| Small | ✅ |
   Single page, no login flow required |\\n| Testable | ✅ | All criteria are assertable via Playwright locators |\\n") (MCP)
   Create or update a Linear issue. If `id` is provided, updates the existing issue; otherwise creates a new one. When creating, `title` and `team` are required. Note: use `assignee`
   (not `assigneeId`) to set the assignee — it accepts a user ID, name, email, or "me".
 Do you want to proceed?
 ❯ 1. Yes
   2. Yes, and don't ask again for [claude.ai](<http://claude.ai>) Linear - save_issue commands in /Users/alexisguardado/saucedemo-fw
   3. No
 Esc to cancel · Tab to amend
  Phase 6: Generating BDD scenarios + ticket...
  Let me load the Linear tools and look up the project.
  Called Linear 2 times (ctrl+o to expand)
⏺ Phase 7: Creating ticket in Linear — project "Sauce Demo | Agentic Framework QA Evaluation", team "SauceDemo QA".
  Called Linear (ctrl+o to expand)  
⏺ ✅ SDD Ticket Created: [SAU-65](https://linear.app/saucedemo-qa/issue/SAU-65/login-page-validate-all-ui-elements-are-present-with-correct-content)

---

Summary: Login page — validate all UI elements are present with correct content                                                                                                           
  Link: [SAU-65](https://linear.app/saucedemo-qa/issue/SAU-65/login-page-validate-all-ui-elements-are-present-with-correct-content)                                                                   
  Project: Sauce Demo | Agentic Framework QA Evaluation                                                                                                                                     
  Status: Backlog | Priority: Normal

INVEST Validation: ✅ All criteria passed                                                                                                                                                 
  BDD Scenarios: 5 scenarios (presence, placeholder text, button label, error hidden, element count)

Test Cases mapped:

┌────────┬─────────────────────────────────────────────┐                                                                                                                                
  │ TC ID  │                 Description                 │                                                                                                                                  
  ├────────┼─────────────────────────────────────────────┤
  │ TC-048 │ All form elements visible on page load      │                                                                                                                                  
  ├────────┼─────────────────────────────────────────────┤                                                                                                                                
  │ TC-049 │ Correct placeholder text and button label   │
  ├────────┼─────────────────────────────────────────────┤                                                                                                                                  
  │ TC-050 │ Error message not visible on initial load   │
  ├────────┼─────────────────────────────────────────────┤                                                                                                                                  
  │ TC-051 │ Exactly one of each form element in the DOM │                                                                                                                                
  └────────┴─────────────────────────────────────────────┘
  Next steps:

* To implement: /implement-ticket [SAU-65](https://linear.app/saucedemo-qa/issue/SAU-65/login-page-validate-all-ui-elements-are-present-with-correct-content)
* Spec file target: src/tests/login.spec.ts
* POM target: src/pages/LoginPage.ts (extend with locator accessors)

---

## Execution History

| Date | Type | Result | Executed by |
|------|------|--------|-------------|

---

## Evidence

Screenshots per step stored in:
`test-results/YYYY-MM-DD/run-{timestamp}/screenshots/`

_Generated automatically on 2026-05-04_