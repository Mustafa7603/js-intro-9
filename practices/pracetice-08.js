class Author {
    constructor(firstName, lastName, country, books) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.books = books
    }
    getfullname() {
        return `${this.firstName} ${this.lastName}`

    }

    getBooks() {
        return this.books
    }
}

class Book {
    constructor(title, genre, page) {
        this.title = title
        this.genre = genre
        this.page = page
    }
}

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694)
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768)
const book3 = new Book('A Storm of Swords ', 'Epic Fantasy', 973)

const author1 = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3])
console.log(author1.getfullname())
for (const book of author1.getBooks()) {
    console.log(book)
}




function Author01(firstName, lastName, country, books) {
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.books = books
}

Author01.prototype.getfullname = function () {
    return `${this.firstName} ${this.lastName}`

}

Author01.prototype.getBooks = function () {
    return this.books
}


function Book01(title, genre, page) {

    this.title = title
    this.genre = genre
    this.page = page
}


const book01 = new Book01('A Game of Thrones', 'Epic Fantasy', 694)
const book02 = new Book01('A Clash of Kings', 'Epic Fantasy', 768)
const book03 = new Book01('A Storm of Swords', 'Epic Fantasy', 973)

const author01 = new Author01('George R. R.', 'Martin', 'United States', [book01, book02, book03])

console.log(author01.getfullname())
for (const book of author01.getBooks()) {
    console.log(book)
}