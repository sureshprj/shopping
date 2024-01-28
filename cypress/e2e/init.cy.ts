/// <reference types="cypress" />
describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/');
  })
  it('application opening', () => {
    cy.get(`[data-testid="login-header"]`).should("exist");
    cy.get(`[data-testid="username"] input`).should("exist");
  })
  it('validation form', () => {
    cy.get(`[data-testid="username"]`).type("test1");
    cy.get(`[data-testid="password"] input`).type("test1");
    //cy.get(`[data-testid="submit"]`).click();
    //cy.get(`.error-msg`).should('have.text','Invalid username or password')
  })
  it('validation form', () => {
    cy.get(`[data-testid="username"]`).type("test");
    cy.get(`[data-testid="password"] input`).type("test");
    cy.get(`[data-testid="submit"]`).click();
    cy.get('.App-header').should('exist')
  })
})