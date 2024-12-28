// Alert:

// Task 1:
alert("Welcome to JavaScript!");

// Task 2:
var Name = prompt("What is your name?");
alert("hello " + Name);

//  Variables for Strings:

// Task 1:
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

alert("HELLO, " + firstName + lastName);

// Task 2:
var favHobby ="Reading Novels";
alert("My favorite hobby is " + favHobby);

// Variables for Numbers:

// Task 1:
var yearOfBirth = 2006; 
var currentYear = 2024; 

var age = currentYear - yearOfBirth;

alert("My age is: " + age);

// Task 2:
var length = prompt ("Enter the length of rectangle?");
var width = prompt ("Enter the length of rectangle?");

var area = length * width;

alert("The area of rectangle: " + area);

// Variable Names Legal and Illegal:

// Task 1:
// Legal variable names
var userName = "Areesha";
var _age = 18;
var roll_no123 = 320019;

alert("userName: " + userName);
alert("_age: " + _age);
alert("roll_no123: " + roll_no123);

// Illegal variables:
// var 123total = 100;    // Cannot start with a number
// var user-name = "Jane"; // Hyphens are not allowed
// var var = "Hello";     // Reserved keyword

// Mention illegal variables
alert("Illegal variables: 123total, user-name, var (commented out).");


// Task 2:
var myAge = 18; // my age
alert("My age is: " + myAge);

myAge = 20; // friend's age
alert("My friend's age is: " + myAge);

// Math Expressions: Familiar Operators:

// Task 1:
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var sum = num1 + num2;
alert("The sum is: " + sum);

// Task 2:
var result = 6 * 8;
alert("The result of 6 multiplied by 8 is: " + result);

// Task 3:
var remainder = 17 % 5;
alert("The remainder when 17 is divided by 5 is: " + remainder);

// Additional Challenges:

// Challenge 1:
var birthYear = prompt("Enter your birth year:");
var currentYear = 2024;
var age = currentYear - birthYear;
alert("Your age is: " + age);

// Challenge 2:
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
alert("Sum: " + num1 + num2);
alert("Difference: " + num1 - num2);
alert("Product: " + num1 * num2);
alert("Quotient: " + num1 / num2);
alert("Remainder: " + num1 % num2);

alert("THE END");