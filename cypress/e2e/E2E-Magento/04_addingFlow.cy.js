import { describe, before,beforeEach, afterEach, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/VariablesMagento.cy';
import Authorization, { } from "../../Pages/components/Magento/Authorization";
import LoginFormPage, { } from "../../Pages/components/Magento/LoginFormPage";
import BuyingFormPage, { } from "../../Pages/components/Magento/BuyingFormPage";
import BasketFormPage from '../../Pages/components/Magento/BasketFormPage';
import ShippingFormPage, { } from "../../Pages/components/Magento/ShippingFormPage";


describe('E2E-Correct process of adding a product to the cart', () => {
    before(()=>{
        cy.visit(originDomain)
    })
    beforeEach (() => {
        cy.clearCookies();
        Authorization.clickOnSignInButton();
        LoginFormPage.fillEmail();
        LoginFormPage.fillPassword();
        LoginFormPage.clickOnSignInButton2();
    });
    afterEach(()=>{
        Authorization.clickOnTheBMList();
        Authorization.clickOnSignOutButton();

        // cy.wait(10000)
        // const logout = `${originDomain}`;
        // cy.url().should('be.visible').should('eq', logout);
    })

    it('Should go to mens category and choose red men jacket and add to basket', () => {
        BuyingFormPage.triggerOnMensTab();
        BuyingFormPage.triggerOnMensTops();
        BuyingFormPage.clickOnMensJackets();
        BuyingFormPage.clickOnJacket();
        BuyingFormPage.clickOnJacket1();
        BuyingFormPage.clickOnLsize();
        BuyingFormPage.chooseYellowColour();
        BuyingFormPage.clickOnAddToCartButton();

        const succesMessage = "You added Taurus Elements Shell to your shopping cart."
        cy.get(".message-success").should('contain', succesMessage).should('be.visible');

    });

    it('Should change quanitity of product and place order', () => {

        BuyingFormPage.clickOnBasket();
        BuyingFormPage.clickOnEditBasket();
        BuyingFormPage.changeQtyOfProduct();
        cy.wait(5000)
        BasketFormPage.clickProccedToCheckoutBTN();

        ShippingFormPage.clickNextButton();
        ShippingFormPage.clickPlaceOrderButton();
        const orderMessage = "Thank you for your purchase!"
        cy.get(".base").should('contain', orderMessage)

    });
})