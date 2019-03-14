// Write a function called “findSmallestNumberAmongMixedElements”.

// Given an array of mixed elements, “findSmallestNumberAmongMixedElements” returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4



function findSmallestNumberAmongMixedElements(arr) {
  let nums = arr.filter(num => typeof num === 'number');
  return nums.length > 0 ? Math.min(...nums) : 0;
}



// Your Code Should Pass:

// describe("findSmallestNumberAmongMixedElements", function() {
//   it("should return a number", function() {
//     expect(typeof findSmallestNumberAmongMixedElements([3, 5, 3, 1])).toBe("number");
//   });
//   it("should return the smallest element in an array", function() {
//     expect(findSmallestNumberAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(1);
//   });
//   it("should return the smallest element in an array when there are ties", function() {
//     expect(findSmallestNumberAmongMixedElements(["word", 3, 1, 3, "wordy", "up", 1, 5])).toBe(1);
//   });
//   it("should return the smallest element in an array when they are all negative", function() {
//     expect(findSmallestNumberAmongMixedElements([-1, -5, "word", -3])).toBe(-5);
//   });
//   it("should return 0 when the array is empty", function() {
//     expect(findSmallestNumberAmongMixedElements([])).toBe(0);
//   });
//   it("should return 0 when there are no numbers", function() {
//     expect(findSmallestNumberAmongMixedElements(["word", "up"])).toBe(0);
//   });
// });
