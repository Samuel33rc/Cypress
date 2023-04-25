const { param } = require("cypress/types/jquery")

describe('TasteDive test suite', () => {
    it('get data', () => {
        cy.request({
        url: `https://tastedive.com/api/similar`
        })
    })
})