// Write a function called “getLongestWordOfMixedElements”.

// Given an array of mixed types, “getLongestWordOfMixedElements” returns the longest string in the given array.

// Notes:
// * If the array is empty, it should return an empty string (“”).
// * If the array contains no strings; it should return an empty string.

// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'



function getLongestWordOfMixedElements(arr) {
  let words = arr.filter(i => typeof i === 'string');
  return words.length > 0 ? words.sort((a, b) => b.length - a.length)[0] : '';
}



// Your Code Should Pass:

// describe("getLongestWordOfMixedElements", function() {
//   it("should return a string", function() {
//     expect(typeof getLongestWordOfMixedElements(["these", "are", "strings"])).toBe("string");
//   });
//   it("should return the longest string in an array", function() {
//     expect(getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1])).toBe("word");
//   });
//   it("should return the longest string in an array that appears first when there are ties", function() {
//     expect(getLongestWordOfMixedElements(["word", 3, 5, 3, "bird", "up", 1, 5])).toBe("word");
//   });
//   it("should return an empty string when the array is empty", function() {
//     expect(getLongestWordOfMixedElements([])).toBe("");
//   });
//   it("should return an empty string there are no strings", function() {
//     expect(getLongestWordOfMixedElements([1, 2, 4])).toBe("");
//   });
// });
