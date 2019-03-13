// Write a function called “removeNumbersLessThan”.

// Given a number and an object, “removeNumbersLessThan” removes any properties whose values are numbers less than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLessThan(5, obj);
// console.log(obj); // --> { a: 8, c: 'montana' }



function removeNumbersLessThan(num, obj) {
  for (let value in obj) {
    if (obj[value] < num) delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeNumbersLessThan", function() {
//   it("should remove any properties with values that are numbers less than num", function() {
//     var obj = {
//       a: "hello",
//       b: 2,
//       c: "montana",
//       d: 4
//     };
//     var result = {
//       a: "hello",
//       c: "montana",
//       d: 4
//     };
//     removeNumbersLessThan(3, obj);
//     expect(obj).toEqual(result);
//   });
// });
