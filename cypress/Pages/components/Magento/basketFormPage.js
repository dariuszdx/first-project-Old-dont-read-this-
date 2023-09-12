class BasketFormPage {
    get proccedToCheckoutBTN() {
        return cy.get(".checkout-methods-items > :nth-child(1) > .action > span").should('be.visible');
    }
    clickProccedToCheckoutBTN() {
        this.proccedToCheckoutBTN.click();
    }
}

export default new BasketFormPage();