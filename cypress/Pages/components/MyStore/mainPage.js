Cypress.Commands.add('setBaseUrl', () => {
    cy.log(`Setting base URL to: ${Cypress.config().baseUrl}`);
    cy.visit('/');
});