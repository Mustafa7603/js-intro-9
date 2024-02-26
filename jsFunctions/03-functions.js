export function isEven(num){
     
    return num % 2 === 0

}
console.log(isEven(1)) ;
//// 


function isOdd(num){
     
    return num % 2 !== 0

}
console.log(isOdd(4)) ;
console.log(isOdd(3)) ;
console.log(isOdd(0)) ;
console.log(isOdd(-2)) ;
console.log(isOdd(-7)) ;

///

function initials(Fname, lName){
    return (`${Fname[0]}. ${lName[0]}.`)
}

console.log(initials('John', 'Doe'));
console.log(initials('Adam', 'Smith'));
console.log(initials('Max', 'Smith'));

///
function doubleOrTriple(str, double){
    if(double) return str + str;
    else return str + str + str;
}


function inits(fullName){
 let lastIn = fullName.indexOf(' ') + 1
    return  `${fullName.at(0)}${fullName.at(lastIn)}`
}
console.log(inits('John Doe'));
console.log(inits('Adam Smith'));
console.log(inits('Max Smith'));