import {NgModule} from '@angular/core';
import {MoviesComponent} from './movies.component';
import {MoviesHomeComponent} from './movies-home/movies-home.component';
import {MoviesCategoriesComponent} from './movies-home/movies-categories/movies-categories.component';
import {MoviesSearchResultComponent} from './movies-search-result/movies-search-result.component';
import {MoviesViewComponent} from './movies-view/movies-view.component';
import {MoviesRoutingModule} from './movies.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesHomeComponent,
    MoviesSearchResultComponent,
    MoviesViewComponent,
    MoviesCategoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule {}
