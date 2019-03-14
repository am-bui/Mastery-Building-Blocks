// Write a function called “repeatString”.

// Given a string and a number, “repeatString” returns the given string repeated the given number of times.

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'



function repeatString(string, num) {
  return string.repeat(num);
}



// Your Code Should Pass:

// describe("repeatString", function() {
//   it("should return a string", function() {
//     expect(typeof(repeatString("what", 3))).toBe("string");
//   });
//   it("should repeat a string a given number of times", function() {
//     expect(repeatString("what", 3)).toBe("whatwhatwhat");
//   });
//   it("should repeat a string 0 number of times", function() {
//     expect(repeatString("what", 0)).toBe("");
//   });
// });
