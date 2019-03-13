/*
Write a function called “getLengthOfTwoWords”.
Given 2 words, “getLengthOfTwoWords” returns the sum of their lengths.*/

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9


function getLengthOfTwoWords(word1, word2){
  return word1.length + word2.length;
}


/*
Your Code Should Pass:

describe("getLengthOfTwoWords", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfTwoWords("two", "words")).toBe("number");
  });
  it("should return the sum length of two words", function() {
    expect(getLengthOfTwoWords("one", "two")).toBe(6)
  });
});
*/
