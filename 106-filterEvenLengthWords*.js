// Write a function called “filterEvenLengthWords”.

// Given an array of strings, “filterEvenLengthWords” returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word']



function filterEvenLengthWords(words) {
  return words.filter(word => word.length % 2 === 0);
}



// Your Code Should Pass:

// describe("filterEvenLengthWords", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(filterEvenLengthWords(["there", "it", "is", "now"]))).toBe(true);
//   });
//   it("should return an array with even lengthed words", function() {
//     expect(filterEvenLengthWords(["there", "it", "is", "now"])).toEqual(["it", "is"]);
//   });
//   it("should return an empty array when passed an array with no even lengthed words", function() {
//     expect(filterEvenLengthWords(["there", "now"])).toEqual([]);
//   });
//   it("should return an empty array when passed an empty array", function() {
//     expect(filterEvenLengthWords([])).toEqual([]);
//   });
// });
