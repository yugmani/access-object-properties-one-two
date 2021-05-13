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
// console.log(accessObjKey({ continent: 'Asia', country: 'Japan' })); //Expected 'Japan'
// console.log(accessObjKey({ country: 'Sweden', continent: 'Europe' })); // Expected 'Sweden'

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
// console.log(
//   accessKeyString({ continent: 'Asia', country: 'Japan' }, 'continent')
// ); //Expected 'Asia'
// console.log(
//   accessKeyString({ country: 'Sweden', continent: 'Europe' }, 'country')
// ); // Expected 'Sweden'

// ***********************************************************
// 4.Remove a property from an object
// ***********************************************************

// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

//My Code
// function removeProperty(obj) {
//   delete obj['country'];
//   return obj;
// }

// My Alternate Code
function removeProperty({ country, ...rest }) {
  return rest;
}

//Author's Code
// function removeProperty(obj) {
//   const { country, ...rest } = obj;
//   return rest;
// }

// Test Cases:
// console.log(
//   removeProperty({ continent: 'Asia', country: 'Japan', region: 'Kansai' })
// );
// Expected { continent: 'Asia', region: 'Kansai' }
// console.log(
//   removeProperty({ country: 'Sweden', continent: 'Europe', planet: 'Earth' })
// );
// Expected { continent: 'Europe', planet: 'Earth' }
// console.log(
//   removeProperty({
//     city: 'Sacramento',
//     state: 'California',
//     country: 'USA',
//     continent: 'North America'
//   })
// );
// Expected  { city: 'Sacramento', state: 'California', continent: 'North America' }

// ***********************************************************
// 5. Swap object keys and values
// ***********************************************************

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

//My Solution
// function swapKeyAndValues(obj) {
//   let newObj = {};
//   for (let i in obj) {
//     let keys = i;
//     let values = obj[i];
//     newObj[values] = keys;
//   }

//   return newObj;
// }

//Author's Solution
function swapKeyAndValues(obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    return { ...acc, [obj[cur]]: cur };
  }, {});
}

// Test Cases:
// console.log(
//   swapKeyAndValues({
//     bear: 'animal',
//     sow: 'female',
//     boar: 'male',
//     cub: 'young'
//   })
// );
// Expected { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }
// console.log(
//   swapKeyAndValues({
//     sheep: 'animal',
//     ewe: 'female',
//     ram: 'male',
//     lamb: 'young'
//   })
// );
// Expected { animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }
// console.log(swapKeyAndValues({ Berlin: 'city', Germany: 'country' }));
// Expected { city: 'Berlin', country: 'Germany' }

// ***********************************************************
// 1. Accessing object properties two
// ***********************************************************

// ***********************************************************
// 1. Accessing object properties two
// ***********************************************************
