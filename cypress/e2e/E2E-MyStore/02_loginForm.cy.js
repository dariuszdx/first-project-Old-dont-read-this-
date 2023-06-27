import { beforeEach, before } from 'mocha';
import loginFormPage, { } from '../../Pages/components/loginFormPage';
import { visitMainPage } from "../../Pages/components/mainPage";
import { userEmail, password } from '../../Pages/components/variables.cy';
const originDomain = 'http://www.automationpractice.pl/index.php?'

describe("E2E - Logging as existing user", () => {
    before(() => {
        cy.visitMainPage();
        cy.get(".login").click();
    });
    it('Login page should be open ', () => {
        const loginPage = `${originDomain}controller=authentication&back=my-account`;
        cy.url().should('eq', loginPage)
    });

    it("Complete login fields and authorize", () => {
        loginFormPage.fillEmail(userEmail)
        loginFormPage.emailField.should("have.value", userEmail)
        loginFormPage.fillPassword(password)
        loginFormPage.passwordField.should("have.value", password)
        loginFormPage.submitClick
    })

    it('My account page should be open and authorize', () => {
        const authorizedPage = `${originDomain}controller=my-account`;
        cy.url().should('eq', authorizedPage);
    })

    it('"Welcome" message should be visible', () => {
        const welcomeMessage = 'Welcome to your account. Here you can manage all of your personal information and orders.';
        cy.get(".info-account").should('contain', welcomeMessage)
    })

    it('User should be logged out', () => {
        cy.get('.logout').click();
        const logout = `${originDomain}controller=authentication&back=my-account`;
        cy.url().should('eq', logout)
    })
})




