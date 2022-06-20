let myLibrary = [];
const form = document.querySelector('.book-form');
function book(name, author, pages,  haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(name, author, pages,  haveRead) {
    const newBook = new book(name, author, pages,  haveRead); 
    myLibrary.push(newBook); //adding to array 

    const mainTable = document.querySelector('.main-table');
    const tableRow = document.createElement('tr');
    mainTable.append(tableRow);

    for (i = 0; i < Object.keys(newBook).length; i++){
        const tableData = document.createElement('td');
        tableData.textContent = Object.values(newBook)[i];
        tableRow.append(tableData);
    }
}

function getFormValues(){
    const object = Array.from(document.querySelectorAll('.book-form input'))
    .reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
    return Object.values(object);
}

const showFormButton = document.querySelector('.show-form-button');
showFormButton.addEventListener("click", () => {
    
    form.hidden = !form.hidden;
})

const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener("click", () => {
    const values = getFormValues();
    values[3] = (document.querySelector('#read').checked)? "Yes" : "No";
    addBookToLibrary(values[0], values[1], values[2], values[3]);

    const formValues = document.querySelectorAll('.book-form input');
    for (let i = 0; i < formValues.length; i++) {
        formValues[i].value = '';
    }
    form.hidden = true;

})
//Adding few books
addBookToLibrary("By the Blade","Tim Russel", 255, "No");
addBookToLibrary("The Hobbit","J.R.R Tolkien", 299, "Yes");
addBookToLibrary("The Witcher","Andrzej Sapkowski ", 359, "Yes");


