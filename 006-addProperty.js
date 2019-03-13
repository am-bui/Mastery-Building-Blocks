/* Write a function called “addProperty”.
Given an object, and a key, “addProperty” sets a new property on the given object with a value of true. */

// var myObj = {};
// addProperty(myObj, 'myProperty');
// console.log(myObj.myProperty); // --> true


function addProperty(obj, key) {
  obj[key] = true;
}


/*
Your Code Should Pass:
describe("addProperty", function() {
  var testObj;
  beforeEach(function() {
    testObj = {};
  });
  it("should add a property to the passed in object at the passed in key", function() {
    addProperty(testObj, "testKey");
    expect(testObj.testKey).toBeDefined();
  });
  it("should set the value at the passed in key to true on the passed in object", function() {
    addProperty(testObj, "testKey");
    expect(testObj.testKey).toBe(true);
  });
});
*/
