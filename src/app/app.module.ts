import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MoviesModule} from './movies/movies.module';
import {BooksModule} from './books/books.module';
import {AppRouterModule} from './app.router.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    BooksModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
