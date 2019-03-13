// Write a function called “removeArrayValues”.

// Given an object, “removeArrayValues” removes any properties whose values are arrays.

// var obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ['hi', 'there']
// }
// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }



function removeArrayValues(obj) {
  for (let value in obj) {
    if (Array.isArray(obj[value])) delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeArrayValues", function() {
//   it("should remove any properties with values that are arrays", function() {
//     var obj = {
//       a: [true, false],
//       b: 2,
//       c: [8, 0],
//       d: 4
//     };
//     var result = {
//       b: 2,
//       d: 4
//     };
//     removeArrayValues(obj);
//     expect(obj).toEqual(result);
//   });
// });
