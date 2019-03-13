/*
Write a function called “square”.

Given a number, “square” should return the square of the given number.

var output = square(5);
console.log(output); // --> 25
*/



function square(num) {
  return num ** 2;
  // return num * num;
}



/*
Your Code Should Pass:

describe("square", function() {
  it("should_square_a_positive_number", function() {
    expect(square(2)).toBe(4);
  });

  it("should_square_0", function() {
    expect(square(0)).toBe(0);
  });

  it("should_square_a_number_greater_than_10", function() {
    expect(square(12)).toBe(144);
  });

  it("should_square_a_negative_number", function() {
    expect(square(-5)).toBe(25);
  });
})
*/
