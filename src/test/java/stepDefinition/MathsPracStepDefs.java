package stepDefinition;



import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class MathsPracStepDefs {
int a;
int b;
int c;
int sub1;
int sub2;
int sub3;
int mulvalue;
List<String> printlist =new ArrayList<String>();
	
	@Test
	@Given("^user has idea of mathematics$")
	public void user_has_idea_of_mathematics() throws Throwable {
	   System.out.println("hai");
	}

	@When("^addition of two numbers is performed$")
	public void addition_of_two_numbers_is_performed() throws Throwable {
		a=6;
		b=5;
		System.out.println("output a is : "+a+"and b is : "+b);
	    
	}

	@Then("^output should be displayed$")
	public void output_should_be_displayed() throws Throwable {
	   c=a+b;
	   System.out.println("output c is :"+c);
	}
	
	@When("^subsaraction of \"([^\"]*)\" and \"([^\"]*)\" numbers is performed$")
	public void subsaraction_of_and_numbers_is_performed(String arg1, String arg2) throws Throwable {
		sub1=Integer.parseInt(arg1);
		sub2=Integer.parseInt(arg2);
		System.out.println("output a is : "+a+"and b is : "+b); 
	}

	@Then("^output should be displayed as \"([^\"]*)\"$")
	public void output_should_be_displayed_as(String arg1) throws Throwable {
		sub3=Integer.parseInt(arg1);
		 System.out.println("output c is :"+(sub1-sub2));
	   Assert.assertEquals("Not equal output sub", sub3, sub1-sub2);
	  
	}
	
	
	@When("^multiplication of \"([^\"]*)\" table is performed$")
	public void multiplication_of_table_is_performed(String arg1) throws Throwable {
	    mulvalue=Integer.parseInt(arg1);
	}

	@Then("^output should be displayed as follows$")
	public void output_should_be_displayed_as_follows(List<String> arg1) throws Throwable {
		System.out.println(arg1.size());
	    for(int i=0;i<arg1.size();i++ ) {
	    	System.out.println(" Multiplcation table **"+mulvalue+" * "+arg1.get(i)+" = "+mulvalue*Integer.parseInt(arg1.get(i)));
	    }
		
	}
	
	
	

@When("^add  sub  mul of \"([^\"]*)\" and \"([^\"]*)\"  is performed$")
public void add_sub_mul_of_and_is_performed(String arg1, String arg2) throws Throwable {
    System.out.println("add sub mul input");
}

@Then("^output should be displayed for all$")
public void output_should_be_displayed_for_all() throws Throwable {
	System.out.println("add sub mul 3 types output");
}

@When("^on \"([^\"]*)\" and \"([^\"]*)\" only add and sub is performed$")
public void on_and_only_add_and_sub_is_performed(String arg1, String arg2) throws Throwable {
	System.out.println("add sub 2 types input");
}

@Then("^for for add and sub output should be displayed only$")
public void for_for_add_and_sub_output_should_be_displayed_only() throws Throwable {
	System.out.println("add sub 2 types output");
}


@Given("^user has idea of java core$")
public void user_has_idea_of_java_core() throws Throwable {
	System.out.println("Yes i do have idea on java");
}

@When("^user has given set of inputs$")
public void user_has_given_set_of_inputs(List<String> argsnew) throws Throwable {
	System.out.println("taking all the string list inputs");
	for(int i=0;i<argsnew.size();i++) {
		printlist.add(argsnew.get(i));
	}
	
}

@Then("^all the things need to be printed$")
public void all_the_things_need_to_be_printed() throws Throwable {
	System.out.println("all list"+printlist);
}


@Given("^data is given for key mapping$")
public void data_is_given_for_key_mapping() throws Throwable {
	System.out.println("data given for mapping");
}

@When("^values are given for looping$")
public void values_are_given_for_looping() throws Throwable {
	System.out.println("values given for looping");
}

@Then("^all the \"([^\"]*)\" should be printed$")
public void all_the_should_be_printed(String arg1) throws Throwable {
	if(arg1.contains("dheraj")) {
		System.out.println("dheeraj");
	}
	else if(arg1.contains("mahalakshmi")) {
		System.out.println("mahalakshmi");
		
	}
	else {
		System.out.println("unknown");
	}
}


@Then("^all the \"([^\"]*)\" and \"([^\"]*)\" should be printed$")
public void all_the_and_should_be_printed(String username, String password) throws Throwable {
    if(username.contains("dheraj")&&password.contains("kumar")) {
    	System.out.println("dheraj"+" "+"kumar");
    }
    else if(username.contains("mahalakshmi")&&password.contains("bachu")) {
    	System.out.println("mahalakshmi"+" "+"bachu");
    }
    else {
    	System.out.println("nothing");
    }    
}

}
