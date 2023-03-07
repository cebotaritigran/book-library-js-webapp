let bookLibrary = ["book number 1","book number 2"];

const books = document.querySelector('.books-grid');

function Book() {

}

function addBookToLibrary() {
    for(let i = 0; i < bookLibrary.length; i++) {
        const node = document.createElement('p');
        const book = document.createTextNode(bookLibrary[i]);
        node.appendChild(book);
        books.appendChild(node);
    }
}

const button = document.querySelector('.book-add-button');
button.addEventListener('click',addBookToLibrary)