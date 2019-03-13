/*
Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.*/

// var output = getLengthOfWord('some');
// console.log(output); // --> 4


function getLengthOfWord(word) {
  return word.length;
}


/*
Your Code Should Pass:
describe("getLengthOfWord", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfWord("something")).toBe("number");
  });
  it("should return the length of the passed in word", function() {
    expect(getLengthOfWord("random")).toBe(6)
  });
  it("should return the length of an empty word", function() {
    expect(getLengthOfWord("")).toBe(0)
  });
});
*/
