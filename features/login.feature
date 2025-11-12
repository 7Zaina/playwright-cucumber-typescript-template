Feature: Login to saucedeomon site

  Scenario: Successful login with valid credentials
    Given I am on the saucedemo login page
    When I enter valid username and password "standard_user" "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the saucedemo login page
    When I enter invalid username and password "standard_userinvalid" "secret_sauce"
    And I click the login button
    Then I should see an error message indicating invalid credentials