/* Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object. */

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeProperty(obj, 'name');
// console.log(obj.name); // --> undefined


function removeProperty(obj, key) {
  delete obj[key]
}


/*
Your Code Should Pass:
describe("removeProperty", function() {
  it("should remove the property from the passed in object at the passed in key", function() {

    var testObj = {
      name: "Mel",
      age: 88
    };

    removeProperty(testObj, "name");
    expect(testObj.name).toBeUndefined();
  });
});
*/
