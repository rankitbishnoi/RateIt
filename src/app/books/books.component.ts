import { Component, OnInit } from '@angular/core';
import {FetchBooksService} from './fetch-books.service';
import {DataService} from './data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [DataService, FetchBooksService]
})
export class BooksComponent implements OnInit {

  constructor(private router: Router, private fetchData: FetchBooksService) { }

  ngOnInit() {
  }

  searchBooks(query: string) {
    this.fetchData.reload.next('reload');
    this.router.navigate(['books', 'result', query]);
  }
}
