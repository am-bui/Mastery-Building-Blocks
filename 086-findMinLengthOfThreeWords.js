// Write a function called “findMinLengthOfThreeWords”.

// Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1



function findMinLengthOfThreeWords(word1, word2, word3) {
  return [...arguments].sort((a, b) => a.length - b.length)[0].length;
}


// Method 2: find min for any number of words

// function findMinLengthOfThreeWords() {
//   return Math.min(...[arguments[0]].map(el => el.length));
// }


// Method 3:

// function findMinLengthOfThreeWords(word1, word2, word3) {
//   return Math.min(word1.length, word2.length, word3.length);
// }



// Your Code Should Pass:

// describe("findMinLengthOfThreeWords", function() {
//   it("should return a number", function() {
//     expect(typeof findMinLengthOfThreeWords("a", "be", "see")).toBe("number");
//   });
//   it("should return the minimimum length of three words", function() {
//     expect(findMinLengthOfThreeWords("a", "be", "see")).toBe(1);
//   });
//   it("should return the minimimum length of three words when there is a tie", function() {
//     expect(findMinLengthOfThreeWords("these", "three", "words")).toBe(5);
//   });
// });
