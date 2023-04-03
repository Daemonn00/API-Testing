describe('Validate Header',()=>{
    it('Successfully validate content',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('contain','application/json; charset=utf-8')
        //cy.get('@pokemon').its('body').should('contains','abilities') //cara 1 
         cy.request('GET',"https://pokeapi.co/api/v2/pokemon/ditto").then ((response)=>{
             expect(response.body).assert('a') //cara 2
             
    })
})
})
