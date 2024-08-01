describe('footer links', () => {
    const socialLinks = {
        web: 'https://www.testdevlab.com/',
        linkedIn: 'https://www.linkedin.com/company/testdevlab/',
        facebook: 'https://www.facebook.com/TestDevLab/',
        x: 'https://twitter.com/testdevlab',
    }

    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
    })

    Object.values(socialLinks).forEach((link) => {
        it(`check footer icon link for ${link}`, () => {
            cy.visit('/')
            cy.getByHref(link)
        })
    })
})
