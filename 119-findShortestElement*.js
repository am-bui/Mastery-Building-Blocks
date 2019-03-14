// Write a function called “findShortestElement”.

// Given an array, “findShortestElement” returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'



function findShortestElement(arr) {
  return arr.length > 0 ? arr.sort((a, b) => a.length - b.length)[0] : "";
}



// Your Code Should Pass:

// describe("findShortestElement", function() {
//   it("should return a string", function() {
//     expect(typeof(findShortestElement(["one", "two", "three"]))).toBe("string");
//   });
//   it("should return the shortest element in an array", function() {
//     expect(findShortestElement(["a", "two", "three"])).toBe("a");
//   });
//   it("should return the first shortest element in an array when there are ties", function() {
//     expect(findShortestElement(["one", "to", "no"])).toBe("to");
//   });
//   it("should return an empty string if the array is empty", function() {
//     expect(findShortestElement([])).toBe("");
//   })
// });
