class Product {
    elements = {
        optionButton: () => cy.getByTestId('option-button').contains('L'),
        addProductButton: () => cy.getByTestId('add-product-button'),
    }
}

export default new Product()
