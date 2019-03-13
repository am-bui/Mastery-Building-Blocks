/* Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key.
Notes:
* If there is no property at the given key, it should return undefined.*/

// var obj = {
//   key: 'value'
// };
//
// var output = getProperty(obj, 'key');
// console.log(output); // --> 'value'



function getProperty(obj, key) {
  return obj[key];
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
