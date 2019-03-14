// Write a function called “modulo”.

// Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.
//
// var output = modulo(25, 4);
// console.log(output); // --> 1



function modulo(num1, num2) {
  let m = Math.floor(Math.abs(num1) / Math.abs(num2));
  let r = Math.abs(num1) - (m * Math.abs(num2));
  return num1 < 0 ? r * -1 : r;
}



// Your Code Should Pass:

// describe("modulo", function() {
//   it("should return a number", function() {
//     expect(typeof modulo(8, 2)).toBe("number");
//   });
//   it("should not use the modulo operator", function() {
//     var body = modulo.toString();
//     expect(/%/.test(body)).toBe(false);
//   });
//   it("should return 0 when there is no remainder", function() {
//     expect(modulo(4, 4)).toBe(0);
//   });
//   it("should return a negative number when the first number is negative", function() {
//     expect(modulo(-4, 3)).toBe(-1);
//   });
//   it("should return a positive number when the second number is negative", function() {
//     expect(modulo(4, -3)).toBe(1);
//   });
//   it("should return 0 when the first number is 0", function() {
//     expect(modulo(0, 4)).toBe(0);
//   });
//   it("should return NaN when the first number is NaN", function() {
//     expect(isNaN(modulo(NaN, 2))).toBe(true);
//   });
//   it("should return NaN when the second number is NaN", function() {
//     expect(isNaN(modulo(2, NaN))).toBe(true);
//   });
//   it("should return NaN when the second number is 0", function() {
//     expect(isNaN(modulo(4, 0))).toBe(true);
//   });
//   it("should return 2 when given 12 and 5", function() {
//     expect(modulo(12, 5)).toBe(2);
//   });
//   it("should return minus_1 when given minus_1 and 2", function() {
//     expect(modulo(-1, 2)).toBe(-1);
//   });
//   it("should return 2 when given 12 and 5", function() {
//     expect(modulo(12, 5)).toBe(2);
//   });
//   it("should return 1 when given 1 and 2", function() {
//     expect(modulo(1, 2)).toBe(1);
//   });
//   it("should return 2 when given 2 and 3", function() {
//     expect(modulo(2, 3)).toBe(2);
//   });
//   it("should return 0 when given minus 4 and 2", function() {
//     expect(modulo(-4, 2)).toBe(0);
//   });
//   it("should return 1 point 5 when given 5 point 5 and 2", function() {
//     expect(modulo(5.5, 2)).toBe(1.5);
//   });
//
// });
