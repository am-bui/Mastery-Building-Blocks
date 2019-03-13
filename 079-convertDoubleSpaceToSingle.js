// Write a function called “convertDoubleSpaceToSingle”.

// Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.

// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"
// Notes:
// * In order to do this problem, you should be familiar with “String.split”, and “Array.join”.



function convertDoubleSpaceToSingle(str){
  return str.split('  ').join(' ');
}



// Your Code Should Pass:

// describe("convertDoubleSpaceToSingle", function() {
//   it("should return a string", function() {
//     expect(typeof convertDoubleSpaceToSingle("This  here sentence")).toBe("string");
//   });
//   it("should return the passed in string, with any double spaces converted to single spaces", function() {
//     expect(convertDoubleSpaceToSingle("this  here  string")).toBe("this here string");
//   });
//   it("should return the passed in string when there are no double spaces", function() {
//     expect(convertDoubleSpaceToSingle("this here string")).toBe("this here string");
//   });
//   it("should return an empty string when passed an empty string", function() {
//     expect(convertDoubleSpaceToSingle("")).toBe("");
//   });
// });
