import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/vaiablesMagento.cy';
import authorization, { } from "../../Pages/components/Magento/authorization";
import loginFormPage, { } from "../../Pages/components/Magento/loginFormPage";
import buyingFormPage, { } from "../../Pages/components/Magento/buyingFormPage";
import BasketFormPage from '../../Pages/components/Magento/basketFormPage';
import shippingFormPage, { } from "../../Pages/components/Magento/shippingFormPage";


describe('E2E-Correct process of adding a product to the cart', () => {
    before(() => {
        cy.visit(originDomain)
    })

    it('Should open login page and complete login fields', () => {
        authorization.clickOnSignInButton();
        loginFormPage.fillEmail();
        loginFormPage.fillPassword();
        loginFormPage.clickOnSignInButton();
    });

    it('Should go to mens category and choose red men jacket with size M', () => {
        buyingFormPage.triggerOnMensTab();
        buyingFormPage.triggerOnMensTops();
        buyingFormPage.clickOnMensJackets();
        buyingFormPage.clickOnColorTab();
        buyingFormPage.clickOnRedColour();
        buyingFormPage.clickOnRedJacket();
        buyingFormPage.clickOnMsize();
        buyingFormPage.chooseRedColour();
        buyingFormPage.clickOnAddToCartButton();

        const succesMessage = "You added Mars HeatTech™ Pullover to your shopping cart."
        cy.get(".message-success").should('contain', succesMessage)

    });
    it('Should go to basket and change quantity of product', () => {
        buyingFormPage.clickOnBasket();
        buyingFormPage.clickOnEditBasket();
        buyingFormPage.changeQtyOfProduct();
        cy.wait(1000)
        BasketFormPage.clickProccedToCheckout();

    });
    it('Should click on procced to checkout and fill the fields', () => {
        shippingFormPage.fillCompanyName();
        shippingFormPage.fillStreetAddress();
        shippingFormPage.fillCityName();
        shippingFormPage.selectCountry();
        shippingFormPage.selectStateName();
        shippingFormPage.fillZipCode();
        shippingFormPage.fillPhoneNumber();
        cy.wait(10000)
        shippingFormPage.clickNextButton();

    });
    it('Should place order', () => {
        shippingFormPage.clickPlaceOrderButton();
        cy.wait(10000)

        const orderMessage = "Thank you for your purchase!"
        cy.get(".base").should('contain', orderMessage)

    });
    it('User should be logged out', () => {
        authorization.clickOnTheBMList();
        authorization.clickOnSignOutButton();
        cy.wait(10000);
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    });
})