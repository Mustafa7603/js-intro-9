function fizzArray(n){
let string 
    for(let i = 0; i <= n.length; i++) i = string
       return string
        
}
    console.log(fizzArray(4))

    /*
Write a function that takes any number of arguments and return their product

product()               -> 0
product(5)              -> 5
product(2, 5)           -> 10
product(2, 5, 3)        -> 30
*/

function product(...nums){
    if(nums.length === 0) return console.log(0);
    return console.log(nums.reduce((prod, curr) => prod * curr, 1))
}

product()        
product(5)            
product(2, 5)         
product(2, 5, 3)

function favActs(top, ...rest){
    console.log('Top fav activity is', top)
        if(rest.length )
}