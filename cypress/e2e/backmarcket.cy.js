const { faker } = require('@faker-js/faker');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = `${firstName}.${lastName}@email.com`
const password = `${firstName}1234`

describe('registration should pass', () => {
  it('registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('button:first').click()
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#signup-email').type(email)
    cy.get('#signup-password').type(password)
    cy.get('[data-qa="signup-submit-button"]').click()
    cy.url().should('include', 'dashboard/orders')
  })
})

describe('registration should fail because user already exist', () => {
  it('registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('button:first').click()
    cy.get('#firstName').type('Albert')
    cy.get('#lastName').type('Brenaman')
    cy.get('#signup-email').type('alber')
    cy.get('#signup-password').type('Albert1234')
    cy.get('[data-qa="signup-submit-button"]').click()
    cy.url().should('include', 'dashboard/orders')
  })
})

//https://preprod.backmarket.fr/fr-fr/dashboard/orders