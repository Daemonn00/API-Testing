it('Post Comments Users',()=>{
      cy.request({ method:'POST',url:'https://gorest.co.in/public/v2/posts/17744/comments',
        headers:{
            authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
        },
        body:{
            "post_id":"17744",
            "name":"Deden Septiawan",
            "email":"sept.deden@gmail.com",
            "body":"Eduwork Indonesia"
            
        }
    }).as('Post')
    cy.get('@Post').its('status').should('equal',201)
})