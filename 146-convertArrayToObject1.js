// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.

// Example input:
// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

// Function’s return value (output):
// { Queen : 'Beyonce' }

// Do not change the input array. Assume all elements in the input array will be of type ‘string’.
// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:
// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']

// Function’s return value (output):
// { Kevin : 'Spacey' }



function transformFirstAndLast(array) {
	  return {[array[0]]: array[array.length - 1]};
	}

// OR

// function transformFirstAndLast(arr) {
//   var obj = {};
//   obj[arr[0]] = arr[arr.length-1];
//   return obj;
// }



// Your Code Should Pass:

// describe('transformFirstAndLast', function() {
//   it('should_properly_assign_key_and_value_pair', function (){
//
//     var input = ['Marie', 'Kayla', 'Jackson', 'Richard', 'Kyle', 'Sarah', 'Mars', 'Wayne', 'Mary'];
//
//     var output = transformFirstAndLast(input);
//
//     expect(output).not.toBeUndefined();
//     expect(typeof output).toBe('object');
//     expect(output.Marie).toBe('Mary');
//   });
//
//   it('should_not_modify_input_array', function() {
//     var input = ['Mars', 'Wayne', 'Mary'];
//     var copy = input.slice(0);
//     var output = transformFirstAndLast(input);
//
//     expect(input.length).toBe(copy.length);
//     expect(copy[0]).toBe(input[0]);
//     expect(copy[1]).toBe(input[1]);
//     expect(copy[2]).toBe(input[2]);
//
//   });
// });
