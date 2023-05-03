describe("appcenter homepage test suite", () => {
  const homepageUrl = "https://www.amazon.com/b2b/appcenter";
  const applistUrlAccountingManagement =
    "https://www.amazon.com/b2b/appcenter/apps?categories=accountManagement";
  const awardcoAppDetailsUrl =
    "https://www.amazon.com/b2b/appcenter/applicationdetails/amzn1.sp.solution.a19f122b-dd63-4ed5-a282-2aa0cb1a99db";
  beforeEach(() => {
    cy.visit(homepageUrl);
    cy.injectAxe() // make sure axe is available on the page
  });

  it('homepage has no accessibility violations detected from axe automated tests', () => {
      cy.checkA11y();
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

  it("Clicking category card takes you to the app list page for that category", () => {
    cy.get(".bws-marketplace-homepage-category-card")
      .contains("Accounting Management")
      .click();
    cy.url().should("eq", applistUrlAccountingManagement);
  });

  it("Clicking app card takes you to the app details page for that app", () => {
    cy.get('[data-testid="bws-marketplace-homepage-app-card-title"]')
      .contains("Awardco")
      .click();
    cy.url().should("eq", awardcoAppDetailsUrl);
  });
});
