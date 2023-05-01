describe("my first test suite", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("my first test, verify title", () => {
    cy.title().should("eq", "OrangeHRM");
  });

  it("verify title, negative test", () => {
    cy.title().should("eq", "wrong title");
  });
});
