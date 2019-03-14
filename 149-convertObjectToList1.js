// Write a function called “getAllKeys” which returns an array of all the input object’s keys.
// Example input:
// { name : 'Sam', age : 25, hasPets : true }

// Function’s return value (output) :
// ['name', 'age', 'hasPets']

// Do not use “Object.keys” to solve this prompt.

// Note that your function should be able to handle any object passed in it.

// E.g. it should also handle an input like:
// { a : 'a', number : 11, hungry : true, grammyWins : 1 }

// Function’s return value (output):
// ['a', 'number', 'hungry', 'grammyWins']



function getAllKeys(obj){
  return Object.getOwnPropertyNames(obj)
}

// Method 2:

// function getAllKeys(obj){
//  return Object.entries(obj).map(pair => pair[0]);
// 	}

// Method 3:

// function getAllKeys(obj) {
//  let arr = [];
//  for (key in obj) {
//    arr.push(key);
//  }
//  return arr;
// }



// Your Code Should Pass:

// describe('getAllKeys', function() {
//   it('should_output_an_array_of_key_names', function(){
//     var input = {
//       foo: 'bar',
//       level: 1,
//       red: 'green',
//       number: true
//     }
//     var expected = Object.keys(input);
//     var actual = getAllKeys(input);
//
//     expect(actual).not.toBeUndefined();
//     expect(actual[0]).toBe(expected[0]);
//     expect(actual[1]).toBe(expected[1]);
//     expect(actual[2]).toBe(expected[2]);
//     expect(actual[3]).toBe(expected[3]);
//   });
//
//   it ('should_not_use_restricted_methods', function() {
//     var body = getAllKeys.toString();
//
//     expect(/Object\.keys/.test(body)).toBe(false);
//   });
//
// });
