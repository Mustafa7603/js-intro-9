// task 1
console.log(`The random number * 5 = ${(Math.floor(Math.random() * (50 - 0 + 1)) + 0) * 5}`);

// task 2
console.log(Math.floor(Math.random() * (10)) + 1);
let r1 = (Math.floor(Math.random() * (10)) + 1);
let r2 = (Math.floor(Math.random() * (10)) + 1);
console.log(r1 , r2)
console.log(`Min number = ${Math.min(r2, r1)}`);
console.log(`Max number = ${Math.max(r2, r1)}`);
console.log(`Difference = ${Math.abs(r2 - r1)}`);
// task 3
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
let r3 = (Math.floor(Math.random() * (100 - 50 + 1)) + 50);
console.log(r3)
console.log(`The random number % 10 = ${r3 % 10}`);

// task 4
let v1 = (Math.floor(Math.random() * (10)) + 1);
let v2 = (Math.floor(Math.random() * (10)) + 1);
let v3 = (Math.floor(Math.random() * (10)) + 1);
let v4 = (Math.floor(Math.random() * (10)) + 1);
let v5 = (Math.floor(Math.random() * (10)) + 1);
console.log(v1, v2, v3, v4, v5);
console.log((v1 * 5) + (v2 * 4) + (v3 * 3) + (v4 * 2) + (v5 * 1));

// task 5
let t1 = (Math.floor(Math.random() * (25)) + 1);
let t2 = (Math.floor(Math.random() * (50 - 26 + 1 )) + 26);
let t3 = (Math.floor(Math.random() * (75 - 51 + 1)) + 51);
let t4 = (Math.floor(Math.random() * (100 - 76 + 1 )) + 76);

console.log(t1, t2 , t3, t4);

console.log(`Difference of max and min = ${Math.max(t1, t2 , t3, t4) - Math.min(t1, t2 , t3, t4)}`);
console.log(`Difference of second and third = ${Math.abs(t2 - t3)}`);
console.log(`Average of all = ${(t1 + t2 + t3 + t4) / 4}`);