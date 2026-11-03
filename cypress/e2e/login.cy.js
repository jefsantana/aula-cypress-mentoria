import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

describe('Login', () => {
  beforeEach(function () {
    cy.fixture('userData').as('users');
  });

  it('entra com credenciais válidas e abre o Dashboard', function () {
    LoginPage.login(this.users.userSuccess.username, this.users.userSuccess.password);
    DashboardPage.shouldBeLoaded();
  });

  it('bloqueia credenciais inválidas e mostra alerta', function () {
    LoginPage.login(this.users.userFail.username, this.users.userFail.password);
    LoginPage.shouldShowInvalidCredentials();
  });

  it('exige usuário e senha quando os campos estão vazios', () => {
    LoginPage.visit();
    LoginPage.submit();
    LoginPage.shouldShowRequired(2);
  });

  it('encerra a sessão no logout', function () {
    // O OrangeHRM cancela requisições pendentes ao sair e gera uma promise rejeitada
    // que não é falha do fluxo de logout; ignoramos só esse caso.
    cy.on('uncaught:exception', (err, runnable, promise) => !promise);
    LoginPage.login(this.users.userSuccess.username, this.users.userSuccess.password);
    DashboardPage.shouldBeLoaded();
    DashboardPage.logout();
    cy.location('pathname').should('include', '/auth/login');
  });
});
