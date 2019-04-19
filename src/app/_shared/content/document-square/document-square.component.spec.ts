import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSquareComponent } from './document-square.component';

describe('DocumentSquareComponent', () => {
  let component: DocumentSquareComponent;
  let fixture: ComponentFixture<DocumentSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
