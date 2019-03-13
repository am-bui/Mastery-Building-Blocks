// Write a function called “removeFromFront”.
//
// Given an array, “removeFromFront” returns the given array with its first element removed.
//
// Notes:
// * You should be familiar with the method ‘shift’.
//
// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]



function removeFromFront(arr) {
  arr.shift();
  return arr;
}



// Your Code Should Pass:

// describe("removeFromFront", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(removeFromFront([1, 2, 3]))).toBe(true);
//   });
//   it("should return the array with the first element removed", function() {
//     expect(removeFromFront([1, 2])).toEqual([2]);
//   });
//   it("should handle an empty array", function() {
//     expect(removeFromFront([])).toEqual([]);
//   });
// });
