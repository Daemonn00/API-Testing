
describe("Create New User",()=>{
    it('Successfully create new user',()=>{
        var user ={
            "name":"Daemon",
            "job":"Education"
        }
        cy.request('POST','https://reqres.in/api/users', user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).to.eq(user.name)
            expect(response.body.job).to.eq(user.job)
        }).as('users')
        cy.get('@users').its('body').should('contain',user)
    })
})
