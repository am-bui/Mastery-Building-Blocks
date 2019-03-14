// Write a function called “computeSumBetween”.

// Given 2 integers, “computeSumBetween” returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The sum between 1 and 4 is 1 + 2 + 3 = 6.
// * If num2 is not greater than num1, it should return 0.
// var output = computeSumBetween(2, 5); console.log(output); // --> 9



function computeSumBetween(num1, num2) {
  let nums = [];
  for (var i = num1; i < num2; i++){
    nums.push(i);
  }
  return num2 > num1 ? nums.reduce((a, b) => a + b) : 0;
}



// Your Code Should Pass:

// describe("computeSumBetween", function() {
//   it("should return a number", function() {
//     expect(typeof computeSumBetween(4, 8)).toBe("number");
//   });
//   it("should sum between the first and second number exclusive", function() {
//     expect(computeSumBetween(4, 6)).toBe(9);
//   });
//   it("should sum between the first and second number exclusive with negatives", function() {
//     expect(computeSumBetween(-1, 3)).toBe(2);
//   });
//   it("should return 0 if the second number is less than the first", function() {
//     expect(computeSumBetween(1, -3)).toBe(0);
//   });
//   it("should return 0 if the 2 numbers are equal", function() {
//     expect(computeSumBetween(1, 1)).toBe(0);
//   });
// });
