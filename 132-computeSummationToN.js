// Write a function called “computeSummationToN”.

// Given a number, “computeSummationToN” returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:
// * If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

// var output = computeSummationToN(6);
// console.log(output); // --> 21



function computeSummationToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Method 2:

// function computeSummationToN(n) {
//   let sum = 0, i = 0;
//   while (i <= n) {
//     sum += i;
//     i++;
//   }
//   return sum;
// };



// Your Code Should Pass:

// describe("computeSummationToN", function() {
//   it("should return a number", function() {
//     expect(typeof computeSummationToN(7)).toBe("number");
//   });
//   it("should return the summation of numbers up to and including 'n'", function() {
//     expect(computeSummationToN(4)).toBe(10);
//   });
//   it("should return the summation of 0", function() {
//     expect(computeSummationToN(0)).toBe(0);
//   });
// });
