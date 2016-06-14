Feature: login

Scenario: login with existing user account
Given I am on home page
And I choose Login in menu
When I will write my useremail "myran1972@hotmail.com"
And I will write my userpassword "password"
And I will push on Login
Then I will see my name "Maria Runsten" so I know I am logged in to my account