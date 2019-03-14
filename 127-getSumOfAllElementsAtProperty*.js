// Write a function called “getSumOfAllElementsAtProperty”.

// Given an object and a key, “getSumOfAllElementsAtProperty” returns the sum of all the elements in the array located at the given key.

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the key, it should return 0.

// var obj = {
//   key: [4, 1, 8]
// };
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13



function getSumOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length > 0 ? obj[key].reduce((a, b) => a + b) : 0;
}



// Your Code Should Pass:

// describe("getSumOfAllElementsAtProperty", function() {
//   it("should return the sum of all the elements of the array located at key", function() {
//     var obj = {
//       array: [1, 2, 4]
//     };
//     expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(7);
//   });
//   it("should return 0 if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
//   });
//   it("should return 0 if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
//   });
//   it("should return 0 if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
//   });
// });
