describe('API REST - funcionários (PIM)', () => {
  const endpoint = '/api/v2/pim/employees?limit=5&offset=0';

  it('retorna 401 sem sessão autenticada', () => {
    cy.clearCookies();
    cy.request({ url: endpoint, failOnStatusCode: false }).its('status').should('eq', 401);
  });

  it('retorna a lista paginada com sessão autenticada', () => {
    cy.fixture('userData').then((users) => cy.login(users.userSuccess));
    cy.request(endpoint).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an('array').and.have.length.of.at.most(5);
      expect(res.body.meta.total).to.be.greaterThan(0);
      res.body.data.forEach((emp) => {
        expect(emp).to.include.keys('empNumber', 'firstName', 'lastName', 'employeeId');
      });
    });
  });
});
