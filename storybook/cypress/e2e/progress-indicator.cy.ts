describe("Progress Indicator", () => {
  it("should show small spinner", () => {
    cy.visit("http://localhost:45000/iframe.html?id=core-progress-indicator--small")
      .get("dso-progress-indicator")
      .should("have.attr", "size", "small")
      .shadow()
      .as("dsoProgressIndicator")
      .find(".dso-progress-indicator-spinner")
      .should("have.attr", "role", "progressbar")
      .and("have.attr", "aria-labelledby", "progress-indicator-label")
      .and("be.visible")
      .and("have.css", "width", "24px")
      .and("have.css", "height", "24px")
      .get("@dsoProgressIndicator")
      .find(".dso-progress-indicator-label")
      .should("have.text", "Resultaten laden: een moment geduld alstublieft.");
    cy.percySnapshot("core-progress-indicator--small");
  });
  it("should show medium spinner", () => {
    cy.visit("http://localhost:45000/iframe.html?id=core-progress-indicator--medium")
      .get("dso-progress-indicator")
      .should("have.attr", "size", "medium")
      .shadow()
      .as("dsoProgressIndicator")
      .find(".dso-progress-indicator-spinner")
      .should("have.attr", "role", "progressbar")
      .and("have.attr", "aria-labelledby", "progress-indicator-label")
      .and("be.visible")
      .and("have.css", "width", "32px")
      .and("have.css", "height", "32px")
      .get("@dsoProgressIndicator")
      .find(".dso-progress-indicator-label")
      .should("have.text", "Resultaten laden: een moment geduld alstublieft.");
    cy.percySnapshot("core-progress-indicator--medium");
  });
  it("should show large spinner", () => {
    cy.visit("http://localhost:45000/iframe.html?id=core-progress-indicator--large")
      .get("dso-progress-indicator")
      .should("have.attr", "size", "large")
      .shadow()
      .as("dsoProgressIndicator")
      .find(".dso-progress-indicator-spinner")
      .should("have.attr", "role", "progressbar")
      .and("have.attr", "aria-labelledby", "progress-indicator-label")
      .and("be.visible")
      .and("have.css", "width", "48px")
      .and("have.css", "height", "48px")
      .get("@dsoProgressIndicator")
      .find(".dso-progress-indicator-label")
      .should("have.text", "Resultaten laden: een moment geduld alstublieft.");
    cy.percySnapshot("core-progress-indicator--large");
  });
});
