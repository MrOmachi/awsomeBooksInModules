import Storage from './localStorage.js';

class BooksToDom {
  static displayBooksInDom() {
    Storage.checkEmptyList();
    const books = Storage.domBooksListFromStorage();

    books.forEach((book) => BooksToDom.domBooksList(book));
  }

  static domBooksList(book) {
    const tbody = document.querySelector('#tbody');
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `
    <td>${book.author}</td>
    <td>by</td>
    <td>${book.title}</td>
    <td><a href="#" class='RemoveBtn'>Remove</a></td>
    `;
    tbody.appendChild(tableRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('RemoveBtn')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export default BooksToDom;
