// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


//UI constructor
function UI() {



}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td a href="#" class="delete">X</td>`

  list.appendChild(row);


}

UI.prototype.removeBookFromList = function(target){
  if (target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}

UI.prototype.showAlert = function(message, classname){
  div = document.createElement('div');
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
    ui.removeBookFromList(e.target);
  })