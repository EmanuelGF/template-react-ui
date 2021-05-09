describe("Renders the homepage", () => {
	it("Renders correctly", () => {
		cy.visit("/");
		cy.get("h1").should("contain", "React template");
	});

	it("Renders about page when the /about link is clicked", () => {
		cy.visit("/");
		cy.get(".nav-link").eq(1).click();
		cy.get("h1").should("contain", "Welcome to the about page!");
	});
});
