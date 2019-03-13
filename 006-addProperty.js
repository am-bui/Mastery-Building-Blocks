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
describe("getProperty", function() {
  var obj;

  beforeEach(function() {
    obj = {
      name: "You"
    }
  });

  it("should return the value of the property located in the object at the passed in key", function() {
    expect(getProperty(obj, "name")).toBe("You");
  });
  it("should return undefined when there is no property at the passed in key", function() {
    expect(getProperty(obj, "age")).toBe(undefined);
  });
});
*/
