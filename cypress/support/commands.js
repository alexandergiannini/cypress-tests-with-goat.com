Cypress.Commands.add('ariaLabel', (attr) => {
    return cy.get(`[aria-label="${attr}"]`)
});