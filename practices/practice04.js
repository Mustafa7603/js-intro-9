const {CharacterHelper} = require('../utils/charhelper.js')

function sameNum(num1, num2){
if (num1 === num2) 
return 'true';
else return 'false'
}

console.log(sameNum(0, 0))

let t2character = " "
if (t2character.charCodeAt() <= 57 && t2character.charCodeAt() >= 48)
console.log(`${t2character} is a digit`)
else if (t2character.charCodeAt() >= 65 && t2character.charCodeAt() <=90)
console.log(`${t2character} is a letter`)
else if (t2character.charCodeAt() >= 97 && t2character.charCodeAt() <= 122)
console.log(`${t2character} is a letter`)
else console.log('Invaid Input');

let t3character = "a"
 t3character.charCodeAt() >= 65 && t3character.charCodeAt() <=90
? console.log(`${t3character} is a uppercase letter`)
: (t3character.charCodeAt() >= 97 && t3character.charCodeAt() <= 122)
? console.log(`${t3character} is a lowercase letter`)
: console.log('INVAID INPUT')

let t4 = '*'
if (t4.charCodeAt() <= 57 && t4.charCodeAt() >= 48 || (t4.charCodeAt() >= 97 && 
t4.charCodeAt() <= 122) || t4.charCodeAt() === 32 || (t4.charCodeAt() >= 65 && 
t4.charCodeAt() <=90))
console.log(`"${t4}" is not a special character`)
else console.log(`"${t4}" is a special character`)

/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t5character = 'U';
let t5ascii = t5character.charCodeAt(0);

if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    // I will check if it is vowel or not
    if('aeiouAEOUI'.includes(t5character)) {
        console.log(`"${t5character}" is a vowel`);
    }
    else {
        console.log(`"${t5character}" is not a vowel`);
    }
}
else {
    console.log('INVALID INPUT')
}


if('aeiouAEOUI'.includes(t5character)) {
    console.log(`"${t5character}" is a vowel`);
}
else if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    console.log(`"${t5character}" is not a vowel`);
}
else {
    console.log('INVALID INPUT')
}