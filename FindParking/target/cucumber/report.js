$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("se/iths/FindParking/FindParking.feature");
formatter.feature({
  "line": 1,
  "name": "find parking",
  "description": "",
  "id": "find-parking",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4491453561,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#"
    },
    {
      "line": 3,
      "value": "#Scenario: search parking by adress"
    },
    {
      "line": 4,
      "value": "#Given I am on home page"
    },
    {
      "line": 5,
      "value": "#When I search for \"Odinsgatan\""
    },
    {
      "line": 6,
      "value": "#Then I will see list of parking options near \"Odinsgatan\""
    },
    {
      "line": 7,
      "value": "#"
    },
    {
      "line": 8,
      "value": "#Scenario: show map"
    },
    {
      "line": 9,
      "value": "#Given I have searched results for \"Odinsgatan\""
    },
    {
      "line": 10,
      "value": "#Then I can bring up map"
    }
  ],
  "line": 12,
  "name": "search for parkings near me",
  "description": "",
  "id": "find-parking;search-for-parkings-near-me",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I show parkings near me",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see map with parkings",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 5140976721,
  "status": "passed"
});
formatter.match({
  "location": "FindParkingSteps.i_show_parkings_near_me()"
});
formatter.result({
  "duration": 5897969439,
  "status": "passed"
});
formatter.match({
  "location": "FindParkingSteps.i_see_map_with_parkings()"
});
formatter.result({
  "duration": 31443016970,
  "status": "passed"
});
});