import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from './pages/LoginPage';

const loginPage = new LoginPage();

Given('I visit the login page', () => {
  loginPage.visitLoginPage();
});

When(
  'I enter valid {string} and {string}',
  (userName: string, password: string) => {
    loginPage.enterUserName(userName);
    loginPage.enterPassword(password);
    loginPage.clickEnter();
  }
);

Then('I should be logged in', () => {
  loginPage.loginSuccessfully();
});

Given('I enter incorrect credentials', (table) => {
  table.hashes().forEach((row) => {
    loginPage.enterUserName(row.user_name);
    loginPage.enterPassword(row.password);
    console.log(table.hashes());
  });
});

Given('I click login', () => {
  loginPage.clickEnter();
});

Then('the error message {string} is displayed', (errorMessage) => {
  cy.get('h3').should('have.text', errorMessage);
});
