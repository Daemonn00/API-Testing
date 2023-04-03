it('Post Users',()=>{
    cy.request({ method:'Put',url:'https://gorest.co.in/public/v2/users/306324',
        headers:{
            authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
        },
        body:{
            
            "name":"Deden"
            
        }
    }).as('Put')
    cy.get('@Put').its('status').should('equal',200)
})