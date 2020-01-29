import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSrsComponent } from './card-srs.component';

describe('CardSrsComponent', () => {
  let component: CardSrsComponent;
  let fixture: ComponentFixture<CardSrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
