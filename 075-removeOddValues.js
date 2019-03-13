// Write a function called “removeOddValues”.

// Given an object, “removeOddValues” removes any properties whose values are odd numbers.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }



function removeOddValues(obj) {
  for (let value in obj) {
    if (obj[value] % 2 == 1) delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeOddValues", function() {
//   it("should remove any properties with values that are odd numbers", function() {
//     var obj = {
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 4
//     };
//     var result = {
//       b: 2,
//       d: 4
//     };
//     removeOddValues(obj);
//     expect(obj).toEqual(result);
//   });
// });
