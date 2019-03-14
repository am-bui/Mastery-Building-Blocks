// Write a function called “computeFactorialOfN”.

// Given a natural number (a whole number greater than 0), “computeFactorialOfN” returns its factorial.

// var output = computeFactorialOfN(3);
// console.log(output); // --> 6

// var output = computeFactorialOfN(4);
// console.log(output); // --> 24



function computeFactorialOfN(n) {
  var factorial = 1;
  for (var i = n; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

// OR

// function computeFactorialOfN(n) {
//   let nums = [];
//   for (var i  = 1; i <= n; i++) {
//     nums.push(i)
//   }
//   return nums.reduce((a, b) => a * b);
// }



// Your Code Should Pass:

// describe("computeFactorialOfN", function() {
//   it("should return a number", function() {
//     expect(typeof computeFactorialOfN(7)).toBe("number");
//   });
//   it("should return the factorial of 'n'", function() {
//     expect(computeFactorialOfN(4)).toBe(24);
//   });
//   it("should return the factorial of 1", function() {
//     expect(computeFactorialOfN(1)).toBe(1);
//   });
// });
