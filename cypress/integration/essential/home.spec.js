//Env variables on cypress.json
const orientations = Cypress.env('orientations')
const viewports = Cypress.env('viewports')

describe("Renders the homepage", () => {
	viewports.forEach(viewport => {
		for (let i = 0; i < orientations.length; i++) {

			it(`(${viewport}-${orientations[i]}) - Renders correctly`, () => {
				cy.viewport(viewport, orientations[i])
				cy.visit("/");
				cy.get("h1").should("contain", "React template");
			});
		
			it(`(${viewport}-${orientations[i]}) - Renders about page when the /about link is clicked`, () => {
				cy.viewport(viewport, orientations[i]) 
				cy.visit("/");
				cy.get(".nav-link").eq(1).click();
				cy.get("h1").should("contain", "Welcome to the about page!");
			});

			if (viewport === "macbook-11") break; //Ensures tests only run once on this viewport. 
		}
	});
});
