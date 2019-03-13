// Write a function called “removeFromFrontOfNew”.
//
// Given an array, “removeFromFrontOfNew” returns a new array containing all but the first element of the given array.
//
// Notes:
// * You should be familiar with the ‘slice’ method.
//
// var arr = [1, 2, 3];
// var output = removeFromFrontOfNew(arr);
// console.log(output); // --> [2, 3]
// console.log(arr); // --> [1, 2, 3]



function removeFromFrontOfNew(arr) {
  return arr.slice(1);
}



// Your Code Should Pass:

// describe("removeFromFrontOfNew", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(removeFromFrontOfNew([1, 2]))).toBe(true);
//   });
//   it("should remove an element from the front of an array", function() {
//     expect(removeFromFrontOfNew([1, 2])).toEqual([2]);
//   });
//   it("should handle an empty array", function() {
//     expect(removeFromFrontOfNew([])).toEqual([]);
//   });
//   it("should leave arr unmodified", function() {
//     var originalArray = [1, 2];
//     var newArray = removeFromFrontOfNew(originalArray);
//     expect(originalArray).toEqual([1, 2]);
//   });
// });
