/* eslint-disable no-undef */
import { beforeEach } from "mocha"

describe ('Cypress tests to verify product meets standards', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it('verify that tests themselves work', () => {
        expect(true).to.equal(true)
        expect(true).not.to.equal(false)
    })

    it('verify pizza form', () => {
        cy.visit("http://localhost:3000/pizza")

        const nameInput = cy.get("#name-input")

        it('element name-input exists', () => {
            nameInput().should("exist")
        })

        it('can enter data into name-input', () => {
            nameInput().should('have.value', '')
            nameInput().type('Author')
            nameInput().should('have.value', 'Author')
        })
    })
})