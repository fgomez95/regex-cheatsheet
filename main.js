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

// Match not specified single characters 
const tigersString = "3 tristes tigres.";
const negativeMatch = /[^0-9]/ig;

console.log(tigersString.match(negativeMatch).length);

// Exclude character set using a caret
const myRandomQuote = "1. Don't Make Others Suffer for Your Personal Hatred..";
const myMatch = /[^0-9^aeiou]/ig;

console.log(myRandomQuote.match(myMatch).length);

// Match if a character occurs n times
const longWord = "antidisestablishmentarianism";
const lgRegex = /a+/g;

console.log(longWord.match(lgRegex));

// Match characters that occur zero or more times 
const goalStr = "GOOOOOooooooooooaaaaaaaallllll oo oo foo bar";
const matchGoal = /o*/ig;

console.log(goalStr.match(matchGoal));

// Lazy match 
const component = `<div>
                    <h1>Hello, World!</h1>
                   </div>`;
const tagMatch = /<.*?>/g;

console.log(component.match(tagMatch));

// Match Beginning String Patterns
const waldoString = 'Waldo can be Waldo matched';
const waldoRegex = /^waldo/i;

console.log(waldoString.match(waldoRegex));

const waldoMissing = 'Now he can\'t be found';

console.log(waldoMissing.match(/^waldo/i));

// Match ending of string patterns
const endOfStr = 'some random sentece Match';
const endRegex = /match$/i;

console.log(endOfStr.match(endRegex));

const someNewRandomString = 'asdfadfdsf asdfasdf asdfasdfasf AA asdfasdfas asdf';
const randomEndRegex = /AA$/;

console.log(someNewRandomString.match(randomEndRegex));

// Match all letters and numbers 
const numLettMatch = /\w+/ig;

console.log(numLettMatch.test('521651'));
console.log(numLettMatch.test('asdfasf asdfasdf'));
console.log(numLettMatch.test('_  sadfas asdf'));
console.log(numLettMatch.test(' #@!#$@$% '));

// Match everything except letters and numbers
const notNumLettMatch = /\W+/g;

console.log('Match everything except letters and numbers');
console.log(notNumLettMatch.test('521651'));
console.log(notNumLettMatch.test('asdfasfasdfasdf'));
console.log(notNumLettMatch.test(/*this should match because of space */'_  sadfas asdf'));
console.log(notNumLettMatch.test(' #@!#$@$% '));

// Match all numbers
const numMatch = /\d+/g;
const numString = '10 10 10 2205 6540654';

console.log(numString.match(numMatch).length);
console.log('asdfasdfas dfasdfsadfsa'.match(numMatch));

// Match all not numbers 
const notNumMatch = /\D/;

console.log('10 20 30 450 asdf %% %%% l54%%% fsd fas d4 f46sd 65s6s'
    .match(notNumLettMatch));


// Exercise: Restrict possible usernames
const myUsername = 'RogeRojas96';
const invalidUsername = '42skankhunt';
const usernameMatch = /^[a-z]{2,}\d*$/i;

console.log(usernameMatch.test(myUsername));
console.log(usernameMatch.test(invalidUsername));


// Match whitespace
const myStringWithWhitespace = "something with a bunch of whitespace D:";
const whitespaceRegex = /\s/g;

console.log(myStringWithWhitespace.match(whitespaceRegex));

// Match non whitespace 
const myStringWithNonWhitespace = "asdfasdf asddfa sdfas dfasd fasdf s";
const nonWhitespaceRegex = /\S/g;

console.log(myStringWithNonWhitespace.match(nonWhitespaceRegex).length);

// Specify a match range
const hadouken = "Hadouuuuuuuuuuuuuken!";
const hadoukenRegex = /Hadou{3, 9}ken!/;

console.log(hadoukenRegex.test(hadoukenRegex));


// Match pattern that occurs n or more number of times
const helloString = "Hellooooooooooooo";
const helloRegex = /Hello{3,}/;

console.log(helloString.match(helloRegex));

// Exact number of matches 
const goalString = "Gooal";
const goalRegex = /Go{2}al/;

console.log(goalString.match(goalRegex));

// Match none or all pattern
const color = "colour";
const britishMatch = /colou?r/;

console.log(color.match(britishMatch));


// Lookheads

const passRegex = /(?=\w{5,})(?=\D*\d{2})/;
console.log(passRegex.test("something that does not match"));
console.log(passRegex.test("123thisMatches"));

// Capture groups 

let repeatNum = "10 22 52";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);

// Search and replace 

const text = "I stay on top of my game!";
const myReg = /game/; // Change this line
const replace = "stuff"; // Change this line
console.log(text.replace(myReg, replace));