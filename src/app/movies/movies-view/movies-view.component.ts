import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FetchMoviesService} from '../fetch-movies.service';
import {Movies} from '../movies.modal';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {
  movieId: string;
  movie: Movies;

  constructor(private activatedRoute: ActivatedRoute, private fetchMovies: FetchMoviesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.movieId = params.id;
        this.fetchMovies.setMovieUrl(this.movieId);
      }
    );

    const load = this.fetchMovies.loadMovie();
    load.subscribe(
      (result: Movies) => {
        this.movie = result;
      }
    );
  }

}
