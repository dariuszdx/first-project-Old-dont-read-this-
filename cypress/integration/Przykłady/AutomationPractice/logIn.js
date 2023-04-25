/// <reference types= "cypress"/>
import { userEmail, password } from './variables';


describe("E2E - Logowanie użytkownika", () => {
    it(" Logowanie ", () => {
        //Przejście na strone
        cy.visit("/")
        //Asercja 1
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')
        //Kliknięcie na przycisk "Sign In"
        cy.get(".login").click();
        // Asercja 2 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
        //Wpisane wartości w pole E-mail adress
        cy.get("#email").invoke('show').type(userEmail);
        //Asercja 
        cy.get("#email").should('have.value', 'dariusz.dulemba@gmail.com')
        // Pole password + asercja 
        cy.get("#passwd").type(password).should('have.value', 'Password1!')
        //Kliknięcie na SignIn
        cy.get("#SubmitLogin > span").click()
        //Asercja 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".info-account").should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    })
})