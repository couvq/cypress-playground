describe("appcenter homepage test suite", () => {
  const homepageUrl = "https://www.amazon.com/b2b/appcenter";
  const applistUrlAccountingManagement =
    "https://www.amazon.com/b2b/appcenter/apps?categories=accountManagement";
  beforeEach(() => {
    cy.visit(homepageUrl);
  });

  it("navigation works", () => {
    // "Appcenter" navigation link works
    cy.get(
      '[data-testid="bws-marketplace-common-assets-navigation-appcenter-link"]'
    ).click();
    cy.url().should("eq", homepageUrl);

    // "Categories" dropdown works
    cy.get(
      ".bws-marketplace-common-assets-navigation-categories-dropdown"
    ).click();
    cy.get(
      '[data-testid="bws-marketplace-common-assets-dropdown-accountManagement"]'
    ).click();
    cy.url().should("eq", applistUrlAccountingManagement);
  });
});
