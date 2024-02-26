const {generateRandomNumber} = require('../utils/MathHelper.js');

let randomN1 = generateRandomNumber(1, 100);
let randomN2 = generateRandomNumber(1, 100);
let randomN3 = generateRandomNumber(1, 100);

let averageOfRan = (randomN1 + randomN2 + randomN3) / 3
console.log(averageOfRan)
if(averageOfRan >= 50){
 console.log('True');
} 
else {
    console.log('false');
}; 


//task 2

let num1 = generateRandomNumber(1, 3);
let num2 = generateRandomNumber(1, 3);
let num3 = generateRandomNumber(1, 3);
console.log(num1, num2, num3)

if(num1 === num2 && num1 === num3 && num2 === num3)
    return console.log('TRIPLE MATCH')
    else if(num1 === num2 || num1 === num3 || num2 === num3)
    return console.log('DOUBLE MATCH')
    else return console.log('NO MATCH');

// task 3
function hasA(word){
 if (word.includes('a') || word.includes('A'))
 return "true"
else return "false"
};
console.log(hasA(''));

// task 4
function doubleOrTripleWord(str){
    if (str.length % 2 === 0)
    return str + str + str
else return str + str
};

console.log(doubleOrTripleWord("22"));

// task 5
function firstWord(str2){
    if (lWord === "" || lWord === "  ")
    return '""'
    else return str2.slice(0, str2.indexOf(' '))
};

console.log(firstWord("Hello World"));

//task 6
function lastWord(lWord){
     if (lWord === "" || lWord === "  ")
    return '""'
    else return lWord.slice(lWord.lastIndexOf(' '))
};

console.log(lastWord(' '));

//task 7
function fristlastWord(wor){
    if (wor === "" || wor === "  ")
    return '""'
    else return (wor.slice(0, wor.indexOf(' '))) + wor.slice(wor.lastIndexOf(' ') + 1)
};

console.log(fristlastWord('Hello World'));

//task 8
function startVowel(sv) {
    let fristL = sv.toLowerCase();
    
    if(fristL.startsWith('a') || fristL.startsWith('e') || fristL.startsWith('i') || fristL.startsWith('o') || fristL.startsWith('u')) return true;
    return false;
}

console.log(startVowel('Hello'));

// task 9
function swap4(word) {
    if(word.length < 8) return '';

    let first4 = word.slice(0, 4);
    let last4 = word.slice(-4);
    let mid = word.slice(4, -4);

    return last4 + mid + first4;
};

console.log(swap4('abc'));


// Task 10
function swapFirstLastWord(word) {
    if(word.indexOf(' ') === -1) return ''; 
    if(word.at(word.lastIndexOf(' ') + 1) === undefined) return ''; 
    let firstWord = word.slice(0, word.indexOf(' '));
    let lastWord = word.slice(word.lastIndexOf(' ') + 1);
    let middle = word.slice(word.indexOf(' '), word.lastIndexOf(' ') + 1);

    return lastWord + middle + firstWord;
}

console.log(swapFirstLastWord('Hello World'));
