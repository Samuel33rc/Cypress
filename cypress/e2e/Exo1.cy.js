describe('registration test', () => {
    it('filling form test', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.get('#userName').type('validName')
      cy.get('#userEmail').type('valid@email.com')
      cy.get('#currentAddress').type('validCurrentAdress?')
      cy.get('#permanentAddress').type('validPermanentAdress?')
      cy.get('#submit').click()
    })
})