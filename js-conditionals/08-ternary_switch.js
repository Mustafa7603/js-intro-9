gender = 'male'
let fname = gender === 'female' ? 'Emma' : 'Alex'
console.log(fname);

//

let number = 1;
number % 2 === 0 ? console.log('EVEN') : console.log('ODD')

//
let num2 = 5
num2 > 0 ? console.log('POSITIVE') : num2 < 0 ? console.log('NEGATIVE') : console.log(0);

let mock_score = 80
let mood = mock_score >= 70 ? 'GREAT' : 'GOOD'
console.log(mood)


// the number will be either 1,2 or 3
let num = 2
if (num === 1) letter = "A";
else if (num === 2) letter = "B"
else letter = "C"

//2


//3
const date = new Date()
let day = date.getDay()
switch (day) {
    case 0:
    case 6:
        console.log("WEEKEND")
        break;
    default:
        console.log("WEEKDAY");
}

let r1 = Math.floor(Math.random() * 100) + 1;
if(r1 <= 25)console.log('FRIST')
else if(r1<= 50)console.log('SECOND')
else if(r1 <= 75)console.log('THIRD')
else console.log('FOURTH')



////make sure switch agument is true!!! switch always uses === compairson
let r1 = Math.floor(Math.random() * 100) + 1;
switch(true){
    case r1 >= 75:
    console.log("FOURTH")
    break
    case r1 >= 50:
    console.log("THIRD")
    break
    case r1 >= 25:
    console.log("THIRD")
    break
    default: 
    console.log('First')
}

    console.log(r1)