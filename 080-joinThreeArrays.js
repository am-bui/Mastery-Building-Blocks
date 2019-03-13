// Write a function called “joinThreeArrays”.

// Given three arrays, “joinThreeArrays” returns an array with the elements of “arr1” in order followed by the elements in “arr2” in order followed by the elements of “arr3” in order.

// var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
// console.log(output); // --> [1, 2, 3, 4, 5, 6]
// You should be familiar with the “concat” method for this problem.



function joinThreeArrays(arr1, arr2, arr3) {
	  return [].concat(...arguments);
	}

// or:

// function joinThreeArrays(arr1, arr2, arr3){
//   return arr1.concat(arr2, arr3);
// }



// Your Code Should Pass:

// describe("joinThreeArrays", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(joinThreeArrays(['a', 'b'], [1, 3], [true, false]))).toBe(true);
//   });
//   it("should return an array with the elements from the first and then the second array", function() {
//     expect(joinThreeArrays(['a', 'b'], [1, 3], [true, false])).toEqual(['a', 'b', 1, 3, true, false]);
//   });
//   it("should handle empty arrays in the first position", function() {
//     expect(joinThreeArrays([], [1, 3], [true, false])).toEqual([1, 3, true, false]);
//   });
//   it("should handle empty arrays in the second position", function() {
//     expect(joinThreeArrays(['a', 'b'], [], [true, false])).toEqual(['a', 'b', true, false]);
//   });
//   it("should handle empty arrays in the third position", function() {
//     expect(joinThreeArrays(['a', 'b'], [1, 3], [])).toEqual(['a', 'b', 1, 3]);
//   });
//   it("should handle empty arrays in all positions", function() {
//     expect(joinThreeArrays([], [], [])).toEqual([]);
//   });
// });
