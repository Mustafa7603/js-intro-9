const {isDigit} = require('./../utils/charhelper.js')
//task 1

function hasUpperCase(str){ 
    count = 0
    for(let i = 0; i < str.length; i++){
      if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) count++
    }
    if(count >= 1) return true
    else return false
 
}

console.log(hasUpperCase("javascript"))
console.log(hasUpperCase("John"))
console.log(hasUpperCase("$125.0"))
console.log(hasUpperCase(""))

//task 2
    function noDigit(str) {
        let result = '';
        for (let letter of str) {
            if (isNaN(Number(letter))) {
                result += letter;
            }
        }
        return result;
    }
    

console.log(noDigit(""))
console.log(noDigit("Javascript"))
console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149"))

//task 3
function noVowel(string){
    let str = ''
    string.toLowerCase()
    for(const letter of string)
    if(letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u')
    str += letter
    return str
}

console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))

//task 4

function no13(array){
   return array.map(num => num === 13 ? 0 : num)
   
}
console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))

//task 5
function middleInt(num1,num2,num3){
    let array = [num1,num2,num3]
    array.sort((a, b) => a - b)
    return array[1] 
}

console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1))
console.log(middleInt(-1, 25, 10))


//task 6
function sumOfDigits(str){
    let array = str.split('')
    let sum = 0
    for(const x of array){
        if(48 <= x.charCodeAt(0) && x.charCodeAt(0) <= 57)
        sum += Number(x)
    }
   return sum
}
console.log(sumOfDigits("Javascript"))
console.log(sumOfDigits("John's age is 29"))
console.log(sumOfDigits("$125.0"))
console.log(sumOfDigits(""))


// 7
function arrFactorial(arr) {
    return arr.map(num => {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    });
}
     console.log(arrFactorial([1, 2, 3 ,4]))
     console.log(arrFactorial([0, 5]))
     console.log(arrFactorial([5 ,0, 6]))
     console.log(arrFactorial([]))

function categorizeCharacters(str){
    
        let letter = ''
        let num = ''
        let special = ''
            for(const char of str){
            if(char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z'){letter += char }
            else if( char >= '0' && char <= '9'){ num += char}
        else special += char
            }
       return [letter, num, special]
}

console.log(categorizeCharacters("1234"))
console.log(categorizeCharacters("abc123$#%"))
console.log(categorizeCharacters("12ab$%3c%"))