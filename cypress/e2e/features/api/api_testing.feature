@api
Feature: As a user, I want to demo how Cypress can be used for tesing APIs
using create and update methods.

  @createMethod
  Scenario: Create new users successfully
    Given I create a new user with name "John Smith" and job title "Developer"
    Then the status code should be "201"
    And the response status text should be "Created"

  @updateMethod
  Scenario: Update the users created
    Given I update the job title for "John Smith" to "Sr Developer"
    Then the status code should be "200"
    And the response status text should be "OK"
    And the new job title should be "Sr Developer"
