describe('Test logowania na stronie edu.goit.global z innymi danymi', () => {
    it('Powinien zalogować użytkownika', () => {

      cy.visit('https://www.edu.goit.global/account/login');
      cy.login('testowyqa@qa.team', 'QA!automation-1');
      cy.get('#open-navigation-menu-mobile').click();
      cy.contains('Log out').click();
      cy.url().should('include', '/account/login');
    });
  });