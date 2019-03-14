// Write a function called “sumDigits”.

// Given a number, “sumDigits” returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:
// * In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// * Be sure to familiarize yourself with the “toString” method, as well as the “Number” function.



function sumDigits(num) {
  let digits = Math.abs(num).toString().split('').map(num => Number(num));
  if (num < 0) digits[0] *= -1;
  return digits.reduce((a,b) => a + b);
}

/*
Math.abs() returns the absolute value of the number.
toString() returns a string representing the specified Number object
.split('') splits the strings into an array of substrings
.map(num => Number(num)) Turns each stringed digit into a number (now an array of Numbers)
if num is negative, take the first number of the digits array and make it positive
by multiplying itself to -1.
reduce over the digits array, adding the numbers together
*/



// Your Code Should Pass:

// describe("sumDigits", function() {
//   it("should return a number", function() {
//     expect(typeof sumDigits(2002)).toBe("number");
//   });
//   it("should sum the digits of a positive number", function() {
//     expect(sumDigits(2002)).toBe(4);
//   });
//   it("should sum the digits of a negative number", function() {
//     expect(sumDigits(-2004)).toBe(2);
//   });
//   it("should sum return 0 if the number is 0", function() {
//     expect(sumDigits(0)).toBe(0);
//   });
// });
