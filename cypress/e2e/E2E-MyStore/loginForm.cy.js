import { beforeEach, before } from 'mocha';
import loginFormPage, { } from '../../Pages/components/loginFormPage';
import { visitMainPage } from "../../Pages/components/mainPage";
import { userEmail, password } from './variables.cy';
const originDomain = 'http://automationpractice.pl'

describe("E2E - Loggin of existing user", () => {
    beforeEach(() => {
        cy.visitMainPage();
        cy.get(".login").click();
    });

    it('Login page should be open ', () => {
        const loginPage = `${originDomain}/index.php?controller=authentication&back=my-account`;
        cy.url().should('eq', loginPage)
    });

    describe("Complete fields and authorize", () => {
        beforeEach(() => {
            loginFormPage.fillEmail(userEmail)
            loginFormPage.emailField.should("have.value", userEmail)
            loginFormPage.fillPassword(password)
            loginFormPage.passwordField.should("have.value", password)
            loginFormPage.submitClick
        })

        it('Authorized page should be open', () => {
            const authorizedPage = `${originDomain}/index.php?controller=my-account`;
            cy.url().should('eq', authorizedPage);
        })

        it('"Welcome" message should be visible', () => {
            const welcomeMessage = 'Welcome to your account. Here you can manage all of your personal information and orders.';
            cy.get(".info-account").should('contain', welcomeMessage)
        })

        it('User should be logged out', () => {
            cy.get('.logout').click();
            const logout = `${originDomain}/index.php?controller=authentication&back=my-account`;
            cy.url().should('eq', logout)
        })
    })
})




