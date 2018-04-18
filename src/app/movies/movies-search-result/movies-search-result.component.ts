import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FetchMoviesService} from '../fetch-movies.service';
import {SearchMovie} from '../searchMovies.modal';

@Component({
  selector: 'app-movies-search-result',
  templateUrl: './movies-search-result.component.html',
  styleUrls: ['./movies-search-result.component.css']
})
export class MoviesSearchResultComponent implements OnInit, OnDestroy {
  movieName: string;
  moviesList: SearchMovie[] = [];
  page = 1;

  constructor(private activatedRoute: ActivatedRoute, private fetchMovies: FetchMoviesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.movieName = params.name;
      }
    );
    const data = (query: string) => {
      this.fetchMovies.setUrl(query);
      const load = this.fetchMovies.getData();
      load.subscribe(
        (result: SearchMovie[]) => {
          this.moviesList = result;
        }
      );
    };

    data(this.movieName);
    this.fetchMovies.reload.subscribe(
      (value: string) => {
        data(value);
      }
    );
  }

  openMovie(i: number) {
    const query = '' + this.moviesList[i].id;
    this.router.navigate(['movies', 'view', query]);
  }

  next() {
    this.page = this.page + 1;
    const dummyArray = this.moviesList.slice(0, 16);
    this.moviesList = this.moviesList.slice(16);
    this.moviesList.push(...dummyArray);
  }

  previous() {
    this.page = this.page - 1;
    const i = this.moviesList.length - 16;
    const dummyArray = this.moviesList.slice(i);
    this.moviesList = this.moviesList.slice(0, i);
    this.moviesList.unshift(...dummyArray);
  }

  ngOnDestroy() {
    this.fetchMovies.reload.unsubscribe();
  }

}
