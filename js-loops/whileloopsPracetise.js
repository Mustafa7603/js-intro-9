/*let i = 0
while(i <= 50) {
    console.log(i);
    i+=2;
};

let i = 0
 while(i <= 25){
    console.log(i * 2)
    i++
}

// breaking infinite loops

for(let j = 1; j < 0; j++){
    console.log(j);
    if(j === 25) break;
};
*/
let countEven = 0
for(let i = 1; i <= 10; i++){
if(i % 2 === 0) countEven++
else continue; 
}
console.log(countEven) ///counts all even numbers between 1- 10

let start = 1
let countE = 0
while(start <=10){
    if(start % 2 === 0) countE++
    start++   //-------becareful where you put start++ 
}

console.log(countE) ///counts all even numbers between 1- 10 using while


let sum = 0
let i = 3
while(i <=7){
    sum += i;
    i++
    
}

console.log(sum)


///DO WHILE
