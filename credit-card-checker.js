/*1.
In order to complete this project, you should have completed the first few sections of Introduction to JavaScript (through Learn JavaScript: Loops).

Project Requirements
2.
Look over the starter code. There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.

You’ll use these arrays later to check if your functions are working properly.

3.
Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:

Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
Sum up all the digits in the credit card number.
If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.
Here’s a visual that outlines the steps. Check your function using both the provided valid and invalid numbers.


Stuck? Get a hint
4.
Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.


Stuck? Get a hint
5.
After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.

Currently, there are 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:

First Digit	Company
3	Amex (American Express)
4	Visa
5	Mastercard
6	Discover
If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.

idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.


Stuck? Get a hint
Project Extensions & Solution
6.
Great work! Visit our forums to compare your project to our sample solution code. You can also learn how to host your own solution on GitHub so you can share it with other learners! Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.

7.
If you’d like to challenge yourself further, you could consider the following:

Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.
To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
Create a function that will convert invalid numbers into valid numbers.*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validadeCred = (arr) => {
  let newArr = [];
  let sum = 0;
  let len = arr.length - 1;

  for (let i = len - 1; i >= 0; i -= 2) {
    if (arr[i] * 2 > 9) {
      newArr.push(arr[i] * 2 - 9);
    } else {
      newArr.push(arr[i] * 2);
    }
  }

  for (let j = len; j >= 0; j -= 2) {
    newArr.push(arr[j]);
  }
  console.log(newArr);

  for (let item of newArr) {
    sum += item;
  }
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

const findInvalidCards = (arr) => {
  const newArr2 = [];

  for (let k = 0; k < arr.length; k++) {
    if (validadeCred(arr[k]) === true) {
      console.log("valid card");
    } else {
      newArr2.push(arr[k]);
      console.log("invalid card");
    }
  }
  return newArr2;
};

const idInvalidCardCompanies = (arr) => {
  const idArr = [];
  arr = findInvalidCards(batch);

  for (let l = 0; l < arr.length; l++) {
    if (arr[l][0] === 3) {
      idArr.push("Amex (American Express)");
    } else if (arr[l][0] === 4) {
      idArr.push("Visa");
    } else if (arr[l][0] === 5) {
      idArr.push("Mastercard");
    } else if (arr[l][0] === 6) {
      idArr.push("Discover");
    } else {
      console.log("Company not found");
    }
  }
  return idArr;
};

console.log(validadeCred(valid1));
console.log(validadeCred(valid2));
console.log(validadeCred(valid3));
console.log(validadeCred(valid4));
console.log(validadeCred(valid5));

console.log(validadeCred(invalid1));
console.log(validadeCred(invalid2));
console.log(validadeCred(invalid3));
console.log(validadeCred(invalid4));
console.log(validadeCred(invalid5));

console.log(validadeCred(mystery1));
console.log(validadeCred(mystery2));
console.log(validadeCred(mystery3));
console.log(validadeCred(mystery4));
console.log(validadeCred(mystery5));

console.log(findInvalidCards(batch));

console.log(idInvalidCardCompanies(findInvalidCards(batch)));
