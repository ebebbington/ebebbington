/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1337', {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
      }
    })
  })

  // https://on.cypress.io/interacting-with-elements

  it('GitHub icon should work', () => {
    // https://on.cypress.io/type
    cy.get('#github-icon')
      .click()
    cy.window().its('open').should('be.called')
  })
})