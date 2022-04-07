// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Home Tests', () => {

    it('Open the home page and verify the url and the title', () => {

        // Open the home page
        cy.visit('https://practice.automationbro.com/');

        // Assert the url
        cy.url().should('include', 'automationbro');

        // Assert the title
        cy.title().should('eq', 'Practice E-Commerce Site – Automation Bro');
    })

    it('Clicks the Get Started button and assert the url', () => {

        // Click the button
        cy.get('#get-started').click();

        // Assert the url
        cy.url().should("include", "#get-started");
    })

    it('Get the heading element and asset the url', () => {
        
        // Get the element
        cy.get("h1.elementor-heading-title").should(($heading) => {
            expect($heading.text()).to.eq('Think different. Make different.');
        });

        // Assert the text
        cy.get("h1.elementor-heading-title").should('have.text', 'Think different. Make different.');
    })

    it('Varifies the text of the first item of the menu', () => {

        cy.get("#primary-menu").find('li').first().should('have.text', 'Home');

    })

    it('Verifies the length and the text of all the menu link items', () => {
        
        const menuLinksText = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account'
        ];

        cy.get("#primary-menu [id*=menu-item]").should('have.length', 6);

        cy.get("#primary-menu [id*=menu-item]").each(($el, index, $list) => {
            // expect($list.length).to.eq(6);

            cy.wrap($el).should('have.text', menuLinksText[index]);
        })
    });
})