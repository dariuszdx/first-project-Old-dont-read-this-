/// <reference types="cypress" />

describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => {
        cy.visit("/")

        //Weryfikacja tekstu 
        cy.get('a[title="Contact Us"]').should("contain", "Contact us");
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).to.contain("Contact us")
        })

        //Sprawdzenie czy nie zawiera tekstu
        cy.get('a[title="Contact Us"]').should("not.contain", "asda us")
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).not.to.contain("asda us")
        })

        //Wryfikacja czy znacznik posiada klase
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control")
        })

        //Czy element jest widoczny 
        cy.get("#search_query_top").should("be.visible");
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
        })

        //Weryfikacja ilości pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length", 14)
        cy.get("ul.sf-menu").find("li").then(zakladki => {
            expect(zakladki).to.have.length(14)
        })

        //Weryfikacja wartość css danego elementu
        cy.get("#search_query_top").should("have.css", "line-height", "45px")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.css("line-height", "45px")
        })
    })
})