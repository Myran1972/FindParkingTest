Feature: register

Scenario: register with email
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email "runsten.maria@gmail.com"
And I will write my password "password"
And I will repeat my password "password"
And I will push on Register
Then I will see my name "Maria Runsten" so I know I am logged in to my account

Scenario: register with invalid email
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email "kallemail.com"
And I will write my password "password"
And I will repeat my password "password"
And I will push on Register
Then I will see message "The specified email address is invalid."

Scenario: register with already existing email
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email "myran1972@hotmail.com"
And I will write my password "password"
And I will repeat my password "password"
And I will push on Register
Then I will see message "The specified email address is already in use."

Scenario: register with too short password
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email "runsten.maria@gmail.com"
And I will write my password "passw"
And I will repeat my password "passw"
And I will push on Register
Then I will see message "Password is too short"

Scenario: register with different passwords
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email "runsten.maria@gmail.com"
And I will write my password "password"
And I will repeat my password "passw"
And I will push on Register
Then I will see message "Passwords don't match"

Scenario: register without username
Given I am on home page
And I choose Register in menu
When I will write my name ""
And I will write my email "runsten.maria@gmail.com"
And I will write my password "password"
And I will repeat my password "password"
And I will push on Register
Then I will see message "User name is missing"

Scenario: register without email
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email ""
And I will write my password "password"
And I will repeat my password "password"
And I will push on Register
Then I will see message "Fill user email" 

Scenario: register without password
Given I am on home page
And I choose Register in menu
When I will write my name "Maria Runsten"
And I will write my email "runsten.maria@gmail.com"
And I will write my password ""
And I will repeat my password ""
And I will push on Register
Then I will see message "Password is too short" 