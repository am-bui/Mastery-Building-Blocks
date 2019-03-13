// Write a function called “countNumberOfKeys”.

// Given an object, “countNumberOfKeys” returns how many properties the given object has.

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// var output = countNumberOfKeys(obj);
// console.log(output); // --> 3



function countNumberOfKeys(obj) {
  return Object.keys(obj).length;
}



// Your Code Should Pass:

// describe("countNumberOfKeys", function() {
//   it("should return a number", function() {
//     var obj = {};
//     expect(typeof(countNumberOfKeys(obj))).toBe("number");
//   });
//   it("should return the number of keys for an object", function() {
//     var obj = {
//       a: 1,
//       b: 2,
//       c: 3
//     };
//     expect(countNumberOfKeys(obj)).toBe(3);
//   });
//   it("should return 0 for an object with no keys", function() {
//     var obj = {};
//     expect(countNumberOfKeys(obj)).toBe(0);
//   });
// });
