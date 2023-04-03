it('Post Users',()=>{
    cy.request({ method:'POST',url:'https://gorest.co.in/public/v2/users/',
        headers:{
            authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
        },
        body:{
            "email":"456852@gmail.com",
            "name":"Daan",
            "gender":"Male",
            "status":"Active"
        }
    }).as('Post')
    cy.get('@Post').its('status').should('equal',201)
})