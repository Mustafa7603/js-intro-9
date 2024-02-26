//info needed to make a function
//1. TASK
//2. meaningful name
//3. does it return or void( non returnable)
//4. does it take any arguements or no?
//5. static or nonstatic

function sayHi(){
    console.log("Hi");
};

sayHi();


function sayHello(name){

    console.log(`Hello ${name}!`)
}

sayHello('Mustafa');

function greet(name, greeting){
    console.log(`${greeting}, ${name}!`)
}
greet('Ali', 'Goodmorning');


//
function sum(a, b){
     return a + b;
}

console.log(sum(5, 6))


///

function product(num1, num2, num3){
    return num1 * num2 * num3

}

console.log(product(2, 4, 5));
console.log(product(3, 7, 6));
console.log(product(5, 0, 9));

//
//looooop
function strN(str, n){
    for(let i = 1; i <= n; i++)
    console.log(str);
}

strN('asdfads', 3);

////

function king(name, n){
    console.log(`${name} ${n}th!`)
}

king('Henry', 5)


///