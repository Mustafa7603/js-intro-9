let credentials = `
    {
        "username": "TechGlobal",
        "password": "1234",
        "language": "JS"
    }
`;

credentials.slice(credentials.indexOf('username'))


const obj = JSON.parse(credentials);

console.log(typeof credentials); // 'string'
console.log(typeof obj); // 'object'

console.log(obj);
console.log(obj.username);
console.log(obj.password);


const student = {
    id: 123,
    fname: 'Alex',
    lname: 'Smith',
    dob: '11/11/2000',
    email: 'alex@gmail.com'
};

let studentJson = JSON.stringify(student);

console.log(typeof student); // 'object'
console.log(typeof studentJson); // 'string'

console.log(student);
console.log(studentJson);

/*Mutable: the value (state) of the data type can be changed
Immutable: the value (state) of the data type can NOT be changed


let: mutable 
const: immutable 


All the primitives are immutable; meaning their value (state) cannot be changed 

Array is mutable, but some array methods help to get immutable results
Object is mutable but some array methods help to get immutable results

NOTE: Overall, reference types are mostly mutable


JSON: JavaScript Object Notation 
JSON supports:
Strings: "Hello, World!"
Numbers: 42 or 3.14
Booleans: true or false
Arrays: ["apple", "banana", "orange"]
Objects: {"key": "value", "age": 25}
Null: null

NOTE: It does not support undefined, functions or other reference types 


We can convert JSON to JS Object and visa versa 

EXAMPLE:
const obj = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false
}

JS Object to JSON -> stringify() method -> Serialization
const jsonObj = JSON.stringify(obj); // This returns a new string json 


JSON into JS Object -> parse() method -> Deserialization
const jsObj = JSON.parse(jsonObj); // This returns a new JS object */