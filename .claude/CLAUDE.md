# saucedemo-fw

> Quick reference for AI agents. For deep architectural knowledge, load the `project-context` skill.

## Tech Stack

- TypeScript ^6.0.2 (strict: false)
- @playwright/test ^1.59.1
- playwright-qase-reporter ^2.2.3
- ts-node ^10.9.2
- dotenv ^17.4.1
- @types/node ^25.5.0
- Node.js 22 (CI)

## File Placement Guide

| File Type | Location Pattern | Example |
|-----------|------------------|---------|
| Test spec | `src/tests/{domain}.spec.ts` | `login.spec.ts` |
| Page Object Model | `src/pages/{Domain}Page.ts` | `LoginPage.ts` |
| Base class (shared POM) | `src/pages/BasePage.ts` | `BasePage.ts` |
| Playwright fixtures | `src/fixtures/test-fixtures.ts` | `test-fixtures.ts` |
| Test data / TC mappings | `src/utils/test-data.ts` | `test-data.ts` |
| Custom Playwright reporter | `src/utils/reporter.ts` | `reporter.ts` |
| Run state / evidence manager | `src/utils/run-counter.ts` | `run-counter.ts` |
| Utility / integration script | `src/utils/{purpose}.ts` | `notify-linear.ts` |
| Auto-generated test artifact | `src/test-artifacts/{ISSUE}-test-cases.md` | `SAU-07-test-cases.md` |
| Playwright config | `playwright.config.ts` | `playwright.config.ts` |
| TypeScript config | `tsconfig.json` | `tsconfig.json` |
| Qase config | `qase.config.json` | `qase.config.json` |
| CI pipeline | `.github/workflows/playwright.yml` | `playwright.yml` |
| Evidence output (runtime) | `evidence/YYYY-MM-DD/run-N/` | `evidence/2026-04-09/run-1/summary.md` |

## Directory Structure

```
src/
  fixtures/       # Playwright test.extend fixtures (DI into specs)
  pages/          # Page Object Models (all extend BasePage)
  tests/          # Spec files (one per domain area)
  test-artifacts/ # Auto-generated .md files per Linear issue
  utils/          # Reporter, scripts, test data, run state
evidence/         # Runtime evidence (gitignored) — screenshots + summary.md
.run-state/       # Persistent run counter files (gitignored)
.github/
  workflows/      # GitHub Actions CI
```

## Essential Commands

| Task | Command |
|------|---------|
| Run tests (chromium) | `npm test` |
| Run tests (all browsers) | `npm run test:all` |
| Run tests (headed) | `npm run test:headed` |
| Run tests + report to Qase | `npm run test:qase` |
| Show HTML report | `npm run report` |
| Generate test artifact .md files | `npm run generate:artifacts` |
| Post results to Linear | `npm run notify:linear` |
| Post results to Qase (on-demand) | `npm run report:qase` |
| Sync TCs to Qase project | `ts-node src/utils/sync-qase-cases.ts` |

## Required Environment Variables

| Variable | Used By |
|----------|---------|
| `LINEAR_API_KEY` | `notify-linear.ts`, `generate-test-artifacts.ts` |
| `QASE_TESTOPS_API_TOKEN` | `report-qase.ts`, `sync-qase-cases.ts`, `playwright.config.ts` |
| `QASE_MODE` | `playwright.config.ts` — set to `testops` to enable Qase reporter |