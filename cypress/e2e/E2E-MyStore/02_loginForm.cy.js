import { describe, before, it } from 'mocha';
import { originDomain } from '../../Pages/components/variables.cy';
import authorization from "../../Pages/components/authorization";
import loginFormPage from '../../Pages/components/loginFormPage';

describe("E2E - Logging as an existing user", () => {
    before(() => {
        cy.visit('/');
        authorization.clickLogin();
    });
    it("Complete login fields and authorize", () => {

        loginFormPage.fillEmail();
        loginFormPage.fillPassword();
        loginFormPage.signInClick();

        const welcomeMessage = 'Welcome to your account. Here you can manage all of your personal information and orders.';
        cy.get(".info-account").should('contain', welcomeMessage);
    });
    it('User should be logged out', () => {
        authorization.clickLogout();
        const logout = `${originDomain}/index.php?controller=authentication&back=my-account`;
        cy.url().should('eq', logout);
    });
});