package se.iths.FindParking;

import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindParkingSteps extends AbstractSteps {

	@When("^I search for \"([^\"]*)\"$")
	public void i_search_for(String arg1) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.className("input-lg")));
		for (char c : arg1.toCharArray())
			element.sendKeys(c + "");
		
		element.sendKeys(Keys.ESCAPE);
		driver.findElement(By.xpath("//button[text() = 'Find Parking']")).click();
	}

	@Then("^I will see list of parking options near \"([^\"]*)\"$")
	public void i_will_see_list_of_parking_options_near(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		List<WebElement> parking = driver.findElements(By.className("list-group-item"));
		Assert.assertFalse(parking.isEmpty());
		Assert.assertTrue(parking.stream().anyMatch((i) -> i.getText().contains(arg1))); //->Lambda methods .stream() Streams istället för forloop
	}

	@Given("^I have searched results for \"([^\"]*)\"$")
	public void i_have_searched_results_for(String arg1) throws Throwable {
		RegisterSteps.i_am_on_home_page();
	    i_search_for(arg1);
	    i_will_see_list_of_parking_options_near(arg1);
	}

	@Then("^I can bring up map$")
	public void i_can_bring_up_map() throws Throwable {
	    driver.findElement(By.tagName("h4")).findElement(By.tagName("button")).click();
	    try{
	    	driver.findElement(By.tagName("iframe"));
	    }catch (Exception e){
	    	Assert.fail(e.toString());
	    }
	}
	
	@When("^I show parkings near me$")
	public void i_show_parkings_near_me() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("showNearMe")));
		element.click();
	}

	@Then("^I see map with parkings$") //halv-automatiskt, du får kolla kartan på bilden som sparas enl nedan
	public void i_see_map_with_parkings() throws Throwable {
		Thread.sleep(30000);
		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("c:\\users\\maria\\desktop\\TestFindParking\\FindParkingTest\\Screenshot\\screenshot.png"));
	}
}
