/*
Write a function called “isPersonOldEnoughToDrive”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrive” returns whether the given person is old enough to drive.

Notes:
* The legal driving age in the United States is 16.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
*/



function isPersonOldEnoughToDrive(person) {
  return person.age >= 16;
}



/*
Your Code Should Pass:

describe("isPersonOldEnoughToDrive", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToDrive(person)).toBe("boolean");
  });
  it("should return true if a person has an age of over 16", function() {
    var person = {
      age: 55
    };
    expect(isPersonOldEnoughToDrive(person)).toBe(true);
  });
  it("should return true if a person has an age of 16", function() {
    var person = {
      age: 16
    };
    expect(isPersonOldEnoughToDrive(person)).toBe(true);
  });
  it("should return false if a person has an age under 16", function() {
    var person = {
      age: 15
    };
    expect(isPersonOldEnoughToDrive(person)).toBe(false);
  });
});
*/
