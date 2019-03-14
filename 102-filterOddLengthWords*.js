// Write a function called “filterOddLengthWords”.

// Given an array of string, “filterOddLengthWords” returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']



function filterOddLengthWords(words) {
  return words.filter(word => word.length % 2 !== 0);
}



// Your Code Should Pass:

// describe("filterOddLengthWords", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(filterOddLengthWords(["there", "it", "is", "now"]))).toBe(true);
//   });
//   it("should return an array with odd lengthed words", function() {
//     expect(filterOddLengthWords(["there", "it", "is", "now"])).toEqual(["there", "now"]);
//   });
//   it("should return an empty array when passed an array with no odd lengthed words", function() {
//     expect(filterOddLengthWords(["it", "cats"])).toEqual([]);
//   });
//   it("should return an empty array when passed an empty array", function() {
//     expect(filterOddLengthWords([])).toEqual([]);
//   });
// });
