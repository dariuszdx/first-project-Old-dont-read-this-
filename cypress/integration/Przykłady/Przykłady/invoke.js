/// <reference types="cypress" />

describe("E2E - Metoda Invoke", () => {
    it("Invoke", () => {
        cy.visit("/")

        //Pobieranie wartości z danego elementu
       cy.get('[title="Contact Us"]').invoke("text").then(tekst => {
           cy.log(tekst)
       })

       //Uzyskanie dostępu do wartości atrybutu
       cy.get('[title="Contact Us"]').invoke("attr", "href").then(link => {
           cy.log(link)
       })

       cy.get('[title="Contact Us"]').invoke("attr", "title").then(title => {
        cy.log(title)
    })

    //Pobieranie wartości value
    cy.get("#search_query_top").type("Przykładowa wartość").invoke("prop", "value").then(wartosc => {
        cy.log(wartosc)
    })

    })
})