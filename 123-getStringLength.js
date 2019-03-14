// Write a function called “getStringLength”.

// Given a string, “getStringLength” returns the length of the given string.

// Notes:
// * Do NOT use any native ‘length’ methods.
// * You might consider using ‘substring’ or ‘slice’ as alternatives.

// var output = getStringLength('hello');
// console.log(output); // --> 5



function getStringLength(string) {
  let charCount = 0;
  for (var i in string) {
    charCount++
  }
  return charCount;
}

// Method 2:

// function getStringLength(string){
//   return string.split('').reduce((sum, order) => {
//     sum++;
//     return sum;
//   }, 0)
// };

// Method 3:

// function getStringLength(string) {
//   return string ? getStringLength(string.slice(1)) + 1 : 0;
// }



// Your Code Should Pass:

// describe("getStringLength", function() {
//   it("should return a number", function() {
//     expect(typeof getStringLength("heyo")).toBe("number");
//   });
//   it("should not use the native length operator", function() {
//     var body = getStringLength.toString();
//     expect(/length/.test(body)).toBe(false);
//   });
//   it("should return the length of a string", function() {
//     expect(getStringLength("heyo")).toBe(4);
//   });
//   it("should return the length of an empty string", function() {
//     expect(getStringLength("")).toBe(0);
//   });
// });
