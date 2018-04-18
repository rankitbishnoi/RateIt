import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input('componentType') componentType: string;
  @Output('queryEvent') queryEvent = new EventEmitter<string> ();
  @ViewChild('query') query: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  searchIt() {
    const query = this.query.nativeElement.value;
    this.queryEvent.emit(query);
  }

}
