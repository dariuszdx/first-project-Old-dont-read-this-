Cypress.Commands.add('visitMainPage', () => {
    cy.visit("/");
    cy.url().should('eq', 'http://automationpractice.pl/index.php');
    cy.title().should('eq', 'My Store')
})
Cypress.Commands.add('visitMainPageParaBank', () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm');
    // cy.title().should('eq', 'My Store')
})


