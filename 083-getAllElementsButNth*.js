// Write a function called “getAllElementsButNth”.

// Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']



function getAllElementsButNth(array, n) {
  return array.filter(elem => elem !== array[n]);
}


// Method 2:

// function getAllElementsButNth(array, n) {
//   array.splice(n, 1); // removes 1 element from the nth index position
//   return array; // returns the array with all elements but the nth
// }



// Your Code Should Pass:

// describe("getAllElementsButNth", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(getAllElementsButNth([4, 5, 6], 2))).toBe(true);
//   });
//   it("should return an array with all the elements of the passed in array, except for the nth", function() {
//     expect(getAllElementsButNth([4, 5, 6], 0)).toEqual([5, 6]);
//   });
//   it("should return an empty array when passed in a single element array", function() {
//     expect(getAllElementsButNth([4], 0)).toEqual([]);
//   });
//   it("should return a mirror of the original array when passed an n out of range", function() {
//     expect(getAllElementsButNth([4], 10)).toEqual([4]);
//   });
//   it("should return an empty array when passed in an empty array", function() {
//     expect(getAllElementsButNth([])).toEqual([]);
//   });
// });
