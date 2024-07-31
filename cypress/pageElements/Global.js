class Global {
    elements = {
        sideBarBurger: () => cy.getByTestId('nav-menu-button'),
        sideBarLinks: (pageName) =>
            cy.getByTestId('nav-menu-popup').contains('a', pageName),
        logOutButton: () => cy.getByTestId('logout-button').filter(':visible'),
        footerLinks: () => cy.get('footer a'),
    }

    navigateSideBar = {
        openPage: (pageName) => {
            this.elements.sideBarBurger().click()
            this.elements.sideBarLinks(pageName).click()
        },
    }
}

export default new Global()
