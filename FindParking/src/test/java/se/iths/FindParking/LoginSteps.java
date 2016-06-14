package se.iths.FindParking;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
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
}
