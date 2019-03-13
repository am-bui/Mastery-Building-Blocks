// Write a function called “getOddLengthWordsAtProperty”.

// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

// var obj = {
//   key: ['It', 'has', 'some', 'words']
// };
// var output = getOddLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['has', 'words']



function getOddLengthWordsAtProperty(obj, key){
  return Array.isArray(obj[key]) ? obj[key].filter(word => word.length % 2 !== 0)
  : [];
}



// Your Code Should Pass:

// describe("getOddLengthWordsAtProperty", function() {
//   it("should return an array containing all the odd length elements of the array located at key", function() {
//     var obj = {
//       array: ["a", "long", "night"]
//     };
//     expect(getOddLengthWordsAtProperty(obj, "array")).toEqual(["a", "night"]);
//   });
//   it("should return an empty array if the array has only no odd length elements", function() {
//     var obj = {
//       array: ["It", "is", "gone"]
//     };
//     expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the array is empty", function() {
//     var obj = {
//       array: []
//     };
//     expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property is not an array", function() {
//     var obj = {
//       array: "sike"
//     };
//     expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
//   });
//   it("should return an empty array if the property does not exist", function() {
//     var obj = {
//       what: "sike"
//     };
//     expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
//   });
// });
