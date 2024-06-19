const baseUrl = 'http://localhost:5000';

describe('Pokedex static server', function () {
  it('serves the front page properly', function () {
    cy.visit(baseUrl);
    cy.contains('ivysaur');
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    );
  });
  it('navigates to a particular pokemon page', function () {
    cy.visit(baseUrl);
    cy.contains('ivysaur').click();
    cy.url().should('eq', `${baseUrl}/pokemon/ivysaur`);
    cy.contains('chlorophyll');
  });
});
