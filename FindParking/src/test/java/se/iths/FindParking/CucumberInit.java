package se.iths.FindParking;


import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import se.iths.FindParking.AbstractSteps;

public class CucumberInit extends AbstractSteps{
	@Before
	public void setup(){
		System.setProperty("webdriver.chrome.driver", "C:/Selenium/chromedriver.exe");  
		driver = new ChromeDriver();  
		//driver = new FirefoxDriver();
	}
	
//	@After
//	public void teardown(){
//		 driver.quit();
//	}

}
