import Login from '../pageElements/Login'
import Home from '../pageElements/Home'

Cypress.Commands.add('getByTestId', (id) => {
    cy.get(`[data-testid=${id}]`)
})

Cypress.Commands.add('getByHref', (href) => {
    cy.get(`[href='${href}']`)
})

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/')
        Login.elements.emailInput().type(username)
        Login.elements.passwordInput().type(password)
        Login.elements.signInButton().click()
        Home.elements.headerLink().should('be.visible')
    })
})
