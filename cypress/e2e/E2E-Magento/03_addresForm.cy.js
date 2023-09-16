import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/VariablesMagento.cy';
import Authorization, { } from "../../Pages/components/Magento/Authorization";
import LoginFormPage, { } from "../../Pages/components/Magento/LoginFormPage";
import ShippingFormPage, { } from "../../Pages/components/Magento/ShippingFormPage";


describe('E2E-Correct process of adding billing address', () => {
    before(()=>{
        cy.visit(originDomain)
    })
    beforeEach(() => {
        cy.clearCookies();
        Authorization.clickOnSignInButton();
        LoginFormPage.fillEmail();
        LoginFormPage.fillPassword();
        LoginFormPage.clickOnSignInButton2();
    })
    afterEach(()=>{
        Authorization.clickOnTheBMList();
        Authorization.clickOnSignOutButton();
        cy.wait(10000)

        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
        
    });

    it('Should click on my account and fill the fields of billing address', () => {

        cy.contains('Welcome, Darek Dulemba! Change').should('be.visible');

        Authorization.clickOnTheBMList();
        Authorization.clickOnMyAccountButton();
        Authorization.clickOnMyAddresButton();

        ShippingFormPage.fillCompanyName();
        ShippingFormPage.fillStreetAddress();
        ShippingFormPage.fillCityName();
        ShippingFormPage.selectCountry();
        ShippingFormPage.selectStateName();
        ShippingFormPage.fillZipCode();
        ShippingFormPage.fillPhoneNumber();
        ShippingFormPage.clickOnSaveAddresButton();

    });
})