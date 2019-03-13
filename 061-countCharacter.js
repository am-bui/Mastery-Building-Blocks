// Write a function called “countCharacter”.
//
// Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.
//
// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3



function countCharacter(str, char) {
  return str.split('').filter(i => i === char).length;
}


// function countCharacter(str,char){
//   var count = 0;
//   for (i = 0 ; i < str.length; i++){
//     if (str[i] == char) {
//       count++;
//     }
//   }
//   return count;
// }



// Your Code Should Pass:

// describe("countCharacter", function() {
//   it("should return a number", function() {
//     expect(typeof countCharacter("say what!?", "a")).toBe("number");
//   });
//   it("should return the number of occurences of a character in a string when the character exists", function() {
//     expect(countCharacter("say what!?", "a")).toBe(2);
//   });
//   it("should return the number of occurences of a character in a string when the character does not exist", function() {
//     expect(countCharacter("say what!?", "x")).toBe(0);
//   });
//   it("should return the number of occurences of a non-alphanumeric character in a string when the character exists", function() {
//     expect(countCharacter("say what!?", " ")).toBe(1);
//   });
// });
