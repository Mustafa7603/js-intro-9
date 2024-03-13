function firstlastWord(string){
let newArr = []
let str = string.split(' ')
newArr.push(str.at(-1), str.at(0))

return newArr.join('')
}

console.log(firstlastWord("Hello"))