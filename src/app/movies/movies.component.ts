import { Component, OnInit } from '@angular/core';
import {FetchMoviesService} from './fetch-movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [FetchMoviesService]
})
export class MoviesComponent implements OnInit {

  constructor(private router: Router, private fetchMovies: FetchMoviesService) { }

  ngOnInit() {
  }

  searchMovies(query: string) {
    this.fetchMovies.reload.next(query);
    this.router.navigate(['movies', 'result', query]);
  }

}
