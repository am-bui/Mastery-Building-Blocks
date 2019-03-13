/*
Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true
*/


function isOdd(num){
  return num % 2 !== 0;
}


/*
Your Code Should Pass:

describe("isOdd", function() {
  it("should return a boolean", function() {
    expect(typeof isOdd(40)).toEqual("boolean");
  });
  it("should return if the number is odd", function() {
    expect(isOdd(7)).toBe(true);
  });
  it("should return false if the number is 0", function() {
    expect(isOdd(0)).toBe(false);
  });
});
*/
