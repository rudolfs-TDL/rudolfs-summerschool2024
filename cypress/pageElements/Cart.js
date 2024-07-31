class Cart {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        productLink: () => cy.getByTestId('product-wrapper'),
    }
}

export default new Cart()
