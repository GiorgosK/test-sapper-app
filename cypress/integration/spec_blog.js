/// <reference types="Cypress" />

describe('Sapper template app', () => {
	it('navigates to first blog post and find /blog back link', () => {
		cy.visit('/blog').get('ul.blog-posts li a').first().click();
    cy.get('.back-link a').contains('Back').url().should('include', '/blog');
	});
});