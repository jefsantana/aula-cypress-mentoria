import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('login - sucesso', () => {    
    cy.visit('/auth/login') 
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname', { timeout: 10000 }).should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid, { timeout: 10000 }).should('exist')
    cy.get(selectorList.selectionTitleTopBar).contains('Dashboard')
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert, { timeout: 10000 }).should('be.visible')
    cy.location('pathname', { timeout: 10000 }).should('equal', '/web/index.php/auth/login')
  })
})
