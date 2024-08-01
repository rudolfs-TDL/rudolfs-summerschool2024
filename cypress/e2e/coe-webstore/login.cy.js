import Login from '../../pageElements/Login'
import Home from '../../pageElements/Home'
import Global from '../../pageElements/Global'

describe('login functionality', () => {
    const USERNAME = Cypress.env('username')
    const PASSWORD = Cypress.env('password')

    beforeEach(() => {})

    it('opens webstore login page', () => {
        Login.elements.emailInput().should('not.exist')
        Login.elements.passwordInput().should('not.exist')
        Login.elements.signInButton().should('not.exist')
    })

    it('logs in & opens Store page from sidebar', () => {
        cy.login(USERNAME, PASSWORD)
        Home.elements.headerLink().contains('Store of Excellence')
        Home.elements.productLink().should('have.length', 4)
        Global.navigateSideBar.openPage('Store')
    })
})
