// Write a function called “multiplyBetween”.

// Given 2 integers, “multiplyBetween” returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The product between 1 and 4 is 1 * 2 * 3 = 6.
// * If num2 is not greater than num1, it should return 0.
// var output = multiplyBetween(2, 5); console.log(output); // --> 24



function multiplyBetween(num1, num2) {
  let nums = [];
  for (let i = num1; i < num2; i++){
    nums.push(i);
  }
  return num2 > num1 ? nums.reduce((a,b) => a * b) : 0;
}



// Your Code Should Pass:

// describe("multiplyBetween", function() {
//   it("should return a number", function() {
//     expect(typeof multiplyBetween(4, 8)).toBe("number");
//   });
//   it("should multiply between the first and second number exclusive", function() {
//     expect(multiplyBetween(4, 6)).toBe(20);
//   });
//   it("should multiply between the first and second number when they are one number apart", function() {
//     expect(multiplyBetween(4, 5)).toBe(4);
//   });
//   it("should multiply between the first and second number exclusive with negatives", function() {
//     expect(multiplyBetween(-5, -3)).toBe(20);
//   });
//   it("should return 0 if the second number is less than the first", function() {
//     expect(multiplyBetween(1, -3)).toBe(0);
//   });
//   it("should return 0 if the 2 numbers are equal", function() {
//     expect(multiplyBetween(1, 1)).toBe(0);
//   });
// });
