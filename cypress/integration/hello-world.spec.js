describe('Hello world project', function(){

    it('open google page', function(){
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('mathias')
    }    )
})