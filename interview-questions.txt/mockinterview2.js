function isPalindrome(str){
    let newarr = str.toLowerCase().split(' ')
    let reverse = newarr.reverse()
    if(reverse === newarr) 
    return true
    else return false
    }

console.log(isPalindrome('Racecar'))