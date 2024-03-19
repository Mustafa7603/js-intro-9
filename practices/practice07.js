const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,

        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
]


const agecounter = users.filter(user => user.age > 30).length
console.log(agecounter)

const citycounter = users.filter(user => user.address.city === 'Chicago').length
console.log(citycounter)
const stcounter = users.filter(user => user.address.state === 'IL').length
console.log(stcounter)
const emailcounter = users.filter(user => user.email.endsWith('@gmail.com')).length
console.log(emailcounter)


const name35 = users.filter(user => user.age < 35).map((user) => user.firstName)
console.log(name35)

const totalAge = users.reduce((count, user) => count + user.age, 0)
const avAges = totalAge / users.length

console.log(avAges)


//task 2

const appleStore = [
    {
      productName: "iPhone 14 Pro",
      quantity: 50,
      price: 1099.99,
    },
    {
      productName: "MacBook Pro 16-inch",
      quantity: 30,
      price: 2399.99,
    },
    {
      productName: "iPad Air",
      quantity: 75,
      price: 599.99,
    },
    {
      productName: "Apple Watch Series 7",
      quantity: 100,
      price: 399.99,
    },
    {
      productName: "AirPods Pro",
      quantity: 200,
      price: 249.99,
    },
  ];

  /*
You are given a JS Array below:
Find the most expensive product    -> MacBook Pro 16-inch
Find the least expensive product    -> AirPods Pro
Find the product with the biggest quantity    -> AirPods Pro
Find the product with the smallest quantity   -> MacBook Pro 16-inch
Find all the product names    -> [ 'iPhone 14 Pro', 'MacBook Pro 16-
inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
*/

const expensive = appleStore.reduce((prev, current) => (prev.price > current.price ? prev : current));
console.log(expensive.productName)

const leastexpensive = appleStore.reduce((prev, current) => (prev.price < current.price ? prev : current));
console.log(leastexpensive.productName)

const largequantity = appleStore.reduce((prev, current) => (prev.quantity > current.quantity ? prev : current));
console.log(largequantity.productName)

const productname = appleStore.map(name => name.productName)
console.log(productname)


//task 3
const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];

const cheapest = bookstore.reduce((prev, current) => (prev.price < current.price ? prev : current))
console.log(cheapest.title)

const mostexp = bookstore.reduce((prev, current) => (prev.price > current.price ? prev : current))
console.log(mostexp.title)

const isclassic = bookstore.filter(type => type.genre === 'Classic').map((type) => type.title)
console.log(isclassic)


//task 4 
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

const price1 = shoppingCart.items.reduce((count, item) => count + (item.quantity * item.price), 0) 
console.log(price1)


const brand1 = shoppingCart.items.map(x => x.specifications.brand) 
console.log(brand1)

let arr1 = []
const nameandquant = shoppingCart.items.forEach((x) => {
    arr1.push(`${x.productName}, ${x.quantity}`)
})
console.log(arr1)