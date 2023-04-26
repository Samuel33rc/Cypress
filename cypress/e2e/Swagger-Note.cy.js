describe("Test API GET request", () => {
  it("body message yield the right informations", () => {
    // Here you can see the usage of the custom command cy.connectNote()
    cy.connectNote().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Notes API is Running");
      expect(response.body.success).to.equal(true);
    });
  });
});

describe("Check login", () => {
  it("Login should be succesful", () => {
    cy.request({
      method: "POST",
      url: "https://practice.expandtesting.com/notes/api/users/login",
      //form: true;
      headers: {
        accept: "application/json",
        //'Content-Type' : 'application/x-www-form-urlencoded',
        "x-auth-token":
          "0c811ef501bf4f0f91a8a49dca112cb4c8d19cbec4fa4376abb0c856be004e61",
      },
      body: {
        email: "samuel.renecorail@gmail.com",
        password: "1S34567",
      },
    });
  });
});

describe("Check profile", () => {
  it("Status should be OK if profile exist", () => {
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/users/profile",
      headers: {
        "x-auth-token":
          "0c811ef501bf4f0f91a8a49dca112cb4c8d19cbec4fa4376abb0c856be004e61",
      },
    });
  });
});

describe("Testing notes GET request", () => {
  it("Response should have an item with title, description, category", () => {
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/notes",
      headers: {
        accept: "application/json",
        "x-auth-token":
          "0c811ef501bf4f0f91a8a49dca112cb4c8d19cbec4fa4376abb0c856be004e61",
      },
    });
  });
});

describe.skip("Testing creation", () => {
  it("POST a note", () => {
    // Here you can see use of external data from fixtures dir
    cy.fixture("userData").then((note) => {
      cy.request({
        method: "POST",
        url: "https://practice.expandtesting.com/notes/api/notes",
        headers: {
          "x-auth-token":
            "0c811ef501bf4f0f91a8a49dca112cb4c8d19cbec4fa4376abb0c856be004e61",
        },
        body: {
          title: note.title,
          description: note.description,
          category: note.category,
        },
      });
    });
  });
});
