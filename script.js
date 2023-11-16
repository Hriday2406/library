// Selectors
let books = document.querySelector('.container');
let bookTitle = document.querySelector('.book-title');
let bookAuthor = document.querySelector('.book-author');
let bookPages = document.querySelector('.book-pages');
let bookPagesRead = document.querySelector('.book-pagesRead');
let bookreadStatus = document.querySelector('.book-readStatus');


// State
const myLibrary = [{title:"Title 1", author:"Author 1", pages:"101", pagesRead:"51", readStatus:"" }, {title:"Title 2", author:"Author 2", pages:"102", pagesRead:"102", readStatus:"checked" }];
let bookPointer = 0;


// On Mount
function Book(title, author, pages, pagesRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
    if(pages == pagesRead){
        this.readStatus = "checked";
    }
    else {
        this.readStatus = "";
    }
}


// Handlers
function addBookToLibrary(){        // TEMPORARY
    let title = prompt("Enter Title of the book :");
    let author = prompt("Enter Author of the book :");
    let pages = prompt("Enter No. of pages in the book :");
    let pagesRead = prompt("Enter No. of pages you have read :");

    let tempBook = new Book(title, author, pages, pagesRead);

    myLibrary.push(tempBook);
    displayLibrary();
}

function displayLibrary(){
    while(bookPointer < myLibrary.length){
        let code = `
        <div class="card" id="book${bookPointer}">
            <h2 class="book-title">${myLibrary[bookPointer].title}</h2>
            <div class="book-data">
                <span>By :</span><span class="book-author">${myLibrary[bookPointer].author}</span>
            </div>
            <div class="book-data">
                <span>Pages :</span><span class="book-pages">${myLibrary[bookPointer].pages}</span>
            </div>
            <div class="book-data">
                <span>Pages Read :</span><span class="book-pagesRead">${myLibrary[bookPointer].pagesRead}</span>
            </div>
            <div class="card-svg">
                <label class="switch">
                    <input type="checkbox" class="book-readStatus" ${myLibrary[bookPointer].readStatus}>
                    <div class="slider"></div>
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
        </div>
        `;
        books.innerHTML += code;
        bookPointer++;
    }
}


// Events












