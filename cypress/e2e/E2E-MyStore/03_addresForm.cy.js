import { describe, before, it } from 'mocha';
import { originDomain } from "../../Pages/components/MyStore/variables.cy";
import authorization, { } from "../../Pages/components/MyStore/authorization";
import loginFormPage from '../../Pages/components/MyStore/loginFormPage';
import addressFormPage from '../../Pages/components/MyStore/addressFormPage';



describe("E2E - Completing address fields", () => {
    before(() => {
        cy.visit('/');
        authorization.clickLogin();
    });

    it("Complete login fields and authorize", () => {
        loginFormPage.fillEmail();
        loginFormPage.fillPassword();
        loginFormPage.signInClick();

        const accountPageMessage = "Welcome to your account. Here you can manage all of your personal information and orders."
        cy.get(".info-account").should('contain', accountPageMessage)

    })
    it('Should open address tab complete address fields and verify ', () => {

        addressFormPage.clickOnAddressTab();
        addressFormPage.fillFirstName();
        addressFormPage.fillLastName();
        addressFormPage.fillAddressName1();
        addressFormPage.fillAddressName2();
        addressFormPage.fillCityName();
        addressFormPage.chooseStateName();
        addressFormPage.fillPostCode();
        addressFormPage.fillCountryName();
        addressFormPage.fillHomePhoneNumber();
        addressFormPage.fillMobilePhoneNumber();
        addressFormPage.fillExtraInformationField();
        addressFormPage.confirmMyAddresTitle();

        const accountPage1 = `${originDomain}/index.php?controller=address`;
        cy.url().should('eq', accountPage1)
    })

    it('User should be logged out', () => {
        authorization.clickLogout();
        const logout = `${originDomain}/index.php?controller=authentication&back=addresses`;
        cy.url().should('eq', logout);
    })
})
