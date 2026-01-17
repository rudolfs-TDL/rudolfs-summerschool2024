import Login from '../pageElements/Login'
import Home from '../pageElements/Home'
import Global from '../pageElements/Global'

describe('login functionality', () => {
    const USERNAME = Cypress.env('username')
    const PASSWORD = Cypress.env('password')

    beforeEach(() => {})

    it('opens webstore login page', () => {
        cy.visit('/sign-in')
        Login.elements.emailInput().should('be.visible')
        Login.elements.passwordInput().should('be.visible')
        Login.elements.signInButton().should('be.visible')
    })

    it('logs in & opens Store page from sidebar', () => {
        cy.login(USERNAME, PASSWORD)
        cy.visit('/')
        Home.elements.headerLink().contains('Store of Excellence')
        Home.elements.productLink().should('have.length', 4)
        Global.navigateSideBar.openPage('Store')
    })
})
