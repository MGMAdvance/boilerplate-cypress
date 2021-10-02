/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Description: Declare your commands here
     * @param {string | Cypress.Chainable} element CSS selector or Cypress Element
     * @example
     * cy.example('div.example')
     */
    example(element: string | Cypress.Chainable): Cypress.Chainable
  }
}
