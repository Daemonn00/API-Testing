/// <reference types='cypress'/>
describe('Automation API with pokeapi',()=>{
    it('Successfully validate negative response',()=>{
        cy.request({
            method: 'GET',url:'https://pokeapi.co/api/v2/pokemon/eduwork',failOnStatusCode: false
        }).as('users')
        cy.get('@users').its('status').should("equal",404)
    })
    
    
})
