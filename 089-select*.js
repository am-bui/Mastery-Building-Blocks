// Write a function called “select”.

// Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them.
// * It does not modify the passed in object.

// var arr = ['a', 'c', 'e'];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }



function select(arr, obj) {
  return arr.reduce((acc, next) => {
    if (obj[next]) acc[next] = obj[next];
    return acc;
  }, {});
}


// Method 2:

// function select(arr, obj) {
//   var result = {};
//   arr.forEach(function(i) {
//     if (i in obj) {
//       result[i] = obj[i];
//     }
//   });
//   return result;
// }


// The result will be a new object. Leave {} empty as a placeholder.
// As the forEach() method iterates through arr, the callback function perfoms a task on the currentValue.
// If the currentValue(i) exists in obj,
// use the assignment operator (=) to assign the value of its right operand(obj[i]) to its left(result[i]). Meaning, x = y assigns y to x.
// Note: this solution iterations only once.
// The (in) operator will tell you whether obj has a property name which matches a given string.


// Method 3:

// function select(arr, obj) {
//   var result = {};
//   for (let prop in obj) {
//     arr.forEach(function(i) {
//       if (prop === i) {
//         result[prop] = obj[prop];
//       }
//     });
//   }
//   return result;
// }

// - placeholder obj
// - iterate through obj, looking at each property(key: value)
// - nested iteration - using the .forEach() iteration method
//   (like for() loop) through array
// - with a callback function that checks if the property
//   in obj matches element in array.
// - if that is the case, the property will be added into newObj
// Note: this solution iterates twice. First with for() loop, second with forEach



// Your Code Should Pass:

// describe("select", function() {
//   it("should return an object", function() {
//     var keys = ["a", "c", "e"];
//     var obj = {
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 4
//     };
//     expect(typeof select(keys, obj)).toBe("object");
//   });
//   it("should return an object with properties in from the passed in object whose keys are present in the given function", function() {
//     var keys = ["a", "c", "e"];
//     var obj = {
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 4
//     };
//     var result = {
//       a: 1,
//       c: 3
//     };
//     expect(select(keys, obj)).toEqual(result);
//   });
//   it("should not modify the passed in object", function() {
//     var keys = ["a", "c", "e"];
//     var obj = {
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 4
//     };
//     select(keys, obj)
//     expect(Object.keys(obj).length).toEqual(4);
//   });
// });
