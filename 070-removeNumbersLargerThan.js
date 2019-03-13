// Write a function called “removeNumbersLargerThan”.

// Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: 'montana' }



function removeNumbersLargerThan(num, obj) {
  for (let value in obj) {
    if (obj[value] > num) delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeNumbersLargerThan", function() {
//   it("should remove any properties with values that are numbers greater than num", function() {
//     var obj = {
//       a: "hello",
//       b: 2,
//       c: "montana",
//       d: 4
//     };
//     var result = {
//       a: "hello",
//       b: 2,
//       c: "montana"
//     };
//     removeNumbersLargerThan(3, obj);
//     expect(obj).toEqual(result);
//   });
// });
