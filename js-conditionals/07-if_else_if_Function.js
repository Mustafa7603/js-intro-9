function divisible5(num1){
    if(num1 % 5 === 0){
     return true
    }
    else {
        return false
    }
} 

console.log(divisible5(6))

function fooBar(num){
 if(num % 5 === 0 && num % 7 === 0) return 'foobar'
 else if (num % 5 === 0) return 'foo';
 else if (num % 7 === 0) return 'bar';
return num;
}
console.log(fooBar(70))

function getGrade(grade){
    if(grade >= 90) return "A"
    else if (grade >= 80) return "B"
    else if (grade >= 70) return "C"
    else if (grade >= 60) return "D"
    return "F"
}

console.log(getGrade(70))