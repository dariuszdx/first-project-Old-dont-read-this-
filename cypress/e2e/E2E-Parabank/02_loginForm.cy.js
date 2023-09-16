import { describe, before, it, } from 'mocha';
import { originDomain } from '../../Pages/components/ParaBank/variablesParaBank.cy';
import authorization from '../../Pages/components/ParaBank/authorization';
import loginFormPageParabank from '../../Pages/components/ParaBank/loginFormPage-Parabank';

describe("E2E - Logging as existing user", () => {
    before(() => {
        cy.visit(originDomain)
        const mainPage = `${originDomain}/parabank/index.htm`;
        cy.url().should('eq', mainPage);
    })

    it("Complete login fields and authorize", () => {
        loginFormPageParabank.clickLoginButton();
        loginFormPageParabank.fillUserName();
        loginFormPageParabank.fillPassword();
        loginFormPageParabank.submitClick();
    })
    it('User should be logged out', () => {
        authorization.clickLogoutButton();
        const logout = `${originDomain}/parabank/index.htm?ConnType=JDBC`;
        cy.url().should('eq', logout)
    })
})

