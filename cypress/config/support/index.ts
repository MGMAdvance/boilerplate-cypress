import './commands'
import './overwriteCommands'

Cypress.on('uncaught:exception', () => false)

Cypress.Server.defaults({ ignore: () => true })
