---
name: project-context
description: Deep architectural knowledge for saucedemo-fw — test execution lifecycle, evidence pipeline, Qase/Linear integration flows, run folder system, gotchas, and multi-file checklists for adding tests and Linear issues.
user-invokable: true
disable-model-invocation: false
version: 3.0
---

# Project Context: saucedemo-fw

Playwright + TypeScript E2E test automation framework for SauceDemo, with a full evidence pipeline feeding into Qase TMS and Linear issue tracking.

## When to Use This Skill

- Adding a new test case or spec file
- Adding a new Linear issue to the coverage matrix
- Modifying the evidence pipeline (screenshots, summary.md format)
- Working with the Qase or Linear integration scripts
- Debugging why screenshots end up in the wrong folder
- Understanding why `QASE_MODE` must be set explicitly
- Working with the custom `LinearReporter` or `run-counter`
- Implementing any change that touches more than one layer

## Architecture Deep Dive

The framework uses a strict three-layer approach:

```
src/tests/          ← specs (what to test)
src/fixtures/       ← DI wiring (how to set up)
src/pages/          ← POM (how to interact)
```

Tests import only from `src/fixtures/test-fixtures.ts` — never directly from pages. The fixture layer instantiates page objects and injects them into tests via `test.extend`. This means adding a new page requires wiring it in `test-fixtures.ts` before specs can use it.

A separate utility layer (`src/utils/`) handles all external integrations (evidence writing, Linear, Qase) and is completely decoupled from the test layer.

**Key Architectural Decisions:**

| Decision | Rationale |
|----------|-----------|
| Fixtures, not `beforeEach` | Playwright fixtures support composition and lazy init; `loggedInPage` composes login + inventory atomically |
| `RUN_FOLDER` env var as shared state | Custom reporter runs in a separate process context from page objects; env var is the only reliable shared channel |
| `summary.md` as the evidence handoff format | Decouples test execution from Qase/Linear posting; scripts can re-run independently |
| Qase reporter is opt-in (`QASE_MODE=testops`) | Avoids polluting Qase with every local dev run; CI controls when results are published |
| All TC→issue mappings in `test-data.ts` | Single source of truth prevents drift between spec names, Qase IDs, and Linear issue IDs |

## Test Execution Lifecycle

1. `npx playwright test` starts → `LinearReporter.onBegin()` fires (`src/utils/reporter.ts:21`)
2. Reporter calls `getNextRunFolder()` → increments `.run-state/.run-number-YYYY-MM-DD`, writes path to `.run-state/.current-run-folder`, sets `process.env.RUN_FOLDER`
3. Each `BasePage` constructor (`src/pages/BasePage.ts:12`) reads `process.env.RUN_FOLDER || getCurrentRunFolder()` — this is where the screenshot folder is determined
4. Fixtures from `src/fixtures/test-fixtures.ts` instantiate page objects and inject them into tests
5. Tests call page object methods; each step calls `takeScreenshot(name)` saving PNGs to `evidence/YYYY-MM-DD/run-N/screenshots/`
6. `LinearReporter.onTestEnd()` accumulates results in memory
7. `LinearReporter.onEnd()` writes `evidence/YYYY-MM-DD/run-N/summary.md` with a markdown table of all TC results
8. If `QASE_MODE=testops`, `playwright-qase-reporter` auto-posts results to Qase during the run (parallel to steps 4–7)

## Critical Gotchas

### Run Folder Must Be Set Before Page Objects Are Constructed

The screenshot path is set in `BasePage`'s constructor, not per-screenshot. If a page object is instantiated before `LinearReporter.onBegin()` fires and sets `RUN_FOLDER`, screenshots go to a fallback path (`getCurrentRunFolder()` reads `.run-state/.current-run-folder` from disk — the previous run's folder).

**Wrong approach:**
```typescript
// Don't instantiate pages at module load time or before reporter fires
const page = new LoginPage(playwrightPage); // RUN_FOLDER not set yet!
```

**Correct approach:**
```typescript
// Always instantiate pages inside fixture functions or test bodies
loginPage: async ({ page }, use) => {
  await use(new LoginPage(page)); // reporter.onBegin() has already fired
},
```

### `summary.md` Table Format Is Parsed by `report-qase.ts`

`src/utils/report-qase.ts:51` parses `summary.md` by splitting lines on `|` and matching `TC-\d+` in the first cell. If the markdown table format in `LinearReporter.onEnd()` changes, the Qase on-demand reporter will silently produce zero results.

**The contract:**
```
| TC-001 — should login successfully... | ✅ passed | 3.2s |
```
- Cell 0: must start with `TC-\d+`
- Cell 1: must contain `passed` or `failed`
- Cell 2: must be parseable as a float followed by `s`

### `loggedInPage` Fixture Has Hardcoded Credentials

`src/fixtures/test-fixtures.ts:41` hardcodes `standard_user / secret_sauce` — it does not use the `USERS` constants from `test-data.ts`. If the AUT credentials change, this fixture must be updated separately.

### Qase Reporter Is Only Active When `QASE_MODE=testops`

`playwright.config.ts:13` conditionally includes `playwright-qase-reporter`. Without that env var, no Qase reporting happens during the test run — the only Qase output path is the manual `npm run report:qase` script (which reads `summary.md`).

### `qase.id()` Calls Are Load-Bearing for Qase Mapping

In spec files, `qase.id(N)` must match the Qase case ID in project STA. The mapping between Qase IDs and TC identifiers lives in `src/utils/test-data.ts` as `QASE_TO_TC`. If you add a new Qase case, update both the spec's `qase.id()` call and `QASE_TO_TC`.

## Complete Data Pipeline

```
Test run
  └─► evidence/YYYY-MM-DD/run-N/
        ├── screenshots/*.png       (per-step, from BasePage.takeScreenshot)
        └── summary.md              (from LinearReporter.onEnd)
              │
              ├─► npm run report:qase
              │     └─► POST /run/STA → POST /result/STA/{id}/bulk → complete run
              │
              └─► npm run notify:linear
                    ├─► GET Qase latest run results
                    └─► POST Linear commentCreate for each SAU-* issue
```

## Integration Points

### Linear (GraphQL, no SDK)

- **Auth:** `Authorization: <LINEAR_API_KEY>` header
- **Endpoint:** `https://api.linear.app/graphql`
- **Operations used:** `issue(id)` query (fetch), `commentCreate` mutation (post results), artifact generation fetch
- **Gotcha:** No pagination on Linear queries — if an issue has many comments, all are fetched at once
- **Error handling:** `data.errors` check throws; per-issue try/catch in `main()` logs and continues

### Qase (REST v1)

- **Auth:** `Token: <QASE_TESTOPS_API_TOKEN>` header
- **Project:** `STA` (hardcoded throughout)
- **Two modes:** auto (via `playwright-qase-reporter` during test run) and manual (via `report-qase.ts` reading `summary.md`)
- **Gotcha:** The two modes can double-report if both `QASE_MODE=testops` and `npm run report:qase` are run for the same run

### SauceDemo AUT

- **Base URL:** `https://www.saucedemo.com` (playwright.config.ts)
- **Credentials:** `src/utils/test-data.ts` `USERS` constant — except `loggedInPage` fixture (hardcoded)
- **Timeout:** `actionTimeout: 15000ms`; `retries: 0`; `workers: 1` (sequential by design)

## Testing Strategy

**Philosophy:** Real browser against the live AUT — no mocking, no stubs, no fixtures from disk. Every test hits `https://www.saucedemo.com`.

**Test naming convention:** `TC-NNN — description`. The `TC-NNN` prefix is load-bearing: it maps to `TC_TO_LINEAR` in `test-data.ts` (Linear issues) and `QASE_TO_TC` (Qase case IDs).

**Setup pattern — use fixtures, not `beforeEach`:**
```typescript
// ✅ Correct: fixture composes setup atomically
test('TC-007', async ({ loggedInPage, cartPage }) => { ... });

// ❌ Wrong: beforeEach creates ordering and scoping issues
beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginWith(...);
});
```

**Assertion pattern — always assert on the POM's locator, not raw `page`:**
```typescript
// ✅ Correct
await expect(inventoryPage.getPageTitle()).toHaveText('Products');

// ❌ Wrong — bypasses the POM abstraction
await expect(page.locator('.title')).toHaveText('Products');
```

**Screenshot convention:** Call `takeScreenshot('NNN-description')` where the prefix number reflects step order within the test. Screenshots are named sequentially to preserve evidence chronology.

## Multi-File Change Checklists

### Adding a New Test Case (TC)

- [ ] `src/utils/test-data.ts` — Add TC→Linear mapping to `TC_TO_LINEAR`, add Linear→TC to `LINEAR_ISSUES[].tcs`, add Qase→TC entry to `QASE_TO_TC`
- [ ] `src/tests/{domain}.spec.ts` — Add `test('TC-NNN — description', ...)` with `qase.id(N)` call
- [ ] `src/pages/{Domain}Page.ts` — Add any new page interactions needed
- [ ] `src/utils/sync-qase-cases.ts` — Verify `SUITE_MAP` has the correct suite ID for the Linear issue (login → 1, inventory → 2, checkout → 3)
- [ ] Run `ts-node src/utils/sync-qase-cases.ts` to create the case in Qase STA

### Adding a New Linear Issue (SAU-N)

- [ ] `src/utils/test-data.ts` — Add entry to `LINEAR_ISSUES` array and entries to `TC_TO_LINEAR`
- [ ] `src/test-artifacts/` — Will be regenerated by `npm run generate:artifacts`
- [ ] `CLAUDE.md` (project CLAUDE.md, not this file) — Update the Linear Issues table
- [ ] `src/utils/sync-qase-cases.ts` — Add suite mapping to `SUITE_MAP` if a new domain area
- [ ] Run `npm run generate:artifacts` to create the new `SAU-NN-test-cases.md`

### Adding a New Page Object

- [ ] `src/pages/{Domain}Page.ts` — Create class extending `BasePage`; declare locators as private readonly fields; add action methods calling `takeScreenshot` at each step
- [ ] `src/fixtures/test-fixtures.ts` — Add to `MyFixtures` type and wire up `base.extend` entry
- [ ] `src/tests/{domain}.spec.ts` — Import fixture by destructuring the new fixture name

### Adding a New Utility Script

- [ ] `src/utils/{purpose}.ts` — Guard `process.env` vars at top; use `try/catch` per-item with `console.log(' ❌ Failed — ...')`; use native `fetch` (no HTTP library)
- [ ] `package.json` — Add script entry if it should be user-facing
- [ ] `.env` — Document any new env vars required

## Conventions

| Convention | Why |
|------------|-----|
| PascalCase for page files, kebab-case for utils/specs | Distinguishes classes (instantiated) from scripts (executed directly) |
| `SCREAMING_SNAKE_CASE` for all constants in `test-data.ts` | Makes the single-source-of-truth mappings immediately visible |
| Named exports everywhere except `LinearReporter` | Playwright's reporter interface requires a default export; everything else benefits from tree-shaking and explicit imports |
| No linter / no formatter configured | Intentional for this stage of the framework — the team has not needed to enforce style at scale yet |
| `strict: false` in tsconfig | Accommodates TypeScript ^6.0.2 pre-release; `ignoreDeprecations: "6.0"` suppresses module resolution warnings |