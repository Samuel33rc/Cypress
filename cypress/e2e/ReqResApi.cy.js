describe("ReqResApi test suite", () => {
  it("POST data", () => {
    cy.fixture("userData").then((user) => {
      cy.request({
        url: "https://reqres.in/api/users",
        method: "POST",
        body: {
          name: user.name,
          job: user.job,
        },
      })
        .its('body.name')
        .should('eql','Thomas Anderson')
    });
  });
});


describe('Testing GET from custom commands', () => {
    it('GET data', () => {
        cy.connectReqRes().then(response => {
            cy.log(JSON.stringify(response))
        })
    })
    it('Test status 200', () => {
        cy.connectReqRes().then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('page', 1)
            expect(response.body).to.have.property('per_page', 6)
            expect(response.body).to.have.property('total', 12)
        })
    })
})