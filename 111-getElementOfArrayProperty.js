/*
Write a function called “getElementOfArrayProperty”.

Given an object, a key, and a numerical index, “getElementOfArrayProperty” returns the value of the element at the given index of the array located within the given object at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the given index is out of range of the array located at the given key, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
*/



function getElementOfArrayProperty(obj, key, index) {
  return Array.isArray (obj[key]) ? obj[key][index] : undefined;
}



// Your Code Should Pass:
//
// describe("getElementOfArrayProperty", function() {
//
//   it("should return the element at the index of the array at the key of the passed in object", function() {
//     var obj = {
//       numbers: [4, 0, 1]
//     };
//     expect(getElementOfArrayProperty(obj, "numbers", 1)).toBe(0);
//   });
//   it("should return undefined if the index is out of range", function() {
//     var obj = {
//       numbers: [4, 0, 1]
//     };
//     expect(getElementOfArrayProperty(obj, "numbers", 5)).toBe(undefined);
//   });
//   it("should return undefined if the property at the key is not an array", function() {
//     var obj = {
//       name: "you"
//     };
//     expect(getElementOfArrayProperty(obj, "name", 0)).toBe(undefined);
//   });
//   it("should return undefined if there is no property at the key", function() {
//     var obj = {
//       name: "you"
//     };
//     expect(getElementOfArrayProperty(obj, "what", 0)).toBe(undefined);
//   });
// });
