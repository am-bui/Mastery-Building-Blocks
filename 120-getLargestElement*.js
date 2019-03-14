// Write a function called “getLargestElement”.

// Given an array, “getLargestElement” returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;



function getLargestElement(arr) {
  return arr.length > 0 ? arr.sort((a,b) => b - a)[0] : 0;
}



// Your Code Should Pass:

// describe("getLargestElement", function() {
//   it("should return a number", function() {
//     expect(typeof getLargestElement([3, 5, 3, 1])).toBe("number");
//   });
//   it("should return the largest element in an array", function() {
//     expect(getLargestElement([3, 5, 3, 1])).toBe(5);
//   });
//   it("should return the largest element in an array when there are ties", function() {
//     expect(getLargestElement([3, 5, 3, 1, 5])).toBe(5);
//   });
//   it("should return the largest element in an array when they are all negative", function() {
//     expect(getLargestElement([-1, -5, -3])).toBe(-1);
//   });
// });
