// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('connectReqRes', () => {
    cy.request({
        url: 'https://reqres.in/api/users'
    })
})

Cypress.Commands.add('connectNote', () => {
    cy.request(
        "https://practice.expandtesting.com/notes/api/health-check"
      )
})