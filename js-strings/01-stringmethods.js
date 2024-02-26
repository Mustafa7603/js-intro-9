let fname = 'John';

let sizeFname = fname.length; // returns with how many charcters are in the string == 4
fname.length

console.log(fname.length)

// interview question/
// 3 ways to concat
//i can use + and spaces with ''
// backticks and interporlation
// or .concat method

let company = 'Techglobal'

company.indexOf('G');
console.log(company.indexOf(1)); // 5
company.lastIndexOf('l'); // 9

//if the index does not exsist comes back as -1 with the indexOf search
//you cant get the middle if there is 3 numbers of a word

//trimming
let greeting = '   Good Morning     '
console.log(greeting.trimStart());
console.log(greeting.trimEnd())
console.log(greeting.trim())

                                      
//Extracting partial strings

let language = 'JavaScript'
console.log(language.slice(4, 10)); // Java

let quote = 'Practice makes it perfect!'
console.log(quote.slice(0, 8))
console.log(quote.slice(18, 25))
console.log(quote.slice(9))

console.log(quote.slice(-3)) //ct!
console.log(quote.slice(-5, -7)) //if left side is greater than the right it will be empty " ""

//substring()
let obj = 'Table'
console.log(obj,substring(0,3))
// difference is the negatives, if you negative on substring will consider it as 0 so you will get the whole thing

const shoppingListArray = shoppinglist.split(', ');

console.log('Mouse | Computer | Keyboard'.split(' | '))
// replace() replaceALL()

let str = 'I like apple and pineapple';
let strReplaced = str.replace('apple', 'orange')
let strReplacedAll = str.replaceAll('apple', 'orange')
console.log(str)
console.log(strReplaced)
console.log(strReplacedAll)

