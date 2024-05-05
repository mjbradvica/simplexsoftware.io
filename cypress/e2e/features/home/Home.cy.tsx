describe("home", () => {
  it("is the default navigation on load", () => {
    cy.visit("/");

    cy.findByText(/home!/i);
  });
});
