/*
Write a function called “equalsTen”.
Given a number, “equalsTen” returns whether or not the given number is 10.

var output = equalsTen(9);
console.log(output); // --> false*/


function equalsTen(num){
  return num === 10;
}


/*
Your Code Should Pass:

describe("equalsTen", function() {
  it("should return a boolean", function() {
    expect(typeof equalsTen(10)).toEqual("boolean");
  });
  it("should return true for the number 10", function() {
    expect(equalsTen(10)).toBe(true);
  });
  it("should return false for a number greater than 10", function() {
    expect(equalsTen(400)).toBe(false);
  });
  it("should return false for the number 10", function() {
    expect(equalsTen(3)).toBe(false);
  });
});
*/
