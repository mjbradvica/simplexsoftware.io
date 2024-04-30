describe("my First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /simplex-software.io/i });
  });
});
