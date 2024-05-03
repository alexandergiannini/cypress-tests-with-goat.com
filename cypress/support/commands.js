Cypress.Commands.add('ariaLabel', (attr) => {
    return cy.get(`[aria-label="${attr}"]`)
});

Cypress.Commands.add('dataVar', (attr) => {
    return cy.get(`[data-var="${attr}"`)
});

Cypress.Commands.add('titleAttr', (attr) => {
    return cy.get(`[title="${attr}"`)
});