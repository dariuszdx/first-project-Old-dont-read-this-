import { describe, before, beforeEach, afterEach, it } from 'mocha';
import { originDomain } from '../../Pages/components/Magento/VariablesMagento.cy';
import Authorization, { } from "../../Pages/components/Magento/Authorization";
import LoginFormPage, { } from "../../Pages/components/Magento/LoginFormPage";

describe('E2E-Logging as existing user', () => {
    before(()=>{
        cy.visit(originDomain)
    })
    beforeEach(() => {
        cy.clearCookies();
        LoginFormPage.clickOnSignInButton();
        
    })
    afterEach(() => {
        Authorization.clickOnTheBMList();
        Authorization.clickOnSignOutButton();
        
        cy.wait(8000);
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    })

    it('Should login as a user and logout', () => {
        LoginFormPage.fillEmail();
        LoginFormPage.fillPassword();
        LoginFormPage.clickOnSignInButton2();
  })
})