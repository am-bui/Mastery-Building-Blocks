// Write a function called “joinArrays”.
//
// Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, followed by the elementsin “arr2”.
//
// var output = joinArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]
// You should be familiar with the “concat” method for this problem.



function joinArrays(arr1, arr2){
  return arr1.concat(arr2);
}



// Your Code Should Pass:

// describe("joinArrays", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(joinArrays(['a', 'b'], [1, 3]))).toBe(true);
//   });
//   it("should return an array with the elements from the first and then the second array", function() {
//     expect(joinArrays(['a', 'b'], [1, 3])).toEqual(['a', 'b', 1, 3]);
//   });
//   it("should handle empty arrays in the first position", function() {
//     expect(joinArrays([], [1, 3])).toEqual([1, 3]);
//   });
//   it("should handle empty arrays in the second position", function() {
//     expect(joinArrays(['a', 'b'], [])).toEqual(['a', 'b']);
//   });
// });
