//  1-create book
function bookDetails(BookName, type, date, first, last, age){
    return {
        'name': BookName,
        'ganre': type,
        'releaseDate': date,
        'writer': {
            'firstName': first,
            'lastName': last,
            'age': age
        }
    }
}

// 2-print the book details
function printDetails(book){
    console.log
               (`${book.name}\n${book.ganre}\n${book.releaseDate}\n${book.writer.firstName}\n${book.writer.lastName}\n${book.writer.age}`)
}

// 3-to change name of the book
function changeNameBook(book, newName){
    book.name = newName
}

// 4-change the release date
function changeDateBook(book, newDate){
    book.releaseDate = newDate
}

// 5-to change the ganre
function changeGanreBook(book, newGanre){
    book.ganre = newGanre
}

// 6-to change writer details
function changeWriterDetails(book, newFirstName, newLastName, newAge){
    if (newAge < 15 ||  newAge > 80) {
        throw Error ('The age of the writer are wrong!')
    } else {
    book.writer.firstName = newFirstName
    book.writer.lastName = newLastName
    book.writer.age = newAge
      }
}

// 7-create a libery
const libery = {}

// 8-add book to the libery
function addBook(newBook, libery){
    if (libery.hasOwnProperty(newBook)){
        throw  Error ('The book found in the libary ')
    } else{
        libery[newBook.name] = newBook
    }
}

// 9-add books
function addFourBooks(libery){
    addBook(bookDetails('Hello world', 'Action','07-03-2011','zvika', 'berkovich',  '22'),libery)
    addBook(bookDetails('The life', 'Tension','27-04-2022','moshe', 'barel',  '62'), libery)
    addBook(bookDetails('The sun', 'Comedy','17-06-2015','chaim', 'berko',  '32'),libery)
    addBook(bookDetails('The morning', '','19-06-2034','shlomo', 'mor',  '46'),libery)
    console.log(Object.entries(libery))
}

let y = bookDetails( 'Hello world', 'Action','07-03-2011','zvika', 'berkovich',  '22')
printDetails(y)