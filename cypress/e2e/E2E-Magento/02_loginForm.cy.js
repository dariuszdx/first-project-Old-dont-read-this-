import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/VariablesMagento.cy';
import Authorization, { } from "../../Pages/components/Magento/Authorization";
import LoginFormPage, { } from "../../Pages/components/Magento/LoginFormPage";

describe('E2E-Logging as existing user', () => {
    before(() => {
        cy.visit(originDomain)
    })

    it('Should open login page and complete login fields', () => {

        LoginFormPage.clickOnSignInButton();
        LoginFormPage.fillEmail();
        LoginFormPage.fillPassword();
        LoginFormPage.clickOnSignInButton2();


    });
    it('User should be logged out', () => {

        Authorization.clickOnTheBMList();
        Authorization.clickOnSignOutButton();
        cy.wait(10000);
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    });
})