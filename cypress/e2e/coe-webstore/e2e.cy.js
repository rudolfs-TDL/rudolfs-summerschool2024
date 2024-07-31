import Global from '../../pageElements/Global'
import Checkout from '../../pageElements/Checkout'
import Product from '../../pageElements/Product'

// https://tdlschool.atlassian.net/browse/TSS22N-5
describe('End-to-end user flow', () => {
    const USERNAME = Cypress.env('username')
    const PASSWORD = Cypress.env('password')

    beforeEach(() => {
        cy.login(USERNAME, PASSWORD)
        cy.visit('/')
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-6
    it('selects Sweatpants product from store page', () => {
        Global.navigateSideBar.openPage('Store')
        cy.getByHref('/us/products/sweatpants').click()
        Product.elements.optionButton('L').click()
        Product.elements.addProductButton().click()
        Product.elements
            .addProductButton()
            .should('have.text', 'Select variant')
    })

    it('opens cart page & clicks on check out', () => {
        Global.navigateSideBar.openPage('Cart')
        Checkout.elements.checkoutButton().click()
        cy.contains('h2', 'Shipping Address')
        cy.url().should('include', '/checkout?step=address')
    })

    it('fills checkout details', () => {
        cy.visit('/checkout?step=address')
        cy.getByTestId('shipping-first-name-input').type('Rudolfs')
        cy.getByTestId('shipping-last-name-input').type('Blaumanis')
        cy.getByTestId('shipping-address-input').type('Address')
        cy.getByTestId('shipping-postal-code-input').type('LA-1003')
        cy.getByTestId('shipping-city-input').type('Los Angeles')
        cy.getByTestId('shipping-country-select').select('United States')
        cy.getByTestId('submit-address-button').click()
        Checkout.elements.deliveryOptionRadio('FakeEx Express').click()
        Checkout.elements.continueToPaymentButton().click()
        Checkout.elements.continueToReview().click()
        Checkout.elements.submitOrderButton().click()
        cy.url().should('include', '/order/confirmed/order')
        cy.url().then((url) => {
            Cypress.env('orderUrl', url)
        })
    })

    it('logs out', () => {
        cy.visit(Cypress.env('orderUrl'))
        Global.elements.sideBarBurger().click()
        Global.elements.logOutButton().click()
        cy.url().should('include', '/us/sign-in')
    })
})
