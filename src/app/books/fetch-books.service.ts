///<reference path="../../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {FetchedBooksApi} from './books.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FetchBooksService {
  url = 'https://www.googleapis.com/books/v1/volumes?q=';
  filter = 'ebooks';
  printType = 'all';
  orderBy = 'relevance';
  reload: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  load(query: string, page: number) {
    page = page * 10;
    const payloadHeaders = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    return this.http.get(
      this.url + query
      + '&maxResults=10&startIndex=' + page
      + '&filter=' + this.filter
      + '&printType=' + this.printType
      + '&orderBy=' + this.orderBy
      + '&key=AIzaSyBRndk8zYJZGEV941aRQ18qVzAd-iK0u9U',
      {withCredentials: false, headers: payloadHeaders}
      )
      .map(
        (books: FetchedBooksApi) => {
          return books;
        }
      );
  }

  setFilter(filter: string, orderBy: string, printType: string) {
    this.filter = filter;
    this.printType = printType;
    this.orderBy = orderBy;
  }

}
