/// <reference types= "cypress"/>
import { describe, before, it } from 'mocha';
import loginFormPage, { } from '../../Pages/components/loginFormPage';
import { visitMainPage } from "../../Pages/components/mainPage";
import { userEmail, password } from '../../Pages/components/variables.cy';
const originDomain = 'http://www.automationpractice.pl/index.php?';


describe("E2E - Completing address fields", () => {
    before(() => {
        cy.visitMainPage();
        cy.get(".login").click();

        it('Authentication page should be open', () => {
            const loginPage = `${originDomain}controller=authentication&back=my-account`;
            cy.url().should('eq', loginPage);
        })
    })
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

    // Verify that the user has successfully logged to the account page
    it('My-account page should be open and authorize', () => {
        const accountPage = `${originDomain}controller=my-account`;
        cy.url().should('eq', accountPage)
    })

    it('"Welcome to your account" message should be visible ', () => {
        const accountPageMessage = "Welcome to your account. Here you can manage all of your personal information and orders."
        cy.get(".info-account").should('contain', accountPageMessage)
    })
    // Click on the "Address" tab and check that the user is taken to the correct page
    it('"My first Address" tab should be open verify', () => {
        cy.get(".myaccount-link-list > :nth-child(1) > a > span").click();
        const addressPage = `${originDomain}controller=address`;
        cy.url().should('eq', addressPage)
    })
    it('Should complete address fields and verify ', () => {

        // Check that the first and last name fields are pre-filled with the user's information
        cy.get("#firstname").should('have.value', 'John')
        cy.get('#lastname').should('have.value', 'Doe')

        // Fill in the remaining fields and check that the values are correct
        cy.get("#company").type('Cotton & Green Leaves')
        cy.get("#company").should('have.value', 'Cotton & Green Leaves')
        cy.get("#address1").type('Krakowska 100')
        cy.get("#address1").should('have.value', 'Krakowska 100')
        cy.get("#address2").type('N/A')
        cy.get("#address2").should('have.value', 'N/A')
        cy.get("#city").type('New York')
        cy.get("#city").should('have.value', 'New York')
        cy.get("#id_state").select("Alabama").should('contain', "Alabama")
        cy.get("#postcode").type('10001').should('have.value', '10001')
        cy.get("#id_country").should('contain', 'United States')
        cy.get("#phone").type(777777777777).should('have.value', 777777777777)
        cy.get("#phone_mobile").type(777777777778).should('have.value', 777777777778)
        cy.get("#other").type('N/A').should('have.value', "N/A")
        cy.get("#alias").should('have.value', "My address")
    })

    it("Address field should be updated succesfully", () => {
        cy.get("#submitAddress > span").click()
        const accountPage1 = `${originDomain}controller=addresses`;
        cy.url().should('eq', accountPage1)
    })

    it('User should be logged out', () => {
        cy.get('.logout').click();
        const logout = `${originDomain}controller=authentication&back=addresses`;
        cy.url().should('eq', logout);
    })
})
