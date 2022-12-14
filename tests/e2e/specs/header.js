describe("Test header component", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.setLocalStorage();
  });
  it("Test about page", () => {
    cy.visit("/");
    cy.get('[data-test="about"]').click();
    cy.contains("h1", "This is an about page");
  });
  it("Test active link", () => {
    cy.get('[data-test="home"]').click();
    cy.get('[data-test="home"]').should("have.class", "router-link-active");
  });
  it("Test logout button", () => {
    cy.get('[data-test="logout"]').click();
    cy.url().should("include", "/Login");
  });
});
