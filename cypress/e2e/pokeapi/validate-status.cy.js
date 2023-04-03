describe('Validate Header',()=>{
    it('Successfully validate content',()=>{
        var abilities={
            'name':"limber"
        }
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('contain','application/json; charset=utf-8')
        //cy.get('@pokemon').its('body').should('contains','abilities') //cara 1 
         cy.request('GET',"https://pokeapi.co/api/v2/pokemon/ditto").then ((response)=>{
             expect(response.body.abilities[0].ability.name).to.eq(abilities.name) //cara 2
             
    })
    })
    it('Successfully validate status code',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal',200)

    })

    it('Successfully validate status code with params',()=>{
        cy.request({
            method: 'GET',url:'https://reqres.in/api/users?page=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should("equal",200)
    })
})
