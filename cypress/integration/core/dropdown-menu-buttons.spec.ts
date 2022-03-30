describe("Dropdown menu - buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:56106/iframe.html?id=dropdown-menu--buttons");
    cy.injectAxe();
    cy.configureAxe({
      rules: [{ id: "color-contrast", enabled: false }],
    });
    cy.get("button[slot = 'toggle']").as("button");
    cy.get(".dso-dropdown-options").as("options");
    cy.get(".dso-dropdown-options ul li button").as("menuitems");
  });

  // Disabled in #1500, enable in #1532
  it.skip("should open and close on button click", () => {
    cy.get("@options").should("not.be.visible");

    cy.checkA11y("dso-dropdown-menu");

    cy.get("@button").focus().click().should("have.focus");

    cy.get("@options").should("be.visible");

    cy.checkA11y("dso-dropdown-menu");

    cy.get("@button").click().should("have.focus");

    cy.get("@options").should("not.be.visible");
  });

  it("should have aria-expanded", () => {
    cy.get("@button")
      .focus()
      .should("have.attr", "aria-expanded", "false")
      .click()
      .should("have.attr", "aria-expanded", "true")
      .click()
      .should("have.attr", "aria-expanded", "false");
  });

  it("should have role menu with menuitemradio", () => {
    cy.get("@button")
      .should("have.attr", "aria-haspopup", "menu")
      .click()
      .blur();

    cy.get("@button")
      .invoke("attr", "id")
      .then((id) => {
        cy.get("@options")
          .should("have.attr", "role", "menu")
          .should("have.attr", "aria-labelledby", id);
      });

    cy.get(".dso-dropdown-options ul, .dso-dropdown-options li").should(
      "have.attr",
      "role",
      "none"
    );

    cy.get("@menuitems").should("have.attr", "role", "menuitem");
  });

  it("checkable should have role menuitemradio", () => {
    cy.visit(
      "http://localhost:56106/iframe.html?id=dropdown-menu--buttons&args=isCheckable:true"
    );

    cy.get("@button").click().blur();

    cy.get("@menuitems").should("have.attr", "role", "menuitemradio");
  });

  it(
    "tab should tab out and close menu at the bottom",
    { browser: "!firefox" },
    () => {
      cy.get("@button").focus().click();

      cy.realPress("Tab");
      cy.realPress("Tab");

      cy.get("@menuitems").eq(1).should("have.focus");

      cy.realPress("Tab");

      cy.get("@options").should("not.be.visible");

      cy.get("@button").should("not.have.focus");
    }
  );

  it(
    "shift-tab should tab out and close menu at the top",
    { browser: "!firefox" },
    () => {
      cy.get("@button").focus().click();

      cy.realPress("Tab");

      cy.get("@menuitems").eq(0).should("have.focus");

      cy.realPress(["Shift", "Tab"]);

      cy.get("@options").should("not.be.visible");

      cy.get("@button").should("have.focus");
    }
  );

  it("arrow down should cycle menu", { browser: "!firefox" }, () => {
    cy.get("@button").focus().click();

    cy.realPress("ArrowDown");
    cy.realPress("ArrowDown");

    cy.get("@menuitems").eq(1).should("have.focus");

    cy.realPress("ArrowDown");

    cy.get("@menuitems").eq(0).should("have.focus");
  });

  it("arrow up should cycle menu", { browser: "!firefox" }, () => {
    cy.get("@button").focus().click();

    cy.realPress("ArrowUp");
    cy.realPress("ArrowUp");

    cy.get("@menuitems").eq(0).should("have.focus");

    cy.realPress("ArrowUp");

    cy.get("@menuitems").eq(1).should("have.focus");
  });

  it("esc should close menu and focus button", { browser: "!firefox" }, () => {
    cy.get("@button").focus().click();

    cy.realPress("ArrowUp");

    cy.get("@menuitems").eq(1).should("have.focus");

    cy.realPress("Escape");

    cy.get("@options").should("not.be.visible");

    cy.get("@button").should("have.focus");
  });

  it("click outside menu should close menu", { browser: "!firefox" }, () => {
    cy.get("@button").focus().click();

    cy.get("body").click();

    cy.get("@options").should("not.be.visible");

    cy.get("@button").focus().click();

    cy.realPress("Tab");

    cy.get("body").click();

    cy.get("@options").should("not.be.visible");
  });
});
