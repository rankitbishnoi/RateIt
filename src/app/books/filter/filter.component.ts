import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FetchBooksService} from '../fetch-books.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @ViewChild('f') fltForm: NgForm;

  constructor(private fetchBooks: FetchBooksService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const filter = form.value.filter || 'ebooks';
    const orderBy = form.value.orderBy || 'relevance';
    const printType = form.value.printType || 'all';
    this.fetchBooks.setFilter(filter, orderBy, printType);
  }

  onClear() {
    this.fltForm.reset();
    this.onSubmit(this.fltForm);
  }

}
