// Write a function called “getAllWords”.
//
// Given a sentence, “getAllWords” returns an array containing every word in the sentence.
//
// Notes:
// * If given an empty string, it should return an empty array.
//
// var output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']



function getAllWords(str){
  return str.length > 0 ? str.split(' ') : [];
}

// function getAllWords(str) {
//   return str.split(' ', str.length);
// }



// Your Code Should Pass:

// describe("getAllWords", function() {
//   it("should return an array", function() {
//     expect(Array.isArray(getAllWords("something like this here"))).toBe(true);
//   });
//   it("should return an array containing all the words in the sentence", function() {
//     expect(getAllWords("Something like this here")).toEqual(["Something", "like", "this", "here"]);
//   });
//   it("should return an empty array when given an empty string", function() {
//     expect(getAllWords("")).toEqual([]);
//   });
// });
