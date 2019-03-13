// Write a function called “removeStringValues”.

// Given an object, “removeStringValues” removes any properties on the given object whose values are strings.

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeStringValues(obj);
// console.log(obj); // { age: 20 }



function removeStringValues(obj) {
  for (let value in obj) {
    if (typeof obj[value] === "string") delete obj[value];
  }
}



// Your Code Should Pass:

// describe("removeStringValues", function() {
//   it("should remove any properties with values that are strings", function() {
//     var obj = {
//       a: "hello",
//       b: 2,
//       c: "montana",
//       d: 4
//     };
//     var result = {
//       b: 2,
//       d: 4
//     };
//     removeStringValues(obj);
//     expect(obj).toEqual(result);
//   });
// });
