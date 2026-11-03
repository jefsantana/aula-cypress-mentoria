class LoginPage {
  selectors = {
    username: "[name='username']",
    password: "[name='password']",
    submit: "[type='submit']",
    alert: "[role='alert']",
    requiredMessage: '.oxd-input-field-error-message',
  };

  visit() {
    cy.visit('/auth/login');
  }

  fill(username, password) {
    if (username) cy.get(this.selectors.username).type(username);
    if (password) cy.get(this.selectors.password).type(password, { log: false });
  }

  submit() {
    cy.get(this.selectors.submit).click();
  }

  login(username, password) {
    this.visit();
    this.fill(username, password);
    this.submit();
  }

  shouldShowInvalidCredentials() {
    cy.get(this.selectors.alert).should('be.visible').and('contain', 'Invalid credentials');
    cy.location('pathname').should('include', '/auth/login');
  }

  shouldShowRequired(count) {
    cy.get(this.selectors.requiredMessage)
      .should('have.length', count)
      .each(($el) => {
        cy.wrap($el).should('have.text', 'Required');
      });
  }
}

export default new LoginPage();
