import { Component, OnInit } from '@angular/core';
import {Book} from '../books.model';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  book: Book;
  constructor(private data: DataService, private router: Router) {
    if (this.data.getSelectedBook() === undefined) {
      this.router.navigate(['books']);
    }
  }

  ngOnInit() {
    this.book = this.data.getSelectedBook();
  }

}
