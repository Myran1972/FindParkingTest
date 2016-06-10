package se.iths.FindParking;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterSteps extends AbstractSteps{

	@Given("^I am on home page$")
	public void i_am_on_home_page() throws Throwable {
		driver.get("localhost:4200");
	}

	@Given("^I choose Register in menu$")
	public void i_choose_Register_in_menu() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/find-parking-goteborg-app/nav/div/div[2]/ul[2]/li[1]/a")));
		element.click();
	}

	@When("^I will write my name \"([^\"]*)\"$")
	public void i_will_write_my_name(String name) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("rg-username")));
		element.click();
		element.clear();
		element.sendKeys("M");
		element.sendKeys("a");
		element.sendKeys("r");
		element.sendKeys("i");
		element.sendKeys("a");
		element.sendKeys(" ");
		element.sendKeys("R");
		element.sendKeys("u");
		element.sendKeys("n");
		element.sendKeys("s");
		element.sendKeys("t");
		element.sendKeys("e");
		element.sendKeys("n");
	}
	
	@When("^I will write my email \"([^\"]*)\"$")
	public void i_will_write_my_email(String email) throws Throwable {
		WebElement element = driver.findElement(By.id("rg-useremail"));
		element.click();
		element.clear();
		element.sendKeys("m");
		element.sendKeys("y");
		element.sendKeys("r");
		element.sendKeys("a");
		element.sendKeys("n");
		element.sendKeys("1");
		element.sendKeys("9");
		element.sendKeys("72");
		element.sendKeys("@");
		element.sendKeys("hot");
		element.sendKeys("mail");
		element.sendKeys(".com");
	}

	@When("^I will write my password \"([^\"]*)\"$")
	public void i_will_write_my_password(String pw1) throws Throwable {
		WebElement element = driver.findElement(By.id("rg-password"));
		element.click();
		element.clear();
		element.sendKeys(pw1);
	}

	@When("^I will repeat my password \"([^\"]*)\"$")
	public void i_will_repeat_my_password(String pw2) throws Throwable {
		WebElement element = driver.findElement(By.id("rg-repeat-password"));
		element.click();
		element.clear();
		element.sendKeys(pw2);
	}

	@When("^I will push on Register$")
	public void i_will_push_on_Register() throws Throwable {
	}

	@Then("^I will be logged in to my account$")
	public void i_will_be_logged_in_to_my_account() throws Throwable {
	}

}
