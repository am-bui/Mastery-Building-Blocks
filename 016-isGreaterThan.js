/*
Write a function called “isGreaterThan”.
Given 2 numbers, “isGreaterThan” returns whether num2 is greater than num1.

var output = isGreaterThan(11, 10);
console.log(output); // --> false
*/


function isGreaterThan(num1, num2) {
  return (num2 > num1);
}


/*
Your Code Should Pass:

describe("isGreaterThan", function() {
  it("should return a boolean", function() {
    expect(typeof isGreaterThan(40, 30)).toEqual("boolean");
  });
  it("should return whether num2 is greater than num1", function() {
    expect(isGreaterThan(20, 200)).toBe(true);
  });
  it("should return false if the numbers are equal", function() {
    expect(isGreaterThan(20, 20)).toBe(false);
  });
});
*/
