//for(initialization; termination operation; update.) // expressions not arguement
/*
for(let i = 1; i <= 10; i++){
    console.log(i)
};

for(let i = 0, i <=10, i+= 2){
    console.log(i)
}   
*/

for(let i = 50; i >= 0; i-=10){
    console.log(i)
}

for(let i = 100; i >=0; i--){
    console.log(i)
}

for(let i = 0; i <=50; i ++){
    if (i % 2 === 0 )
    console.log(i)
} /// to much proformance

for(let i = 0; i <= 25; i++){
    console.log(i * 2)
}

for(let i = 0; i <= 10; i++){
    console.log(i * 5)
}

//---------------------------------------------------------------
/*let sum = 0
for(let i = 1; i <=5; i++){
    sum += i;
}

console.log(sum)*/
// FINDING THE SUM OF NUMBERS FROM 10 TO 15 == 75   
let sum = 0
for(let i = 10; i <=15; i++){
    sum += i;
    
}
//dont put consolelog in the loop

console.log(sum)

/*let school = 'TechGlobal School'

for(let i = 0; i <= 16; i++){
    
    console.log(school[i])
}
*/

let school = 'TechGlobal School'

for(let i = 0; i < school.length; i++){
    
    console.log(school[i])
}

let sch = 'TechGlobal School'
let count0 = 0
for(let i = 0; i < sch.length; i++){
    if(sch[i].toLowerCase() === 'o') count0++;
}
console.log(count0)


//or
const {generateRandomNumber} = require('../utils/MathHelper.js')

let randomNumber = generateRandomNumber(1, 10);
/*
for(let i = 1; i <= randomNumber; i++){
    if (i % 2 !== 0 )
    
    console.log(i)*/
//print all the numbers between 2 randoms numbers
let r1 = generateRandomNumber(1, 10);
let r2 = generateRandomNumber(1, 10);
let max = Math.max(r1, r2)
let min = Math.min(r1, r2)
console.log(r1, r2)

for(let i = min; i <= max; i++){
    console.log(i)
}