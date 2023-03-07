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
    bookLibrary.push(book);
    console.log(bookLibrary)
    for (let i = bookLibrary.length - 1; i < bookLibrary.length; i++) {
        const node = document.createElement('p');
        const book = document.createTextNode(bookLibrary[i]);
        const removeButton = document.createElement('button');
        const div = document.createElement('div');
        removeButton.textContent = 'Remove'
        removeButton.setAttribute('class', 'remove-button')
        removeButton.setAttribute('value', i)
        div.setAttribute('id', i);
        div.setAttribute('class', i);
        node.appendChild(book);
        div.appendChild(node);
        div.appendChild(removeButton);
        books.appendChild(div);
    }
    event.preventDefault();
    form.style.visibility = 'hidden';

    const removeButton = document.querySelectorAll('.remove-button');
    if (bookLibrary.length > 0) {
        for (let k = 0; k < removeButton.length; k++) {
            removeButton[k].addEventListener('click', () => {
                position = parseInt(removeButton[k].value);
                let tst = position.toString();
                bookLibrary.splice(position, 1);
                const toRemove = document.getElementById(tst);
                if (toRemove) {
                    toRemove.remove();
                }
                console.log(bookLibrary)
            })
        }
    }
}




const submitBook = document.querySelector('.book-add-button');
submitBook.addEventListener('click', addBookToLibrary);



const showForm = document.querySelector('.show-form');
const form = document.querySelector('.button-container')
showForm.addEventListener('click', () => {
    if (window.getComputedStyle(form).visibility == 'hidden') {
        form.style.visibility = 'visible';
    } else {
        form.style.visibility = 'hidden';
    }
})