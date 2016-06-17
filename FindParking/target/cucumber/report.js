$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("se/iths/FindParking/FindParking.feature");
formatter.feature({
  "line": 1,
  "name": "find parking",
  "description": "",
  "id": "find-parking",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7826116300,
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
  "duration": 4508236905,
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
  "duration": 28827715691,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to send message to renderer\n  (Session info: chrome\u003d51.0.2704.84)\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 511 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Maria-Dator\u0027, ip: \u0027192.168.1.140\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\Maria\\AppData\\Local\\Temp\\scoped_dir21496_15540}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d51.0.2704.84, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 904e0ee89fe019940f2646e87a7d67db\n*** Element info: {Using\u003dclass name, value\u003daddress-field}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:899)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:653)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:646)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat se.iths.FindParking.FindParkingSteps.i_search_for(FindParkingSteps.java:22)\r\n\tat ✽.When I search for \"Odinsgatan\"(se/iths/FindParking/FindParking.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.before({
  "duration": 5895817896,
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
  "name": "I have searced results",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I can bring up map",
  "keyword": "Then "
});
formatter.match({
  "location": "FindParkingSteps.i_have_searced_results()"
});
formatter.result({
  "duration": 71483730834,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:653)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:646)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat se.iths.FindParking.FindParkingSteps.i_search_for(FindParkingSteps.java:22)\r\n\tat se.iths.FindParking.FindParkingSteps.i_have_searced_results(FindParkingSteps.java:41)\r\n\tat ✽.Given I have searced results(se/iths/FindParking/FindParking.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindParkingSteps.i_can_bring_up_map()"
});
formatter.result({
  "status": "skipped"
});
});