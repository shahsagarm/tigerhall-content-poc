describe('visit the content page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders content page correctly', () => {
    cy.get('#container').should('exist');
    cy.get('.content-preview').should('have.length', 20);
  });

  it('can search content', () => {
    const searchTerm = 'Hiring';
    cy.get('#container input').type(searchTerm);
    cy.get('.content-preview').should('have.length', 3);
  });
});
