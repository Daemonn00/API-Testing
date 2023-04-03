describe('Trying it Out',()=>{
    it('Post Users',()=>{
        cy.request({ method:'POST',url:'https://gorest.co.in/public/v2/users',
            headers:{
                authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
            },
            body:{
                "email":"ggwp123@gmail.com",
                "name":"Deden Septiawan",
                "gender":"Male",
                "status":"Active"
            }
        }).as('Post')
        cy.get('@Post').its('status').should('equal',201)
    })
    it('Get Post',()=>{
        cy.request('GET','https://gorest.co.in/public/v2/users/651/posts').as('Post')
        cy.get('@Post').its('status').should('equal',200)
    })
    it('Put/Patch Users',()=>{
        cy.request({ method:'PUT',url:'https://gorest.co.in/public/v2/users/659',
            headers:{
                authorization:'Bearer ff4df5b8869e607c888a1eb8f9d42eb5afd84bbfeee34b7d9bf9705fd37040d0'
            },
            body:{
                "name":"Deden Septiawan",
                "gender":"Male",
                "status":"Inactive"
            }
        }).as('Put')
        cy.get('@Put').its('status').should('equal',200)
    })
    
    it('Delete User',()=>{
        cy.request('DELETE','https://gorest.co.in/public/v2/users/659').as('Delete')
        cy.get('@Delete').its('status').should('equal',200)
    })

    
})

describe('Nested Resources',()=>{
    it('Get Post',()=>{
        cy.request('GET','https://gorest.co.in/public/v2/users/651/posts').as('Post')
        cy.get('@Post').its('status').should('equal',200)
    })
    it('Get Comment',()=>{
        cy.request('GET','https://gorest.co.in/public/v2/posts/651/comments').as('Comment')
        cy.get('@Comment').its('status').should('equal',200)
    })
    
    it('Get Todos',()=>{
        cy.request('GET','https://gorest.co.in/public/v2/users/651/todos').as('Todo')
        cy.get('@Todo').its('status').should('equal',200)
    })

    
})