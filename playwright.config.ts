import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 1,
  globalTimeout: process.env.CI ? 60 * 60 * 1000 : undefined,
  timeout: 30000,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['./src/utils/reporter.ts'],
    ...(process.env.QASE_MODE === 'testops' ? [
      ['playwright-qase-reporter', {
        testops: {
          api: { token: process.env.QASE_TESTOPS_API_TOKEN },
          project: process.env.QASE_PROJECT_CODE || 'STA',
          run: { complete: true },
          uploadAttachments: true,
        },
      }] as any
    ] : []),
  ],
  use: {
    baseURL: process.env.APP_BASE_URL || 'https://www.saucedemo.com',
    actionTimeout: 15000,
    navigationTimeout: 30000,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    headless: !!process.env.CI,
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});