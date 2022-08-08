/* eslint-disable max-classes-per-file */
import Book from '../modules/bookConstructor.js';
import Storage from '../modules/localStorage.js';
import BooksToDom from '../modules/domDisplay.js';
import Time from '../modules/luxonTime.js';

const form = document.querySelector('form');
const navlist = document.querySelector('.nav-list');
const navadd = document.querySelector('.nav-add');
const navcontact = document.querySelector('.nav-contact');
const mainAddBook = document.querySelector('.main-addBook');
const mainList = document.querySelector('.main-list');
const mainContactUs = document.querySelector('.main-contactus');

Time.displayTime();

navlist.addEventListener('click', () => {
  mainList.classList.remove('hide');
  mainAddBook.classList.add('hide');
  mainContactUs.classList.add('hide');
});
navadd.addEventListener('click', () => {
  mainList.classList.add('hide');
  mainAddBook.classList.remove('hide');
  mainContactUs.classList.add('hide');
});
navcontact.addEventListener('click', () => {
  mainList.classList.add('hide');
  mainAddBook.classList.add('hide');
  mainContactUs.classList.remove('hide');
});

// boooks constructor

// books storeage

// domdisplay

document.addEventListener('DOMContentLoaded', BooksToDom.displayBooksInDom);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);

  BooksToDom.domBooksList(book);

  Storage.addBooksToStorage(book);

  Storage.checkEmptyList();

  BooksToDom.clearField();
});

document.querySelector('#tbody').addEventListener('click', (e) => {
  BooksToDom.deleteBook(e.target);

  Storage.removeBooksFromStorage(
    e.target.parentElement.previousElementSibling.textContent,
  );
  Storage.checkEmptyList();
});
