package se.iths.FindParking;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SavedTrips extends AbstractSteps {
	
	@Given("^I am at my saved trips$")
	public void i_am_at_my_saved_trips() throws Throwable {
		driver.get("http://localhost:4200/login");
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("lg-useremail")));
		element.click();
		element.clear();
		element.sendKeys("Test@test.com");
		element = wait.until(ExpectedConditions.elementToBeClickable(By.id("lg-password")));
		element.click();
		element.clear();
		element.sendKeys("testtest");
		element = wait.until(ExpectedConditions.elementToBeClickable(By.id("lg-confirm-btn-account")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"meny-gbg-nav\"]/ul[1]/li[3]/a")));
		element.click();
	}
	

	@Given("^the trip \"([^\"]*)\" exists$")
	public void the_trip_exists(String arg1) throws Throwable {
		driver.get("http://localhost:4200/create/new/trip");
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/trip-creator/div[1]/div[2]/div[2]/input")));
		element.sendKeys(arg1);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/trip-creator/div[1]/div[7]/button")));
		element.click();
	}
	@When("^I click \"([^\"]*)\"$")
	public void i_click(String arg1) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"deletebutton\"]/button")));
		element.click();
	}
	@Then("^the trip \"([^\"]*)\" should NOT exist$")
	public void the_trip_should_NOT_exist(String arg1) throws Throwable {
		driver.get("http://localhost:4200/my-trips");
		String bodyText = driver.findElement(By.tagName("body")).getText();
		Assert.assertFalse("Text not found!", bodyText.contains(arg1));
	}
	
	@When("^I change \"([^\"]*)\"$")
	public void i_change(String arg1) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/router-outlet[2]/div/div[3]/button[1]")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/trip-creator/div[1]/div[5]/div/accordion/div/accordion-group/div/div[1]/h4/a/div/div[2]/button")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"myModal\"]/div/div/div[3]/button[2]")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/trip-creator/div[1]/div[6]/button")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/destination-creator/div[1]/div[2]/div[2]/input")));
		element.click();
		element.clear();
		element.sendKeys(arg1);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/destination-creator/div[1]/div[7]/button")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/trip-creator/div[1]/div[7]/button")));
		element.click();
		
	}
	@Then("^the \"([^\"]*)\" for trip \"([^\"]*)\" should be \"([^\"]*)\"$")
	public void the_for_trip_should_be(String arg1, String arg2, String arg3) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"oneTrip\"]/div[1]/h4")));
		element.click();
		String bodyText = driver.findElement(By.xpath("/html/body/find-parking-goteborg-app/router-outlet[2]/div/div[3]/div[3]/div/div[1]/h4/a")).getText();
		Assert.assertTrue("Text not found!", bodyText.contains(arg3));
	}
	
	@Then("^changes should not have been saved$")
	public void changes_should_not_have_been_saved() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"oneTrip\"]/div[1]/h4")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("body > find-parking-goteborg-app > router-outlet:nth-child(3) > div > div.container-fluid > button:nth-child(4)")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/trip-creator/div[1]/div[2]/div[2]/input")));
		element.click();
		element.clear();
		element.sendKeys("this is wrong");
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"meny-gbg-nav\"]/ul[1]/li[3]/a")));
		element.click();
		String bodyText = driver.findElement(By.id("body")).getText();
		Assert.assertFalse("Text not found!", bodyText.contains("this is wrong"));
	}
	@Then("^changes should have been saved$")
	public void changes_should_have_been_saved() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"oneTrip\"]/div[1]/h4")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("body > find-parking-goteborg-app > router-outlet:nth-child(3) > div > div.container-fluid > button:nth-child(4)")));
		element.click();
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/create/trip-creator/div[1]/div[2]/div[2]/input")));
		element.click();
		element.clear();
		element.sendKeys("this is right");
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"meny-gbg-nav\"]/ul[1]/li[3]/a")));
		element.click();
		String bodyText = driver.findElement(By.id("body")).getText();
		Assert.assertTrue("Text not found!", bodyText.contains("this is right"));
	}

}
