const number = [3, 4, 7, 3, 2, 2, 7] //calculate the sum of the even index

sum = 0
for(let i = 0; i <= number.length; i++){
    if(i % 2 === 0) sum += number[i]
}
console.log(sum)


const num= [3, 4, 7, 3, 2, 2, 7] //calculate the product of the odd index

product = 1
for(let i = 0; i < num.length; i++){
    if(i % 2 !== 0) product *= num[i]
}
console.log(product)


/// find the multiple of the arrays at the same indexes
const arr1 = [5, 8, 2, 1, 2];
const arr2 = [9, 3, 5, 1, 0];
const arr3 = []

for(let i = 0; i < arr1.length || i < arr2.length; i++){
    arr3.push((arr1[i] * arr2[i]))
}
console.log(arr1)
console.log(arr2)
console.log(arr3)

//different length arrays
const array1 = [ 5, 8 ];
const array2 = [ 9, 3, 5, 1, 0 ];
// [ 45, 24, 5, 1, 0 ]
const array3 = [];
const shortArray = array1.length < array2.length ? array1 : array2;
const longArray = array1.length > array2.length ? array1 : array2;
for(let i = 0; i < shortArray.length; i++) {
    array3.push(array1[i] * array2[i]);
}
console.log(array3.concat(longArray.slice(shortArray.length)));
// sort numbers in decending
const a1 = [10, 3, 7]
const a2 = [3, 5, 1]
const a3 = [0, 9, 4, 3]

const allnumbers = [...a1, ...a2, ...a3]
console.log(allnumbers.sort((a, b) => b - a))

/*const nums = [-1, 1, 3, 0, 2, 6, 8]
let firstEven;
for(const i of nums){
    if ( i % 2 === 0) {
        firstEven = i;
    break;
    }
}
console.log(firstEven) */

const nums111 = [-1, 1, 3, 0, 2, 6, 8]
let firstEven;
for(const i of nums){
    if ( i % 2 === 0) {
        firstEven = i;
    break;
    }
}
console.log(firstEven) 

// sorting without using sort
const nums = [-1, 1, 3, 0, 2, 6, 8]
let biggestOdd;

for(const number of nums){
    if(number % 2 !==0 && (biggestOdd === undefined || number > biggestOdd))
     biggestOdd = number;

       
    }

console.log(biggestOdd)
