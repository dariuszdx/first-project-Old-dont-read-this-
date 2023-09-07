import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/VariablesMagento.cy';
import Authorization, { } from "../../Pages/components/Magento/Authorization";
import RegisterFormPage, { } from "../../Pages/components/Magento/RegisterFormPage";

describe("E2E-Register a new user", () => {
    before(() => {
        cy.visit(originDomain);
    });

    it('Click on register button', () => {

        Authorization.clickOnSignInButton();
        Authorization.clickOnCreateAccountButton();

        const registerpage = `${originDomain}customer/account/create/`;
        cy.url().should('eq', registerpage);
    });

    it('Complete registration fields, and create an account', () => {

        RegisterFormPage.fillFirstName();
        RegisterFormPage.fillLastName();
        RegisterFormPage.fillEmail();
        RegisterFormPage.fillPassword()
        RegisterFormPage.confirmPassword();
        Authorization.clickOnCreateAnAccountButton();

        const accountPage = `${originDomain}customer/account/`;
        cy.url().should('eq', accountPage);

        const createdAccountmessage = 'Thank you for registering with Main Website Store.';
        cy.get(".message-success > div").should('contain', createdAccountmessage);
    });

    it('User should be logged out', () => {

        Authorization.clickOnTheBMList();
        Authorization.clickOnSignOutButton();
        cy.wait(10000);
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    });
});
