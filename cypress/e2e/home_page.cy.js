describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("shows a list of subscriptions", () => {
    cy.contains("Subscriptions"); // Page title
    cy.get(".subscription-card").should("have.length.at.least", 1);
  });

  it("shows subscription titles and ids", () => {
    cy.get(".subscription-card").each(($card) => {
      cy.wrap($card).find("h2").should("exist");
      cy.wrap($card).contains(/ID:/i).should("exist");
    });
  });

  it("can filter by active and cancelled", () => {
    cy.get("select").select("active");
    cy.get(".subscription-card").each(($card) => {
      cy.wrap($card).contains(/Status:\s*active/i);
    });

    cy.get("select").select("cancelled");
    cy.get(".subscription-card").each(($card) => {
      cy.wrap($card).contains(/Status:\s*cancelled/i);
    });
  });

  it("can navigate to the teas and customers pages from the nav", () => {
    cy.contains("Tea List").click();
    cy.url().should("include", "/teas");
    cy.contains("All Teas"); 

    cy.visit("http://localhost:5173/");
    cy.contains("Customer List").click();
    cy.url().should("include", "/customers");
    cy.contains("Our Subscribers");
  });
});