//Importing the index page
import * as indexPg from '../pages/index'

//Defining the test suite
describe('Test suite', function(){

    var Rng = Math.floor(Math.random() * 4);
    var Rng2 = Math.floor(Math.random() * 6);

    //First test case
    it('Perform login and logout', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.performLogin(cy)
        cy.url('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > li > a').click()
        cy.url('eq', 'http://rbt-course:8080/hotel/faces/login/login.xhtml')
        
    })

    //Second test case
    it('Bedroom', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.performLogin(cy)
        cy.contains('Dashboard')
        cy.get(':nth-child(3) > a').click()
        cy.get('.btn-primary').click()
        cy.contains('Access Denied!')

    })

    //Third test case
    it('Bill', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.performLogin(cy)
        cy.contains('Dashboard')
        cy.get(':nth-child(4) > a').click()
        cy.get('.btn-primary').click()
        cy.url('eq', 'http://rbt-course:8080/hotel/faces/bill/List.xhtml')
        
        if(Rng == 1){
            cy.get('#billStatusId').select('1')
        }
        else if(Rng == 2){
            cy.get('#billStatusId').select('2')
        }
        else{
            cy.get('#billStatusId').select('3')
        }
        
        if(Rng2 == 1){
            cy.get('#hotelReservationId').select('3')
        }
        else if(Rng2 == 2){
            cy.get('#hotelReservationId').select('5')
        }
        else if(Rng2 == 3){
            cy.get('#hotelReservationId').select('7')
        }
        else if(Rng2 == 4){
            cy.get('#hotelReservationId').select('8')
        }
        else{
            cy.get('#hotelReservationId').select('1')
        }
        cy.get('#saveBtn').click()
        cy.contains('A persistence error occurred.')
    })

    //Fourth test case
    it('Client', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.performLogin(cy)
        cy.contains('Dashboard')
        cy.get(':nth-child(5) > a').click()
        cy.get('.btn-primary').click()
        cy.url('eq', 'http://rbt-course:8080/hotel/faces/client/List.xhtml')
        cy.get('#name').type('Mathias')
        cy.get('#email').type('math@math.com')
        cy.get('#gender:0').click() //Lyckas inte hitta hur jag väljer checkbox
        cy.get('#socialSecurityNumber').type('1234567890')
        cy.get('.btn-primary').click()
        //cy.contains('Client was successfully created')

    })

   /* //Fifth test case
    it('User', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.performLogin(cy)
        cy.contains('Dashboard')
        cy.get('#side-menu > :nth-child(7) > a').click()
        cy.get('.btn-primary').click()
    }) */
    
    //Fifth test case
    it('FelLogin', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        cy.get('#login').type("joo")
        cy.get('#senha').type("1234")
        cy.get('#loginBtn').click()
        cy.url('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml')
        cy.contains('Login and Password Wrong')
    })
})