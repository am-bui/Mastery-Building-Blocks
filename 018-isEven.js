/*
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

var output = isEven(11);
console.log(output); // --> false
*/


function isEven(num){
  return num % 2 === 0;
}


/*
Your Code Should Pass:

describe("isEven", function() {
  it("should return a boolean", function() {
    expect(typeof isEven(40)).toEqual("boolean");
  });
  it("should return if the number is even", function() {
    expect(isEven(8)).toBe(true);
  });
  it("should return true if the number is 0", function() {
    expect(isEven(0)).toBe(true);
  });
});
*/
