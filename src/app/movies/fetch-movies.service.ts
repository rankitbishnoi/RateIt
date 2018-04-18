import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SearchMovieResult} from './searchMovies.modal';
import {Subject} from 'rxjs/Subject';
import {Movies} from './movies.modal';

@Injectable()
export class FetchMoviesService {
  API_KEY = '5eb4fa874a253b20bfef153e3608b8e9';

  nowPlayingURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.API_KEY + '&language=en-US&page=1';
  topRatedURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.API_KEY + '&language=en-US&page=1';
  popularURL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_KEY + '&language=en-US&page=1';
  upcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.API_KEY + '&language=en-US&page=1';

  searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.API_KEY + '&language=en-US&query=';
  searchURL2 = '&page=1&include_adult=false';

  getMovieURL = 'https://api.themoviedb.org/3/movie/';
  getMovieURL2 = '?api_key=' + this.API_KEY + '&language=en-US';

  url: string;

  reload: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  loadUrl(type: string) {
    if (type === 'Now Playing') {
      this.url = this.nowPlayingURL;
    } else if (type === 'Upcoming') {
      this.url = this.upcomingURL;
    } else if (type === 'Top Rated') {
      this.url = this.topRatedURL;
    } else if (type === 'Popular') {
      this.url = this.popularURL;
    }
  }

  getData() {
    return this.http.jsonp(this.url, 'callback').map(
        (data: SearchMovieResult) => {
          return data.results;
        }
      );
  }

  setUrl(query: string) {
    this.url = this.searchURL + query + this.searchURL2;
  }

  setMovieUrl(id: string) {
    this.url = this.getMovieURL + id + this.getMovieURL2;
  }

  loadMovie() {
    return this.http.jsonp(this.url, 'callback')
      .map(
        (data: Movies) => {
          return data;
        }
      );
  }

}
