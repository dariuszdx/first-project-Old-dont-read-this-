import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/vaiablesMagento.cy';
import authorization, { } from "../../Pages/components/Magento/authorization";
import loginFormPage, { } from "../../Pages/components/Magento/loginFormPage";

describe('E2E-Logging as existing user', () => {
    before(() => {
        cy.visit(originDomain)
    })

    it('Should open login page and complete login fields', () => {
        authorization.clickOnSignInButton();
        loginFormPage.fillEmail();
        loginFormPage.fillPassword();
        loginFormPage.clickOnSignInButton();
    });
    it('User should be logged out', () => {
        authorization.clickOnTheBMList();
        authorization.clickOnSignOutButton();
        cy.wait(10000);
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    });
})