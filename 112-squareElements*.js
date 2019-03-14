// Write a function called “squareElements”.
// Given an array of numbers, “squareElements” should return a new array where each element is the square of the element of the given array.
// var output = squareElements([1, 2, 3]); console.log(output); // --> [1, 4, 9]



function squareElements(arr) {
  return arr.map(num => num * num);
}



// Your Code Should Pass:

// describe("squareElements", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(squareElements([1, 2, 3]))).toBe(true);
//   });
//   it("should return an array with the elements of the passed in array, squared", function() {
//     expect(squareElements([1, 2, 3])).toEqual([1, 4, 9]);
//   });
// });
