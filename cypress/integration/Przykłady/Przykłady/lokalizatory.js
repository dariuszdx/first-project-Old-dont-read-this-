/// <reference types="cypress" />

describe("E2E - Lesson ", () => {
    it("Lokalizatorach", () => {
        cy.visit("/")

        //Po znaczniku
        cy.get("a");

        //Indetyfikator 
        cy.get("#search_query_top")

        //Po klasie 
        cy.get(".form-control")

        //Po atrubutach 
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Dokładniejszy atrybut wraz z podaniem znacznika 
        cy.get('input[placeholder="Search"]')

        //Pobieranie elementów po kilku atrubutacj
        cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //Zalecana praktyka pobierania elementów
        cy.get('[data-cy="wyszukiwarka"]')
    })

    it.only("Lokalizoty część 2", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact Us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").first()
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
    })

})