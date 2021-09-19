Cypress.Commands.overwrite('visit', (originalFn, url: string, options) => {
  return originalFn(url, { failOnStatusCode: false, ...options })
})
