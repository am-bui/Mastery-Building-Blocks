/*
Write a function called “computePerimeterOfATriangle”.

Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20
*/



function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}



/*
Your Code Should Pass:

describe("computePerimeterOfATriangle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfATriangle(6, 4, 10)).toBe("number");
  });
  it("should return the perimeter of a triangle", function() {
    expect(computePerimeterOfATriangle(6, 4, 10)).toBe(20);
  });
});
*/
