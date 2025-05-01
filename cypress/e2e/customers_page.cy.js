describe("Customers Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("Customer List").click();
  });

  it("navigates to the Customers page", () => {
    cy.url().should("include", "/customers");
    cy.contains("Our Subscribers").should("exist");
  });

  it("displays a list of customer info", () => {
    cy.get(".customers-view").should("exist");
    cy.contains("Cate Le Bon").should("exist");
    cy.contains("lebonbon@hotmail.com").should("exist");
    cy.contains("23 Gower Road").should("exist");
  });
});