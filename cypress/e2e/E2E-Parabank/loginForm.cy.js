import { beforeEach, before } from 'mocha';
import loginFormPageParabank, { } from "../../Pages/components/loginFormPage-Parabank";
import { visitMainPage } from "../../Pages/components/mainPage";
import { userEmail, password, userEmail1, password1 } from './variables.cy';
const originDomain = 'https://parabank.parasoft.com/parabank/index.htm'

describe("E2E - Logging as existing user", () => {
    before(() => {
        cy.visitMainPageParaBank();
    })

    it('Main page should be open', () => {
        const mainPage = `${originDomain}`;
        cy.url().should('eq', mainPage);
    })

    it("Complete login fields and authorize", () => {
        loginFormPageParabank.fillEmail(userEmail1)
        loginFormPageParabank.emailField.should("have.value", userEmail1)
        loginFormPageParabank.fillPassword(password1)
        loginFormPageParabank.passwordField.should("have.value", password1)
        loginFormPageParabank.submitClick
    })
    it('My account page should be open and authorize', () => {
        const accountPage = `https://parabank.parasoft.com/parabank/overview.htm`;
        cy.url().should('eq', accountPage);
    })

    it('User should be logged out', () => {
        cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        const logout = `${originDomain}?ConnType=JDBC`;
        cy.url().should('eq', logout)
    })
})