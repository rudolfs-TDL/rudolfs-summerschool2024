describe('invalid signup', () => {
    beforeEach(() => {
        cy.visit('/sign-up')
    })

    it(`check signup form is invalid with empty fields`, () => {
        // check that the error message is correct
        cy.getByTestId('first-name-input')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill in this field.')

        // check that the empty form is invalid
        cy.get('form').filter(':invalid').should('exist')

        // check that filled form is valid
        cy.getByTestId('first-name-input').type('Firstname')
        cy.getByTestId('last-name-input').type('Surname')
        cy.getByTestId('email-input').type('test123@test123.com')
        cy.getByTestId('password-input').type('test123')
        cy.get('form').filter(':invalid').should('not.exist')

        // check that empty firstname makes form invalid
        cy.getByTestId('first-name-input').clear()
        cy.get('form').filter(':invalid').should('exist')
    })
})
