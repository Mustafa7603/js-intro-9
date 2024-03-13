//task 1
function countPos(arr) {
    const pos = []
    for (let i = 0; i <= arr.length; i++)
        if (arr[i] > 0)
            pos.push(arr[i])

    return pos.length



}

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([0, -1, -2, -3]))

//task 2
function countA(str) {
    let count = 0
    let str1 = str.toLowerCase()
    for (let i = 0; i <= str.length; i++) 
        if (str1[i] === 'a') count++
    
    return count
}

console.log(countA("TechGlobal is a QA bootcamp"))

//task 3
function countVowels(string) {
    let count = 0
    string.toLowerCase()
    for (let i = 0; i < string.length; i++)

        if (string[i].includes('a') || string[i].includes('e') || string[i].includes('i') || string[i].includes('o')
            || string[i].includes('u')) count++

    return count
}
console.log(countVowels("JavaScript is fun"))

//task 4
function countConsonants(string) {
    let count = 0
    string.toLowerCase()
    for (let i = 0; i < string.length; i++)

        if (!string[i].includes('a') && !string[i].includes('e') && !string[i].includes('i') && !string[i].includes('o')
            && !string[i].includes('u')) count++

    return count
}
console.log(countConsonants("JavaScript is fun"))

//task 5 
function countWord(string) {
    let newstring = string.trim(' ').split(' ')
    return newstring.length
}
console.log(countWord("     Javascript is fun       "))
console.log(countWord("Cypress is an UI automation tool.    "))
console.log(countWord("1 2 3 4"))


//task 6
function factorial(number) {
    let sum = 1
    for (let i = 1; i <= number; i++)
        sum *= i

    return sum
}
console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))

//task 7

function isPalindrome(string) {
    word = string.toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(isPalindrome("radar"))
console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("civic"))


function isPasswordValid(string) {

}

//task 8
function countMultipleWords(array) {
    let count = 0
    for (const i of array) {
        if (i.trim().includes(' ')) count++
    }
    return count
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]))
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]))
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]))
console.log(countMultipleWords([]))

//task 9

function count3OrLess(string) {
    let str = string.split(' ')
    return console.log(str.filter(x => x.length <= 3).length)

}
count3OrLess("Hello")
count3OrLess("Hi John")
count3OrLess("JavaScript is fun")

//task 10
function isPrime(number) {
    if (number <= 1) 
        return false;
     for (let i = 2; i <= Math.sqrt(number); i++) 
        if (number % i === 0) 
            return false;
        return true;
}

console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(41))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))

//task 11
function add(arr1,arr2){
    let arr3 = [];
    let shortArray = arr1.length < arr2.length ? arr1 : arr2
    let longArray = arr1.length > arr2.length ? arr1 : arr2
   for(let i = 0;  i < shortArray.length; i++) {
 arr3.push(arr1[i] + arr2[i]);
    arr3.concat(longArray.slice(shortArray.length));
       
        }
    return  arr3.concat(longArray.slice(shortArray.length));
          };
    
 console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ));
 console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
 console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));




//task 12
function removeExtraSpaces(string){
    let str =  string.trim().split(' ')
    let arr = []
    for(const letter of str)
    if(letter.trim()) arr.push(letter)
    
    return arr.join(' ')
}
console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces("      Hello    World     "))
console.log(removeExtraSpaces("     JavaScript is          fun"))


//task 13
function findClosestTo10(array){
   
    if(array.includes(10))  array;
    else  array.push(10);
 
     let newarr = array.sort((a, b) => a - b)
 
     let left10 = newarr[newarr.indexOf(10) - 1];
     let right10 = newarr[newarr.indexOf(10) + 1];
 
     if(Math.abs(10 - left10) > Math.abs(10 - right10)) return right10;
     else return left10;
     }
     
     console.log(findClosestTo10([12, 10, -13, 5, 70, 15, 57] ))
     console.log(findClosestTo10([10,-13, 5, 70, 15, 57]));
     console.log(findClosestTo10([ 10,-13, 8, 12, 15, -20]));
     console.log(findClosestTo10([0, -1, -2]));

//task-14
function isEmailValid(email) {
    if (email.includes(' ')) {
        return false;
    }
    const lastpart = email.split('@');
    if (lastpart.length !== 2) {
        return false;
    }
    if (lastpart[0].length < 2) {
        return false;
    }
     const fristPart = lastpart[1].split('.');

    if (fristPart.length !== 2 || fristPart[0].length < 2) {
        return false;
    }
    if (fristPart[1].length < 2) {
        return false;
    }

    return true;
}

console.log(isEmailValid(""))
console.log(isEmailValid("@gmail.com"))
console.log(isEmailValid("johndoe@yahoo"))
console.log(isEmailValid("johndoe@.com"))
console.log(isEmailValid("a@outlook.com"))
console.log(isEmailValid("johndoe@a.com"))
console.log(isEmailValid("johndoe@@gmail.com"))
console.log(isEmailValid("johndoe@gmail.com"))

//task 15 

function isPasswordValid(password) {
    
    if (password.length < 8 || password.length > 16) {
        return false;
    }

    const digitRegex = /\d/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (!digitRegex.test(password) || !uppercaseRegex.test(password) || 
        !lowercaseRegex.test(password) || !specialCharRegex.test(password)) {
        return false;
    }
   
    if (password.includes(' ')) {
        return false;
    }
    return true;
}

console.log(isPasswordValid(""))
console.log(isPasswordValid("abcd") )
console.log(isPasswordValid("abcd1234") )
console.log(isPasswordValid("Abcd1234"))
console.log(isPasswordValid("Chicago12345US!#$%")) 
console.log(isPasswordValid("Abcd1234$"))
console.log(isPasswordValid("Chicago123$"))