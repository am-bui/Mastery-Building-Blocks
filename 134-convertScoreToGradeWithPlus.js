// Write a function called “convertScoreToGradeWithPlusAndMinus”.

// Given a score, “convertScoreToGradeWithPlusAndMinus” returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) –> ‘A’
// * (89 - 80) –> ‘B’
// * (79 - 70) –> ‘C’
// * (69 - 60) –> ‘D’
// * (59 - 0) –> ‘F’
// * If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a ‘-‘
// * If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a ‘+’
// * There are is no F+ and there is no F-.

// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'



function convertScoreToGradeWithPlusAndMinus(score) {
 if (score > 100 || score < 0) return `INVALID SCORE`;
 if (score > 97) return 'A+';
 if (score > 91) return 'A';
 if (score > 89) return 'A-';
 if (score > 87) return 'B+';
 if (score > 81) return 'B';
 if (score > 79) return 'B-';
 if (score > 77) return 'C+';
 if (score > 71) return 'C';
 if (score > 69) return 'C-';
 if (score > 67) return 'D+';
 if (score > 61) return 'D';
 if (score > 50) return 'D-';
 if (score <= 59) return 'F';
}



// Your Code Should Pass:

// describe("convertScoreToGradeWithPlusAndMinus", function() {
//   it("should return a string", function() {
//     expect(typeof(convertScoreToGradeWithPlusAndMinus(95))).toBe("string");
//   });
//   it("should return 'A+' for scores between 98 and 100", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(100)).toBe("A+");
//   });
//   it("should return 'A-' for scores between 90 and 92", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(90)).toBe("A-");
//   });
//   it("should return 'A' for scores between 93 and 97", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(95)).toBe("A");
//   });
//   it("should return 'B+' for scores between 88 and 89", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(89)).toBe("B+");
//   });
//   it("should return 'B-' for scores between 80 and 82", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(80)).toBe("B-");
//   });
//   it("should return 'B' for scores between 83 and 87", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(84)).toBe("B");
//   });
//   it("should return 'C+' for scores between 78 and 79", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(79)).toBe("C+");
//   });
//   it("should return 'C-' for scores between 70 and 72", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(70)).toBe("C-");
//   });
//   it("should return 'C' for scores between 73 and 77", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(76)).toBe("C");
//   });
//   it("should return 'D+' for scores between 68 and 69", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(69)).toBe("D+");
//   });
//   it("should return 'D' for scores between 63 and 67", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(64)).toBe("D");
//   });
//   it("should return 'D-' for scores between 60 and 62", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(60)).toBe("D-");
//   });
//   it("should return 'F' for scores between 0 and 59", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(0)).toBe("F");
//   });
//   it("should return 'INVALID SCORE' for scores less than 0", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(-1)).toBe("INVALID SCORE");
//   });
//   it("should return 'INVALID SCORE' for scores greater than 100", function() {
//     expect(convertScoreToGradeWithPlusAndMinus(101)).toBe("INVALID SCORE");
//   });
// });
