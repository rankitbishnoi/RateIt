export class SearchMovie {
  public vote_count: number;
  public id: number;
  public video: boolean;
  public vote_average: number;
  public title: string;
  public popularity: number;
  public poster_path: string;
  public original_language: string;
  public original_title: string;
  public genre_ids: number[];
  public backdrop_path: string;
  public adult: boolean;
  public overview: string;
  public release_date: string;

  constructor(
    vote_count: number,
    id: number,
    video: boolean,
    vote_average: number,
    title: string,
    popularity: number,
    poster_path: string,
    original_title: string,
    original_language: string,
    genre_ids: number[],
    backdrop_path: string,
    adult: boolean,
    overview: string,
    release_date: string
  ) {
    this.vote_count = vote_count;
    this.id = id;
    this.video = video;
    this.vote_average = vote_average;
    this.title = title;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.original_language = original_language;
    this.original_title = original_title;
    this.genre_ids = genre_ids;
    this.backdrop_path = backdrop_path;
    this.adult = adult;
    this.overview = overview;
    this.release_date = release_date;
  }
}

export class SearchMovieResult {
  public page: number;
  public total_results: number;
  public total_pages: number;
  public results: SearchMovie[];

  constructor(page: number, total_results: number, total_pages: number, results: SearchMovie[]) {
    this.page = page;
    this.total_results = total_results;
    this.total_pages = total_pages;
    this.results = results;
  }
}
