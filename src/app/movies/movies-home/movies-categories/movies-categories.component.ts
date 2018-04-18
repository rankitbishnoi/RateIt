import {Component, Input, OnInit} from '@angular/core';
import {FetchMoviesService} from '../../fetch-movies.service';
import {SearchMovie} from '../../searchMovies.modal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-categories',
  templateUrl: './movies-categories.component.html',
  styleUrls: ['./movies-categories.component.css']
})
export class MoviesCategoriesComponent implements OnInit {
  @Input('type') type: string;
  moviesList: SearchMovie[];
  page = 1;
  constructor(private fetchMovies: FetchMoviesService, private router: Router) { }

  ngOnInit() {
    this.fetchMovies.loadUrl(this.type);
    const data = this.fetchMovies.getData();
    data.subscribe(
      (result: SearchMovie[]) => {
        this.moviesList = result;
      }
    )
  }

  next() {
    this.page = this.page + 1;
    const dummyArray = this.moviesList.slice(0, 4);
    this.moviesList = this.moviesList.slice(4);
    this.moviesList.push(...dummyArray);
  }

  previous() {
    this.page = this.page - 1;
    const dummyArray = this.moviesList.slice(16);
    this.moviesList = this.moviesList.slice(0, 16);
    this.moviesList.unshift(...dummyArray);
  }

  openMovie(i: number) {
    const query = '' + this.moviesList[i].id;
    this.router.navigate(['movies', 'view', query]);
  }

}
