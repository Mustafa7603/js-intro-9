const {generateRandomNumber} = require('../utils/MathHelper.js');


/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/
let num1 = generateRandomNumber(1, 12)

console.log(num1)
if(num1 === 12 || num1 === 1 || num1 == 2){
    console.log("Winter")
}
else if(num1 === 3 || num1 === 4 || num1 === 5){
    console.log("Spring")
}
else if (num1 === 6 || num1 === 7 || num1 === 8){
    console.log("Summer")
}
else {
    console.log("Fall")
}