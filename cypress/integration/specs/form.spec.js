// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Support form tests", () => {

    it('Open the support form page and fills in the form', () => {
        
        cy.visit("https://practice.automationbro.com/support-form/");

        // Input text
        cy.get('#evf-680-field_lVizlNhYus-1').type('Saiduzzaman Tuhin');

        cy.get('#evf-680-field_XYnMdkQDKM-3').type('tohin@coderex.co');

        cy.get('#evf-680-field_xJivsqAS2c-2').type('End to end testing using cypress');

        // Dropdown 
        cy.get('#evf-680-field_82kaAPhrnW-6').select('Technical Team');

        // Checkbox
        cy.get('#evf-680-field_sOAJfxP1Lf-7 input').check(['Integration Issue', 'Software Issue']);

        // Datepicker
        cy.get('#evf-680-field_s1KysSbUW6-8').click();
        cy.get('.dayContainer span:nth-child(15)').click();

        // Textarea
        cy.get('#evf-680-field_YalaPcQ0DO-4').type('Your app keeps chrashing everytime');

        // Form submit
        cy.get('#evf-submit-680').click();

        // Verify success message
        cy.get('[role="alert"]').should('contain.text', 'Thanks for contacting us! We will be in touch with you shortly.');

    });
})