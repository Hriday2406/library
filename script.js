// Selectors
const books = document.querySelector('.container');
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPages = document.querySelector('.book-pages');
const bookNewBtn = document.querySelector('.book-new');
const bookDialog = document.getElementById('book-dialog');
const addBtn = document.getElementById('addBtn');
const dialogFields = document.querySelectorAll('.book-input');
const bookForm = document.getElementById('book-form');

// State
const myLibrary = [{id: 0, title:"Temporary Book 1", author:"Author", pages:"100", readStatus:"" }, {id: 1, title:"Temporary Book 2", author:"Author", pages:"200", readStatus:"checked" }, {id: 2, title:"Temporary Book 3", author:"Author", pages:"300", readStatus:"" }];
let bookPointer = 0;
let bookId = 3

// On Mount
function Book(title, author, pages, readStatus){
    this.id = bookId++;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = (readStatus) ? "checked" : "";
}
displayLibrary();


// Handlers
function addBookToLibrary(title, author, pages, readStatus){
    let tempBook = new Book(title, author, pages, readStatus);
    myLibrary.push(tempBook);
    displayLibrary();
}

function displayLibrary(){
    while(bookPointer < myLibrary.length){
        let code = `
        <div class="card">
            <h2 class="book-title">${myLibrary[bookPointer].title}</h2>
            <div class="book-data">
                <span>By :</span><span class="book-author">${myLibrary[bookPointer].author}</span>
            </div>
            <div class="book-data">
                <span>Pages :</span><span class="book-pages">${myLibrary[bookPointer].pages}</span>
            </div>
            <div class="card-svg">
                <label class="switch">
                    <input type="checkbox" class="book-readStatus" ${myLibrary[bookPointer].readStatus}>
                    <div class="slider" onclick="changeReadStatus(${bookPointer})"></div>
                </label>
                <svg class="deleteBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onclick="deleteBook(${bookPointer})" ><title></title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
        </div>
        `;
        books.innerHTML += code;
        bookPointer++;
    }
}

function deleteBook(id){
    myLibrary.splice(id, 1);
    let i = 0;
    if(myLibrary.length != 0)
        for(i=0; i<myLibrary.length; i++)
            myLibrary[i].id = i;
    document.querySelector('.container').innerHTML = "";
    bookPointer = 0;
    displayLibrary();
}

function changeReadStatus(id){
    const bookReadStatus = document.querySelectorAll('.book-readStatus');
    myLibrary[id].readStatus = (myLibrary[id].readStatus == 'checked') ? '' : 'checked';
}


// Events
bookNewBtn.addEventListener('click', () => {
    bookNewBtn.classList.add("book-new-alt");
    bookDialog.showModal();
});

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(dialogFields[0].value == '' || dialogFields[1].value == '' ||dialogFields[2].value == '' ||dialogFields[3].value == ''){
        alert("Enter Valid Information !!");
    }
    else {
        addBookToLibrary(dialogFields[0].value, dialogFields[1].value, dialogFields[2].value, dialogFields[3].checked);
    }
    bookForm.reset();
    bookNewBtn.classList.remove("book-new-alt");
    bookDialog.close();
})

bookDialog.addEventListener('close', () => {
    bookNewBtn.classList.remove("book-new-alt");
})









