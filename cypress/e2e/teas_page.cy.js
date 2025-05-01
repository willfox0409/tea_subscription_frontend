describe("Teas Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("Tea List").click();
  });

  it("navigates to the Teas page", () => {
    cy.url().should("include", "/teas");
    cy.contains("All Teas").should("exist");
  });

  it("displays a list of teas with details", () => {
    cy.get(".teas-view").should("exist");
    cy.contains("Morning Mist").should("exist");
    cy.contains("Light and floral green tea").should("exist");
    cy.contains("175°F").should("exist");
    cy.contains("3 minutes").should("exist");
  });
});