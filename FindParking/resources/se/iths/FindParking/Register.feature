Feature: register

Scenario: register with email
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email "myran1972@hotmail.com"
And I will write my password "password"
And I will repeat my password "password"
And I will push on Register
Then I will be logged in to my account