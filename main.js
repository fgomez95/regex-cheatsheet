// Find patterns in strings using the Test method.
const testStr = "Hello, world";
const testRegex = /Hello/;
console.log(testRegex.test(testStr), /Hello/.test(testRegex));

// Match multiple patterns using OR " | ".
const animals = "cat, dog, cow, shark";
const myAnimals = /chicken|hen|cow/;
console.log(myAnimals.test(animals));

// Ignore casing using " i ".
const greetingStr = "Hi, my name is Fernando.";
const nameRegex = /fernando/i;

console.log(nameRegex.test(greetingStr));

// Extract a word using Match.
const myGreeting = "hello, world";
console.log(myGreeting.match(/hello/));

// Find more matches using the " g " flag.
const myRepeat = "hello, hello, hello";
console.log(myRepeat.match(/hello/g));

// Match anything with Period wildcard
const someString = "token, tomato, cat, car, dog, Tokyo";
console.log(someString.match(/to./ig));

// Match multiple possibilities pattern.
const bagOfWords = "dig, dog, dug, dag, dear, dong";
const myRegex = /d[aeiou]g/ig;
console.log(bagOfWords.match(myRegex));

// Abstract a character set using hyphen.
const alphabetString = "a, b, c, d, e, f, g";
const alphMatch = /[a-d]/ig;
console.log(alphabetString.match(alphMatch));

// Match number and character range
const str = "212 2112 221 221 212 21 212121 2121 221 2212112 2212122 1212 2121 212121 2121 21 212 12112";
const matchNumber = /2[1-2][1-2]1/g;
console.log(str.match(matchNumber));

// Match number and letter range 
const lettNumRange = "fizz buzz f1zz f0zz f3zz";
const lettNumMatch = /f[a-z0-2]zz/ig;
console.log(lettNumRange.match(lettNumMatch));