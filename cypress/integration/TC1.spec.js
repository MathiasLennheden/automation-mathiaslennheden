describe('Logga in', function(){
    it('Logga in', function(){
cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
cy.get('#login').type('jp')
cy.get('#senha').type('1010')
cy.get('#loginBtn').click()
cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml')
    })
})