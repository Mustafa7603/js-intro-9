
console.log(Math.PI)
console.log(Math.max(3, 5)); //5
console.log(Math.min(3, 5)); //3

// result of Math.abs() will never be negative

console.log(Math.abs(123.9)) //5

// pow()
console.log(Math.pow(5, 2))
//-----for Decimals
// Math.ceil() rounds up always
// Math.floor() down
// Math.trunc()
// parse.int(), floor(), trunc(), all get rid of the decimal

console.log(Number.parseInt(1.01));

//sqrt()  square root of 25 = 5


console.log(Math.random()) // creates a random number between 0-1

// create amd random number between 5 - 8



console.log(Math.random() * 4)
console.log(Math.floor(Math.random() * 4)); 
console.log(Math.floor(Math.random() * 4 + 5)); // between 5- 8 random

// if you want to genrate randoms number between 123-267 
console.log(Math.random() * (267 - 123 + 1)) + 123
console.log(Math.floor(Math.random() * (267 - 123 + 1)) + 123);



for(let i = 1; i <= 1000; i++) {
    console.log(Math.floor(Math.random() * (267 - 123 + 1)) + 123)
};


let r1 = Math.floor(Math.random() * 10) + 1
console.log(r1)
console.log(r1 ** 2)