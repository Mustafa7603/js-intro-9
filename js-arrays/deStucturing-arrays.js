
// destucturing arrays
const favMovies = ['Harry Potter','Godfather','Lord of the rings']

const [fav01, fav02, fav03] = favMovies
console.log(fav01)

const credentials = [ 'TechGlobalSchool', 'Test123', 'techglobal@gmail.com' ];

const [username, password, email] = credentials

console.log(username)
console.log(password)
console.log(email)

const numbers = [-3, 10, 0, 100, 200];
const [, ten, zero, , two_hundred] = numbers;
console.log(two_hundred);

