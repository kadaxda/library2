let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    if(read == true) {
        this.read = "Already read"
    } else {
        this.read = "Not read yet"
    }
}

function addBookToLibrary(author, title, pages, read) {
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
}
let authorInput, titleInput, pagesInput, readInput;
let pressed;


const newBookForm = document.querySelector("#newBookForm")
const newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener("click", (e) => {
    
    console.log(pressed)
    if(pressed == true) {
        return;
    }
    
    pressed = true;
    
    let container = document.createElement("div");
    container.classList.add("readContainer")

    let div = document.createElement("div");
    newBookForm.appendChild(div);

    let authorText = document.createElement("p");
    authorText.textContent = "Author: ";
    div.appendChild(authorText)

    authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    div.appendChild(authorInput)

    let titleText = document.createElement("p");
    titleText.textContent = "Title: ";
    div.appendChild(titleText)

    titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    div.appendChild(titleInput) 

    let pagesText = document.createElement("p");
    pagesText.textContent = "Pages: ";
    div.appendChild(pagesText)

    pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "text");
    div.appendChild(pagesInput) 

    div.appendChild(container);

    let readText = document.createElement("p");
    readText.textContent = "Read: ";
    container.appendChild(readText)

    readInput = document.createElement("input");
    readInput.setAttribute("type", "checkbox");
    readInput.classList.add("readInput")
    container.appendChild(readInput)

    
    let addBookBtn = document.createElement("input");
    addBookBtn.setAttribute("type", "button")
    addBookBtn.setAttribute("value", "Add book to my Library")
    container.appendChild(addBookBtn)
    addBookBtn.classList.add("addBookBtn")
    
    addBookBtn.addEventListener("click", () => {
        let tempReadInput;
        if(readInput.checked == true) {
            tempReadInput = true;

        } else {
            tempReadInput = false;
        }
        addBookToLibrary(authorInput.value, titleInput.value, pagesInput.value, tempReadInput )
        
        authorInput.value = "";
        titleInput.value = "";
        pagesInput.value = "";
        readInput.checked = false;

        display();
    })
    
})
let wasFinished = false;
const bookDisplayContainer = document.querySelector("#bookDisplayContainer")
function display() {
    

    let a = 0;
    if(a = 1) {
        let allBooks = document.querySelectorAll(".newBook");
        allBooks.forEach((book) => {
            bookDisplayContainer.removeChild(book)
        })
    }

    for(let i = 0; i<myLibrary.length; i++) {
        a = 1;
        let book = document.createElement("div");
        book.classList.add("newBook")
        bookDisplayContainer.appendChild(book);
            let authorText = document.createElement("p");
            authorText.textContent = `Author: ${myLibrary[i].author}`;
            book.appendChild(authorText)

            let titleText = document.createElement("p");
            titleText.textContent = `Title: ${myLibrary[i].title}`;
            book.appendChild(titleText)

            let pagesText = document.createElement("p");
            pagesText.textContent = `Pages: ${myLibrary[i].pages}`;
            book.appendChild(pagesText)

            let readText = document.createElement("p");
            readText.textContent = `Read: ${myLibrary[i].read}`;
            book.appendChild(readText)

            let finishedBtn = document.createElement("input");
            finishedBtn.setAttribute("type", "checkbox");
            finishedBtn.classList.add("finishedBtn")
            book.appendChild(finishedBtn)

            
            if(myLibrary[i].read == "Already read") {
                finishedBtn.checked = true;
                book.classList.toggle("green")
            }

            finishedBtn.addEventListener("CheckboxStateChange", (e) =>{
                if(readText.textContent == "Read: Not read yet") {
                    readText.textContent = "Read: Already read"
                    myLibrary[i].read = "Already read"
                    book.classList.toggle("green")
                } else {
                    readText.textContent = "Read: Not read yet"
                    myLibrary[i].read = "Not read yet"
                    book.classList.toggle("green")
                }
            })



            let deleteBtn = document.createElement("input");
            deleteBtn.setAttribute("type", "button");
            deleteBtn.setAttribute("value", "Delete")
            deleteBtn.classList.add("deleteBtn")
            book.appendChild(deleteBtn)

            deleteBtn.addEventListener("click", (e) =>{
                myLibrary.splice(i, 1)

                console.log(myLibrary)
                display()
            })
    }
}




