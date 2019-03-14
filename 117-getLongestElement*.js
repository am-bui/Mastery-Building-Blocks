// Write a function called “getLongestElement”.
//
// Given an array, “getLongestElement” returns the longest string in the given array.
//
// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, it should return an empty string.
//
// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'



function getLongestElement(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}



// Your Code Should Pass:
//
// describe("getLongestElement", function() {
//   it("should return a string", function() {
//     expect(typeof(getLongestElement(["one", "two", "three"]))).toBe("string");
//   });
//   it("should return the longest element in an array", function() {
//     expect(getLongestElement(["one", "two", "three"])).toBe("three");
//   });
//   it("should return the first longest element in an array when there are ties", function() {
//     expect(getLongestElement(["one", "two", "ONE"])).toBe("one");
//   });
// });
