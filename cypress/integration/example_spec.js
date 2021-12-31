describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/login');
    cy.get('[data-cy=submit]').type('fake@email.com');
    cy.get('[data-cy=password]').type('123456');
  });
});
