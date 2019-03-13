// Write a function called “removeStringValuesLongerThan”.

// Given an number and an object, “removeStringValuesLongerThan” removes any properties on the given object whose values are strings longer than the given number.

// var obj = {
//   name: 'Montana',
//   age: 20,
//   location: 'Texas'
// };
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }



function removeStringValuesLongerThan(num, obj) {
  for (let value in obj) {
    if (obj[value].length > num) delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeStringValuesLongerThan", function() {
//   it("should remove any properties with values that are strings longer than num", function() {
//     var obj = {
//       a: "hello",
//       b: 2,
//       c: "montana",
//       d: 4
//     };
//     var result = {
//       a: "hello",
//       b: 2,
//       d: 4
//     };
//     removeStringValuesLongerThan(5, obj);
//     expect(obj).toEqual(result);
//   });
// });
