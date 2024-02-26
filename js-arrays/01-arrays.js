//creating arrays
//1. 
const arr1 = [];

//2. 
const arr2 = new Array()


const array1 = ['Alex', 'Jon']
console.log(array1.push('Max')) // 3
console.log(array1) // all 3 names

const cities = ['Chicago', 'Rome', 'Berlin', 'Tokyo'];
// how to retrieve array elements

console.log(cities[3]) //tokyo
let tokyo = cities[3];


console.log(cities[-2])//undefined
console.log(cities[5])//undefined

console.log(cities.at(-1))//tokyo
console.log(cities.at(5))//undefined

//how to update an existing element
cities[1] = 'Milan'

const var1 = []
const var2 = 25
const var3 = 'John'

console.log(Array.isArray(var1)) // true
console.log(Array.isArray(var2)) // false
console.log(Array.isArray(var3)) // false

console.log(typeof var1) //object
console.log(typeof var2) // number
console.log(typeof var3) // string

//static vs nonStatic
//global invoke==static
//variable invoke ==non static

let name = 'John'
let sentence = 'I like Arrays'

const arr4 = name.split('');
const arr5 = sentence.split(' ');

console.log(arr4); // getting a array in return [ 'J', 'o', 'h', 'n' ]
console.log(arr5); // [ 'I', 'like', 'Arrays' ]

// how do you make sure a variable is a array??

let smth = []
console.log(Array.isArray(smth)); //true


const numbers = [100, 50, 25, 200, 500];
//first element is always at the index of zero
//last element is always at the index of array.length-1
console.log(numbers[numbers.length -1])
console.log(numbers.at(-1));


//----------------------------------------------------------

//adding removing elements

const names = ['Alex', 'John']
names.push('Jane', 'Maria')
console.log(names) ////PUSH adds to the end of the array

// removing elements
names.pop() //removes last element only the last element one at a time.
console.log(names)

const names1 = ['Alex', 'John']
//names1.shift()  //--removes the frist element
//names1.unshift()  //---ADDS !! to the 1st element can add multiple

console.log(names1.shift()) // returns removed element

indexOf() //check index
includes() // check and returns boolean
lastIndexOf() // check last index

//-------------------------------------------------------------

const nums = [5, 10, 5, 10, 25, 100, 77]
console.log(nums.includes(5)) //true

console.log(nums.indexOf(5)); // 0
console.log(nums.lastIndexOf(5)); // 2


console.log(nums.includes(5) && nums.includes(7)) 
console.log(nums.includes(10, nums.length / 2)) /// start looking for numbers
//after half the indexes

//-------------------------------------------------

const ar1 = [1, 2], ar2 = [55, 56], ar3 = [101, 102, 103];
console.log(ar1.concat(ar2, ar3))

console.log([...ar1, ...ar2, ...ar3]); //spead operator

//----------------------------------------------------
const fruits = ['apples', 'oranges', 'grapes', 'bananas']
console.log(fruits.reverse())

//* how to have your array reversed keeping the original order
 const numm = [1, 2, 3, 4, 5]
 const numbersCopy = [...numm] //must put ...
numbersCopy.reverse();
console.log(numm);
console.log(numbersCopy)
//------------------------------------------------------
// slice(), splice() completely different methods

const animals = ['Cat', 'Dog', 'Cow', 'Monkey', 'Bird']
console.log(animals.slice(1, 3)) // dog cow
console.log(animals.slice(2)) // cow monkey bird
console.log(animals.slice(-3)) // cow monkey bird
console.log(animals.slice(-5, -2)) // cow monkey bird
console.log(animals.slice(-2, -4)) // []

const animal1 = ['Cat', 'Dog', 'Cow', 'Monkey', 'Bird']
console.log(animal1.splice(1, 2, 'Rabbit', 'Cat', 'Lion'))
console.log(animal1)
console.log(animal1.splice(1, 2)) //START FROM 1, REMOVE 2 ELEMENTS
//SHOWS US THE REMOVED ONES if console logged, 

console.log(animal1) //changes the original array

console.log(animal1.splice(1, 0, 'Rabbit', 'Cat', 'Lion')) //1st arguments says where to start
//2nd arguement see how many elements you want to remove
//3rd arguemnt see how many you want to add