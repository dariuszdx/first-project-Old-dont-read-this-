/// <reference types= "cypress"/>
import { userEmail, password } from './variables.cy';


describe("E2E - User login", () => {
    it(" Log In ", () => {
        //Go to the page
        cy.visit("/")
        //Assertion 
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')
        //Clicking on the "Sign In" button
        cy.get(".login").click();
        //Assertion 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
        //Entering a value in the E-mail address field
        cy.get("#email").invoke('show').type(userEmail);
        //Assertion
        cy.get("#email").should('have.value', userEmail)
        // Field password + assertion 
        cy.get("#passwd").type(password).should('have.value', password)
        //Clicking on the "Sign In" button
        cy.get("#SubmitLogin > span").click()
        //Assertion 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".info-account").should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')
        //Log out + Assertion
        cy.get('.logout').click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
    })
})