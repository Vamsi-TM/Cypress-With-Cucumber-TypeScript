Feature: As a user, I want to be able to demo how Scenario Outlines are used

  Background:
    Given I visit the login page

  @login_happy_path
  Scenario Outline: Login using example table
    When I enter valid "<user_name>" and "<password>"
    Then I should be logged in

    Examples:
      | user_name               | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  @test
  Scenario Outline: Verify error messages using examples table
    When I enter valid "<user_name>" and "<password>"
    And I click login
    Then the error message "<error_message>" is displayed

    Examples:
      | user_name       | password          | error_message                                                             |
      | standard_user   | incorrectPassword | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce      | Epic sadface: Sorry, this user has been locked out.                       |
      | invalid_user    | secret_sauce      | Epic sadface: Username and password do not match any user in this service |
