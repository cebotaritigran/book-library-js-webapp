let bookLibrary = [];

const books = document.querySelector('.books-grid');

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    return [this.title, this.author, this.pages];
}

function addBookToLibrary(event) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const book = new Book(title, author, pages)

    bookLibrary.push(book);

    for (let i = bookLibrary.length - 1; i < bookLibrary.length; i++) {
        const node = document.createElement('p');
        const book = document.createTextNode(bookLibrary[i]);
        const removeButton = document.createElement('button');
        const readButton = document.createElement('button');
        const div = document.createElement('div');

        readButton.textContent = 'Not Read';
        readButton.setAttribute('class', 'read-button')
        readButton.setAttribute('value', 'false');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('class', 'remove-button');
        removeButton.setAttribute('value', i);

        div.setAttribute('id', i);
        div.setAttribute('class', 'card');


        // apparently this works to look into tommorow
        // i could have finished this much sooner
        readButton.addEventListener('click',() => {
            readButton.classList.toggle('have-read');
        })

        node.appendChild(book);
        div.appendChild(node);
        div.appendChild(readButton)
        div.appendChild(removeButton);
        books.appendChild(div);
    }
    event.preventDefault();
    form.style.visibility = 'hidden';
}

const readButton = document.querySelectorAll('.read-button');
for (let i = 0; i < readButton.length; i++) {
    readButton[i].addEventListener('click', () => {
        readButton[i].classList.toggle('have-read');
    }, { once: true })
}

const removeButton = document.querySelectorAll('.remove-button');
if (bookLibrary.length > 0) {
    for (let k = 0; k < bookLibrary.length; k++) {
        removeButton[k].addEventListener('click', () => {
            position = parseInt(removeButton[k].value);
            let positionText = position.toString();
            bookLibrary.splice(position, 1);
            const toRemove = document.getElementById(positionText);
            if (toRemove) {
                toRemove.remove();
            }
            console.log(bookLibrary.length)
        }, { once: true })
    }
}

// books.addEventListener('click', function(e) {
//     if(e.target.classList.contains('read-button')){}
    
// })

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