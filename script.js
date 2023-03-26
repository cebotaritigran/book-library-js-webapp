// array to store objects
let bookLibrary = [];

const books = document.querySelector('.books-grid');

function validateForm() {
    //saving elements to a variable
    const form = document.querySelector('.form');

    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const titleError = document.querySelector("span.errorTitle");
    const authorError = document.querySelector("span.errorAuthor");
    const pagesError = document.querySelector("span.errorPages");

    function showErrorTitle() {
        if (titleInput.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            titleError.textContent = "You need to enter a title.";
        } else if (titleInput.validity.tooShort) {
            titleError.textContent = 'too short';
        }
    }

    function showErrorAuthor() {
        if (authorInput.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            authorError.textContent = "You need to enter an author.";
        } else if (authorInput.validity.tooShort) {
            authorError.textContent = 'too short';
        }
    }

    function showErrorPages() {
        if (pagesInput.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            pagesError.textContent = "You need to enter number of pages.";
        } else if (pagesInput.validity.tooShort) {
            pagesError.textContent = 'too short';
        }
    }

    // validate on input
    titleInput.addEventListener('input', (event) => {
        if (titleInput.validity.valid) {
            titleError.textContent = '';
        } else {
            showErrorTitle();
        }
    });

    authorInput.addEventListener('input', (event) => {
        if (authorInput.validity.valid) {
            authorError.textContent = '';
        } else {
            showErrorAuthor();
        }
    });

    pagesInput.addEventListener('input', (event) => {
        if (pagesInput.validity.valid) {
            pagesError.textContent = '';
        } else {
            showErrorPages();
        }
    });


    form.addEventListener('submit', (event) => {
        if (!title.validity.valid) {
            showErrorTitle()
            showErrorAuthor()
            showErrorPages()
            event.preventDefault();
        }
    })
}
validateForm();

// new constructor for book
// function Book(title, author, pages) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     return [this.title, this.author, this.pages];
// }

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        return [this.title, this.author, this.pages];
    }
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