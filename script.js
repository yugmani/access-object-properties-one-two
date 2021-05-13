// ***********************************************************
// 1. Accessing object properties One
// ***********************************************************

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

//My Code
function accessObjKey({ continent, country }) {
  return country;
}

// //Author's Code
// function myFunction(obj) {
//   return obj.country;
// }

// Test Cases:
console.log(accessObjKey({ continent: 'Asia', country: 'Japan' })); //Expected 'Japan'
console.log(accessObjKey({ country: 'Sweden', continent: 'Europe' })); // Expected 'Sweden'

// ***********************************************************
// 2. Accessing object properties two
// ***********************************************************

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

function accessObjProperties(obj) {
  return obj['prop-2'];
}

// Test Cases:
// console.log(accessObjProperties({ one: 1, 'prop-2': 2 })); // Expected 2
// console.log(accessObjProperties({ 'prop-2': 'two', prop: 'test' })); // Expected 'two'

// ***********************************************************
// 3. Accessing object properties three
// ***********************************************************

// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

//My Solution
function accessKeyString({ continent, country }, string) {
  return string === 'continent' ? continent : country;
}

// // Author's Solution
// function accessKeyString(obj, key) {
//   return obj[key];
// }

// Test Cases:
console.log(
  accessKeyString({ continent: 'Asia', country: 'Japan' }, 'continent')
); //Expected 'Asia'
console.log(
  accessKeyString({ country: 'Sweden', continent: 'Europe' }, 'country')
); // Expected 'Sweden'

// ***********************************************************
// 1. Accessing object properties two
// ***********************************************************

// ***********************************************************
// 1. Accessing object properties two
// ***********************************************************

// ***********************************************************
// 1. Accessing object properties two
// ***********************************************************

// ***********************************************************
// 1. Accessing object properties two
// ***********************************************************
