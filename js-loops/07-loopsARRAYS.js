const names = ['John', 'Jane', 'Alex', 'Max', 'james']
let countJ1 = 0
for(const name of names){
    if(name.toLowerCase().startsWith('j')) countJ1++

}
console.log(countJ1)


let count = 0

for(let i = 0; i < names.length; i++){
    if(names[i].toUpperCase()[0] === 'J') count++
}

console.log(count)