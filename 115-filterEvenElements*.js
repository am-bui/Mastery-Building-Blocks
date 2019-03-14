// Write a function called “filterEvenElements”.

// Given an array of numbers, “filterEvenElements” returns an array containing only the even numbers of the given array.
// var output = filterEvenElements([2, 3, 4, 5, 6]); console.log(output); // --> [2, 4, 6]



function filterEvenElements(arr) {
  return arr.filter(num => num % 2 === 0);
}



// Your Code Should Pass:

// describe("filterEvenElements", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(filterEvenElements([1, 2, 3, 4]))).toBe(true);
//   });
//   it("should return an array with the even elements from the passed in array", function() {
//     expect(filterEvenElements([1, 2, 3, 4, 5])).toEqual([2, 4]);
//   });
//   it("should return an array if there are no even numbers", function() {
//     expect(filterEvenElements([1, 3, 5])).toEqual([]);
//   });
//   it("should return an array if given an emtpy array", function() {
//     expect(filterEvenElements([])).toEqual([]);
//   });
// });
