/*
Write a function called “isOldEnoughToDrink”.
Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.

var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/




function isOldEnoughToDrink(age) {
 return age >= 21;
}




/*
Your Code Should Pass:
describe("isOldEnoughToDrink", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToDrink(40)).toEqual("boolean");
  });
  it("should return whether the age is greater than 21", function() {
    expect(isOldEnoughToDrink(40)).toBe(true);
  });
  it("should return true if the age is 21", function() {
    expect(isOldEnoughToDrink(21)).toBe(true);
  });
});
*/
