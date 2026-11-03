class DashboardPage {
  selectors = {
    title: '.oxd-topbar-header-breadcrumb-module',
    grid: '.orangehrm-dashboard-grid',
    userMenu: '.oxd-userdropdown-tab',
    menuSearch: '.oxd-main-menu-search input',
    menuItem: '.oxd-main-menu-item',
  };

  shouldBeLoaded() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(this.selectors.grid).should('be.visible');
    cy.get(this.selectors.title).should('contain', 'Dashboard');
  }

  searchMenu(term) {
    cy.get(this.selectors.menuSearch).clear().type(term);
  }

  menuItems() {
    return cy.get(this.selectors.menuItem);
  }

  logout() {
    cy.get(this.selectors.userMenu).click();
    cy.contains('a', 'Logout').click();
  }
}

export default new DashboardPage();
