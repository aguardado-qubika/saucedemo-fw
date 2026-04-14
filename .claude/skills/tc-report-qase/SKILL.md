---
name: tc-report-qase
description: Post test results to Qase on demand. Use when asked to report to qase, post results to qase, or send to qase. Requires /tc-run to have completed first.
---

Post the latest test run results to Qase by creating a new test run via API.

## Prerequisites

**`/tc-run` must complete before this skill.** This skill reads evidence produced by `/tc-run` — if no run has occurred, or the evidence folder is missing, it will fail or post stale results.

If `/tc-run` has not been run yet, run it first:
```
/tc-run
```
Then return to this skill.

## Steps

1. Run this command:
```bash
   npx ts-node src/utils/report-qase.ts
```

2. Wait for the script to complete.

3. Report:
   - Qase run ID created
   - Number of results posted (passed/failed)
   - Direct URL to the Qase run

## Notes
- Reads results from latest `evidence/YYYY-MM-DD/run-N/summary.md` automatically
- Creates a brand new Qase test run — does not modify existing runs
- Requires QASE_TESTOPS_API_TOKEN in .env

## ⚠️ Duplicate run warning
Only use this skill if tests were run WITHOUT QASE_MODE=testops.

If tests ran via `npm run test:qase` or the CI/CD pipeline, Qase already received the results automatically. Running this skill on top creates a duplicate Qase run for the same execution.

When in doubt: check Qase first — if a run already exists for this execution, do not use this skill.