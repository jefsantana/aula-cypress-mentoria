class EmployeeListPage {
  selectors = {
    title: '.oxd-topbar-header-breadcrumb-module',
    table: '.oxd-table',
    rows: '.oxd-table-card',
  };

  visit() {
    cy.visit('/pim/viewEmployeeList');
  }

  shouldListEmployees() {
    cy.get(this.selectors.title).should('contain', 'PIM');
    cy.get(this.selectors.table).should('be.visible');
    cy.contains(/Records? Found/).should('be.visible');
    cy.get(this.selectors.rows).its('length').should('be.greaterThan', 0);
  }
}

export default new EmployeeListPage();
