// Write a function called “computeAverageOfNumbers”.

// Given an array of numbers, “computeAverageOfNumbers” returns their average.

// Notes:
// * If given an empty array, it should return 0.

// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3



function computeAverageOfNumbers(arr){
  return arr.length > 0 ? arr.reduce((a, b) => a + b)/arr.length : 0;
}



// Your Code Should Pass:

// describe("computeAverageOfNumbers", function() {
//   it("should return a number", function() {
//     expect(typeof(computeAverageOfNumbers([6, 8, 10]))).toBe("number");
//   });
//   it("should return the average of the numbers in the given array", function() {
//     expect(computeAverageOfNumbers([6, 8, 10])).toBe(8);
//   });
//   it("should return the average of negative numbers in the given array", function() {
//     expect(computeAverageOfNumbers([-6, -8, -10])).toBe(-8);
//   });
//   it("should return 0 if given an empty array", function() {
//     expect(computeAverageOfNumbers([])).toBe(0);
//   });
// });
