
const car = {
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'
};

console.log(Object.keys(car))//[ 'color', 'year', 'make', 'model' ]
console.log(Object.values(car))//[ 'red', 2023, 'BMW', 'X7' ]
console.log(Object.entries(car))
/*[
    [ 'color', 'red' ],
    [ 'year', 2023 ],
    [ 'make', 'BMW' ],
    [ 'model', 'X7' ]
  ]*/

  for(const key of Object.keys(car)){
    // console.log(car[key]) //red 2023 BMW X7

  }

  for(const key of Object.values(car)){
    console.log(key)
  }
  /*red
2023
BMW
X7
*/

  for(const key of Object.entries(car))
  console.log(key)
/*[ 'color', 'red' ]
[ 'year', 2023 ]
[ 'make', 'BMW' ]
[ 'model', 'X7' ]
*/


for(const [key, value] of Object.entries(car)){
    console.log(key)
    console.log(value)
}