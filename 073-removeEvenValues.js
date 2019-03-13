// Write a function called “removeEvenValues”.

// Given an object, “removeEvenValues” removes any properties whose values are even numbers.

// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// Example:

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeEvenValues(obj);
// console.log(obj); // --> { b: 3 }



function removeEvenValues(obj) {
  for (let value in obj) {
    if (obj[value] % 2 == 0) delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeEvenValues", function() {
//   it("should remove any properties with values that are even numbers", function() {
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
//     removeEvenValues(obj);
//     expect(obj).toEqual(result);
//   });
// });
