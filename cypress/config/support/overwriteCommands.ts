
Cypress.Commands.overwrite('visit', (originalFn: Function, url: string, options: {}) => {
    return originalFn(url, { failOnStatusCode: false, ...options })
})
