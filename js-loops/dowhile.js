const { generateRandomNumber } = require("../utils/MathHelper");

let i = 1, j = 1;


do {
    console.log('This is dowhile loop')
    j++
} while(j <= 3)

//if you dont know how many times your loops is going to iterate -while or dowhile
//if you know exactly how many times your are going to iterate use -for loop

// if it is running at least once = do while
// if not while.

const gamenumber = 4;
let guessnumber;
let counter = 0;
let found = true

do{
    guessNumber = generateRandomNumber(1,10)
    counter++;
    
    console.log(guessnumber);
    
    if(counter === 5){
        console.log('you could not find the number after times! game over loser!')
        found = false;
        break;
    }
}while(guessnumber !== gamenumber)

if(found) {
let timeOrTimes = counter === 1 ? 'time' : 'times';

console.log(`The Number is found after ${counter} ${timeOrTimes}!`);
}