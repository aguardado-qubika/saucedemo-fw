import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  private readonly firstNameInput:    Locator;
  private readonly lastNameInput:     Locator;
  private readonly zipCodeInput:      Locator;
  private readonly continueButton:    Locator;
  private readonly cancelButton:      Locator;
  private readonly finishButton:      Locator;
  private readonly confirmationTitle: Locator;
  private readonly errorMessage:      Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput    = page.locator('[data-test="firstName"]');
    this.lastNameInput     = page.locator('[data-test="lastName"]');
    this.zipCodeInput      = page.locator('[data-test="postalCode"]');
    this.continueButton    = page.locator('[data-test="continue"]');
    this.cancelButton      = page.locator('[data-test="cancel"]');
    this.finishButton      = page.locator('[data-test="finish"]');
    this.confirmationTitle = page.locator('[data-test="complete-header"]');
    this.errorMessage      = page.locator('[data-test="error"]');
  }

  async fillShippingInfo(
    firstName: string,
    lastName: string,
    zipCode: string
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
    await this.takeScreenshot('08-shipping-info-filled');
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
    await this.takeScreenshot('09-order-summary');
  }

  async clickCancel(): Promise<void> {
    await this.cancelButton.click();
    await this.takeScreenshot('checkout-cancelled');
  }

  async clickFinish(): Promise<void> {
    await this.finishButton.click();
    await this.takeScreenshot('10-order-confirmed');
  }

  getConfirmationTitle(): Locator {
    return this.confirmationTitle;
  }

  getErrorMessage(): Locator {
    return this.errorMessage;
  }
}