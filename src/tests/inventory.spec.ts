import { test, expect } from '../fixtures/test-fixtures';
import { qase } from 'playwright-qase-reporter';

test.describe('Inventory Page — SAU-34', () => {

  // TC-016 — SAU-34
  test('TC-016 — should sort products by name A to Z',
    async ({ loggedInPage }) => {
      qase.id(16);
      qase.title('User can sort products by name A to Z');

      await loggedInPage.sortBy('az');

      const names = await loggedInPage.getProductNames();
      expect(names.length).toBeGreaterThan(0);

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1])).toBeLessThanOrEqual(0);
      }
    });

  // TC-017 — SAU-34
  test('TC-017 — should sort products by name Z to A',
    async ({ loggedInPage }) => {
      qase.id(17);
      qase.title('User can sort products by name Z to A');

      await loggedInPage.sortBy('za');

      const names = await loggedInPage.getProductNames();
      expect(names.length).toBeGreaterThan(0);

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1])).toBeGreaterThanOrEqual(0);
      }
    });

  // TC-018 — SAU-34
  test('TC-018 — should sort products by price low to high',
    async ({ loggedInPage }) => {
      qase.id(18);
      qase.title('User can sort products by price low to high');

      await loggedInPage.sortBy('lohi');

      const prices = await loggedInPage.getProductPrices();
      expect(prices.length).toBeGreaterThan(0);

      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
      }
    });

  // TC-019 — SAU-34
  test('TC-019 — should sort products by price high to low',
    async ({ loggedInPage }) => {
      qase.id(19);
      qase.title('User can sort products by price high to low');

      await loggedInPage.sortBy('hilo');

      const prices = await loggedInPage.getProductPrices();
      expect(prices.length).toBeGreaterThan(0);

      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
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

      const names = await loggedInPage.getProductNames();
      expect(names.length).toBeGreaterThan(0);

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1])).toBeGreaterThanOrEqual(0);
      }
    });

  // TC-029 — SAU-38
  test('TC-029 — should sort products A to Z when selected',
    async ({ loggedInPage }) => {
      qase.id(29);
      qase.title('Selecting Name (A to Z) sorts products A to Z');

      await loggedInPage.sortBy('az');

      const names = await loggedInPage.getProductNames();
      expect(names.length).toBeGreaterThan(0);

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1])).toBeLessThanOrEqual(0);
      }
    });

  // TC-030 — SAU-38
  test('TC-030 — should sort products Z to A when selected',
    async ({ loggedInPage }) => {
      qase.id(30);
      qase.title('Selecting Name (Z to A) sorts products Z to A');

      await loggedInPage.sortBy('za');

      const names = await loggedInPage.getProductNames();
      expect(names.length).toBeGreaterThan(0);

      for (let i = 0; i < names.length - 1; i++) {
        expect(names[i].localeCompare(names[i + 1])).toBeGreaterThanOrEqual(0);
      }
    });

});

test.describe('Inventory Page — SAU-10, SAU-31', () => {

  // TC-006 — SAU-10
  test('TC-006 — should add first product to cart',
    async ({ loggedInPage }) => {
      qase.id(6);
      qase.title('Add first product to cart');

      await loggedInPage.addFirstProductToCart();

      await expect(loggedInPage.getCartBadge())
        .toHaveText('1');

      const count = await loggedInPage.getProductCount();
      expect(count).toBeGreaterThan(0);
    });

  // TC-012 — SAU-31
  test('TC-012 — should show cart badge count of 1 after adding a product',
    async ({ loggedInPage }) => {
      qase.id(12);
      qase.title('Cart badge shows count 1 after adding a product');

      await loggedInPage.addFirstProductToCart();

      await expect(loggedInPage.getCartBadge())
        .toHaveText('1');
    });

  // TC-008 — SAU-48
  test('TC-008 — should sort products by price low to high',
    async ({ loggedInPage }) => {
      qase.id(8);
      qase.title('User can sort products by price low to high');

      await loggedInPage.sortBy('lohi');

      const prices = await loggedInPage.getProductPrices();
      expect(prices.length).toBeGreaterThan(0);

      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
      }
    });

});