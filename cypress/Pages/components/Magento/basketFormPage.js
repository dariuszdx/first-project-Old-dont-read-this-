class BasketFormPage {
    get proccedToCheckout() {
        return cy.get(".checkout-methods-items > :nth-child(1) > .action > span")
    }
    clickProccedToCheckout(proccedToCheckout) {
        this.proccedToCheckout.click();
    }
}
export default new BasketFormPage();