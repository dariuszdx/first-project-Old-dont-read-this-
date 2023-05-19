/// <reference types= "cypress"/>
import { userEmail, password } from './variables.cy';
import LogingFormPage, { LoginFormPage } from '../../Pages/componetns/LogingFormPage';

describe("E2E - Completing the address fields", () => {
    it(" Address should be updated ", () => {
        // Visit home page and verify URL and title
        cy.visit("/")
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')

        // Click on the "Sign In" button and verify URL
        cy.get(".login").click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')

        // Enter email and password and click on the "Sign in" button and verify fields
        LogingFormPage.fillEmail(userEmail)
        LogingFormPage.emailField.should("have.value", userEmail)
        LogingFormPage.fillPassword(password)
        LogingFormPage.passwordField.should("have.value", password)
        LogingFormPage.submitClick

        // Verify that the user has successfully logged to the account page
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".info-account").should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')

        // Click on the "Address" tab and check that the user is taken to the correct page
        cy.get(".myaccount-link-list > :nth-child(1) > a > span").click()
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=address')

        // Check that the first and last name fields are pre-filled with the user's information
        cy.get("#firstname").should('have.value', 'Dariusz')
        cy.get('#lastname').should('have.value', 'Bamboo')

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

        // Click on the "Save" and verify URL
        cy.get("#submitAddress > span").click()
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=addresses')

        // Click on the "Sign Out" button and verify URL
        cy.get('.logout').click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=addresses')

    })
})