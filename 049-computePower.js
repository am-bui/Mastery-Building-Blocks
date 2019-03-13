/*
Write a function called “computePower”.

Given a number and an exponent, “computePower” returns the given number, raised to the given exponent.

var output = computePower(2, 3);
console.log(output); // --> 8
*/



function computePower(num, exponent) {
  return Math.pow(num, exponent);
}



/*
Your Code Should Pass:

describe("computePower", function() {
  it("should return a number", function() {
    expect(typeof computePower(2, 4)).toBe("number");
  });
  it("should return a number raised to a given exponent", function() {
    expect(computePower(2, 4)).toBe(16);
  });
  it("should return a negative number raised to a given exponent", function() {
    expect(computePower(-2, 4)).toBe(16);
  });
  it("should return a number raised to 0", function() {
    expect(computePower(-2, 0)).toBe(1);
  });
});
*/
