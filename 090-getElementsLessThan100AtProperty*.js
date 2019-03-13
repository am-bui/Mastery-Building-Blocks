// Write a function called “getElementsLessThan100AtProperty”.
//
// Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.
//
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.
//
// var obj = {
//   key: [1000, 20, 50, 500]
// };
// var output = getElementsLessThan100AtProperty(obj, 'key');
// console.log(output); // --> [20, 50]



function getElementsLessThan100AtProperty(obj, key) {
  return Array.isArray(obj[key]) ? obj[key].filter(el => el < 100) : [];
}



// Your Code Should Pass:

// describe("getElementsLessThan100AtProperty", function() {
//   it("should return an array containing all the elements less than 100 in the array located at key", function() {
//     var obj = {
//       array: [100, 20, 40]
//     };
//     expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([20, 40]);
//   });
//   it("should return an empty array if the array has no elements less than 100", function() {
//     var obj = {
//       array: [1000, 3000]
//     };
//     expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
//   });
// });
