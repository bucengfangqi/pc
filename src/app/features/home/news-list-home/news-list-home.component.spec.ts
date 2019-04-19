import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListHomeComponent } from './news-list-home.component';

describe('NewsListHomeComponent', () => {
  let component: NewsListHomeComponent;
  let fixture: ComponentFixture<NewsListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
