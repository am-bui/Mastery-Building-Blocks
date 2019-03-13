// Write a function called “removeNumberValues”.

// Given an object, “removeNumberValues” removes any properties whose values are numbers.

// var obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }



function removeNumberValues(obj) {
  for (let value in obj) {
    if (typeof obj[value] === "number") delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeNumberValues", function() {
//   it("should remove any properties with values that are numbers", function() {
//     var obj = {
//       a: [true, false],
//       b: 2,
//       c: [8, 0],
//       d: 4
//     };
//     var result = {
//       a: [true, false],
//       c: [8, 0]
//     };
//     removeNumberValues(obj);
//     expect(obj).toEqual(result);
//   });
// });
