Feature: As a user, I want to be able to demo using
Cypress, Cucumber & TypeScript for acceptance/end-to-testing

  Background:
    Given I visit the login page

  Scenario: Successful Login
    When I enter valid "standard_user" and "secret_sauce"
    Then I should be logged in

  @test
  Scenario: Display error messages for invalid credentials - using data table
    Given I enter incorrect credentials
      | user_name      | password     |
      | incorrect_user | secret_sauce |
    And I click login
    Then the error message "Epic sadface: Username and password do not match any user in this service" is displayed
