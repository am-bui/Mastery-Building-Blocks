// Write a function called “findShortestOfThreeWords”.

// Given 3 strings, “findShortestOfThreeWords” returns the shortest of the given strings.

// Notes:
// * If there are ties, it should return the first word in the parameters list.

// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'



function findShortestOfThreeWords(word1, word2, word3) {
  return [...arguments].sort((a, b) => a.length - b.length)[0];
}



// Your Code Should Pass:

// describe("findShortestOfThreeWords", function() {
//   it("should return a string", function() {
//     expect(typeof(findShortestOfThreeWords("a", "be", "see"))).toBe("string");
//   });
//   it("should return the shortest of three words", function() {
//     expect(findShortestOfThreeWords("abacus", "be", "see")).toBe("be");
//   });
//   it("should return the first occurence of a shortest word when there is a tie", function() {
//     expect(findShortestOfThreeWords("these", "apple", "words")).toBe("these");
//   });
// });
