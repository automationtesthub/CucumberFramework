$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test vtiger login functionality",
  "description": "",
  "id": "test-vtiger-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Valid and invalid Login",
  "description": "",
  "id": "test-vtiger-login-functionality;test-valid-and-invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user need to navigate on vtiger website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter user id as \"\u003cUsername\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Logout link should be appered on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-vtiger-login-functionality;test-valid-and-invalid-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 9,
      "id": "test-vtiger-login-functionality;test-valid-and-invalid-login;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 10,
      "id": "test-vtiger-login-functionality;test-valid-and-invalid-login;;2"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 11,
      "id": "test-vtiger-login-functionality;test-valid-and-invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test Valid and invalid Login",
  "description": "",
  "id": "test-vtiger-login-functionality;test-valid-and-invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user need to navigate on vtiger website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter user id as \"admin\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Logout link should be appered on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_need_to_navigate_on_vtiger_website()"
});
formatter.result({
  "duration": 5355780859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    },
    {
      "val": "admin",
      "offset": 42
    }
  ],
  "location": "LoginTest.enter_user_id_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 3341850419,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.logout_link_should_be_appered_on_home_page()"
});
formatter.result({
  "duration": 30723918057,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Valid and invalid Login",
  "description": "",
  "id": "test-vtiger-login-functionality;test-valid-and-invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user need to navigate on vtiger website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter user id as \"admin\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Logout link should be appered on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_need_to_navigate_on_vtiger_website()"
});
formatter.result({
  "duration": 3270250368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    },
    {
      "val": "admin",
      "offset": 42
    }
  ],
  "location": "LoginTest.enter_user_id_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 3284971067,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.logout_link_should_be_appered_on_home_page()"
});
formatter.result({
  "duration": 30671356473,
  "status": "passed"
});
});