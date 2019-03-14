// Write a function called “multiply”.

// Given 2 numbers, “multiply” returns their product.

// Notes:
// * It should not use the multiply operator (*).

// var output = multiply(4, 7);
// console.log(output); // --> 28



function multiply(num1, num2) {
  return num1 / (1 / num2);
}



// Your Code Should Pass:

// describe("multiply", function() {
//   it("should return a number", function() {
//     expect(typeof multiply(5, 6)).toBe("number");
//   });
//   it("should not use the multiply operator", function() {
//     var body = multiply.toString();
//     expect(/\*/.test(body)).toBe(false);
//   });
//   it("should multiply two numbers", function() {
//     expect(multiply(6, 8)).toBe(48);
//   });
//   it("should multiply negative numbers", function() {
//     expect(multiply(6, -8)).toBe(-48);
//   });
//   it("should multiply with the second number as 0", function() {
//     expect(multiply(6, 0)).toBe(0);
//   });
//   it("should multiply with the first number as 0", function() {
//     expect(multiply(0, 10)).toBe(0);
//   });
//   it("should multiply negative numbers", function() {
//     expect(multiply(-4, -3)).toBe(12);
//   })
// });
