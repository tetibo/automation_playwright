import { Page, Locator } from '@playwright/test';

export class HeaderFragment {
  readonly page: Page;
  readonly logo: Locator;
  readonly menuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('#Layer_1');
    this.menuButton = page.getByRole('button', {
      name: 'Toggle navigation',
    });
  }

  async clickLogo() {
    await this.logo.click();
  }

  async openMenu() {
    await this.menuButton.click();
  }
}