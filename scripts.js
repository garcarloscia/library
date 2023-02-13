let myLibrary = [];

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
    
};

function printMyLibrary(){
    container.innerHTML = '';    
    myLibrary.forEach((element, index) => {

        let card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        let cardTittle = document.createElement('h3');
        cardTittle.textContent=`${element.tittle}`;
        card.appendChild(cardTittle);

        let cardAuthor = document.createElement('div');
        cardAuthor.textContent=`by ${element.author}`;
        card.appendChild(cardAuthor);    
        
        let cardPages = document.createElement('div');
        cardPages.textContent=`Pages: ${element.pages}`;
        card.appendChild(cardPages);

        let cardRead = document.createElement('div');
        let readStatus = document.createElement('button');
        readStatus.classList.add('readStatus');
        readStatus.textContent='Change status';
        let readReport = "";
        if (element.read){readReport='Already read'}else{readReport='Not read'};
        cardRead.textContent=`Read: ${readReport}`;
        card.appendChild(cardRead);
        cardRead.appendChild(readStatus);
        document.querySelector('.readStatus').addEventListener("click", function() {
            myLibrary[index].read = !myLibrary[index].read;
            printMyLibrary();
        });

        let cardBorrar = document.createElement('button');
        cardBorrar.classList.add('borrar');
        cardBorrar.textContent= 'Remove';
        card.appendChild(cardBorrar);
        document.querySelector('.borrar').addEventListener("click", function() {
            myLibrary.splice(index, 1);
            printMyLibrary();
        });

        let cardEditar = document.createElement('button');
        cardEditar.classList.add('card');
        cardEditar.textContent= 'Edit';
        card.appendChild(cardEditar);
    });
}

const container = document.querySelector('#container');//para las cards
const form = document.querySelector("form");
const formTittle = document.querySelector("#tittle");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");

form.addEventListener("submit", event => {
    event.preventDefault();
    addBookToLibrary();  
});










