class Checkout {
    elements = {
        deliveryOptionRadio: (option) =>
            cy.getByTestId('delivery-option-radio').contains(option),
        continueToPaymentButton: () =>
            cy.getByTestId('submit-delivery-option-button'),
        continueToReview: () => cy.getByTestId('submit-payment-button'),
        submitOrderButton: () => cy.getByTestId('submit-order-button'),
        checkoutButton: () => cy.getByTestId('checkout-button'),
        firstNameInput: () => cy.getByTestId('shipping-first-name-input'),
        lastNameInput: () => cy.getByTestId('shipping-last-name-input'),
        addressInput: () => cy.getByTestId('shipping-address-input'),
        postalCodeInput: () => cy.getByTestId('shipping-postal-code-input'),
        cityInput: () => cy.getByTestId('shipping-city-input'),
        countrySelect: () => cy.getByTestId('shipping-country-select'),
        submitAddressButton: () => cy.getByTestId('submit-address-button'),
    }
}
