describe('Bedroom', function(){
    
    it('Logga in', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        cy.get('#login').type('jp')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
        cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml')
        //cy.get('#side-menu > li:nth-child(3) > a').click()
        
            })
   it('Bedroom', function(){
    cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml')    
    cy.get('#side-menu > li:nth-child(3) > a').click()
        
    }) 
})
// bedroom-knappen ('#side-menu > li:nth-child(3) > a')