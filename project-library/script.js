function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const bookInput = document.querySelector("#book-input");
const submitBook = document.querySelector("#submit-book");

console.log(bookInput);
submitBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
    [title, author, pages, read] = bookInput.value.split(",");
    bookInput.value = "";
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    displayBooks(myLibrary);
}

function displayBooks(library){
    library.forEach(element => {
        console.log(element.title + "," + element.author + "," + element.pages + "," + element.read);
    });
}

const book1 = {
    title: "Harry Potter",
    author: "Cocki",
    pages: 227,
    read: false
}

const myLibrary = [book1];

displayBooks(myLibrary);