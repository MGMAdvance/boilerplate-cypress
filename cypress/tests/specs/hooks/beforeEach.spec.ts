import { Before } from 'cypress-cucumber-preprocessor/steps'
import exampleApi from '../../services/example'

Before({ tags: '@Smoke' }, () => {
  cy.log('execute hook')
  exampleApi.example()
})
