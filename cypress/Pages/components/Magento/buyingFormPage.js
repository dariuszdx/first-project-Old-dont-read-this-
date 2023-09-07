class BuyingFormPage {
    get mensCategory() {
        return cy.get("#ui-id-5 > .ui-menu-icon")
    }
    clickOnMensTab(mensCategory) {
        this.mensCategory.click();
    }
    triggerOnMensTab(mensCategory) {
        this.mensCategory.trigger('mouseover');
    }
    get mensCategoryTops() {
        return cy.get("#ui-id-17 > :nth-child(2)")
    }
    triggerOnMensTops(mensCategoryTops) {
        this.mensCategoryTops.trigger('mouseover');
    }
    get mensCategoryTopsJackets() {
        return cy.get("#ui-id-19 > span")
    }
    clickOnMensJackets(mensCategoryTopsJackets) {
        this.mensCategoryTopsJackets.click();
    }
    get color() {
        return cy.get(':nth-child(4) > .filter-options-title')
    }
    clickOnColorTab(color) {
        this.color.click();
    }
    get redColor() {
        return cy.get('div.swatch-option[option-id="58"]')
    }
    clickOnRedColour(redColor) {
        this.redColor.click();
    }
    get jacket() {
        return cy.get(":nth-child(1) > .filter-options-content > .items > :nth-child(2) > a")
    }
    clickOnJacket() {
        this.jacket.click();
    }
    get addToCartButton() {
        return cy.get("#product-addtocart-button > span");
    }
    clickOnAddToCartButton() {
        this.addToCartButton.click();
    }
    get size() {
        return cy.get("#option-label-size-143-item-168")
    }
    clickOnMsize(size) {
        this.size.click();
    }
    get jacketColour() {
        return cy.get("#option-label-color-93-item-60")
    }
    chooseYellowColour() {
        this.jacketColour.click();
    }
    get basket() {
        return cy.get(".showcart")
    }
    clickOnBasket(basket) {
        this.basket.click();
    }
    get editBasket() {
        return cy.get(":nth-child(7) > .secondary > .action > span").should('be.visible');
    }
    clickOnEditBasket(editBasket) {
        this.editBasket.click();
    }
    get qty() {
        return cy.get('[title="Qty"]')
    }
    changeQtyOfProduct(qty) {
        this.qty.click().clear().type(1)
    }
    get jacket1() {
        return cy.get('.product-image-photo')
    }
    clickOnJacket1() {
        this.jacket1.click();
    }
}
export default new BuyingFormPage();