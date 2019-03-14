// Write a function called “getLongestOfThreeWords”.

// Given 3 words, “getLongestOfThreeWords” returns the longest of three words.

// Notes:
// * If there is a tie, it should return the first word in the tie.

// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'



function getLongestOfThreeWords(word1, word2, word3) {
  return [...arguments].sort((a, b) => b.length - a.length)[0]
}



// Your Code Should Pass:

// describe("getLongestOfThreeWords", function() {
//   it("should return a string", function() {
//     expect(typeof(getLongestOfThreeWords("a", "be", "see"))).toBe("string");
//   });
//   it("should return the longest of three words", function() {
//     expect(getLongestOfThreeWords("a", "be", "see")).toBe("see");
//   });
//   it("should return the first occurence of a longest word when there is a tie", function() {
//     expect(getLongestOfThreeWords("these", "three", "words")).toBe("these");
//   });
// });
