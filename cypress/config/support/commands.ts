Cypress.Commands.add(
  'example',
  (element: string | Cypress.Chainable): Cypress.Chainable => {
    // Your code here
    return cy.wrap(element)
  }
)
