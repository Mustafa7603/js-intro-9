//before es6
/*
function Car(year, make, model, price){
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
}

Car.prototype.drive = function (){
    console.log(`${this.year} ${this.make} ${this.model} drives.`)}
Car.prototype.stop = function (){
    console.log(`${this.year} ${this.make} ${this.model} stops.`)}


const car1 = new Car(2023, 'Tesla', 'X', 80000) 
const car2 = new Car(2023, 'BMW', 'X7', 60000) 
const car3 = new Car(2020, 'Tesla', 'Y', 27000) 

const cararr = [car1, car2, car3]

for(const car of cararr){
console.log(car)
car.drive()
car.stop()
console.log(`${car.year}, ${car.make}, ${car.model} is ${car.price}`)
}
*/

class Car {
    constructor(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
    }

    drive(){
        console.log(`${this.year} ${this.make} ${this.model} drives.`)
    }
    stop(){
        console.log(`${this.year} ${this.make} ${this.model} stops.`)
    }
}

const car1 = new Car(2023, 'Tesla', 'X', 80000) 
const car2 = new Car(2023, 'BMW', 'X7', 60000) 
const car3 = new Car(2020, 'Tesla', 'Y', 27000) 