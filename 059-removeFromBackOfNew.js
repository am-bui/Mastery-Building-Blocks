// Write a function called “removeFromBackOfNew”.
//
// Given an array, “removeFromBackOfNew” returns a new array containing all but the last element of the given array.
//
// Notes:
// * You should be familiar with the ‘slice’ method.
//
// var arr = [1, 2, 3];
// var output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]



function removeFromBackOfNew(arr) {
  return arr.slice(0, -1);
}



// Your Code Should Pass:

// describe("removeFromBackOfNew", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(removeFromBackOfNew([1, 2], 3))).toBe(true);
//   });
//   it("should return an array with the last element of the passed in array removed", function() {
//     expect(removeFromBackOfNew([1, 2])).toEqual([1]);
//   });
//   it("should handle an empty array", function() {
//     expect(removeFromBackOfNew([])).toEqual([]);
//   });
//   it("should leave arr unmodified", function() {
//     var originalArray = [1, 2];
//     var newArray = removeFromBackOfNew(originalArray);
//     expect(originalArray).toEqual([1, 2]);
//   });
// });
