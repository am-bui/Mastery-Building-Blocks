// Write a function called “computeProductOfAllElements”.

// Given an array of numbers, “computeProductOfAllElements” returns the products of all the elements in the given array.

// Notes:
// * If given array is empty, it should return 0.

// var output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60



function computeProductOfAllElements(arr) {
 return arr.length > 0 ? arr.reduce((a, b) => a * b) : 0;
}



// Your Code Should Pass:

// describe("computeProductOfAllElements", function() {
//   it("should return a number", function() {
//     expect(typeof computeProductOfAllElements([1, 2, 4])).toBe("number");
//   });
//   it("return the product of all elements", function() {
//     expect(computeProductOfAllElements([1, 2, 4])).toBe(8);
//   });
//   it("return 0 if the passed in array is empty", function() {
//     expect(computeProductOfAllElements([])).toBe(0);
//   });
// });
