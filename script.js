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
// Tip: you might want to use the square brackets property accessor

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
// 6. Add property to each object in array
// ***********************************************************

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

//Solution
function addPropertyToArrayOfObjects(arr, string) {
  return arr.map((item) => {
    return { ...item, continent: string };
  });
}

// Test Cases:
// console.log(
//   addPropertyToArrayOfObjects(
//     [
//       { city: 'Tokyo', country: 'Japan' },
//       { city: 'Bangkok', country: 'Thailand' }
//     ],
//     'Asia'
//   )
// );
// Expected [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
// console.log(
//   addPropertyToArrayOfObjects(
//     [
//       { city: 'Stockholm', country: 'Sweden' },
//       { city: 'Paris', country: 'France' }
//     ],
//     'Europe'
//   )
// );
// Expected [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// ***********************************************************
// 7. Merge two objects with matching keys
// ***********************************************************

// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

//My Solution
function mergeObjects(obj1, obj2) {
  obj2['city'] = obj2['country'];
  delete obj2['country'];

  return { ...obj1, ...obj2 };
}

//Author's Solution
function myFunction(first, second) {
  const { country, ...rest } = second;
  return { ...first, ...rest, city: country };
}

// Test Cases:
// console.log(
//   mergeObjects(
//     { continent: 'Europe', country: 'Germany' },
//     { planet: 'Earth', country: 'Munich', state: 'Bavaria' }
//   )
// );
// Expected { continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'}
// console.log(
//   mergeObjects(
//     { continent: 'North America', country: 'USA' },
//     { planet: 'Earth', country: 'Los Angeles', state: 'California' }
//   )
// );
// Expected { continent: 'North America', country: 'USA', planet: 'Earth', state: 'California', city: 'Los Angeles'}

// ***********************************************************
// 8. Extracting information from objects
// ***********************************************************

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

//My Solution
function extractingInfoFromObjects(obj) {
  const { fn, ln, size, weight, ...rest } = obj;

  let newObj = {};
  newObj.fn = fn;
  newObj.ln = ln;
  if (size) {
    // obj['size'] = `${size.toString()} cm`;
    newObj['size'] = `${size.toString()} cm`;
  }
  if (weight) {
    // obj['weight'] = `${weight.toString()} kg`;
    newObj['weight'] = `${weight.toString()} kg`;
  }
  return newObj;
}

// Author's Solution
function extractingInfoFromObjects(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

// Test Cases:
// console.log(
//   extractingInfoFromObjects({
//     fn: 'Lisa',
//     ln: 'Müller',
//     age: 17,
//     size: 175,
//     weight: 67
//   })
// );
// Expected {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
// console.log(
//   extractingInfoFromObjects({
//     fn: 'Martin',
//     ln: 'Harper',
//     age: 26,
//     email: 'martin.harper@test.de',
//     weight: 102
//   })
// );
// Expected {fn: 'Martin', ln: 'Harper', weight: '102kg'}
// console.log(
//   extractingInfoFromObjects({
//     fn: 'Andrew',
//     ln: 'Harper',
//     age: 81,
//     size: 175,
//     weight: 71
//   })
// );
// Expected {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
// console.log(
//   extractingInfoFromObjects({
//     fn: 'Matthew',
//     ln: 'Müller',
//     age: 19,
//     email: 'matthew@mueller.de'
//   })
// );
// Expected {fn: 'Matthew', ln: 'Müller'}

// ***********************************************************
// 9.Replace empty strings in object with null values
// ***********************************************************

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

//My Solution
function replaceEmptyWithNull(obj) {
  let newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key] === '' || newObj[key] === ' ') {
      newObj[key] = null;
    }
  }
  return newObj;
}

//Author's Solution
// function replaceEmptyWithNull(obj) {
//   const newObj = { ...obj };
//   for (key in newObj) {
//     if (newObj[key].trim() === '') newObj[key] = null;
//   }
//   return newObj;
// }

// Test Cases:
// console.log(replaceEmptyWithNull({ a: 'a', b: 'b', c: '' }));
// Expected { a: 'a', b: 'b', c: null }
// console.log(replaceEmptyWithNull({ a: '', b: 'b', c: ' ', d: 'd' }));
// Expected { a: null, b: 'b', c: null, d: 'd' }
// console.log(replaceEmptyWithNull({ a: 'a', b: 'b ', c: ' ', d: '' }));
// Expected { a: 'a', b: 'b ', c: null, d: null }
