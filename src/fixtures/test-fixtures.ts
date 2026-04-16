import { test as base, expect } from '@playwright/test';
import { LoginPage }          from '../pages/LoginPage';
import { InventoryPage }      from '../pages/InventoryPage';
import { CartPage }           from '../pages/CartPage';
import { CheckoutPage }       from '../pages/CheckoutPage';
import { ProductDetailPage }  from '../pages/ProductDetailPage';
import { setCurrentTestId } from '../pages/BasePage';

// Define the shape of all our fixtures
type MyFixtures = {
  loginPage:         LoginPage;
  inventoryPage:     InventoryPage;
  cartPage:          CartPage;
  checkoutPage:      CheckoutPage;
  productDetailPage: ProductDetailPage;
  loggedInPage:      InventoryPage;
  _tcContext:        void;
};

export const test = base.extend<MyFixtures>({

  // ── _tcContext fixture (auto) ──────────────────────────────────────
  // Extracts TC ID from test title and sets the per-test screenshot subfolder
  _tcContext: [async ({}, use, testInfo) => {
    const match = testInfo.title.match(/^(TC-\d+)/);
    setCurrentTestId(match ? match[1] : '');
    await use();
    setCurrentTestId('');
  }, { auto: true }],

  // ── loginPage fixture ──────────────────────────────────────────────
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // ── inventoryPage fixture ──────────────────────────────────────────
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  // ── cartPage fixture ───────────────────────────────────────────────
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  // ── checkoutPage fixture ───────────────────────────────────────────
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  // ── productDetailPage fixture ─────────────────────────────────
  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },

  // ── loggedInPage fixture ───────────────────────────────────────────
  // Logs in first, then gives test a ready InventoryPage
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWith('standard_user', 'secret_sauce');
    await use(new InventoryPage(page));
  },

});

export { expect };