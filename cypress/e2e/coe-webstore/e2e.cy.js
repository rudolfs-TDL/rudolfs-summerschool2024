import Global from '../../pageElements/Global';
import Login from '../../pageElements/Login';
import Home from '../../pageElements/Home';

// https://tdlschool.atlassian.net/browse/TSS22N-5
describe('End-to-end user flow', () => {
  const USERNAME = Cypress.env('username');
  const PASSWORD = Cypress.env('password');

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it('selects product from store', () => {
    cy.visit('/store');
  });

  it('goes to cart & checkout', () => {
    cy.visit('/cart');
  });

  it('fills checkout details', () => {
    cy.visit('/checkout?step=payment');
  });

  it('logs out', () => {
    cy.visit('/dashboard');
    Global.elements.logOutButton().click();
    cy.url().should('include', '/us/sign-in');
  });
});
