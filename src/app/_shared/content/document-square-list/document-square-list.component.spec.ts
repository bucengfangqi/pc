import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSquareListComponent } from './document-square-list.component';

describe('DocumentSquareListComponent', () => {
  let component: DocumentSquareListComponent;
  let fixture: ComponentFixture<DocumentSquareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSquareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSquareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
