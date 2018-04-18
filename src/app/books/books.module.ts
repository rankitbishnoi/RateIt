import {NgModule} from '@angular/core';
import {BooksHomeComponent} from './books-home/books-home.component';
import {BooksComponent} from './books.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {FilterComponent} from './filter/filter.component';
import {ViewBookComponent} from './view-book/view-book.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BooksRoutingModule} from './books.routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BooksComponent,
    SearchResultComponent,
    ViewBookComponent,
    BooksHomeComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule {}
