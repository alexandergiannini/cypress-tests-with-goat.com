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
    cy.ariaLabel('main-menu, Men, Shoes, Lifestyle').click();
    cy.get('.wall-header__title').contains('Mens Lifestyle Shoes').should('be.visible');
  });

  it('should select favorites as a logged out user', () => {
    cy.ariaLabel('Favorites').eq(1).click();
    cy.ariaLabel('Enter your email to join us or sign in.').should('be.visible');
  });

  it('should select nav cart as a user who does not have any items', () => {
    cy.get('#nav-cart').scrollIntoView().click();
    cy.get('p.css-pm6c6.e14faaxk0').contains('There are no items in your bag.').should('be.visible');
  });

  it('should select Help within the footer', () => {
    cy.ariaLabel('main-footer, main-footer, Help').scrollIntoView().click();
    cy.url().should('include', '/help');
  });

  it('should select Shop Mens New Arrivals', () => {
    cy.ariaLabel("Shop Men's New Arrivals ").scrollIntoView().click();
    cy.get('.wall-header__title').contains("Men's New Releases").should('be.visible');
  });

  it('should select Converse symbol', () => {
    cy.ariaLabel('Converse').eq(0).click();
    cy.get('.wall-header__title').contains("Converse Shoes").should('be.visible');
  });

  it('should select Air Max component', () => {
    cy.ariaLabel('Air Max').eq(0).scrollIntoView().click();
    cy.get('.wall-header__title').contains("Air Max Shoes").should('be.visible');
  });

  it('should select Jordan New Arrivals Card', () => {
    cy.ariaLabel('New Arrivals Jordan Apparel').eq(1).scrollIntoView().click();
    cy.get('.wall-header__title').contains("Jordan New Releases").should('be.visible');
  });

  it('should select Help within navigation', () => {
    cy.ariaLabel('Help').eq(0).click();
    cy.get('.pre-help-dropdown-menu-item').contains('Order Status').click();
    cy.get('.headline-4').contains('View or Manage Your Order').should('be.visible');
  });

  it('should select Nike Member Card at bottom of home page', () => {
    cy.ariaLabel('Member Product Your Exclusive Access').scrollIntoView().click();
    cy.get('div._1ZsY6zh2.headline-3').contains('Nike Membership').should('be.visible');
  });
});