it('Post Users',()=>{
    cy.request({ method:'POST',url:'https://gorest.co.in/public/v2/users/306324/posts',
        headers:{
            authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
        },
        body:{
           "title":"This is test no 4",
            "body":"Nama: Deden Septiawan, Role: QA Engineer"
        }
    }).as('Post')
    cy.get('@Post').its('status').should('equal',201)
})