// Write a function called “filterOddElements”.

// Given an array of numbers, “filterOddElements” returns an array containing only the odd numbers of the given array.
// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]



function filterOddElements(arr) {
  return arr.filter(num => num % 2 !== 0);
}



// Your Code Should Pass:

// describe("filterOddElements", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(filterOddElements([1, 2, 3, 4]))).toBe(true);
//   });
//   it("should return an array with the odd elements from the passed in array", function() {
//     expect(filterOddElements([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
//   });
//   it("should return an array if there are no odd numbers", function() {
//     expect(filterOddElements([2, 4, 6])).toEqual([]);
//   });
//   it("should return an array if given an emtpy array", function() {
//     expect(filterOddElements([])).toEqual([]);
//   });
// });
