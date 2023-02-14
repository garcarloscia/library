let myLibrary = [
    {tittle:"Energy Flash",author:"Simon Reynolds", pages:450, read:true},
    {tittle:"Angrynomics",author:"Colerman & Blyth", pages:194, read:true},
];

const container = document.querySelector('#container');
const form = document.querySelector("form");
const formTittle = document.querySelector("#tittle");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");
const showForm = document.querySelector("#new-book");
const hideForm = document.querySelector("#formbox");

printMyLibrary();

showForm.addEventListener("click", event => {
    event.preventDefault();
    hideForm.classList.toggle("hide");
});

function Book(tittle, author, pages, read) {
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newBook = new Book(
        formTittle.value,
        formAuthor.value,
        formPages.value,
        formRead.checked
    );
    myLibrary.push(newBook);
    printMyLibrary();
}

function printMyLibrary() {
    container.innerHTML = '';
    myLibrary.forEach((element, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        let cardTittle = document.createElement('h3');
        cardTittle.textContent = `${element.tittle}`;
        card.appendChild(cardTittle);

        let cardAuthor = document.createElement('div');
        cardAuthor.textContent = `by ${element.author}`;
        card.appendChild(cardAuthor);

        let cardPages = document.createElement('div');
        cardPages.textContent = `Pages: ${element.pages}`;
        card.appendChild(cardPages);

        let cardRead = document.createElement('div');
        let readStatus = document.createElement('a');
        readStatus.classList.add('readStatus');
        readStatus.textContent = 'Change status';
        let readReport = '';
        if (element.read) {
            readReport = 'Already read';
        } else {
            readReport = 'Not read';
        }
        cardRead.textContent = `Read: ${readReport}`;
        card.appendChild(cardRead);
        cardRead.appendChild(readStatus);
        readStatus.addEventListener("click", function () {
            myLibrary[index].read = !myLibrary[index].read;
            printMyLibrary();
        });

        let cardBorrar = document.createElement('a');
        cardBorrar.classList.add('borrar');
        cardBorrar.textContent = 'Remove';
        card.appendChild(cardBorrar);
        cardBorrar.addEventListener("click", function () {
            myLibrary.splice(index, 1);
            printMyLibrary();
        });

        let cardEditar = document.createElement('a');
        cardEditar.classList.add('card');
        cardEditar.textContent = 'Edit';
        card.appendChild(cardEditar);
    });
}



form.addEventListener("submit", event => {
    event.preventDefault();
    addBookToLibrary();
    hideForm.classList.toggle("hide");
});