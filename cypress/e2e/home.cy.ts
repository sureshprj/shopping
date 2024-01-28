/// <reference types="cypress" />
describe('template spec', () => {
    before(()=>{
       
    })
    beforeEach(()=>{
        cy.login("test","test")
        cy.visit('http://localhost:3000')
    })
    it('application home page', () => {
        cy.get('.App-header').should('exist')
    })
    it('application card page', () => {
        cy.get(`[data-testid="show-card"]`).click();
        cy.get(`[data-testid="item-list"]`).should('exist');
        cy.log("hellow")
    })
    
  })