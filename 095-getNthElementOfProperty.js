// Write a function called “getNthElementOfProperty”.

// Given an object and a key, “getNthElementOfProperty” returns the nth element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If n is out of range, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// var obj = {
//   key: [1, 2, 6]
// };
// var output = getNthElementOfProperty(obj, 'key', 1);
// console.log(output); // --> 2



function getNthElementOfProperty(obj, key, n) {
  return Array.isArray(obj[key]) ? obj[key][n] : undefined;
}



// Your Code Should Pass:

// describe("getNthElementOfProperty", function() {
//   it("should return the nth element of the array located at key", function() {
//     var obj = {
//       array: [1, 2, 4]
//     };
//     expect(getNthElementOfProperty(obj, "array", 2)).toBe(4);
//   });
//   it("should return undefined if the n is out of range", function() {
//     var obj = {
//       array: [1, 2, 4]
//     };
//     expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
//   });
//   it("should return undefined if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
//   });
//   it("should return undefined if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
//   });
//   it("should return undefined if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
//   });
// });
