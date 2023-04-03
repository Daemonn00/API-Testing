it('Post Users',()=>{
    cy.request({ method:'get',url:'https://gorest.co.in/public/v2/users/',
        headers:{
            authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
        }
    }).as('Get')
    cy.get('@Get').its('status').should('equal',200)
    cy.get('@Get').its('body').should('contains',{"id":155921,
    "email":"asdwdwa@gmail.com",
    "name":"Daan",
    "gender":"Male",
    "status":"Active"})
    
})