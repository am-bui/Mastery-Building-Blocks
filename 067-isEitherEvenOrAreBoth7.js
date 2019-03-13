// Write a function called “isEitherEvenOrAreBoth7”.
//
// Given two numbers, ‘isEitherEvenOrAreBoth7’ returns whether at least one of them is even, or, both of them are 7.
//
// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false
//
// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true



function isEitherEvenOrAreBoth7(num1, num2) {
  return num1 % 2 === 0 || num2 % 2 === 0 || (num1 && num2) === 7;
}



// Your Code Should Pass:

// describe("isEitherEvenOrAreBoth7", function() {
//   it("should return a boolean", function() {
//     expect(typeof isEitherEvenOrAreBoth7(40, 3)).toEqual("boolean");
//   });
//   it("should return true if the first number is even", function() {
//     expect(isEitherEvenOrAreBoth7(4, 3)).toBe(true);
//   });
//   it("should return true if the second number is even", function() {
//     expect(isEitherEvenOrAreBoth7(7, 8)).toBe(true);
//   });
//   it("should return true if the both numbers are even", function() {
//     expect(isEitherEvenOrAreBoth7(2, 4)).toBe(true);
//   });
//   it("should return true if the both numbers are 7", function() {
//     expect(isEitherEvenOrAreBoth7(7, 7)).toBe(true);
//   });
//   it("should return false if the both numbers are odd and not both 7", function() {
//     expect(isEitherEvenOrAreBoth7(7, 3)).toBe(false);
//   });
// });
