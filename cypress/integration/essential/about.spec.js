//Env variables on cypress.json
const orientations = Cypress.env('orientations')
const viewports = Cypress.env('viewports')

describe("Renders the about page", () => {
	viewports.forEach(viewport => {
		for (let i = 0; i < orientations.length; i++) {

			it(`(${viewport}-${orientations[i]}) - Renders correctly.`, () => {
				cy.viewport(viewport, orientations[i])
				cy.visit("/about");
				cy.get("h1").should("contain", "Welcome to the about page!");
			});
		
			it(`(${viewport}-${orientations[i]}) - Renders home page when home link is clicked.`, () => {
				cy.viewport(viewport, orientations[i])
				cy.visit("/about");
				cy.get("a").click();
				cy.get("h1").should("contain", "React template");
			});

			if (viewport === "macbook-11") break; //Ensures tests only run once on this viewport. 
		}
	});
});
