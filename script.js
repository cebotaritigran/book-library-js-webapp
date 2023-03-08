// array to store objects
let bookLibrary = [];

const books = document.querySelector('.books-grid');

// new constructor for book
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    return [this.title, this.author, this.pages];
}


// event to add divs to container
function addBookToLibrary(event) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const checked = document.querySelector('#read').checked;
    const book = new Book(title, author, pages)
    console.log(book[0]);
    bookLibrary.push(book);
    const titleBook = document.createTextNode(book[0]);
    const authorBook = document.createTextNode(book[1]);
    const pagesBook = document.createTextNode(book[2]);

    for (let i = bookLibrary.length - 1; i < bookLibrary.length; i++) {
        const nodeTitle = document.createElement('p');
        const nodeAuthor = document.createElement('p');
        const nodePages = document.createElement('p');
        const removeButton = document.createElement('button');
        const readButton = document.createElement('button');
        const div = document.createElement('div');


        readButton.setAttribute('class', 'read-button')
        readButton.setAttribute('value', 'false');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('class', 'remove-button');
        removeButton.setAttribute('value', i);

        div.setAttribute('id', i);
        div.setAttribute('class', 'card');

        if (checked) {
            readButton.classList.remove('have-read');
            readButton.textContent = 'Read';
        } else {
            readButton.classList.add('have-read');
            readButton.textContent = 'Not Read';
        }

        readButton.addEventListener('click', () => {
            if (readButton.value == 'false') {
                readButton.classList.remove('have-read');
                readButton.textContent = 'Read';
                readButton.value = 'true';
            } else {
                readButton.classList.add('have-read');
                readButton.textContent = 'Not Read';
                readButton.value = 'false';
            }

        })

        removeButton.addEventListener('click', () => {
            position = parseInt(removeButton.value);
            let positionText = position.toString();
            bookLibrary.splice(position, 1);
            const toRemove = document.getElementById(positionText);
            if (toRemove) {
                toRemove.remove();
            }
        })

        nodeTitle.appendChild(titleBook);
        nodeAuthor.appendChild(authorBook);
        nodePages.appendChild(pagesBook);
        div.appendChild(nodeTitle);
        div.appendChild(nodeAuthor)
        div.appendChild(nodePages)
        div.appendChild(readButton)
        div.appendChild(removeButton);
        books.appendChild(div);
    }
    event.preventDefault();
    form.style.visibility = 'hidden';
}

const submitBook = document.querySelector('.form');
submitBook.addEventListener('submit', addBookToLibrary);


// showing form on click by changing visibility
const showForm = document.querySelector('.show-form');
const form = document.querySelector('.new-book-form')
showForm.addEventListener('click', () => {
    if (window.getComputedStyle(form).visibility == 'hidden') {
        form.style.visibility = 'visible';
    } else {
        form.style.visibility = 'hidden';
    }
})