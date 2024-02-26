let str1 = "5", str2 = "2";
console.log(`The sum of ${str1} and ${str2} is = ${Number(str1) + Number(str2)}`);
console.log(`The product of ${str1} and ${str2} is = ${Number(str1) * Number(str2)}`);
console.log(`The division of ${str1} and ${str2} is = ${Number(str1) / Number(str2)}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${Number(str1) - Number(str2)}`);
console.log(`The remainder of ${str1} and ${str2} is = ${Number(str1) % Number(str2)}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${Number(str1) ** Number(str2)}`);


///task2
let s1 = "200", s2 = "-50";
console.log(`The greatest value is = ${Math.max(Number(s1), Number(s2))}`);
console.log(`The smallest value is = ${Math.min(Number(s1), Number(s2))}`);
console.log(`The average is = ${(Number(s1) + Number(s2)) / 2}`);
console.log(`The absolute difference is = ${(Math.abs(Number(s1) - Number(s2)))}`);

//Task 3
let r1 = Math.floor(Math.random() * (50 + 1 - 1) + 1);
let r2 = Math.floor(Math.random() * (50 + 1 - 1) + 1);
console.log(r1, r2);
console.log(`The absolute difference between numbers is = ${Math.abs((r1 - r2 ))}`);

//task 4
let t1 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let t2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let t3 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let t4 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let t5 = Math.floor(Math.random() * (50 - 1 + 1) + 1);

console.log(t1, t2, t3, t4, t5);

console.log(`The max value = ${Math.max(t1, t2, t3, t4, t5)}`);
console.log(`The min value = ${Math.min(t1, t2, t3, t4, t5)}`);

//task 5
let ran1 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let ran2 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let ran3 = Math.floor(Math.random() * (100 - 50 + 1) + 50);

console.log(`The number 1 = ${ran1}`);
console.log(`The number 2 = ${ran2}`);
console.log(`The number 3 = ${ran3}`);
console.log(`The sum of number is = ${ran1 + ran2 + ran3}`)

//task 6
let a1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let a2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let a3 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(a1, a2, a3);
console.log(a1 > 25 && a2 > 25 && a3 > 25);
 

//Task 7
let name = "David";
console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name.at(0)}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The frist 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(2)}`);