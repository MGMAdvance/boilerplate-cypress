import { Before } from 'cypress-cucumber-preprocessor/steps'

Before({ tags: '@Smoke' }, () => {
  cy.log('execute hook')
})
