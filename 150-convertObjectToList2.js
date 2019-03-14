// Write a function called “listAllValues” which returns an array of all the input object’s values.
// Example input:

// {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// }
// Function’s return value (output):

// ['Krysten', 33, false]
// Note that the input may have a different number of keys and values than the given sample.
// E.g. it should also handle an input like:

// {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }
// Function’s return value (output):

// ['a', 11, true, 1]



function listAllValues(obj) {
  return Object.values(obj);
}

// Method 2:

// function listAllValues(obj) {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// }



// Your Code Should Pass:

// describe ('listAllValues', function() {
//   it ('should_output_an_array_of_values', function(){
//     var input = {
//       foo: 'bar',
//       level: 1,
//       red: 'green',
//       number: true,
//       cry: 'excelsior'
//     }
//
//     var output = listAllValues(input);
//     console.log(Array.isArray(output));
//     console.log(output);
//
//     expect(output).not.toBeUndefined();
//     expect(output[0]).toBe('bar');
//     expect(output[1]).toBe(1);
//     expect(output[2]).toBe('green');
//     expect(output[3]).toBe(true);
//     expect(output[4]).toBe('excelsior');
//   });
//
// });
