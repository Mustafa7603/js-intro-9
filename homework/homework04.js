


//task 1 
for (let i = 1; i <= 14; i++) {
    console.log(i * 7)
}

//task 2
for (let i = 1; i <= 8; i++) {
    console.log(i * 6)
}
//task 3
for (let i = 100; i >= 50; i -= 5) {
    console.log(i)
}
//task 4


for (let i = 0; i <= 7; i++) {
    let square = i * i
    console.log(`The square of ${i} is = ${square}`)
}

//task 5
let sum = 0
for (let i = 1; i <= 10; i++) {
    sum += i
}

console.log(sum)

//task 6
const { generateRandomNumber } = require('../utils/MathHelper.js')
let randomNumber = generateRandomNumber(1, 10)
let factorial = 1
for (let i = 1; i <= randomNumber; i++) {
    factorial *= i
}
console.log(randomNumber)
console.log(factorial)

//task 7
let ran1;
let att = 0
do {
    ran1 = generateRandomNumber(1, 100)
    att++;
} while (ran1 % 5 !== 0);


console.log(`The random number is ${ran1} and it took ${att} attempts to generate it`)



//task 8

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(countries.sort())

//task 9

const dogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(dogs, dogs.includes('Pluto'));

//task 10

const cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(cats, cats.includes('Garfield' && 'Felix'))

//task 11

const nums = [10.5, 20.75, 70, 80, 15.75]
console.log(nums);
for (let i = 0; i < 5; i++) {
    console.log(nums[i])
}

//task 12
const obj = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']

let count = 0
let count2 = 0

for (const stuff of obj) {
    if (stuff.toLowerCase().startsWith('b') || stuff.toLowerCase().startsWith('p')) count++
    if (stuff.toLowerCase().includes('book') || stuff.toLowerCase().includes('pen')) count2++
}
console.log(obj)
console.log(`Elements starting with 'B' or 'P' = ${count}`)
console.log(`Elements having 'book' or 'pen' = ${count2}`)

//task 13
const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]

let att1 = 0
let att2 = 0
let att3 = 0
for (const n of numbers) {
    if (n > 10) att1++
    else if (n < 10) att2++
    else if (n === 10) att3++
}
console.log(numbers)
console.log(`Elements that are more than 10 = ${att1}
Elements that are less than 10 = ${att2}
Elements that are 10 = ${att3}`)

//task 14
const arrF = [5, 8, 13, 1, 2]
const arrS = [9, 3, 67, 1, 0]
const arrN = []
for (let i = 0; i < arrF.length || i < arrS.length; i++) {
    arrN.push(Math.max(arrF[i], arrS[i]))
}
console.log(arrF)
console.log(arrS)
console.log(arrN)

//task 15

function firstDuplicate(arr) {
    for (const i of arr) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return arr[i];
    }
    return -1;
}

console.log(firstDuplicate(['abc', 7, 7, 0, 5, 'abc']))

//task 16
function getDuplicate(arr) {
    let newarr = []
    for (const i of arr) {
        if (!newarr.includes(i) && arr.indexOf(i) !== arr.lastIndexOf(i)) newarr.push(i);
    }
    return newarr;


}
console.log(getDuplicate([0, -4, -7, 0, 5, 10, 45, -7, 0]))


//task 17 /*
function reverseStringWords(str) {
    let words = str.trim().split(" ");
    let reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = words[i].split("").reverse().join("");
        reversedWords.push(reversedWord);
    }
    let reversedString = reversedWords.join(" ");

    return reversedString;
}

console.log(reverseStringWords("Hello World"));

//task 18


function getEvens(x, y) {
    const array = []
    let min = Math.min(x, y)
    let max = Math.max(x, y)
    for (let i = min; i <= max; i++)
        if (i % 2 === 0) array.push(i)

    return array
}

console.log(getEvens(60, 20))

//task 19
function getMultipleOf5(x, y) {
    let array = []
    let min = Math.min(x, y)
    let max = Math.max(x, y)
    for (let i = min; i <= max; i++) {
        if (i % 5 === 0) array.push(i)
    }
    if (x > y) array.reverse()

    return array


}
console.log(getMultipleOf5(50, 20))

//task 20
function fizzBuzz(x, y) {
    let array = []
    let min = Math.min(x, y)
    let max = Math.max(x, y)
    for (let i = min; i <= max; i++)
        if (i % 3 === 0 && i % 5 === 0) array.push('FizzBuzz')
        else if (i % 5 === 0) array.push('Buzz')
        else if (i % 3 === 0) array.push('Fizz')
        else array.push(i)
    return array.join(' | ')
}

console.log(fizzBuzz(9, 6))