//Elements (web-elements, e.g, button, labels, text fields, etc)
const titleIndexPAge = 'Hotel Accomodation - login page'
const usernameTxtField = '#login'
const passwordTxtFIeld = '#senha'
const submitButtonLogin = '#loginBtn'

//Functions/operations (perform login, check title on page, check specific string, etc)

function performLogin(cy){
cy.get(usernameTxtField).type('jp')
cy.get(passwordTxtFIeld).type('1010')
cy.get(submitButtonLogin).click()
}

//exports  (making the functions avaliable for importing)

module.exports = {
    performLogin
}