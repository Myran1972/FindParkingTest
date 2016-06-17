package se.iths.FindParking;

import org.junit.Assert;
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
	public static void i_am_on_home_page() throws Throwable {
		driver.get("localhost:4200");
	}

	@Given("^I choose Register in menu$")
	public void i_choose_Register_in_menu() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Register")));
		element.click();
	}

	@When("^I will write my name \"([^\"]*)\"$")
	public void i_will_write_my_name(String name) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("rg-username")));
		element.click();
		element.clear();
		for (int i = 0; i < name.length(); i++){
	        char c = name.charAt(i);
	        String s = new StringBuilder().append(c).toString();
	        element.sendKeys(s);
	    }       
	}
	
	@When("^I will write my email \"([^\"]*)\"$")
	public void i_will_write_my_email(String email) throws Throwable {
		WebElement element = driver.findElement(By.id("rg-useremail"));
		element.click();
		element.clear();
		for (int i = 0; i < email.length(); i++){
	        char c = email.charAt(i);
	        String s = new StringBuilder().append(c).toString();
	        element.sendKeys(s);
	    }   
	}

	@When("^I will write my password \"([^\"]*)\"$")
	public void i_will_write_my_password(String pw1) throws Throwable {
		WebElement element = driver.findElement(By.id("rg-password"));
		element.click();
		element.clear();
		for (int i = 0; i < pw1.length(); i++){
	        char c = pw1.charAt(i);
	        String s = new StringBuilder().append(c).toString();
	        element.sendKeys(s);
	    }   
	}

	@When("^I will repeat my password \"([^\"]*)\"$")
	public void i_will_repeat_my_password(String pw2) throws Throwable {
		WebElement element = driver.findElement(By.id("rg-repeat-password"));
		element.click();
		element.clear();
		for (int i = 0; i < pw2.length(); i++){
	        char c = pw2.charAt(i);
	        String s = new StringBuilder().append(c).toString();
	        element.sendKeys(s);
	    }   
	}

	@When("^I will push on Register$")
	public void i_will_push_on_Register() throws Throwable {
		driver.findElement(By.id("rg-confirm-btn-account")).click();
	}
	
	@Then("^I will see my name \"([^\"]*)\" so I know I am logged in to my account$")
	public static void i_will_see_my_name_so_I_know_I_am_logged_in_to_my_account(String arg1) throws Throwable {
		Thread.sleep(3000);
		WebElement element = driver.findElement(By.xpath("/html/body/find-parking-goteborg-app/nav/div/div[2]/ul[2]/li/a"));
	    Assert.assertEquals(arg1, element.getText());
	}
	
	@Then("^I will see message \"([^\"]*)\"$")
	public void i_will_see_message(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    WebElement element = driver.findElement(By.xpath("/html/body/find-parking-goteborg-app/router-outlet[2]/div/div/div/div/account-feedback/span"));
	    Assert.assertEquals(arg1, element.getText());
	}
}
