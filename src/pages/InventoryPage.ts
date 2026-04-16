import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

    private readonly pageTitle: Locator;
    private readonly productItems: Locator;
    private readonly cartBadge: Locator;
    private readonly cartIcon: Locator;
    private readonly burgerMenuButton: Locator;
    private readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);
        this.pageTitle = page.locator('[data-test="title"]');
        this.productItems = page.locator('[data-test="inventory-item"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.burgerMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async addFirstProductToCart(): Promise<void> {
        await this.page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click();
        await this.takeScreenshot('05-product-added-to-cart');
    }

    async addNthProductToCart(index: number): Promise<void> {
        await this.page
            .locator('[data-test^="add-to-cart-"]')
            .nth(index)
            .click();
        await this.takeScreenshot(`05-product-${index}-added-to-cart`);
    }

    async removeFirstProductFromCart(): Promise<void> {
        await this.page
            .locator('[data-test="remove-sauce-labs-backpack"]')
            .click();
        await this.takeScreenshot('05b-product-removed-from-cart');
    }

    async goToCart(): Promise<void> {
        await this.cartIcon.click();
        await this.takeScreenshot('06-cart-opened');
    }

    getPageTitle(): Locator {
        return this.pageTitle;
    }

    getCartBadge(): Locator {
        return this.cartBadge;
    }

    async getProductCount(): Promise<number> {
        return await this.productItems.count();
    }

    async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo'): Promise<void> {
        await this.takeScreenshot('11-sort-dropdown-opened');
        await this.page.selectOption('[data-test="product-sort-container"]', option);
        await this.takeScreenshot('12-products-sorted');
    }

    async getProductPrices(): Promise<number[]> {
        const priceElements = await this.page.locator('.inventory_item_price').all();
        const prices: number[] = [];
        for (const el of priceElements) {
            const text = await el.innerText();
            prices.push(parseFloat(text.replace('$', '')));
        }
        return prices;
    }

    async getProductNames(): Promise<string[]> {
        const nameElements = await this.page.locator('[data-test="inventory-item-name"]').all();
        const names: string[] = [];
        for (const el of nameElements) {
            names.push(await el.innerText());
        }
        return names;
    }

    async goToFirstProduct(): Promise<void> {
        await this.page
            .locator('[data-test="inventory-item-name"]')
            .first()
            .click();
        await this.takeScreenshot('01-product-detail-page');
    }

    async logout(): Promise<void> {
        await this.burgerMenuButton.click();
        await this.takeScreenshot('20-burger-menu-opened');
        await this.logoutLink.click();
        await this.takeScreenshot('21-logged-out');
    }
}