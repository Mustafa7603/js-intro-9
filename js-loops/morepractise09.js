const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countp = 0
for(const number of numbers){
    if(number <= 0) countp++
    
}
console.log(countp)
let count2 = 0
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] <= 0) count2++
}
console.log(count2)

let countE = 0
for(const number of numbers){
    if(number >= 0 && number % 2 === 0) countE++
}
console.log(countE)

let counte = 0
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0) counte++
}
console.log(counte)

const number = [3, 4, 7, 3, 2, 2, 7]

sum = 0
for(let i = 0; i <= number.length; i++){
    if(number.indexOf(i) % 2 === 0) sum += number.indexOf(i)
}
console.log(sum)
