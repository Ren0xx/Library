let myLibrary = [];
const form = document.querySelector('.book-form');
function book(name, author, pages,  haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.toDelete = '';
}
// book.prototype.changeReadStatus = function(){
//     this.haveRead = !this.haveRead;
// }

function addBookToLibrary(name, author, pages,  haveRead) {
    const newBook = new book(name, author, pages,  haveRead); 
    myLibrary.push(newBook); //adding to array 

    const mainTable = document.querySelector('.main-table');
    const tableRow = document.createElement('tr');
    tableRow.dataset.id = myLibrary.length;
    mainTable.append(tableRow);

    for (i = 0; i < Object.keys(newBook).length - 2; i++){
        const tableData = document.createElement('td');

        tableData.textContent = Object.values(newBook)[i];
        tableRow.append(tableData);
    }
    //Adding read/not-read button
    const readButtonData = document.createElement('td');
    const readButton = document.createElement('button');
    readButton.textContent = Object.values(newBook)[3];
    readButton.classList = (readButton.textContent === 'Yes')? 'read-button': 'not-read-button';
    readButtonData.append(readButton);
    tableRow.append(readButtonData);
    //Adding delete button
    const deleteButtonData = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList = 'deleteButton';
    deleteButtonData.append(button);
    tableRow.append(deleteButtonData);

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
    const errorHeading = document.querySelector('#error-heading');
    values[3] = (document.querySelector('#read').checked) ? "Yes" : "No";
    if (!values.includes('')){
         addBookToLibrary(...values);

        const formValues = document.querySelectorAll('.book-form input');
        for (let i = 0; i < formValues.length; i++) {
            formValues[i].value = '';
        }
        form.hidden = true;
        errorHeading.hidden = true;
    }
    else{
        errorHeading.hidden = false;

    }
   

})
const mainTable = document.querySelector('.main-table');
mainTable.addEventListener('click', (e) =>{
    if (e.target.className === 'deleteButton'){
        e.target.parentNode.parentNode.remove();
    }
    else if(e.target.className === 'read-button'){
        e.target.classList = 'not-read-button';
        e.target.textContent = 'No';

    }
    else if(e.target.className === 'not-read-button'){
        e.target.classList = 'read-button';
        e.target.textContent = 'Yes';
    }
})

//Adding few books
addBookToLibrary("By the Blade","Tim Russel", 255, "No");
addBookToLibrary("The Hobbit","J.R.R Tolkien", 299, "Yes");
addBookToLibrary("The Witcher","Andrzej Sapkowski ", 359, "Yes");
