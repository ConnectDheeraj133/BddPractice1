@smoke @test
Feature: Mathematics Operations

@add      @addition
Scenario: Addition of two numbers
 
Given user has idea of mathematics
When addition of two numbers is performed
Then output should be displayed








@sub
Scenario: Substraction of two numbers
 
Given user has idea of mathematics
When subsaraction of "5" and "6" numbers is performed
Then output should be displayed as "-1" 

@div
Scenario: Multiplication of two numbers
 
Given user has idea of mathematics
When multiplication of "5" table is performed
Then output should be displayed as follows
|1|2|3|4|5| 


@add @sub @div
Scenario: add sub mul of two numbers
 
Given user has idea of mathematics
When add  sub  mul of "5" and "6"  is performed
Then output should be displayed for all 

@add @sub
Scenario: only add and sub of two numbers
 
Given user has idea of mathematics
When on "3" and "4" only add and sub is performed 
Then for for add and sub output should be displayed only 

@print
Scenario: print all the inputs
 
Given user has idea of java core
When user has given set of inputs
|bdd|cucumber|java|automation|jenkins|
Then all the things need to be printed


@hugedata
Scenario Outline: key value details mapping
 
Given data is given for key mapping
When values are given for looping
Then all the "<loginnames>" should be printed
Examples: 
| loginnames |
| dheraj      |
| mahalakshmi |
| ravindra    |




@hugedatanew @hugedata
Scenario Outline: key value details mapping
 
Given data is given for key mapping
When values are given for looping
Then all the "<loginnames>" and "<Passwords>" should be printed
Examples: 
| loginnames | Passwords |
| dheraj      | kumar |
| mahalakshmi | bachu |
| ravindra    | doctor|
