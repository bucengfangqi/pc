import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentHotNewsComponent } from './document-hot-news.component';

describe('DocumentHotNewsComponent', () => {
  let component: DocumentHotNewsComponent;
  let fixture: ComponentFixture<DocumentHotNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentHotNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentHotNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
