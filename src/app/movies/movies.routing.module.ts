import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesHomeComponent} from './movies-home/movies-home.component';
import {MoviesSearchResultComponent} from './movies-search-result/movies-search-result.component';
import {MoviesViewComponent} from './movies-view/movies-view.component';
import {MoviesComponent} from './movies.component';

const moviesRoutes: Routes = [
  {path: 'movies', component: MoviesComponent, children: [
      {path: '', component: MoviesHomeComponent},
      {path: 'result/:name', component: MoviesSearchResultComponent},
      {path: 'view/:id', component: MoviesViewComponent}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
