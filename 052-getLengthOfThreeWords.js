// Write a function called “getLengthOfThreeWords”.
//
// Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.
//
// var output = getLengthOfThreeWords('some', 'other', 'words');
// console.log(output); // --> 14



function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}



// Your Code Should Pass:

// describe("getLengthOfThreeWords", function() {
//   it("should return a number", function() {
//     expect(typeof getLengthOfThreeWords("three", "random", "words")).toBe("number");
//   });
//   it("should return the sum length of three words", function() {
//     expect(getLengthOfThreeWords("some", "other", "words")).toBe(14)
//   });
// });
