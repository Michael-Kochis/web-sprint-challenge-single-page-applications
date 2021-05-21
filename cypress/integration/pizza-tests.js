/* eslint-disable no-undef */
import { beforeEach } from "mocha"

describe ('Cypress tests to verify product meets standards', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it('verify that tests themselves work', () => {
        expect(true).to.equal(true)
        expect(true).not.to.equal(false)
    });

    it('required elements exist', () => {
        cy.visit("http://localhost:3000")
        const pizzaButton = cy.get("#pizza-button")
        const topBar = cy.get("#top-bar")

        pizzaButton.should("exist")
        topBar.should("exist")
    }); 

    it('pizza button navigates to pizza page', () => {
        const pizzaButton = cy.get("#pizza-button")

        pizzaButton.click();
        cy.get("#name-input").should("exist")
    });

    describe('verify pizza form', () => {
        beforeEach(() => {
            cy.visit("http://localhost:3000/pizza")
        })
        it('navigation bar exists', () => {
            const topBar = cy.get("#top-bar")

            topBar.should("exist")
        });
         
        it('element name-input exists', () => {
            const nameInput = cy.get("#name-input")

            nameInput.should("exist")
        });

        it('can enter data into name-input', () => {
            const nameInput = cy.get("#name-input")

            nameInput.should('have.value', '')
            nameInput.type('Author')
            nameInput.should('have.value', 'Author')
        });

        it('error message shows properly', () => {
            const nameError = cy.get("#name-error")
            const nameInput = cy.get("#name-input")

            nameError.should('have.value', '');
            nameInput.type("A");
            // ERROR: test below tests nameInput, NOT nameError
            nameError.should('have.value', 'name must be at least 2 characters');
            nameInput.type("Author");
            nameError.should('have.value', ''); 
        });

        it('home button goes to home page', () => {
            cy.get("#pizza-button").should("not.exist")
            cy.get("#home-button").click()
            cy.get("#pizza-button").should("exist")
        });
    
    });

});