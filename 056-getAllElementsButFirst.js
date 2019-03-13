// Write a function called “getAllElementsButFirst”.
//
// Given an array, “getAllElementsButFirst” returns an array with all the elements but the first.
//
// var input = [1, 2, 3, 4];
// var output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]



function getAllElementsButFirst(array) {
  array.shift();
  return array;
}

/* The .shift() method above mutates(changes) the array
by removing the first element in the array.

Non-mutating:

function getAllElementsButFirst(array) {
  return array.slice(1);
}
*/



// Your Code Should Pass:
//
// describe("getAllElementsButFirst", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(getAllElementsButFirst([4, 5, 6]))).toBe(true);
//   });
//   it("should return an array with all the elements of the passed in array, except for the first", function() {
//     expect(getAllElementsButFirst([4, 5, 6])).toEqual([5, 6]);
//   });
//   it("should return an empty array when passed in a single element array", function() {
//     expect(getAllElementsButFirst([4])).toEqual([]);
//   });
//   it("should return an empty array when passed in an empty array", function() {
//     expect(getAllElementsButFirst([])).toEqual([]);
//   });
// });
