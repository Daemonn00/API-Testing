describe('Nested Resources',()=>{
    it('Get Post',()=>{
        cy.request('GET','https://gorest.co.in/public/v2/users/306324/posts').as('Post')
        cy.get('@Post').its('status').should('equal',200)
    })
    it('Get Comment',()=>{
        cy.request('GET','https://gorest.co.in/public/v2/posts/17744/comments').as('Comment')
        cy.get('@Comment').its('status').should('equal',200)
    })
    
    it('Get Todos',()=>{
        cy.request('GET','https://gorest.co.in/public/v2/users/306324/todos').as('Todo')
        cy.get('@Todo').its('status').should('equal',200)
    })

    
})