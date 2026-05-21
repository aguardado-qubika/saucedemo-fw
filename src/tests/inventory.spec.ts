import { test, expect } from '../fixtures/test-fixtures';
import { qase } from 'playwright-qase-reporter';
import { USERS } from '../utils/test-data';

test.describe('Inventory Page — SAU-34', () => {

  // TC-016 — SAU-34
  test('TC-016 — should sort products by name A to Z',
    async ({ loggedInPage }) => {
      qase.id(16);
      qase.title('User can sort products by name A to Z');

      await loggedInPage.sortBy('az');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed after sorting').not.toHaveCount(0);
      const names = await loggedInPage.getProductNames();

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1]), `"${names[i]}" should come before "${names[i + 1]}" in A-to-Z order`).toBeLessThanOrEqual(0);
      }
    });

  // TC-017 — SAU-34
  test('TC-017 — should sort products by name Z to A',
    async ({ loggedInPage }) => {
      qase.id(17);
      qase.title('User can sort products by name Z to A');

      await loggedInPage.sortBy('za');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed after sorting').not.toHaveCount(0);
      const names = await loggedInPage.getProductNames();

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1]), `"${names[i]}" should come after "${names[i + 1]}" in Z-to-A order`).toBeGreaterThanOrEqual(0);
      }
    });

  // TC-018 — SAU-34
  test('TC-018 — should sort products by price low to high',
    async ({ loggedInPage }) => {
      qase.id(18);
      qase.title('User can sort products by price low to high');

      await loggedInPage.sortBy('lohi');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed after sorting').not.toHaveCount(0);
      const prices = await loggedInPage.getProductPrices();

      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i], `$${prices[i]} should be less than or equal to $${prices[i + 1]}`).toBeLessThanOrEqual(prices[i + 1]);
      }
    });

  // TC-019 — SAU-34
  test('TC-019 — should sort products by price high to low',
    async ({ loggedInPage }) => {
      qase.id(19);
      qase.title('User can sort products by price high to low');

      await loggedInPage.sortBy('hilo');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed after sorting').not.toHaveCount(0);
      const prices = await loggedInPage.getProductPrices();

      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i], `$${prices[i]} should be greater than or equal to $${prices[i + 1]}`).toBeGreaterThanOrEqual(prices[i + 1]);
      }
    });

});

test.describe('Inventory Page — SAU-38', () => {

  // TC-028 — SAU-38
  test('TC-028 — should default to Z to A sort order on page load',
    async ({ loggedInPage }) => {
      test.fail(); // SAU-38: SauceDemo defaults to A to Z — expected failure documenting the bug
      qase.id(28);
      qase.title('Default sort order on page load is Z to A');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed on page load').not.toHaveCount(0);
      const names = await loggedInPage.getProductNames();

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1]), `"${names[i]}" should come after "${names[i + 1]}" in Z-to-A order`).toBeGreaterThanOrEqual(0);
      }
    });

  // TC-029 — SAU-38
  test('TC-029 — should sort products A to Z when selected',
    async ({ loggedInPage }) => {
      qase.id(29);
      qase.title('Selecting Name (A to Z) sorts products A to Z');

      await loggedInPage.sortBy('az');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed after sorting').not.toHaveCount(0);
      const names = await loggedInPage.getProductNames();

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1]), `"${names[i]}" should come before "${names[i + 1]}" in A-to-Z order`).toBeLessThanOrEqual(0);
      }
    });

  // TC-030 — SAU-38
  test('TC-030 — should sort products Z to A when selected',
    async ({ loggedInPage }) => {
      qase.id(30);
      qase.title('Selecting Name (Z to A) sorts products Z to A');

      await loggedInPage.sortBy('za');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed after sorting').not.toHaveCount(0);
      const names = await loggedInPage.getProductNames();

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1]), `"${names[i]}" should come after "${names[i + 1]}" in Z-to-A order`).toBeGreaterThanOrEqual(0);
      }
    });

});

test.describe('Inventory Page — SAU-59', () => {

  // TC-046 — SAU-59
  test('TC-046 — problem_user inventory page should show unique image per product',
    async ({ loginPage, inventoryPage, page }) => {
      test.fail(); // SAU-59: problem_user renders the same broken image for all products
      qase.id(46);
      qase.title('problem_user inventory page shows unique image per product');

      await loginPage.loginWith(USERS.problem.username, USERS.problem.password);
      await expect(page, 'Should land on inventory page after login').toHaveURL(/inventory\.html/);

      await expect(inventoryPage.getProductItems(), 'Products should be displayed on inventory page').not.toHaveCount(0);
      const srcs = await inventoryPage.getProductImageSrcs();

      const uniqueSrcs = new Set(srcs);
      expect(uniqueSrcs.size, 'Each product should have a unique image src').toBe(srcs.length);
    });

});

test.describe('Inventory Page — SAU-10, SAU-31', () => {

  // TC-006 — SAU-10
  test('TC-006 — should add first product to cart',
    async ({ loggedInPage }) => {
      qase.id(6);
      qase.title('Add first product to cart');

      await loggedInPage.addFirstProductToCart();

      await expect(loggedInPage.getCartBadge(), 'Cart badge should show 1 after adding a product')
        .toHaveText('1');
      await expect(loggedInPage.getProductItems(), 'Products should still be displayed after adding to cart')
        .not.toHaveCount(0);
    });

  // TC-012 — SAU-31
  test('TC-012 — should show cart badge count of 1 after adding a product',
    async ({ loggedInPage }) => {
      qase.id(12);
      qase.title('Cart badge shows count 1 after adding a product');

      await loggedInPage.addFirstProductToCart();

      await expect(loggedInPage.getCartBadge(), 'Cart badge should show 1 after adding a product')
        .toHaveText('1');
    });

  // TC-008 — SAU-48
  test('TC-008 — should sort products by price low to high',
    async ({ loggedInPage }) => {
      qase.id(8);
      qase.title('User can sort products by price low to high');

      await loggedInPage.sortBy('lohi');

      await expect(loggedInPage.getProductItems(), 'Products should be displayed after sorting').not.toHaveCount(0);
      const prices = await loggedInPage.getProductPrices();

      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i], `$${prices[i]} should be less than or equal to $${prices[i + 1]}`).toBeLessThanOrEqual(prices[i + 1]);
      }
    });

});
