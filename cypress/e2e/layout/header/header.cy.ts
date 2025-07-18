describe("header", () => {
  it("defaults to light mode", () => {
    cy.visit("/");

    cy.findByRole("document").should("have.class", "theme-light");
  });

  it("on select, changes to dark mode", () => {
    cy.visit("/");

    cy.findByRole("combobox").select("dark");

    cy.findByRole("document").should("have.class", "theme-dark");
  });
});
