// functions-- block of code used to run a task, write it once and use it many times
{}// know as block refering to functions

function startTheClass() {
    console.log('Online students! Please send "here" in the chat!');
    console.log('RECAP');
    console.log('Start with the new topic!');


}
 
startTheClass(); //invoke functio

///random fuctions--------------------------------------------------
function generateRandomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}
console.log(generateRandomNumber(3, 5));
console.log(generateRandomNumber(50, 100));
// if numbers are switched around more safe

function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

let randomNumber = generateRandomNumber(-5, 5);
console.log(randomNumber)
console.log(randomNumber > 0)



//static functions
Math.min(3, 5, 6); //3
Math.max(3, 5, 6); //6

'John'.slice(1, 3); //'oh'
'james'.startsWith('Ja'); true




