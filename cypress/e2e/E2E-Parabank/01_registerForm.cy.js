/// <reference types= "cypress"/>
import { visitMainPageParaBank } from "../../Pages/components/mainPage";
import { describe, before, it, beforeEach } from 'mocha';
import { userEmail, password, userEmail1, password1 } from '../../Pages/components/variablesParaBank.cy';

const originDomain = 'https://parabank.parasoft.com';



describe("E2E - Register a new user", () => {
    before(() => {
        cy.visitMainPageParaBank();
    })

    it('Main page should be open', () => {
        const mainPage = `${originDomain}/parabank/index.htm`;
        cy.url().should('eq', mainPage);
    });

    it('Register page should be open', () => {
        cy.get("#loginPanel > :nth-child(3) > a").click();
        cy.url().then((url) => {
            const isRegisterPage = url.includes('/parabank/register.htm');
            expect(isRegisterPage).to.be.true;
        });
    })

    it('Should complete the registration form and verify fields', () => {

        cy.get('input[name="customer.firstName"]').type('Dariusz').should('have.value', 'Dariusz')

        cy.get('input[name="customer.lastName"]').type('Dulemba').should('have.value', 'Dulemba')

        cy.get('input[name="customer.address.street"]').type('Litewska 101').should('have.value', "Litewska 101")

        cy.get('input[name="customer.address.city"]').type('Rzeszów').should('have.value', "Rzeszów")

        cy.get('input[name="customer.address.state"]').type('Podkarpacie').should('have.value', "Podkarpacie")

        cy.get('input[name="customer.address.zipCode"]').type('37500').should('have.value', "37500")

        cy.get('input[name="customer.phoneNumber"]').type('785987432').should('have.value', "785987432")

        cy.get('input[name="customer.ssn"]').type('123456789').should('have.value', "123456789")

        cy.get('input[name="customer.username"]').type(userEmail1).should('have.value', userEmail1)

        cy.get('input[name="customer.password"]').type(password1).should('have.value', password1)

        cy.get('input[name="repeatedPassword"]').type(password1).should('have.value', password1)

        cy.get('[colspan="2"] > .button').click();
    });

    it("Should display success message after registration", () => {
        cy.get('#rightPanel > p').should('contain.text', 'Your account was created successfully. You are now logged in.');
    });

    it("Login page should be open", () => {
        const loginPage = `${originDomain}/parabank/register.htm`;
        cy.url().should('eq', loginPage);
    })
    it("User should be logged out", () => {
        cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        const mainPage2 = `${originDomain}/parabank/index.htm?ConnType=JDBC`;
        cy.url().should('eq', mainPage2);

    })
})
