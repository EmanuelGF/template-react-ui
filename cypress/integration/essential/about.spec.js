describe("Renders the about page", () => {
	it("Renders correctly", () => {
		cy.visit("/about");
		cy.get("h1").should("contain", "Welcome to the about page!");
	});

	it("Renders home page when home link is clicked", () => {
		cy.visit("/about");
		cy.get("a").click();
		cy.get("h1").should("contain", "React template");
	});
});
