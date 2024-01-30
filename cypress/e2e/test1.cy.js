describe('Test logowania na stronie edu.goit.global', () => {
    it('Powinien zalogować użytkownika', () => {

      cy.visit('https://www.edu.goit.global/account/login');
      cy.login('user888@gmail.com', '1234567890');
      cy.get('#open-navigation-menu-mobile').click();
      cy.contains('Log out').click();
      cy.url().should('include', '/account/login');
    });
  });