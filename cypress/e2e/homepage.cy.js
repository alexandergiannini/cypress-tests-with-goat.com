describe('Nike homepage tests', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('conducts a search', () => {
    cy.get('#VisualSearchInput').type("Air Force 1");
    cy.get('.pre-search-btn').scrollIntoView().click();
    cy.get('.wall-header__title').contains('Air Force 1').should('be.visible');
  });

  it('should select an item within the Men Nav Item', () => {
    cy.ariaLabel('Men').trigger('mouseover');
    cy.ariaLabel('main-menu, Men, All Shoes, Lifestyle').click();
    cy.get('.wall-header__title').contains('Mens Lifestyle Shoes').should('be.visible');
  });
})