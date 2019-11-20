describe('Test suite', function(){
    it('Login and logout', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        
        cy.contains('Please, login!')     
        cy.get('#login').type('jp')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()

        
        cy.contains('Hotel Accomodation')
        cy.get('.fa-caret-down').click()
        cy.get('.dropdown-menu > li > a').click()


     /*   cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > li > a').click()
        cy.contains('Please, login!')
        cy.title().should('eq','Hotel Accomodation - login page') */
    })
})