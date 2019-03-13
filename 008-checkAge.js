/*
Write a function called “checkAge”.
Given a person’s name and age, “checkAge” returns one of two messages:
“Go home, {insert_name_here}!”, if they are younger than 21.
“Welcome, {insert_name_here}!”, if they are 21 or older.
Naturally, replace “{insert_name_here}” with the given name. :) */

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'



function checkAge(name, age){
  return age >= 21 ? `Welcome, ${name}!` : `Go home, ${name}!`;
}



/*
Your Code Should Pass:
describe("checkAge", function() {
  it("should return a string", function() {
    expect(typeof(checkAge("Dan", "24"))).toBe("string");
  });
  it("should welcome someone over 21", function() {
    expect(checkAge("Dan", "24")).toBe("Welcome, Dan!");
  });
  it("should welcome a 21 year old", function() {
    expect(checkAge("Toni", "21")).toBe("Welcome, Toni!");
  });
  it("should bounce someone under 21", function() {
    expect(checkAge("Rad", "4")).toBe("Go home, Rad!");
  });
});
*/
