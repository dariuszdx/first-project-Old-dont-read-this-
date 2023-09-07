import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/VariablesMagento.cy';
import Authorization, { } from "../../Pages/components/Magento/Authorization";
import LoginFormPage, { } from "../../Pages/components/Magento/LoginFormPage";
import BuyingFormPage, { } from "../../Pages/components/Magento/BuyingFormPage";
import BasketFormPage from '../../Pages/components/Magento/BasketFormPage';
import ShippingFormPage, { } from "../../Pages/components/Magento/ShippingFormPage";


describe('E2E-Correct process of adding a product to the cart', () => {
    before(() => {
        cy.visit(originDomain)
    })

    it('Should open login page and complete login fields', () => {
        Authorization.clickOnSignInButton();
        LoginFormPage.fillEmail();
        LoginFormPage.fillPassword();
        LoginFormPage.clickOnSignInButton2();
    });

    it('Should go to mens category and choose red men jacket and add to basket', () => {
        BuyingFormPage.triggerOnMensTab();
        BuyingFormPage.triggerOnMensTops();
        BuyingFormPage.clickOnMensJackets();
        BuyingFormPage.clickOnJacket();
        BuyingFormPage.clickOnJacket1();
        BuyingFormPage.clickOnMsize();
        BuyingFormPage.chooseYellowColour();
        BuyingFormPage.clickOnAddToCartButton();

        const succesMessage = "You added Taurus Elements Shell to your shopping cart."
        cy.get(".message-success").should('contain', succesMessage)

        BuyingFormPage.clickOnBasket();
        BuyingFormPage.clickOnEditBasket();
        BuyingFormPage.changeQtyOfProduct();
        cy.wait(10000)
        BasketFormPage.clickProccedToCheckoutBTN();


    });
    it('Should place order', () => {

        ShippingFormPage.clickNextButton();
        ShippingFormPage.clickPlaceOrderButton();
        const orderMessage = "Thank you for your purchase!"
        cy.get(".base").should('contain', orderMessage)

    });
    it('User should be logged out', () => {
        Authorization.clickOnTheBMList();
        Authorization.clickOnSignOutButton();
        cy.wait(10000)
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    })
})