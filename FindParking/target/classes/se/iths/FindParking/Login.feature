#Feature: login
#
#Scenario: login with existing user account
#Given I am on home page
#And I choose Login in menu
#When I will write my useremail "myran1972@hotmail.com"
#And I will write my userpassword "password"
#And I will push on Login
#Then I will see my name "Maria Runsten" so I know I am logged in to my account
#
#Scenario: login without correct email
#Given I am on home page
#And I choose Login in menu
#When I will write my useremail "myran1972hotmail.com"
#And I will write my userpassword "password"
#And I will push on Login
#Then I will see message "The specified email address is invalid."
#
#Scenario: forgot password
#Given I am on home page
#And I choose Login in menu
#When I click on Forgot password?
#And I will write my useremail to reset "myran1972@hotmail.com"
#And I will push on Reset
#Then I will see error message "Password reset email sent successfully"
#
#Scenario: forgot password with invalid email
#Given I am on home page
#And I choose Login in menu
#When I click on Forgot password?
#And I will write my useremail to reset "myran1972hotmail.com"
#And I will push on Reset
#Then I will see error message "Error: The specified user does not exist."
#
#Scenario: Logout
#Given I am logged in
#When I logout
#Then I will be logged out
#
