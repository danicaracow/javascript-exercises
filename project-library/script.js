function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const submitBook = document.querySelector("#submit-book");
const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const form = document.querySelector("#book-form");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");



const cardsContainer = document.querySelector(".container");

// submitBook.addEventListener("click", (event) => addBookToLibrary(event));
newBook.addEventListener("click", () => dialog.showModal());

form.addEventListener("submit", function(e) {
    addBookToLibrary(e);
});

function addBookToLibrary(event) {
    event.preventDefault();  // Prevents the default form submission behavior
    dialog.close();
    const book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    myLibrary.push(book);

    displayBooks(myLibrary);
    clearForm();
}

function displayBooks(library){
    clearContainer();

    library.forEach(element => {
        const card = document.createElement("div");
        const testTitle = document.createElement("p");
        const testAuthor = document.createElement("p");
        const testPages = document.createElement("p");
        const readLabel = document.createElement("label");
        const switchCont = document.createElement("div");
        const switchInput = document.createElement("input");
        const switchSpan = document.createElement("span");
        // const testRead = document.createElement("p");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";

        deleteBtn.addEventListener("click", () =>{
            removeBook(cardsContainer, card);
        });
        readLabel.setAttribute("class", "switch-container");
        switchCont.setAttribute("class", "switch");
        switchInput.setAttribute("type", "checkbox");
        switchSpan.setAttribute("class", "slider round");



        cardsContainer.insertBefore(card, cardsContainer.firstChild);
        
        card.appendChild(testTitle);
        testTitle.textContent = element.title;
        card.appendChild(testAuthor);
        testAuthor.textContent = element.author;
        card.appendChild(testPages);
        testPages.textContent = element.pages;
        // card.appendChild(testRead);
        // testRead.textContent = element.read? "Read": "Not read";
        card.appendChild(readLabel);
        readLabel.appendChild(switchCont);
        switchCont.appendChild(switchInput);
        switchCont.appendChild(switchSpan);

        card.appendChild(deleteBtn);

        

    });
}

function clearForm(){
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputRead.checked = false;
}

function clearContainer(){
    cardsContainer.innerHTML = "";
}

function removeBook(bookContainer, book){
    const index = (myLibrary.length - 1) - Array.prototype.indexOf.call(bookContainer.children, book);
    console.log(index);
    // bookContainer.removeChild(bookContainer.children[index]);
    myLibrary.splice(index, 1);
    displayBooks(myLibrary);
    console.log(myLibrary);
}

const book1 = {
    title: "Harry Potter",
    author: "Cocki",
    pages: 227,
    read: false
}

const myLibrary = [];

// displayBooks(myLibrary);