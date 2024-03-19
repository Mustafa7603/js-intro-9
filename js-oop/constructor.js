/*const student_john = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge() {
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
}
}
const student_Jane = {

    fName: 'Jane',
    lName: 'Doe',
    age: 23,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge() {
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
}
}
const student_Alex = {

    fName: 'Alex',
    lName: 'Smith',
    age: 30,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge() {
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
}}

const student_Morgan = {
    fName: 'Morgan',
    lName: 'Smith',
    age: 19,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge() {
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
}}
*/


// ^^ NOT EFFICENT//

function Student(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;

}



const student_John = new Student()
const student_Jane = new Student()
const student_Alex = new Student()
const student_Morgan = new Student()

function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity; 
}

const product1 = new Product('Remote', 10, 6);
const product2 = new Product('Monitor', 100, 5);
const product3 = new Product('Laptop', 1000, 3);
const product4 = new Product('Phone', 500, 10);


