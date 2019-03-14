// Write a function called “getLargestNumberAmongMixedElements”.

// Given any array, “getLargestNumberAmongMixedElements” returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 5



function getLargestNumberAmongMixedElements(arr) {
  let nums = arr.filter(i => typeof i === 'number');
  return nums.length > 0 ? Math.max(...nums) : 0;
}



// Your Code Should Pass:

// describe("getLargestNumberAmongMixedElements", function() {
//   it("should return a number", function() {
//     expect(typeof getLargestNumberAmongMixedElements([3, 5, 3, 1])).toBe("number");
//   });
//   it("should return the largest element in an array", function() {
//     expect(getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(5);
//   });
//   it("should return the largest element in an array when there are ties", function() {
//     expect(getLargestNumberAmongMixedElements(["word", 3, 5, 3, "wordy", "up", 1, 5])).toBe(5);
//   });
//   it("should return the largest element in an array when they are all negative", function() {
//     expect(getLargestNumberAmongMixedElements([-1, -5, "word", -3])).toBe(-1);
//   });
//   it("should return 0 when the array is empty", function() {
//     expect(getLargestNumberAmongMixedElements([])).toBe(0);
//   });
//   it("should return 0 when there are no numbers", function() {
//     expect(getLargestNumberAmongMixedElements(["word", "up"])).toBe(0);
//   });
// });
