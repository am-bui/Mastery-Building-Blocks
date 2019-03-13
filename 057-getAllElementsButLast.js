// Write a function called “getAllElementsButLast”.
//
// Given an array, “getAllElementsButLast” returns an array with all the elements but the last.
//
// var input = [1, 2, 3, 4];
// var output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2 , 3]



function getAllElementsButLast(array) {
  return array.slice(0, array.length - 1);
}


/* alt:

function getAllElementsButLast(array) {
  array.pop();
  return array;
}
*/



// Your Code Should Pass:
//
// describe("getAllElementsButLast", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(getAllElementsButLast([4, 5, 6]))).toBe(true);
//   });
//   it("should return an array with all the elements of the passed in array, except for the last", function() {
//     expect(getAllElementsButLast([4, 5, 6])).toEqual([4, 5]);
//   });
//   it("should return an empty array when passed in a single element array", function() {
//     expect(getAllElementsButLast([4])).toEqual([]);
//   });
//   it("should return an empty array when passed in an empty array", function() {
//     expect(getAllElementsButLast([])).toEqual([]);
//   });
// });
