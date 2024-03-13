/*
Create a method which takes an array as argument and returns all the even numbers from the original
array as a new array

evens( [ 1, 5, 2, 0, 6, 7 ] )   -> [ 2, 0, 6 ]
evens( [ 4, 5, 2 ] )            -> [ 4, 2 ]

*/

function evens (arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(evens([ 1, 5, 2, 0, 6, 7 ]));
console.log(evens([ 4, 5, 2 ]));