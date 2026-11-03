import LoginPage from '../pages/LoginPage';

// Faz login uma vez e reaproveita a sessão entre os testes (mais rápido e estável)
Cypress.Commands.add('login', (user) => {
  cy.session(['login', user.username], () => {
    LoginPage.login(user.username, user.password);
    cy.location('pathname').should('include', '/dashboard');
  });
});
