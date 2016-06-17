Feature: find parking
#
#Scenario: search parking by adress
#Given I am on home page
#When I search for "Odinsgatan"
#Then I will see list of parking options near "Odinsgatan"
#
#Scenario: show map
#Given I have searched results for "Odinsgatan"
#Then I can bring up map

Scenario: search for parkings near me
Given I am on home page
When I show parkings near me
Then I see map with parkings