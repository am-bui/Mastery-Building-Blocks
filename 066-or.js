// Write a function called “or”.
//
// Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.
//
// var output = or(true, false);
// console.log(output); // --> true;



function or(expression1, expression2){
  return expression1 ? true : expression2 ? true : false;
}


// function or(exp1, exp2) {
//   if (exp1 && exp2) {
//     return true;
//   } else if (exp1) {
//     return true;
//   } else if (exp2) {
//     return true;
//   } else {
//     return false;
//   }
// }



// Your Code Should Pass:

// describe("or", function() {
//   it("should not use the logical OR operator", function() {
//     var body = or.toString()
//     expect(/\|\|/.test(body)).toBe(false);
//   });
//   it("should return a boolean", function() {
//     expect(typeof or(true, true)).toEqual("boolean");
//   });
//   it("should return true if the first value is true", function() {
//     expect(or(true, false)).toBe(true);
//   });
//   it("should return true if the second value is true", function() {
//     expect(or(false, true)).toBe(true);
//   });
//   it("should return true both values are true", function() {
//     expect(or(true, true)).toBe(true);
//   });
//   it("should return false both values are false", function() {
//     expect(or(false, false)).toBe(false);
//   });
// });
