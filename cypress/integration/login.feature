Feature: Login to conduit Application

Background: Pre-requisite
    Given Tania is a writer and has access to the application

  Scenario: Verify login to the Application
    
    When Tania login with correct credntials
    Then Tania gets access to the application

Scenario: Verify login to the Application with credntials as list
    
    When Tania user her credntials as 
    | testuser@test.com |
    | test |
    Then Tania gets access to the application

    Scenario: Verify login to the Application with credntials as map
    
    When Tania uses her credentials as map
     | useremail |      | testuser@test.com |
     | userpassword |   | test |
    Then Tania gets access to the application

 Scenario Outline: Verify login to the Application with credntials as map
   
    When Tania uses her credentials as map
     | useremail |      | userpassword | username |
     | <useremail> |   | <userpassword> | <username> |
    Then Tania gets access to the application

    Examples:

    | useremail | userpassword| username |
    | testuser@test.com | testpassword| testuser |
    | testuser2@test.com | testpassword| testuser2 |





