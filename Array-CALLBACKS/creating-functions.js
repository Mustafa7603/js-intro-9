const greeting2 = function() {

}

const greeting3 = () => {}


function product1(x, y){
    return x*y
}
console.log(product1(3, 5))
console.log(product1(2, 0))
console.log(product1(4, 2))


const product2 = function(x, y){
    return x * y
}

console.log(product2(3, 5))

const product3 = (x, y) => {
    return x * y
}
console.log(product2(3, 5))


const nameUppercase = (string) => string.toUpperCase();

console.log(nameUppercase('mustafa'))

const names = ['mustafa', 'hicran', 'tania', 'ameer']
                //this is also aloop ''///
names.forEach(name => console.log(name.toUpperCase()));
names.forEach(x => console.log(x.toUpperCase()));