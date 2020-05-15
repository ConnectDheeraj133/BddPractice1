package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	
	@Before
	public void beforematchs() {
		System.out.println("before start");
	}
	
	@After
	public void aftermath(){
		System.out.println("After end");
}
	
	@Before("@add")
	public void beforemathsadd() {
		System.out.println("before only add");
	}
	
	@After("@sub")
	public void aftermathsub(){
		System.out.println("After only sub");
}
	
	
	
}
