import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchResultComponent } from './movies-search-result.component';

describe('MoviesSearchResultComponent', () => {
  let component: MoviesSearchResultComponent;
  let fixture: ComponentFixture<MoviesSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
