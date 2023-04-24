describe('registration should pass', () => {
  it('registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('button:first').click()
    cy.get('#firstName').type('Alberto')
    cy.get('#lastName').type('Brenaman')
    cy.get('#signup-email').type('albertobren@email.com')
    cy.get('#signup-password').type('Alberto1234')
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