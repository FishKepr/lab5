'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  var sumResult = a + b;
  var result = [sumResult, "The sum of " + a + " and " + b + " is " + sumResult + "."];
  console.log(result);
  return result;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
var result = sum(4, 7);
//alert('The array sum returned is: ' + result);
var element = document.getElementById('sum');
element.textContent = "Result array returned is: " + result;

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var multiplyResult = a * b;
  var result = [multiplyResult, "The product of " + a + " and " + b + " is " + multiplyResult + "."];
  console.log(result);
  return result;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);
result = multiply(5,9);
element = document.getElementById('multiply');
element.textContent = "Result array returned from multiply is: " + result;
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  var result = sum(a,b);
  var element1 = sum(result[0],c);
  console.log("element1: " + element1);
  result = multiply(a,b);
  var element2 = multiply(result[0],c);
  console.log("element2: " + element2);
  var element3 = a + " and " + b + " and " + c + " sum to " + element1[0] + ".";
  var element4 = "The product of " + a + " and " + b + " and " + c + " is " + element2[0] + ".";
  return [element1[0], element2[0], element3, element4];

}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);
result = sumAndMultiply(4,7,5);
element = document.getElementById('sumAndMultiply1');
element.textContent = "Result array returned from sumAndMultiply is: " + result;
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(testArray) { //eslint-disable-line
  var int1 = testArray[0];
  var int2 = testArray[1];
  var int3 = testArray[2];
  var result = sum(int1,int2);
  var element1 = sum(result[0],int3);
  console.log("sumArray element1: " + element1);
  var element2 = int1 + "," + int2 + "," + int3 + " was passed in as an array of numbers, and " + element1[0] + " is their sum.";
  return [element1[0],element2];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);
result = sumArray(testArray);
element = document.getElementById('sumArray');
element.textContent = "Result array returned from sumArray is: " + result;
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray) { //eslint-disable-line
  var int1 = testArray[0];
  var int2 = testArray[1];
  var int3 = testArray[2];
  var result = multiply(int1,int2);
  var element1 = multiply(result[0],int3);
  console.log("multiplyArray element1: " + element1);
  var element2 = "The numbers " + int1 + "," + int2 + "," + int3 + " have a product of " + element1[0] + ".";
  return [element1[0],element2];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);
result = multiplyArray(testArray);
element = document.getElementById('multiplyArray');
element.textContent = "Result array returned from multiplyArray is: " + result;
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.