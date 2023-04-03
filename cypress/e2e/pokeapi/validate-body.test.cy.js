/// <reference types='cypress'/>
describe('Automation API with pokeapi',()=>{
    it('Successfully validate content 1',()=>{
       
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('contain','application/json; charset=utf-8')
        cy.get('@pokemon').its('body').should('include',{name:"ditto"}) //cara 1 
        
    })
    

    it('Successfully validate content 2',()=>{
        var abilities={
            'name':"limber"
        }
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('contain','application/json; charset=utf-8')
        cy.request('GET',"https://pokeapi.co/api/v2/pokemon/ditto").then ((response)=>{
             expect(response.body.abilities[0].ability.name).to.eq(abilities.name) //cara 2   
    })
    })
    
})
