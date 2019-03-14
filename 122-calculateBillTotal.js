// Write a function called “calculateBillTotal”.

// Given the pre tax and pre tip amount of a meal, “calculateBillTotal” returns the total amount due after tax and tip.

// Notes:
// * Assume that sales tax is 9.5% and tip is 15%.
// * Do NOT tip on the sales tax, only on the pre tip amount.

// var output = calculateBillTotal(20);
// console.log(output); // --> 24.9



function calculateBillTotal(preTaxAndTipAmount) {
  return preTaxAndTipAmount + (preTaxAndTipAmount * .095) + (preTaxAndTipAmount * .15);
}


// Method 2:

// function calculateBillTotal(preTaxAndTipAmount) {
//   var tax = preTaxAndTipAmount * 0.095;
//   var tip = preTaxAndTipAmount * 0.15;
//   var total = tip + tax + preTaxAndTipAmount;
//   return total;
// }



// Your Code Should Pass:

// describe("calculateBillTotal", function() {
//   it("should return a number", function() {
//     expect(typeof calculateBillTotal(20)).toBe("number");
//   });
//   it("should return the bill total, incuding tax and tip", function() {
//     expect(calculateBillTotal(20)).toBe(24.9);
//   });
// });
