import { beforeEach, before } from 'mocha';
import loginFormPage, { } from '../../Pages/components/loginFormPage';
import { visitMainPage } from "../../Pages/components/mainPage";
import { userEmail, password } from '../../Pages/components/variables.cy';
const originDomain = 'https://magento.softwaretestingboard.com'

describe('E2E-Logging as existing user', () => {
    before(() => {
        cy.visit(originDomain)
        cy.get('.panel > .header > .authorization-link > a').click();
    })

    it('Login page should be open', () => {
        const loginPage = `${originDomain}/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/`;
        cy.url().should('eq', loginPage)
    });

    it('Complete login fields and authorize', () => {

    });
})