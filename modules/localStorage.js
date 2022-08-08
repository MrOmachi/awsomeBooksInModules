const mainEmpty = document.querySelector('.main-empty');
class Storage {
  static domBooksListFromStorage() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBooksToStorage(book) {
    const books = Storage.domBooksListFromStorage();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBooksFromStorage(title) {
    const books = Storage.domBooksListFromStorage();

    books.forEach((book, i) => {
      if (book.title === title) {
        books.splice(i, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  static checkEmptyList() {
    const books = Storage.domBooksListFromStorage();
    if (books.length === 0) {
      mainEmpty.classList.remove('hide');
    } else {
      mainEmpty.classList.add('hide');
    }
  }
}

export default Storage;
