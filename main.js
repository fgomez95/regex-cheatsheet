// Find patterns in strings using the Test method

const testStr = "Hello, world";
const testRegex = /Hello/;
console.log(testRegex.test(testStr), /Hello/.test(testRegex));

// Match multiple patterns using OR " | ".
const animals = "cat, dog, cow, shark";
const myAnimals = /chicken|hen|cow/;
console.log(myAnimals.test(animals));

// Ignore casing using " i "
const greetingStr = "Hi, my name is Fernando.";
const nameRegex = /fernando/i;

console.log(nameRegex.test(greetingStr));