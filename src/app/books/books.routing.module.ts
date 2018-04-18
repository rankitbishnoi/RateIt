import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksHomeComponent} from './books-home/books-home.component';
import {BooksComponent} from './books.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {ViewBookComponent} from './view-book/view-book.component';

const booksRoutes: Routes = [
  {path: 'books', component: BooksComponent, children: [
      {path: '', component: BooksHomeComponent},
      {path: 'result/:name', component: SearchResultComponent},
      {path: 'view', component: ViewBookComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
