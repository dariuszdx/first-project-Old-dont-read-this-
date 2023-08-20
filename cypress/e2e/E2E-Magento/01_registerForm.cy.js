import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/vaiablesMagento.cy';
import authorization, { } from "../../Pages/components/Magento/authorization";
import registerFormPage, { } from "../../Pages/components/Magento/registerFormPage";

describe("E2E-Register a new user", () => {
    before(() => {
        cy.visit(originDomain);
    });

    it('Click on register button', () => {
        authorization.clickOnSignInButton();
        authorization.clickOnCreateAccountButton();

        const registerpage = `${originDomain}customer/account/create/`;
        cy.url().should('eq', registerpage);
    });

    it('Complete registration fields, and create an account', () => {
        registerFormPage.fillFirstName();
        registerFormPage.fillLastName();
        registerFormPage.fillEmail();
        registerFormPage.fillPassword();
        registerFormPage.confirmPassword();
        authorization.clickOnCreateAnAccountButton();

        const accountPage = `${originDomain}customer/account/`;
        cy.url().should('eq', accountPage);

        const createdAccountmessage = 'Thank you for registering with Main Website Store.';
        cy.get(".message-success > div").should('contain', createdAccountmessage);
    });

    it('User should be logged out', () => {
        authorization.clickOnTheBMList();
        authorization.clickOnSignOutButton();
        cy.wait(10000);
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    });
});
