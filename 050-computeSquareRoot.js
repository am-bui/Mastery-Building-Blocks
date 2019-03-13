/*
Write a function called “computeSquareRoot”.
Given a number, “computeSquareRoot” returns its square root.

var output = computeSquareRoot(9);
console.log(output); // --> 3
*/



function computeSquareRoot(num) {
  return Math.sqrt(num);
}



/*
Your Code Should Pass:

describe("computeSquareRoot", function() {
  it("should return a number", function() {
    expect(typeof computeSquareRoot(4)).toBe("number");
  });
  it("should return the square root of a number", function() {
    expect(computeSquareRoot(4)).toBe(2);
  });
});
*/
