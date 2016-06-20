$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("se/iths/FindParking/FindParking.feature");
formatter.feature({
  "line": 1,
  "name": "find parking",
  "description": "",
  "id": "find-parking",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2807945552,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "search parking by adress",
  "description": "",
  "id": "find-parking;search-parking-by-adress",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for \"Odinsgatan\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will see list of parking options near \"Odinsgatan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2378205239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Odinsgatan",
      "offset": 14
    }
  ],
  "location": "FindParkingSteps.i_search_for(String)"
});
formatter.result({
  "duration": 6315500838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Odinsgatan",
      "offset": 41
    }
  ],
  "location": "FindParkingSteps.i_will_see_list_of_parking_options_near(String)"
});
formatter.result({
  "duration": 5310518036,
  "status": "passed"
});
formatter.before({
  "duration": 1959380945,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "show map",
  "description": "",
  "id": "find-parking;show-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have searched results for \"Odinsgatan\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I can bring up map",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Odinsgatan",
      "offset": 29
    }
  ],
  "location": "FindParkingSteps.i_have_searched_results_for(String)"
});
formatter.result({
  "duration": 16005442615,
  "status": "passed"
});
formatter.match({
  "location": "FindParkingSteps.i_can_bring_up_map()"
});
formatter.result({
  "duration": 94970478,
  "status": "passed"
});
formatter.before({
  "duration": 2082730856,
  "status": "passed"
});
formatter.scenario({
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
  "duration": 3139427731,
  "status": "passed"
});
formatter.match({
  "location": "FindParkingSteps.i_show_parkings_near_me()"
});
formatter.result({
  "duration": 7365249214,
  "status": "passed"
});
formatter.match({
  "location": "FindParkingSteps.i_see_map_with_parkings()"
});
formatter.result({
  "duration": 31386639095,
  "status": "passed"
});
formatter.uri("se/iths/FindParking/Login.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2046528050,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "login with existing user account",
  "description": "",
  "id": "login;login-with-existing-user-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I choose Login in menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I will write my useremail \"myran1972@hotmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I will write my userpassword \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I will push on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I will see my name \"Maria Runsten\" so I know I am logged in to my account",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2271590432,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_choose_Login_in_menu()"
});
formatter.result({
  "duration": 9308313812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myran1972@hotmail.com",
      "offset": 27
    }
  ],
  "location": "LoginSteps.i_will_write_my_useremail(String)"
});
formatter.result({
  "duration": 539286010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "LoginSteps.i_will_write_my_userpassword(String)"
});
formatter.result({
  "duration": 247215058,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_will_push_on_Login()"
});
formatter.result({
  "duration": 55790389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_my_name_so_I_know_I_am_logged_in_to_my_account(String)"
});
formatter.result({
  "duration": 3070442790,
  "status": "passed"
});
formatter.before({
  "duration": 1984244869,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "login without correct email",
  "description": "",
  "id": "login;login-without-correct-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I choose Login in menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I will write my useremail \"myran1972hotmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I will write my userpassword \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I will push on Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I will see the message \"The specified email address is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2155776922,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_choose_Login_in_menu()"
});
formatter.result({
  "duration": 8146991639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myran1972hotmail.com",
      "offset": 27
    }
  ],
  "location": "LoginSteps.i_will_write_my_useremail(String)"
});
formatter.result({
  "duration": 988702582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "LoginSteps.i_will_write_my_userpassword(String)"
});
formatter.result({
  "duration": 254070774,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_will_push_on_Login()"
});
formatter.result({
  "duration": 58125986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The specified email address is invalid.",
      "offset": 24
    }
  ],
  "location": "LoginSteps.i_will_see_the_message(String)"
});
formatter.result({
  "duration": 1147166532,
  "status": "passed"
});
formatter.before({
  "duration": 2028730451,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "forgot password",
  "description": "",
  "id": "login;forgot-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I choose Login in menu",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Forgot password?",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I will write my useremail to reset \"myran1972@hotmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I will push on Reset",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I will see error message \"Password reset email sent successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2778218705,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_choose_Login_in_menu()"
});
formatter.result({
  "duration": 7573733320,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_Forgot_password()"
});
formatter.result({
  "duration": 639842383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myran1972@hotmail.com",
      "offset": 36
    }
  ],
  "location": "LoginSteps.i_will_write_my_useremail_to_reset(String)"
});
formatter.result({
  "duration": 435661213,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_will_push_on_Reset()"
});
formatter.result({
  "duration": 57140265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password reset email sent successfully",
      "offset": 26
    }
  ],
  "location": "LoginSteps.i_will_see_error_message(String)"
});
formatter.result({
  "duration": 2238023744,
  "status": "passed"
});
formatter.before({
  "duration": 1960724663,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "forgot password with invalid email",
  "description": "",
  "id": "login;forgot-password-with-invalid-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I choose Login in menu",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Forgot password?",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I will write my useremail to reset \"myran1972hotmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I will push on Reset",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I will see error message \"Error: The specified user does not exist.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2408379992,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_choose_Login_in_menu()"
});
formatter.result({
  "duration": 9896128465,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_Forgot_password()"
});
formatter.result({
  "duration": 693263918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myran1972hotmail.com",
      "offset": 36
    }
  ],
  "location": "LoginSteps.i_will_write_my_useremail_to_reset(String)"
});
formatter.result({
  "duration": 404971635,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_will_push_on_Reset()"
});
formatter.result({
  "duration": 64617547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error: The specified user does not exist.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.i_will_see_error_message(String)"
});
formatter.result({
  "duration": 1142101620,
  "status": "passed"
});
formatter.before({
  "duration": 2060612667,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "forgot password with no email",
  "description": "",
  "id": "login;forgot-password-with-no-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I choose Login in menu",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on Forgot password?",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I will write my useremail to reset \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I will push on Reset",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I will see error message \"No email found.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2502950597,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_choose_Login_in_menu()"
});
formatter.result({
  "duration": 8213659044,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_Forgot_password()"
});
formatter.result({
  "duration": 647836954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "LoginSteps.i_will_write_my_useremail_to_reset(String)"
});
formatter.result({
  "duration": 20823737,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_will_push_on_Reset()"
});
formatter.result({
  "duration": 56433714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No email found.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.i_will_see_error_message(String)"
});
formatter.result({
  "duration": 46830623,
  "status": "passed"
});
formatter.before({
  "duration": 1953463739,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Logout",
  "description": "",
  "id": "login;logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I am logged in as \"myran1972@hotmail.com\" and password \"password\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I logout",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I will be logged out",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myran1972@hotmail.com",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 56
    }
  ],
  "location": "LoginSteps.i_am_logged_in_as_and_password(String,String)"
});
formatter.result({
  "duration": 14976648529,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_logout()"
});
formatter.result({
  "duration": 3924506256,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_will_be_logged_out()"
});
formatter.result({
  "duration": 7068440146,
  "status": "passed"
});
formatter.uri("se/iths/FindParking/Register.feature");
formatter.feature({
  "line": 1,
  "name": "register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3234536153,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "register with email",
  "description": "",
  "id": "register;register-with-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I will write my name \"Maria Runsten\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I will write my email \"runsten.maria@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I will write my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I will repeat my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will see my name \"Maria Runsten\" so I know I am logged in to my account",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 3483151174,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 8454522949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 417263807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "runsten.maria@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 527220872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 242540165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 255370563,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 61448950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_my_name_so_I_know_I_am_logged_in_to_my_account(String)"
});
formatter.result({
  "duration": 3078256721,
  "status": "passed"
});
formatter.before({
  "duration": 2772254696,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "register with invalid email",
  "description": "",
  "id": "register;register-with-invalid-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I will write my name \"Maria Runsten\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I will write my email \"kallemail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I will write my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I will repeat my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I will see message \"The specified email address is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 3843554708,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 9943817129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 435045394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kallemail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 364458912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 237934245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 249122046,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 54871996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The specified email address is invalid.",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_message(String)"
});
formatter.result({
  "duration": 3034435815,
  "status": "passed"
});
formatter.before({
  "duration": 2788995549,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "register with already existing email",
  "description": "",
  "id": "register;register-with-already-existing-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I will write my name \"Maria Runsten\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I will write my email \"myran1972@hotmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will write my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will repeat my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will see message \"The specified email address is already in use.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2805316823,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 8926510544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 400669109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myran1972@hotmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 479150809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 242464625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 238186731,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 53762289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The specified email address is already in use.",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_message(String)"
});
formatter.result({
  "duration": 3069727619,
  "status": "passed"
});
formatter.before({
  "duration": 2072320630,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "register with too short password",
  "description": "",
  "id": "register;register-with-too-short-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I will write my name \"Maria Runsten\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I will write my email \"runsten.maria@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I will write my password \"passw\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I will repeat my password \"passw\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I will see message \"Password is too short\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 1785624552,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 7693213832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 432937238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "runsten.maria@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 541244728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passw",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 186445152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passw",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 184285678,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 50771047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is too short",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_message(String)"
});
formatter.result({
  "duration": 3035709330,
  "status": "passed"
});
formatter.before({
  "duration": 1946655648,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "register with different passwords",
  "description": "",
  "id": "register;register-with-different-passwords",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I will write my name \"Maria Runsten\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I will write my email \"runsten.maria@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I will write my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I will repeat my password \"passw\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I will see message \"Passwords don\u0027t match\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 2241624237,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 9851329227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 899786844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "runsten.maria@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 497310510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 240023105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passw",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 184683498,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 59931159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Passwords don\u0027t match",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_message(String)"
});
formatter.result({
  "duration": 3071233503,
  "status": "passed"
});
formatter.before({
  "duration": 3139864552,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "register without username",
  "description": "",
  "id": "register;register-without-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I will write my name \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I will write my email \"runsten.maria@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I will write my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I will repeat my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I will see message \"User name is missing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 3983825702,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 7308429586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 734949573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "runsten.maria@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 482263983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 251713826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 256909291,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 49631370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User name is missing",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_message(String)"
});
formatter.result({
  "duration": 3082082603,
  "status": "passed"
});
formatter.before({
  "duration": 3057649753,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "register without email",
  "description": "",
  "id": "register;register-without-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I will write my name \"Maria Runsten\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "I will write my email \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I will write my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I will repeat my password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I will see message \"Fill user email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 3828419503,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 9506109752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 923099724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 70737974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 291921102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 281012063,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 50808407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fill user email",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_message(String)"
});
formatter.result({
  "duration": 3051953010,
  "status": "passed"
});
formatter.before({
  "duration": 3870642563,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "register without password",
  "description": "",
  "id": "register;register-without-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I choose Register in menu",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I will write my name \"Maria Runsten\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I will write my email \"runsten.maria@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I will write my password \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I will repeat my password \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I will push on Register",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I will see message \"Password is too short\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page()"
});
formatter.result({
  "duration": 7949431763,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_choose_Register_in_menu()"
});
formatter.result({
  "duration": 45502943618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria Runsten",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.i_will_write_my_name(String)"
});
formatter.result({
  "duration": 940455165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "runsten.maria@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.i_will_write_my_email(String)"
});
formatter.result({
  "duration": 509202399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.i_will_write_my_password(String)"
});
formatter.result({
  "duration": 67567734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_will_repeat_my_password(String)"
});
formatter.result({
  "duration": 102292574,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_will_push_on_Register()"
});
formatter.result({
  "duration": 55654497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is too short",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.i_will_see_message(String)"
});
formatter.result({
  "duration": 3076758638,
  "status": "passed"
});
});