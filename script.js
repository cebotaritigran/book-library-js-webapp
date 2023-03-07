let bookLibrary = [];

const books = document.querySelector('.books-grid');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    return [this.title, this.author, this.pages, this.read];
}

function addBookToLibrary(event) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    const book = new Book(title, author, pages, read)
    console.log(book)
    bookLibrary.push(book);
    for (let i = bookLibrary.length - 1; i < bookLibrary.length; i++) {
        const node = document.createElement('p');
        const book = document.createTextNode(bookLibrary[i]);
        node.appendChild(book);
        books.appendChild(node);
    }
    event.preventDefault();
    form.style.visibility = 'hidden';
}

const submitBook = document.querySelector('.book-add-button');
submitBook.addEventListener('click', addBookToLibrary)

const showForm = document.querySelector('.show-form');
const form = document.querySelector('.button-container')
showForm.addEventListener('click', () => {
    if (form.style.visibility == 'hidden') {
        form.style.visibility = 'visible';
    } else {
        form.style.visibility = 'hidden';
    }
})