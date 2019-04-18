import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotcaseComponent } from './hotcase.component';

describe('HotcaseComponent', () => {
  let component: HotcaseComponent;
  let fixture: ComponentFixture<HotcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
