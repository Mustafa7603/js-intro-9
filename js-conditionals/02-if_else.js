const {generateRandomNumber} = require('../utils/MathHelper.js');





let ran3 = generateRandomNumber(-10, 10)
console.log(ran3)
if (ran3 < 0){
    console.log('The number is NEGATIVE ')
}
else if (ran3 >= 1) {
    console.log('The number is POSITIVE')
}
else {
    console.log('The number is ZERO')
}


