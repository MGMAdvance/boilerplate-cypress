
Cypress.Commands.add('inputDropdown', (input1: string, input2: string, text?: string) => {
    cy.get(input1)
        .click()

    if (text) {
        cy.get(input2)
            .type(text, { delay: 0 })
    }

    cy.get('span.ui-select-choices-row-inner:first')
        .click()
})

