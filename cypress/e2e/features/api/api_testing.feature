@api
Feature: As a user, I want to demo how Cypress can be used for tesing APIs
@test 
Scenario: Test to demo Create method
Given I create users the response should be "201"

Scenario: Test to demo the Update method
 Given I update users the response should be "200"
