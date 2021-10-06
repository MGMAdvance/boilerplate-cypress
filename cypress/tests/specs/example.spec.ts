import { Given } from 'cypress-cucumber-preprocessor/steps'
import example from '../pages/page1'

Given('step 1', () => {
  cy.visit('/')
})

Given('step 2', () => {
  example.doSomething().click()
})
