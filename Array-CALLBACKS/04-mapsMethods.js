/*const sentences = ['Good morning', 'I like arrays', 'It is Sunday']
const newarr = sentences.map( sent => sent.split(' ')[0]) /// get first word

console.log(newarr)
*/
const sentences = ['Good morning', 'I like arrays', 'It is Sunday']

const newarr = sentences.map( sent => sent.split(' ').at(-1))

console.log(newarr)

//get last word

const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];  // tofixed returns as string!
const newsal = salaries.map(x => Number(x.toFixed(2)))
console.log(newsal)