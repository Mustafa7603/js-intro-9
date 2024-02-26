let sen1 = "I like apples and oranges"
let sen2 = "Java is not a scripting programming language"
let sen3 = "I don't like books"

console.log(sen1.toUpperCase(7, 12).slice(7, 12))
console.log(`${sen2.slice(0, 4) + sen2.toUpperCase(14).slice(14, 20)}`)
console.log(sen3.split("don't"))

/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/


let s1 = "Hello";

console.log(s1.length)
console.log(s1[0])
console.log(s1.at(-1));
console.log(s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u') || s1.includes('A') || s1.includes('E') || s1.includes('I') || s1.includes('O') || s1.includes('U'));

//
let s2 = "ABC"
let mid = Math.floor(s2.length / 2)

console.log(s2.at(mid))


let s3 = "javaScript"
console.log(s3[s3.length / 2 - 1] + s3[s3.length / 2]); 
console.log(s3.slice(s3.length / 2 - 1, s3.length / 2 + 1));

let t4 = 'JavaScript'  // Ja pt vaScri

console.log(t4.slice(0, 2));
console.log(t4.slice(t4.length - 2));

console.log(t4.slice(2, t4.length - 2))

let s9 = "JavaScript is nice to learn"
console.log(s9.split(' ').length)

let s9 = "JavaScript is nice to learn"  // = 5
console.log(s9.length - s9.replaceAll(' ','').length + 1)

let s8 = "I like Apple"  /// == Apple like I
let fristWord = s8.slice(0, s8.indexOf(' '));
let lastWord = s8.slice(s8.lastIndexOf(' ') + 1);
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1);
console.log(lastWord+middle+fristWord);


/// task 6

let s5 = "12ab12"

console.log((s5.slice(0, 2) === s5.slice(s5.length - 2)));

/// task 7

let s61 = "123456"
let s62 = "Blue"

console.log(s61.slice(1, s61.length -1) + s62.slice(1, s62.length -1))

// task 8

let s7 = "xxbluexx"

console.log(s7.slice(2).includes('xx') && s7.slice(s7.length -2).includes('xx')); 