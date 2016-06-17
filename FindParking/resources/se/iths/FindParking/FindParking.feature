Feature: find parking

Scenario: search parking by adress
Given I am on home page
When I search for "Odinsgatan"
Then I will see list of parking options near "Odinsgatan"

Scenario: show map
Given I have searced results
Then I can bring up map