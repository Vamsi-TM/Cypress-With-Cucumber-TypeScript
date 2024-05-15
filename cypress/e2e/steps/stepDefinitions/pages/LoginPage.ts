// landing page - POM

export class LoginPage {
  private readonly BASE_URL = 'https://www.saucedemo.com/';

  visitLoginPage() {
    cy.visit(this.BASE_URL);
  }

  enterUserName(stg: string) {
    cy.get('input[id=user-name]').type(stg);
  }

  enterPassword(stg: string) {
    cy.get('input[id=password]').type(stg);
  }

  clickEnter() {
    cy.contains('Login').click();
  }

  loginSuccessfully() {
    cy.url().should('contain', '/inventory.html');
  }
}
