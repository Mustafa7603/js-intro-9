
const numbers = [10, 5, 100, 77, 50, 65, 0];
newarr = numbers.filter( num => num >= 50).length
console.log(newarr)  /// finding the numbers greater than 50! instead of using count


function countover50 (arr){
    return arr.filter(num => num >=50).length
}

console.log();
const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
hasApple = (fruits.filter(x => x.toLowerCase().includes('apple')))
hasA = (fruits.filter(x => x.toLowerCase().includes('a')).length)
hasI = (fruits.filter(x => x.toLowerCase().includes('i')).length)


console.log(hasApple)
console.log(hasA)
console.log(hasI)

find()
findlast()
findIndex()
findLastIndex()