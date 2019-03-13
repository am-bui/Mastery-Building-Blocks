// Write a function called “getElementsAfter”.

// Given an array and an index, “getElementsAfter” returns a new array with all the elements after (but not including) the given index.

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
// console.log(output); // --> ['d', 'e']



function getElementsAfter(array, n) {
  return array.slice(n + 1);
}



// Your Code Should Pass:

// describe("getElementsAfter", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(getElementsAfter([4, 5, 6], 2))).toBe(true);
//   });
//   it("should return an array with all the elements of the passed in array getElementsAfter the nth", function() {
//     expect(getElementsAfter([4, 5, 6, 7, 8, 9], 3)).toEqual([8, 9]);
//   });
//   it("should return an empty array when passed in a single element array", function() {
//     expect(getElementsAfter([4], 0)).toEqual([]);
//   });
//   it("should return an empty array when passed an n out of range", function() {
//     expect(getElementsAfter([4], 11)).toEqual([]);
//   });
//   it("should return an empty array when passed in an empty array", function() {
//     expect(getElementsAfter([])).toEqual([]);
//   });
// });
