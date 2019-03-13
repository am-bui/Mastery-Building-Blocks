/*
Write a function called “isOddLength”.

Given a word, “isOddLength” returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true
*/



function isOddLength(word) {
  return word.length % 2 === 1;
}



/*
Your Code Should Pass:

describe("isOddLength", function() {
  it("should return a boolean", function() {
    expect(typeof isOddLength("wow")).toEqual("boolean");
  });
  it("should return if the length of the word is even", function() {
    expect(isOddLength("special")).toBe(true);
  });
  it("should return false if the string is empty", function() {
    expect(isOddLength("")).toBe(false);
  });
});

*/
