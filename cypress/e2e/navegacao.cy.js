import DashboardPage from '../pages/DashboardPage';
import EmployeeListPage from '../pages/EmployeeListPage';

describe('Navegação autenticada', () => {
  beforeEach(() => {
    cy.fixture('userData').then((users) => cy.login(users.userSuccess));
  });

  it('filtra o menu lateral pela busca', () => {
    cy.visit('/dashboard/index');
    DashboardPage.searchMenu('PIM');
    DashboardPage.menuItems().should('have.length', 1).and('contain', 'PIM');
  });

  it('mostra todos os itens do menu ao limpar a busca', () => {
    cy.visit('/dashboard/index');
    DashboardPage.searchMenu('xyz-inexistente');
    DashboardPage.menuItems().should('have.length', 0);
    cy.get(DashboardPage.selectors.menuSearch).clear();
    DashboardPage.menuItems().its('length').should('be.greaterThan', 5);
  });

  it('lista os funcionários no módulo PIM', () => {
    EmployeeListPage.visit();
    EmployeeListPage.shouldListEmployees();
  });
});
