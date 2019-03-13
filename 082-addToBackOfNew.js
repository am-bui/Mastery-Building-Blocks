// Write a function called “addToBackNew”.

// Given an array and an element, “addToBackNew” returns a clone of the given array, with the given element added to the end.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]



function addToBackOfNew(arr, element) {
  return [...arr, element];
}

// Method 2:

// function addToBackOfNew(arr, element) {
//   return [].concat(arr, element);
// }

// Method 3:

// function addToBackOfNew(arr, element) {
//   var newArr = arr.slice();
//   newArr.push(element);
//   return newArr;
// }



// Your Code Should Pass:

// describe("addToBackOfNew", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(addToBackOfNew([1, 2], 3))).toBe(true);
//   });
//   it("should add an element to the end of an array", function() {
//     expect(addToBackOfNew([1, 2], 3)).toEqual([1, 2, 3]);
//   });
//   it("should add an element to the end of an empty array", function() {
//     expect(addToBackOfNew([], 3)).toEqual([3]);
//   });
//   it("should leave arr unmodified", function() {
//     var originalArray = [1, 2];
//     var newArray = addToBackOfNew(originalArray, 3);
//     expect(originalArray).toEqual([1, 2]);
//   });
// });
