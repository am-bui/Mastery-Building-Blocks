/*
Write a function called “computeAreaOfACircle”.

Given the radius of a circle, “computeAreaOfACircle” returns its area.

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
*/



function computeAreaOfACircle(radius) {
  return Math.PI * (radius ** 2);
  //return Math.PI * Math.pow(radius, 2);
}



/*
Your Code Should Pass:

describe("computeAreaOfACircle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfACircle(4)).toBe("number");
  });
  it("should return the area of a circle", function() {
    expect(computeAreaOfACircle(4)).toBe(50.26548245743669);
  });
});
*/
