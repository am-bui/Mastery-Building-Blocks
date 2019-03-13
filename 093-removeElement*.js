// Write a function called “removeElement”.
//
// Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.
//
// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.
//
// var output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1]



function removeElement(array, discarder) {
  return array.filter(num => num !== discarder);
}



// Your Code Should Pass:

// describe("removeElement", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(removeElement(["there", "it", "is", "there"]))).toBe(true);
//   });
//   it("return an array with all strings not matching 'discarder'", function() {
//     expect(removeElement(["there", "it", "is", "there"], "there")).toEqual(["it", "is"]);
//   });
//   it("return an array with all numbers not matching 'discarder'", function() {
//     expect(removeElement([1, 2, 4, 3, 1, 4], 4)).toEqual([1, 2, 3, 1]);
//   });
//   it("return an array with all booleans not matching 'discarder'", function() {
//     expect(removeElement([true, true, true, false, true], true)).toEqual([false]);
//   });
//   it("return an emtpy array when all elements match 'discarder'", function() {
//     expect(removeElement([true, true, true, true], true)).toEqual([]);
//   });
//   it("return an emtpy array when given an empty array", function() {
//     expect(removeElement([], 4)).toEqual([]);
//   });
// });
