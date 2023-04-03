it('Post Users',()=>{
    cy.request({ method:'Delete',url:'https://gorest.co.in/public/v2/users/306324',
        headers:{
            authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
        }
    }).as('Delete')
    cy.get('@Delete').its('status').should('equal',204)
})