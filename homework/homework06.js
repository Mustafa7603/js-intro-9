// task 1 
function noSpace(string) {
    let arr = []
    for (const letter of string)
        if (letter.trim()) arr.push(letter)

    return arr.join('')
}
console.log(noSpace(""))
console.log(noSpace("Javascript"))
console.log(noSpace("    Hello   "))
console.log(noSpace(" Hello World   "))

//task 2

function replaceFirstLast(string) {
    let mid = string.slice(1, -1)
    if (string.trim().length < 2) return '""'
    return string.at(-1) + mid + string.at(0)


}
console.log(replaceFirstLast(""))
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("Tech Global"))
console.log(replaceFirstLast("A"))
console.log(replaceFirstLast("    A      "))


// task 3
function hasVowel(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (const letter of string)
        if (vowels.includes(letter.toLowerCase())) return true

    return false
}


console.log(hasVowel("Javascript"))
console.log(hasVowel("Tech Global"))
console.log(hasVowel("1234"))


// task 4

function checkAge(number) {
    let age = new Date().getFullYear() - number
    if (age <= 0 || age >= 120) return "AGE IS NOT VALID"
    if (age < 16) return "AGE IS NOT ALLOWED"


    return "AGE IS ALLOWED"
}

console.log(checkAge(2015))
console.log(checkAge(2007))
console.log(checkAge(2050))
console.log(checkAge(1920))
console.log(checkAge(1800))

// task 5
function averageOfEdges(a, b, c) {
    let max = Math.max(a, b, c)
    let min = Math.min(a, b, c)

    return (max + min) / 2
}

console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6))
console.log(averageOfEdges(-2, -2, 10))

// task 6
function noA(Array) {
    for (let word = 0; word < Array.length; word++)
        if (Array[word][0] === 'a' || Array[word][0] === 'A') Array[word] = '###'
    return Array
}

console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"]))

// task 7

function no3and5(array) {
    for (let i = 0; i < array.length; i++)
        if (array[i] % 3 === 0 && array[i] % 5 === 0) array[i] = 101;
        else if (array[i] % 5 === 0) array[i] = 99
        else if (array[i] % 3 === 0) array[i] = 100

    return array

}
console.log(no3and5([7, 4, 11, 23, 17]))
console.log(no3and5([3, 4, 5, 6]))
console.log(no3and5([10, 11, 12, 13, 14, 15]))




//task 8

function isPrimes(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0)
            return false
    return true
}
function countPrimes(array) {
    let count = 0
    for (let num of array)
        if (isPrimes(num)) count++
    return count
}


console.log(countPrimes([-10, -3, 0, 1]))
console.log(countPrimes([7, 4, 11, 23, 17]))
console.log(countPrimes([41, 53, 19, 47, 67]))

// task 9

function removeDuplicates(array) {
    const newarr = []
    for (let i = 0; i < array.length; i++)
        if (newarr.indexOf(array[i]) === -1)
            newarr.push(array[i])

    return newarr
}

const removeDuplicates = arr => {
    return arr.reduce((result, el) => {
        if(!result.includes(el)) result.push(el)
        return result;
        
    }, [])
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))

//task 10
function isDateFormatValid(string) {
    let month = string.split('/').at(0)
    let day = string.split('/').at(1)
    let year = string.split('/').at(2)
    if (year > 9999) return false
    if (day > 31) return false
    if (month > 13) return false
    if (string.at(2) === '/' && string.at(5) === '/') return true
    else return false


}

console.log(isDateFormatValid(""))
console.log(isDateFormatValid("15/30/2020"))
console.log(isDateFormatValid("10-30-2020 "))
console.log(isDateFormatValid("10.30.2020"))
console.log(isDateFormatValid("5/30/2020"))
console.log(isDateFormatValid("05/30/2020 "))
console.log(isDateFormatValid("10/2/2020"))
console.log(isDateFormatValid("10/02/2020 "))



//task 11 

function secondMax(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr.length <= 1) return arr[i]
        else if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }

    }
    return secondMax;
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMax([3, 4, 5, 6]))
console.log(secondMax([10]))

function secondMin(array) {
    let min = Number.MAX_VALUE
    let secondMin = Number.MAX_VALUE
    for (const num of array) {
        if (array.length <= 1) return num
        else if (num < min) {
            secondMin = min
            min = num

        }
        else if (num < secondMin && num !== min) {
            secondMin = num
        }
    }
    return secondMin
}
console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMin([3, 4, 5, 6]))
console.log(secondMin([10]))

function mostRepeated(arr) {
    const count = {};

    for (const item of arr) {
        count[item] = (count[item] || 0) + 1;
    }

    let mostRepeatedElement;
    let highestCount = -1;
    for (const key in count) {
        if (count[key] > highestCount) {
            mostRepeatedElement = key;
            highestCount = count[key];
        }
    }

    return mostRepeatedElement;
}

console.log(mostRepeated([5, 5, 5, 2, 2, 2, 2]))
console.log(mostRepeated([7, 4, 4, 4, 4, 23, 23, 23]))
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))

console.log(mostRepeated([10]))
console.log(mostRepeated(["TechGlobal"]))


function mostRepeated(arr) {
    const countMap = {}
    let mostCount = 0;
    let mostCounted;
    
    for (const element of arr) {
        if(!countMap[element]) countMap[element] = 1; // this is creating a object 4:1, 7:1, 23: 3
        else countMap[element]++
    
    if(countMap[element] > mostCount){
        mostCounted = element;
        mostCount = countMap[element]
    }
}
    return mostCounted
}

console.log(mostRepeated([7, 4, 4, 4, 4, 23, 23, 23]))