
import {Given}, When, Then from "cypress-cucumber-preprocessor/steps";

import { loginpage } from "../../../pages/LoginPage.js"
import { feedpage } from "../../../pages/feedpage.js";

Given("Tania is a writer and has access to the application", function(){

    cy.visit("/")

})

When("Tania login with correct credntials", function(){

    const useremail = "testuser@test.com"
    const password = "test"

    loginpage.loginToApplication(useremail, password)

})

Then("Tania gets access to the application", function(){
    feedpage.verifyLoginSuccess("testuser")
})

When("Tania user her credntials as {string} and {string}", function(useremail,password){
    loginpage.loginToApplication(useremail,password)

})

When("Tania uses her credentials as list", fuction(datatable){
    const data = datatable.raw();
    const useremail = data[0][0];
    const password = data[1][0];

    loginpage.loginToApplication(useremail,password)
})

When("Tania uses her credentials as map", function(datatable){

    let useremail;

    let password

datatable.hashes().map(function(value) {

    console.log(value)

    useremail = value.useremail;

    password = value.userpassword;
})

    loginpage.loginToApplication(useremail, password)
})

