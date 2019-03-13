// Write a function called “countWords”.
//
// Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
//
// Notes:
// * If given an empty string, it should return an empty object.
//
// var output = countWords('ask a bunch get a bunch');
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}



function countWords(str) {
  if (str) {
    return str.split(' ').reduce((acc, curr) => {
      !acc[curr] ? acc[curr] = 1 : acc[curr]++;
      return acc;
    }, {})
  } else return {};
}

// the (if) conditional checks to see if it is a string
// else, return an empty obj {}
// split the string into an array (each word will be a str in an array with a
// space in between)
// reduce over the array
// [Ask: is the current char a char already in the array? - Usually on the first run,
// it is not.]
// So we propose the conditional: if the current char is not in the
// array, assign its value to 1.
// If, on cycling through, we encounter the same character again then simply add 1
// to it.




// Your Code Should Pass:

// describe("countWords", function() {
//   it("should return an object", function() {
//     expect(typeof countWords("ask a bunch try a bunch get a bunch")).toBe("object");
//   });
//   it("should return an object where each property gives a word in the string, with its number of appearances", function() {
//     var result = {
//       ask: 1,
//       a: 2,
//       bunch: 2,
//       get: 1
//     };
//     expect(countWords("ask a bunch get a bunch")).toEqual(result);
//   });
//   it("should return an empty object if passed an empty string", function() {
//     expect(countWords("")).toEqual({});
//   });
// });
