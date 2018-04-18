import { Injectable } from '@angular/core';
import {Book} from './books.model';

@Injectable()
export class DataService {
  private booksList: Book[];
  private selectedBook: Book;
  constructor() { }

  setBooksList(books: Book[]) {
    this.booksList = books;
  }

  getBooksList() {
    return this.booksList;
  }

  setSelectedBook(book: Book) {
    this.selectedBook = book;
  }

  getSelectedBook() {
    return this.selectedBook;
  }


}
