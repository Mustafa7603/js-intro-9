





find()  /// finds the frist element that is true--- number.find(num => num > 50)
findlast()  //
findIndex()
findLastIndex()


const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA']
console.log(cities.find(x => x.length === 4))
console.log(cities.findLast(x => x.length === 6))
console.log(cities.findIndex(x => x === 'LA'))
console.log(cities.find(x => x.includes('i')))
console.log(cities.findLast(x => x.length === 4))


some() // returns true or false if one or more is 
every()// if everything is true or false 

const numbers = [-5, 0, 5, 10, 23, -10];
console.log(numbers.some(x => x % 5 ===0))
console.log(numbers.every(x => x >= 0))
console.log(numbers.some(x => x < 0))


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
console.log(fruits.reduce( (sum, fruit) => fruit.toLowerCase().includes('apple') ? sum + 1 : sum , 0))
console.log(fruits.reduce( (sum, fruit) => fruit.toLowerCase().includes('i') ? sum + 1 : sum , 0))
console.log(fruits.reduce( (sum, fruit) => fruit.toLowerCase().at(-1).includes('e') ? sum + 1 : sum , 0))


/*
Requirement:
Write a function named as min() which takes an array as an argument and returns the 
smallest element when invoked.
 
Examples:
min([0, 3, -9,  5, 8])      -> -9
min([-2, 0, -7, 10, -5])    -> -7
min([1, 2, 3, -2])          -> -2
min([-5, -2])               -> -5
*/

function min(arr){
    arr.reduce((minn, number) => )
}
