class buyingFormPage {
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
    get redJacket() {
        return cy.get(".products > :nth-child(3)")
    }
    clickOnRedJacket(redJacket) {
        this.redJacket.click();
    }
    get addToCartButton() {
        return cy.get("#product-addtocart-button > span")
    }
    clickOnAddToCartButton(addToCartButton) {
        this.addToCartButton.click();
    }
    get size() {
        return cy.get("#option-label-size-143-item-168")
    }
    clickOnMsize(size) {
        this.size.click();
    }
    get jacketColour() {
        return cy.get("#option-label-color-93-item-58")
    }
    chooseRedColour() {
        this.jacketColour.click();
    }
    get basket() {
        return cy.get(".showcart")
    }
    clickOnBasket(basket) {
        this.basket.click();
    }
    get editBasket() {
        return cy.get(":nth-child(7) > .secondary > .action > span")
    }
    clickOnEditBasket(editBasket) {
        this.editBasket.click();
    }
    get qty() {
        return cy.get('[title="Qty"]')
    }
    changeQtyOfProduct(qty) {
        this.qty.click().clear().type(10)
    }
}
export default new buyingFormPage();