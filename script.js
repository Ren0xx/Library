let myLibrary = [];

function Book(name, author, pages,  haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(name, author, pages,  haveRead) {
    myLibrary.push(new Book(name, author, pages,  haveRead));
}
function displayBooks(myLibrary){
    for (item of myLibrary){
        const mainTable = document.querySelector('.main-table');
        const tableRow = document.createElement('tr');
        mainTable.append(tableRow);
        for (i = 0; i < Object.keys(item).length; i++){
            const tableData = document.createElement('td');
            tableData.textContent = Object.values(item)[i];
            tableRow.append(tableData);
        }

    }
}



addBookToLibrary("By the Blade","Tim Russel", 255, "No");
addBookToLibrary("The Hobbit","J.R.R Tolkien", 299, "Yes");

displayBooks(myLibrary);