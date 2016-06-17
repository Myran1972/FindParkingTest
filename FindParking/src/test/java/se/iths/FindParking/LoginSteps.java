package se.iths.FindParking;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginSteps extends AbstractSteps{

	
	@Given("^I choose Login in menu$")
	public void i_choose_Login_in_menu() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Login")));
		element.click();
	}
	
	@When("^I will write my useremail \"([^\"]*)\"$")
	public void i_will_write_my_useremail(String arg1) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("lg-useremail")));
		element.click();
		element.clear();
		for (int i = 0; i < arg1.length(); i++){
	        char c = arg1.charAt(i);
	        String s = new StringBuilder().append(c).toString();
	        element.sendKeys(s);
	    }       
	}

	@When("^I will write my userpassword \"([^\"]*)\"$")
	public void i_will_write_my_userpassword(String pw1) throws Throwable {
		WebElement element = driver.findElement(By.id("lg-password"));
		element.click();
		element.clear();
		for (int i = 0; i < pw1.length(); i++){
	        char c = pw1.charAt(i);
	        String s = new StringBuilder().append(c).toString();
	        element.sendKeys(s);
	    }   
	}

	@When("^I will push on Login$")
	public void i_will_push_on_Login() throws Throwable {
		driver.findElement(By.id("lg-confirm-btn-account")).click();
	}
	
	@When("^I click on Forgot password\\?$")
	public void i_click_on_Forgot_password() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Forgot password?")));
		element.click();
	}
	
	@When("^I will write my useremail to reset \"([^\"]*)\"$")
	public void i_will_write_my_useremail_to_reset(String arg1) throws Throwable {
		WebElement element = driver.findElement(By.id("lg-reset-email"));
		for (char c : arg1.toCharArray())
			element.sendKeys(c + "");
	}

	@When("^I will push on Reset$")
	public void i_will_push_on_Reset() throws Throwable {
	    driver.findElement(By.id("lg-confirm-reset-btn")).click();
	}
	
	@Then("^I will see error message \"([^\"]*)\"$") 
	public void i_will_see_error_message(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	   WebDriverWait wait = new WebDriverWait(driver, 60);
	   wait.until(ExpectedConditions. textToBePresentInElement((By.cssSelector("#lg-account-form > div.lg-reset-pass-form.col-xs-12 > account-feedback > span")), arg1));
	}
	
	@Given("^I am logged in as \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void i_am_logged_in_as_and_password(String arg1, String arg2) throws Throwable {
		RegisterSteps.i_am_on_home_page();
		i_choose_Login_in_menu();
		i_will_write_my_useremail(arg1);
		i_will_write_my_userpassword(arg2);
		i_will_push_on_Login();
	}

	@When("^I logout$")
	public void i_logout() throws Throwable {
		Thread.sleep(3000);
	    WebElement element = driver.findElement(By.cssSelector("#meny-gbg-nav > ul.nav.navbar-nav.navbar-right > li > a"));
	    element.click();
	    WebElement logout = driver.findElement(By.cssSelector("#meny-gbg-nav > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(2) > a"));
	    logout.click();
	}

	@Then("^I will be logged out$")
	public void i_will_be_logged_out() throws Throwable {
		Thread.sleep(7000);
	    WebElement element = driver.findElement(By.linkText("Login"));
	    Assert.assertEquals("Login", element.getText());
	}
}

