class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</td>`
  
    list.appendChild(row);

  }

  removeBookFromList(target) {
    if (target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }

  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(message, classname) {
    const div = document.createElement('div');
    div.className = `alert ${classname}`
    console.log(div);
  
    div.appendChild(document.createTextNode(message));
  
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
  
    container.insertBefore(div, form);
  
    setTimeout(function(){
      document.querySelector('.alert').remove()
    }, 5000);
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    let books;
    books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

  }

  static displayBooks() {
    const books = Store.getBooks();
    const ui = new UI();
    books.forEach(function(book){
      ui.addBookToList(book);
    })


  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index){
      if(book.isbn === isbn) {
        books.splice(index, 1)
      }
    })

    localStorage.setItem('books',JSON.stringify(books))


  }
}

// DOM event listener
document.addEventListener('DOMContentLoaded', Store.displayBooks())


//Event listeners
document.getElementById('book-form').addEventListener('submit', 
  function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    // Validate fields
    if (title === '' || author === '' || isbn === ''){
      ui.showAlert('Please enter all fields.', 'error');
    } else {
      ui.addBookToList(book);

      //Show alert
      ui.showAlert('Bood added sucessfully', 'success');

      //Clear the fields
      ui.clearFields();
    }
    //console.log(title, author, isbn)
    e.preventDefault();
  }
)

document.querySelector('#book-list').addEventListener('click', 
  function(e){
    const ui = new UI();
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.removeBookFromList(e.target);
    
  }
)
