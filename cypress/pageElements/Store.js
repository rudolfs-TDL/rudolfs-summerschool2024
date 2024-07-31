class Store {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        productLink: () => cy.getByTestId('product-wrapper'),
    }
}

export default new Store()
