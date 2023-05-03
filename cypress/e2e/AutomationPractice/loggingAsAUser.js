/// <reference types= "cypress"/>
import { userEmail, password } from './variables.cy';


describe("E2E - Loggin of existing user", () => {
    it(" Should be logged as an existing user ", () => {
        // Visit home page and verify URL and title
        cy.visit("/")
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')

        // Click on the "Sign In" button and verify URL
        cy.get(".login").click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')

        // Enter email and password and click on the "Sign in" button and verify fields
        cy.get("#email").invoke('show').type(userEmail);
        cy.get("#email").should('have.value', userEmail)
        cy.get("#passwd").type(password).should('have.value', password)
        cy.get("#SubmitLogin > span").click()

        // Verify that the user has successfully logged to the account page 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".info-account").should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')

        // Click on the "Sign Out" button and verify URL
        cy.get('.logout').click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
    })
})