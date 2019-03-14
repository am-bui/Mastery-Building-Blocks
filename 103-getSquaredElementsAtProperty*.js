// Write a function called “getSquaredElementsAtProperty”.

// Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSquaredElementsAtProperty(obj, 'key');
// console.log(output); // --> [4, 1, 25]



function getSquaredElementsAtProperty(obj, key){
  return Array.isArray(obj[key]) ? obj[key].map(num => num * num) : [];
}



// Your Code Should Pass:

// describe("getSquaredElementsAtProperty", function() {
//   it("should return an array containing all the squared elements of the array located at key", function() {
//     var obj = {
//       array: [1, 2, 7]
//     };
//     expect(getSquaredElementsAtProperty(obj, "array")).toEqual([1, 4, 49]);
//   });
//   it("should return an empty array if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
//   });
// });
