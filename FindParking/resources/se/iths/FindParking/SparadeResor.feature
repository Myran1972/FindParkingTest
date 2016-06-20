Feature: Sparade Resor

Scenario: Remove Saved Trip
	Given I am at my saved trips
	And the trip "Test" exists
	When I click "edit trip"
	Then the trip "named" should NOT exist
	
Scenario: Edit Trip
	Given I am at my saved trips
	And the trip "Test" exists
	When I change "destinationF"
	Then the "destination" for trip "named" should be "destination"

Scenario: Return without change
	Given I am at my saved trips
	When I change "Something"
	Then changes should not have been saved
	
Scenario: Change Trip
	Given I am at my saved trips
	When I change "Something"
	Then changes should have been saved