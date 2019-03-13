// Write a function called “getElementsGreaterThan10AtProperty”.
//
// Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.
//
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.
//
// var obj = {
//   key: [1, 20, 30]
// };
// var output = getElementsGreaterThan10AtProperty(obj, 'key');
// console.log(output); // --> [20, 30]



function getElementsGreaterThan10AtProperty(obj, key) {
  return Array.isArray(obj[key]) ? obj[key].filter(el => el > 10) : [];
}



// Your Code Should Pass:

// describe("getElementsGreaterThan10AtProperty", function() {
//   it("should return an array containing all the elements greater than 10 in the array located at key", function() {
//     var obj = {
//       array: [10, 20, 40]
//     };
//     expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([20, 40]);
//   });
//   it("should return an empty array if the array has no elements greater than 10", function() {
//     var obj = {
//       array: [1, 3]
//     };
//     expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
//   });
// });
