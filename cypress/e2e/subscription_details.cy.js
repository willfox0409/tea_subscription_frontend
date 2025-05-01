describe("Subscription Details Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("navigates to a subscription's detail page when the 'View Details' button is clicked", () => {
    cy.get(".subscription-card").first().within(() => {
      cy.contains("View Details").click();
    });

    cy.url().should("include", "/subscriptions/");
    cy.get(".subscription-details").within(() => {
      cy.get("h2").should("exist");
      cy.contains("Status:").should("exist");
      cy.contains("Frequency:").should("exist");
      cy.contains("Price:").should("exist");
    });
  });

  it("shows nested customer and tea data", () => {
    cy.get(".subscription-card").first().within(() => {
      cy.contains("View Details").click();
    });

    cy.get(".subscription-details").within(() => {
      cy.contains("Customer Info").should("exist");
      cy.contains("Tea Info").should("exist");
      cy.contains("Brew Temp").should("exist");
      cy.contains("Brew Time:").should("exist");
    });
  });

  it("shows the correct image", () => {
    cy.get(".subscription-card").first().within(() => {
      cy.contains("View Details").click();
    });

    cy.get(".subscription-details img")
      .should("have.attr", "src")
      .and("include", ".jpg");
  });
});