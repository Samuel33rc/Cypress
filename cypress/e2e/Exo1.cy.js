const { faker } = require("@faker-js/faker");

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const fullName = `${firstName} ${lastName}`;
const email = `${firstName}.${lastName}@email.com`;
const currentAddress = faker.address.city();
const permanentAddress = faker.address.city();
//const password = `${firstName}1234`

describe("registration test", () => {
  before(() => {
    cy.visit("https://demoqa.com/text-box");
  });

  it("filling form test", () => {
    cy.get("#userName").type(fullName).invoke("val").should("not.be.empty");
    cy.get("#userEmail").type(email).invoke("val").should("contains", "@");
    cy.get("#currentAddress")
      .type(currentAddress)
      .invoke("val")
      .should("not.be.empty");
    cy.get("#permanentAddress")
      .type(permanentAddress)
      .invoke("val")
      .should("not.be.empty");
    cy.get("#submit").should("be.visible").click();
  });
});
