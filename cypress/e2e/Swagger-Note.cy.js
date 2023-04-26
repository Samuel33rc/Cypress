describe("Test API GET request", () => {
  it("body message should be Notes API is Running", () => {
    cy.request(
      "https://practice.expandtesting.com/notes/api/health-check"
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Notes API is Running");
      expect(response.body.success).to.equal(true);
    });
  });
});

describe("login", () => {
  it("log", () => {
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

describe("check profile", () => {
  it("GET", () => {
    cy.request({
      url: "https://practice.expandtesting.com/notes/api/users/profile",
      headers: {
        "x-auth-token":
          "0c811ef501bf4f0f91a8a49dca112cb4c8d19cbec4fa4376abb0c856be004e61",
      },
    });
  });
});

describe("Testing notes", () => {
  it("GET notes", () => {
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
    cy.request({
      method: "POST",
      url: "https://practice.expandtesting.com/notes/api/notes",
      headers: {
        "x-auth-token":
          "0c811ef501bf4f0f91a8a49dca112cb4c8d19cbec4fa4376abb0c856be004e61",
      },
      body: {
        title: "Ma SWAG note",
        description: "Une nouvelle note de test de API Swagger Note",
        category: "Personal",
      },
    });
  });
});
