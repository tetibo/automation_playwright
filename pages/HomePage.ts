import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.getByTestId('product-name');
  }

  async open() {
    await this.page.goto('/');
  }

  async clickProduct(productName: string) {
    await this.products
      .filter({ hasText: productName })
      .click();
  }
}