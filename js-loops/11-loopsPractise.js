// Find the first city that has the odd length  -> Chicago
/*const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
let firstodd;
for(const i of cities){
    if ( i.length % 2 !== 0) {
        firstodd = i;
    break;
    }
}
console.log(firstodd) 


const newcity = []
for(const i of cities){
    if(i.length > 5)  newcity.push(i)
}
console.log(newcity) */


const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

const cityWithI = []
for(const city of cities){
    if(city.toLowerCase().includes('i')) cityWithI.push(city)
}
console.log(cityWithI)