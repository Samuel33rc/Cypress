
describe('TasteDive test suite', () => {
    it('get data', () => {
        cy.request('https://reqres.in/api/users')
    })
})