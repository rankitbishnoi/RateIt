///<reference path="../../../../node_modules/rxjs/Observable.d.ts"/>
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {FetchBooksService} from '../fetch-books.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Book, FetchedBooksApi} from '../books.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy{
  booksList: Book[];
  bookName: string;
  page: number;
  fetchData: (page: number) => void;
  subscription: Subscription;

  constructor(
    private data: DataService,
    private fetchBooks: FetchBooksService,
    private Data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.page = 0;
    this.activatedRoute.params.subscribe((query: Params) => {
      this.bookName = query.name;
    });

    this.fetchData = (page: number) => {
      const load = this.fetchBooks.load(this.bookName, page);
      load.subscribe(
        (books: FetchedBooksApi) => {
          this.data.setBooksList(books.items);
          this.booksList = books.items;
        }
      );
    };

    this.fetchData(this.page);
    this.subscription = this.fetchBooks.reload.subscribe(
      (value: string) => {
        this.fetchData(this.page);
      }
    )
  }

  previousPage() {
    this.page = this.page - 1;
    this.fetchData(this.page);
    window.scroll(0, 0);
  }

  nextPage() {
    this.page = this.page + 1;
    this.fetchData(this.page);
    window.scroll(0, 0);
  }

  openBook(i: number) {
    this.data.setSelectedBook(this.booksList[i]);
    this.router.navigate(['books', 'view'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
