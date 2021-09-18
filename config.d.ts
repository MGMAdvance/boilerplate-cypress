/// <reference types="cypress" />

declare const Given, When, Then, And, Before

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Descrição: clica, digita e seleciona um valor em um input com dropdown
         * @param {string} input1 o input que recebe o primeiro click para abrir o dropdown.
         * @param {string} input2 o input no qual o texto será digitado.
         * @param {string} text o texto que será digitado.
         * @example
         * cy.inputDropdown(foro, localizacao, 'Campinas')
         */
        inputDropdown(input1: string, input2: string, text?: string): Chainable<any>
    }
}