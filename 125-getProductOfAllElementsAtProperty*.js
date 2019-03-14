// Write a function called “getProductOfAllElementsAtProperty”.

// Given an object and a key, “getProductOfAllElementsAtProperty” returns the product of all the elements in the array located at the given key.

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

// var obj = {
//   key: [1, 2, 3, 4]
// };
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24



function getProductOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length > 0 ? obj[key].reduce((a, b) => a * b) : 0;
}



// Your Code Should Pass:

// describe("getProductOfAllElementsAtProperty", function() {
//   it("should return the product of all the elements of the array located at key", function() {
//     var obj = {
//       array: [1, 2, 4]
//     };
//     expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(8);
//   });
//   it("should return 0 if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
//   });
//   it("should return 0 if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
//   });
//   it("should return 0 if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
//   });
// });
