const { generateRandomNumber } = require("../utils/MathHelper");


let att = 0
let rNum;

do{ rNum = generateRandomNumber(1, 10)
    att++;
}while(rNum % 2 !== 0);

console.log(`We found an even number after ${att} times which is ${rNum}`)

let att1 = 0;
let rNum1;

while(true) {
    rNum1 = generateRandomNumber(1, 10);
    att1++;

    if(rNum1 % 2 === 0)
    break;
}
console.log(`We found an even number after ${att1} times which is ${rNum1}`)

let att2 = 0
let rNum2;

for( ; ; ){
    rNum2 = generateRandomNumber(1, 10)
    att2++;

    if(rNum2 % 2 === 0) break;
}

console.log(`We found an even number after ${att2} times which is ${rNum2}`)


// function countEven(start, end){
    let count = 0;

    for(let i = start; i <= end; i++){
        if(i % 2 == 0)
    }



// we dont want to see 6 and 13

for(let i = 1; i <=15; i++){
    if(i === 6 || i === 13) continue;
console.log(i)
}
// dont see 
for(let i = 1; i <=15; i++){
    if(i === 6 || i === 13) continue;
    else if(i === 14) break;
console.log(i)
}


//
    