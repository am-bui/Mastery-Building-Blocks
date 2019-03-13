// Write a function called “getElementsThatEqual10AtProperty”.

// Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements that are equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.
//
// var obj = {
//   key: [1000, 10, 50, 10]
// };
// var output = getElementsThatEqual10AtProperty(obj, 'key');
// console.log(output); // --> [10, 10]



function getElementsThatEqual10AtProperty(obj, key){
  return Array.isArray(obj[key]) ? obj[key].filter(num => num === 10) : [];
}

// Is the property at the given key an array and does it contain elements?
// If true, filter through the properties of obj and return values === 10.
// If false, return an empty array. 



// Your Code Should Pass:

// describe("getElementsThatEqual10AtProperty", function() {
//   it("should return an array containing all the elements that equal 10 in the array located at key", function() {
//     var obj = {
//       array: [10, 20, 40]
//     };
//     expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([10]);
//   });
//   it("should return an empty array if the array has no elements that equal 10", function() {
//     var obj = {
//       array: [1, 3]
//     };
//     expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
//   });
// });
