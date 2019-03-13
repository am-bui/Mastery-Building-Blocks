// Write a function called “areValidCredentials”.

// Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

// var output = areValidCredentials('Ritu', 'mylongpassword')
// console.log(output); // --> true



function areValidCredentials(name, password) {
  return name.length > 3 && password.length > 7;
}



// Your Code Should Pass:

// describe("areValidCredentials", function() {
//   it("should return a boolean", function() {
//     expect(typeof areValidCredentials("Ritu", "mylongpassword")).toEqual("boolean");
//   });
//   it("should return true if the name is longer than 3 characters and the password is at least 8 characters", function() {
//     expect(areValidCredentials("Ritu", "mylongpassword")).toBe(true);
//   });
//   it("should return false if the name is less than 3 characters", function() {
//     expect(areValidCredentials("me", "mylongpassword")).toBe(false);
//   });
//   it("should return false if the password is not at least 8 characters", function() {
//     expect(areValidCredentials("Someone", "1234567")).toBe(false);
//   });
// });
