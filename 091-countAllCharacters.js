// Write a function called “countAllCharacters”.

// Given a string, “countAllCharacters” returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}



function countAllCharacters(str) {
  return str.split('').reduce((acc, curr) => {
    !acc[curr] ? acc[curr] = 1 : acc[curr]++;
    return acc;
  }, {});
}



// Your Code Should Pass:

// describe("countAllCharacters", function() {
//   it("should return an object", function() {
//     expect(typeof countAllCharacters("banana")).toBe("object");
//   });
//   it("should return an object where each property gives a character in the string, with its number of appearances", function() {
//     var result = {
//       s: 1,
//       a: 3,
//       m: 1,
//       n: 1,
//       t: 1,
//       h: 1
//     };
//     expect(countAllCharacters("samantha")).toEqual(result);
//   });
//   it("should return an object empty object if passed an empty string", function() {
//     expect(countAllCharacters("")).toEqual({});
//   });
// });
