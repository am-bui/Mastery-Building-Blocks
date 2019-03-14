// Write a function called “convertScoreToGrade”.

// Given a score, “convertScoreToGrade” returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) –> ‘A’
// * (89 - 80) –> ‘B’
// * (79 - 70) –> ‘C’
// * (69 - 60) –> ‘D’
// * (59 - 0) –> ‘F’
// * If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.

// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'



function convertScoreToGrade(score) {
 if (score > 100 || score < 0) return 'INVALID SCORE';
 if (score > 89) return 'A';
 if (score > 79) return 'B';
 if (score > 69) return 'C';
 if (score > 59) return 'D';
 if (score <=  59) return 'F';
}

// Method 2:

// function convertScoreToGrade(grade) {
//   if (grade < 0 || grade > 100) return "INVALID SCORE";
// 	 const grades = {
//     A: grade >= 90,
//     B: grade >= 80,
//     C: grade >= 70,
//     D: grade >= 60,
//     F: grade <  60
//   }
//   return Object.keys(grades).find(key => grades[key] === true);
// }



// Your Code Should Pass:

// describe("convertScoreToGrade", function() {
//   it("should return a string", function() {
//     expect(typeof(convertScoreToGrade(95))).toBe("string");
//   });
//   it("should return 'A' for scores between 90 and 100", function() {
//     expect(convertScoreToGrade(95)).toBe("A");
//   });
//   it("should return 'B' for scores between 80 and 89", function() {
//     expect(convertScoreToGrade(80)).toBe("B");
//   });
//   it("should return 'C' for scores between 70 and 79", function() {
//     expect(convertScoreToGrade(79)).toBe("C");
//   });
//   it("should return 'D' for scores between 60 and 69", function() {
//     expect(convertScoreToGrade(60)).toBe("D");
//   });
//   it("should return 'F' for 59", function() {
//     expect(convertScoreToGrade(59)).toBe("F");
//   });
//   it("should return 'F' for scores between 0 and 59", function() {
//     expect(convertScoreToGrade(50)).toBe("F");
//   });
//   it("should return 'F' for 0", function() {
//     expect(convertScoreToGrade(0)).toBe("F");
//   });
//   it("should return 'INVALID SCORE' for scores less than 0", function() {
//     expect(convertScoreToGrade(-1)).toBe("INVALID SCORE");
//   });
//   it("should return 'INVALID SCORE' for scores greater than 100", function() {
//     expect(convertScoreToGrade(101)).toBe("INVALID SCORE");
//   });
// });
