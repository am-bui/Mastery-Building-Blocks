// Write a function called “addToFrontOfNew”.

// Given an array and an element, “addToFrontOfNew” returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); --> [1, 2]



// Method 1:

function addToFrontOfNew(arr, element) {
  var newArray = arr.slice();
  newArray.unshift(element);
  return newArray;
}

/* Note:

The slice() method returns a shallow copy of a portion of an array into a
new array object selected from begin to end (end not included).
The original array will not be modified. (MDN definition)

Calling it with no arguments just copies the entire array.*/


// Method 2:

// function addToFrontOfNew(arr, element) {
//   return [element, ...arr];
// }


// Method 3:

// function addToFrontOfNew(arr, element) {
//   var newArr = [];
//   newArr.push(element);
//   for (var i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }



// Your Code Should Pass:

// describe("addToFrontOfNew", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(addToFrontOfNew([1, 2], 3))).toBe(true);
//   });
//   it("should add an element to the end of an array", function() {
//     expect(addToFrontOfNew([1, 2], 3)).toEqual([3, 1, 2]);
//   });
//   it("should add an element to the end of an empty array", function() {
//     expect(addToFrontOfNew([], 3)).toEqual([3]);
//   });
//   it("should leave arr unmodified", function() {
//     var originalArray = [1, 2];
//     var newArray = addToFrontOfNew(originalArray, 3);
//     expect(originalArray).toEqual([1, 2]);
//   });
// });
