const example = {
  doSomething(): Cypress.Chainable {
    return cy.get('#someSelector')
  },
}

export default { ...example }
